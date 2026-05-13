/**
 * CRYSTAL POOLS — IMAGE REGISTRY
 * ================================
 * Single source of truth for every image path on this website.
 *
 * HOW TO REPLACE AN IMAGE (for the client):
 *   1. Open the  public/images/  folder on your computer.
 *   2. Navigate to the relevant sub-folder shown below.
 *   3. Replace the placeholder file with YOUR photo, keeping the exact same filename.
 *   4. The change takes effect everywhere on the site automatically — no code changes needed.
 *
 * RECOMMENDED FORMATS:
 *   Photos        → .jpg  (smaller file, faster load)
 *   Logos / icons → .png  (supports transparency)
 *   Hero video    → .mp4  (H.264, muted autoplay)
 *
 * FOLDER MAP:
 *   public/
 *   └── images/
 *       ├── hero/        Home page hero backgrounds + video
 *       ├── about/       About page photos
 *       ├── services/    Service images — one sub-folder per page (hub/, turnkey-projects/, water-features/, pool-tiles/, accessories/, readymade-pools/, specialty-installations/, renovation/)
 *       ├── pool-types/  Each pool-type page hero image
 *       ├── products/    Products section card images
 *       ├── gallery/     Gallery page — 12 project photos
 *       ├── locations/   Contact page office thumbnails (one per city)
 *       └── sections/    Shared backgrounds (testimonials, footer, liquid-effect)
 */

export const IMAGES = {

  // ── Hero (Home page) ─────────────────────────────────────────────────────
  // The light-mode image fades in immediately; the video layers on top once loaded.
  hero: {
    /** Static light-mode background — shows while the video buffers. 1920×1080 recommended. */
    lightMode: '/images/hero/light-mode.png',
    /** Dark-mode hero background. 1920×1080 recommended. */
    darkMode:  '/images/hero/dark-mode.png',
    /** Looping background video (muted, autoplay). H.264 MP4 recommended. */
    video:     '/images/hero/hero-video.mp4',
  },

  // ── About page ──────────────────────────────────────────────────────────
  about: {
    /** Full-screen hero — aerial / infinity pool at sunset. 1920×1080 recommended. */
    hero:         '/images/about/hero.jpg',
    /** Pool construction / site detail shot. 1200×800 recommended. */
    construction: '/images/about/pool-construction.jpg',
  },

  // ── Services ─────────────────────────────────────────────────────────────
  //
  // FOLDER MAP  (public/images/services/)
  //   hub/                     → bento-grid cards on the Services landing page
  //   turnkey-projects/        → /services/turnkey-projects page
  //   water-features/          → /services/waterfall-fountain page
  //   pool-tiles/              → /services/pool-tiles page
  //   accessories/             → /services/accessories page       (drop images here)
  //   readymade-pools/         → /services/readymade-pools page   (drop images here)
  //   specialty-installations/ → /services/specialty-installations page (drop images here)
  //   renovation/              → /services/renovation page
  //
  services: {
    // ── PoolAnimatedSection  (public/images/services/hub/) ───────────────────
    /** Flagship pool photo used in PoolAnimatedSection. 1600×1200 recommended. */
    swimmingPool:       '/images/services/hub/swimming-pool.jpg',

    // ── Turnkey Projects  (public/images/services/turnkey-projects/) ─────────
    /** Full-bleed banner. 2000×900 recommended. */
    turnkeyHero:        '/images/services/turnkey-projects/hero.jpg',

    // ── Accessories  (public/images/services/accessories/) ───────────────────
    /** Full-bleed accessories hero. Drop hero.png/jpg here to activate. */
    accessoriesHero:    '/images/services/accessories/hero.png',
    /** Cross-section diagram: standard skimmer edge detail. */
    skimmerEdge:        '/images/services/accessories/standard-skimmer-edge.png',
    /** Cross-section diagram: deck-level overflow edge detail. */
    overflowEdge:       '/images/services/accessories/deck-level-overflow-edge.png',

    // ── Renovation  (public/images/services/renovation/) ─────────────────────
    /** Full-bleed renovation hero. 2000×900 recommended. */
    renovationHero:     '/images/services/renovation/hero.jpg',
    /** Sticky grid panels — 1.png (large), 2.png, 3.png (stacked). */
    renovation:         [
      '/images/services/renovation/1.png',
      '/images/services/renovation/2.png',
      '/images/services/renovation/3.png',
    ],

    // ── Readymade Pools  (public/images/services/readymade-pools/) ────────────
    /** Full-bleed readymade pools hero. 2000×900 recommended. */
    readymadeHero:      '/images/services/readymade-pools/hero.png',
    /** Advantage section photos — add 1.png … 5.png to activate (2000×1200 recommended). */
    readymadeAdvantages: [
      '/images/services/readymade-pools/Advantage-01.png',
      '/images/services/readymade-pools/Advantage-02.png',
      '/images/services/readymade-pools/Advantage-03.png',
      '/images/services/readymade-pools/Advantage-04.png',
      '/images/services/readymade-pools/Advantage-05.png',
    ],
  },

  // ── Pool Types ───────────────────────────────────────────────────────────
  // Each key corresponds to one pool-type page hero image. 1600×1200 recommended.
  poolTypes: {
    private:      '/images/pool-types/private.jpg',
    commercial:   '/images/pool-types/commercial.jpg',
    recreational: '/images/pool-types/recreational.jpg',
    competition:  '/images/pool-types/competition.jpg',
    vanishingEdge:'/images/pool-types/vanishing-edge.jpg',
    overflow:     '/images/pool-types/overflow.jpg',
    skimmer:      '/images/pool-types/skimmer.jpg',
    readymade:    '/images/pool-types/readymade.jpg',
  },

  // ── Gallery ──────────────────────────────────────────────────────────────
  // Two sub-folders — light/ and dark/ — switch automatically with the theme.
  // Client drops photos as gallery-01.jpg … gallery-10.jpg into each folder.
  gallery: {
    light: [
      '/images/gallery/light/gallery-01.png',
      '/images/gallery/light/gallery-02.png',
      '/images/gallery/light/gallery-03.png',
      '/images/gallery/light/gallery-04.png',
      '/images/gallery/light/gallery-05.png',
      '/images/gallery/light/gallery-06.png',
      '/images/gallery/light/gallery-07.png',
      '/images/gallery/light/gallery-08.png',
      '/images/gallery/light/gallery-09.png',
      '/images/gallery/light/gallery-10.png',
    ],
    dark: [
      '/images/gallery/dark/gallery-01.png',
      '/images/gallery/dark/gallery-02.png',
      '/images/gallery/dark/gallery-03.png',
      '/images/gallery/dark/gallery-04.png',
      '/images/gallery/dark/gallery-05.png',
      '/images/gallery/dark/gallery-06.png',
      '/images/gallery/dark/gallery-07.png',
      '/images/gallery/dark/gallery-08.png',
      '/images/gallery/dark/gallery-09.png',
      '/images/gallery/dark/gallery-10.png',
    ],
  },

  // ── Contact — office location thumbnails ─────────────────────────────────
  // Shown as the card background when an office pin is selected on the map.
  // 800×500 recommended.
  locations: {
    pune:       '/images/locations/pune.jpg',
    nashik:     '/images/locations/nashik.jpg',
    kolhapur:   '/images/locations/kolhapur.jpg',
    sindhudurg: '/images/locations/sindhudurg.jpg',
    goa:        '/images/locations/goa.jpg',
    udaipur:    '/images/locations/udaipur.jpg',
  },

  // ── Equipment catalog (Products page) ────────────────────────────────────
  // public/images/products/equipment-catalogue/  — one sub-folder per category.
  equipment: {
    hero: '/images/products/equipment-catalogue/hero.png',

    // ── Commercial & Residential Filters  (equipment-catalogue/filters/)
    fSeries:              '/images/products/equipment-catalogue/filters/f-series.png',
    bSeries:              '/images/products/equipment-catalogue/filters/b-series.png',
    mSeries:              '/images/products/equipment-catalogue/filters/m-series.png',
    msSeries:             '/images/products/equipment-catalogue/filters/ms-series.png',

    // ── Pumps  (equipment-catalogue/pumps/)
    mxbSeries:            '/images/products/equipment-catalogue/pumps/mxb-series.png',
    mrbSeries:            '/images/products/equipment-catalogue/pumps/mrb-series.png',
    mtxSeries:            '/images/products/equipment-catalogue/pumps/mtx-series.png',

    // ── Disinfection System  (equipment-catalogue/disinfection/)
    minderchlor:          '/images/products/equipment-catalogue/disinfection/minderchlor-salt-chlorinator.png',
    chemicalTabletFeeder: '/images/products/equipment-catalogue/disinfection/chemical-tablet-feeder.png',
    dosingstar:           '/images/products/equipment-catalogue/disinfection/dosingstar-dosing-pump.png',
    bpSeries:             '/images/products/equipment-catalogue/disinfection/bp-series.png',
    hydrosmart:           '/images/products/equipment-catalogue/disinfection/hydrosmart-pool.png',
    poolVacuum:           '/images/products/equipment-catalogue/disinfection/pool-vacuum.png',
    heavyDutyVacuumHead:  '/images/products/equipment-catalogue/disinfection/heavy-duty-ss-vacuum-head.png',
    aluminumVacuumHead:   '/images/products/equipment-catalogue/disinfection/aluminum-head-14.png',
    vacuumHeadSideBrush:  '/images/products/equipment-catalogue/disinfection/vacuum-head-side-brush.png',
    ssAlgaeBrushes:       '/images/products/equipment-catalogue/disinfection/ss-algae-brushes.png',
    polesWithGripLock:    '/images/products/equipment-catalogue/disinfection/poles-with-grip-lock.png',
    poolHose:             '/images/products/equipment-catalogue/disinfection/pool-hose.png',
    poolPlastic:          '/images/products/equipment-catalogue/disinfection/pool-plastic.png',
    poolGeneral:          '/images/products/equipment-catalogue/disinfection/pool-general.png',
  },

  // ── Pool Tiles page  (public/images/services/pool-tiles/) ──────────────────────────────
  tilesHero: '/images/services/pool-tiles/hero.png',
  tiles: [
    '/images/services/pool-tiles/1.png',
    '/images/services/pool-tiles/2.png',
    '/images/services/pool-tiles/3.png',
    '/images/services/pool-tiles/4.png',
    '/images/services/pool-tiles/5.png',
    '/images/services/pool-tiles/6.png',
    '/images/services/pool-tiles/7.png',
    '/images/services/pool-tiles/8.png',
  ],

  // ── Water Features page ───────────────────────────────────────────────────
  // public/images/services/water-features/ — one image per fountain jet type.
  waterFeatures: {
    hero:     '/images/services/water-features/hero.png',
    geyser:   '/images/services/water-features/geyser-jet-fountain.png',
    foam:     '/images/services/water-features/foam-jet-fountain.png',
    bell:     '/images/services/water-features/bell-jet-fountain.png',
    dandelion:'/images/services/water-features/dandelion.png',
    bubbler:  '/images/services/water-features/bubbler-jet-fountain.png',
    curtains: '/images/services/water-features/water-curtains.png',
  },

  // ── Specialty Installations & Wellness page ──────────────────────────────
  // public/images/products/specialty-installations/  — one sub-folder per category.
  specialty: {
    hero: '/images/products/specialty-installations/hero.png',
    adhesiveGrout: [
      '/images/products/specialty-installations/adhesive-grout/1.png',
      '/images/products/specialty-installations/adhesive-grout/2.png',
      '/images/products/specialty-installations/adhesive-grout/3.png',
      '/images/products/specialty-installations/adhesive-grout/4.png',
    ],
    sunbath: [
      '/images/products/specialty-installations/sunbath/1.png',
      '/images/products/specialty-installations/sunbath/2.png',
      '/images/products/specialty-installations/sunbath/3.png',
      '/images/products/specialty-installations/sunbath/4.png',
      '/images/products/specialty-installations/sunbath/5.png',
    ],
    jacuzzi: [
      '/images/products/specialty-installations/jacuzzi/1.png',
      '/images/products/specialty-installations/jacuzzi/2.png',
      '/images/products/specialty-installations/jacuzzi/3.png',
      '/images/products/specialty-installations/jacuzzi/4.png',
      '/images/products/specialty-installations/jacuzzi/5.png',
    ],
  },

  // ── Shared section backgrounds ────────────────────────────────────────────
  sections: {
    /** Full-screen pool photo behind the Testimonials scroll section. 1600×1200 recommended. */
    testimonialsBg: '/images/sections/testimonials-bg.jpg',
    /** Footer background photo (top of footer). 1920×600 recommended. */
    footer:         '/images/sections/footer.jpg',
    /** Subtle pool texture overlaid on the animated water effect. 1600×1200 recommended. */
    liquidEffect:   '/images/sections/liquid-effect.jpg',
  },

} as const;
