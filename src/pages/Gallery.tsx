import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { X } from 'lucide-react';
import { IMAGES } from '../config/images';
import { useTheme } from '../contexts/ThemeContext';
import { usePageMeta } from '../hooks/usePageMeta';

const spans = [
  'col-span-1 md:col-span-2 md:row-span-1', // 01 - 1672×941 landscape
  'col-span-1 md:col-span-2 md:row-span-1', // 02 - 1536×1024 landscape
  'col-span-1 md:col-span-2 md:row-span-1', // 03 - 1448×1086 landscape
  'col-span-1 md:col-span-2 md:row-span-1', // 04 - 1672×941 landscape
  'col-span-2 md:col-span-4 md:row-span-1', // 05 - 1672×941 full-width banner
  'col-span-1 md:col-span-2 md:row-span-1', // 06 - 1672×941 landscape
  'col-span-1 md:col-span-1 md:row-span-2', // 07 - 1023×1537 portrait tall
  'col-span-1 md:col-span-2 md:row-span-2', // 08 - 1335×1178 large square feature
  'col-span-1 md:col-span-1 md:row-span-2', // 09 - 1023×1537 portrait tall
  'col-span-1 md:col-span-2 md:row-span-1', // 10 - 1178×1335 near-square
];

const TILE_IMAGES = IMAGES.tiles.map((src, idx) => ({ src, alt: `Pool Tile & Finish Design ${idx + 1}` }));

const WATER_FEATURE_IMAGES = [
  { src: IMAGES.waterFeatures.geyser, alt: 'Geyser Jet Fountain' },
  { src: IMAGES.waterFeatures.foam, alt: 'Foam Jet Fountain' },
  { src: IMAGES.waterFeatures.bell, alt: 'Bell Jet Fountain' },
  { src: IMAGES.waterFeatures.dandelion, alt: 'Dandelion Water Feature' },
  { src: IMAGES.waterFeatures.bubbler, alt: 'Bubbler Jet Fountain' },
  { src: IMAGES.waterFeatures.curtains, alt: 'Water Curtains' },
];

interface Lightbox {
  src: string;
  alt: string;
}

function GallerySection({
  title,
  subtitle,
  images,
  onSelect,
}: {
  title: string;
  subtitle: string;
  images: { src: string; alt: string }[];
  onSelect: (img: Lightbox) => void;
}) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-20">
      <div className="mb-6 md:mb-8">
        <h2 className="text-2xl md:text-3xl font-bold font-display text-[#0a5c86] dark:text-white mb-2">{title}</h2>
        <p className="text-gray-600 dark:text-slate-400 max-w-2xl">{subtitle}</p>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5 sm:gap-4"
      >
        {images.map((img, idx) => (
          <motion.button
            key={idx}
            type="button"
            onClick={() => onSelect(img)}
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            className="relative aspect-square overflow-hidden rounded-2xl group cursor-pointer bg-slate-200 dark:bg-slate-800 text-left"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[#101C2B]/10 group-hover:bg-transparent transition-colors duration-500" />
            <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none" />
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
}

export default function Gallery() {
  const { isDarkMode } = useTheme();
  const [lightbox, setLightbox] = useState<Lightbox | null>(null);

  usePageMeta(
    'Gallery — Our Pool Masterpieces',
    'Browse our gallery of luxury swimming pool projects, tile & finish designs, and signature water features built by Crystal Pools.',
  );

  return (
    <div className="bg-[#f8fcfd] dark:bg-[#070d14] min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 md:mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-[#0a5c86] dark:text-white mb-4 sm:mb-6">
            Our Masterpieces
          </h1>
          <p className="text-gray-600 dark:text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Explore a showcase of our luxurious swimming pools, from residential sanctuaries to resort scale designs.
          </p>
        </motion.div>
      </div>

      <div className="w-full px-2 md:px-4 lg:px-6 mb-16 md:mb-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } } }}
          className="grid grid-cols-2 md:grid-cols-4 grid-flow-row-dense gap-2.5 md:gap-4 lg:gap-6 auto-rows-[180px] sm:auto-rows-[220px] md:auto-rows-[300px]"
        >
          {IMAGES.gallery.light.map((lightUrl, idx) => {
            const darkUrl = IMAGES.gallery.dark[idx];
            return (
              <motion.button
                key={idx}
                type="button"
                onClick={() => setLightbox({ src: isDarkMode ? darkUrl : lightUrl, alt: `Gallery Project ${idx + 1}` })}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                className={`relative overflow-hidden rounded-[20px] group cursor-pointer bg-slate-200 dark:bg-slate-800 text-left ${spans[idx]}`}
              >
                {/* Light image */}
                <img
                  src={lightUrl}
                  alt={`Gallery Project ${idx + 1}`}
                  loading="lazy"
                  className={`absolute inset-0 w-full h-full object-cover transition-[opacity,transform] duration-700 md:group-hover:scale-105 ${isDarkMode ? 'opacity-0' : 'opacity-100'}`}
                />
                {/* Dark image */}
                <img
                  src={darkUrl}
                  alt={`Gallery Project ${idx + 1}`}
                  loading="lazy"
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 md:group-hover:scale-105 transition-transform duration-[1.5s] ${isDarkMode ? 'opacity-100' : 'opacity-0'}`}
                />

                <div className="absolute inset-0 bg-[#101C2B]/10 z-10 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute inset-0 border border-white/10 rounded-[20px] z-20 pointer-events-none" />
              </motion.button>
            );
          })}
        </motion.div>
      </div>

      <GallerySection
        title="Tiles & Finishes"
        subtitle="A curated palette of glass mosaics and premium finishes that define the character of every pool we build."
        images={TILE_IMAGES}
        onSelect={setLightbox}
      />

      <GallerySection
        title="Signature Water Features"
        subtitle="Fountains, jets, and cascades engineered to add movement, sound, and drama to any pool design."
        images={WATER_FEATURE_IMAGES}
        onSelect={setLightbox}
      />

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] bg-black/90 flex items-center justify-center p-4 sm:p-8"
            onClick={() => setLightbox(null)}
          >
            <button
              type="button"
              onClick={() => setLightbox(null)}
              aria-label="Close"
              className="absolute top-20 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
            >
              <X size={22} />
            </button>
            <motion.img
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25 }}
              src={lightbox.src}
              alt={lightbox.alt}
              onClick={(e) => e.stopPropagation()}
              className="max-w-full max-h-full rounded-lg object-contain shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
