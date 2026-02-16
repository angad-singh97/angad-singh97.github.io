# Angad Singh | Systems Engineer Portfolio

Minimalist, high-performance static portfolio. Built with Astro, Tailwind CSS, and Shiki.

## Stack

- **Astro** — Static site generation
- **Tailwind CSS** — Styling (JetBrains/VSC Dark theme)
- **Shiki** — C++/Verilog syntax highlighting
- **KaTeX** — LaTeX math in blog posts

## Requirements

- Node.js 18.20.8+ (20+ recommended). Use `nvm use` if you have `.nvmrc`.

## Commands

```bash
npm run dev    # Start dev server (localhost:4321)
npm run build  # Build static site to dist/
npm run preview # Preview production build
```

## Deploy

The site is 100% static. Deploy the `dist/` folder to:

- **Vercel** — `vercel deploy`
- **Netlify** — Drag `dist/` or connect repo
- **GitHub Pages** — Push `dist/` to `gh-pages` branch

Update `site` in `astro.config.mjs` to your production URL before building.

## Structure

- `src/pages/` — Routes (index, blog)
- `src/content/blog/` — Markdown blog posts
- `src/layouts/` — Base layout with SEO meta
- `public/` — Static assets (resume.pdf, favicon, robots.txt)
