import type { BlogPost } from '../types';

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: 'ultimate-guide-swimming-pool-maintenance',
    title: 'The Ultimate Guide to Swimming Pool Maintenance',
    excerpt:
      'Discover the secrets to keeping your pool pristine year-round, from water chemistry balancing to advanced filtration techniques.',
    category: 'Maintenance',
    author: 'Technical Team',
    date: 'Jan 15, 2025',
    image: '/images/services/renovation/1.png',
    featured: true,
  },
  {
    id: 2,
    slug: 'infinity-pools-vs-overflow-difference',
    title: "Infinity Pools vs. Overflow: What's the Difference?",
    excerpt:
      'An architectural deep-dive into the structural and aesthetic differences between vanishing edge and overflow pool designs.',
    category: 'Architecture',
    author: 'Design Dept',
    date: 'Feb 22, 2025',
    image: '/images/pool-types/vanishing-edge.png',
    featured: false,
  },
  {
    id: 3,
    slug: 'health-benefits-domestic-saunas',
    title: 'The Health Benefits of Domestic Saunas',
    excerpt:
      'How integrating a dry heat sauna into your wellness routine can improve cardiovascular health and skin vitality.',
    category: 'Wellness',
    author: 'Wellness Expert',
    date: 'Mar 05, 2025',
    image: '/images/products/specialty-installations/sunbath/1.png',
    featured: false,
  },
  {
    id: 4,
    slug: 'automated-pool-cleaning-technology',
    title: 'Automated Pool Cleaning Technology',
    excerpt:
      'Exploring the latest in robotic vacuums and automated dosing systems that minimise manual maintenance.',
    category: 'Technology',
    author: 'Technical Team',
    date: 'Apr 12, 2025',
    image: '/images/products/equipment-catalogue/hero.png',
    featured: false,
  },
  {
    id: 5,
    slug: 'selecting-perfect-pool-tiles',
    title: 'Selecting the Perfect Pool Tiles',
    excerpt: 'A guide to glass mosaics, ceramic, and natural stone finishes for your pool interior.',
    category: 'Architecture',
    author: 'Design Dept',
    date: 'May 18, 2025',
    image: '/images/services/pool-tiles/hero.png',
    featured: false,
  },
];
