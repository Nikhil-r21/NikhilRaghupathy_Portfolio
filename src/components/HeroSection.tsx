import React from 'react';
import { motion } from 'framer-motion';
import { ReactTyped } from 'react-typed';
import { FileDown, ExternalLink } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 pb-24 bg-gray-50">
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center">
        {/* Text Content */}
        <motion.div 
          className="md:w-1/2 text-center md:text-left mb-10 md:mb-0 mt-10 md:mt-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Hi, I'm Nikhil Raghupathy
          </h1>
          
          <div className="text-xl md:text-2xl text-blue-600 mb-8 h-16">
            <ReactTyped
              strings={[
                "DevOps Engineer",
                "AWS Certified Cloud Practitioner",
              ]}
              typeSpeed={40}
              backSpeed={100}
              loop
              className="font-medium"
            />
          </div>
          
          <p className="text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
            Passionate about cloud infrastructure, containerization, and automated workflows.
            Transforming ideas into scalable, resilient systems.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
            <a 
              href="#projects" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('projects');
                if (element) {
                  window.scrollTo({
                    top: element.offsetTop - 80,
                    behavior: 'smooth',
                  });
                }
              }}
            >
              <ExternalLink size={18} className="mr-2" />
              View Projects
            </a>
            <a 
              href="./Nikhil_Raghupathy_DevOps_Engineer.pdf" target='_blank' rel="noopener noreferrer"
              className="bg-white hover:bg-gray-100 text-blue-600 font-semibold py-3 px-6 rounded-lg border border-blue-600 transition-colors flex items-center justify-center"
            >
              <FileDown size={18} className="mr-2" />
              Download Resume
            </a>
          </div>
        </motion.div>
        
        {/* Profile Image with Glassmorphism Effect */}
        <motion.div 
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative">
            {/* Decorative rings */}
            <div className="absolute inset-0 w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-blue-200 to-blue-300 animate-pulse" style={{ transform: 'scale(1.1)', filter: 'blur(8px)', opacity: 0.6 }}></div>
            <div className="absolute inset-0 w-64 h-64 md:w-80 md:h-80 rounded-full border-3 border-white" style={{ transform: 'scale(1.05)' }}></div>
            
            {/* Glassmorphism container */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl">
              {/* Profile image */}
              <img 
                src="https://media.licdn.com/dms/image/v2/D5603AQHbq6G5DzE1iA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724775021779?e=1749081600&v=beta&t=ODcypQMNlukVX1FJS6ZNTC8Y8aPfS7nnJTxcn7fHX5E" 
                alt="Nikhil Raghupathy - Jr. Cloud & DevOps Engineer" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* AWS Badge - uncomment if needed */}
            {/* <div className="absolute -right-4 -bottom-4 bg-white p-4 rounded-full shadow-lg">
              <img 
                src="https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/certification/approved/images/certification-badges/clf-badge-resized.d641db1401f3fe13f9e67b68f29ea1f898757f8b.png" 
                alt="AWS Certified" 
                className="w-16 h-16 rounded-full object-cover"
              />
            </div> */}
            
            {/* Glassmorphism accent elements */}
            {/* <div className="absolute -top-2 -right-2 w-16 h-16 rounded-full bg-gradient-to-br from-blue-300 to-blue-500 bg-opacity-70 backdrop-blur-md border border-white border-opacity-30"></div>
            <div className="absolute -bottom-3 -left-3 w-12 h-12 rounded-full bg-gradient-to-tr from-purple-300 to-purple-500 bg-opacity-70 backdrop-blur-md border border-white border-opacity-30"></div> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
