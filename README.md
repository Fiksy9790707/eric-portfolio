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

The Vite dev server does not emulate Vercel serverless functions by itself. On plain `npm run dev`, the GitHub activity section can fall back to bundled public data. The visible contact section uses direct email, GitHub, and resume links. On Vercel, `/api/*` routes are served automatically.

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
vercel.json
```

`api/` is at the repository root because Vercel detects root-level serverless functions there for Vite projects.

The app uses a small custom React router instead of a heavy routing dependency. Current client-side routes include:

- `/about`
- `/projects`
- `/case-studies/wafer-defect-detection`
- `/case-studies/silicon-diaries`
- `/lab`
- `/lab/machine-learning-labs`
- `/lab/computer-construction-minirv`
- `/lab/software-construction-aircraft-war`
- `/writing`
- `/notes/building-ai-campus-assistant`
- `/notes/yolo-defect-detection-notes`
- `/notes/local-llms-personal-automation`
- `/notes/coursework-to-real-projects`

`vercel.json` rewrites the page, case-study, lab, and notes routes to `index.html` so direct links work on Vercel.

## Update Personal Information

Edit:

```text
src/data/profile.ts
```

This file contains identity, about copy, current building items, projects, skills, timeline, mock blog previews, contact links, last updated date, and fallback GitHub repository data.

The Project Lab page is also data-driven from `labExperiments`. It summarizes selected local coursework folders as learning evidence. These entries should stay conservative: use them to show foundations and experiments, not to claim polished public products.

Important TODO fields:

- `identity.email`
- `identity.blogUrl`
- `contactLinks` entries for Resume and Blog
- `site.productionUrl`
- `site.ogImage`

The public resume PDF lives at:

```text
public/resume.pdf
```

Project screenshots and visual evidence live at:

```text
public/project-media/
```

Only add media that is either a real project screenshot, a public repository asset, or clearly labeled as a concept visual. Do not present concept art as runtime screenshots.

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

Case studies can also include an `evidence` array. Use it to separate:

- public repository links
- screenshots or visual assets that are already safe to show
- TODO evidence that still needs verification
- private or NDA boundaries that should not be disclosed

This keeps portfolio claims grounded in visible proof rather than adjectives.

## Update Project Lab

Edit the `labExperiments` array in:

```text
src/data/profile.ts
```

Each lab item supports:

- `title`
- `course`
- `status`
- `summary`
- `stack`
- `sourcePath`
- `evidence`
- `detail`

The current entries were organized from selected folders under `D:\HIT_study\01_Courses\HIT_S2`. The site displays public-facing folder labels such as `HIT_S2/Machine_Learning` instead of clickable local paths, because local files are not accessible to public visitors.

Keep the public Lab page selective. It currently shows only three higher-signal entries:

- Machine Learning Lab Notes
- miniRV / Computer Construction Practice
- Aircraft War Java Coursework

Lower-signal coursework archives can stay on the local machine without being shown publicly.

## Update Writing Notes

Edit the `blogPosts` array in:

```text
src/data/profile.ts
```

Each note supports:

- `slug`
- `title`
- `date`
- `status`
- `source`
- `filters`
- `relatedProject`
- `tags`
- `externalUrl`
- `externalLabel`
- `summary`
- `notes`
- `next`
- `sections`

The notes are static content for now. To publish a new blog entry, add one object to `blogPosts`. Avoid decorative cover images; only add media when it is a real screenshot, diagram, or original article asset that helps explain the work.

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

It validates basic required fields and email shape. In version one it does not send email and does not write to a database. It returns a success message explaining that this is a demo placeholder. The current frontend intentionally does not render a fake contact form; it uses direct contact links instead.

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
- The contact area uses direct links. Real form submission can be added later through Vercel and an email provider integration.
- Direct deep links such as `/notes/...` are configured for Vercel. On GitHub Pages, use in-app navigation from the mirror homepage unless a Pages fallback is added later.

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
