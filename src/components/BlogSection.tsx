import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Calendar, ChevronLeft, ChevronRight, Clock, X } from 'lucide-react';
import { blogData } from '../data/blogData';
import type { IBlogPost } from '../types';

const BlogSection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedBlog, setSelectedBlog] = useState<IBlogPost | null>(null);
  const blogsPerPage = 3;
  
  const totalPages = Math.ceil(blogData.length / blogsPerPage);
  
  const currentBlogs = blogData.slice(
    currentPage * blogsPerPage,
    (currentPage + 1) * blogsPerPage
  );
  
  const handlePrevious = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };
  
  const handleNext = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  const openBlogModal = (blog: IBlogPost) => {
    setSelectedBlog(blog);
    document.body.style.overflow = 'hidden';
  };

  const closeBlogModal = () => {
    setSelectedBlog(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="blog" className="section-padding bg-white">
      <div className="container-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 mb-3 sm:mb-4">
            Latest Blog Posts
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto mb-4 sm:mb-6" />
          <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto px-2">
            Technical insights on cloud, containerization, and DevOps
          </p>
        </motion.div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {currentBlogs.map((blog, index) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-neutral-200 card-hover group cursor-pointer"
              onClick={() => openBlogModal(blog)}
            >
              <div className="h-44 sm:h-48 overflow-hidden bg-gradient-to-br from-primary-100 to-accent-100">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4 sm:p-6">
                <div className="flex items-center text-neutral-500 text-xs mb-2 sm:mb-3 gap-3 sm:gap-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} aria-hidden />
                    <span>{blog.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} aria-hidden />
                    <span>{blog.readTime}</span>
                  </div>
                </div>
                <h3 className="font-bold text-lg sm:text-xl text-neutral-900 mb-2 sm:mb-3 line-clamp-2 group-hover:text-primary-600 transition-colors">
                  {blog.title}
                </h3>
                <p className="text-neutral-600 mb-3 sm:mb-4 line-clamp-3 text-sm leading-relaxed">
                  {blog.excerpt}
                </p>
                <span className="inline-flex items-center gap-2 text-primary-600 font-semibold text-sm group/link">
                  Read more
                  <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" aria-hidden />
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Pagination - same style as Projects (dots 1 to N) */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-3 sm:gap-4">
            <motion.button
              onClick={handlePrevious}
              className="min-w-[44px] min-h-[44px] p-3 bg-white border-2 border-neutral-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-all duration-300 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Previous blog posts"
            >
              <ChevronLeft size={20} className="text-neutral-700" />
            </motion.button>
            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`min-w-[10px] min-h-[10px] rounded-full transition-all duration-300 ${
                    index === currentPage ? 'bg-primary-600 w-8' : 'bg-neutral-300'
                  }`}
                  aria-label={`Page ${index + 1}`}
                />
              ))}
            </div>
            <motion.button
              onClick={handleNext}
              className="min-w-[44px] min-h-[44px] p-3 bg-white border-2 border-neutral-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-all duration-300 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Next blog posts"
            >
              <ChevronRight size={20} className="text-neutral-700" />
            </motion.button>
          </div>
        )}

        {/* Blog Preview Modal */}
        <AnimatePresence>
          {selectedBlog && (
            <>
              <motion.div
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeBlogModal}
                aria-hidden
              />
              <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="bg-white rounded-xl sm:rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl">
                  <div className="relative h-48 sm:h-56 bg-gradient-to-br from-primary-100 to-accent-100">
                    <img
                      src={selectedBlog.image}
                      alt={selectedBlog.title}
                      className="w-full h-full object-cover"
                    />
                    <button
                      type="button"
                      onClick={closeBlogModal}
                      className="absolute top-3 right-3 sm:top-4 sm:right-4 min-w-[44px] min-h-[44px] flex items-center justify-center bg-white/95 backdrop-blur-sm rounded-lg hover:bg-white transition-colors shadow"
                      aria-label="Close"
                    >
                      <X size={22} />
                    </button>
                  </div>
                  <div className="p-5 sm:p-6">
                    <div className="flex items-center text-neutral-500 text-xs mb-3 gap-4">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} /> {selectedBlog.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} /> {selectedBlog.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-3">
                      {selectedBlog.title}
                    </h3>
                    <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-6">
                      {selectedBlog.excerpt}
                    </p>
                    {selectedBlog.externalUrl && (
                      <a
                        href={selectedBlog.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors min-h-[44px]"
                      >
                        Read full article
                        <ArrowRight size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default BlogSection;
