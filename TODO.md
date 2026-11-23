# Posada Motors redesign

- [ ] Redesign the homepage in a Land Rover-inspired heritage expedition luxury direction while retaining the Posada Motors identity and existing model content.
  - The homepage must use peat green, mineral, sand, and terracotta accents instead of the current pure black/white-only treatment.
  - The homepage must include responsive navigation, a full-bleed editorial hero, performance stats, the three-model collection, engineering/technology content, a configuration CTA, and the brand story/footer.
  - Existing `#models`, `#technology`, `#experience`, and `#about` anchors and model detail links must continue to work.
- [ ] Bring `/models/:slug` detail pages into the same visual language without breaking static generation or model navigation.
- [ ] Keep the site responsive across desktop and mobile layouts, including the mobile menu.
- [ ] Serve `public/manus-routes.json` with the home and dynamic model route declarations.
- [ ] Add a responsive `/suppliers` supplier dashboard prototype with supplier KPIs, onboarding progress, program allocation, compliance pulse, searchable/filterable supplier directory, recent activity, and launch readiness.
  - This first version is front-end only with realistic mock data; authentication, persistence, and backend workflows remain future work.
- [ ] Pass lint and production build, then commit and push the redesign to `origin/main`.
