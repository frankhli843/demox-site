# TKN Markets — build & deployment summary

> **Repository origin:** The GitHub repo is still named `demox-site` (and the GitHub Pages URL still uses that path) because the thread and deployed artifact already existed there. The visible product is now TKN Markets. Historical README notes explain the naming.

## Public URL
- Live: https://frankhli843.github.io/demox-site/
- Repo: https://github.com/frankhli843/demox-site
- Branch: `main`
- Latest deployment: commit `c5b05fb` (May 21, 2026)

## Origin
Discord thread `1506714904449777715` — Frank asked to replace the prior StegX-style Demox page with a clone of the TKN Markets Canvas:
https://chatgpt.com/canvas/shared/69d586b13c688191ab110ba9b47a7f23

Canvas title: "Copy of Tkn Markets Homepage". This supersedes the completed Demox/StegX task t_01KS3A0B6AKZZT88T9TTAX7YMZ.

## Stack
- Vanilla static HTML / CSS / JS (no build step required)
- Google Fonts: Inter (body) + Space Grotesk (display)
- All visuals are CSS + inline SVG — no external image hotlinks
- Deployed via GitHub Pages, source branch `main`, root path
- Local run: `python3 -m http.server 9876` then open http://localhost:9876/

## Structure
```
demox-site/
  index.html         # Landing page (single page, anchor nav)
  css/style.css      # All styles (~961 lines)
  js/main.js         # Mobile nav toggle + footer year only
  img/favicon.svg    # TKN-branded circular gradient favicon
  README.md          # How to run / how Pages is wired
  SUMMARY.md         # This document
  docs/screenshots/  # local-desktop, local-mobile, live-desktop, baseline/after/live mobile UX captures
  .nojekyll          # Skip Jekyll, serve files as-is
```

## Page Sections (matches Canvas structure)
1. **Nav** — rounded sticky nav, TKN MARKETS brand, Platform / Ecosystem / How it Works / Contact anchor links, mobile hamburger
2. **Hero** — eyebrow chip, headline "A tokenized capital marketplace for private business.", two CTAs (Request Investor Deck / Explore the Platform), 4 stat cards (Institutional / Full-stack / RWA / Yield + Liquidity), right-side Platform Overview card with Issuance+Structuring+Distribution / Operators / Investors / Ecosystem Layers panels
3. **Why Now** — 3 feature cards covering Massive illiquid market / Technology unlock / Investor demand shift
4. **Initial Market Focus** — franchise diagram (source layer → TKN Markets engine → demand layer), 3 metric cards ($900B+ / $20–40B / No market layer)
5. **Why TKN Markets** — 3 feature cards (Institutional posture / Cash-flow native / Expansion-ready)
6. **Business Model** — 4 revenue stream cards (Issuance Fees 2–5% / AUM Fees 1–2% / Trading Fees per Tx / Data & SaaS subscription)
7. **Ecosystem** — TKN Group → TKN Markets → TKN Capital / TKN Exchange / TKN Rail / TKN Struct → TOKN App hierarchy
8. **How it Works** — 4-step process (Source → Structure → Distribute → Enable liquidity)
9. **Contact** — institutional CTA card with hello@tknmarkets.com and "Schedule a Conversation" button
10. **Footer** — TKN Markets copyright, anchor links

## Design Tokens
- Background: deep navy `#06122d` base
- Accent: cyan `#4fd7ff` / `#67e8f9`
- Surfaces: slate glass panels with `rgba(255,255,255,0.05-0.08)` backgrounds
- Typography: Space Grotesk (display) / Inter (body)
- Responsive breakpoints at ~900px (grid stacking) and mobile

## Verification

### Local (commit fb240cb)
- `python3 -m http.server 9876` served the site at http://localhost:9876/
- `curl` verified 200 OK on index.html, css/style.css, js/main.js, img/favicon.svg
- Playwright desktop (1440×900) and mobile (390×844) screenshots captured and reviewed
- No Demox/StegX references in any file

### Live (public URL)
- `curl -sI https://frankhli843.github.io/demox-site/` → HTTP 200, `server: GitHub.com`
- Title: `TKN Markets — A tokenized capital marketplace for private business`
- 25 TKN references, 0 Demox/StegX references in live HTML
- All assets (css, js, favicon) return HTTP 200 with correct content-types
- Live desktop screenshot saved at `docs/screenshots/live-desktop.png`

## Mobile UX Iteration (commit c5b05fb, May 21 2026)

Audit and polish pass for mobile widths 360–430px. All changes are surgical CSS in `css/style.css` and minimal HTML in `index.html`. Desktop layout is pixel-stable.

### Changes shipped

| Area | Change |
|---|---|
| Hero buttons | Stack full-width (`flex-direction: column; width: 100%`) at ≤479px instead of wrapping to partial-width rows |
| Hero CTAs | Converted from stub `<button>` to functional `<a>` links (mailto for Investor Deck, `#platform` anchor for Explore) |
| Contact CTAs | Same: Schedule a Conversation → mailto, email address → clickable mailto link |
| Core Platform heading | `Issuance + Structuring + Distribution` scales 1.1rem (360px) → 1.25rem (480px) → 1.35rem (768px), preventing cramping |
| Stat card labels | `overflow-wrap: anywhere` prevents clipping on 360px cards |
| Franchise diagram | Mobile gap set to 0; CSS `::after` pseudo-elements add 2px gradient vertical connectors between Source Layer → Engine → Demand Layer |
| Business model grid | 3-column layout added at 1024px breakpoint (was an abrupt 2→4 jump at 1280px) |
| Ecosystem tree | `pillar-grid::before` adds horizontal branch line at 640px+, connecting the vertical eco-divider to the 2-column pillar grid as a T-junction |
| Contact card (mobile) | `h2` reduced from 1.8rem to 1.45rem; `contact-box` gets `border-top` + `padding-top` separator for clearer visual hierarchy |
| Nav toggle | 40→44px to meet 44×44px minimum tap target |
| Mobile nav links | `min-height: 44px` + `display: flex` for reliable tap targets |
| Footer links | `min-height: 44px` via `inline-flex` |

### Screenshot capture technique

For mobile screenshots at or below 430px wide, Chrome's `--window-size` flag has a right-edge clipping bug. Use the **iframe wrap** technique:

```bash
# 1. Create a wrapper HTML file at /tmp/wrap-mobile-<W>.html:
#    iframe pointing to file:///path/to/index.html, width=<W>px, height=5400px
# 2. Capture with:
google-chrome --headless --disable-gpu --hide-scrollbars \
  --window-size=<W>,5400 \
  --virtual-time-budget=12000 \
  --allow-file-access-from-files \
  --screenshot=docs/screenshots/<name>.png \
  file:///tmp/wrap-mobile-<W>.html
```

When loading from a live HTTP URL inside the iframe, 390px specifically fails with a blank 17KB output — use `file://` iframe source pointing to the local checkout instead (content is identical to deployed).

### Before/after screenshots
- `docs/screenshots/baseline-mobile-{360,390,414,430}.png` — state before iteration
- `docs/screenshots/after-mobile-{360,390,414,430}.png` — after iteration (local)
- `docs/screenshots/live-mobile-{360,390,414,430}.png` — after iteration (live deploy)
- `docs/screenshots/after-desktop-full.png` — full-page desktop 1440px regression check

### Live verification (commit c5b05fb)
- Live CSS confirmed deployed: `flex-direction: column` hero-actions rule present
- All 4 mobile widths render without horizontal overflow
- Desktop layout (1440px) unchanged — verified via full-page screenshot

## Outstanding notes
- CTAs are wired to `mailto:hello@tknmarkets.com` — functional but no server-side form. Wire up Formspree or similar for form capture if needed.
- Custom domain not configured. Default `*.github.io` host is HTTPS-enforced.
- Repo is still named `demox-site` for continuity — only the visible product branding changed.
