import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Search, ArrowRight, Calendar, User } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';
import { blogPosts } from '../data/blog';
import type { BlogCategory } from '../types';

const categories: (BlogCategory | 'All')[] = ['All', 'Maintenance', 'Architecture', 'Wellness', 'Technology'];

export default function Blog() {
  usePageMeta(
    'Insights & Architecture',
    'Expert perspectives on luxury pool construction, wellness routines, and cutting-edge water technology from the Crystal Pools team.',
  );

  const [activeCategory, setActiveCategory] = useState<BlogCategory | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = filteredPosts.find(p => p.featured) ?? filteredPosts[0];
  const regularPosts = filteredPosts.filter(p => !p.featured && p.id !== featuredPost?.id);

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
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 space-y-6 md:space-y-0">
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

        {/* Featured Post */}
        {featuredPost && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <Link to={`/blog/${featuredPost.slug}`} className="block group">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white dark:bg-dark-surface rounded-4xl p-4 border border-slate-100 dark:border-slate-800 hover:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-[#38bdf8]/5 transition-shadow duration-500">
                <div className="h-100 lg:h-125 w-full rounded-3xl overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 lg:p-12">
                  <div className="flex items-center space-x-4 mb-6">
                    <span className="px-3 py-1 bg-brand-blue/10 text-brand-blue dark:bg-[#38bdf8]/10 dark:text-white text-xs font-bold uppercase tracking-widest rounded-full">
                      {featuredPost.category}
                    </span>
                    <div className="flex items-center text-slate-400 text-sm">
                      <Calendar className="w-4 h-4 mr-1.5" />
                      {featuredPost.date}
                    </div>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-display font-medium text-slate-900 dark:text-white mb-6 leading-tight group-hover:text-brand-blue dark:group-hover:text-[#38bdf8] transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-lg text-slate-600 dark:text-slate-400 font-light mb-8 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-slate-500 dark:text-slate-300 font-medium">
                      <User className="w-5 h-5 mr-2" />
                      {featuredPost.author}
                    </div>
                    <div className="w-12 h-12 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue dark:group-hover:bg-[#38bdf8] dark:group-hover:text-dark-bg dark:group-hover:border-[#38bdf8] transition-all duration-300">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        {/* Regular Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {regularPosts.map((post) => (
              <motion.div
                layout
                key={post.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <Link
                  to={`/blog/${post.slug}`}
                  className="group bg-white dark:bg-dark-surface rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
                >
                  <div className="h-64 w-full overflow-hidden relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-black/50 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col grow">
                    <div className="flex items-center text-slate-400 text-sm mb-4">
                      <Calendar className="w-4 h-4 mr-1.5" />
                      {post.date}
                    </div>
                    <h3 className="text-xl md:text-2xl font-display font-medium text-slate-900 dark:text-white mb-4 leading-snug group-hover:text-brand-blue dark:group-hover:text-[#38bdf8] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed mb-8 grow">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-6 mt-auto">
                      <div className="flex items-center text-slate-500 dark:text-slate-300 text-sm font-medium">
                        <User className="w-4 h-4 mr-2" />
                        {post.author}
                      </div>
                      <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-brand-blue dark:group-hover:text-[#38bdf8] transition-colors group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredPosts.length === 0 && (
          <div className="py-24 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 mb-6">
              <Search className="w-8 h-8 text-slate-400" />
            </div>
            <h3 className="text-2xl font-display text-slate-900 dark:text-white mb-2">No articles found</h3>
            <p className="text-slate-500 dark:text-slate-400">Try adjusting your search query or category filter.</p>
          </div>
        )}

      </section>
    </div>
  );
}
