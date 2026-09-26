# Public Website UI Contract

## Routes

| Route | User-facing content | SEO/indexing behavior |
|---|---|---|
| `/` | Centre identity, all seven offerings, and links to the other pages | Indexable; unique title/description; self-canonical URL |
| `/about/` | Centre purpose and general approach | Indexable; unique title/description; self-canonical URL |
| `/faq/` | Static, categorized common questions and answers | Indexable; unique title/description; self-canonical URL |
| `/contact/` | Clearly marked sample contact channels and hours; no form | Indexable; unique title/description; self-canonical URL |

The site uses the same navigation on every route. All pages link back to Home and provide clear links to About, FAQ, and Contact. Links use descriptive text and resolve under the selected trailing-slash convention.

## Interaction and Accessibility

- Pages render their essential content without client-side data fetching.
- Navigation and any essential control are operable by keyboard, expose visible focus, and have meaningful accessible names.
- Page content uses semantic landmarks and a meaningful heading order.
- Layouts remain readable and usable at narrow mobile and wide desktop widths without horizontal overflow or clipped text.
- Informative local images have meaningful alternative text; decorative images do not add redundant announcements.
- Contact details are mock display content only. There is no personal-data submission, booking, account, or payment interaction.

## SEO Output

- Each route emits a unique, accurate HTML title and description in the generated HTML.
- Each route emits one absolute, self-referencing canonical URL derived from the configured production origin.
- Open Graph metadata references a local image in the exported site and accurately describes the page.
- `robots.txt` allows crawling of public pages and references `sitemap.xml`.
- `sitemap.xml` lists exactly the canonical public routes using the same host and URL convention.
- Do not include fake addresses, credentials, medical claims, ratings, or business structured data derived from sample content.
- Search indexing and ranking are outside the contract; correct SEO files do not guarantee search placement.

## Static Hosting Contract

The production build emits an `out/` directory containing the four route documents, assets, `robots.txt`, and `sitemap.xml`. Hosting must serve the exported directory indexes for `/`, `/about/`, `/faq/`, and `/contact/`, preserve asset paths, and use the same production origin supplied at build time.
