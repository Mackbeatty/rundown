# Contributing to Rundown

## Branch Strategy

- `main` — production-ready code
- `develop` — integration branch for staging
- Feature branches off `develop`, merged via PR

## Development Workflow

1. Create a branch from `develop`
2. Make your changes
3. Ensure `npm run lint`, `npm run typecheck`, and `npm test` pass in `api/`
4. Open a PR against `develop`

## Commit Messages

Use [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add brief generation endpoint
fix: correct timezone handling in scheduler
chore: update dependencies
docs: add API contract for /briefs
```

## Code Style

- TypeScript strict mode
- 2-space indentation (see `.editorconfig`)
- Swift: 4-space indentation
