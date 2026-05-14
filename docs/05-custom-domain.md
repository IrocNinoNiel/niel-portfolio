# Finding 05 - Get a Custom Domain

## Finding

Using a `vercel.app` subdomain reads as a template or side project, not a professional
portfolio. A custom domain is one of the cheapest, highest-impact credibility upgrades
available. It signals intentionality - that this is a real professional presence, not
a homework assignment. In 2026, a custom domain is a baseline expectation for developers
presenting themselves to the job market.

> "Use a custom domain, unique logo, concise bio, and consistent color palette to reinforce
> your identity."
> - precisionaiacademy.com

## Why It Matters for This Portfolio

The current deployed URL is `niel-portfolio.vercel.app` (or similar Vercel subdomain).
When a recruiter sees this URL on a resume or LinkedIn, it signals a default setup.
A `.dev` domain is inexpensive and communicates ownership and craft.

---

## Action Plan

### Step 1 - Choose a Domain Name

Recommended options in priority order:

| Domain | Notes |
|---|---|
| `nielniel.dev` | Clean, memorable, developer-specific TLD |
| `ninoniel.dev` | Uses first name, easy to say aloud |
| `niroce.dev` | Surname-based, professional |
| `ninonieliroc.dev` | Full name, unambiguous |

Use `.dev` (Google registry) - it is HTTPS-only by spec and signals a developer.
Avoid `.com` if the `.com` version of your name is taken by someone else.

### Step 2 - Purchase the Domain

Recommended registrars:
- **Namecheap** - ~$12-15/year for `.dev`, clean UI, free DNS management
- **Cloudflare Registrar** - at-cost pricing (~$10/year), best for DNS control
- **Google Domains** (now Squarespace Domains) - slightly pricier but simple

### Step 3 - Connect to Vercel

1. In Vercel dashboard, go to the project settings
2. Click "Domains" and add your custom domain
3. Vercel will give you DNS records (usually a CNAME and/or A record)
4. Add those records in your registrar's DNS settings
5. Vercel auto-provisions an SSL certificate via Let's Encrypt

Total setup time: 15-30 minutes. DNS propagation: up to 48 hours (usually under 1 hour).

### Step 4 - Update All References

Once the domain is live, update:
- LinkedIn profile URL field
- GitHub profile / bio
- Resume PDF
- Email signature
- JSON-LD schema `url` field in `src/app/layout.tsx`
- `metadataBase` in `src/app/layout.tsx` (replace the VERCEL_URL logic with the hardcoded domain)

---

## Status
- [ ] Choose domain name
- [ ] Purchase domain
- [ ] Connect domain to Vercel
- [ ] Wait for DNS propagation and verify HTTPS
- [ ] Update layout.tsx metadataBase to use custom domain
- [ ] Update JSON-LD schema url field
- [ ] Update LinkedIn, GitHub, resume PDF, and email signature
