# Implementation Plan: Wellness Centre Website

**Branch**: `001-wellness-centre-website` | **Date**: 2026-09-26 | **Spec**: [spec.md](spec.md)

**Input**: Feature specification plus planning constraints: Next.js static output, no database or API integration, embedded mock content, responsive mobile support, and SEO.

## Summary

Build a four-route informational website for the wellness centre using Next.js App Router and static export. Keep offerings, FAQs, centre details, and page metadata in local source content; use locally hosted assets and no runtime data services. Give the site an energetic editorial visual identity balanced with calm, trustworthy details. Provide responsive accessible navigation and static search metadata, canonical URLs, Open Graph data, `robots.txt`, and a sitemap.

## Technical Context

**Language/Version**: TypeScript with the version supported by the pinned Next.js 16.x release

**Primary Dependencies**: Next.js 16.x App Router and its compatible React version; no additional runtime dependencies

**Storage**: None. Content and assets are embedded as local source files.

**Testing**: Next.js production build/static export; TypeScript and lint checks; manual route, responsive, keyboard, and SEO artifact review; mobile Lighthouse audit

**Target Platform**: Static hosting serving exported HTML, CSS, JavaScript, and local assets; current desktop and mobile browsers

**Project Type**: Static multi-page web application

**Performance Goals**: Target Core Web Vitals "good" thresholds on mobile: LCP <= 2.5 seconds, INP <= 200 milliseconds, and CLS <= 0.1. Treat lab audits as pre-release signals; field results require a deployed site and real traffic.

**Constraints**: `output: 'export'`; no database, API integration, forms, user accounts, runtime server features, analytics, or external content feeds. Set the production origin through a build-time `SITE_URL` value before a release build. Use local, pre-optimized images because the default Next.js image optimization service requires a server.

**Scale/Scope**: Four public routes (Home, About, FAQ, Contact), seven named offerings, a small set of FAQ entries, and static mock centre details.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- **I. Static Delivery - PASS**: All routes and content are generated at build time and served as static files. No request-time application behavior is required.
- **II. Accessible, Responsive Experience - PASS**: Use semantic page structure, keyboard-operable navigation and controls, readable layouts at mobile and desktop sizes, and meaningful image alternatives.
- **III. Privacy and Security - PASS**: Do not collect visitor data, add accounts, or embed credentials. Contact details are clearly mock content; no form or tracking is included.
- **IV. Performance and Resilience - PASS**: Keep essential content and images local, avoid unnecessary client-side code, and make primary content independent of third-party resources.
- **V. Simplicity and Verification - PASS**: Use a small App Router page tree and local content modules; verify the exported site, key journeys, responsive layout, keyboard use, and SEO files before release.
- **Gate result: PASS**. No constitution exception or added server-side component is required.
- **Post-design gate result: PASS**: The Phase 1 content model remains local and non-persistent; the UI contract and validation guide preserve static delivery, responsive keyboard access, mock-data privacy, lightweight assets, and direct verification. No design artifact introduces a constitution exception.

## Project Structure

### Documentation (this feature)

```text
specs/001-wellness-centre-website/
├── plan.md              # This file (/speckit-plan command output)
├── research.md          # Phase 0 output (/speckit-plan command)
├── data-model.md        # Phase 1 output (/speckit-plan command)
├── quickstart.md        # Phase 1 output (/speckit-plan command)
├── contracts/           # Phase 1 output (/speckit-plan command)
└── tasks.md             # Phase 2 output (/speckit-tasks command - NOT created by /speckit-plan)
```

### Source Code (repository root)

```text
next.config.ts
package.json
public/
└── images/
src/
├── app/
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── faq/page.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   ├── robots.ts
│   ├── sitemap.ts
│   └── globals.css
├── components/
└── content/
    ├── centre.ts
    ├── faqs.ts
    └── offerings.ts

**Structure Decision**: One Next.js App Router project at the repository root. Keep route files in `src/app`, reusable presentational pieces in `src/components`, embedded sample content in `src/content`, and local images in `public/images`. There is no separate backend, data service, or API contract. The public UI contract is documented in [contracts/website-ui.md](contracts/website-ui.md).
**Structure Decision**: One Next.js App Router project at the repository root. Keep route files in `src/app`, reusable presentational pieces in `src/components`, embedded sample content in `src/content`, and local images in `public/images`. There is no separate backend, data service, or API contract. The public UI contract is documented in [contracts/website-ui.md](contracts/website-ui.md).

