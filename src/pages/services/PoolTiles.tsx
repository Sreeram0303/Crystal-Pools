import { Download } from 'lucide-react';
import { usePageMeta } from '../../hooks/usePageMeta';
import { motion } from 'motion/react';
import { IMAGES } from '../../config/images';
import { DOCUMENTS } from '../../config/documents';
import { LinkButton } from '../../components/Button';

const advantages = [
  {
    title: "Luminous Aesthetics",
    description: "A brilliant, radiant finish that catches the light and dramatically enhances water clarity."
  },
  {
    title: "Exceptional Durability",
    description: "A sturdy, long-lasting composition that is highly resistant to pool chemicals, wear, and fading."
  },
  {
    title: "Eco-Friendly Engineering",
    description: "Sustainable manufacturing processes for an environmentally conscious, premium choice."
  },
  {
    title: "Effortless Maintenance",
    description: "Smooth, non-porous surfaces designed for easy cleaning and optimal hygiene."
  },
  {
    title: "Comprehensive Project Support",
    description: "Complimentary design consultations, including expert recommendations for adhesives and custom grout color matching to ensure a flawless finish."
  }
];

export default function PoolTiles() {
  return (
    <div className="bg-[#fbfbfb] dark:bg-[#060F1A] w-full">
      {/* 1. The Mural Component (Immersive Visuals) */}
      <section className="min-h-screen w-full relative flex items-center bg-black">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.tilesHero}
            alt="Bespoke ceramic pool mural underwater"
            className="w-full h-full object-cover opacity-90"
          />
          {/* Left vignette for text legibility */}
          <div className="absolute inset-0 bg-linear-to-r from-[#0a1628]/80 via-[#0a1628]/30 to-transparent" />
        </div>

        <div className="relative z-10 px-8 sm:px-16 md:px-24 lg:px-32 max-w-3xl pt-20">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="font-serif italic text-[#f9c80e] text-lg md:text-xl mb-3"
          >
            The Magic of Murals
          </motion.p>

          {/* Gold rule */}
          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
            className="w-12 h-0.5 bg-[#f9c80e] mb-6"
          />

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-light text-white dark:text-brand-gold leading-none mb-8 drop-shadow-lg"
          >
            Aquatic<br />Artistry
          </motion.h1>

          {/* Body */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-base md:text-lg text-slate-200 font-light leading-relaxed max-w-sm"
          >
            Transforming pools into breathtaking works of art through bespoke ceramic murals and premium glass mosaic craftsmanship.
          </motion.p>
        </div>
      </section>

      {/* 2. The Mosaic Tiles Component (Split-Screen Elegance) */}
      <section className="w-full flex flex-col lg:flex-row bg-[#fbfbfb] dark:bg-[#060F1A]">
        {/* Left Column (Sticky Visuals) */}
        <div className="lg:w-1/2 relative sticky-col lg:top-0 h-[50vh] lg:h-screen overflow-hidden">
          <img
            src={IMAGES.tiles[1]}
            alt="Glass Mosaic Tiles Texture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 to-transparent lg:hidden pointer-events-none"></div>
          {/* Mobile Overlay Text */}
          <div className="absolute bottom-8 left-6 right-6 lg:hidden z-10">
            <h2 className="text-3xl font-light tracking-wide text-white mb-2 drop-shadow-md">Premium Glass Mosaic</h2>
            <p className="text-sm tracking-widest text-[#f9c80e] uppercase">by Element Mosaics</p>
          </div>
        </div>
        
        {/* Right Column (Scrolling Content) */}
        <div className="lg:w-1/2 py-16 md:py-24 lg:py-32 px-6 sm:px-12 lg:px-20 lg:min-h-screen bg-[#fbfbfb] dark:bg-[#060F1A]">
          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="max-w-xl mx-auto lg:mx-0"
          >
             <div className="hidden lg:block">
                 <h2 className="text-3xl md:text-4xl font-display font-bold text-[#0a5c86] dark:text-white mb-2 tracking-tight">
                   Premium Glass Mosaic Tiles
                 </h2>
                 <p className="text-sm tracking-widest text-[#f9c80e] uppercase mb-8 font-bold font-sans">by Element Mosaics</p>
             </div>
             
             <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6 font-sans">
               Elevate your swimming pool with the luminous elegance of designer glass mosaic tiles. Proudly manufactured by Element Mosaics—a signature brand of Crystal Pools—our collections are engineered for uncompromising quality and spectacular visual impact.
             </p>
             <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-16 font-sans">
               Crafted from superior raw materials under strict quality control, these tiles offer an exclusive aesthetic grace characterized by brilliant light reflection and vibrant, lasting color.
             </p>

             <div className="space-y-4 border-t border-slate-200 dark:border-slate-800/80 pt-8">
                <h3 className="text-xl font-bold tracking-tight text-slate-800 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 pb-2 mb-6 font-display">
                  The Element Mosaics Advantage
                </h3>
                {advantages.map((adv) => (
                  <div key={adv.title} className="group p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl hover:-translate-y-1 hover:shadow-lg transition-all duration-300 border border-transparent hover:border-slate-200 dark:hover:border-slate-700">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider mb-3 group-hover:text-[#0a5c86] dark:group-hover:text-[#38bdf8] transition-colors">{adv.title}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 font-sans leading-relaxed">{adv.description}</p>
                  </div>
                ))}
             </div>
             
              <div className="mt-16 flex flex-wrap gap-4">
                <LinkButton href="/contact-swimming-pool-contractor#inquiry" variant="primary" size="lg">
                  Explore Element Mosaics
                </LinkButton>
                <LinkButton
                  href={DOCUMENTS.glassMosaicCatalogue}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  size="lg"
                >
                  <Download size={18} />
                  Download Catalogue
                </LinkButton>
              </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Tile Collection Gallery */}
      <section className="py-24 md:py-32 px-6 lg:px-12 bg-slate-100 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white tracking-tight mb-4">
              Our Collection
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg font-light max-w-2xl mx-auto">
              A curated selection from our signature glass mosaic range — each tile a testament to colour, light, and craftsmanship.
            </p>
          </motion.div>

          {/* Bento grid — 4 columns, 3 rows */}
          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[230px] gap-3 md:gap-4">

            {/* Large feature — top-left, 2×2 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="col-span-2 row-span-2 overflow-hidden rounded-2xl"
            >
              <img src={IMAGES.tiles[2]} alt="Tile design 3" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </motion.div>

            {/* Top-right column — two stacked cells */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="col-span-1 row-span-1 overflow-hidden rounded-2xl"
            >
              <img src={IMAGES.tiles[3]} alt="Tile design 4" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="col-span-1 row-span-1 overflow-hidden rounded-2xl"
            >
              <img src={IMAGES.tiles[4]} alt="Tile design 5" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </motion.div>

            {/* Middle-right — wide, spans 2 cols */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="col-span-2 row-span-1 overflow-hidden rounded-2xl"
            >
              <img src={IMAGES.tiles[5]} alt="Tile design 6" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </motion.div>

            {/* Bottom row — narrow + wide */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="col-span-1 row-span-1 overflow-hidden rounded-2xl"
            >
              <img src={IMAGES.tiles[6]} alt="Tile design 7" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="col-span-1 md:col-span-3 row-span-1 overflow-hidden rounded-2xl"
            >
              <img src={IMAGES.tiles[7]} alt="Tile design 8" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
