# masterPortfolio

---

## What this is

This project is a React-based portfolio template originally adapted from masterPortfolio. It includes an easy-to-edit `src/portfolio.js` for personal info, a splash/logo loader, and optional GitHub data fetching utilities.

This fork has been simplified — contributor lists, community badges, and other upstream metadata removed so it's just your portfolio.

---

## Quick start

1. Install dependencies:

```bash
npm install
```

2. Run locally (development):

```bash
npm start
```

The site will open at `http://localhost:3000` by default.

3. Create a production build:

```bash
npm run build
```

The build will be generated in the `build/` folder.

---

## Connect this folder to the GitHub repository `STiFLeR7/masterPortfolio`

If you already have a remote set and want to replace it with your own repository, run the commands below:

```bash
# remove old remote (if present)
git remote remove origin

# add your GitHub repo as remote
git remote add origin https://github.com/STiFLeR7/masterPortfolio.git

# push the current repo to GitHub (main branch recommended)
git branch -M main
git push -u origin main
```

---

## Personalize the site

Most content is controlled from `src/portfolio.js`. Edit these sections to personalize the site:

- `settings` — toggle `isSplash` to `false` to disable the animated splash screen.
- `greeting` — your name, title, subtitle, resume link, and GitHub/portfolio links.
- `socialMediaLinks` — URLs for LinkedIn, Instagram, GitHub, etc.
- `skills` — the skills object controls the icons and skill lists shown on the site. For custom images, add them to `src/assets/images` and use the `imageSrc` property.

Also check `src/components/Loader` if you want to customize the splash/logo animation.

---

## Optional: Fetch GitHub data

This project contains a script `git_data_fetcher.mjs` to populate GitHub-related sections (repos, PRs, etc.). If you want to use it:

1. Create a `.env` file using `env.example` as a template.
2. Fill in `GITHUB_TOKEN` and set `GITHUB_USERNAME=STiFLeR7`.
3. Run:

```bash
node git_data_fetcher.mjs
```

This will fetch your GitHub information and update the local JSON used by the site.

---

## Deploying

You can deploy the generated `build/` folder to any static host (Netlify, Vercel, GitHub Pages, S3, etc).

**GitHub Pages (simple):**

1. Generate build: `npm run build`.
2. Option A — push `build` contents to a branch (e.g. `gh-pages`) or to the `main` branch of a repository named `STiFLeR7.github.io`.
3. Enable GitHub Pages in repository settings and select the correct branch/folder.

---

## Tips

- If fonts or assets aren't loading after deployment, ensure `homepage` in `package.json` matches your host (for GitHub Pages use `https://STiFLeR7.github.io` or `./` for relative).
- To disable the splash animation quickly set `isSplash: false` in `src/portfolio.js`.
- Keep secrets (like `GITHUB_TOKEN`) out of your repo and in environment variables.

---

## License

This repository is provided under the MIT License. See `LICENSE` for details.
