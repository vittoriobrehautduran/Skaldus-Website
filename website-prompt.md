# Master prompt: Skaldus marketing website

**Role:** You are building the public marketing website for Skaldus — a B2B SaaS for time reporting and workforce coordination between employers and staff. The product is not embedded in this site; this site explains, converts, and routes visitors to tenant apps (e.g. `https://{club}.skaldus.com`). Do not implement login or the timereport app here — only links and a club selector that redirects to the correct subdomain.

**Brand name:** Skaldus (spell consistently).

**Positioning:** Calm, trustworthy “office layer” for time — usable across industries; first vertical is tennis clubs (Skaldus Tennis can be mentioned as a line or section, not the whole story).

**Audience:** Small/medium organizations (clubs, schools later), admins and decision-makers; secondary: staff who need to understand “where do I log in?”

## Creative direction: Scandinavian + modern

**Overall feel:** Nordic restraint — lots of whitespace, quiet confidence, functional beauty. Not flashy startup chaos; not corporate bank cold. Think: clear hierarchy, honest typography, soft natural light in photography (if used), muted palette with one restrained accent.

### Scandinavian design principles to follow:
- **Clarity over decoration:** Every section has one clear job; remove elements that don’t earn their place.
- **Typography-led hierarchy:** Headlines and body are distinct; comfortable line length (~60–75 characters for body); generous line-height.
- **Muted base:** Off-whites, warm gray, soft charcoal — avoid pure `#000` for large text blocks.
- **Single accent:** One color family (e.g. deep teal, slate blue, or muted forest green) used sparingly for links, primary buttons, and focus states — not rainbow gradients.
- **Subtle borders/shadows:** Prefer hairline borders or very soft elevation; avoid heavy drop shadows and glassmorphism unless extremely subtle.
- **Imagery:** If photography, prefer natural light, real environments, diverse people, Scandinavian or neutral European settings — no generic stock “handshake in skyscraper.” If illustrations, flat or soft geometric, minimal line weight — not cartoon mascot energy.
- **Motion:** Subtle only — short fades, small parallax on scroll if any, respect prefers-reduced-motion. No auto-playing video with sound.

## Tortoise motif: present but not dominant

**Concept:** The tortoise is a quiet symbol of time, patience, and longevity — a whisper, not a logo circus.

### Rules:
- Do not make a giant tortoise hero or repeated turtle characters on every section.
- Do allow 1–2 subtle touches total across the whole site, for example:
  - A very abstract shell curve or segment used as a divider, favicon detail, or small mark in the logo (geometric, not literal cartoon turtle).
  - Or a single understated line in copy: e.g. “Time that holds up” / “Steady time, clear reports” — one place, not a theme hammered everywhere.
- **Avoid:** Mascots, memes, “slow and steady” slogans repeated, turtle puns, childish icons.
- **Tone:** If someone scrolls the whole site, they might sense calm and durability more than they name “tortoise.”

## Visual system (specify in implementation)

- **Logo / wordmark:** Clean wordmark “Skaldus” — geometric sans or refined humanist sans; optional minimal symbol (abstract curve/shell segment) that works at 16px favicon size. Dark and light variants.

### Typography (suggestions — pick one coherent pair):
- **Headings:** A distinctive but readable sans (e.g. Söhne, Neue Montreal, Satoshi, Plus Jakarta Sans, DM Sans — or system stack if performance-critical).
- **Body:** Highly legible sans with Nordic neutrality (Inter, Source Sans 3, IBM Plex Sans).
- **Avoid:** Overused “AI slop” display fonts unless carefully justified.

### Color (example tokens — adjust but keep discipline):
- **Background:** warm white `#F7F6F3` or cool `#FAFAFA`
- **Surface/card:** white or `#FFFFFF` with 1px `#E8E6E1`
- **Text primary:** `#1A1A1A` or charcoal `#2C2C2C`
- **Text secondary:** `#5C5C5C`
- **Accent (primary CTA):** one hue only, e.g. deep teal `#0D5C5C` or slate `#3D5A6C`
- **Accent hover:** slightly darker; focus ring: visible contrast (WCAG)

### Layout:
- Max content width ~1100–1200px for text columns; wider only for grids.
- Section spacing generous (e.g. 96–160px vertical rhythm on desktop; scaled down on mobile).
- Grid: 12-column mental model; cards align to grid.
- Mobile-first: Touch targets ≥44px; no horizontal scroll traps.

## Information architecture & pages

**Minimum viable site:**
- **Home** — Value prop, who it’s for, how it works (3–4 steps), trust/social proof placeholder, CTA to demo/contact or “Välj förening”.
- **Produkt / Funktioner** — Time reporting, approvals (if product has it), admin, multi-club / employer–staff clarity (high level, no false claims).
- **Skaldus Tennis (or “Branscher”)** — Short vertical-specific copy; mention schools as “kommer” or roadmap if not live — honest.
- **Pris** — Simple tiers or “Kontakta oss” if pricing is custom; no fake numbers.
- **Kontakt / Boka demo** — Form (name, email, org, message) or mailto + calendar link.
- **Legal footer links** — Integritet (privacy), villkor — can be placeholders linking to app legal URLs later.

**Club routing (critical):**
- A “Logga in” flow: page or modal “Välj din förening” with searchable/select list of known slugs (Spånga TK, Sundbyberg, …) — data can be static JSON or CMS for v1.
- Selecting a club only redirects to `https://{slug}.skaldus.com` (or `/login` path) — no Cognito on this domain.
- Direct deep links to tenant subdomains are documented for power users (“Direktlänk till er klubb”).

## Copy tone (Swedish primary)

- Professional, warm, short sentences. “Ni” for B2B Swedish where natural.
- No hype words: “revolutionary,” “AI-powered” unless true.
- No fake metrics (“10 000+ användare”) without data.
- **Example headline directions:** *Tydlig tid. Enklare samarbete.* / *Timmar som följer med er vardag.* / *Ett lugnt system för rapportering och uppföljning.*

## Technical expectations (for whoever builds it)

- **Static or SSG:** suitable for Netlify (Astro, Eleventy, Next static export, or plain Vite + HTML).
- **Performance:** Lighthouse-minded — lazy images, subset fonts, minimal JS.
- **SEO:** Semantic HTML, title/meta description per page, Open Graph image (simple, on-brand).
- **Accessibility:** WCAG 2.1 AA intent — contrast, labels on form controls, keyboard nav, skip link.
- **i18n (optional):** Structure strings for future English mirror; launch Swedish first if one language.

## Explicit non-goals

- No embedded timereport SPA, no Cognito signup on Netlify, no user database on marketing site v1.
- No heavy tortoise branding, no stock “business people pointing at chart” clichés.
- No dark patterns (fake countdown, hidden pricing tricks).

## Deliverables checklist

- [ ] Responsive layouts (mobile, tablet, desktop).
- [ ] Component set: nav (sticky optional), hero, feature grid, quote/testimonial block, CTA band, footer, form states.
- [ ] Favicon + OG image concept.
- [ ] README with how to add a new club slug to the redirect list.

---

**Final instruction:** Produce one cohesive visual direction (mood board in words + tokens), then page designs or code that a developer can deploy to Netlify on `skaldus.com`, with `www` redirect policy decided (pick one canonical host). Keep the tortoise inspiration elegant and rare; let Skaldus and clarity carry the brand.
