import { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Clock } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';
import type { BlogCategory } from '../types';

const categories: (BlogCategory | 'All')[] = ['All', 'Maintenance', 'Architecture', 'Wellness', 'Technology'];

export default function Blog() {
  usePageMeta(
    'Insights & Architecture',
    'Expert perspectives on luxury pool construction, wellness routines, and cutting-edge water technology from the Crystal Pools team.',
  );

  const [activeCategory, setActiveCategory] = useState<BlogCategory | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="bg-light-bg dark:bg-dark-bg min-h-screen transition-colors duration-500 overflow-x-hidden font-sans">

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 lg:px-12 bg-white dark:bg-dark-surface border-b border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-7xl font-display font-medium text-brand-blue dark:text-white mb-6 tracking-tight uppercase"
          >
            Insights & Architecture
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 font-light max-w-3xl mx-auto"
          >
            Expert perspectives on luxury pool construction, wellness routines, and cutting-edge water technology.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 px-6 lg:px-12 max-w-350 mx-auto min-h-screen">

        {/* Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-6 md:space-y-0">
          <div className="flex overflow-x-auto no-scrollbar space-x-2 w-full md:w-auto pb-4 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border
                  ${activeCategory === cat
                    ? 'bg-brand-blue border-brand-blue text-white dark:bg-[#38bdf8] dark:border-[#38bdf8] dark:text-dark-bg'
                    : 'bg-transparent border-slate-200 text-slate-600 hover:border-brand-blue dark:border-slate-800 dark:text-slate-400 dark:hover:border-[#38bdf8]'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white dark:bg-[#0f1724] border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white px-5 py-3 pl-12 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-blue dark:focus:ring-[#38bdf8] transition-all"
            />
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5" />
          </div>
        </div>

        {/* Coming Soon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="py-24 text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 mb-6">
            <Clock className="w-8 h-8 text-slate-400" />
          </div>
          <h3 className="text-2xl md:text-3xl font-display text-slate-900 dark:text-white mb-2">Coming Soon</h3>
          <p className="text-slate-500 dark:text-slate-400 max-w-md mx-auto">
            We're working on our first articles. Check back soon for expert perspectives on pool construction, maintenance, and design.
          </p>
        </motion.div>

      </section>
    </div>
  );
}
