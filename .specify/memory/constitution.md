<!--
## Sync Impact Report
Version change: Unversioned scaffold -> 1.0.0 (initial project baseline)
Modified principles:
- Principle 1 -> I. Static Delivery
- Principle 2 -> II. Accessible, Responsive Experience
- Principle 3 -> III. Privacy and Security
- Principle 4 -> IV. Performance and Resilience
- Principle 5 -> V. Simplicity and Verification
Added sections: Project Constraints; Development Workflow
Removed sections: None
Follow-up TODO: Confirm the original ratification date.
-->

# Static Web App Constitution

## Core Principles

### I. Static Delivery
The product MUST be delivered as static web content. Server-side application behavior,
user accounts, and persistent user data are outside the baseline and require explicit
project approval before being introduced.

### II. Accessible, Responsive Experience
Pages MUST present content in a meaningful reading order, support keyboard operation
for essential interactions, and remain readable and usable on mobile and desktop
screens.

### III. Privacy and Security
The site MUST NOT collect personal information by default or include confidential
credentials in public content. Any proposed personal-data collection or external
sharing MUST have an explicit purpose, project approval, and clear notice to users.

### IV. Performance and Resilience
Essential content MUST remain available when optional third-party resources fail.
Pages MUST avoid unnecessary assets and work that delay access to their primary
content.

### V. Simplicity and Verification
Changes MUST use the simplest approach that meets the user need. Before release,
contributors MUST verify the affected primary content and interactions, keyboard
operation, and layouts at narrow and wide viewport sizes.

## Project Constraints

The project MUST remain usable as a static site without requiring a particular
framework, hosting provider, or build tool. Features that need server-side behavior,
accounts, or personal-data collection require an explicit amendment or recorded
project approval before work begins.

## Development Workflow

Each change MUST be checked against the principles above. Before publishing, a
contributor MUST confirm that the primary page and its essential content load from
the published site. Reviewers MUST record any approved exception, its reason, and
its scope.

## Governance

This constitution defines the minimum project requirements. Amendments MUST include
a rationale, be reviewed by the project maintainers, and update the version and last
amended date. Version numbers follow semantic versioning: MAJOR for incompatible
principle or scope changes, MINOR for new or materially expanded principles or
sections, and PATCH for clarifications that do not change requirements. Contributors
and reviewers MUST check relevant changes for compliance; exceptions MUST be recorded
with their reason and scope.

**Version**: 1.0.0 | **Ratified**: TODO(RATIFICATION_DATE): Original adoption date unknown; confirm with maintainers. | **Last Amended**: 2026-09-26
