# .github/CLAUDE.md

## CI Workflow (`workflows/ci.yml`)

Four jobs run on every push to `main` and every PR:

1. **biome** — linting and formatting via `yarn biome ci .`
2. **knip** — dead code detection via `yarn knip --reporter github-actions`
3. **typecheck** — TypeScript type checking via `yarn typecheck`
4. **build** — Next.js build (needs all three above to pass first)

Each job uses the local composite action at `.github/actions/setup/` (Node setup from `.nvmrc`, corepack, yarn cache, `yarn install --immutable`).

## Dependabot Auto-merge (`workflows/dependabot-auto-merge.yml`)

Automatically squash-merges Dependabot PRs using `gh pr merge --auto --squash`. Runs on `pull_request_target` from `dependabot[bot]` only.

## Dependabot (`dependabot.yml`)

Monitors both `github-actions` and `npm` ecosystems on a daily schedule. Commit prefix is `chore`.

## Repository Settings (`settings.yml`)

Extends `brianespinosa/settings:nextjs.yml` via the probot/settings GitHub App. Changes here propagate automatically when the app processes the file.
