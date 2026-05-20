# Demox — build & deployment summary

## Public URL
- Live: https://frankhli843.github.io/demox-site/
- Repo: https://github.com/frankhli843/demox-site
- Branch: `main`
- Latest commit: `dd0d2fe`

## Origin
Recovered Discord request (channel/thread `1506714904449777715`): build a public GitHub-hosted demo site named Demox, inspired by the structure of a real-world-asset marketplace landing page, to demonstrate AI website-building capability. Originating Codex session stalled before delivering anything. This run started fresh.

## Boundary
Demox is an **original, demonstration brand**. No third-party logos, copy, image assets, scripts, or source files were copied. Layout shape (fixed nav, hero with right-side dashboard mock, dual investor/issuer split, marketplace deal grid, asset categories, four-step process, ecosystem band, CTA, footer) takes inspiration from common real-world-asset marketplace landing pages, but every line of HTML, CSS, JS, and copy here was authored from scratch.

## Stack
- Vanilla static HTML / CSS / JS (no build step)
- Google Fonts: Inter (body) + Space Grotesk (display)
- All visuals are CSS + inline SVG (no external image hotlinks)
- Deployed via GitHub Pages, source branch `main`, root path

## Structure
```
demox-site/
  index.html         # Landing page (single page, anchor nav)
  css/style.css      # All styles (~22kB)
  js/main.js         # Mobile nav toggle + footer year
  img/favicon.svg    # Original SVG mark
  README.md          # How to run / how Pages is wired
  SUMMARY.md         # This document
  docs/screenshots/  # Live-URL desktop + mobile captures
  .nojekyll          # Skip Jekyll, serve files as-is
```

## Sections (matches acceptance criteria)
1. Sticky nav (logo, anchor links, Invest / Originate CTAs, mobile hamburger menu)
2. Hero — headline + dual CTAs + animated CSS dashboard mock on the right
3. Trust marquee band — proof points in compact uppercase row
4. Investor / Issuer split — two large feature cards with check-lists and CTAs
5. Live marketplace — 6 deal cards across credit / real estate / infrastructure / growth, with metrics, allocation bar, and "View memo" CTA
6. Asset universe — 6 category tiles with original copy
7. How it works — 4-step process
8. Ecosystem — 6 partner-role cards (custody, fund admin, audit, identity, trustee, legal)
9. CTA band — final dual call-to-action
10. Footer — brand + 3 link columns + legal disclaimer + auto-year

## Design tokens
- Background: deep navy `#0a0b14` → `#161936` gradient field
- Accent: violet `#7b5cff` → blue `#4fb6ff` gradient
- Secondary accent: amber `#f3a36c` for issuer-side surfaces (deliberate contrast variation, not a flat purple monolith)
- Typography: Space Grotesk (display) / Inter (body)
- Radius scale: 8 / 14 / 22 px
- Responsive breakpoints at 1024px (3-col → 2-col) and 760px (2-col → 1-col + hamburger)

## Verification

### Local
- `python3 -m http.server 8741` served the site
- `curl -s http://127.0.0.1:8741/` → HTTP 200, full HTML
- Headless desktop (1440×3500) and mobile (390×4800) Chrome captures inspected. Initial captures showed pre-paint dim sections due to a scroll-reveal IntersectionObserver race; removed that mechanism in commit `dd0d2fe`. Re-captures show every section fully rendered.

### Live (public URL)
- `curl -sIL https://frankhli843.github.io/demox-site/` → HTTP 200 from `server: GitHub.com`
- `css/style.css`, `js/main.js`, `img/favicon.svg` all return HTTP 200 with expected byte counts
- Pages build for commit `dd0d2fe` reached `status: built` on poll iteration 4
- Headless captures of the live URL saved at `docs/screenshots/live-desktop.png` and `docs/screenshots/live-mobile.png`
- Mobile capture confirms hero, dashboard mock, split cards, deal grid all stack cleanly with readable type and no overlap

## Outstanding risk / follow-up
- Site is intentionally a single-page demo. Anchor links cover all nav targets. There are no real subscription / form endpoints — every CTA is a `#section` anchor by design.
- Custom domain is not configured. Default `*.github.io` host is HTTPS-enforced.
- If Frank later wants a real form (contact, waitlist), wire up Formspree or similar — no backend exists today.
