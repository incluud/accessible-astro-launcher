# Accessible Astro Launcher

<img width="1280" height="640" alt="accessible-astro-launcher" src="https://github.com/user-attachments/assets/1d6657d2-552b-436a-931b-719b7ae61dd5" /><br>

[![Built with Astro](https://astro.badg.es/v2/built-with-astro/small.svg)](https://astro.build)

A powerful, accessible command palette/launcher component for [Astro](https://astro.build) projects. Built with keyboard-driven navigation, instant search, and full WCAG 2.2 AA compliance. Features semantic HTML with proper ARIA patterns (`role="switch"` for toggles, native anchors for links), dark mode support, preference toggles integration, and extensive customization through CSS custom properties.

[![LIVE DEMO](https://img.shields.io/badge/LIVE_DEMO-4ECCA3?style=for-the-badge&logo=astro&logoColor=black)](https://accessible-astro-launcher.incluud.dev/) &nbsp;
[![DOCUMENTATION](https://img.shields.io/badge/DOCUMENTATION-A682FF?style=for-the-badge&logo=astro&logoColor=black)](https://accessible-astro.incluud.dev/components/launcher) &nbsp;
[![NPM Downloads](https://img.shields.io/npm/dt/accessible-astro-launcher?style=for-the-badge&color=4ECCA3&logo=npm&logoColor=black)](https://www.npmjs.com/package/accessible-astro-launcher) &nbsp;
[![NPM Version](https://img.shields.io/npm/v/accessible-astro-launcher?style=for-the-badge&logo=npm&logoColor=black&color=A682FF)](https://www.npmjs.com/package/accessible-astro-launcher) &nbsp;
[![Sponsor on Open Collective](https://img.shields.io/badge/Open%20Collective-7FADF2?style=for-the-badge&logo=opencollective&logoColor=white)](https://opencollective.com/incluud) &nbsp;

## Our mission

> Provide developers with accessible, easy-to-use components that make building inclusive web applications simpler and faster, without compromising on customization or performance.

## Features

- **Accessible by default**: Semantic HTML with proper ARIA patterns (`role="switch"` for toggles, native `<a>` for links)
- **Keyboard navigation**: Open with `Cmd/Ctrl + K`, navigate with arrow keys, select with `Enter`, close with `Escape`
- **Continuous typing**: Focus stays on input via `aria-activedescendant` - type to filter at any point while navigating
- **Screen reader support**: Proper role announcements ("switch", "link"), live region for results count with search query
- **Quick search**: Instant client-side fuzzy search across labels and keywords
- **Navigation links**: Semantic `<a>` elements with custom icons and external link support
- **Preference switches**: Toggle buttons with `role="switch"`, `aria-checked`, and LED-style indicators
- **Preference toggles stay open**: Change multiple preferences without reopening the launcher
- **Preference sync**: Automatic sync with `accessible-astro-components` toggles (DarkMode, HighContrast, ReducedMotion)
- **Multiple triggers**: Place triggers anywhere - all open the same launcher
- **Dark mode**: Automatic light/dark theming via `light-dark()` CSS function
- **Customizable**: Extensive styling through `--launcher-*` CSS custom properties
- **i18n ready**: All text labels customizable via props (including `{query}` placeholders)
- **Zero dependencies**: Pure Astro components
- **TypeScript**: Full type support and documentation

## Getting started

```bash
# npm
npm install accessible-astro-launcher

# pnpm
pnpm add accessible-astro-launcher

# yarn
yarn add accessible-astro-launcher
```

## Quick start

```astro
---
import {
  Launcher,
  LauncherTrigger,
  LauncherPreferences,
  LauncherSwitch,
  LauncherNav,
  LauncherLink,
} from 'accessible-astro-launcher'
---

<LauncherTrigger launcherId="site-launcher" />

<Launcher id="site-launcher">
  <LauncherPreferences label="Preferences">
    <LauncherSwitch label="Dark mode" onAction="toggle-dark-mode" />
    <LauncherSwitch label="High contrast" onAction="toggle-high-contrast" />
  </LauncherPreferences>
  <LauncherNav label="Navigation">
    <LauncherLink label="Home" href="/" />
    <LauncherLink label="About" href="/about" />
    <LauncherLink label="Contact" href="/contact" />
  </LauncherNav>
</Launcher>
```

## Components

| Component             | Description                                                  |
| --------------------- | ------------------------------------------------------------ |
| `Launcher`            | Main dialog with search input and results                    |
| `LauncherTrigger`     | Button that opens the launcher (place anywhere)              |
| `LauncherPreferences` | `<fieldset>` wrapper with `<legend>` for preference switches |
| `LauncherSwitch`      | Toggle button with `role="switch"` and LED indicator         |
| `LauncherNav`         | `<nav>` wrapper with heading for navigation links            |
| `LauncherLink`        | Semantic `<a>` element with icon slot                        |

## Accessible Astro ecosystem

The Accessible Astro ecosystem is a collection of projects that are designed to help you build accessible web applications. It includes:

- [Accessible Astro Starter](https://github.com/incluud/accessible-astro-starter): Fully accessible starter for kickstarting Astro projects, with Tailwind.
- [Accessible Astro Components](https://github.com/incluud/accessible-astro-components/): Library of reusable, accessible components built for Astro.
- [Accessible Astro Dashboard](https://github.com/incluud/accessible-astro-dashboard/): User-friendly dashboard interface with a login screen and widgets.
- [Accessible Astro Launcher](https://github.com/incluud/accessible-astro-launcher): Command palette/launcher component for Astro projects.
- [Accessible Astro Docs](https://github.com/incluud/accessible-astro-docs): Comprehensive documentation for all Accessible Astro projects.
- [Color Contrast Checker](https://github.com/incluud/color-contrast-checker): WCAG-compliant color contrast checker with design system token generation.

Check out our [roadmap](https://github.com/orgs/incluud/projects/4) to see what's coming next!

## Contributing

We welcome contributions to improve the launcher! You can help by:

1. [Filing an issue](https://github.com/incluud/accessible-astro-launcher/issues)
2. [Submitting a pull request](https://github.com/incluud/accessible-astro-launcher/pulls)
3. [Starting a discussion](https://github.com/incluud/accessible-astro-launcher/discussions)
4. [Supporting on Open Collective](https://opencollective.com/incluud)

## Support this project

Your support helps us cover basic costs and continue building accessible solutions for the Astro ecosystem. By becoming a sponsor, you're not just supporting code – you're helping create a more inclusive web for everyone. Every contribution, big or small, helps maintain and improve these accessibility-focused tools.

[![Sponsor on Open Collective](https://img.shields.io/badge/Open%20Collective-7FADF2?style=for-the-badge&logo=opencollective&logoColor=white)](https://opencollective.com/incluud)

## Together we make a difference

We want to express our heartfelt gratitude to everyone who contributes to making the web more accessible:

- **The Astro team** for creating an amazing static site generator and the wonderful Starlight theme
- **Our contributors** who dedicate their time and expertise to improve these tools
- [**Niek Derksen**](https://niekderksen.nl) for conducting comprehensive accessibility audits to ensure WCAG compliance
- **Our sponsors** who help make this project sustainable
- **The web community** for embracing and promoting web accessibility
- **You, the developer** for choosing to make your projects more accessible

<a href="https://github.com/incluud/accessible-astro-launcher/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=incluud/accessible-astro-launcher" />
</a><br /><br />

Together, we're not just building documentation or components – we're creating a more inclusive and accessible web for everyone. Every contribution, whether it's code, documentation, bug reports, or feedback, helps move us closer to this goal. ✨

Remember: Accessibility is not a feature, it's a fundamental right. Thank you for being part of this journey!
