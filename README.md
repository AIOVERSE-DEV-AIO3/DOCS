# DOCS

Mintlify documentation site.

## Local development

```bash
npm install
npm run docs:dev
```

## Validate

```bash
npm run docs:validate
```

## Export static site

```bash
npm run docs:export
```

## Deploy

Deployment runs automatically via GitHub Actions (`.github/workflows/deploy-docs.yml`) on pushes to `main`.

## Auth and secret storage

- Keep credentials out of git by storing them in local env files:
  - Copy `.env.example` to `.env.local` for local shell usage.
  - Copy `api/.dev.vars.example` to `api/.dev.vars` for Wrangler local runs.
- Use GitHub Actions secrets for CI/CD credentials (for example `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`, `CLOUDFLARE_ZONE_ID`).
