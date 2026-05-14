# Finding 08 - Add Social Proof and Testimonials

## Finding

Portfolios in 2026 that stand out do not just describe skills - they show evidence that
other professionals have validated those skills. A single quote from a manager, colleague,
or client is worth more than three bullet points written about yourself. Social proof
reduces hiring risk in the recruiter's mind and makes claims on the portfolio feel
grounded rather than self-reported.

> "Two to three polished, deployed projects with excellent READMEs beat ten unfinished
> or undeployed projects. What cuts through the noise is a project with an identifiable
> origin story."
> - precisionaiacademy.com

## Why It Matters for This Portfolio

The current portfolio is entirely self-reported. Every claim - 4 years of experience,
enterprise-grade work, delivery on schedule - comes from the portfolio owner with no
third-party signal. A LinkedIn recommendation or a short quote from a colleague at
Syntactics Inc. adds a layer of external validation that self-description cannot provide.

---

## Action Plan

### Step 1 - Get LinkedIn Recommendations (Highest Impact)

Ask 1-2 people at Syntactics Inc. to write a LinkedIn recommendation:
- A project manager or team lead who can speak to delivery and professionalism
- A colleague who can speak to technical skill and collaboration

A LinkedIn recommendation is more credible than a portfolio quote because it is
tied to a real, verified LinkedIn account. It also improves LinkedIn profile strength.

**How to ask:** Send a direct message explaining you are updating your professional
profile and ask if they would be willing to write 2-3 sentences about a specific project
you worked on together. Specific asks get better responses than generic ones.

### Step 2 - Add a Testimonials Section to the Portfolio

Once you have 1-2 testimonials, add a Testimonials section between Experience and FAQ.

**Component:** `src/components/Testimonials.tsx`

**Format per testimonial:**
- Quote text (2-4 sentences)
- Name
- Title and company
- LinkedIn profile link (optional but adds credibility)

**Design:** Simple card with a large opening quotation mark in indigo, the quote in
slate, and the attribution below. Consistent with the existing card style.

### Step 3 - Add LinkedIn Recommendation Count to Contact Section

Once you have recommendations on LinkedIn, update the LinkedIn contact card to say
"View on LinkedIn (X recommendations)" to draw attention to the social proof there.

### Step 4 - GitHub Stars and Forks as Social Proof

Once the AI project is public (see Finding 01), promote it in developer communities
(Reddit r/webdev, X/Twitter, dev.to). GitHub stars on a public project are a form
of social proof that recruiters recognize.

---

## Minimum Viable Version

If getting testimonials takes time, add one line to the About section with a verifiable fact:
"4 years at Syntactics Inc., a software development company serving enterprise clients
across the Philippines." This grounds the self-reported claims in a named, searchable company.

---

## Status
- [ ] Ask 1-2 colleagues at Syntactics for LinkedIn recommendations
- [ ] Wait for recommendations and save quotes
- [ ] Build Testimonials.tsx component
- [ ] Add Testimonials section to page.tsx between Experience and FAQ
- [ ] Update LinkedIn contact card copy once recommendations are live
- [ ] Promote AI project publicly to build GitHub stars (after Finding 01)
