import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Briefcase, AlignCenterVertical as Certificate } from 'lucide-react';

export function About() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const stats = [
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Experience",
      value: "1+ Years"
    },
    {
      icon: <Briefcase className="w-8 h-8 text-primary" />,
      title: "Completed",
      value: "4+ Projects"
    },
    {
      icon: <Certificate className="w-8 h-8 text-primary" />,
      title: "Certified",
      value: "AWS Cloud Practitioner"
    }
  ];

  return (
    <section id="about" className="py-20 bg-dark-lighter">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-dark p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-300"
              >
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{stat.title}</h3>
                <p className="text-light-darker">{stat.value}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="prose prose-invert max-w-none"
          >
            <p className="text-lg text-light-darker leading-relaxed mb-8">
              I am currently working as a Jr. Cloud & DevOps Engineer at eCosmos Solutions Private Limited. 
              As an AWS Certified Cloud Practitioner, I specialize in cloud architecture, infrastructure as code, 
              and cost optimization. I'm also focused on advancing my coding skills, particularly in Python, 
              to stay current with new technologies.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.a
                href="/Nikhil_Resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Download CV
              </motion.a>
              <motion.a
                href="https://devops-odyssey-studio.vercel.app/"
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary/10 transition-colors"
              >
                Explore More
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}