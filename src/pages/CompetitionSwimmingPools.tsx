import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import AnimatedTextReveal from '../components/AnimatedTextReveal';
import LiquidWaterEffect from '../components/LiquidWaterEffect';
import PoolFooterGallery from '../components/PoolFooterGallery';
import { IMAGES } from '../config/images';
import { POOL_GALLERIES } from '../config/poolGalleries';
import { usePageMeta } from '../hooks/usePageMeta';

export default function CompetitionSwimmingPools() {
  usePageMeta(
    'Competition Swimming Pools',
    'Olympic-grade competition swimming pools with precise lane dimensions, wave-reducing gutters, and certified timing systems. Built to FINA standards.',
  );
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#060F1A] overflow-hidden">
      
      {/* 1. The Hero Section */}
      <section className="relative w-full min-h-[100dvh] md:min-h-[800px] flex flex-col justify-end pb-16 md:pb-24 px-4 sm:px-6 lg:px-8 pt-24">
        {/* Background Layer */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-[#060F1A]">
          <img 
            src={IMAGES.poolTypes.competition}
            alt="Competition Swimming Pool" 
            className="absolute inset-0 w-full h-full object-cover object-center md:object-[center_30%] opacity-90"
          />
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-end gap-6 md:gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl text-white dark:text-brand-gold font-sans font-bold leading-[1.2] mb-2 md:mb-4">
              The Pinnacle of Aquatic Performance,<br />
              <span className="font-serif italic text-[#f9c80e] font-normal text-5xl md:text-7xl lg:text-8xl">Engineered for Champions.</span>
            </h1>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="max-w-lg pb-0 md:pb-4"
          >
            <p className="text-lg md:text-xl text-white font-medium drop-shadow-xl leading-relaxed">
              As India’s premier builders of Olympic and FINA-standard competition pools, we merge over 25 years of engineering mastery with elite sports science to deliver high-performance aquatic arenas without compromising on quality or safety.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. The Story Section */}
      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-[#f9c80e]"></div>
            <span className="font-sans font-bold uppercase tracking-[0.2em] text-[#f9c80e] text-sm">
              THE STORY
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-slate-900 dark:text-white font-medium mb-16">
            Where Records Are Broken
          </h2>
        </div>

        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-12 lg:col-span-10 lg:col-start-2">
            <div className="relative mb-12">
              <span className="absolute -top-12 -left-8 text-8xl text-cyan-500/20 font-serif z-10 hidden md:block">"</span>
              <AnimatedTextReveal 
                text="A competition pool is more than a body of water. It is a highly calibrated arena where athletic potential meets hydrodynamic perfection."
                className="text-3xl md:text-4xl lg:text-5xl font-serif italic text-cyan-900 dark:text-white leading-relaxed"
                containerClassName="py-0"
              />
            </div>
            
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 font-sans font-light leading-relaxed mb-8">
              <span className="font-bold text-slate-900 dark:text-white">Designing the "Fast Pool":</span> Aquatic competitions held at colleges, universities, and mega sporting events require specialized environments. At Crystal Pools, we possess the precise capabilities to build "fast pools." By meticulously manipulating the physical layout, we significantly reduce swimming resistance. 
            </p>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 font-sans font-light leading-relaxed">
              This is achieved through proper pool depth, the total elimination of currents, increased lane widths, and the integration of advanced hydraulic, acoustic, and illumination designs.
            </p>
          </div>
        </div>
      </section>

      {/* 3. The Craftsmanship Section */}
      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-[#0a1526] w-full">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-[#f9c80e]"></div>
              <span className="font-sans font-bold uppercase tracking-[0.2em] text-[#f9c80e] text-sm">
                OUR CRAFTSMANSHIP
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-serif text-slate-900 dark:text-white font-medium mb-8">
              Exacting FINA Standards & Dimensions
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 font-sans font-light">
              We engineer our competition pools to strictly adhere to international FINA guidelines, ensuring your facility is fully equipped to host official tournaments year-round:
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            <ul className="space-y-12">
              <li className="relative pl-8 border-l-2 border-cyan-500/30">
                <span className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-cyan-500"></span>
                <span className="block text-2xl font-sans font-bold text-slate-900 dark:text-white mb-2">Olympic-Grade Dimensions:</span>
                <span className="block text-xl font-serif italic text-slate-600 dark:text-white">Constructing precise 50 m (160 ft) x 25 m (82 ft) configurations divided into eight optimal 2.5 m lanes, alongside standard 25 m short-course designs.</span>
              </li>
              <li className="relative pl-8 border-l-2 border-cyan-500/30">
                <span className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-[#f9c80e]"></span>
                <span className="block text-2xl font-sans font-bold text-slate-900 dark:text-white mb-2">Hydrodynamic Speed Systems:</span>
                <span className="block text-xl font-serif italic text-slate-600 dark:text-white">Installing energy-absorbing racing lane lines and advanced gutter systems to neutralize water turbulence and enhance swimmer speed.</span>
              </li>
            </ul>

            <ul className="space-y-12 lg:mt-0 mt-[-2rem]">
              <li className="relative pl-8 border-l-2 border-cyan-500/30">
                <span className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-cyan-500"></span>
                <span className="block text-2xl font-sans font-bold text-slate-900 dark:text-white mb-2">Environmental Precision:</span>
                <span className="block text-xl font-serif italic text-slate-600 dark:text-white">Maintaining rigorous water temperatures of 25-28°C (77-82°F) and engineering lighting levels greater than 1500 lux for ultimate visibility.</span>
              </li>
              <li className="relative pl-8 border-l-2 border-cyan-500/30">
                <span className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-[#f9c80e]"></span>
                <span className="block text-2xl font-sans font-bold text-slate-900 dark:text-white mb-2">Professional Officiating Readiness:</span>
                <span className="block text-xl font-serif italic text-slate-600 dark:text-white">Seamlessly integrating automated touchpads on pool walls, exact backstroke flag positioning (5 meters from each wall), and regulatory lane rope coloring.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. Footer Gallery Section */}
      <PoolFooterGallery 
        images={POOL_GALLERIES.competition} 
        poolName="Competition Pools" 
      />

    </div>
  );
}
