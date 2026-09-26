# Data Model: Wellness Centre Website

All records below are static source content. There is no persistence layer, remote feed, API, or user-generated data.

## Centre Profile

Represents the public identity and sample contact information used across the pages.

| Field | Meaning | Validation |
|---|---|---|
| `name` | Centre display name | Non-empty; mark or treat as sample until confirmed |
| `tagline` | Short public-facing summary | Optional; must not imply guaranteed health outcomes |
| `purpose` | About-page description of the centre | Non-empty plain-language sample content |
| `approach` | General description of the centre's approach | Informational; no diagnosis or personalized medical advice |
| `contactChannels` | Sample phone/email or other contact labels | Clearly identify as mock; no submission or collection flow |
| `hours` | Sample availability text | Clearly identify as mock; do not imply live availability |

There is one profile shared by Home, About, and Contact. No physical address is required; do not fabricate one.

## Offering

Represents one activity or service displayed on the landing page and referenced by FAQ content.

| Field | Meaning | Validation |
|---|---|---|
| `slug` | Stable local identifier | Unique, lowercase, URL-safe |
| `name` | Visitor-facing service name | Non-empty; include all seven requested offerings |
| `category` | Movement or health service grouping | One of the displayed categories |
| `summary` | Short general description | Non-empty, sample content; no individualized advice or promised outcomes |
| `image` | Optional local asset path | If present, file exists and has appropriate alternative text or is marked decorative |

Required names: Yoga, Gym, Zumba, Dance, Health Checkup, Physician Consultation, and Psychologist Consultation. Offerings do not have live schedule, capacity, booking, price, or availability state.

## FAQ Entry

Represents a static common visitor question and answer.

| Field | Meaning | Validation |
|---|---|---|
| `id` | Stable local identifier | Unique |
| `question` | Visitor-facing question | Non-empty and distinct within the list |
| `answer` | Concise general response | Non-empty; do not present diagnosis or personalized medical advice |
| `category` | Optional associated offering or general topic | If set, references an existing offering or approved general category |

FAQ entries are informational and have no submission or lifecycle state.

## Page Metadata

Represents the build-time SEO fields for one public route.

| Field | Meaning | Validation |
|---|---|---|
| `route` | Canonical local path | One of `/`, `/about/`, `/faq/`, `/contact/` |
| `title` | Search/browser title | Non-empty and distinct per route; accurately describes its page |
| `description` | Search snippet suggestion | Non-empty, unique where practical, and accurately summarizes visible content |
| `canonicalUrl` | Absolute canonical address | Derived from the production `SITE_URL` and route; never a sample URL in production |
| `openGraphImage` | Local social-sharing image | Resolves within the static export and has an accurate description |

There is exactly one metadata record per public route. `robots.txt` and `sitemap.xml` are generated from the same route set and production origin. Do not emit structured business or medical claims based on mock profile data.

## Relationships and Lifecycle

- Centre Profile is shared by all four routes.
- Home displays all Offerings; FAQ entries may refer to Offerings.
- Each public route has one Page Metadata record.
- Records are authored before build and exported as static output. There are no user, transaction, or runtime state transitions.
