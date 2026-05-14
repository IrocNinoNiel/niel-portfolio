# LedgerAI - Architecture Decisions

> Parent finding: [docs/01-ai-project.md](../01-ai-project.md)
> Decisions locked via grilling session: May 2026

---

## What It Is

A RAG-powered financial document Q&A tool. Users ask questions in plain English about
a financial PDF and get streaming AI-generated answers grounded in the document content.

**Portfolio card pitch:**
"Built LedgerAI - a RAG-powered financial document Q&A tool using Gemini API, Upstash Vector,
and the Vercel AI SDK. Pre-loaded with Apple's 2023 10-K. Upload your own financial PDF."

---

## Full Stack

| Layer | Decision | Reason |
|---|---|---|
| Framework | Next.js (App Router) | Existing skill, Vercel-native |
| AI Provider | Google Gemini API (free tier) | 1,500 req/day free, no credit card |
| Embedding model | Gemini text-embedding-004 | Same API key, free tier |
| Vector database | Upstash Vector | Serverless-native, 10K vectors free, Vercel integration |
| Rate limit store | Upstash Redis | Same Upstash account, 10K commands/day free |
| PDF parsing | `pdf-parse` npm package | Lightweight, handles text-based PDFs |
| Chunking strategy | Fixed size - 1000 chars, 200 char overlap | Predictable, interview-explainable |
| AI responses | Streaming via Vercel AI SDK (`streamText`) | Standard UX expectation in 2026 |
| UI layout | Split - PDF panel left, chat panel right | Recognizable AI document chat pattern |
| Sample document | Apple 2023 10-K (698KB, already downloaded) | Recruiters know Apple, can verify answers |
| User upload | Optional - any financial PDF, max 2MB | Shows full RAG pipeline to technical viewers |
| Deployment | Vercel free (Hobby) tier | Already using Vercel for portfolio |

---

## Rate Limiting Strategy

Two layers, both free:

**Layer 1 - File size cap (Option C)**
- Reject any uploaded PDF over 2MB on the API route
- Returns a 400 with a user-friendly message
- Caps cost per request

**Layer 2 - Daily request counter (Option D)**
- Upstash Redis stores a counter with a 24-hour TTL
- Cap: 50 requests per day total
- When limit is reached, return a friendly message: "Daily demo limit reached - come back tomorrow"
- Protects the Gemini free tier quota entirely

---

## RAG Pipeline

```
[User uploads PDF or selects sample]
        |
        v
[pdf-parse extracts raw text]
        |
        v
[Split into chunks: 1000 chars, 200 overlap]
        |
        v
[Gemini Embedding API embeds each chunk]
        |
        v
[Store vectors in Upstash Vector with chunk text as metadata]
        |
        v
[User types a question]
        |
        v
[Embed the question with Gemini Embedding API]
        |
        v
[Query Upstash Vector for top 5 similar chunks]
        |
        v
[Inject retrieved chunks into Gemini prompt as context]
        |
        v
[Stream response via Vercel AI SDK streamText + useChat]
        |
        v
[Answer appears word-by-word in the chat panel]
```

---

## Project Structure

```
ledgerai/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Split layout root
│   │   ├── layout.tsx            # Metadata + dark mode
│   │   └── api/
│   │       ├── ingest/
│   │       │   └── route.ts      # POST: parse, chunk, embed, store
│   │       └── chat/
│   │           └── route.ts      # POST: embed query, retrieve, stream answer
│   └── components/
│       ├── PDFPanel.tsx          # Left panel: sample selector + upload zone
│       ├── ChatPanel.tsx         # Right panel: message thread + input
│       └── RateLimitBanner.tsx   # Shown when daily limit is reached
├── public/
│   └── sample.pdf                # Apple 2023 10-K
└── .env.local
    GEMINI_API_KEY=
    UPSTASH_VECTOR_REST_URL=
    UPSTASH_VECTOR_REST_TOKEN=
    UPSTASH_REDIS_REST_URL=
    UPSTASH_REDIS_REST_TOKEN=
```

---

## Key npm Packages

```bash
npm install @ai-sdk/google ai @upstash/vector @upstash/redis pdf-parse
npm install -D @types/pdf-parse
```

---

## Sample Questions for the Demo

Pre-fill these as suggestion chips in the UI so recruiters can click without typing:

- "What was Apple's total revenue in fiscal year 2023?"
- "What are Apple's main business segments?"
- "What were the biggest risks Apple identified?"
- "How much did Apple spend on research and development?"
- "What was Apple's net income in 2023?"
