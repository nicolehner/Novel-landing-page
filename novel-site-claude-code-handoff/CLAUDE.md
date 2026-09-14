# Novel Cocktail Co. — Landing Site

## What this is
Marketing site for Novel Cocktail Co., a Central Coast (CA) startup making wine-based,
full-strength cocktails on draft. The whole site is a single self-contained file
(`index.html`) — no build step, no dependencies. Hash-based client-side routing
(`#/`, `#/cocktails`, `#/operators`, `#/faq`, `#/blog`, `#/blog/legally-its-wine`,
`#/team`, `#/contact`). Vanilla JS, page templates as JS template literals, one
`render()` router at the bottom of the file.

Run locally: `python3 -m http.server 8000` → http://localhost:8000
(opening the file directly also works).

## Brand system — do not drift from this
- Colors: ink `#10211d`, forest `#1a3934` / `#22453f`, electric lime `#a0fa40`
  (accent — use sparingly), warm stone `#d4c8bc` / `#e9e2d9`.
  SKU tints: mango `#f2a93b`, berry `#8a5480`, passion `#f0714f`.
- Type: Georgia (display, headlines) / Inter (body, UI). Loaded via Google Fonts
  with system fallbacks.
- Texture: fine SVG grain overlay (`.grain`), fixed, mix-blend overlay.
- Signature motif: the "draft pour" — a thin vertical lime line descending into
  ripples/a coupe circle. Appears in hero, cocktail visuals, team portraits,
  age gate, favicon. Reuse it; don't invent competing motifs.
- Quality bar: Airbnb/Yeti-level polish. Prefer rebuilding a section over patching
  something mediocre.

## Compliance guardrails — HARD CONSTRAINTS
1. **Sensory descriptions only.** Two SKU ingredients are pending written attorney
   clearance. Never add specific ingredient names to any copy anywhere on the site —
   flavors are described only in sensory terms (e.g., "a slow smoky warmth",
   "a whisper of bitter"). If asked to add ingredient lists, flag this rule first.
2. **Never imply distilled spirits.** The entire legal thesis is fermented-not-distilled
   (wine classification → pours on CA Type 41/42 beer & wine licenses). No copy may
   suggest spirits, distillation, or spirit brand names in the products.
3. **ABV is 15.9%** across all three SKUs. Don't change without instruction.
4. **Economics stay illustrative.** The $5 pour / $12–14 menu / 123 pours-per-sixtel
   band on the operators page must keep its "illustrative, not a guarantee" disclaimer.
5. **Operators-page legal claims** are accurate to the business thesis but the ABC
   Determination Letter is still pending — the owner may want this page dark or
   softened until it lands. Ask before expanding legal claims.
6. Age gate (21+) must remain. It's intentionally in-memory (shows each load) right
   now; fine to persist with localStorage once deployed to a real domain.

## Current SKUs (tap list)
1. Mango Margarita — ripe mango, bright lime, slow smoky warmth on the finish
2. Blackberry Mule — dark blackberry, fiery ginger, sharp squeeze of lime
3. Passion Fruit Spritz — tart passion fruit, whisper of bitter, fine bubbles
All: 15.9% ABV, sixtel kegs, ~123 pours per keg.

## Program facts (operators page — keep accurate)
- 60-day no-commitment trial for all accounts.
- Option 1 (venue has draft lines): free smart keg scales, no minimums,
  pay-per-pour, billing syncs with Toast and Square.
- Option 2 (no draft lines): Tabletop Tap System (~$5K value), covered during trial;
  after trial, monthly lease waived at a 3-keg minimum with proportional charges
  for shortfalls; equipment ownership transfers after 24 qualifying months.
- Founding partner program: $5/pour locked for year one (standard $7).
- Territory: Santa Barbara → Ventura → San Luis Obispo counties, LA next.

## Open TODOs
- [ ] Wire the contact form (marked `TODO` in the submit handler): Formspree,
      a backend endpoint, or replace with a Calendly embed for "book a call".
- [ ] Team bios are role-anchored drafts — replace with real backgrounds for
      Nico Lehner (Founder & CEO), Brian Diegnan (Head Advisor & Owner),
      Holden Dannelly (Head Mixologist). Add real headshots (currently branded
      monogram portraits).
- [ ] Real blog posts — five cards are "coming soon" placeholders; one article
      ("Legally, it's wine") is written and live at `#/blog/legally-its-wine`.
- [ ] OG/social meta image, analytics, and real domain on deploy.
- [ ] Optional: split into /css and /js files if the project grows; single-file
      is intentional for now.

## Owner preferences
- Iterative and approval-gated: propose, show, get sign-off, then proceed.
- Prose over tables in documents; minimal bullet noise in copy.
- When in doubt on legal/compliance copy, ask — don't improvise.
