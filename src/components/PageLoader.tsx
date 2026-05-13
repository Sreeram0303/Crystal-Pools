import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';

interface PageLoaderProps {
  onFillComplete?: () => void;
}

export default function PageLoader({ onFillComplete }: PageLoaderProps) {
  const shouldReduceMotion = useReducedMotion();
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion) {
      onFillComplete?.();
      return;
    }
    // 1. Initial State: Blank for 300ms
    const t1 = setTimeout(() => setPhase(1), 300);
    
    // 2. Transition Out: Phase 2 begins to hide "EST YEAR"
    const t2 = setTimeout(() => setPhase(2), 1500);
    
    // 3. Phase 3: Brand Reveal
    const t3 = setTimeout(() => setPhase(3), 2000);
    
    // 4. Trigger completion so parent unmounts and triggers `exit` animation
    const t4 = setTimeout(() => {
        if (onFillComplete) {
            onFillComplete();
        }
    }, 3800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [shouldReduceMotion, onFillComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-light-bg overflow-hidden"
      initial={{ opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }}
      exit={{
        clipPath: "inset(0% 0% 100% 0%)",
        transition: { duration: 1.0, ease: [0.76, 0, 0.24, 1] }
      }}
    >
      {/* Background ambient lighting */}
      <div 
        className="absolute inset-0 opacity-50 blur-3xl pointer-events-none" 
        style={{ background: 'radial-gradient(circle at center, color-mix(in srgb, var(--color-brand-blue) 5%, transparent) 0%, transparent 60%)' }}
      />

      <AnimatePresence mode="wait">
        {phase === 1 && (
          <motion.div
            key="est"
            initial={{ opacity: 0, y: 15, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -15, filter: "blur(8px)" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute flex items-center justify-center"
          >
            <span className="text-sm md:text-base font-display text-slate-400 tracking-[0.4em] uppercase font-light">
              EST 1993
            </span>
          </motion.div>
        )}
        
        {phase >= 3 && (
          <motion.div
            key="brand"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8"
          >
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                    opacity: { duration: 1, ease: "easeOut" },
                    scale: { duration: 1, ease: "easeOut" }
                }}
                className="w-16 h-16 md:w-24 md:h-24 relative flex items-center justify-center"
            >
                {/* Subtle reflection/glow under the logo */}
                <div className="absolute -bottom-4 w-full h-3 bg-[#0a5c86]/10 blur-xl rounded-[100%] scale-x-150"></div>
                <img src="/logo.png" alt="Crystal Pools" className="w-full h-full object-contain drop-shadow-xl relative z-10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, filter: "blur(4px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="flex flex-col items-center md:items-start"
            >
              <motion.div
                className="flex flex-wrap gap-3 md:gap-4 justify-center md:justify-start mb-6 uppercase"
                style={{ fontFamily: "'Itim', cursive" }}
              >
                <div className="flex text-yellow-500 font-bold drop-shadow-md">
                  {"CRYSTAL".split("").map((char, index) => {
                    const rotations = ['-rotate-2', 'rotate-2', '-rotate-1', 'rotate-1', '-rotate-3', 'rotate-3', '-rotate-2'];
                    return (
                      <motion.div 
                        key={`c-${index}`} 
                        initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ 
                          type: "spring",
                          stiffness: 260,
                          damping: 20,
                          delay: 0.4 + (index * 0.08) 
                        }}
                        className={`w-10 h-10 md:w-16 md:h-16 text-3xl md:text-5xl border-4 border-current flex items-center justify-center mx-0.5 rounded-md bg-white shadow-sm ${rotations[index % rotations.length]}`}
                      >
                        {char}
                      </motion.div>
                    )
                  })}
                </div> 
                <div className="flex text-[#0a5c86] font-bold drop-shadow-md">
                  {"POOLS".split("").map((char, index) => {
                    const rotations = ['rotate-1', '-rotate-2', 'rotate-2', '-rotate-1', 'rotate-3'];
                    return (
                      <motion.div 
                        key={`p-${index}`} 
                        initial={{ opacity: 0, scale: 0.5, rotate: 20 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ 
                          type: "spring",
                          stiffness: 260,
                          damping: 20,
                          delay: 0.4 + (8 * 0.08) + (index * 0.08) 
                        }}
                        className={`w-10 h-10 md:w-16 md:h-16 text-3xl md:text-5xl border-4 border-current flex items-center justify-center mx-0.5 rounded-md bg-white shadow-sm ${rotations[index % rotations.length]}`}
                      >
                        {char}
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
              
              {/* Progress Line Indicator */}
              <div className="w-full h-0.5 bg-slate-200 relative overflow-hidden mt-2 rounded-full">
                <motion.div 
                  initial={{ x: "-100%" }}
                  animate={{ x: "0%" }}
                  transition={{ duration: 1.8, ease: [0.76, 0, 0.24, 1] }}
                  className="absolute inset-y-0 left-0 w-full bg-linear-to-r from-transparent via-[#38bdf8] to-[#0a5c86]"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

