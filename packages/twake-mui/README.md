# twake-mui

MUI v7 theme system for Twake Calendar and other Twake applications.

## Requirements

You need to use Node 24+

## Installation

```bash
npm install @linagora/twake-mui
```

Don't forget to also install peerDependencies (see package.json)

## Usage

### Basic Usage

Wrap your app with the Provider to get the Material-UI theme

```tsx
import { TwakeMuiThemeProvider } from '@linagora/twake-mui'

function App() {
  return (
    <TwakeMuiThemeProvider>{/* Your application */}</TwakeMuiThemeProvider>
  )
}
```

Then you can use Material-UI components from Twake-mui

```tsx
import { Button } from '@linagora/twake-mui'

function Component() {
  return (
    <Button>Label</Button>
  )
}
```

### Accessing Theme

```tsx
import { useTheme } from '@linagora/twake-mui'

function MyComponent() {
  const theme = useTheme()
  const primaryColor = theme.palette.primary.main
  // ...
}
```

## Features

- **Palette System**: Techno-independent color definitions
- **Component Overrides**: Pre-styled Button, TextField, Dialog components
- **MUI v7 Compatible**: Built for Material-UI v7

## Development

This package is part of the `twake-ui` monorepo.

### Build

```bash
npm run build
```

### Local Development

To use this package locally in another project:

```bash
# In twake-ui/packages/twake-mui
npm link

# In your project
npm link twake-mui
```

Or use file path in package.json:

```json
{
  "dependencies": {
    "@linagora/twake-mui": "file:../twake-ui/packages/twake-mui"
  }
}
```

## License

MIT
