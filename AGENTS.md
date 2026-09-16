# Mazhwetu General Works — Agent Rules

This project follows the Premium Website Engineering Manual supplied with the project.

## Non-negotiable build order

Strategy -> sitemap/IA -> content hierarchy -> visual system -> component system -> page composition -> conversion -> interaction -> responsive -> accessibility -> ownership -> launch foundations -> QA.

## One primary job

Primary website job: turn relevant visitors into qualified project enquiries while making Mazhwetu's work and capabilities immediately understandable.

Primary CTA: Start a project -> `#contact`.
Secondary route: View the work -> `/projects`.

## Content integrity

Do not invent clients, testimonials, reviews, awards, certifications, project outcomes, project counts, years of experience beyond supplied facts, guarantees or numerical performance claims.

Project imagery in `content/site.ts` is temporary reference photography and must be replaced with real Mazhwetu project photography before launch.

## Component discipline

Sections live in `components/sections/` and animation behaviors live in `components/motion/`.

Prefer reusable structural components with data-driven content. Do not create repeated card-grid wallpaper simply because the component is convenient.

## Motion

Use GSAP/ScrollTrigger for purposeful reveal and media motion.
Home uses Lenis. Projects uses Locomotive Scroll in isolation. Never run two scroll engines on the same page.

No scroll hijacking, long blocking transitions, essential hover-only interactions, or decorative animation with no user/system purpose.

Always respect `prefers-reduced-motion`.

## Visual system

Use the provided palette:
- Deep Forest `#07100A`
- Near Black `#111711`
- Warm Off-White `#F3F1EA`
- Soft White `#F5F3EC`
- MGW Green `#8FC56C`
- Green Highlight `#A4D383`
- Muted Green `#4B8F4A`

Accent green is for action/emphasis, not blanket decoration.

## QA gate

Before release, test representative desktop/tablet/mobile widths, keyboard focus, semantic headings, contrast, touch targets, links, CTA destinations, image loading, overflow, reduced motion, metadata, indexability and contact routes.
