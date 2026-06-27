import { useState } from 'react';
import { usePageMeta } from '../../hooks/usePageMeta';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Waves } from 'lucide-react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../../config/images';

const adhesives = [
  { id: 1, name: 'Premium White Adhesive',   image: IMAGES.specialty.adhesiveGrout[0] },
  { id: 2, name: 'Polymer-Modified Grout',   image: IMAGES.specialty.adhesiveGrout[1] },
  { id: 3, name: 'Epoxy Grout System',        image: IMAGES.specialty.adhesiveGrout[2] },
  { id: 4, name: 'Waterproofing Membrane',    image: IMAGES.specialty.adhesiveGrout[3] },
];

export default function SpecialtyInstallations() {
  const [isHoveringTherapy, setIsHoveringTherapy] = useState(false);

  return (
    <div className="w-full font-sans overflow-x-hidden min-h-screen">
      
      {/* 1. Hero Section */}
      <section className="relative w-full h-screen overflow-hidden bg-black flex items-center">
        <div className="absolute inset-0">
          <img
            src={IMAGES.specialty.hero}
            alt="Specialty Installations & Wellness"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent" />
        </div>

        <div className="relative z-10 px-8 sm:px-16 md:px-24 lg:px-32 max-w-3xl pt-20">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-light text-white leading-none mb-2"
          >
            Specialty<br />Installations
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl font-serif italic text-[#f9c80e] leading-none mb-8"
          >
            & Wellness
          </motion.p>

          {/* Gold rule + wave icon */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-10 h-0.5 bg-[#f9c80e]" />
            <Waves className="w-5 h-5 text-[#38bdf8]" strokeWidth={1.5} />
            <div className="w-10 h-0.5 bg-[#f9c80e]" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.75 }}
            className="text-base md:text-lg text-slate-200 font-light leading-relaxed max-w-sm"
          >
            Elevating every detail of your aquatic and wellness environments.
          </motion.p>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <div className="w-px h-16 bg-white/30 relative overflow-hidden">
            <motion.div
              initial={{ y: '-100%' }}
              animate={{ y: '100%' }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-0 w-full h-full bg-white"
            />
          </div>
        </div>
      </section>

      {/* Part A: The Technical Grid (Adhesives & Grout) */}
      <section className="py-24 md:py-32 px-6 lg:px-12 bg-white dark:bg-[#0a111a] transition-colors duration-500">
        <div className="max-w-[1400px] mx-auto">
          
          <div className="max-w-4xl mx-auto text-center mb-16 lg:mb-24">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-[#0a5c86] dark:text-white mb-6 tracking-tight">
              Advanced Tile Adhesive & Grout Systems
            </h2>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 font-light leading-relaxed">
              The foundation of a flawless, enduring finish lies beneath the surface. Crystal Pools provides high-performance, polymer-modified white adhesives specifically engineered for the permanent installation of premium glass mosaics and tiles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="bg-[#fbfbfb] dark:bg-[#060F1A] p-8 rounded-2xl border border-slate-100 dark:border-slate-800">
               <h3 className="text-xl font-medium text-slate-900 dark:text-slate-100 mb-4 font-display">Superior Adhesion</h3>
               <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed">Highly flexible, non-shrink formulas that guarantee a permanent bond.</p>
            </div>
            <div className="bg-[#fbfbfb] dark:bg-[#060F1A] p-8 rounded-2xl border border-slate-100 dark:border-slate-800">
               <h3 className="text-xl font-medium text-slate-900 dark:text-slate-100 mb-4 font-display">Extreme Durability</h3>
               <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed">Heatproof, self-curing, and structurally resilient under heavy water loads.</p>
            </div>
            <div className="bg-[#fbfbfb] dark:bg-[#060F1A] p-8 rounded-2xl border border-slate-100 dark:border-slate-800">
               <h3 className="text-xl font-medium text-slate-900 dark:text-slate-100 mb-4 font-display">Absolute Waterproofing</h3>
               <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed">Forms an impenetrable barrier, protecting the structural integrity of the pool shell.</p>
            </div>
          </div>

          {/* Adhesives 4-Column Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {adhesives.map((prod) => (
              <motion.div 
                key={prod.id} 
                className="group relative bg-[#f8fafc] dark:bg-black rounded-xl overflow-hidden cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-slate-100 dark:border-slate-800"
              >
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img src={prod.image} alt={prod.name} className="w-full h-full object-cover mix-blend-multiply dark:mix-blend-normal group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4 border-t border-slate-100 dark:border-slate-800">
                  <h4 className="text-sm font-medium text-slate-900 dark:text-slate-200 text-center uppercase tracking-wide">{prod.name}</h4>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Part B: The Immersive Lookbook (Wellness) */}
      <section className="bg-[#f7f5f0] dark:bg-[#1a1614] py-24 md:py-32 transition-colors duration-500 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          
          <div className="max-w-4xl mx-auto text-center mb-24">
            <h2 className="text-3xl md:text-5xl font-display font-medium text-[#5c4a3d] dark:text-[#d4c5b9] mb-6 tracking-tight">
              Bespoke Wellness Retreats
            </h2>
            <p className="text-lg md:text-xl text-[#7a6b5e] dark:text-[#a89f91] font-light leading-relaxed">
              Beyond the pool, Crystal Pools is a premier architect of immersive relaxation spaces. From private residences to elite spa chains and health clubs, we design and install world-class wellness environments that harmonize beautifully with your lifestyle, with an absolute focus on safety and superior efficacy.
            </p>
          </div>

          {/* Row 1: Sauna & Steam (Image Left, Text Right) */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 mb-32">
            <div className="w-full lg:w-[60%] grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 1.05 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                viewport={{ once: true }}
                className="col-span-2 h-[400px] rounded-2xl overflow-hidden"
              >
                <img src={IMAGES.specialty.sunbath[0]} alt="Sauna Main" className="w-full h-full object-cover" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 1.05 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.1 }}
                viewport={{ once: true }}
                className="h-[250px] rounded-2xl overflow-hidden"
              >
                <img src={IMAGES.specialty.sunbath[1]} alt="Sauna Detail" className="w-full h-full object-cover" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 1.05 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
                className="h-[250px] rounded-2xl overflow-hidden"
              >
                <img src={IMAGES.specialty.sunbath[2]} alt="Steam Room" className="w-full h-full object-cover" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 1.05 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: true }}
                className="h-55 rounded-2xl overflow-hidden"
              >
                <img src={IMAGES.specialty.sunbath[3]} alt="Sauna Interior" className="w-full h-full object-cover" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 1.05 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: true }}
                className="h-55 rounded-2xl overflow-hidden"
              >
                <img src={IMAGES.specialty.sunbath[4]} alt="Steam Detail" className="w-full h-full object-cover" />
              </motion.div>
            </div>
            <div className="w-full lg:w-[40%]">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#8c7a6b] dark:text-[#c4b3a3] mb-3">Sauna & Steam Rooms</h3>
              <h4 className="text-3xl md:text-4xl font-display font-medium text-[#4a3b30] dark:text-[#ebdcd0] mb-6 leading-tight">Splendidly Stylish, <br/> Exceptionally Efficient</h4>
              <p className="text-base text-[#7a6b5e] dark:text-[#a89f91] font-light leading-relaxed mb-8">
                Step into ultimate rejuvenation. We design and construct bespoke therapeutic, enclosed wooden saunas and modern glass-enclosed steam baths using tested materials and the latest production technology.
              </p>
              
              <div 
                className="relative p-6 rounded-xl border border-[#dcd4c8] dark:border-[#4a4239] transition-all duration-500 overflow-hidden"
                onMouseEnter={() => setIsHoveringTherapy(true)}
                onMouseLeave={() => setIsHoveringTherapy(false)}
              >
                <div 
                  className={`absolute inset-0 bg-[#f0eadd] dark:bg-[#2d2621] transition-opacity duration-700 pointer-events-none
                    ${isHoveringTherapy ? 'opacity-100' : 'opacity-0'}`}
                ></div>
                
                <h5 className="relative z-10 text-lg font-medium text-[#4a3b30] dark:text-[#ebdcd0] mb-2 font-display">The Sauna Experience</h5>
                <p className={`relative z-10 text-sm font-light leading-relaxed transition-colors duration-500
                  ${isHoveringTherapy ? 'text-[#5c4a3d] dark:text-[#d4c5b9]' : 'text-[#7a6b5e] dark:text-[#a89f91]'}`}
                >
                  Utilizing dry heat typically ranging from 70° to 100° Celsius, our saunas offer profound health benefits, including improved blood circulation, lowered blood pressure, and enhanced skin health, while infusing a deep sense of relaxation.
                </p>
              </div>
            </div>
          </div>

          {/* Row 2: Jacuzzis & Hydrotherapy (Text Left, Image Right) */}
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-24">
            <div className="w-full lg:w-[40%]">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#8c7a6b] dark:text-[#c4b3a3] mb-3">Jacuzzis & Hydrotherapy Tubs</h3>
              <h4 className="text-3xl md:text-4xl font-display font-medium text-[#4a3b30] dark:text-[#ebdcd0] mb-6 leading-tight">Experience Seasonal Pinnacle.</h4>
              <p className="text-base text-[#7a6b5e] dark:text-[#a89f91] font-light leading-relaxed">
                Experience the pinnacle of hydrotherapy. As a leading manufacturer of Hydro Massage Bath Tubs and Systems, we deliver units that meet the highest industrial standards. Whether integrated into your primary swimming pool design or installed as a standalone oasis, our Hydrotherapy units are widely acclaimed for their robust construction, superior architectural finish, and a high degree of customization.
              </p>
            </div>
            <div className="w-full lg:w-[60%] grid grid-cols-2 gap-4">
              {IMAGES.specialty.jacuzzi.slice(0, 4).map((src, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 1.05 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="h-62.5 rounded-2xl overflow-hidden group relative cursor-pointer"
                >
                  <img src={src} alt={`Jacuzzi ${i + 1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, scale: 1.05 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: true }}
                className="col-span-2 h-[400px] rounded-2xl overflow-hidden group relative cursor-pointer"
              >
                <img src={IMAGES.specialty.jacuzzi[4]} alt="Hydrotherapy Main" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </motion.div>
            </div>
          </div>

        </div>
      </section>

      {/* Footer / Call to Action */}
      <section className="py-24 md:py-32 px-6 flex flex-col items-center justify-center text-center bg-[#EEF5FF] dark:bg-[#060F1A]">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="max-w-3xl"
        >
          <p className="text-xs tracking-[0.3em] uppercase font-bold text-[#f9c80e] mb-6">Start the conversation</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-[#0a5c86] dark:text-white mb-12 tracking-tight">
            Complete Your Oasis.
          </h2>
          <Link to="/contact-swimming-pool-contractor">
            <button className="group inline-flex items-center gap-4 border border-[#0a5c86] dark:border-[#38bdf8] text-[#0a5c86] dark:text-white hover:bg-[#0a5c86] dark:hover:bg-[#38bdf8] hover:text-white dark:hover:text-slate-900 px-10 py-5 font-bold uppercase tracking-widest text-sm transition-all duration-300">
              <span>Inquire About Wellness & Finishes</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </motion.div>
      </section>

    </div>
  );
}
