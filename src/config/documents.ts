/**
 * CRYSTAL POOLS — DOCUMENT REGISTRY
 * ====================================
 * Single source of truth for every downloadable PDF on this website.
 *
 * HOW TO REPLACE A DOCUMENT (for the client):
 *   1. Open the  public/documents/  folder on your computer.
 *   2. Replace the file, keeping the exact same filename.
 *   3. The download link updates everywhere on the site automatically.
 *
 * FOLDER:  public/documents/
 */

export const DOCUMENTS = {
  /** Company overview brochure — linked from Footer, About, Products pages. */
  companyBrochure:      '/documents/company-brochure.pdf',

  /** Detailed company profile — linked from Footer and About page. */
  companyProfile:       '/documents/company-profile.pdf',

  /** Glass mosaic tile catalogue — linked from Footer and Pool Tiles page. */
  glassMosaicCatalogue: '/documents/glass-mosaic-catalogue.pdf',

  /** FRP / readymade pool brochure — linked from Footer and Readymade Pools page. */
  frpPoolBrochure:      '/documents/frp-pool-brochure.pdf',

  /** Individual product datasheets — wired to the detail panel on the Products page. */
  equipment: {
    fSeries:              '/documents/f-series.pdf',
    bSeries:              '/documents/b-series.pdf',
    mSeries:              '/documents/m-series.pdf',
    mxbSeries:            '/documents/mxb-series.pdf',
    mrbSeries:            '/documents/mrb-series.pdf',
    mtxSeries:            '/documents/mtx-series.pdf',
    bpSeries:             '/documents/bp-series.pdf',
    minderchlor:          '/documents/minderchlor-salt-chlorinator.pdf',
    chemicalTabletFeeder: '/documents/chemical-tablet-feeder.pdf',
    dosingstar:           '/documents/dosingstar-dosing-pump.pdf',
    hydrosmart:           '/documents/hydrosmart-pool.pdf',
  },
} as const;
