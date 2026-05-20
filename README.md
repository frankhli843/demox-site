# Demox

A demonstration marketplace landing page for real-world asset investing. Self-contained static HTML/CSS/JS with no build step, deployed via GitHub Pages.

## Local preview

```bash
cd code/demox-site
python3 -m http.server 8080
# open http://localhost:8080
```

## Structure

```
demox-site/
  index.html       # Landing page
  css/style.css    # All styles
  js/main.js       # Nav toggle + footer year
  img/favicon.svg  # Original SVG mark
```

## Deployment

GitHub Pages serves the `main` branch root. Push to `main` and Pages publishes automatically at https://frankhli843.github.io/demox-site/.

## Notes

This is an original Demox-branded implementation. The layout takes inspiration from common real-world-asset marketplace landing pages but does not copy any third-party branding, copy, or source. All visuals are built from CSS and inline SVG.
