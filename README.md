# Twake UI

Monorepo containing shared UI packages for Twake applications.

## Structure

```
twake-ui/
├── packages/
│   ├── twake-mui/          # MUI v7 theme system
│   └── ...                 # Other packages (to be added)
├── package.json            # Root workspace config
└── README.md
```

## Packages

### twake-mui

MUI v7 theme system for Twake Calendar and other Twake applications.

- Provides palette, typography, and component overrides
- Focuses on Button, TextField, Dialog/Modal components
- References cozy-ui structure but optimized for MUI v7

See [packages/twake-mui/README.md](packages/twake-mui/README.md) for more details.

## Development

### Setup

```bash
npm install
```

### Build all packages

```bash
npm run build
```

### Test all packages

```bash
npm run test
```

### Lint all packages

```bash
npm run lint
```

## Workspace Management

This monorepo uses npm workspaces to manage packages.

To run a script in a specific package:

```bash
npm run <script> --workspace=twake-mui
```

## Release Management

This monorepo uses **semantic-release** with independent versioning for each package. The release process is fully automated via GitHub Actions.

### How it works

```text
PR merged to main
    ↓
CI/CD runs scripts/release.sh
    ↓
Detects which packages have changes
    ↓
Runs semantic-release only on modified packages
    ↓
Version bump + npm publish + GitHub release
```

### Testing releases locally (dry-run)

```bash
# Test dry-run for a specific package
npm run release:dry -- twake-mui

# This shows:
# - Next version number
# - Release notes
# - Commits analyzed
# Without publishing anything!
```

## Adding New Packages

When adding a new package to the monorepo, you only need to add one file:

### 1. Create `.releaserc.json` in your package

```bash
cp packages/twake-mui/.releaserc.json packages/your-new-package/
```

That's it! The `scripts/release.sh` will automatically detect your new package and handle releases.

### Required package.json fields

Ensure your `package.json` includes:

```json
{
  "name": "@linagora/your-new-package",
  "version": "0.0.0",
  "publishConfig": {
    "access": "public"
  },
  "files": [
    "dist",
    "CHANGELOG.md",
    "README.md"
  ]
}
```

## License

MIT
