# Finding 03 - Rewrite Projects as Case Studies

## Finding

The standard portfolio project card format (name + description + tech stack) is no longer
enough in 2026. What hiring managers want to see is reasoning - the problem, the approach,
the tradeoff made, and the outcome. Projects should read like mini case studies, not feature
lists. A 2-3 minute Loom walkthrough explaining problem, architecture, and tradeoffs is now
standard among competitive candidates.

> "Hiring managers want to see your reasoning, not just your code. Show problem, architecture,
> and tradeoffs - not just what you built."
> - techinterview.org

## Why It Matters for This Portfolio

Current project cards describe what was built but not why it was built that way, what
constraints existed, what alternatives were considered, or what the result was. A recruiter
learns that a Lending System was built with Laravel and Vue.js but learns nothing about the
complexity involved, the decisions made, or the impact delivered.

---

## Action Plan

### Step 1 - Write a Case Study for Each Project

Use this structure for each:

**Problem** - What was broken or missing before this system existed? Who was affected?

**Approach** - What did you build and why did you choose this architecture?
Include one concrete technical decision (e.g. "We chose MySQL over MongoDB because
the loan schema had strict relational integrity requirements across 6 related tables").

**Key Challenge** - What was the hardest part to solve?

**Outcome** - What changed after the system was live? (number of users, departments
served, workflows automated, manual process replaced)

### Step 2 - Two Formats to Implement

**Short version (card format - in the portfolio now):**
Keep the current card but add a one-line "Key decision" field below the outcome line.
Example: "Chose server-side PDF generation over client-side to handle reports with 10,000+ rows."

**Long version (expandable or separate page):**
Add a "Read case study" link per project that expands inline or opens a modal with the
full 3-paragraph case study. This is the version recruiters read when they are seriously
interested.

### Step 3 - Rewrite Existing Project Descriptions

Current descriptions are feature inventories. Rewrite each to lead with the problem.

**Before (Lending System):**
"Financial platform automating the end-to-end loan lifecycle including application intake,
credit evaluation, loan disbursement, amortization scheduling, and collections management."

**After:**
"Before this system, loan officers tracked applications in spreadsheets across multiple
branches, creating reconciliation errors and delays in disbursement. I built a centralized
platform that owns the full loan lifecycle - from application intake through amortization
scheduling and collections - cutting manual reconciliation steps for the finance team."

### Step 4 - Component Changes

In `src/components/Projects.tsx`, add:
- `problem` field (1 sentence)
- `challenge` field (1 sentence)
- A "Case study" expandable section or modal trigger per card

---

## Status
- [ ] Write full case study for Centralized Accounting System
- [ ] Write full case study for Patient Tracking System
- [ ] Write full case study for Lending System
- [ ] Rewrite short descriptions to lead with the problem
- [ ] Implement expandable case study UI in Projects.tsx
