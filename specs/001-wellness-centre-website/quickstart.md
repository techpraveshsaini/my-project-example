# Quickstart: Wellness Centre Website Validation

This guide applies after the Next.js application is scaffolded in the repository root. The repository currently contains planning files only. Use the Node.js release supported by the pinned Next.js version and npm.

## Prerequisites

- Node.js and npm installed.
- The application dependencies installed from the generated lockfile.
- `SITE_URL` set to the intended site origin for production builds. Use a local origin only for local preview; do not publish a build containing a sample or localhost canonical origin.

## Run Locally

```sh
npm ci
npm run dev
```

Open the local development URL printed by Next.js. Confirm the four routes load: `/`, `/about/`, `/faq/`, and `/contact/`.

## Validate the Production Export

```sh
npm run lint
npm run typecheck
SITE_URL="https://wellness.example" npm run build
```

`https://wellness.example` is an example only; replace it with the actual production origin before release. The build must complete and create `out/` without runtime server requirements.

Serve the export locally with a static file server, for example:

```sh
npx serve out
```

Verify that all four route URLs resolve to their exported pages and local images load. Confirm `robots.txt` and `sitemap.xml` are available at the site root.

## Acceptance Checks

1. Home displays Yoga, Gym, Zumba, Dance, health checkups, physician consultation, and psychologist consultation.
2. Home navigation reaches About, FAQ, and Contact; navigation works with keyboard alone and remains usable on a narrow mobile viewport.
3. About and FAQ contain readable sample content; Contact presents mock contact details without a submission form.
4. Each exported route has a distinct title and description, an absolute canonical URL using the build's `SITE_URL`, and accurate Open Graph metadata.
5. `robots.txt` permits crawling of public pages and names the sitemap; the sitemap contains exactly the four canonical routes on the same origin.
6. No page requires a database, API, remote feed, analytics, or server-side request handling to render its primary content.
7. Run a mobile Lighthouse audit on the static preview and review accessibility, SEO, and performance findings. Target the Core Web Vitals "good" thresholds in representative tests; record actual field performance only after the site has real traffic.
8. Review all health-service copy and structured output to ensure mock details are not presented as verified medical or business facts.

The `typecheck` script is a planning expectation; define it when the application is scaffolded. Browser scenarios in this guide are verified manually.
