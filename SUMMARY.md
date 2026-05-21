# TKN Markets — build & deployment summary

> **Repository origin:** The GitHub repo is still named `demox-site` (and the GitHub Pages URL still uses that path) because the thread and deployed artifact already existed there. The visible product is now TKN Markets. Historical README notes explain the naming.

## Public URL
- Live: https://frankhli843.github.io/demox-site/
- Repo: https://github.com/frankhli843/demox-site
- Branch: `main`
- Latest deployment: commit `fb240cb` (May 21, 2026)

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
  css/style.css      # All styles (~886 lines)
  js/main.js         # Mobile nav toggle + footer year only
  img/favicon.svg    # TKN-branded circular gradient favicon
  README.md          # How to run / how Pages is wired
  SUMMARY.md         # This document
  docs/screenshots/  # local-desktop, local-mobile, live-desktop captures
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

## Outstanding notes
- CTAs (Request Investor Deck, Schedule a Conversation) are stub buttons — no real endpoint. Wire up Formspree or similar if a real form is needed.
- Custom domain not configured. Default `*.github.io` host is HTTPS-enforced.
- Repo is still named `demox-site` for continuity — only the visible product branding changed.
