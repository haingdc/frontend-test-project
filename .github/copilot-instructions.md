# Copilot Instructions

## Project Architecture

This is a **React 19 + TypeScript + Vite** frontend project with **Storybook** for component development and **Vitest** for testing. The project follows a modern component-driven development approach with utility-first CSS styling.

### Key Stack Components
- **React 19** with latest hooks and TypeScript
- **Vite** for development and building (ESM-first)
- **Storybook** for component documentation and testing
- **Vitest + Playwright** for browser-based testing
- **ESLint** with TypeScript-ESLint and React hooks rules

## Development Workflow

### Essential Commands
```bash
yarn dev          # Start Vite dev server
yarn storybook    # Start Storybook on port 6006
yarn build        # TypeScript compile + Vite build
yarn lint         # ESLint with auto-fix
yarn test         # Run Vitest tests (including Storybook tests)
```

### File Structure Patterns
- `src/` - Main application code
- `src/stories/` - Storybook components and stories
- `src/scss/` - Custom utility-first SCSS framework
- Components use `.tsx` extension with React 19 patterns

## Component Development Conventions

### Storybook-First Development
All UI components should be developed in Storybook first:

1. Create component in `src/stories/ComponentName.tsx`
2. Export with proper TypeScript interface
3. Create stories in `src/stories/ComponentName.stories.ts`
4. Use `fn()` from `storybook/test` for action handlers

**Example Pattern:**
```typescript
// Component interface with JSDoc
export interface ButtonProps {
  /** Is this the principal call to action? */
  primary?: boolean;
  /** Button contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

// Story configuration
const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;
```

### TypeScript Configuration
- **Project references**: Uses `tsconfig.app.json` for app code, `tsconfig.node.json` for build tools
- **Strict mode**: All strict TypeScript options enabled
- **React 19**: Uses `react-jsx` transform, no React import needed
- **ESM**: `verbatimModuleSyntax` and `allowImportingTsExtensions` enabled

### Testing Strategy
- **Storybook integration**: Tests run against stories using Vitest + Playwright
- **Browser testing**: Chromium headless via `@vitest/browser-playwright`
- **No traditional unit tests**: Component behavior tested through Storybook stories
- Test setup in `.storybook/vitest.setup.ts` with accessibility addon

## Base UI System

### Directory Structure
The Base UI system follows a modular and maintainable architecture:

```
scss/
├── main.scss                 # Main file imports everything
├── base/                     # Basic styles
│   ├── _typography.scss      # Font, text styles, line-height
│   └── _layout.scss          # Display, flexbox, positioning
└── utilities/                # Utility classes
    ├── _spacing.scss         # Margin, padding utilities
    ├── _sizing.scss          # Width, height, min/max width
    └── _utilities.scss       # Other utilities (border, cursor, etc.)
```

### Import Options

**Import the entire system:**
```scss
@import 'scss/main';
```

**Import individual modules:**
```scss
// Import typography only
@import 'scss/base/typography';

// Import layout only
@import 'scss/base/layout';

// Import spacing utilities only
@import 'scss/utilities/spacing';
```

### Main Modules

1. **Typography (`_typography.scss`)** - Font families, weights, sizes (8px-80px), line heights, text alignment
2. **Layout (`_layout.scss`)** - Display properties, flexbox utilities, positioning, image utilities
3. **Spacing (`_spacing.scss`)** - Margin/padding utilities (all directions), responsive spacing
4. **Sizing (`_sizing.scss`)** - Min/max width utilities, position utilities
5. **Utilities (`_utilities.scss`)** - Global resets, borders, cursor/interaction, background, box model

**Usage Pattern:**
```tsx
<div className="flex items-center justify-between p-4 bg-white rounded-lg">
  <h1 className="text-2xl font-bold">Title</h1>
  <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
    Button
  </button>
</div>
```

## ESLint & Code Standards

### Configured Rules
- TypeScript ESLint recommended rules
- React Hooks rules (`eslint-plugin-react-hooks`)
- React Refresh rules for HMR
- Storybook-specific rules
- **No unused variables/parameters** enforced

### Key Standards
- Use **camelCase** for variables and functions
- Use **single quotes** for strings
- Use **spaces** for indentation
- Prefer **const assertions** and **satisfies** over type annotations
- Export components as **named exports** from stories, **default export** for main components

## Integration Points

### Vite Configuration
- React plugin with Fast Refresh
- Vitest integration with Storybook addon
- ESM-first module resolution
- Path aliases configured via TypeScript paths

### Storybook Integration
- Stories auto-discovered in `src/**/*.stories.@(js|jsx|mjs|ts|tsx)`
- Addons: Chromatic, Docs, A11y, Vitest
- Test stories run in browser environment with Playwright
- Accessibility testing integrated via `@storybook/addon-a11y`

When creating new components, always start with the Storybook story to define the API, then implement the component with proper TypeScript interfaces and SCSS utility classes.

## HTML/CSS Guidelines

### General Rules
- **Separate Files**: Each page must have its own folder if divided into multiple smaller files
- **Folder Naming**: Folder names must start with a capital letter
- **File Naming**: HTML files must follow folder name structure (e.g., `Landing` folder → `landing-section-1.html`)
- **CSS File Naming**: CSS files must follow same naming conventions as HTML
- **General SCSS**: Every project must include `general.scss` containing all reusable classes
- **HTML Line Limit**: HTML files must not exceed 400 lines
- **Main SCSS**: Create `main.scss` to combine all individual SCSS files into `main.css`
- **CSS Line Limit**: CSS files must not exceed 400 lines
- **Code Optimization**: Optimize for reusability, avoid copy-pasting across files
- **No Inline CSS**: All styling must be in SCSS files
- **Indentation**: Use 4-space tabs, not 2-space
- **Accessibility**: Every image/interactive element needs descriptive alt text or labels

### Structure Rules
- **Page Location**: All pages in common folder (`Pages` or `Views`)
- **Component Location**: Components in page folder or general `Components` folder
- **Shared Components**: Cross-page components in `Common` folder
- **Core Page Structure**: `Header → Main → Footer`
- **Sectioning**: Each core tag contains `Section` tags for smaller components
- **Container Structure**: `Main → Container → Row → Column`

### ID Rules
- **Unique IDs**: Every main page and component must have unique ID
- **Header/Footer**: Use `header` and `footer` for IDs
- **Main ID**: Related to page purpose (e.g., `<Main id="login">`)
- **Section IDs**: Numbered with Main ID prefix (e.g., `<Section id="ss1">` for signup)
- **Conflict Prevention**: Use two letters if first letter conflicts

### Class Rules
- **Section Containers**: Container class = section ID + `-container` (e.g., `ss1-container`)
- **Row Structure**: Named with container abbreviation + position (e.g., `ss1r1`, `ss1r2`)
- **Column Structure**: Row class + column position
- **Class Order**: Additional classes first, then main classes (Container → Row → Column)
- **Common Classes**: Use reusable classes from `general.scss`

### CSS Rules
- **No Frameworks**: No Bootstrap or similar frameworks
- **Parent-Child Structure**: Follow hierarchy except for multi-location CSS
- **Use Flex**: Prioritize flex over `display: inline`
- **Minimize Relative**: Avoid `position: relative` where possible
- **CSS Property Order**: UX-first, UI-second
  1. Display, Position, Top/Bottom, Width/Height (UX)
  2. Padding, Margin, Border (UX)
  3. Background, Font, Animation, Z-index (UI)
- **Padding vs Margin**: Padding for container thickness, margin for spacing between containers
- **Gap Usage**: Only for long repetitive lists, otherwise use margin
- **Consistency**: Use common padding classes (e.g., `section-pad`)

PAY ATTENTION:
- Do not use any CSS Frameworks like Bootstrap, Tailwind, etc.
- Do not use Vietnamese in code comments or identifiers. Use English only.
- Do use SCSS files instead of CSS files for styling.

- When edit Storbook files:
  - Do not use autodocs
  - Do not set layout centered