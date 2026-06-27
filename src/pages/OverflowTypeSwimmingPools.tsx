import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import AnimatedTextReveal from '../components/AnimatedTextReveal';
import LiquidWaterEffect from '../components/LiquidWaterEffect';
import { IMAGES } from '../config/images';
import PoolFooterGallery from '../components/PoolFooterGallery';
import { POOL_GALLERIES } from '../config/poolGalleries';
import { usePageMeta } from '../hooks/usePageMeta';

export default function OverflowTypeSwimmingPools() {
  usePageMeta(
    'Overflow Type Swimming Pools',
    'Perimeter-overflow pools where water spills over all four walls, creating a flawless mirror surface. The pinnacle of aquatic architecture.',
  );
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#060F1A] overflow-hidden">
      
      {/* 1. The Hero Section */}
      <section className="relative w-full min-h-[100dvh] md:min-h-[800px] flex flex-col justify-end pb-16 md:pb-24 px-4 sm:px-6 lg:px-8 pt-24">
        {/* Background Layer */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-[#060F1A]">
          <img 
            src={IMAGES.poolTypes.overflow} 
            alt="Overflow Type Swimming Pool" 
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
              The Mirror Lake Effect,<br />
              <span className="font-serif italic text-[#f9c80e] font-normal text-5xl md:text-7xl lg:text-8xl">Crafted in Tranquility.</span>
            </h1>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="max-w-lg pb-0 md:pb-4"
          >
            <p className="text-lg md:text-xl text-white font-medium drop-shadow-xl leading-relaxed">
              As India�s trusted experts in advanced aquatic architecture, we bring over 25 years of pan-India experience to design superior perimeter-overflow pools that transform your space into a soothing, reflective sanctuary.
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
            A Flawless Reflection of Elegance
          </h2>
        </div>

        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-12 lg:col-span-10 lg:col-start-2">
            <div className="relative mb-12">
              <span className="absolute -top-12 -left-8 text-8xl text-cyan-500/20 font-serif z-10 hidden md:block">"</span>
              <AnimatedTextReveal 
                text="Because surface water doesn't have a chance to bounce off the walls, a perimeter-overflow pool possesses the calmest, most reflective surface. A true mirror on the ground."
                className="text-3xl md:text-4xl lg:text-5xl font-serif italic text-cyan-900 dark:text-white leading-relaxed"
                containerClassName="py-0"
              />
            </div>
            
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 font-sans font-light leading-relaxed mb-8">
              <span className="font-bold text-slate-900 dark:text-white">The Visual Illusion:</span> A perimeter-overflow pool is a highly specialized variant of the vanishing edge design where water gracefully spills over all four walls. This continuous flow gives the water a breathtaking, glazed appearance. 
            </p>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 font-sans font-light leading-relaxed">
              Popularly used as expansive reflecting pools or ponds, their incredibly sleek finish makes them a centerpiece in luxury contemporary designs where reflecting the sky and surrounding landscape is paramount.
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
              Engineering the Perfect Stillness
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 font-sans font-light">
              To create this flawless 'lake effect,' our engineering team meticulously controls water flow and elevation through advanced structural design:
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            <ul className="space-y-12">
              <li className="relative pl-8 border-l-2 border-cyan-500/30">
                <span className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-cyan-500"></span>
                <span className="block text-2xl font-sans font-bold text-slate-900 dark:text-white mb-2">360-Degree Spillover:</span>
                <span className="block text-xl font-serif italic text-slate-600 dark:text-white">Setting the tops of all four walls precisely below the water level to ensure a uniform, continuous flow into a hidden containment vessel.</span>
              </li>
              <li className="relative pl-8 border-l-2 border-cyan-500/30">
                <span className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-[#f9c80e]"></span>
                <span className="block text-2xl font-sans font-bold text-slate-900 dark:text-white mb-2">Stealth Drainage Systems:</span>
                <span className="block text-xl font-serif italic text-slate-600 dark:text-white">Integrating elegant, minimalist slots or grates flush with the decking for ground-level designs, preserving the pristine architectural appearance without visual disruption.</span>
              </li>
            </ul>

            <ul className="space-y-12 lg:mt-0 mt-[-2rem]">
              <li className="relative pl-8 border-l-2 border-cyan-500/30">
                <span className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-cyan-500"></span>
                <span className="block text-2xl font-sans font-bold text-slate-900 dark:text-white mb-2">Elevated Catch Basins:</span>
                <span className="block text-xl font-serif italic text-slate-600 dark:text-white">Constructing raised structural walls where water cascades gracefully into an open basin or customized gutter system.</span>
              </li>
              <li className="relative pl-8 border-l-2 border-cyan-500/30">
                <span className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-[#f9c80e]"></span>
                <span className="block text-2xl font-sans font-bold text-slate-900 dark:text-white mb-2">Advanced Recirculation:</span>
                <span className="block text-xl font-serif italic text-slate-600 dark:text-white">Installing remote holding and surge tanks engineered to perfectly manage and recirculate the water capacity without disrupting the pool's tranquility.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. Footer Gallery Section */}
      <PoolFooterGallery 
        images={POOL_GALLERIES.overflow} 
        poolName="Overflow Design Pools" 
      />

    </div>
  );
}

