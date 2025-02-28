import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function Experience() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const experience = [
    {
      title: "Jr. Cloud & DevOps Engineer",
      company: "e-Cosmos (India) Pvt. Ltd., Bengaluru",
      period: "Sept 2023 - Present",
      responsibilities: [
        "Led cloud infrastructure development using AWS services.",
        "Implemented CI/CD pipelines reducing deployment time by 60%.",
        "Managed containerized applications using Docker.",
        "Optimized cloud costs and improved system efficiency."
      ]
    },
    {
      title: "AWS Re/Start Program Intern",
      company: "Magic bus India Foundation, Chennai",
      period: "Jan 2023 - May 2023",
      responsibilities: [
        "Completed AWS Re/Start program with hands-on experience in AWS cloud fundamentals.",
        "Developed foundational knowledge in AWS services and best practices for cloud security and scalability.",
        "Successfully completed the AWS Certified Cloud Practitioner certification, valid until May 2026."
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Work Experience</h2>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          {experience.map((job, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative pl-8 pb-12 border-l-2 border-primary last:pb-0"
            >
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0" />
              
              <div className="bg-dark-lighter p-6 rounded-lg shadow-lg">    
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm mb-4">
                  {job.period}
                </span>
                
                <h3 className="text-2xl font-bold mb-2">{job.title}</h3>
                <p className="text-light-darker italic mb-4">{job.company}</p>
                
                <ul className="space-y-2">
                  {job.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-primary mt-1.5">•</span>
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}