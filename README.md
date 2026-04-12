# anantkaushik.com

Personal portfolio website for Anant Kaushik, built with React. Deployed as a static site on AWS S3.

Live at: [www.anantkaushik.com](https://www.anantkaushik.com)

---

## Tech Stack

| Category | Libraries / Tools |
|---|---|
| UI Framework | React 18, React Bootstrap 2, Bootstrap 4 |
| Routing | React Router DOM 5 |
| Project Filtering | ShuffleJS 5 |
| Language | JavaScript (JSX) |
| Build Tool | Vite 6 |
| Deployment | AWS S3 (via AWS CLI) |

---

## Project Structure

```
src/
├── components/       # Reusable UI atoms (Skill, ProjectItem, Footer, etc.)
├── containers/       # Page-level compositions (Home, Resume, Project, NavBar, etc.)
├── views/
│   └── MainPage.jsx  # Root layout: 3-column (Profile | Nav | Content)
├── routes/           # Route definitions
├── utils/
│   ├── data.jsx      # All content data (experience, skills, projects, publications)
│   └── history.jsx   # Router history
├── assets/           # CSS, fonts, images, resume PDF
└── index.jsx         # React entry point
public/
├── index.html        # HTML template with meta/SEO tags
├── sitemap.xml       # XML sitemap
└── robots.txt        # Search engine crawl rules
```

**All profile content** (work experience, skills, projects, publications) lives in [`src/utils/data.jsx`](src/utils/data.jsx) as a single source of truth.

---

## Getting Started

**Install dependencies**

```bash
npm install
```

**Run development server**

```bash
npm start
```

Opens at `http://localhost:5173` with hot module replacement.

**Production build**

```bash
npm run build
```

Outputs optimized static files to `/dist`.

**Preview production build locally**

```bash
npm run preview
```

**Deploy to S3**

```bash
npm run deploy
```

Builds and syncs `/dist` to the S3 bucket `www.anantkaushik.com` using the AWS CLI.

---

## Routes

| Path | Content |
|---|---|
| `/home` | About section and tech skills |
| `/resume` | Work experience and education |
| `/projects` | Filterable project cards |

---

## Configuration

| File | Purpose |
|---|---|
| `src/utils/data.jsx` | Content data (edit this to update site content) |
| `vite.config.js` | Vite config: React plugin and `src/` path aliases |
| `index.html` | App entry point, SEO meta tags, canonical URL |
| `jsconfig.json` | `baseUrl: src/` for IDE path resolution |
