import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, ChevronLeft, ChevronRight, Clock } from 'lucide-react';
import { blogData } from '../data/blogData';

const BlogSection = () => {
  // State to keep track of which page of blogs we're showing
  const [currentPage, setCurrentPage] = useState(0);
  const blogsPerPage = 3;
  
  // Calculate total number of pages
  const totalPages = Math.ceil(blogData.length / blogsPerPage);
  
  // Get current blogs to display
  const currentBlogs = blogData.slice(
    currentPage * blogsPerPage,
    (currentPage + 1) * blogsPerPage
  );
  
  // Navigate to previous page
  const handlePrevious = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };
  
  // Navigate to next page
  const handleNext = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Latest Posts</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Technical insights and thoughts on cloud technologies, containerization, and DevOps practices.
          </p>
        </motion.div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentBlogs.map((blog, index) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-3 space-x-6">
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-2" />
                    <span>{blog.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={14} className="mr-2" />
                    <span>{blog.readTime}</span>
                  </div>
                </div>
                <h3 className="font-bold text-xl text-gray-800 mb-3 line-clamp-2">{blog.title}</h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">{blog.excerpt}</p>
                
                <a 
                  href={blog.externalUrl} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Read More <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Carousel Navigation with Working Buttons */}
        <div className="flex justify-center mt-8 space-x-4 items-center">
          <button
            onClick={handlePrevious}
            className="bg-white p-3 rounded-full shadow-md hover:bg-blue-600 hover:text-white transition-colors"
            aria-label="Previous blog posts"
          >
            <ChevronLeft size={20} />
          </button>
          
          {/* Optional: Add page indicator */}
          <span className="text-gray-600 mx-2">
            {currentPage + 1} / {totalPages}
          </span>
          
          <button
            onClick={handleNext}
            className="bg-white p-3 rounded-full shadow-md hover:bg-blue-600 hover:text-white transition-colors"
            aria-label="Next blog posts"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;