---
name: AIOVERSE Developer Docs
description: Design system for the AIOVERSE developer documentation portal, built on the Mintlify mint theme.
colors:
  surface: "#FFFFFF"
  surface-dim: "#F9FAFB"
  surface-bright: "#FFFFFF"
  surface-container-lowest: "#FFFFFF"
  surface-container-low: "#F9FAFB"
  surface-container: "#F3F4F6"
  surface-container-high: "#E9EBF0"
  surface-container-highest: "#E0E2E6"
  on-surface: "#111827"
  on-surface-variant: "#6B7280"
  inverse-surface: "#1E2228"
  inverse-on-surface: "#F3F4F6"
  outline: "#D1D5DB"
  outline-variant: "#E5E7EB"
  surface-tint: "#0D9373"
  primary: "#0D9373"
  on-primary: "#FFFFFF"
  primary-container: "#D1F5EA"
  on-primary-container: "#064E3B"
  inverse-primary: "#6ADBB5"
  secondary: "#0B7A60"
  on-secondary: "#FFFFFF"
  secondary-container: "#CCFBF1"
  on-secondary-container: "#134E4A"
  tertiary: "#3B82F6"
  on-tertiary: "#FFFFFF"
  tertiary-container: "#DBEAFE"
  on-tertiary-container: "#1E40AF"
  error: "#EF4444"
  on-error: "#FFFFFF"
  error-container: "#FEE2E2"
  on-error-container: "#991B1B"
  primary-fixed: "#6ADBB5"
  primary-fixed-dim: "#34C59B"
  on-primary-fixed: "#064E3B"
  on-primary-fixed-variant: "#065F46"
  secondary-fixed: "#CCFBF1"
  secondary-fixed-dim: "#99F6E4"
  on-secondary-fixed: "#064E3B"
  on-secondary-fixed-variant: "#0B7A60"
  tertiary-fixed: "#DBEAFE"
  tertiary-fixed-dim: "#BFDBFE"
  on-tertiary-fixed: "#1E3A8A"
  on-tertiary-fixed-variant: "#1D4ED8"
  background: "#FFFFFF"
  on-background: "#111827"
  surface-variant: "#F3F4F6"
typography:
  h1:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: "700"
    lineHeight: 44px
    letterSpacing: -0.02em
  h2:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: "700"
    lineHeight: 32px
    letterSpacing: -0.01em
  h3:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: "600"
    lineHeight: 28px
  h4:
    fontFamily: Inter
    fontSize: 17px
    fontWeight: "600"
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 17px
    fontWeight: "400"
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: "400"
    lineHeight: 24px
  code:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: "400"
    lineHeight: 20px
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: "500"
    lineHeight: 16px
    letterSpacing: 0.01em
rounded:
  sm: 0.25rem
  DEFAULT: 0.375rem
  md: 0.5rem
  lg: 0.75rem
  xl: 1rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  2xl: 64px
  sidebar-width: 240px
  content-max-width: 768px
  toc-width: 224px
components:
  nav-link:
    textColor: "{colors.on-surface-variant}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 6px 12px
  nav-link-active:
    backgroundColor: "{colors.primary-container}"
    textColor: "{colors.primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 6px 12px
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.lg}"
    height: 36px
    padding: 0 16px
  button-primary-hover:
    backgroundColor: "{colors.secondary}"
  search-input:
    backgroundColor: "{colors.surface-container-low}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    height: 36px
    padding: 0 12px
  callout-info:
    backgroundColor: "{colors.primary-container}"
    textColor: "{colors.on-primary-container}"
    rounded: "{rounded.lg}"
    padding: "{spacing.md}"
  callout-tip:
    backgroundColor: "{colors.secondary-container}"
    textColor: "{colors.on-secondary-container}"
    rounded: "{rounded.lg}"
    padding: "{spacing.md}"
  callout-warning:
    backgroundColor: "#FEF9C3"
    textColor: "#854D0E"
    rounded: "{rounded.lg}"
    padding: "{spacing.md}"
  callout-error:
    backgroundColor: "{colors.error-container}"
    textColor: "{colors.on-error-container}"
    rounded: "{rounded.lg}"
    padding: "{spacing.md}"
  callout-note:
    backgroundColor: "{colors.tertiary-container}"
    textColor: "{colors.on-tertiary-container}"
    rounded: "{rounded.lg}"
    padding: "{spacing.md}"
  code-block:
    backgroundColor: "{colors.inverse-surface}"
    textColor: "{colors.inverse-on-surface}"
    typography: "{typography.code}"
    rounded: "{rounded.lg}"
    padding: "{spacing.md}"
  code-block-inline:
    backgroundColor: "{colors.surface-container}"
    textColor: "{colors.primary}"
    typography: "{typography.code}"
    rounded: "{rounded.DEFAULT}"
    padding: 2px 6px
  card:
    backgroundColor: "{colors.surface-container-lowest}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.xl}"
    padding: "{spacing.md}"
  card-hover:
    backgroundColor: "{colors.surface-container-high}"
  badge:
    backgroundColor: "{colors.primary-container}"
    textColor: "{colors.on-primary-container}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: 2px 10px
  tab-active:
    textColor: "{colors.primary}"
    typography: "{typography.body-md}"
  tab-inactive:
    textColor: "{colors.on-surface-variant}"
    typography: "{typography.body-md}"
---

## Brand & Style

AIOVERSE Developer Docs is a technical documentation portal for the AIOVERSE AI platform ecosystem. It serves engineers, developers, and technical integrators who need precise, authoritative references. The design philosophy is **precision through clarity** — every visual decision reduces friction and accelerates comprehension.

The aesthetic is clean and developer-native: generous whitespace, tight typographic hierarchy, and a restrained brand presence that lets content lead. The emerald-green primary palette acts as a trustworthy technical guide rather than a marketing accent — reserved for navigation affordances, interactive states, and semantic highlights that orient the reader within the documentation structure.

The emotional intent is confident and professional without being sterile. The single-color brand system signals focus and technical discipline, while the warm off-white surface palette and generous line-heights keep long reading sessions comfortable.

## Colors

The palette is deliberately minimal. A single-hue green family carries all brand weight, leaving surfaces neutral and content legible at every viewport.

- **Emerald (#0D9373):** The sole active color. Used for in-text links, active sidebar items, callout left-borders, HTTP method badges, and code identifiers in prose. It is never used decoratively.
- **Mint (#6ADBB5):** The lighter tint for hover fills and `primary-container` backgrounds. Appears as the background of active navigation items and info callouts.
- **Forest (#0B7A60):** Applied on pressed/focus states and as the `secondary` shade for button hover and deeper tonal contexts.
- **Surfaces:** A near-pure-white tonal series (white → #F9FAFB → #F3F4F6 → #E9EBF0). Tonal shifts — never hard drop shadows — separate the sidebar from content from callout blocks.
- **Text:** High-contrast charcoal (#111827) for all primary content. Medium gray (#6B7280) for metadata, timestamps, breadcrumbs, and secondary annotations.
- **Semantic palette:** Blue (#3B82F6) for informational notes; amber (#FEF9C3 / #854D0E) for warnings; red (#EF4444) for errors and destructive actions. These colors are reserved strictly for callouts, status indicators, and alerts.

## Typography

The design system uses **Inter** throughout the UI and prose, chosen for its optical balance at both display and reading sizes and its excellent rendering across operating systems and device densities. **JetBrains Mono** is used exclusively for code, providing immediate visual distinction between prose and technical output.

- **Hierarchy:** Four heading levels. Page titles (`h1`, 36px/700) set the document context. Section headers (`h2`, 24px/700) create primary structure. Subsections (`h3`, 20px/600) and parameter groups (`h4`, 17px/600) handle nested detail without introducing a new visual rhythm.
- **Reading size:** Body text uses 17px with a 28px line-height — a generous measure chosen for long-form technical reading across a 768px content column.
- **Code legibility:** Monospace at 14px/20px provides the density appropriate for terminal commands and API responses without straining focus. The distinct typeface alone differentiates code from prose; no extra styling is needed.
- **Labels:** 12px/500/0.01em letter-spacing for badges, breadcrumbs, group headings, and tab indicators — compact but scannable. Group headings in the sidebar use all-caps treatment at this size.

## Layout & Spacing

The layout uses a **three-panel structure** on desktop: a fixed left sidebar (240px), a centered content column (max 768px), and an optional floating table of contents on the right (224px). On tablet viewports the TOC collapses. On mobile the sidebar becomes a drawer.

- **Grid unit:** 4px. All spacing values are multiples of 4. The most common values are 8px (tight element clusters), 16px (intra-section gaps and callout padding), 24px (sidebar nav item groups and content section padding), and 40px (major section separators).
- **Sidebar:** Nav links use 6px/12px padding to create a dense but comfortable list. Group headings use 11px all-caps label text in `on-surface-variant`. Active items carry `primary-container` background fill.
- **Content column:** Headings carry an implicit top margin of approximately 1.5× to 2× the body line-height to signal structural breaks. Horizontal rules are rarely used; whitespace alone creates section separation.
- **Callouts:** Full-width within the content column with 16px internal padding, `rounded-lg` corners, and a 4px `border-left` in the semantic accent color.

## Elevation & Depth

This is a flat, screen-first documentation interface. Depth is conveyed through tonal contrast rather than shadows — the system uses shadows in exactly one context.

- **Sidebar and header:** Share the `surface` (#FFFFFF) background of the content area, separated by a 1px `outline-variant` (#E5E7EB) rule. No shadow is applied to layout scaffolding.
- **Cards and grid hubs:** Navigation cards use `surface-container` (#F3F4F6) fill with a 1px `outline-variant` border. On hover they shift to `surface-container-high` for tactile feedback. No shadow is applied at rest; on hover a subtle `box-shadow: 0 2px 8px rgba(0,0,0,0.06)` may lift the card slightly.
- **Modals and overlays:** The search command palette and mobile navigation drawer use a pure `surface` white background with `box-shadow: 0 8px 24px rgba(0,0,0,0.12)` — the only shadow in the system — to clearly lift them above the document layer.
- **Code blocks:** The dark `inverse-surface` (#1E2228) background provides natural elevation through color contrast without any shadow.

## Shapes

The radius scale is conservative, consistent with professional developer tooling. Corners are rounded enough to feel modern, restrained enough to feel precise.

- **Inputs and navigation:** `rounded-lg` (0.75rem / 12px) for search bars and active sidebar highlights.
- **Cards:** `rounded-xl` (1rem / 16px) for grid-layout navigation cards on overview and hub pages.
- **Inline elements:** `rounded-DEFAULT` (0.375rem / 6px) for inline code spans and small count badges.
- **Pills:** `rounded-full` (9999px) for version badges, HTTP method tags (GET, POST, etc.), and status labels where a pill silhouette signals "label" rather than "button."
- **Code blocks and tables:** No radius (or `rounded-sm`, 0.25rem) to maintain grid alignment with the full-width content column.

## Components

### Sidebar Navigation

Nav links are full-width within the 240px sidebar panel. Inactive links use `on-surface-variant` gray text with no background. Active links use `primary` (#0D9373) text on a `primary-container` (#D1F5EA) background fill with `rounded-md` (0.5rem) corners. Hovering an inactive link transitions the background to `surface-container-low` over 150ms ease-out. Group labels are rendered at 11px / 600 / all-caps in `on-surface-variant`.

### Search

A `rounded-lg` search input appears at the top of the sidebar and, when focused or activated via keyboard shortcut, opens a full-screen command palette overlay. The overlay is centered, `rounded-xl`, and uses the sole drop shadow (`0 8px 24px rgba(0,0,0,0.12)`) to separate it from the document. Results highlight the matched characters in `primary` green. Keyboard navigation moves the active result to a `primary-container` fill row.

### Callouts

Five semantic callout variants — Info (green), Tip (dark green), Warning (amber), Error (red), Note (blue) — share a common structure: a `rounded-lg` container, a 4px solid `border-left` in the semantic accent color, 16px internal padding, and a small icon-prefix followed by a bold type label. Body text inherits `body-md`. Callouts should always be used to interrupt the reading flow, so they are full-width within the content column and carry enough contrast to be noticed without screaming.

### Code Blocks

Fenced code blocks use `inverse-surface` (#1E2228) as the background with `inverse-on-surface` (#F3F4F6) base text, `JetBrains Mono` at 14px/20px. A copy-to-clipboard icon appears at top-right on hover. When a filename or language identifier is provided, it appears as a `label-sm` badge at the top-left of the block. Inline code uses `surface-container` fill with `primary` green text to visually distinguish identifiers, method names, and parameters from surrounding prose without requiring backtick decoration on every occurrence.

### Cards

Navigation hub cards (`rounded-xl`, `surface-container-low` fill, 1px `outline-variant` border) display a small icon, a title in `h4` weight, and a one-line description in `body-md / on-surface-variant`. On hover, the background shifts to `surface-container-high` and a chevron icon transitions slightly to the right to signal interactivity. Cards are laid out in a CSS grid with `spacing.md` (16px) gaps.

### Badges and Tags

HTTP method badges (GET, POST, PUT, DELETE, PATCH) use `rounded-full` pills with semantically tinted backgrounds: green tints for GET/safe methods, amber tints for POST/PUT, red tints for DELETE. All use the `label-sm` typography. Version and deprecation badges (`rounded-full`, `primary-container` fill) use the same pill shape and appear inline with page titles or in the sidebar next to items that are new or deprecated.

### Tables

Data tables use no alternating row fills by default; `outline-variant` (#E5E7EB) horizontal rules separate rows. Column headers use `label-sm` / 600 weight in `on-surface-variant`. On hover, a row receives a `surface-container-low` background to aid tracking. Code values within table cells use the inline code style (`code-block-inline` component) to preserve the visual language established in prose.

### Tabs

Tab bars separate content variants (e.g., language switchers in code blocks, or platform-specific guides). The active tab uses `primary` green text with a 2px solid `primary` underline. Inactive tabs use `on-surface-variant` text with no underline. All tabs use `body-md` typography and transition between states over 100ms ease.
