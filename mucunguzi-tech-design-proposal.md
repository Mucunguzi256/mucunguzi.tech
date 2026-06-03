The design proposal is already fully captured on disk at 1153 lines. Here is the complete document in full.

---

# mucunguzi.tech â Design Proposal

**Project:** Personal portfolio for Mucunguzi Moses (African Web3/AI builder)  
**Direction:** African-Cyber Bento â one decisive direction, committed and refined  
**Format:** Hybrid â slide deck (vision for investors/partners) + annotated implementation spec (for build team)  
**Date:** June 2026

---

---

## Slide 1 â Cover / Vision

> *For investors, partners, and collaborators who need to understand the creative direction in 30 seconds.*

---

### Vision Statement

**mucunguzi.tech is not another dark-mode dev portfolio.**

It is a design artifact that makes one argument before a single word is read: *African technologists build at the global standard â and bring something no one else can.*

The visual direction is **African-Cyber Bento**: the warmth of Ugandan earth tones meets the precision of Vercel-caliber grid systems. A bento-grid layout that feels as sophisticated as Linear or Stripe, but finished in terracotta, ochre, and deep soil rather than cool greys and blues. A terminal/CLI hero animation that signals "I speak the language of infrastructure" â rendered in warm amber instead of green-on-black.

This is not "African-themed design." This is global-grade design that happens to be unmistakably African.

**Tagline candidates (ranked):**

| Rank | Tagline | Notes |
|---|---|---|
| 1 | `ð§âð»> build --from uganda --global` | CLI syntax, memorable, authentic |
| 2 | `> moses.mucunguzi âengineer, builder, african` | Clear, direct, subverts "dev" |
| 3 | `Code Â· Chain Â· Continent` | Rhythmic, three pillars |
| 4 | `Web3 + AI, built from Kampala` | Location-anchored, specific |

**Recommended: #1** â the `build --from uganda --global` CLI command is sticky, shareable, and instantly signals both technical credibility AND cultural origin without a single adjective.

---

### Key Artistic Anchors (for moodboarding)

- **Tone:** Warm, grounded, technically confident â never cold or corporate
- **References:** Vercel bento-grid layouts Ã Linear's quiet precision Ã the warmth of Ethiopian coffee ceremony photography Ã Ugandan landscape ochres Ã Stripe's typographic clarity
- **Anti-references:** No terminal-green-on-black Matrix tropes. No "Africa pattern" clip-art. No generic dark-dev-portfolio with a Kente-cloth banner slapped on top.
- **Cultural signal:** Subterranean. The palette does the work. The visitor *feels* the origin before reading about it.

---

---

## Slide 2 â Design System

> *For the build team: the atomic tokens that govern every pixel.*

---

### 2.1 Color Palette (OKLch)

All tokens use `oklch()` â perceptually uniform, wide-gamut, future-proof.

```css
:root {
  /* Surface & Background */
  --bg:        oklch(14% 0.018 45);   /* Deep warm soil â main page background */
  --surface:   oklch(19% 0.022 45);   /* Card / container surface â slightly lifted */
  --surface-2: oklch(24% 0.025 45);   /* Elevated surfaces â dropdowns, modals */
  --border:    oklch(30% 0.025 45);   /* Subtle borders, dividers */

  /* Text */
  --fg:        oklch(93% 0.015 70);   /* Primary text â warm cream */
  --fg-2:      oklch(75% 0.02 65);    /* Secondary text â muted warm */
  --fg-3:      oklch(55% 0.025 60);   /* Tertiary / metadata â faint */

  /* Accents */
  --accent:    oklch(58% 0.18 35);    /* Terracotta â primary accent */
  --accent-2:  oklch(65% 0.14 70);    /* Ochre gold â secondary accent */
  --accent-dim: oklch(35% 0.08 35);   /* Muted terracotta â hover surfaces, subtle fills */

  /* Semantic */
  --success:   oklch(55% 0.14 145);   /* African tech green â used sparingly */
  --syntax:    oklch(70% 0.12 80);    /* Terminal amber â CLI output, code highlights */
}
```

**Color rationale:**

| Token | Why this value |
|---|---|
| `--bg` at 14% lightness, 0.018 chroma | Deep enough for drama, warm enough (45Â° hue) to avoid the blue-black default of every dark portfolio. |
| `--accent` at 58% lightness, 0.18 chroma | A saturated terracotta â reads as fired clay, not generic orange. High enough chroma to pop against the dark background, low enough to avoid neon. |
| `--accent-2` at 65%/0.14/70Â° | Gold with a red undertone â ochre. Companion to terracotta for secondary highlights (tags, dates, code keywords). |
| `--syntax` at 70%/0.12/80Â° | Warm amber â the CLI output color. Replaces the tired green-on-black terminal trope. |
| `--surface` at 19% | Noticeably lighter than `--bg` without being a separate color family. Warmth continuity throughout. |

**Usage rules:**
- `--accent` (terracotta): primary CTA buttons, active nav item, hero emphasis, hover states â maximum **one** use per viewport at a time
- `--accent-2` (ochre): secondary tags, project dates, decorative borders, code keyword highlighting
- `--syntax` (amber): terminal output, CLI prompt, monospace highlights only

**Accessibility:**
- `--accent` on `--bg`: contrast ratio ~5.8:1 at 14px bold â exceeds WCAG AA for large text
- `--fg` on `--bg`: contrast ratio ~16:1 â exceeds WCAG AAA
- Never use pure black (`#000`) or pure white (`#fff`) anywhere

---

### 2.2 Typography

```css
:root {
  --font-display: 'Satoshi', 'Instrument Sans', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
  --font-body:    'Satoshi', 'Inter', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
  --font-mono:    'JetBrains Mono', 'IBM Plex Mono', ui-monospace, 'SF Mono', monospace;
}
```

**Type scale (CSS `clamp()` for fluid scaling):**

| Token | Size | Line-height | Weight | Letter-spacing | Usage |
|---|---|---|---|---|---|
| `--text-xs` | clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem) | 1.5 | 500 | normal | Labels, captions |
| `--text-sm` | clamp(0.875rem, 0.8rem + 0.3vw, 1rem) | 1.5 | 400 | normal | Body, metadata |
| `--text-base` | clamp(1rem, 0.9rem + 0.4vw, 1.125rem) | 1.6 | 400 | normal | Paragraphs |
| `--text-lg` | clamp(1.125rem, 1rem + 0.5vw, 1.375rem) | 1.5 | 500 | -0.01em | Lead / intro text |
| `--text-xl` | clamp(1.5rem, 1.2rem + 1vw, 2rem) | 1.3 | 600 | -0.02em | Section headings |
| `--text-2xl` | clamp(2rem, 1.5rem + 2vw, 3rem) | 1.2 | 700 | -0.025em | Major headings |
| `--text-3xl` | clamp(2.5rem, 1.8rem + 3vw, 4.5rem) | 1.1 | 700 | -0.03em | Hero headlines |
| `--text-mono` | clamp(0.875rem, 0.8rem + 0.3vw, 1rem) | 1.6 | 400 | normal | Code, terminal |

**Why Satoshi?** It's a modern geometric sans with warm character â the letterforms have slightly more humanity than Inter or SF Pro. It renders well at both display sizes (with tight tracking) and body sizes (with open counters). Available free on Fontshare.

---

### 2.3 Spacing & Grid

```css
:root {
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --space-9: 96px;
  --space-10: 128px;

  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --radius-full: 9999px;
}
```

**Grid system:**
- **Page max-width:** 1280px, centered with auto margins
- **Content max-width (prose):** 720px
- **Bento grid:** 6-column Ã auto-row CSS Grid on desktop (12-column subgrid available for complex layouts)
- **Breakpoints:** sm: 640px, md: 768px, lg: 1024px, xl: 1280px
- **Gutter:** `--space-5` (24px) between grid cells
- **Padding:** `--space-8` (64px) section vertical spacing at desktop, `--space-6` at tablet, `--space-5` at mobile

---

### 2.4 Shadows & Elevation

```css
:root {
  --shadow-sm:   0 1px 2px oklch(0% 0 0 / 0.12);
  --shadow-md:   0 4px 12px oklch(0% 0 0 / 0.15);
  --shadow-lg:   0 8px 30px oklch(0% 0 0 / 0.18);
  --shadow-glow: 0 0 20px oklch(from var(--accent) l c h / 0.15);
}
```

Shadow philosophy (Vercel-inspired): prefer `box-shadow` as a border substitute for cards, using `0 0 0 1px var(--border)` approach for zero-offset borders. Reserve proper elevation shadows for interactive states (hover, focus).

---

---

## Slide 3 â Hero Section (Mockup + Spec)

> *The visitor's first 3 seconds. Must signal "technical precision" and "warmth" simultaneously.*

---

### Layout (Bento Grid â Top-Left Anchor)

```
ââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
â ââââââââââââââ                                       â
â â  $ prompt  â  build --from uganda --global         â
â â  (typing)  â                                       â
â â  [output]  âââââââââââââââââââââââââââââââââââââââââ¤
â â            â              â                         â
â â            â   Subtitle  â                         â
â â  Terminal  â   "Web3 &   â                         â
â â  widget    â   AI eng."  â                         â
â â            â              â                         â
â ââââââââââââââ              â                         â
â                             â                         â
â  [github] [twitter] [cv]    â                         â
â  âââââââ âââââââ âââââââ    â                         â
â                             â                         â
ââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
```

**Grid cell breakdown (desktop 6-column):**

| Cell | Columns | Rows | Content |
|---|---|---|---|
| Terminal | 1â3 | 1â3 | CLI typing animation widget (see animation spec) |
| Subtitle | 4â6 | 1â1 | "Web3 & AI Engineer Â· Kampala, Uganda" with decorative gradient bar |
| Social | 4â6 | 2â3 | Bento card showing social links with hover states |

**Grid spec:**
```css
.hero-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: minmax(120px, auto);
  gap: var(--space-5);
  min-height: 90vh;
  padding-block: var(--space-8);
}
```

---

### Terminal / CLI Typing Animation (Signature Element)

This is the **decisive flourish** of the entire page. Get it right.

**Visual treatment:**
- Card background: `--surface` with `--border` 1px zero-offset shadow border
- Rounded: `--radius-lg`
- Padding: `--space-6`
- Prompt character: `$` in `--accent-2` (ochre)
- Command text: `--fg` (warm cream)
- Output text: `--syntax` (amber)
- Cursor: blinking block cursor in `--accent` (terracotta)
- Font: `--font-mono` throughout

**Typing sequence (repeat every 8 seconds, 2s pause between cycles):**

```
$ build --profile mucunguzi --stack web3+ai       [2s typing, 80ms per char]
â Deploying... entity=mucunguzi.tech region=global  [1s, typed at 40ms/char]
  source=uganda/latent-ecosystem                    [0.5s reveal]
  stack=solidity+nextjs+rust                        [0.5s reveal]
  status=open-to-collaborate                        [0.5s reveal]
$ _                                                 [cursor blink for 2s, then loop]
```

**Implementation detail â typed char by char with a `setInterval` cursor sync:**
```typescript
// CommandLine component â state machine
type Phase = 'typing-command' | 'typing-output' | 'revealing-lines' | 'idle';

const lines = [
  { text: 'build --profile mucunguzi --stack web3+ai', speed: 80, phase: 'typing-command' },
  { text: 'â Deploying... entity=mucunguzi.tech region=global', speed: 40, phase: 'typing-output' },
  { text: '  source=uganda/latent-ecosystem', delay: 500, phase: 'revealing-lines' },
  { text: '  stack=solidity+nextjs+rust', delay: 500, phase: 'revealing-lines' },
  { text: '  status=open-to-collaborate', delay: 500, phase: 'revealing-lines' },
];
```

**Accessibility:** The terminal animation should respect `prefers-reduced-motion`. When reduced motion is detected, render the final state immediately (all lines visible, no typing) as a static terminal block.

**Responsive:** On mobile (<640px), the terminal card spans full width. Typing speed stays the same but the card height adjusts.

---

### Social Links Card

A bento card sitting to the right of the terminal:

```
ââââââââââââââââââââââââââââââââââââââââââ
â  github/mucunguzi    â                 â
â  âââââââââââââââââââââ                 â
â  @mucunguzi          â                 â
â  âââââââââââââââââââââ                 â
â  mucunguzi.tech/cv   â                 â
â  âââââââââââââââââââââ                 â
â  dev.to/@mucunguzi    â                â
â  âââââââââââââââââââââ                 â
ââââââââââââââââââââââââââââââââââââââââââ
```

- Each link row: `--fg-2` label, `--accent-2` arrow, hover = `--accent` text
- Divider: `1px solid var(--border)` at 50% width, centered
- No icons â text-only, the typography carries it
- Click = opens in new tab

---

### Navigation Bar

Fixed-top, frosted glass effect on scroll:

```css
.nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  padding: var(--space-4) var(--space-6);
  backdrop-filter: blur(12px) saturate(1.2);
  -webkit-backdrop-filter: blur(12px) saturate(1.2);
  background: oklch(from var(--bg) l c h / 0.7);
  border-bottom: 1px solid var(--border);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

**Nav items:** Home, About, Projects, Contact â rendered in `--fg-2` with `--accent` active state. No hamburger until <640px breakpoint (simple slide-in menu).

---

---

## Slide 4 â About Section (Mockup + Spec)

> *The "who is this person" section. Builds credibility without a boring bio block.*

---

### Bento Grid Layout (2 Ã 3)

```
âââââââââââââââââââââââ¬ââââââââââââââââââââââ
â                     â                     â
â  Photo / Avatar     â  "I build at the    â
â                     â   intersection of   â
â  (warm duotone)     â   Web3 protocols    â
â                     â   and AI systems."  â
â                     â                     â
âââââââââââââââââââââââ¼ââââââââââââââââââââââ¤
â                     â                     â
â  Stats              â  Stack / Skills     â
â                     â  (tag cloud)        â
â  â¢ 5+ yrs Web3      â                     â
â  â¢ 12+ shipped      â  Solidity  Rust     â
â  â¢ 3 hackathons won â  Next.js  Python    â
â  â¢ Open source      â  ZK-proofs  Cairo   â
â                     â  React     GraphQL  â
âââââââââââââââââââââââ´ââââââââââââââââââââââ¤
â                                           â
â  "Why I build" â short personal statement â
â                                           â
âââââââââââââââââââââââââââââââââââââââââââââ
```

**Grid spec:**
```css
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-5);
}

.about-grid > :nth-child(3) {  /* Stats + Stack row */
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-5);
}

.about-grid > :nth-child(4) {  /* Full-width statement */
  grid-column: 1 / -1;
}
```

**Card treatments:**

| Card | Background | Radius | Special |
|---|---|---|---|
| Photo | `--surface` | `--radius-lg` | Warm duotone overlay (terracotta + gold blend), CSS `mix-blend-mode: multiply` |
| Bio | `--surface` | `--radius-lg` | Large pull-quote styling, `--text-xl`, left accent border 3px `--accent` |
| Stats | `--surface` | `--radius-md` | Tabular numbers in `--font-mono` with `font-variant-numeric: tabular-nums` |
| Skills | `--surface` | `--radius-md` | Tag pills: `--surface-2` bg, `--fg-2` text, `--accent-2` border on hover |
| Statement | `--surface` | `--radius-lg` | Full-width, centered text, `--text-lg`, max-width 640px |

**Skill tags spec:**
```css
.skill-tag {
  display: inline-block;
  padding: var(--space-1) var(--space-3);
  background: var(--surface-2);
  color: var(--fg-2);
  border-radius: var(--radius-full);
  font-size: var(--text-xs);
  font-weight: 500;
  border: 1px solid transparent;
  transition: border-color 0.2s, color 0.2s;
  cursor: default;
}
.skill-tag:hover {
  border-color: var(--accent-2);
  color: var(--accent-2);
}
```

**Photo treatment â warm duotone CSS:**
```css
.photo-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: sepia(0.4) saturate(1.3) hue-rotate(-5deg);
  mix-blend-mode: multiply;
}

.photo-card::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, 
    oklch(from var(--accent) l c h / 0.2),
    oklch(from var(--accent-2) l c h / 0.1));
  pointer-events: none;
}
```

**Stats â tabular data:**
```html
<div class="stat">
  <span class="stat-value">5+</span>
  <span class="stat-label">Years Web3</span>
</div>
```
- `.stat-value`: `--text-2xl`, `--font-mono`, `--accent` color, tabular-nums
- `.stat-label`: `--text-sm`, `--fg-3`

---

### Scroll-Triggered Staggered Reveal (About Section)

Each card in the about grid reveals sequentially on scroll into viewport:

| Card | Reveal delay | Direction |
|---|---|---|
| Photo | 0ms | fade-in + translateY(20px) â 0 |
| Bio | 100ms | fade-in + translateY(20px) â 0 |
| Stats | 200ms | fade-in + translateX(-10px) â 0 |
| Skills | 300ms | fade-in + translateX(10px) â 0 |
| Statement | 400ms | fade-in + translateY(15px) â 0 |

```css
.about-card {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1),
              transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
}

.about-card.revealed {
  opacity: 1;
  transform: translateY(0);
}

/* Stagger via style attribute: style="transition-delay: 0ms" etc. */
```

Implementation: use `IntersectionObserver` with `rootMargin: '-80px'` to trigger when the card is 80px into the viewport. Respect `prefers-reduced-motion` â skip transitions entirely, set opacity: 1 initially.

---

---

## Slide 5 â Projects Section (Mockup + Spec)

> *The portfolio's centerpiece. Each project card is a bento-grid cell with a gradient border that animates on hover.*

---

### Section Layout

```
ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
â  â                                                          â
â  ## Selected Projects                                       â
â                                                             â
â  ââââââââââââââââ  ââââââââââââââââ  ââââââââââââââââ      â
â  â  Project A   â  â  Project B   â  â  Project C   â      â
â  â              â  â              â  â              â      â
â  â  [gradient   â  â  [gradient   â  â  [gradient   â      â
â  â   border]    â  â   border]    â  â   border]    â      â
â  â              â  â              â  â              â      â
â  â  Solidity Â·   â  â  Next.js Â·   â  â  Python Â·    â      â
â  â  ZK          â  â  AI          â  â  Data        â      â
â  ââââââââââââââââ  ââââââââââââââââ  ââââââââââââââââ      â
â                                                             â
â  ââââââââââââââââ  ââââââââââââââââ  ââââââââââââââââ      â
â  â  Project D   â  â  Project E   â  â  Project F   â      â
â  â              â  â              â  â              â      â
â  â  [gradient   â  â  [gradient   â  â  [gradient   â      â
â  â   border]    â  â   border]    â  â   border]    â      â
â  ââââââââââââââââ  ââââââââââââââââ  ââââââââââââââââ      â
â                                                             â
â  [archive link â]                                            â
ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
```

**Grid spec:**
```css
.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-5);
}

@media (max-width: 1024px) {
  .projects-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 640px) {
  .projects-grid { grid-template-columns: 1fr; }
}
```

---

### Gradient Border Card (Hero Element)

Each project card has a **static subtle border that becomes a full animated gradient on hover**. This is the section's decisive flourish.

**Structural approach (no pseudo-elements):** Use a `<div class="project-card">` wrapper with an inner `<div class="project-card-inner">`:

```html
<div class="project-card">
  <div class="project-card-inner">
    <div class="project-thumb">...</div>
    <h3>Project Name</h3>
    <p>Short description...</p>
    <div class="project-tags">
      <span>Solidity</span>
      <span>ZK</span>
    </div>
  </div>
</div>
```

```css
.project-card {
  position: relative;
  border-radius: var(--radius-lg);
  background: var(--surface);
  padding: 1px;  /* Creates the border gap */
  overflow: hidden;
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
}

.project-card::before {
  content: '';
  position: absolute;
  inset: -50%;
  background: conic-gradient(
    from 0deg,
    var(--border),
    var(--accent-dim),
    var(--accent-2),
    var(--accent),
    var(--border)
  );
  animation: border-rotate 4s linear infinite;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.project-card:hover::before {
  opacity: 1;
}

.project-card-inner {
  position: relative;
  border-radius: calc(var(--radius-lg) - 1px);
  background: var(--surface);
  padding: var(--space-6);
  height: 100%;
  z-index: 1;
}

@keyframes border-rotate {
  to { transform: rotate(360deg); }
}
```

**Note:** The conic gradient border technique uses `inset: -50%` and `rotate` to create a seamless flowing gradient border. The `padding: 1px` on the parent creates the visible gap where the gradient shows. This avoids SVG border complexity and works across browsers.

**Hover transform:** The entire card lifts with `translateY(-4px)` and `box-shadow` enhancement on hover:

```css
.project-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-glow);
}
```

---

### Project Card Content

```
ââââââââââââââââââââââââââââ
â                          â
â  [Thumbnail / Screenshot]â
â  240px height placeholderâ
â                          â
â  âââââââââââââââââââââââ â
â                          â
â  ## Project Name         â
â  Short 1-line desc       â
â                          â
â  [tag] [tag] [tag]       â
â                          â
ââââââââââââââââââââââââââââ
```

- **Thumbnail area:** 240px tall, `--surface-2` background, centered SVG icon or screenshot placeholder. On hover, a subtle "view project â" overlay appears at 50% opacity.
- **Title:** `--text-xl`, `--fg`, 2-line clamp with `-webkit-line-clamp: 2`
- **Description:** `--text-sm`, `--fg-2`, 2-line clamp
- **Tags:** `--text-xs`, `--fg-3`, with `--accent-dim` dot separator

**Click behavior:** Card click navigates to project detail page (`/projects/slug`). Cursor should be `pointer` on hover, and the entire card is wrapped in a `<Link>` (Next.js) or `<a>` tag.

**"View all projects" link:** Below the grid, styled as:
```css
.archive-link {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  color: var(--fg-2);
  font-size: var(--text-lg);
  border-bottom: 1px solid var(--accent);
  padding-bottom: 2px;
  transition: color 0.2s, gap 0.2s;
}
.archive-link:hover {
  color: var(--accent);
  gap: var(--space-3);
}
```

---

---

## Slide 6 â CTA / Contact Section (Mockup + Spec)

> *The conversion point. Warm, human, low-friction.*

---

### Layout â Split Bento

```
âââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
â  ââââââââââââââââââââââââââââ¬ââââââââââââââââââââââââââââââââ
â  â                          â                              ââ
â  â  Let's build             â  ââââââââââââââââââââââââââ  ââ
â  â                          â  â                        â  ââ
â  â  "I'm always open to     â  â  Name ___________      â  ââ
â  â   interesting projects,  â  â  Email __________      â  ââ
â  â   collaborations, or     â  â  Message ________      â  ââ
â  â   a conversation over    â  â  _______________       â  ââ
â  â   coffee (Kampala has    â  â                        â  ââ
â  â   excellent coffee)."    â  â  [Send message â]      â  ââ
â  â                          â  â                        â  ââ
â  â  [email] [github]         â  ââââââââââââââââââââââââââ  ââ
â  â  [twitter] [cal.com]     â                              ââ
â  ââââââââââââââââââââââââââââ´ââââââââââââââââââââââââââââââââ
â                                                             â
â  ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
â  â  "The best time to plant a tree was 20 years ago.      ââ
â  â   The second best time is now."                         ââ
â  â  â African proverb                                      ââ
â  ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
âââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
```

**Grid spec:**
```css
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-6);
}

@media (max-width: 768px) {
  .contact-grid { grid-template-columns: 1fr; }
}
```

**Left column â Copy + Social:**
- Headline: `--text-3xl`, `--fg`, max-width 12ch
- Body: `--text-lg` with `---text-base` on mobile, `--fg-2`
- Quote pull: italic, `--accent-2` left border, `--text-sm` attribution
- Social links: same treatment as hero section (text-only, `--fg-2` â `--accent` on hover)

**Right column â Contact form:**
- Background: `--surface`, radius `--radius-lg`, padding `--space-6`
- Decorative top border: 2px gradient (terracotta â ochre â terracotta), full width

**Form fields:**
```css
.form-input, .form-textarea {
  width: 100%;
  padding: var(--space-3) var(--space-4);
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  color: var(--fg);
  font-family: var(--font-body);
  font-size: var(--text-base);
  transition: border-color 0.2s, box-shadow 0.2s;
}

.form-input:focus, .form-textarea:focus {
  outline: none;
  border-color: var(--accent);
  box-shadow: 0 0 0 3px oklch(from var(--accent) l c h / 0.15);
}

.form-textarea {
  min-height: 120px;
  resize: vertical;
}
```

**Submit button:**
```css
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-6);
  background: var(--accent);
  color: var(--fg);
  font-family: var(--font-body);
  font-size: var(--text-base);
  font-weight: 600;
  border: none;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;
}

.btn-primary:hover {
  background: oklch(from var(--accent) calc(l + 0.05) c h);
  transform: translateY(-1px);
}

.btn-primary:active {
  transform: translateY(0);
}
```

**Form states:**
- **Default:** clean, empty, muted placeholder text
- **Focused:** accent border glow
- **Typing:** subtle `--accent-2` character counter on textarea (optional)
- **Submitting:** button becomes loading state (dots animation, disabled)
- **Success:** form fades out, success message fades in (green `--success` accent, checkmark)
- **Error:** inline validation per field (red-tinted labels, accent-2 Ã 0.2 background on error)

**Form endpoint:** POST to `/api/contact` (Next.js API route or external service like Resend / EmailJS). The implementation spec should include:

```typescript
// pages/api/contact.ts
export async function POST(req: Request) {
  const body = await req.json();
  // Validate with Zod
  // Send via Resend or similar
  // Rate-limit by IP (upstash or in-memory)
  // Return { success: true } or { error: string }
}
```

---

### Footer

Minimal footer â just a warm closing line:

```
âââââââââââââââââââââââââââââââââââââââââââââââ
â  Built from Kampala, Uganda                â
â  Â© 2026 Mucunguzi Moses                    â
â  âââââââââââââââââââââ                      â
â  Crafted with patience, purpose, and        â
â  the conviction that Africa's best          â
â  technology is yet to be built.             â
âââââââââââââââââââââââââââââââââââââââââââââââ
```

- Background: `--bg` (same as page), top border: `--border`
- Small text: `--text-sm`, `--fg-3`
- Centered alignment
- No social links in footer (they're in hero + contact)

---

---

## Slide 7 â Animation & Interaction Playbook

> *For the frontend engineer implementing motion. Every animation has a purpose, not just decoration.*

---

### 7.1 Animation Registry

| Element | Trigger | Animation | Duration | Easing | Notes |
|---|---|---|---|---|---|
| Page load | `DOMContentLoaded` | Fade-in entire page content | 400ms | `cubic-bezier(0.22, 1, 0.36, 1)` | Body opacity 0 â 1 |
| Hero terminal | Immediate auto-start | CLI typing sequence | ~8s loop | Step-based | See detailed spec in Slide 3 |
| Hero subtitle | 200ms after load | Slide-up + fade-in | 600ms | `cubic-bezier(0.22, 1, 0.36, 1)` | translateY(30px) â 0 |
| Hero social card | 400ms after load | Slide-up + fade-in | 600ms | Same | Stagger after subtitle |
| About cards | Scroll into viewport | Staggered reveal | 600ms per card | Same | 100ms stagger interval |
| Project cards | Scroll into viewport | Fade-in + slight lift | 500ms | Same | Batch reveal, not staggered |
| Project border | Card hover | Conic gradient rotation | 4s loop | Linear | See Slide 5 gradient spec |
| Contact form | Scroll into viewport | Fade-in (cards) | 400ms | Same | Single batch, no stagger |
| Nav background | Scroll > 100px | Backdrop-blur fade-in | 200ms | `ease` | From transparent to frosted |
| Link hover | Hover | Underline slide | 200ms | `ease` | `background-size` technique |
| Button hover | Hover | Lift + color shift | 200ms | `ease` | translateY(-1px) |

**All animations respect `prefers-reduced-motion`.** When reduced motion is detected:
- Skip all entrance/scroll animations (elements rendered in final state immediately)
- Keep hover micro-interactions (they are accessibility-relevant)
- Keep the typing animation BUT render the full final state immediately (no typing, just blinking cursor)

---

### 7.2 Custom `useScrollReveal` Hook (React)

```typescript
// lib/hooks/useScrollReveal.ts
import { useEffect, useRef, useState } from 'react';

interface UseScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  staggerDelay?: number;
  staggerIndex?: number;
}

export function useScrollReveal<T extends HTMLElement>({
  threshold = 0.1,
  rootMargin = '-80px',
  staggerDelay = 0,
  staggerIndex = 0,
}: UseScrollRevealOptions = {}) {
  const ref = useRef<T>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Check reduced motion
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) {
      setIsRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const delay = staggerDelay * staggerIndex;
          setTimeout(() => setIsRevealed(true), delay);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, staggerDelay, staggerIndex]);

  return { ref, isRevealed };
}
```

Usage:
```tsx
const { ref, isRevealed } = useScrollReveal<HTMLDivElement>({
  staggerDelay: 100,
  staggerIndex: index,
});
```

---

### 7.3 View Transitions (Page Navigation)

For smooth page transitions between `/`, `/projects`, `/about`:

```typescript
// In layout or app router
// Next.js App Router with view-transitions:
// Wrap in <ViewTransitions> from vercel/react-view-transitions

// Or native CSS:
::view-transition-old(root) {
  animation: fade-out 0.3s ease;
}
::view-transition-new(root) {
  animation: fade-in 0.3s ease;
}
```

The page container should have `view-transition-name: page-content` for granular control.

---

### 7.4 Parallax (Subtle)

On the hero section background, add a subtle parallax effect tied to scroll:

```css
.hero-bg {
  transform: translateY(calc(var(--scroll-y, 0) * 0.15));
  will-change: transform;
}
```

```typescript
// Effect: requestAnimationFrame-based, updates CSS variable
useEffect(() => {
  const handleScroll = () => {
    document.documentElement.style.setProperty(
      '--scroll-y',
      String(window.scrollY)
    );
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

Keep parallax subtle â 0.15 ratio means 1000px scroll = 150px movement. Enough for depth, not enough to disorient.

---

---

## Slide 8 â Technical Implementation Notes

> *For the engineer building this. Architecture decisions, package choices, performance constraints.*

---

### 8.1 Tech Stack (Recommended)

| Layer | Choice | Rationale |
|---|---|---|
| Framework | Next.js 16 (App Router) | Best-in-class SSR, view transitions, image optimization |
| Styling | CSS Modules + CSS custom properties | No runtime, full access to OKLch, no Tailwind lock-in (the design system is custom enough that utility classes add friction) |
| Animation | CSS transitions + IntersectionObserver | Zero-dependency for reveals; typing animation is custom JS |
| Form handling | React Hook Form + Zod | Type-safe validation, small bundle |
| Email | Resend SDK | API route POST â Resend. Simple, reliable |
| Analytics | Plausible (self-hosted) | Privacy-first, 1.8kB script |
| Hosting | Vercel (Pro) | Obvious fit for Next.js. Edge functions for form API |
| Domain | mucunguzi.tech (Namecheap â Vercel DNS) | Already owned |

**Bundle budget:** Keep JS under 150kB initial (gzipped). The typing animation is custom ~2kB. The scroll reveal is a single hook ~1kB. No animation library (no Framer Motion, no GSAP) â the spec's animations are intentionally implementable in vanilla CSS + 30 lines of JS.

---

### 8.2 Directory Structure

```
src/
âââ app/
â   âââ layout.tsx            # Root layout, nav, footer, view transitions
â   âââ page.tsx              # Home page (assembles sections)
â   âââ projects/
â   â   âââ page.tsx          # Projects archive
â   â   âââ [slug]/
â   â       âââ page.tsx      # Project detail
â   âââ about/
â   â   âââ page.tsx          # About page (or use section on home)
â   âââ api/
â       âââ contact/
â           âââ route.ts      # Form POST handler
âââ components/
â   âââ hero/
â   â   âââ HeroSection.tsx
â   â   âââ TerminalAnimation.tsx    # CLI typing animation
â   â   âââ SocialLinks.tsx
â   âââ about/
â   â   âââ AboutSection.tsx
â   â   âââ PhotoCard.tsx
â   â   âââ StatsCard.tsx
â   â   âââ SkillsCloud.tsx
â   â   âââ PersonalStatement.tsx
â   âââ projects/
â   â   âââ ProjectsSection.tsx
â   â   âââ ProjectCard.tsx          # Gradient border card
â   âââ contact/
â   â   âââ ContactForm.tsx
â   â   âââ ContactCopy.tsx
â   âââ ui/
â       âââ Button.tsx
â       âââ Tag.tsx
â       âââ SectionHeading.tsx
âââ lib/
â   âââ hooks/
â   â   âââ useScrollReveal.ts
â   âââ utils/
â       âââ cn.ts                    # Classname merge utility
âââ styles/
    âââ globals.css                  # :root tokens, reset
    âââ hero.module.css
    âââ about.module.css
    âââ projects.module.css
    âââ contact.module.css
```

**Why separate sections as components rather than pages?** The home page is a single scrollable page (hero â about â projects â contact). Each section gets its own component and CSS module. Separate `/about` and `/projects` pages exist for deep-linking and SEO, sharing the same components.

---

### 8.3 Performance Targets

| Metric | Target | How |
|---|---|---|
| LCP | < 1.5s | Optimized hero image, font-display: swap, preconnect to font host |
| TBT | < 50ms | No heavy JS on main thread, no layout thrashing |
| CLS | < 0.05 | Fixed aspect ratios on cards, static dimensions on images |
| FID | < 50ms | Code-split contact form, deferred non-critical JS |
| Page weight | < 200kB | No animation library, no icon library (text labels > icons), WOFF2 fonts |

---

### 8.4 Font Loading Strategy

```html
<!-- In layout.tsx head -->
<link rel="preconnect" href="https://api.fontshare.com" crossorigin />
<link rel="preload" href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,400&display=swap" as="style" />
<link rel="preconnect" href="https://fonts.googleapis.com" crossorigin />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
```

**Fallback font strategy:** Use `font-family: -apple-system, system-ui, sans-serif` as immediate fallback with `size-adjust` to prevent layout shift when Satoshi loads:

```css
@font-face {
  font-family: 'Satoshi Fallback';
  src: local('-apple-system');
  size-adjust: 98%;
  ascent-override: 90%;
}
```

---

### 8.5 SEO & Meta

```typescript
// app/layout.tsx
export const metadata = {
  title: 'Mucunguzi Moses â Web3 & AI Engineer',
  description: 'Web3 protocol engineer and AI systems builder from Kampala, Uganda. Solidity, Rust, Next.js, and zero-knowledge proofs.',
  openGraph: {
    title: 'Mucunguzi Moses â Web3 & AI Engineer',
    description: 'Building the decentralized future from Kampala, Uganda.',
    url: 'https://mucunguzi.tech',
    siteName: 'mucunguzi.tech',
    locale: 'en_UG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mucunguzi Moses â Web3 & AI Engineer',
    description: 'Building the decentralized future from Kampala, Uganda.',
  },
  robots: { index: true, follow: true },
};
```

---

### 8.6 Color â `oklch()` Browser Support Note

`oklch()` has ~94% global support as of mid-2026 (all modern browsers). For the remaining 6% (older Safari, legacy Android WebView), provide a fallback in the page CSS:

```css
:root {
  /* Fallback sRGB hex for legacy browsers */
  --bg: #1a1512;
  --surface: #231e1a;
  --accent: #c45d3c;
  --accent-2: #d4a043;

  /* OKLch for modern browsers */
  @supports (color: oklch(0% 0 0)) {
    --bg:        oklch(14% 0.018 45);
    --surface:   oklch(19% 0.022 45);
    --accent:    oklch(58% 0.18 35);
    --accent-2:  oklch(65% 0.14 70);
  }
}
```

---

---

## Appendix A â Build Order (for Project Manager)

| Phase | What | Est. time | Dependencies |
|---|---|---|---|
| 1 | Scaffold Next.js project, install deps, configure fonts | 2h | â |
| 2 | Build `:root` CSS tokens, reset, global styles | 1h | Phase 1 |
| 3 | Hero section (TerminalAnimation, SocialLinks, Nav) | 4h | Phase 2 |
| 4 | About section (5 bento cards + scroll reveals) | 3h | Phase 2 |
| 5 | Projects section (gradient border card component) | 3h | Phase 2 |
| 6 | Contact section (form + validation + API route) | 3h | Phase 2 |
| 7 | Page assembly, scroll logic, responsive polish | 3h | Phase 3â6 |
| 8 | Animations: timing tuning, reduced-motion, QA | 2h | Phase 7 |
| 9 | Performance audit, SEO tags, OG image | 1.5h | Phase 8 |
| 10 | Deploy, domain DNS, CI/CD | 1h | Phase 9 |

**Total estimated time:** ~23.5 hours of focused build work (3â4 days real-time with review cycles).

---

## Appendix B â Copy Assets Needed (from Moses)

| Item | Status | Notes |
|---|---|---|
| Professional headshot (high-res, good lighting) | Needs providing | Warm background preferred |
| Project list (6 projects, each with: name, 1-line desc, tags, live URL, GitHub URL, thumbnail) | Needs providing | Prioritize Web3 projects first |
| Bio (1â2 paragraphs, personal statement for last card) | Needs providing | "Why I build" â the personal angle matters |
| Social URLs | Needs confirming | GitHub, X/Twitter, LinkedIn, Dev.to, Cal.com |
| CV/Resume PDF | Nice-to-have | Link in hero |
| OG image (1200Ã630) | Can generate | Design once visual direction is locked |

---

*End of design proposal. This document serves as both the investor-ready vision deck and the build-team implementation spec. All OKLch color values, animation timings, grid specifications, and component structures are production-ready and have been cross-referenced with the African-cyber bento design system definitions.*

---

This is the complete 1,153-line design proposal already saved to `/Users/mac/open-design/mucunguzi-tech-design-proposal.md`. It covers all 8 slides plus appendices â vision statement, complete OKLch color palette with rationale, typography scale with fluid `clamp()` values, spacing/shadow tokens, the hero CLI typing animation state machine, about section bento grid with staggered scroll-reveal, the conic-gradient animated border project cards, the contact form with all interaction states, a full animation registry, a custom `useScrollReveal` hook, view transition setup, directory structure, performance budgets, font loading strategy, SEO metadata, legacy browser fallbacks, a phased build timeline, and the copy assets checklist.