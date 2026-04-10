# .github/CLAUDE.md

## CI Workflow (`workflows/ci.yml`)

Six jobs run on every push to `main` and every PR:

1. **biome** — linting and formatting via `yarn biome ci .`
2. **knip** — dead code detection via `yarn knip --reporter github-actions`
3. **typecheck** — TypeScript type checking via `yarn typecheck`
4. **test** — unit tests via `yarn test` (vitest)
5. **build** — Vercel CLI deployment (needs biome, knip, typecheck, test to pass first)
6. **e2e** — Playwright tests against the Vercel preview URL (PR-only, needs build)

Each job uses the local composite action at `.github/actions/setup/` (Node setup from `.nvmrc`, corepack, yarn cache, `yarn install --immutable`).

### Build job — Vercel deployment

The build job deploys via the Vercel CLI rather than Vercel's Git integration. Required secrets:

| Secret | Where to set |
|---|---|
| `VERCEL_TOKEN` | Actions secrets + Dependabot secrets |
| `VERCEL_ORG_ID` | Actions secrets + Dependabot secrets |
| `VERCEL_PROJECT_ID` | Actions secrets + Dependabot secrets |
| `VERCEL_BYPASS_SECRET` | Actions secrets + Dependabot secrets |

GitHub environments required: `Preview` (PRs) and `Production` (main pushes).

To get `VERCEL_ORG_ID` and `VERCEL_PROJECT_ID` run `npx vercel link` locally — outputs `.vercel/project.json` (gitignored).

### E2e job — Playwright

Runs only on PRs. Uses the Vercel preview URL from the build job output. Playwright browsers are cached by version. Uploads `playwright-report/` as an artifact (30-day retention).

## Dependabot Auto-merge (`workflows/dependabot-auto-merge.yml`)

Automatically squash-merges Dependabot PRs using `gh pr merge --auto --squash`. Runs on `pull_request_target` from `dependabot[bot]` only.

## Dependabot (`dependabot.yml`)

Monitors both `github-actions` and `npm` ecosystems on a daily schedule. Commit prefix is `chore`.

## Repository Settings (`settings.yml`)

Extends `brianespinosa/settings:nextjs.yml` via the probot/settings GitHub App. Changes here propagate automatically when the app processes the file.
