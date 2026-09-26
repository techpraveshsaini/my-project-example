# Tasks: Wellness Centre Website

**Input**: Design documents from `specs/001-wellness-centre-website/`

**Prerequisites**: `plan.md`, `spec.md`, `research.md`, `data-model.md`, `contracts/`, and `quickstart.md`

**Automated test-authoring tasks**: None; tests were not explicitly requested. Each story retains an independent acceptance check, and the final phase runs build and manual browser/SEO validation.

**Implementation strategy**: Deliver the P1 landing-page experience first after shared setup and route shells. Then complete About/FAQ and Contact as independent story increments. Finish with shared SEO artifacts and release validation.

## Phase 1: Setup

**Purpose**: Initialize the single-project Next.js application and its static build configuration.

- [X] T001 Scaffold a Next.js 16.x App Router TypeScript application at the repository root, creating `package.json`, `tsconfig.json`, `src/app/layout.tsx`, and `src/app/page.tsx`.
- [X] T002 [P] Configure `output: 'export'` and `trailingSlash: true` in `next.config.ts`.
- [X] T003 [P] Configure `lint`, `typecheck`, and `build` scripts in `package.json`.
- [X] T004 [P] Document the build-time `SITE_URL` setting and local-only example value in `.env.example`; state that release builds require the real production origin.

---

## Phase 2: Foundational

**Purpose**: Complete shared styles, centre data, layout, and route shells before story work.

- [X] T005 [P] Define global design tokens, responsive base styles, semantic typography defaults, and visible keyboard focus styles in `src/app/globals.css`.
- [X] T006 [P] Create the shared Centre Profile in `src/content/centre.ts` with these field constraints: `name`: "Non-empty; mark or treat as sample until confirmed"; `tagline`: "Optional; must not imply guaranteed health outcomes"; `purpose`: "Non-empty plain-language sample content"; `approach`: "Informational; no diagnosis or personalized medical advice"; `contactChannels`: "Clearly identify as mock; no submission or collection flow"; `hours`: "Clearly identify as mock; do not imply live availability". Do not fabricate a physical address.
- [X] T007 Create the shared semantic header, footer, and root layout in `src/components/site-header.tsx`, `src/components/site-footer.tsx`, `src/app/layout.tsx`, and `src/app/globals.css`; include links to all four routes and derive `metadataBase` from build-time `SITE_URL`.
- [X] T008 Create static route shells with a page heading in `src/app/about/page.tsx`, `src/app/faq/page.tsx`, and `src/app/contact/page.tsx` so all navigation targets resolve for the P1 increment.

---

## Phase 3: User Story 1 - Explore Wellness Offerings (Priority: P1)

**Goal**: Visitors recognize the centre and find all seven offerings on a distinctive landing page.

**Independent Test**: Open `/` at mobile and desktop widths; find Yoga, Gym, Zumba, Dance, Health Checkup, Physician Consultation, and Psychologist Consultation; operate navigation by keyboard; confirm About, FAQ, and Contact route shells load.

- [X] T009 [P] [US1] Add all seven records in `src/content/offerings.ts` with field constraints: `slug`: "Unique, lowercase, URL-safe"; `name`: "Non-empty; include all seven requested offerings"; `category`: "One of the displayed categories"; `summary`: "Non-empty, sample content; no individualized advice or promised outcomes"; `image`: "If present, file exists and has appropriate alternative text or is marked decorative".
- [X] T010 [P] [US1] Add locally stored, pre-optimized hero, social-share, and offering images at `public/images/wellness-hero.webp`, `public/images/wellness-social.webp`, and `public/images/offerings/`; use explicit dimensions and no remote image feed.
- [X] T011 [US1] Implement the landing page and its responsive styles in `src/app/page.tsx` and `src/app/globals.css` using the energetic editorial direction, calm trustworthy details, all seven local offerings, local imagery, descriptive links, and unique page content.

**Checkpoint**: Home communicates the centre's purpose, shows every requested offering, and links to working route shells without relying on a server or external feed.

---

## Phase 4: User Story 2 - Understand the Centre and Services (Priority: P2)

**Goal**: Visitors learn the centre's purpose and find plain-language answers about its offerings.

**Independent Test**: Visit `/about/` and `/faq/`; confirm the profile is explained in plain language and FAQs answer common activity, checkup, and consultation questions without diagnosis or personalized medical advice.

- [X] T012 [P] [US2] Add static FAQ records in `src/content/faqs.ts` with field constraints: `id`: "Unique"; `question`: "Non-empty and distinct within the list"; `answer`: "Non-empty; do not present diagnosis or personalized medical advice"; `category`: "If set, references an existing offering or approved general category".
- [X] T013 [P] [US2] Implement the About page in `src/app/about/page.tsx` and its responsive styles in `src/app/globals.css` using the shared Centre Profile and clear sample copy about the centre's purpose and general approach.
- [X] T014 [US2] Implement the categorized FAQ page in `src/app/faq/page.tsx` using `src/content/faqs.ts` and descriptive question/answer headings.

**Checkpoint**: About and FAQ are independently readable, use only local sample content, and make no unsupported health claims.

---

## Phase 5: User Story 3 - Find Contact Information (Priority: P3)

**Goal**: Visitors find clearly identified sample contact channels and hours without submitting personal information.

**Independent Test**: Visit `/contact/`; locate the sample contact channels and hours, confirm they are marked as mock information, and confirm no form or submission control is present.

- [X] T015 [P] [US3] Implement the Contact page in `src/app/contact/page.tsx` and responsive styles in `src/app/globals.css` using the shared Centre Profile; clearly mark contact channels and hours as mock and do not add a form, booking, or personal-data collection.

**Checkpoint**: Contact information is readable on mobile and desktop and remains entirely static.

---

## Phase 6: Polish and Cross-Cutting Concerns

**Purpose**: Complete crawlable static output and validate the whole site against the plan and quickstart.

- [X] T016 [P] Add per-route metadata in `src/app/page.tsx`, `src/app/about/page.tsx`, `src/app/faq/page.tsx`, and `src/app/contact/page.tsx`: `route`: "One of `/`, `/about/`, `/faq/`, `/contact/`"; `title`: "Non-empty and distinct per route; accurately describes its page"; `description`: "Non-empty, unique where practical, and accurately summarizes visible content"; `canonicalUrl`: "Derived from the production `SITE_URL` and route; never a sample URL in production"; `openGraphImage`: "Resolves within the static export and has an accurate description". Use the local social-share image and accurate visible content only.
- [X] T017 [P] Generate `robots.txt` through `src/app/robots.ts` to allow crawling of public routes and reference the sitemap using the configured site origin.
- [X] T018 [P] Generate `sitemap.xml` through `src/app/sitemap.ts` with exactly `/`, `/about/`, `/faq/`, and `/contact/` on the configured origin and with the same trailing-slash convention as internal links.
- [X] T019 Run lint, typecheck, and the static build from `package.json` with a preview `SITE_URL`; follow `specs/001-wellness-centre-website/quickstart.md` to verify exported routes, SEO files, keyboard access, mobile/desktop layout, local images, and health-service copy. Repeat the build with the actual production origin before release.

---

## Dependencies and Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies; T001 must complete before T002-T004.
- **Foundational (Phase 2)**: Begins after Setup. T005 and T006 can run in parallel; T007 depends on T005 and T006; T008 depends on T007.
- **User Stories (Phases 3-5)**: Begin after Foundation. US1, US2, and US3 can proceed in parallel after T008.
- **Polish (Phase 6)**: Begins after all three user stories; T016-T018 can run in parallel, then T019 validates the integrated result.

### User Story Dependencies

- **US1 (P1)**: Depends only on Foundation; T009 and T010 can run in parallel, then T011 combines the content and assets.
- **US2 (P2)**: Depends only on Foundation; T012 and T013 can run in parallel, then T014 renders the FAQ records.
- **US3 (P3)**: Depends only on Foundation and can run in parallel with US1 and US2.

### Parallel Opportunities

- After T001, T002, T003, and T004 touch separate files and can run concurrently.
- In Foundation, T005 and T006 touch separate files and can run concurrently.
- In US1, T009 and T010 touch separate paths and can run concurrently.
- In US2, T012 and T013 touch separate files and can run concurrently.
- After Foundation, the complete US3 page task can run alongside US1 and US2 work.
- In Polish, T016, T017, and T018 touch separate metadata/SEO files and can run concurrently after the story pages exist.

## Parallel Execution Examples

### User Story 1

```text
Task T009: Add offering records in src/content/offerings.ts
Task T010: Add local image assets under public/images/
Then run T011 to implement src/app/page.tsx using both.
```

### User Story 2

```text
Task T012: Add FAQ records in src/content/faqs.ts
Task T013: Implement src/app/about/page.tsx
Then run T014 to implement src/app/faq/page.tsx using the FAQ records.
```

### User Story 3

```text
Task T015: Implement src/app/contact/page.tsx
This can run concurrently with T009-T014 after the foundational phase.
```

## Implementation Strategy

### MVP First

1. Complete Phase 1 Setup and Phase 2 Foundation.
2. Complete Phase 3 US1 and stop to verify the landing-page independent test.
3. The MVP includes route shells so all primary navigation targets resolve; About/FAQ and Contact content can follow in their independent story phases.

### Incremental Delivery

1. Add US2 after Foundation and validate About/FAQ independently.
2. Add US3 after Foundation and validate Contact independently.
3. Complete static SEO metadata, robots, sitemap, and final quickstart checks after the stories.

## Notes

- Every task uses the required checkbox, sequential task ID, optional `[P]` marker, required user-story label for story tasks, and a concrete file path.
- No automated test-authoring tasks are included because tests/TDD were not requested; manual acceptance and release checks are included.
- Do not publish a production export with sample or localhost canonical URLs.
