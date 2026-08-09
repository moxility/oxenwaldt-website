# oxenwaldt.com

Magnus Oxenwaldt's personal site: essays, the *Future Bytes* podcast, speaking,
and the companion pages for the moxapps iPhone portfolio.

Astro 5 (static) · Tailwind 4 · TypeScript · deployed to Vercel from the CLI.

---

## Read this before deploying

Three things about this project are counter-intuitive, and each one has cost real
time:

1. **`vercel --prod` uploads the working tree, not `HEAD`.** Whatever is on disk
   goes live, committed or not.
2. **Vercel is not connected to GitHub.** No webhooks, no deployments on push —
   pushing to `main` deploys *nothing*. `git push` is backup and history only.
3. **Therefore a clean checkout is not automatically safe to deploy.** For a long
   time production was ahead of `HEAD`, and deploying a fresh clone would have
   silently reverted the live site.

As of 2026-08-08 the working tree and `HEAD` agree, and it is worth keeping that
way — commit before you deploy. `scripts/deploy.ps1` warns when they don't.

To prove which state is live, hash one file three ways:

```bash
f=public/blog-images/<some-file>.png
sha256sum "$f"; git show "HEAD:$f" | sha256sum
curl -s "https://www.oxenwaldt.com/${f#public/}" | sha256sum
```

---

## Commands

```powershell
npm install
npm run dev                 # localhost:4321
npm run build               # -> dist/
npm run preview

.\scripts\deploy.ps1        # check + build + deploy to production
.\scripts\deploy.ps1 -WhatIf   # build and check only, never deploys
```

### Content

```powershell
npm run episodes:sync                    # new Future Bytes episodes from Acast
npm run episodes:sync -- --force         # rewrite all from the feed
npm run episodes:sync -- --force --prune # ...and delete files a rename orphaned
.\scripts\add-speaking.ps1               # add a speaking entry
python scripts\indexnow-submit.py        # ping search engines after deploying
```

### Checks

```powershell
npm run apps:check-links    # every root-relative link resolves in dist/
npm run apps:check-store    # App Store links point at listings that exist
```

Both run automatically inside `deploy.ps1`. Keep them at zero.

---

## Layout

```
src/pages/          routes; src/pages/apps/ is the app portfolio hub
src/content/        blog/, episodes/, speaking/ — markdown collections
src/data/apps.mjs   THE source of truth for the moxapps companion pages
scripts/            all operational tooling, versioned
public/<slug>/      generated per-app pages (see below)
public/aiact/app/   EU AI Act Navigator, running in the browser
public/azureai/app/ Azure AI Exam Prep, running in the browser
```

## The app companion pages

`public/<slug>/{index,privacy,terms,support}.html` are **generated**. Edit
`src/data/apps.mjs`, then:

```powershell
npm run apps:build
```

Editing the HTML directly works until the next build overwrites it.

- They are static `.html` files, not Astro routes, because Apple's store listings
  already point at those exact URLs — **and extensionless URLs 404 on this host**,
  so every cross-link needs its `.html` suffix.
- `aiact` is flagged `generated: false` and is hand-authored; anything else added
  the same way must set that flag or it will be overwritten.
- App Store links are gated on `storeLive`, which is verified against
  `itunes.apple.com/lookup`. An App Store Connect record is **not** a live
  listing — most of the portfolio has a record and no public page, and linking
  those ships 404s. Re-run `npm run apps:check-store` after any release.
- Apps with a browser build set `webApp`, which makes "Use it in your browser"
  the primary call to action.

### Adding a web build for an app

Expo static exports go in `public/<slug>/app/` and need a rewrite in
`vercel.json` so client-side deep links survive a hard refresh.

**Watch the `.gitignore`.** Expo exports contain a literal
`assets/node_modules/@expo/vector-icons/…` path, and an unanchored
`node_modules/` pattern matches at *every* depth — that silently dropped 402 KB
of fonts and navigation icons from one export. Every pattern in `.gitignore` is
anchored with a leading `/` for this reason. After adding an export:

```bash
git status --porcelain --ignored public/<slug>/app | grep '^!!'
```

Anything listed there that is source rather than build output is a bug.

---

## Conventions

- Blog hero images are matched to posts **by slug**: `public/blog-images/<post-id>.png`.
  A post without one falls back to a placeholder — no dead `<img>`.
- Episodes are generated from the Acast feed; don't hand-edit them, they get
  overwritten. Fix the sync script instead.
- `llms.txt` / `llms-full.txt` are generated from the same collections, so new
  content lands there automatically.

## Known debt

- **No CI, deliberately.** The checks run in `deploy.ps1`, which refuses to deploy
  when they fail — and deploys only ever happen from this machine, against the
  working tree. GitHub Actions would run the same checks a second time, on a
  snapshot that is not what ships.

  It would also cost a permission grant: the stored token carries
  `gist, read:org, repo` and no `workflow` scope, so anything touching
  `.github/workflows/` is rejected — `404`, not `403`, via both the `gh` CLI and
  the GitHub MCP server (tested 2026-08-09; an identical write to a
  non-workflow path returns `200`). Granting it needs an interactive device-flow
  login: `gh auth refresh -h github.com -s workflow`.

  Not worth it at this size. Revisit if anyone starts pushing from a second
  machine, or if PRs become part of the workflow — those are the cases where a
  check that runs *away* from the deploy box earns its keep.

  Note for anyone tempted by CI as a safety net: it would not have caught the
  2026-08-08 hero-image regression. That bug passed `check-links` (a placeholder
  is a valid link) and was only found by looking at the deployed site. Checks
  catch what they are written to catch.

- **This repo is public.** That is fine for a personal site — the content is
  published anyway, and the only keys in it are Supabase **anon** keys, which are
  RLS-protected and ship in every app binary by design (verified: `role=anon`,
  no `service_role`). Worth knowing before anything private goes in.

- `.git` is ~332 MB against ~174 MB of current images: every image regeneration
  commits a fresh copy of every hero. Worth addressing, but not by rewriting
  history under a site that deploys from the working tree.

- The largest blog heroes are ~3 MB, heavier than they need to be for the web.

- Older duplicates of some tooling still sit **outside** the repo in the project
  root (`generate_blog_images.py`, `scrape_linkedin_images.py`,
  `scrape_linkedin_v2.py`) alongside run logs. `scripts/` in this repo is the
  authoritative copy; the loose ones are superseded and were left in place rather
  than deleted, since they are not in version control and deletion would be
  irreversible.
