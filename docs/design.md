# design.md

## Role

You are an expert frontend engineer, UI/UX designer, visual design specialist, typography expert, and design systems architect with strong experience in editorial, brutalist, and modern web interfaces.

Your role is to help design and implement interfaces that are visually bold, structurally intentional, and technically maintainable.

Before proposing or writing any code, always build a clear mental model of the current system:

* Identify the tech stack being used (React, Next.js, Vue, Tailwind, shadcn/ui, plain CSS, etc.)
* Understand the existing design tokens such as colors, typography, spacing, radii, borders, shadows, and motion
* Review the current component structure and naming conventions
* Understand layout primitives, utility patterns, and file organization
* Identify project constraints such as legacy CSS, existing UI libraries, performance requirements, bundle size concerns, and responsiveness expectations

Before implementation, ask focused questions to understand the actual scope:

* Does the user want a full redesign or a visual enhancement?
* Should the brutalist feel be subtle, editorial, aggressive, or extreme?
* Is the goal to redesign a single page, several components, or the whole product?
* Should the new style layer on top of the current system or replace it entirely?
* Are there existing references, screenshots, or live sites that define the expected direction?

Once the context is clear, follow this process:

1. Propose a concise implementation plan
2. Centralize design tokens and avoid scattered styling
3. Reuse and compose components instead of adding one-off variants
4. Match the project’s existing architecture and naming patterns
5. Make the system scalable and maintainable
6. Explain design and implementation reasoning briefly and clearly
7. Ensure accessibility, responsiveness, and consistency

Always aim to:

* Preserve or improve accessibility
* Keep the layout responsive and usable across screen sizes
* Maintain a strong visual identity without becoming chaotic
* Use typography, spacing, borders, and contrast deliberately
* Leave the codebase cleaner than before
* Avoid generic UI and default SaaS patterns

---

## Design System

# Brutalist Editorial Typography Design System

This design system combines bold editorial typography with brutalist web design principles. It is meant for products, portfolios, landing pages, and interfaces that should feel strong, confident, and intentionally structured.

The result should feel:

* bold
* raw
* intelligent
* sharp
* high-contrast
* constructed rather than decorative

This is not soft UI. This is not friendly pastel SaaS. This is design with force.

---

## Design Philosophy

### Typography is the main visual language

Typography is not decoration. It is the structure, mood, hierarchy, and personality of the interface.

Headlines should not merely introduce sections. They should command attention and shape the entire composition.

### Brutalism adds tension and structure

Brutalist design introduces visible rules, hard edges, and strong divisions. It removes softness and polish in favor of honesty, friction, and raw clarity.

### Contrast creates drama

The system depends on strong contrast:

* huge vs small
* dense vs spacious
* dark vs light
* rigid vs expressive
* static blocks vs oversized text

### Every element must feel intentional

Nothing should feel accidental, default, or overly polished. Every border, line break, margin, and alignment choice must appear deliberate.

---

## Core Principles

### 1. Type as Hero

Headlines are the main visual event.

* Use oversized headlines generously
* Allow headings to dominate sections
* Headlines may span multiple lines with tight tracking
* Type can bleed close to edges when appropriate

### 2. Extreme Hierarchy

The gap between heading sizes and body sizes should be dramatic.

* H1 should feel monumental
* supporting text should feel restrained
* labels should feel tiny, precise, and controlled

### 3. Deliberate Negative Space

Whitespace is not emptiness. It frames typography and increases authority.

* use large margins and section spacing
* avoid clutter
* let important text breathe

### 4. Hard Structure

The page should feel built from rules and divisions.

* strong borders
* visible grids
* hard section breaks
* boxed content areas where useful

### 5. Restrained Color System

Let typography and structure do most of the work.

* use a mostly monochrome palette
* use one accent color
* apply accent sparingly and intentionally

### 6. Sharpness Over Softness

* no rounded corners
* no soft blur
* no glassmorphism
* no floating cards with soft shadows
* no playful motion

### 7. Controlled Brutality

The UI may feel intense, but it must remain usable.

* brutalist, not broken
* expressive, not chaotic
* raw, not careless

---

## Visual Tone

The interface should feel like a blend of:

* poster design translated to the web
* contemporary editorial layout
* industrial brutalism
* gallery exhibition signage
* design manifesto pages
* hacker zines with modern refinement

Keywords:

* confident
* stark
* assertive
* intelligent
* raw
* editorial
* uncompromising

---

## Color System

### Dark Mode Primary Palette

```txt
background:        #0A0A0A
foreground:        #FAFAFA
muted:             #1A1A1A
mutedForeground:   #737373
accent:            #FF3D00
accentForeground:  #0A0A0A
border:            #262626
input:             #1A1A1A
card:              #0F0F0F
cardForeground:    #FAFAFA
ring:              #FF3D00
```

### Color Usage Rules

* Background should remain near-black, not pure black
* Foreground should be slightly warm white
* Accent should be reserved for emphasis, underlines, focus, and highlighted elements
* Borders should be subtle but always present where structure matters
* Muted text should remain readable and accessible
* Inverted sections may be used occasionally for visual impact

### Inverted Section Palette

```txt
background:        #FAFAFA
foreground:        #0A0A0A
muted:             #F2F2F2
mutedForeground:   #525252
accent:            #FF3D00
border:            #D4D4D4
```

Use inverted sections sparingly to create punctuation and contrast between major content areas.

---

## Typography System

### Font Stacks

#### Primary Sans

```txt
"Inter Tight", "Inter", system-ui, sans-serif
```

Use for:

* headings
* subheadings
* navigation
* CTA text
* body text when a modern editorial feel is desired

#### Serif Display

```txt
"Playfair Display", Georgia, serif
```

Use sparingly for:

* pull quotes
* highlighted statements
* select editorial callouts

#### Mono

```txt
"JetBrains Mono", "Fira Code", monospace
```

Use for:

* labels
* metadata
* dates
* stats
* technical information
* eyebrow text

---

## Type Scale

```txt
xs:    0.75rem
sm:    0.875rem
base:  1rem
lg:    1.125rem
xl:    1.25rem
2xl:   1.5rem
3xl:   2rem
4xl:   2.5rem
5xl:   3.5rem
6xl:   4.5rem
7xl:   6rem
8xl:   8rem
9xl:   10rem
```

### Usage Guidance

* Body text should usually remain at 16px minimum
* Large section titles should sit in 3xl to 5xl range
* Hero text should live in 6xl to 8xl range
* Decorative numbers and oversized background text may use 8xl to 9xl

---

## Tracking

```txt
tighter:  -0.08em
tight:    -0.05em
normal:   -0.01em
wide:      0.05em
wider:     0.10em
widest:    0.20em
```

### Tracking Rules

* Large headlines should use tight or tighter tracking
* Body text should use slightly tightened or normal tracking
* Labels should use wider or widest tracking
* Brutalist labels often work best in uppercase monospace with wide tracking

---

## Line Height

```txt
none:     1
tight:    1.1
snug:     1.25
normal:   1.6
relaxed:  1.75
```

### Line Height Rules

* Single-line display headings: `1`
* Multi-line display headings: `1.1`
* Subheads and lead text: `1.25`
* Body text: `1.6`
* Long-form reading: `1.75`

---

## Borders, Radius, and Shape

### Radius

```txt
radius: 0px
```

There should be no rounded corners anywhere unless the user explicitly asks for them.

### Border System

```txt
borderThin:   1px
borderThick:  2px
borderHeavy:  3px
```

### Border Philosophy

Borders are not secondary decoration. They are structural tools.

Use borders for:

* section division
* navigation separation
* boxed layouts
* cards
* callouts
* tables
* emphasized content blocks

---

## Shadows and Depth

Traditional shadows should not be used.

```txt
shadow: none
textShadow: none
```

Depth should come from:

* typography layering
* border stacking
* offset duplicates
* overlapping composition
* background/foreground inversion
* z-index relationships
* accent bars
* large ghost text in background

---

## Texture and Surface

Use subtle texture to avoid a flat digital feel.

### Allowed Surface Effects

* very subtle noise or grain overlay
* low-opacity large background words
* offset border layers
* repeated grid lines
* tiny typographic details

### Avoid

* blurred glass
* heavy gradients
* neumorphism
* glossy effects
* soft inner shadows

---

## Layout Strategy

### Container

```txt
max-width: 1200px
padding-x:
- mobile: 24px
- tablet: 48px
- desktop: 64px
```

### Section Spacing

```txt
tight:     80px
standard:  112px
hero:      160px
```

### Layout Philosophy

* Prefer asymmetry over perfect symmetry
* Use 7/5 or 8/4 split columns where possible
* Allow some staggered alignment
* Make sections feel distinct and intentional
* Let headlines extend wider than body text
* Keep body copy readable with max-width constraints

### Section Structure

Use strong visual separation:

* border-top
* border-bottom
* alternating backgrounds
* oversized headings
* boxed subsections

Do not rely on cards everywhere.

---

## Grid System

### Preferred Grid Patterns

* 1-column on mobile
* 2-column on tablet where appropriate
* 3-column and asymmetrical multi-column layouts on desktop

Examples:

* Hero text + supporting CTA block
* 8/4 editorial split
* 7/5 content-image split
* 3-up features grid
* stacked stats transforming to 2 or 4 columns

### Grid Character

The grid should feel visible, not invisible.

Ways to show this:

* borders between columns
* hard content blocks
* controlled misalignment
* visible section edges

---

## Components

## Buttons

### Primary Button

Primary buttons should feel typographic first.

#### Style

* text-based or border-based
* no pill shapes
* no rounded corners
* uppercase or semi-uppercase
* wide tracking
* strong underline or bottom border

#### Behavior

* hover should feel sharp and immediate
* underline expands, shifts, or thickens
* color swap may happen instantly
* active state may shift down by 1px

### Secondary Button

* border-only
* foreground text
* transparent background
* on hover: invert foreground and background

### Ghost Button

* minimal padding
* muted foreground
* underline reveals on hover
* no decorative background

### Button Rules

* minimum touch target of 44px
* strong visible focus states
* keep transitions fast
* avoid bouncy or playful motion

---

## Inputs

### Input Style

* solid rectangular structure
* background using input token
* 1px border by default
* no radius
* no glow
* no soft shadow
* 16px minimum font size
* clear placeholder contrast

### Focus State

* border snaps to accent
* optional outline or ring in accent
* always visible and accessible

### Input Philosophy

Inputs should feel functional and precise, not soft or luxurious.

---

## Cards and Content Blocks

Cards should be used sparingly.

### Standard Content Block

* transparent or muted background
* 1px border
* hard padding
* no shadow
* no radius

### Highlighted Block

* thicker border
* accent label or accent top bar
* optional inverted palette

### Brutalist Variants

Use selectively:

* offset border layer
* double border
* overlapping section label
* huge faded number behind content

---

## Navigation

Navigation should feel structured and editorial.

### Style

* clear top border or bottom border
* strong spacing
* text-first links
* uppercase mono or tightly set sans labels
* underline or border change on hover

### Avoid

* floating nav bars
* soft translucent headers
* pill links
* excessive icon use

---

## Hero Sections

Hero sections should be unmistakable.

### Hero Characteristics

* oversized typography
* minimal distractions
* strong contrast
* one dominant idea
* supporting text clearly secondary
* hard CTA styling
* enough negative space to feel monumental

### Allowed Hero Techniques

* type overflow
* decorative giant background text
* oversized numbers
* stacked lines with tight leading
* editorial line breaks
* accent rule under key phrase

---

## Feature Sections

Feature sections should emphasize hierarchy and structure.

### Recommendations

* title and intro on one side
* features in grid or stacked boxed layout
* icons used sparingly
* labels in mono or uppercase
* clear separators between features

### Avoid

* generic soft icon cards
* overly colorful feature blocks
* excessive illustration dependence

---

## Project and Portfolio Sections

For project showcases or case studies:

* use strong section titles
* use tags/metadata in mono
* separate content with borders and spacing
* allow screenshots to feel framed by structure, not decoration
* keep text readable and specific

Optional treatments:

* large project number
* accent line before title
* bold metadata strip
* inverted alternating project sections

---

## Tables and Data

Tables should feel technical and direct.

* full-width lines
* sharp alignment
* mono labels where useful
* no zebra striping unless subtle and intentional
* no rounded wrappers

---

## Iconography

Use outline icons only.

### Recommended Style

* thin stroke
* simple forms
* currentColor inheritance
* used sparingly

### Suggested Sizes

* 16px inline
* 18px to 20px for nav and controls
* 24px to 28px for feature callouts

### Icon Rules

* text remains primary
* icons should support, not dominate
* prefer alignment clarity over decorative flourish

---

## Motion System

### Motion Philosophy

Motion should be:

* fast
* decisive
* sharp
* confident

It should never feel cute, bouncy, or ornamental.

### Timing

```txt
micro:    100ms to 150ms
standard: 150ms to 200ms
large:    400ms to 500ms
```

### Easing

Use:

* linear
* sharp ease-out
* crisp cubic-bezier

Avoid:

* bounce
* elastic
* exaggerated spring motion

### Recommended Interactions

* underline reveal
* instant color inversion
* border color shift
* slight translate on press
* fade-up entrances for scroll sections
* image-only scale on hover
* accordion height transitions kept tight

### Avoid

* floating hover lifts
* glow-based interaction
* playful wobble
* excessive parallax
* decorative animation loops

---

## Responsive Strategy

### Mobile First

Always design mobile first, then scale upward.

### Typography Responsiveness

* keep hierarchy dramatic at all breakpoints
* hero text should scale progressively
* body text should remain readable without shrinking too far
* large text may approach edges on mobile, but should not break usability

### Layout Responsiveness

* collapse complex grids to stacked layouts
* preserve visible structure through borders and spacing
* maintain strong section separation
* reduce oversized decorative text when it harms readability

### Mobile Rules

* prevent horizontal scroll unless explicitly intentional
* keep interactive elements large enough to tap
* stack input/button groups when necessary
* hide purely decorative oversized elements if they damage layout

---

## Accessibility

### Contrast

Maintain strong contrast across all surfaces.

Minimum goals:

* body text must pass AA
* muted text must remain readable
* accent text must be used carefully against dark backgrounds

### Focus

Every interactive element must have a visible focus state.

Recommended:

* 2px accent outline or ring
* 2px offset where appropriate

### Typography

* minimum 16px body text
* minimum 1.5 line height for body
* avoid ultra-thin weights
* avoid long unreadable lines

### Interaction

* touch targets minimum 44x44px
* underline not as sole signal unless paired with sufficient visibility
* color alone should not communicate all meaning

---

## Brutalist Enhancements

Use these deliberately, not everywhere.

### 1. Background Text Layering

* huge low-opacity text in background
* decorative words, numbers, dates, or labels
* opacity kept subtle

### 2. Offset Composition

* slightly shifted boxes
* overlapping sections
* text that breaks strict alignment intentionally

### 3. Hard Section Boxing

* boxed content zones
* visible vertical and horizontal dividers
* strong frame-based composition

### 4. Aggressive Underlines

* primary interactive signal
* thicker than standard
* used with intention

### 5. Inverted Bands

* full-width light sections inside dark layout
* sharp contrast reset
* used to punctuate long pages

### 6. Raw Editorial Layering

* metadata, eyebrow text, and labels as composition tools
* large statement text next to tiny mono captions
* type-on-type relationships for depth

---

## What to Avoid

Do not introduce:

* rounded corners
* soft card shadows
* glassmorphism
* blur-heavy effects
* pastel palettes
* generic SaaS dashboard styling
* excessive gradients
* default component-library look
* overanimation
* design choices that weaken typographic force

---

## Decision Rules for the Agent

When applying this design system:

1. Preserve existing architecture where possible
2. Centralize tokens before styling individual components
3. Prefer reusable primitives over page-specific hacks
4. Keep the brutalist language coherent across the system
5. Avoid mixing soft and brutal styles without a clear reason
6. Use typography and borders before adding decoration
7. Keep accessibility and readability intact
8. Make bold choices, but keep them intentional
9. When uncertain, choose the cleaner and sharper option
10. Never make the UI feel timid

---

## Implementation Priorities

When translating this system into code, prioritize this order:

1. tokens
2. typography scale
3. spacing
4. borders and section structure
5. button and input system
6. layout primitives
7. card/content patterns
8. motion rules
9. responsive adjustments
10. enhancement details such as grain, ghost text, and overlaps

---

## Final Design Direction

This system should feel like:

* a poster that became a website
* a portfolio with conviction
* an interface built by someone who understands structure
* something between editorial elegance and digital brutality

The design must feel bold enough to be memorable, but controlled enough to remain usable.

If it feels too safe, it is not done.
If it feels raw but intentional, it is working.
