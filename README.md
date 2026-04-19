# Astro Academics Page
An Astro template for your academic portfolio. This template is strongly inspired by [academic pages](https://github.com/academicpages/academicpages.github.io) and [astro paper](https://github.com/satnaing/astro-paper).

Designed to be easy to use and customize, with a focus on content and presentation.

## Customization Guide

### 1. Update Site Configuration
Edit `src/config.ts` to change the site title, description, and social links.

### 2. Add Your Content
- **Publications**: Add your publications to `src/content/publications/`.
- **Blog Posts**: Add your blog posts to `src/content/posts/`.
- **Projects**: Add your projects to `src/content/projects/`.
- **Bio**: Edit `src/content/bio.md` to update your biography.

### 3. Customize Appearance
- **Colors**: Edit `src/styles/global.css` to change the color scheme.
- **Layout**: Edit `src/layouts/Layout.astro` to change the layout.

### 4. Deploy
Push your changes to GitHub and deploy to Netlify, Vercel, or any other hosting provider.

## ✅ Project Status & Progress

- [x] **Core Refactor**: Implemented "Extreme Modular Architecture".
- [x] **Unified Schema**: Standardized frontmatter across all collections.
- [x] **Tag System**: Unified hashtag-style taxonomy.
- [x] **Performance Script**: Integrated Lighthouse auditing CLI.
- [x] **Aesthetics**: Modern tech-editorial UI with dark mode.
- [ ] Add BibTeX support
- [ ] Add examples with images
- [ ] Improve documentation
- [ ] Configure .ts based theme switching

## 🚀 Performance & SEO

This project is optimized for speed and scholarly discoverability. By self-hosting fonts and critical CSS, we achieve near-perfect metrics.

![Performance](https://img.shields.io/badge/Performance-100-brightgreen.svg)
![Accessibility](https://img.shields.io/badge/Accessibility-100-brightgreen.svg)
![Best_Practices](https://img.shields.io/badge/Best_Practices-100-brightgreen.svg)
![SEO](https://img.shields.io/badge/SEO-100-brightgreen.svg)

### Audit it yourself
To run a full Lighthouse audit across all pages:
```bash
npm run build
npm run preview
npm run lighthouse
```
This will build the project and launch [Unlighthouse](https://unlighthouse.dev/) for a deep-scan.