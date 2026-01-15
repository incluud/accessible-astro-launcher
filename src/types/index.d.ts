/**
 * Accessible Astro Launcher - TypeScript Definitions
 */

// Labels for internationalization
export interface LauncherLabels {
  /** Search input placeholder */
  placeholder?: string
  /** Text shown when no results match */
  noResults?: string
  /** Text shown at end of results */
  endOfResults?: string
  /** Template for results count (use {count} placeholder) */
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
}

// Launcher component props
export interface LauncherProps {
  /** Unique identifier for this launcher (must match launcherId on LauncherTrigger components) */
  id: string
  /** i18n labels for the launcher UI */
  labels?: LauncherLabels
  /** Whether to show ASCII art in the end of results message */
  showASCIIArt?: boolean
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
  /** Placeholder text shown in the trigger */
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

// LauncherList component props
export interface LauncherListProps {
  /** Additional classes to apply */
  class?: string
  /** Additional HTML attributes */
  [key: string]: string | undefined
}

// LauncherItem component props
export interface LauncherItemProps {
  /** Type of item: navigation (link) or action (button) */
  type: 'navigation' | 'action'
  /** Display label for the item */
  label: string
  /** URL for navigation items */
  href?: string
  /** Action identifier for action items */
  onAction?: string
  /** Initial pressed state for action items (for toggle buttons) */
  pressed?: boolean
  /** Additional search keywords */
  keywords?: string[]
  /** Label for the item type indicator (i18n support) - defaults to "Go to" / "Run" */
  typeLabel?: string
  /** Additional classes to apply */
  class?: string
  /** Additional HTML attributes */
  [key: string]: string | string[] | boolean | undefined
}

// LauncherGroup component props
export interface LauncherGroupProps {
  /** Group label displayed as a heading */
  label: string
  /** Additional classes to apply */
  class?: string
  /** Additional HTML attributes */
  [key: string]: string | undefined
}

// Custom event detail for action items
export interface LauncherActionEventDetail {
  /** The action identifier from the LauncherItem */
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
declare const Launcher: typeof import('./src/components/launcher/Launcher.astro').default
declare const LauncherTrigger: typeof import('./src/components/launcher/LauncherTrigger.astro').default
declare const LauncherList: typeof import('./src/components/launcher/LauncherList.astro').default
declare const LauncherItem: typeof import('./src/components/launcher/LauncherItem.astro').default
declare const LauncherGroup: typeof import('./src/components/launcher/LauncherGroup.astro').default

export { Launcher, LauncherTrigger, LauncherList, LauncherItem, LauncherGroup }
