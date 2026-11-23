# Posada Motors — Land Rover-inspired redesign

## Implementation

- Keep the existing Next.js 16 / React 19 / TypeScript stack, Framer Motion animations, Lucide icons, model data, and static model routes.
- Replace the black-and-white supercar presentation with a restrained expedition-luxury system: peat green, mineral, sand, and terracotta accents; editorial split layouts; thin rules; map/route motifs; and quieter motion.
- Rebuild the homepage sections in place so the existing anchor navigation and model links continue to work. Preserve the current external Unsplash imagery, using it as atmospheric travel/performance photography rather than adding a new asset pipeline.
- Update model detail page utility classes so detail routes share the new colors, buttons, cards, and typography.
- Add `public/manus-routes.json` for the home and dynamic model routes.
- Validate with lint and production build, then commit and push the finished work to `origin/main`.

## Project structure

- `src/app/page.tsx`: homepage composition and section order.
- `src/app/globals.css`: palette, layout primitives, buttons, cards, and responsive rules.
- `src/app/layout.tsx`: metadata and font variables.
- `src/components/Navbar.tsx`: fixed responsive navigation and mobile drawer.
- `src/components/Hero.tsx`: editorial hero with performance stats.
- `src/components/Models.tsx`: collection cards and range navigation.
- `src/components/Technology.tsx`: engineering principles in an asymmetric editorial list.
- `src/components/Experience.tsx`: commission/configuration call to action.
- `src/components/About.tsx`: brand story and delivery milestone.
- `src/components/Footer.tsx`: secondary navigation and brand close.
- `src/app/models/[slug]/page.tsx`: model detail presentation using shared visual language.
- `src/lib/models.ts`: existing model content and image URLs.
- `public/manus-routes.json`: complete page route manifest.

## Design

### Alternative styles

- Extreme Italian supercar theater — 0.08
- Carbon-fiber motorsport laboratory — 0.05
- Neon night-racing editorial — 0.07

### Chosen direction: Extreme Italian supercar theater

- **Design Movement:** theatrical Italian supercar editorial; sharp, sensual, and built around visual tension, speed, and the moment before launch.
- **Core Principles:** angular confidence, high-contrast drama, aggressive hierarchy, and precision as spectacle.
- **Color Philosophy:** near-black carbon and mineral white create the chassis; fluorescent yellow owns the brand; orange heat accents signal energy and motion.
- **Layout Paradigm:** diagonal cuts, hard-edged panels, asymmetric hero rails, full-bleed car imagery, and high-density performance data.
- **Signature Elements:** skewed corners, italic uppercase headlines, and yellow route bars that behave like racing telemetry.
- **Interaction Philosophy:** motion should feel like throttle response: fast, decisive, and controlled, with image scale and sharp color transitions on hover.
- **Animation:** 240–650ms transitions with aggressive ease-out curves; cards lift and skew subtly; reveal motion is quick and intentional.
- **Typography System:** Geist for all-caps performance headlines and condensed utility copy; Playfair remains loaded for compatibility but is no longer the primary display voice.
- **Brand Essence:** a performance marque for drivers who want the machine to be the event. Personality: extreme, exacting, unapologetic.
- **Brand Voice:** headlines are short and confrontational; CTAs sound like an invitation to cross a line. Example lines: “No ordinary. Only extreme.” and “Feel the machine.”
- **Wordmark & Logo:** a sharp yellow square P monogram with an orange diagonal slash, paired with a compact uppercase POSADA lockup.
- **Signature Brand Color:** fluorescent yellow `#f5c400`.
