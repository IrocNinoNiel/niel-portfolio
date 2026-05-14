# Portfolio Improvement Plan

Based on the content audit (May 2026).

---

## Priority 1 - Quick Wins (Code changes, high impact)

### 1. Open Graph + Twitter Card metadata
**File:** `src/app/layout.tsx`
Add `openGraph` and `twitter` fields to the `metadata` export so the site unfurls correctly when shared on LinkedIn, Twitter, or Messenger.

### 2. JSON-LD Person Schema
**File:** `src/app/layout.tsx`
Add a `<script type="application/ld+json">` block with Person schema:
- name, url, jobTitle, sameAs (LinkedIn, GitHub)
- Lets AI tools (ChatGPT, Perplexity, Google AI) identify you as a named entity

### 3. Rewrite Hero Bio
**File:** `src/components/Hero.tsx`
Replace the current one-liner with a version that adds:
- Location: "Based in the Philippines, open to remote"
- Specificity: "production-grade web systems used by real teams"
- Remove vague filler ("robust")

### 4. Rewrite Experience Bullets
**File:** `src/components/Experience.tsx`
Replace generic duty list with outcome-oriented bullets:
- Mention the 3 specific projects shipped
- Add context on scale (departments served, workflows automated)
- Remove "Collaborated with cross-functional teams to deliver scalable solutions on schedule"

### 5. Rewrite Skills Subtitle
**File:** `src/components/Skills.tsx`
Replace "Technologies I work with daily." with a line that mentions 4 years of production experience and end-to-end ownership.

---

## Priority 2 - Content Additions (New sections or fields)

### 6. Add Project Outcomes
**File:** `src/components/Projects.tsx`
Add an `outcome` field to each project object and render it as a one-line impact statement below the description.

| Project | Suggested Outcome Line |
|---|---|
| Centralized Accounting System | Handles GL, AP/AR, and budgeting across 5+ departments |
| Patient Tracking System | Manages patient records and appointments for clinical staff |
| Lending System | Automates the full loan lifecycle from application to collections |

### 7. Add Project Links
**File:** `src/components/Projects.tsx`
Add `githubUrl` and/or `liveUrl` to each project object. Render a small "View Code" or "Live Demo" button. Even if repos are private, a GitHub profile link per card adds credibility.

### 8. Add About / Summary Section
**New component:** `src/components/About.tsx`
A short 2-3 sentence paragraph between Hero and Skills that answers:
- Who are you beyond your job title?
- What kind of problems do you solve?
- What makes you worth hiring over another full stack dev?

### 9. Add FAQ Section
**New component:** `src/components/FAQ.tsx`
3-5 questions a recruiter or hiring manager would ask. This is the single highest-impact surface for AI citation.

Suggested questions:
- Are you open to remote work?
- What industries have you built software for?
- What is your primary tech stack?
- How do you work on a project end-to-end?
- Are you available for freelance or contract work?

---

## Priority 3 - SEO Infrastructure

### 10. Add Location Signal
Appears in the Hero bio rewrite (Priority 1, item 3). No separate file change needed.

### 11. Add `og:image`
**File:** `src/app/layout.tsx`
Add `public/profile.jpg` as the Open Graph image so LinkedIn/Messenger previews show the profile photo instead of a blank card.

---

## Status Tracker

| # | Item | Status |
|---|---|---|
| 1 | Open Graph + Twitter metadata | - [ ] Todo |
| 2 | JSON-LD Person schema | - [ ] Todo |
| 3 | Hero bio rewrite | - [ ] Todo |
| 4 | Experience bullets rewrite | - [ ] Todo |
| 5 | Skills subtitle rewrite | - [ ] Todo |
| 6 | Project outcome lines | - [ ] Todo |
| 7 | Project links | - [ ] Todo |
| 8 | About section | - [ ] Todo |
| 9 | FAQ section | - [ ] Todo |
| 10 | og:image | - [ ] Todo |
