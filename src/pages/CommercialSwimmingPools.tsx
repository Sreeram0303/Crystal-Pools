import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import AnimatedTextReveal from '../components/AnimatedTextReveal';
import LiquidWaterEffect from '../components/LiquidWaterEffect';
import { IMAGES } from '../config/images';
import { usePageMeta } from '../hooks/usePageMeta';

export default function CommercialSwimmingPools() {
  usePageMeta(
    'Commercial Swimming Pools',
    'High-traffic commercial swimming pools for hotels, resorts, and apartment complexes. Built for durability, compliance, and premium guest experience.',
  );
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#060F1A] overflow-hidden">
      
      {/* 1. The Hero Section */}
      <section className="relative w-full min-h-[100dvh] md:min-h-[800px] flex flex-col justify-end pb-16 md:pb-24 px-4 sm:px-6 lg:px-8 pt-24">
        {/* Background Layer */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-[#060F1A]">
          <img 
            src={IMAGES.poolTypes.commercial}
            alt="Commercial Swimming Pool" 
            className="absolute inset-0 w-full h-full object-cover object-center md:object-[center_20%] opacity-90"
          />
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-end gap-6 md:gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-2xl"
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl text-white dark:text-brand-gold font-sans font-bold leading-[1.2] mb-2 md:mb-4">
              Commercial<br />
              <span className="font-serif italic text-[#f9c80e] font-normal text-5xl md:text-7xl lg:text-8xl">Swimming Pools.</span>
            </h1>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="max-w-lg pb-0 md:pb-4"
          >
            <p className="text-lg md:text-xl text-white font-medium drop-shadow-xl leading-relaxed">
              As India’s premier commercial swimming pool contractors, we blend over 25 years of industry experience with innovative design to maximize productivity, aesthetic appeal, and long-term performance for your project.
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
            An Asset, Not Just an Amenity
          </h2>
        </div>

        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-12 lg:col-span-10 lg:col-start-2">
            <div className="relative mb-12">
              <span className="absolute -top-12 -left-8 text-8xl text-cyan-500/20 font-serif z-10 hidden md:block">"</span>
              <AnimatedTextReveal 
                text="A commercial pool is a powerful business asset that can yield cost-effective performance, boost ROI, aid in branding, and enhance the overall customer experience."
                className="text-3xl md:text-4xl lg:text-5xl font-serif italic text-cyan-900 dark:text-white leading-relaxed"
                containerClassName="py-0"
              />
            </div>
            
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 font-sans font-light leading-relaxed mb-8">
              <span className="font-bold text-slate-900 dark:text-white">The Crystal Advantage:</span> Today’s modern leisure centers, luxury hotels, schools, and hydrotherapy facilities require more than just attractive designs. They demand durable structures equipped to handle the heaviest bathing loads with absolute reliability. 
            </p>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 font-sans font-light leading-relaxed">
              Having successfully completed over 3,100 swimming pools across more than 50 Pan-India locations, Crystal Pools adds measurable value to your development. From our in-house AutoCAD drafting to rigorous on-site supervision, we ensure that your aquatic facility becomes a cornerstone of your property's success.
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
              Complete Environmental and<br />Structural Control
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 font-sans font-light">
              We utilize the latest advancements in pool structures, finishes, and smart features to deliver a seamless operational experience.
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            <ul className="space-y-12">
              <li className="relative pl-8 border-l-2 border-cyan-500/30">
                <span className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-cyan-500"></span>
                <span className="block text-2xl font-sans font-bold text-slate-900 dark:text-white mb-2">Advanced Filtration & Disinfection:</span>
                <span className="block text-xl font-serif italic text-slate-600 dark:text-white">Precision-engineered systems designed for maximum hygiene and operating efficiency under extreme daily use.</span>
              </li>
              <li className="relative pl-8 border-l-2 border-cyan-500/30">
                <span className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-[#f9c80e]"></span>
                <span className="block text-2xl font-sans font-bold text-slate-900 dark:text-white mb-2">Complete Climate Packages:</span>
                <span className="block text-xl font-serif italic text-slate-600 dark:text-white">State-of-the-art environmental control combining humidity management, pool hall air heating and cooling, and fresh air ventilation.</span>
              </li>
            </ul>

            <ul className="space-y-12 lg:mt-0 mt-[-2rem]">
              <li className="relative pl-8 border-l-2 border-cyan-500/30">
                <span className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-cyan-500"></span>
                <span className="block text-2xl font-sans font-bold text-slate-900 dark:text-white mb-2">Energy Recovery Systems:</span>
                <span className="block text-xl font-serif italic text-slate-600 dark:text-white">Eco-friendly pool water heating and heat recovery technology to keep long-term operational costs low.</span>
              </li>
              <li className="relative pl-8 border-l-2 border-cyan-500/30">
                <span className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-[#f9c80e]"></span>
                <span className="block text-2xl font-sans font-bold text-slate-900 dark:text-white mb-2">Immersive Attractions:</span>
                <span className="block text-xl font-serif italic text-slate-600 dark:text-white">From dynamic wave machines to custom architectural finishes, we install features that leave a lasting impression on your guests.</span>
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
            Ready to Build with the <span className="font-serif italic text-[#f9c80e] font-normal">Best?</span>
          </h2>
          <p className="text-xl md:text-2xl text-cyan-100 font-light leading-relaxed mb-12 max-w-2xl mx-auto">
            The knowledgeable team at Crystal Pools is dedicated to optimizing your construction costs through a powerful synergy of flexibility, quality, and reliability. Let's discuss your facility's specific requirements.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="text-white text-lg">
              <span className="font-light text-cyan-200 mr-2">Consult with a Commercial Expert:</span>
              <a href="tel:+919552526371" className="font-bold hover:text-[#f9c80e] transition-colors">
                [+91 95525 26371 / 73]
              </a>
            </div>
            <Link to="/contact-swimming-pool-contractor" className="px-8 py-4 bg-[#f9c80e] hover:bg-[#e0b40b] text-slate-900 font-bold uppercase tracking-widest text-sm rounded-full transition-all transform hover:scale-105 shadow-lg shadow-[#f9c80e]/20">
              Request Your Commercial Project Quote
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
