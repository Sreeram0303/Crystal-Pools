import { motion } from 'motion/react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <motion.button
      whileHover={{ scale: 1.1, y: -5 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.3 }}
      onClick={scrollToTop}
      className="p-4 rounded-full bg-cyan-600/80 backdrop-blur-md border border-cyan-400/30 text-white shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.8)] hover:bg-cyan-500 transition-all duration-300 relative group overflow-hidden"
      aria-label="Scroll to top"
    >
      <motion.div
        animate={{ y: [0, -3, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <ArrowUp size={28} />
      </motion.div>
    </motion.button>
  );
}
