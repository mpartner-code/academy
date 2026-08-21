# AI Development Rules

This repository is the reusable web starter for Marketing Partner projects.

## Required workflow
1. Understand the requested business outcome before editing code.
2. Preserve project-specific brand and content rules.
3. Work on a feature branch; do not make routine feature changes directly on main.
4. Keep secrets out of source control. Use environment variables and `.env.example` placeholders.
5. Run type checking and production build before proposing merge.
6. For functional changes, add or update automated tests when practical.
7. Treat accessibility, responsive behavior, performance and SEO as acceptance criteria.
8. Do not silently replace working functionality or remove content to make tests pass.
9. Database schema changes must be represented as migrations and reviewed before production.
10. Production deployment should happen only after required quality gates pass.

## Review priorities
Block merge for broken builds, exposed secrets, authentication/authorization errors, destructive data changes, broken primary journeys, serious accessibility regressions or misleading SEO/content.
