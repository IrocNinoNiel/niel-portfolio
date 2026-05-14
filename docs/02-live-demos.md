# Finding 02 - Add Live Demos and GitHub Links to Projects

## Finding

Recruiters in 2026 will not wait. Polished live demos and clear technical documentation
are now the primary filters for who gets a closer look. Hiring managers want to interact
with your app in under 3 seconds. Projects with no links - no GitHub, no live URL - are
effectively unverifiable and are skipped.

> "Recruiters strongly prefer live demos over code-only repositories. Hosting on platforms
> like Netlify, Vercel, or AWS allows interviewers to interact with your apps instantly."
> - nucamp.co

## Why It Matters for This Portfolio

All three current projects have zero external links. A recruiter reading the portfolio
has no way to verify the work exists, no way to assess the UI quality, and no way to
review the code. The project cards are descriptions only.

---

## Action Plan

### Step 1 - Add GitHub Links (Immediate)

For each project, link to the GitHub repository. If the repos are private (likely, since
these are client projects at Syntactics), do the following instead:

**Option A - Make a public demo repo:**
Create a new public GitHub repo per project that contains:
- A sanitized version of the code (remove client data/credentials)
- A README with screenshots, architecture diagram, and setup instructions
- At minimum: the schema design, key API routes, and one or two core components

**Option B - Link to GitHub profile with a note:**
If code cannot be made public, link to the GitHub profile and note in the project card:
"Source code is private (client project) - available on request."

### Step 2 - Add Live Demo Links (Where Possible)

For client projects that cannot be publicly demoed, create a read-only demo environment:
- Seed the database with dummy data
- Deploy a demo instance on Vercel or Railway (free tier)
- Add a "Demo" button to each project card

For the AI project (see Finding 01), a live demo is non-negotiable.

### Step 3 - Add Video Walkthroughs (High Impact)

Record a 2-3 minute Loom video per project:
- Open with the problem being solved (30 seconds)
- Walk through the key features (90 seconds)
- Show one piece of code or architecture decision you are proud of (30 seconds)

Embed the Loom thumbnail as a clickable image in the project card.

### Step 4 - Update the Projects Component

Add `githubUrl`, `demoUrl`, and optionally `videoUrl` to each project object in
`src/components/Projects.tsx` and render icon buttons below the tech stack tags.

---

## Status
- [ ] Decide public vs private repo strategy per project
- [ ] Create/update GitHub repos with READMEs and screenshots
- [ ] Deploy demo environments for each project
- [ ] Record Loom walkthroughs
- [ ] Update Projects.tsx to render demo and GitHub buttons
