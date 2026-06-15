# @linagora/twake-icons

Icon library for Twake applications. Provides SVG icons and illustrations as React components.

## Installation

```bash
npm install @linagora/twake-icons
```

## Usage

### Import individual icons (tree-shakeable)

```tsx
import { Icon, Check, Folder } from '@linagora/twake-icons'

<Icon icon={Check} size={16} />
<Icon icon={Folder} size={24} color="var(--primary)" />
```

### Use sprite identifiers

```tsx
import { Icon, Sprite } from '@linagora/twake-icons'

// Render the sprite once at the root of your app
<Sprite />

// Then use string identifiers anywhere
<Icon icon="check" size={16} />
<Icon icon="folder" color="blue" />
```

### Icon Props

| Prop | Type | Description |
|------|------|-------------|
| `icon` | `string \| Component \| ReactElement` | Icon identifier, SVGr component, or custom SVG element |
| `size` | `number \| string` | Width and height in pixels |
| `color` | `string` | Fill color |
| `rotate` | `number` | Rotation in degrees |
| `spin` | `boolean` | Apply spinning animation |

## Updating Icons

Icons are sourced from `cozy-ui`. To sync:

```bash
npm run copy-icons -- ../path/to/cozy-ui
npm run build:icons
```

## License

MIT
