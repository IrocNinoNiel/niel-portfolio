# Finding 01 - Add an AI-Integrated Project

## Finding

In 2026, hiring managers scan portfolios specifically for AI integration experience.
RAG (Retrieval-Augmented Generation) is the single most in-demand AI engineering skill.
Portfolios without at least one AI project are read as outdated, regardless of years of experience.
Even a small, focused tool that uses an LLM API is enough to signal that you are current.

> "The AI job market in 2026 rewards builders over learners. Hiring managers see hundreds of
> 'completed the LLM course' portfolios every week. What stands out is shipped software."
> - precisionaiacademy.com

## Why It Matters for This Portfolio

All three current projects (Centralized Accounting System, Patient Tracking System, Lending System)
are solid enterprise work but represent a pre-AI tech era. A recruiter scanning in 2026 sees no
evidence that Nino has worked with modern AI tooling at all.

---

## Action Plan

### Option A - Small, Shippable AI Tool (Recommended)
Build a focused tool that solves one clear problem using an LLM API.

**Ideas suited to existing domain experience:**
- **Document Q&A for Financial Reports** - Upload a PDF (e.g. a financial statement), ask questions in plain language, get answers. Uses OpenAI or Gemini API + RAG pattern.
- **AI-Assisted Loan Eligibility Checker** - User inputs income/liabilities, AI explains eligibility in plain language. Connects to existing lending domain knowledge.
- **Patient Intake Summarizer** - Paste unstructured clinical notes, AI outputs a structured summary. Connects to healthcare background.

**Minimum viable stack:**
- Next.js frontend (already your stack)
- OpenAI API or Google Gemini API
- Vercel AI SDK for streaming responses
- No database required for v1

**Target scope:** 1-2 weeks part-time. Ship it deployed on Vercel.

### Option B - Add AI Feature to an Existing Project
Add a single AI-powered feature to one of the three existing projects.

Example: Add a natural language search bar to the Accounting System that lets users
query transactions in plain English ("show me all expenses over 10,000 last quarter").

### What to Show on the Portfolio Card
- Live demo link (required)
- Problem statement (1 sentence)
- How AI is used (1 sentence, specific - not just "uses AI")
- Tech stack including the AI SDK/API used
- Link to GitHub repo with README

---

## Status
- [ ] Choose project idea
- [ ] Build and deploy v1
- [ ] Write project README
- [ ] Add to Projects section in portfolio
- [ ] Add AI-related skills to Skills section
