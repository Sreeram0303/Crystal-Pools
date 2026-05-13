import { useState, useEffect } from 'react';
import { motion, useSpring, useTransform, useMotionValue } from 'motion/react';
import { usePanelContext } from '../contexts/PanelContext';

export default function WhatsAppButton() {
  const { isPanelOpen } = usePanelContext();
  const [isHovered, setIsHovered] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    const handleResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate cursor position considering the center of the screen as origin for better parallax
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    
    // Set initial mouse position to center
    mouseX.set(window.innerWidth / 2);
    mouseY.set(window.innerHeight / 2);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Max translation of pupils
  const maxMoveX = 3;
  const maxMoveY = 4;

  const pupilX = useTransform(smoothMouseX, [0, windowSize.width || 1000], [-maxMoveX, maxMoveX]);
  const pupilY = useTransform(smoothMouseY, [0, windowSize.height || 1000], [-maxMoveY, maxMoveY]);

  if (isPanelOpen) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 pointer-events-auto flex items-center gap-3">
      {/* The Eyes Component matching Framer */}
      <div 
        className="relative hidden xl:flex items-center justify-between pointer-events-none drop-shadow-md transition-transform duration-300"
        style={{ width: '56px', height: '36px', transform: isHovered ? 'scale(1.1) translateY(-5px)' : 'scale(1)' }}
      >
        {/* Left Eye */}
        <div className="absolute left-0 top-0 w-[24px] h-[36px] bg-[#FFFEFD] rounded-[40px] flex items-center justify-center overflow-hidden border border-gray-200 shadow-inner">
          <motion.div 
            style={{ x: pupilX, y: pupilY }}
            className="w-[16px] h-[22px] bg-[#0C0C0C] rounded-full relative flex items-end justify-center pb-1"
          >
            {/* Highlight */}
            <div className="w-[3px] h-[3px] bg-[#FFFEFD] rounded-full absolute bottom-1"></div>
          </motion.div>
        </div>

        {/* Right Eye */}
        <div className="absolute right-0 top-0 w-[24px] h-[36px] bg-[#FFFEFD] rounded-[40px] flex items-center justify-center overflow-hidden border border-gray-200 shadow-inner">
          <motion.div 
            style={{ x: pupilX, y: pupilY }}
            className="w-[16px] h-[22px] bg-[#0C0C0C] rounded-full relative flex items-end justify-center pb-1"
          >
            {/* Highlight */}
            <div className="w-[3px] h-[3px] bg-[#FFFEFD] rounded-full absolute bottom-1"></div>
          </motion.div>
        </div>
      </div>

      <a 
        href="https://wa.me/919552526371" 
        target="_blank" 
        rel="noopener noreferrer"
        className="relative group flex items-center justify-center p-3 xl:px-4 xl:py-3 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden w-12 h-12 xl:w-auto xl:h-auto"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
           animate={{ scale: isHovered ? 1.05 : 1 }}
           transition={{ type: "spring", stiffness: 300, damping: 20 }}
           className="relative z-10 flex items-center gap-2"
        >
          {/* WhatsApp Icon SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-7 h-7 sm:w-8 sm:h-8 fill-current shrink-0"
          >
            <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.525.146-.18.194-.3.297-.495.098-.21.046-.39-.034-.54-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.21 2.095 3.2 5.077 4.485.709.3 1.262.48 1.694.614.71.226 1.356.195 1.864.12.571-.09 1.767-.72 2.016-1.426.246-.705.246-1.305.174-1.425-.075-.135-.276-.21-.578-.36z" />
            <path d="M20.52 3.449C18.24 1.245 15.24 0 12 0 5.385 0 0 5.385 0 12c0 2.125.556 4.195 1.61 6.015L.305 24l6.115-1.605C8.196 23.36 10.087 24 12 24c6.615 0 12-5.385 12-12 0-3.24-1.245-6.255-3.48-8.551zM12 21.974c-1.815 0-3.59-.481-5.14-1.396l-.37-.21-3.815 1 1-3.725-.24-.37A9.914 9.914 0 011.996 12C1.996 6.476 6.48 1.996 12 1.996s10.004 4.48 10.004 10.004C22.004 17.525 17.524 21.974 12 21.974z" />
          </svg>
          <span className="font-semibold text-sm sm:text-base pr-1 tracking-wide hidden xl:block">Need help?</span>
        </motion.div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Pulsing effect rings */}
        <div className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-75 hidden sm:block"></div>
      </a>
    </div>
  );
}
