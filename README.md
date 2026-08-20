# Marketing Partner Web Starter

Reusable foundation for AI-assisted client websites.

## Stack
- Next.js + React + TypeScript
- Supabase-ready backend configuration
- GitHub Actions quality gate
- Cloud deployment ready

## Local development
```bash
npm ci
npm run dev
```

Copy `.env.example` to `.env.local` and add project-specific credentials. Never commit secrets.

The project uses Node.js 22 and npm 10. Hostinger must run `npm ci` from the
repository root and use `npm run build:hostinger` as its build command. That
command applies the existing Prisma migrations to Hostinger MySQL before the
Next.js production build. `DATABASE_URL` must be available to the build.

## Delivery workflow
Feature request → feature branch → implementation → automated quality gate → review → merge → deployment.

## Repository rules
See `AGENTS.md`, `docs/DESIGN_SYSTEM.md` and `docs/SEO_RULES.md` before making production changes.

## Next platform milestones
1. Supabase project/bootstrap and database migrations.
2. Playwright browser tests.
3. Preview and production deployment.
4. Monitoring and error reporting.
5. Automated SEO/content workflows.
