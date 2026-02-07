/**
 * Accessible Astro Launcher - TypeScript Definitions
 * @version 2.0.0
 */

// Labels for internationalization
export interface LauncherLabels {
  /** Search input placeholder (default: "Type to search...") */
  placeholder?: string
  /** Text shown when no results match (use {query} placeholder, default: 'No results for "{query}"') */
  noResults?: string
  /** Text shown at end of results */
  endOfResults?: string
  /** Template for results count announcement (use {count} and {query} placeholders, default: '{count} results for "{query}"') */
  resultsCount?: string
  /** Close button label */
  close?: string
  /** Clear button label */
  clear?: string
  /** Hint text for Enter key */
  toSelect?: string
  /** Hint text for arrow keys */
  toNavigate?: string
  /** Hint text for Escape key */
  toClose?: string
  /** Screen reader hint for search functionality */
  searchHint?: string
}

// Launcher component props
export interface LauncherProps {
  /** Unique identifier for this launcher (must match launcherId on LauncherTrigger components) */
  id: string
  /** i18n labels for the launcher UI */
  labels?: LauncherLabels
  /** Additional classes to apply to the dialog */
  class?: string
  /** Additional HTML attributes */
  [key: string]: string | LauncherLabels | boolean | undefined
}

// LauncherTrigger component props
export interface LauncherTriggerProps {
  /** ID of the Launcher dialog this trigger opens (must match Launcher's id prop) */
  launcherId: string
  /** Optional unique identifier for this specific trigger element */
  id?: string
  /** Placeholder text shown in the trigger (default: "Search") */
  placeholder?: string
  /** The keyboard shortcut key to display (without modifier) */
  shortcutKey?: string
  /** Whether to show the compact version of the trigger */
  compact?: boolean
  /** Whether to show the icon only version of the trigger */
  iconOnly?: boolean
  /** Whether to show a gradient border on the trigger */
  gradientBorder?: boolean
  /** Additional classes to apply */
  class?: string
  /** Additional HTML attributes */
  [key: string]: string | boolean | undefined
}

// LauncherPreferences component props (fieldset wrapper for switches)
export interface LauncherPreferencesProps {
  /** Group label displayed as the fieldset legend */
  label: string
  /** Additional classes to apply */
  class?: string
  /** Additional HTML attributes */
  [key: string]: string | undefined
}

// LauncherSwitch component props (role="switch" toggle button)
export interface LauncherSwitchProps {
  /** Display label for the switch */
  label: string
  /** Action identifier (dispatched via launcher:action event) */
  onAction: string
  /** Initial checked state for the switch */
  checked?: boolean
  /** Additional search keywords for filtering */
  keywords?: string[]
  /** Label for the type indicator (i18n support) - defaults to "Toggle" */
  typeLabel?: string
  /** Additional classes to apply */
  class?: string
  /** Additional HTML attributes */
  [key: string]: string | string[] | boolean | undefined
}

// LauncherNav component props (nav wrapper for links)
export interface LauncherNavProps {
  /** Group label displayed as the navigation heading */
  label: string
  /** Heading level for the navigation label (2-6) */
  headingLevel?: 2 | 3 | 4 | 5 | 6
  /** Additional classes to apply */
  class?: string
  /** Additional HTML attributes */
  [key: string]: string | number | undefined
}

// LauncherLink component props (semantic anchor element)
export interface LauncherLinkProps {
  /** Display label for the link */
  label: string
  /** URL to navigate to */
  href: string
  /** Additional search keywords for filtering */
  keywords?: string[]
  /** Label for the type indicator (i18n support) - defaults to "Go to" */
  typeLabel?: string
  /** Additional classes to apply */
  class?: string
  /** Additional HTML attributes (e.g., target, rel) */
  [key: string]: string | string[] | undefined
}

// Custom event detail for action items
export interface LauncherActionEventDetail {
  /** The action identifier from the LauncherSwitch */
  action: string
}

// Preference API interface (from accessible-astro-components)
export interface PreferenceAPI {
  /** Enable the preference */
  enable: () => void
  /** Disable the preference */
  disable: () => void
  /** Toggle the preference */
  toggle: () => void
  /** Check if the preference is enabled */
  isEnabled: () => boolean
}

// Preference change event detail
export interface PreferenceChangeEventDetail {
  /** Whether the preference is enabled */
  enabled: boolean
}

// Declare custom event types and global APIs
declare global {
  interface DocumentEventMap {
    'launcher:action': CustomEvent<LauncherActionEventDetail>
    'launcher:open': CustomEvent<void>
    'darkmode:change': CustomEvent<PreferenceChangeEventDetail>
    'highcontrast:change': CustomEvent<PreferenceChangeEventDetail>
    'reducemotion:change': CustomEvent<PreferenceChangeEventDetail>
  }

  interface Window {
    /** DarkMode API from accessible-astro-components */
    darkMode?: PreferenceAPI
    /** HighContrast API from accessible-astro-components */
    highContrast?: PreferenceAPI
    /** ReducedMotion API from accessible-astro-components */
    reducedMotion?: PreferenceAPI
  }
}

// Component exports
declare const Launcher: typeof import('../components/launcher/Launcher.astro').default
declare const LauncherTrigger: typeof import('../components/launcher/LauncherTrigger.astro').default
declare const LauncherPreferences: typeof import('../components/launcher/LauncherPreferences.astro').default
declare const LauncherSwitch: typeof import('../components/launcher/LauncherSwitch.astro').default
declare const LauncherNav: typeof import('../components/launcher/LauncherNav.astro').default
declare const LauncherLink: typeof import('../components/launcher/LauncherLink.astro').default

export { Launcher, LauncherTrigger, LauncherPreferences, LauncherSwitch, LauncherNav, LauncherLink }
