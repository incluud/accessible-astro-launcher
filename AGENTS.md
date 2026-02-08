# Accessible Astro Launcher

An accessible command palette/launcher component for Astro projects with keyboard navigation, search, and WCAG 2.2 AA compliance.

## Project Overview

- **Type**: NPM package / standalone component
- **Published**: https://www.npmjs.com/package/accessible-astro-launcher
- **Repository**: https://github.com/incluud/accessible-astro-launcher

Check `package.json` for current version and dependencies.

### Key Characteristics

- **Zero dependencies**: Pure Astro component
- **NPM package**: Can be used in any Astro project
- **Shared styles**: Exports `index.css` with all component styles
- **TypeScript**: Full type definitions in `src/types/index.d.ts`
- **Modern CSS**: Uses logical properties, custom properties, `light-dark()` for theming
- **ARIA Guidance**: Uses semantic HTML and minimal ARIA for command palettes

## Project Purpose

This is the **command palette/launcher component** for the Accessible Astro ecosystem:

- **Target Audience**: Developers wanting keyboard-driven navigation in their Astro sites
- **Features**: Quick search, navigation items, action items, preference toggles
- **Integration**: Works seamlessly with `accessible-astro-components` preference toggles
- **WCAG 2.2 AA**: Fully compliant with comprehensive accessibility features

## Package Structure

```
accessible-astro-launcher/
├── src/
│   ├── components/
│   │   └── launcher/
│   │       ├── Launcher.astro          # Main dialog component
│   │       ├── LauncherTrigger.astro   # Search field trigger
│   │       ├── LauncherPreferences.astro # Fieldset wrapper for preference switches
│   │       ├── LauncherSwitch.astro      # Toggle switch item
│   │       ├── LauncherNav.astro         # Navigation wrapper with heading
│   │       └── LauncherLink.astro        # Semantic link item
│   ├── styles/
│   │   └── index.css                   # All component styles
│   └── types/
│       └── index.d.ts                  # TypeScript definitions
├── index.js                            # Package exports
├── package.json
├── tsconfig.json
├── .prettierrc
├── README.md
└── LICENSE
```

## Available Components

### Launcher

The main dialog component containing search input and results.

**Props:**

- `id: string` - Unique identifier (required, must match `launcherId` on triggers)
- `labels?: LauncherLabels` - i18n labels object (exported type)
- `class?: string` - Additional CSS classes

### LauncherTrigger

A trigger button that opens the launcher with keyboard shortcut display.

**Props:**

- `launcherId: string` - ID of the launcher to open (required)
- `id?: string` - Optional trigger element ID
- `placeholder?: string` - Placeholder text (default: "Search")
- `shortcutKey?: string` - Keyboard shortcut key display (default: "K")
- `compact?: boolean` - Compact mode without placeholder text
- `iconOnly?: boolean` - Icon-only mode
- `gradientBorder?: boolean` - Animated gradient border effect
- `class?: string` - Additional CSS classes

### LauncherPreferences

Fieldset wrapper for preference switches.

**Props:**

- `label: string` - Group heading text (required)
- `class?: string` - Additional CSS classes
- `[key: string]: string | undefined` - Additional HTML attributes to apply to the fieldset

### LauncherSwitch

Toggle switch item for preferences.

**Props:**

- `label: string` - Display text (required)
- `onAction: string` - Action identifier for action items
- `checked?: boolean` - Initial checked state (maps to aria-checked)
- `keywords?: string[]` - Additional search keywords
- `class?: string` - Additional CSS classes
- `[key: string]: string | string[] | boolean | undefined` - Additional HTML attributes to apply to the wrapper

### LauncherNav

Navigation wrapper with heading.

**Props:**

- `label: string` - Group heading text (required)
- `headingLevel?: 2 | 3 | 4 | 5 | 6` - Heading level (default: 3)
- `class?: string` - Additional CSS classes
- `[key: string]: string | number | undefined` - Additional HTML attributes to apply to the nav element

**Slots:**

- `default` - LauncherLink items

### LauncherLink

Semantic link item for navigation.

**Props:**

- `label: string` - Display text (required)
- `href: string` - URL for navigation
- `keywords?: string[]` - Additional search keywords
- `typeLabel?: string` - i18n label for type indicator (default: "Go to")
- `class?: string` - Additional CSS classes
- `[key: string]: string | string[] | undefined` - Additional HTML attributes to apply to the anchor (e.g., target, rel, aria-*)

**Slots:**

- `icon` - Custom icon for navigation items

Extra attributes passed to `LauncherLink` are forwarded to the rendered anchor element.

## Dev Environment Setup

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Development workflow**:
   - This is a pure component library (no dev server)
   - Test components in consuming projects (starter, dashboard, docs)
   - Use symlinks for local testing (see below)

3. **Link to consuming projects**:

   ```bash
   # From the launcher directory
   npm link

   # In consuming project
   npm link accessible-astro-launcher
   ```

4. **Format code**:

   ```bash
   npx prettier --write .
   ```

## Testing Components

Since this is a library package, testing happens in consuming projects:

1. **Link the package** to a consuming project (see Dev Environment Setup)
2. **Import and use** the component in a test page
3. **Test accessibility**:
   - Keyboard navigation (CMD/CTRL+K, Arrow keys, Enter, Escape)
   - Screen reader compatibility (VoiceOver, NVDA, JAWS)
   - Color contrast with browser dev tools
   - Focus indicators are visible
   - Check `prefers-reduced-motion` behavior
4. **Visual testing**: Check in consuming project's browser
5. **Live demos**: Test on starter's pages that use the launcher

## Making Changes

### Modifying Components

1. Edit component file in `src/components/launcher/`
2. Update styles in `src/styles/index.css` if needed
3. Update TypeScript types if props changed
4. Test changes in consuming projects (with symlinks for live reload)
5. Update AGENTS.md/README if API changed
6. Check for breaking changes - bump version accordingly

### Versioning

- **Patch** (1.0.x): Bug fixes, no API changes
- **Minor** (1.x.0): New features, backward-compatible changes
- **Major** (x.0.0): Breaking changes to existing components

## Publishing to NPM

1. **Update version** in `package.json` (follow semver)
2. **Test thoroughly** in all consuming projects
3. **Format code**: `npx prettier --write .`
4. **Commit changes**: Follow conventional commits
5. **Publish**:

   ```bash
   npm publish
   ```

6. **Update consuming projects**:

   ```bash
   cd ../accessible-astro-starter
   npm update accessible-astro-launcher
   ```

## Code Style Guidelines

### Component Architecture

- **Single Responsibility**: Each component has one clear purpose
- **Composition**: Components can be nested (Launcher > LauncherPreferences > LauncherSwitch, Launcher > LauncherNav > LauncherLink)
- **Props**: Use Astro props with TypeScript interfaces
- **Styles**: Component styles in `src/styles/index.css`
- **No Dependencies**: Pure Astro components only

### TypeScript

- Type definitions in `src/types/index.d.ts`
- Export all component prop interfaces
- Declare custom events and global APIs

### Formatting

- **Prettier** configured with:
  - `prettier-plugin-astro`
  - `prettier-plugin-css-order`
- Run: `npx prettier --write .`

### CSS Guidelines

- **Modern CSS**: Use logical properties (`inline-start`, `block-end`, etc.)
- **Custom Properties**: All styling via `--launcher-*` CSS variables
- **Dark Mode**: Use `light-dark()` function for automatic theming
- **No Frameworks**: Pure CSS, no Tailwind
- **Low Specificity**: Use `:where()` wrapper for easy overrides
- **Reduced Motion**: Respect `prefers-reduced-motion` preference

## Accessibility Requirements

This component follows **WCAG 2.2 AA** standards with a semantic HTML approach:

### Essential Features

1. **Keyboard Navigation**:
   - `CMD/CTRL + K` - Open launcher
   - `Arrow Up/Down` - Navigate items
   - `Enter` - Select item
   - `Escape` - Close launcher
   - `Tab` - Move between header elements

2. **ARIA Implementation**:
   - Dialog with `aria-modal="true"`
   - Input uses `aria-controls`, `aria-owns` and `aria-activedescendant` for active item tracking
   - Semantic fieldset/legend for preference groups
   - Live region for results count announcements

3. **Focus Management**:
   - Focus moves to input on open
   - Virtual focus via `aria-activedescendant`
   - Focus returns to trigger on close

4. **Visual Indicators**:
   - Clear focus outlines
   - Selected item highlighting
   - LED indicators for toggle actions

## Custom Events

### `launcher:action`

Dispatched when an action item is selected.

```javascript
document.addEventListener('launcher:action', (e) => {
  switch (e.detail.action) {
    case 'toggle-dark-mode':
      window.darkMode?.toggle()
      break
    case 'logout':
      window.location.href = '/logout'
      break
  }
})
```

### `launcher:open`

Dispatched when the launcher opens (useful for syncing preference states).

## Integration with accessible-astro-components

The launcher automatically syncs with preference toggles from `accessible-astro-components`:

- `darkmode:change` → updates `toggle-dark-mode` action items
- `highcontrast:change` → updates `toggle-high-contrast` action items
- `reducemotion:change` → updates `toggle-reduced-motion` action items

## CSS Custom Properties

All styling can be customized via CSS variables:

```css
:root {
  /* Colors */
  --launcher-theme-light: #fff;
  --launcher-theme-dark: #090b0f;
  --launcher-text-color: /* auto light/dark */;
  --launcher-subtle-text-color: /* auto light/dark */;

  /* Dimensions */
  --launcher-width: min(90vw, 650px);
  --launcher-height: min(60vh, 500px);

  /* Spacing */
  --launcher-space-xs: /* fluid */;
  --launcher-space-sm: /* fluid */;
  --launcher-space-md: /* fluid */;

  /* Animation */
  --launcher-animation-duration: 0.2s;
  --launcher-animation-timing: cubic-bezier(0.165, 0.84, 0.44, 1);
}
```

## Commit Guidelines

Follow conventional commits format:

```
type(scope): subject
```

**Types**: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

**Scopes**: `launcher`, `trigger`, `preferences`, `switch`, `nav`, `link`, `styles`, `types`

**Examples**:

- `feat(switch): add typeLabel prop for i18n`
- `fix(launcher): improve search debouncing`
- `a11y(switch): enhance LED indicator contrast`

## PR Instructions

- **Title format**: `[launcher] Brief description`
- **Check before submitting**:
  - Run `npx prettier --write .` - code is formatted
  - Test in a consuming project
  - Verify keyboard navigation works
  - Check screen reader compatibility
  - Ensure no console errors
  - Verify `prefers-reduced-motion` is respected
- **Include in PR description**:
  - What changed and why
  - Which components are affected
  - Breaking changes (if any)
  - Accessibility considerations

## Troubleshooting

### Symlink Not Working

1. Verify link: `ls -la ../accessible-astro-starter/node_modules/accessible-astro-launcher`
2. Check consuming project's `astro.config.mjs` has symlink detection
3. Restart dev server
4. Clear cache: `rm -rf node_modules/.astro node_modules/.vite`

### Styles Not Loading

1. Ensure `index.js` imports `./src/styles/index.css`
2. Check consuming project imports the component (styles auto-load)
3. Verify CSS custom properties are not being overridden

### Keyboard Shortcut Not Working

1. Check for conflicting CMD/CTRL+K bindings
2. Verify trigger has `data-launcher-target` attribute matching launcher `id`
3. Check console for initialization warnings

## Consuming Projects

This package is used by:

- **accessible-astro-starter**: Primary consumer, showcases launcher in header
- **accessible-astro-dashboard**: Dashboard with launcher integration

Check each project's `package.json` to see which version they're currently using.

### Breaking Changes Impact

When making breaking changes, consider:

1. **All consuming projects** need to update - test in each one
2. Update documentation with migration guide
3. Consider deprecation warnings before removal
4. Coordinate version bumps across all projects
5. Follow semantic versioning strictly

## Related Projects

- **[Accessible Astro Components](https://github.com/incluud/accessible-astro-components)**: Core component library
- **[Accessible Astro Starter](https://github.com/incluud/accessible-astro-starter)**: Starter theme
- **[Accessible Astro Dashboard](https://github.com/incluud/accessible-astro-dashboard)**: Dashboard theme
- **[Accessible Astro Docs](https://github.com/incluud/accessible-astro-docs)**: Documentation site

## Resources

- [WCAG 2.2 Guidelines](https://www.w3.org/TR/WCAG22/)
- [ARIA Combobox Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/)
- [Astro Documentation](https://docs.astro.build/)
- [Project Roadmap](https://github.com/orgs/incluud/projects/4/views/1)
