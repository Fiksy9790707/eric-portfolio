# Eric Portfolio

Public personal portfolio for Eric / 冯学诚, a Computer Science undergraduate at Harbin Institute of Technology, Shenzhen, focused on Applied AI, Computer Vision, Local LLM, and end-to-end AI applications.

This first version is intentionally lightweight: React, Vite, TypeScript, Tailwind CSS, and Vercel serverless API routes. It does not use a database, login system, CMS, paid services, analytics scripts, or exposed secrets.

## Tech Stack

- React
- Vite
- TypeScript
- Tailwind CSS
- Vercel serverless API routes
- Public GitHub REST API without token

## Local Development

Install dependencies:

```bash
npm install
```

Run the frontend locally:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

The Vite dev server does not emulate Vercel serverless functions by itself. On plain `npm run dev`, the GitHub activity section can fall back to bundled public data and the contact form will show a clean unavailable state if `/api/contact` is not served. On Vercel, `/api/*` routes are served automatically.

If Vercel CLI is installed and logged in, you can test frontend and API routes together with:

```bash
vercel dev
```

## Project Structure

```text
src/
  components/
  data/profile.ts
  lib/api.ts
  types/profile.ts
api/
  health.ts
  github.ts
  contact.ts
```

`api/` is at the repository root because Vercel detects root-level serverless functions there for Vite projects.

## Update Personal Information

Edit:

```text
src/data/profile.ts
```

This file contains identity, about copy, projects, skills, timeline, mock blog previews, contact links, last updated date, and fallback GitHub repository data.

Important TODO fields:

- `identity.email`
- `identity.resumeUrl`
- `identity.blogUrl`
- `site.productionUrl`
- `site.ogImage`

After deploying, update the Open Graph URL/image placeholders in `index.html`.

## Update Project Cards

Edit the `projects` array in:

```text
src/data/profile.ts
```

Each project supports:

- `name`
- `subtitle`
- `type`
- `status`
- `description`
- `stack`
- `categories`
- `githubUrl`
- `linkLabel`

If a project has no public repository yet, keep `githubUrl: null` and use a TODO link label.

## API Routes

### `GET /api/health`

Returns a simple health check:

```json
{ "ok": true, "service": "portfolio-api" }
```

### `GET /api/github`

Fetches public GitHub profile and repository data for `Fiksy9790707` without a GitHub token. It reads only public data. If GitHub is unavailable, rate-limited, or fails, it returns bundled fallback repository data from `src/data/profile.ts`.

### `POST /api/contact`

Accepts:

```json
{
  "name": "Your name",
  "email": "you@example.com",
  "message": "Message text"
}
```

It validates basic required fields and email shape. In version one it does not send email and does not write to a database. It returns a success message explaining that this is a demo placeholder.

## Add Real Email Later

Keep all provider keys server-side in Vercel environment variables. Do not expose keys in frontend code.

Possible later options:

- Resend
- SendGrid
- Postmark

Implementation path:

1. Add a provider SDK or use `fetch` from `api/contact.ts`.
2. Add an environment variable in Vercel, such as `RESEND_API_KEY`.
3. Validate input server-side.
4. Send the email from the serverless function.
5. Keep `.env` out of git.

## Add a Database Later

Version one intentionally avoids a database. If persistent contact messages, blog posts, or CMS-like editing are needed later, consider:

- Vercel Postgres
- Supabase
- Neon
- A file-based content workflow for blog posts

Only add a database when there is a real need for persistence or editing workflows.

## Deploy to Vercel

Recommended Vercel settings:

- Framework Preset: Vite
- Install Command: `npm install`
- Build Command: `npm run build`
- Output Directory: `dist`
- Environment Variables: none required for version one

Manual deployment flow:

```bash
git init
git add .
git commit -m "Initial portfolio site"
gh repo create eric-portfolio --public --source=. --remote=origin --push
```

Then import the GitHub repository in Vercel.

If using Vercel CLI:

```bash
vercel
vercel --prod
```

Do not commit `.vercel`, `.env`, `node_modules`, or `dist`.

## Static Mirror on GitHub Pages

This repository also includes a GitHub Actions workflow for a static GitHub Pages mirror.

The mirror is useful when the Vercel `.vercel.app` domain is slow or inaccessible in some regions. It builds the same Vite app with:

```text
VITE_BASE_PATH=/eric-portfolio/
```

Expected mirror URL after GitHub Pages is enabled:

```text
https://Fiksy9790707.github.io/eric-portfolio/
```

Notes:

- The GitHub Pages mirror is static only.
- Vercel serverless API routes under `/api/*` do not run on GitHub Pages.
- The GitHub activity section falls back to bundled public repository data when `/api/github` is unavailable.
- The contact form can render, but real submission needs Vercel or a later email provider integration.

To enable the mirror:

1. Push this repository to GitHub.
2. Open the repository on GitHub.
3. Go to `Settings -> Pages`.
4. Set `Source` to `GitHub Actions`.
5. Push to `main` or manually run the `Deploy GitHub Pages mirror` workflow.

## Public GitHub Source Notes

The first version uses only public information visible from the GitHub profile README and public repositories:

- Profile identity and focus: HIT Shenzhen CS undergraduate, Applied AI, YOLO/object detection, Local LLM development.
- Featured projects: Wafer Defect Detection and Silicon Diaries.
- Public repository fallback list: non-fork repositories from the public GitHub API.

Unverified items remain TODO rather than being presented as confirmed experience.
