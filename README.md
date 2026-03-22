# Avataaars Monorepo

A modern React 19 avatar library and generator app, inspired by [Pablo Stanley's avataaars](https://avataaars.com/) and the original [fangpenlin/avataaars](https://github.com/fangpenlin/avataaars).

## Packages

### `avataaars` — React Component Library

A React 19 compatible SVG avatar component library. All components are pure functional components compatible with React Server Components.

**Features:**

- React 19 compatible (uses `useId()` for SSR-safe SVG IDs)
- Server Component compatible — no `useState`, `useEffect`, or client APIs
- TypeScript with full type definitions
- Tree-shakeable string literal union types
- ESM and CJS builds via tsup
- 105+ avatar variants across 12 customizable facets

**Usage:**

```tsx
import { Avatar } from "avataaars";

function MyComponent() {
  return (
    <Avatar
      avatarStyle="Circle"
      topType="ShortHairShortFlat"
      accessoriesType="Prescription02"
      hairColor="BrownDark"
      facialHairType="BeardMedium"
      facialHairColor="BrownDark"
      clotheType="Hoodie"
      clotheColor="PastelBlue"
      eyeType="Happy"
      eyebrowType="Default"
      mouthType="Smile"
      skinColor="Light"
    />
  );
}
```

**Available Facets:**

| Facet | Options |
|-------|---------|
| Top (hair/hats) | 35 variants |
| Accessories | 7 variants |
| Hair Color | 11 colors |
| Hat Color | 15 colors |
| Facial Hair | 6 variants |
| Facial Hair Color | 9 colors |
| Clothes | 9 variants |
| Clothe Color | 15 colors |
| Graphic (for GraphicShirt) | 11 variants |
| Eyes | 12 variants |
| Eyebrows | 13 variants |
| Mouth | 12 variants |
| Skin Color | 7 colors |

### `avatar-generator` — Next.js App

A web app for creating and customizing avatars, similar to [getavataaars.com](https://getavataaars.com/) but with an improved UX.

**Features:**

- Horizontal tabs for each facet category
- Visual option grid showing mini avatar previews for each option
- Color swatches for color-only facets
- Random avatar generation
- Download/upload configuration as JSON
- Shareable URL with config encoded in query parameters
- Built with Next.js 15, React 19, and Tailwind CSS v4
- Deployable to Vercel

## Getting Started

### Prerequisites

- Node.js >= 20
- pnpm

### Install

```bash
pnpm install
```

### Development

```bash
# Run the generator app (with hot reload)
pnpm dev

# Build the avataaars library only
pnpm build:lib

# Build everything
pnpm build
```

### Project Structure

```
avataaars/
├── packages/
│   └── avataaars/          # React component library
│       ├── src/
│       │   ├── Avatar.tsx  # Main component
│       │   ├── types.ts    # Type definitions + option arrays
│       │   ├── colors.ts   # Color mappings
│       │   └── pieces/     # SVG piece components
│       └── dist/           # Built output (ESM + CJS + DTS)
└── apps/
    └── avatar-generator/   # Next.js app
        └── src/app/
            ├── page.tsx
            └── components/
                ├── AvatarEditor.tsx
                ├── FacetTabs.tsx
                ├── OptionGrid.tsx
                └── ConfigPanel.tsx
```

## License

MIT
