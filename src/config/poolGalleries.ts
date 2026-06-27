import { IMAGES } from './images';
import { PoolGalleryImage } from '../components/PoolFooterGallery';

// For demonstration, we mix and match the existing generic light gallery images.
// In a real scenario, you can map specific photos to specific pool types.
const baseGallery = IMAGES.gallery.light;

export const POOL_GALLERIES: Record<string, PoolGalleryImage[]> = {
  commercial: [
    { src: baseGallery[0] || IMAGES.poolTypes.commercial, alt: 'Commercial Pool Main', title: 'Resort Pool Estate' },
    { src: baseGallery[1] || IMAGES.poolTypes.recreational, alt: 'Commercial View 2', title: 'Luxury Hotel Pool' },
    { src: baseGallery[2] || IMAGES.poolTypes.competition, alt: 'Commercial View 3', title: 'Olympic Size' },
    { src: baseGallery[3] || IMAGES.poolTypes.private, alt: 'Commercial View 4', title: 'Wellness Spa' },
  ],
  competition: [
    { src: baseGallery[4] || IMAGES.poolTypes.competition, alt: 'Competition Pool', title: 'Olympic Standard' },
    { src: baseGallery[5] || IMAGES.poolTypes.commercial, alt: 'Competition Lanes', title: 'Training Facility' },
    { src: baseGallery[6] || IMAGES.poolTypes.recreational, alt: 'Starting Blocks', title: 'Racing Lanes' },
    { src: baseGallery[7] || IMAGES.poolTypes.private, alt: 'Aquatic Center', title: 'Sports Club' },
  ],
  overflow: [
    { src: baseGallery[8] || IMAGES.poolTypes.overflow, alt: 'Overflow Design', title: 'Sleek Deck Level' },
    { src: baseGallery[9] || IMAGES.poolTypes.commercial, alt: 'Overflow Pool', title: 'Infinity Illusion' },
    { src: baseGallery[0] || IMAGES.poolTypes.private, alt: 'Overflow Edge', title: 'Seamless Integration' },
    { src: baseGallery[1] || IMAGES.poolTypes.vanishingEdge, alt: 'Overflow Spaa', title: 'Modern Estate' },
  ],
  private: [
    { src: baseGallery[2] || IMAGES.poolTypes.private, alt: 'Private Pool', title: 'Backyard Oasis' },
    { src: baseGallery[3] || IMAGES.poolTypes.recreational, alt: 'Private Infinity', title: 'Custom Villa' },
    { src: baseGallery[4] || IMAGES.poolTypes.skimmer, alt: 'Private Skimmer', title: 'Family Leisure' },
    { src: baseGallery[5] || IMAGES.poolTypes.overflow, alt: 'Residential Pool', title: 'Luxury Living' },
  ],
  readymade: [
    { src: baseGallery[6] || IMAGES.poolTypes.readymade, alt: 'Readymade Pool', title: 'FRP Installation' },
    { src: baseGallery[7] || IMAGES.poolTypes.private, alt: 'Fiberglass Pool', title: 'Fast Setup' },
    { src: baseGallery[8] || IMAGES.poolTypes.recreational, alt: 'Pre-fabricated', title: 'Rooftop Model' },
    { src: baseGallery[9] || IMAGES.poolTypes.skimmer, alt: 'Installed Pool', title: 'Compact Elegance' },
  ],
  recreational: [
    { src: baseGallery[0] || IMAGES.poolTypes.recreational, alt: 'Recreational', title: 'Family Fun Park' },
    { src: baseGallery[1] || IMAGES.poolTypes.commercial, alt: 'Water Park', title: 'Clubhouse Amenities' },
    { src: baseGallery[2] || IMAGES.poolTypes.private, alt: 'Freeform Pool', title: 'Leisure Design' },
    { src: baseGallery[3] || IMAGES.poolTypes.readymade, alt: 'Splash Pad', title: 'Interactive Features' },
  ],
  skimmer: [
    { src: baseGallery[4] || IMAGES.poolTypes.skimmer, alt: 'Skimmer Pool', title: 'Standard Skimmer' },
    { src: baseGallery[5] || IMAGES.poolTypes.private, alt: 'Skimmer Design', title: 'Affordable Luxury' },
    { src: baseGallery[6] || IMAGES.poolTypes.readymade, alt: 'Backyard Skimmer', title: 'Classic Layout' },
    { src: baseGallery[7] || IMAGES.poolTypes.commercial, alt: 'Skimmer System', title: 'Rooftop Skimmer' },
  ],
  vanishingEdge: [
    { src: baseGallery[8] || IMAGES.poolTypes.vanishingEdge, alt: 'Vanishing Edge', title: 'Infinity Horizon' },
    { src: baseGallery[9] || IMAGES.poolTypes.private, alt: 'Infinity Pool', title: 'Stunning Views' },
    { src: baseGallery[0] || IMAGES.poolTypes.commercial, alt: 'Vanishing Pool', title: 'Architectural Marvel' },
    { src: baseGallery[1] || IMAGES.poolTypes.overflow, alt: 'Edge Design', title: 'Resort Elegance' },
  ],
};
