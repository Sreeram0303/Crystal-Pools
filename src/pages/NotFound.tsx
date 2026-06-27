import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { usePageMeta } from '../hooks/usePageMeta';

export default function NotFound() {
  usePageMeta('Page Not Found', 'The page you\'re looking for doesn\'t exist. Head back to Crystal Pools to explore our swimming pool services.');
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-light-bg dark:bg-dark-bg px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-lg"
      >
        <p className="text-[#0a5c86] dark:text-white font-display font-bold text-xl tracking-widest uppercase mb-4">
          404
        </p>
        <h1 className="text-4xl md:text-6xl font-display font-black text-slate-900 dark:text-white leading-tight mb-6">
          Page not found
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-lg font-light leading-relaxed mb-10">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center px-8 py-4 bg-[#0a5c86] hover:bg-[#034466] dark:bg-[#38bdf8] dark:text-slate-900 dark:hover:bg-[#0ea5e9] text-white font-bold rounded-2xl transition-colors duration-300 text-sm uppercase tracking-widest"
        >
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
}
