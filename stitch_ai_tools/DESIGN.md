---
name: AI Discovery System
colors:
  surface: '#051424'
  surface-dim: '#051424'
  surface-bright: '#2c3a4c'
  surface-container-lowest: '#010f1f'
  surface-container-low: '#0d1c2d'
  surface-container: '#122131'
  surface-container-high: '#1c2b3c'
  surface-container-highest: '#273647'
  on-surface: '#d4e4fa'
  on-surface-variant: '#b9cacb'
  inverse-surface: '#d4e4fa'
  inverse-on-surface: '#233143'
  outline: '#849495'
  outline-variant: '#3b494b'
  surface-tint: '#00dbe9'
  primary: '#dbfcff'
  on-primary: '#00363a'
  primary-container: '#00f0ff'
  on-primary-container: '#006970'
  inverse-primary: '#006970'
  secondary: '#ebb2ff'
  on-secondary: '#520072'
  secondary-container: '#b600f8'
  on-secondary-container: '#fff6fc'
  tertiary: '#f7f4ff'
  on-tertiary: '#2f303a'
  tertiary-container: '#d9d8e6'
  on-tertiary-container: '#5e5e69'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#7df4ff'
  primary-fixed-dim: '#00dbe9'
  on-primary-fixed: '#002022'
  on-primary-fixed-variant: '#004f54'
  secondary-fixed: '#f8d8ff'
  secondary-fixed-dim: '#ebb2ff'
  on-secondary-fixed: '#320047'
  on-secondary-fixed-variant: '#74009f'
  tertiary-fixed: '#e3e1ef'
  tertiary-fixed-dim: '#c6c5d2'
  on-tertiary-fixed: '#1a1b24'
  on-tertiary-fixed-variant: '#454651'
  background: '#051424'
  on-background: '#d4e4fa'
  surface-variant: '#273647'
typography:
  headline-xl:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.2'
  title-md:
    fontFamily: Hanken Grotesk
    fontSize: 20px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-sm:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.05em
  mono-code:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

The design system is engineered for a high-performance AI tool directory. The brand personality is **forward-thinking, precise, and authoritative**, positioning the platform as the definitive gateway to the machine learning ecosystem. 

The aesthetic blends **Modern Minimalism** with **Glassmorphism**. It utilizes a deep, immersive dark canvas to reduce eye strain during long browsing sessions, punctuated by vibrant "digital neon" accents that signify technological energy. Every element should feel engineered rather than merely decorated, evoking the precision of modern IDEs and sophisticated data dashboards.

**Emotional Response:**
- **Clarity:** Users feel they can find the needle in the haystack of AI tools.
- **Innovation:** The interface feels as advanced as the tools it hosts.
- **Trust:** A structured, high-contrast layout communicates reliability and professional curation.

## Colors

The palette is anchored in a "Deep Space" hierarchy. The background isn't pure black, but a very dark navy (`#0A0B14`) to allow for subtle depth and layering.

- **Primary (Electric Cyan):** Used for primary actions, success states, and active selection glows. It represents "logic" and "processing."
- **Secondary (Phlox Purple):** Used for "Featured" content, premium AI tools, and hover-state gradients. It represents "creativity" and "intelligence."
- **Surface Palette:** 
    - **Base:** `#0A0B14` (Deep Background)
    - **Elevated:** `#161B22` (Card and Sidebar backgrounds)
    - **Overlay:** `#1E293B` (Dropdowns and tooltips)
- **Typography:** 
    - **High-Emphasis:** `#FFFFFF` (Headlines/Active text)
    - **Medium-Emphasis:** `#94A3B8` (Body/Descriptions)
    - **Disabled/Hint:** `#475569` (Inactive states/Footers)

## Typography

This design system uses a triple-font approach to balance personality with extreme legibility.

- **Hanken Grotesk** is used for headlines. Its sharp, contemporary cuts give the UI a tech-forward edge.
- **Inter** provides a highly functional base for body copy, ensuring descriptions of AI tools are readable at any scale.
- **Geist** (Monospaced/Semi-Mono) is utilized for labels, categories, and technical metadata, reinforcing the "developer-tool" aesthetic.

**Scale and Hierarchy:**
- Headlines should use tight letter-spacing to appear more impactful.
- Body text uses generous line height (1.5 - 1.6) to allow for easy scanning of tool summaries.
- Labels use a subtle uppercase treatment and tracking to differentiate them from interactive body text.

## Layout & Spacing

The layout follows a **Fixed-Fluid hybrid grid**. The sidebar is fixed-width (`280px`), while the main tool gallery is a fluid grid that wraps content based on viewport size.

**Desktop Layout:**
- 12-column grid.
- Sidebar spans 3 columns (fixed aspect).
- Main content spans 9 columns.
- Gutter width is consistent at `24px`.

**Adaptive Rules:**
- **Desktop (1024px+):** Sidebar is permanently visible on the left.
- **Tablet (768px - 1023px):** Sidebar collapses into a top horizontal scrolling chip-bar or a slide-out drawer. Grid switches to 2 columns for cards.
- **Mobile (Below 768px):** Single-column stack. Margins reduce to `16px`. Hero typography scales down to `headline-lg-mobile`.

## Elevation & Depth

Depth is achieved through **Luminescence and Tonal Layering** rather than traditional drop shadows.

1.  **The Canvas (Level 0):** The darkest navy background (`#0A0B14`).
2.  **The Container (Level 1):** Cards and sidebars use a slightly lighter shade (`#161B22`) with a subtle 1px border (`#FFFFFF10`).
3.  **The Interactive (Level 2):** On hover, cards transition to an even lighter background or trigger a "Glow" effect—a soft, colored shadow behind the card (Cyan or Purple) with a 20px blur and low opacity (15-20%).
4.  **Glassmorphism:** Navigation bars and sticky headers must use `backdrop-filter: blur(12px)` with a 70% opacity background. This maintains context while the user scrolls through thousands of tools.

## Shapes

The shape language is **"Modern Rounded."** It avoids the playfulness of "Pill" shapes for primary containers, opting for a structured, intentional radius that feels like a premium hardware product.

- **Cards:** 1rem (`rounded-lg`) provides a sophisticated, modern container for tool information.
- **Buttons & Inputs:** 0.5rem (`rounded-base`) ensures they look distinct from the larger cards.
- **Tags/Chips:** 2rem (`rounded-full`) to differentiate them from interactive buttons and static containers.

## Components

### 1. The "Power Card" (AI Tool Item)
- **Surface:** `#161B22` background.
- **Border:** 1px solid `#FFFFFF08`.
- **Hover State:** A **Flowing Border** effect (gradient of Cyan to Purple) or a subtle "Lift" with a 15% Cyan glow.
- **Content:** Icon (Top-left), Title (Bold), Short Description (Max 2 lines), Tags (Bottom).

### 2. Gradient Action Buttons
- **Primary:** Solid background or linear gradient (Cyan to Blue-Violet). High-contrast white text.
- **Secondary (Ghost):** 1px Cyan border, transparent background. Hover state fills the background with 10% Cyan tint.

### 3. Classification Tags
- Small, rounded-pill shapes.
- Background: `#FFFFFF08`. 
- Text: `#94A3B8`.
- Active state: Background becomes `Primary Color` with 20% opacity, text becomes `Primary Color`.

### 4. Categorical Sidebar
- Vertical list with strict alignment.
- Active category is marked by a vertical 3px "Light Bar" on the left edge using the `Primary Color`.
- Use icons from a consistent line-art set (e.g., Lucide or Phosphor) to aid quick scanning.

### 5. Search Bar (Global)
- High-width input with a frosted glass effect.
- Leading icon (Search) and trailing keyboard shortcut hint (e.g., `Cmd + K`).
- Subtle inner-glow when focused.

### 6. Shimmer/Loading States
- Use a diagonal "sweep" animation with a subtle gradient (`#1E293B` to `#2D3748`) for skeletons while tools are being fetched.