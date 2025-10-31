# Personal Website

A minimal, responsive personal website with sections for About, Projects, Experience, Education, and Publications. Built with plain HTML/CSS/JS and deployable on GitHub Pages.

## Edit Your Info

- Open `index.html` and replace "Your Name", email, links, and placeholder text.
- Duplicate and edit the sample project cards and publication items as needed.
- Adjust styles in `styles.css` or scripts in `script.js` (theme/menu toggles).

## Run Locally

You can open `index.html` directly in a browser. For a simple local server:

```bash
python3 -m http.server 8000
```

Visit `http://localhost:8000`.

## Deploy to GitHub Pages

1. Create a new repo on GitHub (e.g., `personal-website`).
2. Initialize git, commit, and push:

```bash
git init
git add .
git commit -m "Initialize personal website"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

3. In the GitHub repo, go to Settings → Pages:
   - Source: Deploy from a branch
   - Branch: `main` and folder `/ (root)`

GitHub will build and host the site at `https://<your-username>.github.io/<your-repo>/`.

### Use a Custom Domain (optional)

Add your domain in GitHub Pages settings. Place a `CNAME` file at the project root with your domain name to enforce it.

## Notes

- The `.nojekyll` file disables Jekyll processing so static files are served as-is.
- No frameworks required. You can freely extend this with a blog, RSS, analytics, etc.


