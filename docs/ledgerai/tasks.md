# LedgerAI - Weekly Build Tasks

> Parent finding: [docs/01-ai-project.md](../01-ai-project.md)
> Architecture reference: [docs/ledgerai/architecture.md](./architecture.md)
> Target: Live on Vercel by end of this week

---

## Day 1 - Project Setup and Infrastructure

### Goal
Empty repo to working Next.js app with all services connected and env vars confirmed.

### Tasks

- [ ] Create new GitHub repo: `ledgerai` (public from day one)
- [ ] Scaffold Next.js app with TypeScript and Tailwind
  ```bash
  npx create-next-app@latest ledgerai --typescript --tailwind --app --src-dir
  ```
- [ ] Install all required packages
  ```bash
  npm install @ai-sdk/google ai @upstash/vector @upstash/redis pdf-parse
  npm install -D @types/pdf-parse
  ```
- [ ] Create Upstash Vector database
  - Go to upstash.com, create a new Vector index
  - Dimensions: **768** (Gemini text-embedding-004 output size)
  - Metric: Cosine
  - Copy `UPSTASH_VECTOR_REST_URL` and `UPSTASH_VECTOR_REST_TOKEN`
- [ ] Create Upstash Redis database (same Upstash account, separate DB)
  - Copy `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN`
- [ ] Create `.env.local` with all 5 env vars
  ```
  GEMINI_API_KEY=your_key_here
  UPSTASH_VECTOR_REST_URL=
  UPSTASH_VECTOR_REST_TOKEN=
  UPSTASH_REDIS_REST_URL=
  UPSTASH_REDIS_REST_TOKEN=
  ```
- [ ] Copy `apple-10k-2023.pdf` from resume project into `ledgerai/public/sample.pdf`
- [ ] Verify the app runs: `npm run dev` at http://localhost:3000
- [ ] Write initial README with project description, tech stack, and setup instructions

---

## Day 2 - PDF Ingestion Pipeline

### Goal
A working API route that accepts a PDF, parses it, chunks it, embeds it, and stores vectors in Upstash.

### Tasks

- [ ] Create `src/app/api/ingest/route.ts`
- [ ] Implement file size check - reject if over 2MB, return 400
- [ ] Implement daily request counter check via Upstash Redis
  - Key: `ledgerai:daily:count`
  - TTL: 86400 seconds (24 hours)
  - Limit: 50 requests
  - Return 429 with friendly message if limit exceeded
- [ ] Parse PDF using `pdf-parse` - extract raw text string
- [ ] Implement fixed-size chunker
  - Chunk size: 1000 characters
  - Overlap: 200 characters
  - Returns array of text strings
- [ ] Embed each chunk using Gemini `text-embedding-004` model
- [ ] Store each vector in Upstash Vector with chunk text as metadata
  ```typescript
  { id: `chunk-${i}`, vector: embedding, metadata: { text: chunk } }
  ```
- [x] Pre-ingest `sample.pdf` at startup or on first request (so it is ready without upload)
  - Added `GET /api/ingest/sample` with Redis flag guard — run once after first deploy via `curl <url>/api/ingest/sample`
- [ ] Test the route with a `curl` POST using the sample PDF
- [ ] Confirm vectors appear in the Upstash Vector dashboard

---

## Day 3 - Query and Streaming Pipeline

### Goal
A working API route that takes a user question, retrieves relevant chunks, and streams a Gemini answer.

### Tasks

- [ ] Create `src/app/api/chat/route.ts`
- [ ] Increment the daily request counter on each chat request
- [ ] Embed the user's question using Gemini `text-embedding-004`
- [ ] Query Upstash Vector for top 5 most similar chunks
- [ ] Build the Gemini prompt with retrieved chunks as context
  ```
  You are a financial document assistant. Answer based only on the context below.
  If the answer is not in the context, say so clearly.

  Context:
  [chunk 1]
  [chunk 2]
  ...

  Question: [user question]
  ```
- [ ] Stream the response using Vercel AI SDK `streamText` with `@ai-sdk/google`
- [ ] Return a streaming response compatible with the `useChat` hook
- [ ] Test with Postman or curl - confirm streaming works
- [ ] Test with a question about Apple's 2023 revenue - confirm answer is grounded in the PDF

---

## Day 4 - UI Build

### Goal
Full split-layout UI that looks polished and works end-to-end.

### Tasks

**Layout**
- [x] Build `src/app/page.tsx` as a full-height split layout
  - Left panel: 40% width on desktop, full width on mobile (stacked)
  - Right panel: 60% width on desktop
  - Dark mode support using existing Tailwind dark: classes
  - Note: uses a custom streaming hook (native fetch + ReadableStream) instead of useChat — AI SDK v6 removed the useChat hook

**Left Panel - `src/components/PDFPanel.tsx`**
- [x] Show sample document name and description ("Apple Inc. 2023 Annual Report")
- [x] "Using sample document" badge shown by default
- [x] PDF upload zone - drag and drop or click to select
- [x] File validation feedback (size error, success state)
- [x] Show uploaded file name when a custom PDF is loaded
- [x] Suggested question chips (5 pre-written questions from architecture.md)
  - Clicking a chip sends the question directly to the chat

**Right Panel - `src/components/ChatPanel.tsx`**
- [x] Message thread - alternating user and AI message bubbles
- [x] Streaming text renders word-by-word via native ReadableStream reader
- [x] Loading indicator while waiting for first token
- [x] Input box fixed to bottom of panel with send button
- [x] Empty state: "Ask anything about the loaded financial document"
- [x] Auto-scroll to latest message

**Rate Limit - `src/components/RateLimitBanner.tsx`**
- [x] Full-width banner shown when daily limit is reached
- [x] Text: "Demo limit reached for today. Come back tomorrow or clone the repo and use your own API key."
- [x] Link to GitHub repo

**Polish**
- [x] Match the indigo + slate color scheme from the portfolio site
- [x] Ensure mobile layout works (panels stack vertically)
- [x] Add page title and meta description in `layout.tsx`

---

## Day 5 - Deploy, Polish, and Add to Portfolio

### Goal
LedgerAI is live on Vercel and added to the portfolio Projects section.

### Tasks

**Deployment**
- [x] Push all code to GitHub
- [x] Create new Vercel project from the `ledgerai` GitHub repo
- [x] Add all 5 env vars in Vercel project settings
- [x] Deploy and confirm the live URL works — https://ledgerai-rho.vercel.app
- [x] Test the full flow on the live URL: sample PDF query, custom PDF upload, rate limit message

**GitHub**
- [x] Write a full README — RAG diagram, tech stack table, setup instructions
- [x] Pin the repo on GitHub profile

**Portfolio Integration**
- [x] Add LedgerAI to `src/components/Projects.tsx` in the resume portfolio
- [x] Add AI skills to `src/components/Skills.tsx` — "AI & Integrations" category
- [x] Commit and push the portfolio update
- [x] Verify the new project card appears on the live portfolio

---

## Done Definition

LedgerAI is complete when:

- [x] Live URL loads in under 3 seconds
- [x] Pre-loaded Apple 10-K answers at least 5 sample questions correctly
- [x] Custom PDF upload works end-to-end
- [x] Rate limiting kicks in correctly after 50 requests
- [x] GitHub repo has a full README with screenshots
- [x] Project card is live on the portfolio with demo and GitHub links
- [x] "AI & Integrations" skill category appears in the Skills section
