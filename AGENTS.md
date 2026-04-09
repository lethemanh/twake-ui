# AGENTS.md - Twake UI Monorepo

## Quick Commands

```bash
# Install dependencies
npm ci

# Build all packages
npm run build

# Lint all packages
npm run lint

# Lint specific package
npm run lint --workspace=twake-mui

# Test dry-run release (safe, no publish)
npm run release:dry -- twake-mui
```

## Critical Rules

**⚠️ NEVER run `npm run release` locally** - it publishes to npm for real. Releases only happen via GitHub Actions on merge to main.

**⚠️ Always use Node 24** - specified in `.nvmrc`. Other versions will fail.

## Architecture

- **Monorepo**: npm workspaces with independent versioning
- **Packages location**: `packages/*` (currently only `twake-mui`)
- **Package naming**: All packages use `@linagora/` scope
- **Build output**: Each package outputs to `dist/` (TypeScript compilation)

## Release Flow (Automated)

```text
PR merged to main
    ↓
CI runs `npm run release` (calls scripts/release.sh)
    ↓
Script detects changed packages via git tags
    ↓
semantic-release runs per changed package:
    - Updates version
    - Generates CHANGELOG.md
    - Publishes to npm
    - Creates GitHub release
```

## Adding New Packages

1. Create package in `packages/<name>/`
2. Copy config: `cp packages/twake-mui/.releaserc.json packages/<name>/`
3. Required in `package.json`:
   - `"name": "@linagora/<name>"`
   - `"publishConfig": { "access": "public" }`
   - `"files": ["dist", "CHANGELOG.md", "README.md"]`

## CI/CD Notes

- **Runs on**: PRs and push to main
- **Order**: install → lint → build → release (main only)
- **Secrets required**: `NODE_AUTH_TOKEN` (NPM token, set in GitHub repo settings)
- **Uses**: `secrets.GITHUB_TOKEN` (auto-provided, no setup needed)

## Commits

Use [Conventional Commits](https://www.conventionalcommits.org/) for automatic versioning:
- `feat:` → minor version bump
- `fix:` → patch version bump
- `feat!:` or `BREAKING CHANGE:` → major version bump
