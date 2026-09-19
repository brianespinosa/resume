# resume

See `README.md` for the repository overview. Area-specific guidance lives in subdirectory `CLAUDE.md` files; keep this root file minimal.

## pnpm Install Warnings

`pnpm install` may produce warnings. All warnings MUST be resolved before closing any PR — investigate the cause and fix it (e.g. add or remove a `packageExtensions` or `peerDependencyRules` entry in `pnpm-workspace.yaml`, pin a transitive dependency via `overrides`, or update the offending package). Use `peerDependencyRules` only as a last resort, and comment every entry with the package, the upstream reason, and why a real fix isn't possible.
