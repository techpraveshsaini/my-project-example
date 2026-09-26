# Research: Wellness Centre Website

**Date**: 2026-09-26
**Scope**: Static Next.js delivery, responsive user experience, and baseline SEO

## Decisions

### Static application shape

- **Decision**: Use the Next.js App Router with static export (`output: 'export'`) and four explicit routes. Build output is the `out/` directory, served by a static host.
- **Rationale**: The requested content is fixed mock data, there is no database or API integration, and visitors need only informational pages. Static output satisfies the constitution and avoids a runtime server.
- **Alternatives considered**: Server-rendered Next.js and a headless CMS were rejected because they add runtime or external data dependencies without serving a stated requirement.
- **Constraints**: Do not use request-time data, Server Actions, cookies/headers, Proxy, ISR, or other server-dependent features. Use `trailingSlash: true` so each route exports as a directory index and hosting can serve routes consistently. Pin the current stable Next.js 16.x patch and its compatible React/TypeScript versions when the application is scaffolded.
- **Source**: [Next.js Static Exports](https://nextjs.org/docs/app/guides/static-exports)

### Content and presentation

- **Decision**: Keep offerings, FAQ entries, centre details, and metadata in local source modules. Use local, pre-optimized image assets with fixed dimensions or aspect ratios; do not rely on remote image feeds or the default server-based Next.js image optimizer.
- **Rationale**: Local content is deterministic at build time and remains available without an external service. Explicit image sizing reduces layout shift; a small server-rendered page tree limits client JavaScript.
- **Alternatives considered**: Remote feeds, remote image optimization, and client-side data fetching were rejected because the user explicitly requests embedded mock data and static output.
- **Source**: [Next.js Static Exports: Image Optimization](https://nextjs.org/docs/app/guides/static-exports#image-optimization)

### Page metadata and canonical URLs

- **Decision**: Define a static metadata object for each route using the Next.js Metadata API. Provide distinct, accurate titles and descriptions, a consistent site name, Open Graph fields, and one absolute self-referencing canonical URL per route. Use a single `SITE_URL` build-time value as `metadataBase` and as the origin for sitemap URLs.
- **Rationale**: All page content and metadata are known at build time. Static metadata is included in generated HTML without external requests. One site origin and route convention keep canonicals and sitemap entries consistent.
- **Alternatives considered**: Runtime `generateMetadata` backed by external data was rejected because metadata is static and there are no APIs. Canonical URLs are not guessed; production builds must receive the real public origin.
- **Release gate**: A production export MUST use the real production origin, never a sample or localhost origin. Development previews may use a local origin and are not production artifacts.
- **Sources**: [Next.js Metadata API](https://nextjs.org/docs/app/api-reference/functions/generate-metadata), [Google SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide), [Google canonical URL guidance](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)

### Crawlability and social sharing

- **Decision**: Generate a static `robots.txt` that allows public routes and references a static sitemap containing only canonical public URLs. Provide a locally hosted Open Graph share image with descriptive alternative text.
- **Rationale**: A sitemap and robots file help crawlers discover and interpret the small set of public pages. Accurate page content and links remain primary; these files do not guarantee indexing or rankings.
- **Alternatives considered**: Runtime crawl configuration, no sitemap, and remote social images were rejected in favor of build-time, self-contained output.
- **Sources**: [Next.js robots file](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots), [Next.js sitemap file](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap), [Google sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)

### Structured data and health information

- **Decision**: Do not add business or medical structured data to the mock-content release. Add it later only when the centre's name, public website, and any business/location facts are verified and visible on the site.
- **Rationale**: The specification explicitly uses sample details. Invented addresses, hours, credentials, treatment claims, or review information could mislead visitors and search engines. Structured data is optional and does not guarantee a rich search result.
- **Alternatives considered**: Mock `LocalBusiness` or medical-provider markup was rejected as inaccurate. A minimal `Organization` record can be reconsidered after real identity details are supplied.
- **Sources**: [Google Organization structured data](https://developers.google.com/search/docs/appearance/structured-data/organization), [Google structured data policies](https://developers.google.com/search/docs/appearance/structured-data/sd-policies)

### Verification and performance

- **Decision**: Validate the production export and generated SEO files, exercise every route and primary navigation flow in a browser, and manually check keyboard use and representative mobile/desktop layouts. Target the Core Web Vitals "good" thresholds as release performance goals.
- **Rationale**: Build-time checks can catch missing routes and metadata; browser checks validate actual visitor flows. Static hosting removes application server availability and runtime data failure modes, but image weight and client-side code still affect responsiveness.
- **Alternatives considered**: Runtime observability and analytics were excluded because the site has no dynamic service and the constitution prohibits unapproved personal-data collection.
- **Sources**: [Google SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide), [web.dev Core Web Vitals](https://web.dev/articles/vitals)

## Resolved Assumptions

- The application is a new project because the repository contains no application source or package manifest.
- Use the App Router, TypeScript, npm, and the current stable Next.js 16.x patch at implementation time.
- Use four fixed routes and local content; a production domain is supplied as build configuration before release.
- No contact form, appointment booking, analytics, CMS, database, or API integration is part of this plan.
- The site remains English-only unless a later feature request adds localization.
