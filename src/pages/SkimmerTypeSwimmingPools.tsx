import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import AnimatedTextReveal from '../components/AnimatedTextReveal';
import LiquidWaterEffect from '../components/LiquidWaterEffect';
import { IMAGES } from '../config/images';
import { usePageMeta } from '../hooks/usePageMeta';

export default function SkimmerTypeSwimmingPools() {
  usePageMeta(
    'Skimmer Type Swimming Pools',
    'Efficient skimmer swimming pools that draw surface water for filtration. Cost-effective, low-maintenance, and ideal for residential builds.',
  );
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#060F1A] overflow-hidden">
      
      {/* 1. The Hero Section */}
      <section className="relative w-full min-h-[100dvh] md:min-h-[800px] flex flex-col justify-end pb-16 md:pb-24 px-4 sm:px-6 lg:px-8 pt-24">
        {/* Background Layer */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-[#060F1A]">
          <img 
            src={IMAGES.poolTypes.skimmer}
            alt="Skimmer Type Swimming Pool" 
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
              Skimmer Type Pools,<br />
              <span className="font-serif italic text-[#f9c80e] font-normal text-5xl md:text-7xl lg:text-8xl">Crafted for Clarity.</span>
            </h1>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="max-w-lg pb-0 md:pb-4"
          >
            <p className="text-lg md:text-xl text-white font-medium drop-shadow-xl leading-relaxed">
              Swimming Pool Construction Services that Stand Out from the Clutter. Everyone likes a clean swimming pool. As a leading provider in India, we construct pools that effectively manage the issue of external elements.
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
            A Pristine Surface
          </h2>
        </div>

        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-12 lg:col-span-10 lg:col-start-2">
            <div className="relative mb-12">
              <span className="absolute -top-12 -left-8 text-8xl text-cyan-500/20 font-serif z-10 hidden md:block">"</span>
              <AnimatedTextReveal 
                text="A skimmer swimming pool is designed to pull water into the system from the pool’s surface with a skimming action, pulling in floating objects like leaves and dirt before they sink."
                className="text-3xl md:text-4xl lg:text-5xl font-serif italic text-cyan-900 dark:text-white leading-relaxed"
                containerClassName="py-0"
              />
            </div>
            
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 font-sans font-light leading-relaxed mb-8">
              <span className="font-bold text-slate-900 dark:text-white">Exceptional Cleanliness:</span> Dirt, debris and many other substances can make the pool look dirty and affect water chemistry, thus rendering it unsuitable for users. Skimmers are also used to vacuum the pool with a manual vacuum or suction-side automatic pool cleaner.
            </p>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 font-sans font-light leading-relaxed">
              Standard in-ground pool skimmers are built into the deck, accessible through a cover on the deck to remove the skimmer basket and empty debris that has been skimmed from the pool.
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
              Engineered Filtration Dynamics
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 font-sans font-light">
              As part of our best design practice, we recommend customized skimmer configurations for optimal surface clearing:
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            <ul className="space-y-12">
              <li className="relative pl-8 border-l-2 border-cyan-500/30">
                <span className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-cyan-500"></span>
                <span className="block text-2xl font-sans font-bold text-slate-900 dark:text-white mb-2">Optimal Placement:</span>
                <span className="block text-xl font-serif italic text-slate-600 dark:text-white">We recommend at least two skimmers for pools over 700 square feet to ensure comprehensive surface coverage.</span>
              </li>
              <li className="relative pl-8 border-l-2 border-cyan-500/30">
                <span className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-[#f9c80e]"></span>
                <span className="block text-2xl font-sans font-bold text-slate-900 dark:text-white mb-2">Intelligent Weir Systems:</span>
                <span className="block text-xl font-serif italic text-slate-600 dark:text-white">Water pours over the weir allowing debris to enter; when the pump stops, the weir floats into a closed position to trap debris.</span>
              </li>
            </ul>

            <ul className="space-y-12 lg:mt-0 mt-[-2rem]">
              <li className="relative pl-8 border-l-2 border-cyan-500/30">
                <span className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-cyan-500"></span>
                <span className="block text-2xl font-sans font-bold text-slate-900 dark:text-white mb-2">Safe Operation:</span>
                <span className="block text-xl font-serif italic text-slate-600 dark:text-white">Rigorous safety standards ensure components are securely integrated, though caution is always advised when interacting with active suction lines.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. Call to Action */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-cyan-900 dark:bg-[#040B14] relative overflow-hidden flex items-center justify-center min-h-[600px]">
        {/* Layer 1: Background Water Effect */}
        <div className="absolute inset-0 z-0 w-full h-full pointer-events-none">
          <LiquidWaterEffect />
        </div>
        <div className="absolute inset-0 bg-cyan-900/40 dark:bg-[#040B14]/60 mix-blend-multiply z-0" />

        <div className="relative z-10 text-center max-w-4xl mx-auto pointer-events-auto">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-sans font-bold text-white mb-6">
            Ready for a <span className="font-serif italic text-[#f9c80e] font-normal">Pristine Pool?</span>
          </h2>
          <p className="text-xl md:text-2xl text-cyan-100 font-light leading-relaxed mb-12 max-w-2xl mx-auto">
            If you are looking for top-quality swimming pool construction services, kindly talk to the experts at Crystal Pools. Let's design a pool that stays clean and beautiful year-round.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="text-white text-lg">
              <span className="font-light text-cyan-200 mr-2">Consult with a Specialist:</span>
              <a href="tel:+919552526371" className="font-bold hover:text-[#f9c80e] transition-colors">
                [+91 95525 26371 / 73]
              </a>
            </div>
            <Link to="/contact-swimming-pool-contractor" className="px-8 py-4 bg-[#f9c80e] hover:bg-[#e0b40b] text-slate-900 font-bold uppercase tracking-widest text-sm rounded-full transition-all transform hover:scale-105 shadow-lg shadow-[#f9c80e]/20">
              Get Your Skimmer Pool Quote
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
