# Mahmoud Salah - Cybersecurity Portfolio

A premium, fast, and SEO-optimized professional portfolio built for Mahmoud Salah (`m0xsa1ah`), a Cybersecurity Engineer & Penetration Tester.

## 🚀 Features

*   **Next.js 15 (App Router)** & React 19
*   **Fully Static**: Configured for `output: 'export'`
*   **Tailwind CSS v4** & Framer Motion for animations
*   **Advanced MDX Blog**: Writeups powered by `next-mdx-remote`, `rehype-pretty-code` (Shiki), and `remark-gfm`. Features auto-generated Table of Contents, scroll progress, and copy-to-clipboard code blocks.
*   **Interactive Terminal**: A fake interactive terminal page (`/terminal`) with commands.
*   **SEO & Security Hardened**: JSON-LD Person schema, OpenGraph tags, automated `sitemap.xml`/`robots.txt`, and basic Content Security Policy (CSP).

## 🛠️ Local Development

1.  **Install Dependencies**
    ```bash
    npm install
    ```
2.  **Run Development Server**
    ```bash
    npm run dev
    ```
3.  Open [http://localhost:3000](http://localhost:3000)

## 📝 Customizing Content

Most site content is driven by configuration files rather than hardcoded in components:

*   **Global Config & Data**: Edit `src/config/data.ts`. This file handles your bio, skills, experience, certifications, and project lists.
*   **Writeups**: Add `.mdx` files to `src/content/writeups/`. The system will automatically parse the frontmatter to generate the categories, tags, routes, and reading time.
*   **Resume**: Place your PDF resume at `public/CV.pdf` for the terminal download command to work.
*   **Profile Picture**: Place your high-quality image at `public/p.jpeg`.

## 🌐 Deployment Instructions

Because this site uses `output: 'export'`, it generates plain HTML/CSS/JS files and can be hosted anywhere.

### Option 1: Vercel (Recommended)

1.  Push your code to a GitHub repository.
2.  Log into [Vercel](https://vercel.com/) and click **Add New Project**.
3.  Import your GitHub repository.
4.  Vercel will automatically detect Next.js.
5.  Click **Deploy**.

### Option 2: GitHub Pages

1.  Update `next.config.ts`: Add `basePath: '/your-repo-name'` if deploying to a project page, or leave as is if deploying to `<username>.github.io`.
2.  Add a GitHub Actions workflow `.github/workflows/deploy.yml`:
    ```yaml
    name: Deploy Next.js site to Pages
    on:
      push:
        branches: ["main"]
    permissions:
      contents: read
      pages: write
      id-token: write
    concurrency:
      group: "pages"
      cancel-in-progress: false
    jobs:
      build:
        runs-on: ubuntu-latest
        steps:
          - name: Checkout
            uses: actions/checkout@v4
          - name: Setup Node
            uses: actions/setup-node@v4
            with:
              node-version: "20"
          - name: Install dependencies
            run: npm ci
          - name: Build with Next.js
            run: npm run build
          - name: Upload artifact
            uses: actions/upload-pages-artifact@v3
            with:
              path: ./out
      deploy:
        environment:
          name: github-pages
          url: ${{ steps.deployment.outputs.page_url }}
        runs-on: ubuntu-latest
        needs: build
        steps:
          - name: Deploy to GitHub Pages
            id: deployment
            uses: actions/deploy-pages@v4
    ```
3.  Commit and push to `main`. Go to GitHub Repo Settings -> Pages, and ensure the source is set to GitHub Actions.

## 🔐 Security Notes for Production
*   A basic CSP meta tag is included in `layout.tsx`. For stricter environments, adapt it via server headers (e.g., in Vercel's `next.config.ts` headers section, though note headers aren't supported with pure static export without a hosting adapter).
*   Inline scripts are minimized.
