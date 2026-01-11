# Portfolio Website (Next.js) — GitHub Pages Live Demo

This repo is set up to deploy a **static** Next.js build to **GitHub Pages** using GitHub Actions.

## Local development
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Deploy to GitHub Pages (live demo)
1. Push to the `main` branch.
2. In GitHub: **Settings → Pages**
   - **Build and deployment** → **Source**: select **GitHub Actions**
3. After the workflow finishes, your site will be available at:
   - `https://<your-username>.github.io/<your-repo-name>/`

### Notes
- This project uses `output: "export"` so it can be hosted on GitHub Pages (no server required).
- `basePath` is set automatically from `GITHUB_REPOSITORY` during the GitHub Actions build.
