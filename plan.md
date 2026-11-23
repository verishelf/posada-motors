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

- Heritage expedition luxury — 0.06
- Modern alpine utility — 0.04
- Quiet performance atelier — 0.08

### Chosen direction: Heritage expedition luxury

- **Design Movement:** premium British expedition editorial; tactile, composed, and built around the long way home rather than the racetrack.
- **Core Principles:** rugged refinement, generous negative space, precise information hierarchy, and restrained contrast.
- **Color Philosophy:** peat green and ink ground the experience in terrain and engineering; mineral white keeps it premium; sand and terracotta add the warmth of worn leather and dust without turning decorative.
- **Layout Paradigm:** split-screen storytelling, offset content rails, full-bleed image moments, and section dividers instead of centered card grids.
- **Signature Elements:** route-line dividers, oversized section indices, and compact all-caps metadata labels.
- **Interaction Philosophy:** motion should feel like a vehicle settling onto a surface: slow easing, deliberate reveals, and subtle image scale on hover.
- **Animation:** 450–700ms reveal transitions with ease-out curves; no constant ambient glows; cards lift only a few pixels; mobile motion stays minimal.
- **Typography System:** Geist for compact utility copy and Playfair Display for the occasional large editorial phrase; uppercase labels use generous tracking.
- **Brand Essence:** a performance marque for drivers who take the scenic route and expect the machine to be as considered as the destination. Personality: grounded, exacting, quietly confident.
- **Brand Voice:** headlines are short and directional; CTAs sound like an invitation to depart. Example lines: “Go further. Stay with the feeling.” and “Build the route around you.”
- **Wordmark & Logo:** a compact square monogram with a diagonal trail cut through the P, paired with a two-line POSADA / MOTORS lockup.
- **Signature Brand Color:** peat green `#26372f`.
