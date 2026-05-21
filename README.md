# TKN Markets — site

A static landing page for TKN Markets (a tokenized capital markets infrastructure concept), deployed via GitHub Pages. Single-page, vanilla HTML/CSS/JS, no build step.

## Public URL

https://frankhli843.github.io/demox-site/

The repo name remains `demox-site` from an earlier iteration so the URL stays stable. The site itself is now branded as TKN Markets.

## Local preview

```bash
cd code/demox-site
python3 -m http.server 8080
# open http://localhost:8080
```

## Structure

```
demox-site/
  index.html        # Landing page (single page, anchor nav)
  css/style.css     # All styles
  js/main.js        # Mobile nav toggle + footer year
  img/favicon.svg   # TKN cyan radial mark
  docs/screenshots/ # Desktop + mobile captures
```

## Deployment

GitHub Pages serves the `main` branch root. Push to `main` and Pages publishes automatically.
