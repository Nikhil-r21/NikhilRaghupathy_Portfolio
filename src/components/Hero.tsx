import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  const typingTexts = [
    'AWS Certified Cloud Practitioner',
    3000,
    'Jr. DevOps Engineer',
    3000,
    'Cloud Administrator',
    3000,
    'Server & Network Setup Specialist',
    3000,
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Nikhil Raghupathy
            </h1>
            <div className="text-xl md:text-2xl mb-6 text-primary">
              <TypeAnimation
                sequence={typingTexts}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
            <p className="text-light-darker mb-8 text-lg">
              Specializing in cloud architecture, automation, and DevOps practices
              to build scalable and reliable infrastructure solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Contact Me
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-medium hover:bg-primary/10 transition-colors"
              >
                View Projects
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 animate-blob bg-gradient-to-r from-primary to-secondary opacity-20 rounded-full" />
            <img
              src="https://media.licdn.com/dms/image/v2/D5603AQHbq6G5DzE1iA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724775021779?e=1743033600&v=beta&t=0OYa-GSesQnckfXc-3EICrb9yGKg8ImemQ_r1ZHxSeE"
              alt="Profile"
              className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover mx-auto relative z-10"
            />
          </motion.div>
        </div>

        <motion.a
          href="#about"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-light-darker hover:text-primary transition-colors"
        >
          <span className="mb-2">Scroll Down</span>
          <ChevronDown className="animate-bounce" />
        </motion.a>
      </div>
    </section>
  );
}
