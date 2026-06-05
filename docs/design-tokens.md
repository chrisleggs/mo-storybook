# WDH Design Tokens & Style Guide

Design tokens for the WDH (Weather Data Hub) component library. All values are sourced directly from the Figma design system (WDH Capture Claude) and implemented in the `mo-storybook` component library.

---

## Colour

### Text

| Token | Hex | Usage |
|---|---|---|
| Heading | `#333333` | Page titles, section headings, labels, attribute keys |
| Body | `#1d1d1d` | Body copy, attribute values, nav top bar background |

### Interactive

| Token | Hex | Usage |
|---|---|---|
| Primary | `#0074cc` | CTA buttons, links, Back Link chevron |
| Primary hover | `#005ea8` | Button hover state, link hover |
| Primary active | `#004f8f` | Button click/active state |
| Primary disabled | `#b3d4ef` | Disabled button background |
| Focus ring | `#ffbf47` | Keyboard focus outline (accessibility) |

### Navigation & Chrome

| Token | Hex | Usage |
|---|---|---|
| Nav top bar | `#1d1d1d` | Header top bar background |
| Nav bar | `#2a2a2a` | Header navigation bar background, footer top background |
| Nav active | `#b9dc0c` | Active navigation link |
| Nav inactive | `#f8f9fa` | Inactive navigation link text |
| Secondary bg | `#e0e0e0` | Login/Register button default, Back To Top default |

### Surface & Border

| Token | Hex | Usage |
|---|---|---|
| White | `#ffffff` | Page background, card background, footer text/icons |
| Divider | `#dee2e6` | Horizontal rules, footer link separator |
| Table border | `#ced4da` | At a glance row borders |
| Placeholder | `#e9ecef` | Image placeholder background |

---

## Typography

### Typefaces

| Family | Weight | Usage |
|---|---|---|
| FS Emeric / FS Emeric Web | 600 (SemiBold) | Page headings (H1), section titles, labels, anchor links |
| FS Emeric Web | 400 (Regular) | Body copy, CTA button labels, navigation links, footer links |
| system-ui, sans-serif | — | Fallback when FS Emeric is unavailable |

### Type Scale

| Role | Size | Weight | Colour |
|---|---|---|---|
| Page title (H1) | 48px | 600 | `#333333` |
| Section heading (H2) | 42px | 600 | `#333333` |
| Sub-section heading | 32px | 600 | `#333333` |
| Product card title | 24px | 600 | `#333333` |
| Anchor link | 22px | 600 | `#333333` |
| Navigation link | 21px | 400 | `#f8f9fa` |
| Back To Top label | 21px | 400 | `#1d1d1d` |
| Body / label / CTA | 19px | 400 | `#1d1d1d` |
| Login button | 16px | 400 | `#1d1d1d` |

---

## Spacing

### Section Padding

All content sections align to a consistent 135px left edge. Right padding tracks the header's Login/Register button at `calc(5% + 24px)`.

| Context | Value |
|---|---|
| Section left padding | `135px` |
| Section right padding | `calc(5% + 24px)` |
| Header / footer horizontal padding | `5%` or `11%` |

### Vertical Rhythm

| Section | Top padding | Bottom padding |
|---|---|---|
| Welcome | `59px` | `64px` |
| Browse Products | `51px` | `55px` |
| Product Card | `32px` | `32px` |
| Back Link | `16px` | `16px` |
| Anchors | `24px` | `24px` |
| Overview / At a Glance / Download / Usage | `40px` | `40px` |
| Back To Top | `32px` | `32px` |

---

## Shape

| Token | Value | Usage |
|---|---|---|
| Border radius — button | `5px` | CTA button, Login button, Back To Top |
| Border radius — card | `4px` | Product card |
| Border radius — small | `2px` | Image placeholder |

---

## Component Sizes

| Component | Size |
|---|---|
| Header top bar height | `80px` |
| Header nav bar height | `58px` |
| Button height | `44px` |
| Button min-width | `143px` |
| Back To Top | `54 × 54px` |
| Footer top min-height | `246px` |
| Footer bottom min-height | `77px` |
| Met Office logo | `148 × 20px` |
| Social icons | `44 × 44px` |

---

## Elevation

| Token | Value | Usage |
|---|---|---|
| Card shadow | `0 0 3px rgba(0,0,0,0.13)` | Product card |

---

## Responsive Breakpoints

| Breakpoint | Max-width | Label |
|---|---|---|
| Laptop | `1511px` | Reduced nav gap, scaled heading |
| Tablet | `1279px` | 40px section padding, scaled type |
| Mobile | `767px` | 20px section padding, stacked layouts |

### Mobile overrides (≤ 767px)

- Section padding reduces to `20px` left/right
- Header nav wraps and font size drops to `16px`
- Product card stacks image above content
- Footer top stacks logo above links (left-aligned)
- Footer social icons reduce to `32 × 32px`

---

## Iconography

All icons are implemented as inline SVGs with no external dependencies.

| Icon | Component | Size | Stroke colour |
|---|---|---|---|
| Chevron left | Back Link | `7 × 13px` | `#0074cc` |
| Chevron up | Back To Top | `24 × 12px` | `#1d1d1d` (white on hover) |
| Met Office logo | Header, Footer | `148 × 20px` | White / `#b9d532` |
| X (Twitter), YouTube, Facebook, TikTok, Instagram, LinkedIn | Footer | `44 × 44px` | White |

---

## Storybook

Live component library: [https://chrisleggs.github.io/mo-storybook](https://chrisleggs.github.io/mo-storybook)

Source: [https://github.com/chrisleggs/mo-storybook](https://github.com/chrisleggs/mo-storybook)

Components are located in `src/components/` — each component has its own folder containing a `.js` file, `.css` file, and `.stories.js` file.
