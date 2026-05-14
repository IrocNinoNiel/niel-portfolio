# Finding 04 - Add Micro-Interactions and Motion Polish

## Finding

In 2026, micro-interactions have moved from "nice to have" to an expected quality signal.
Hover effects, scroll triggers, animated states, and cursor-proximity reactions are now
standard in competitive developer portfolios. A site that only has fade-in animations reads
as a starter template. Brands like Nike and Ralph Lauren use micro-animations to enhance the
user journey without slowing performance - and recruiters have internalized this bar.

> "Micro-interactions - small, purposeful animations triggered by user actions - have moved
> from 'nice to have' to an expected quality signal."
> - digitalupward.com

> "For gamified navigation in portfolios, look for hover effects, micro-interactions and
> animation, as well as 3D imagery for an eye-popping effect."
> - elements.envato.com

## Why It Matters for This Portfolio

The current site has two animation types: FadeIn scroll reveal and border-color hover
transitions. These are functional but minimal. A recruiter who visits five portfolios in
a day will remember the one that felt alive - where buttons responded, cards reacted to
the cursor, and scrolling felt intentional.

---

## Action Plan

### Tier 1 - Low Effort, High Impact (Add First)

**Skill tag hover effect:**
Add `hover:scale-105 hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-transform`
to skill badges so they lift slightly on hover.

**Project card cursor lift:**
Add `hover:-translate-y-1 hover:shadow-lg transition-transform duration-200` to project
cards so they rise slightly when hovered.

**Button press feedback:**
Add `active:scale-95 transition-transform` to all CTA buttons (View Projects, Download CV,
Contact) so they compress slightly on click.

**Nav link underline animation:**
Replace the static active color change with an animated underline that slides in from
the left using a pseudo-element via CSS.

### Tier 2 - Medium Effort, Strong Visual Signal

**Animated skill category reveal:**
Instead of rendering all skill tags at once, stagger their entrance with a small delay
per tag when the Skills section enters the viewport.

**Project card tilt on hover:**
Use CSS `transform: perspective(1000px) rotateX() rotateY()` driven by mouse position
via a `onMouseMove` handler. Subtle 3-5 degree tilt maximum.

**Typing animation in Hero:**
Animate the job title "Full Stack Developer" with a typewriter effect on first load.
Use a lightweight CSS animation, not a heavy library.

**Scroll progress indicator:**
A thin indigo line at the top of the viewport that fills as the user scrolls down the page.

### Tier 3 - Polish (Add Last)

**Gradient spotlight on hero:**
A radial gradient that follows the cursor position in the Hero section background,
giving a subtle "light source" effect.

**Number counter animation:**
If metrics are added to project cards (e.g. "5+ departments"), animate the number
counting up when it enters the viewport.

### Performance Rules
- No animation library over 10kb (Framer Motion is acceptable if already installed)
- All animations must respect `prefers-reduced-motion` media query
- No animation should delay the initial content render

---

## Status
- [ ] Add skill tag hover scale
- [ ] Add project card lift on hover
- [ ] Add button press feedback (active:scale-95)
- [ ] Add nav underline animation
- [ ] Add staggered skill tag entrance
- [ ] Add scroll progress indicator
- [ ] Audit all animations for prefers-reduced-motion support
