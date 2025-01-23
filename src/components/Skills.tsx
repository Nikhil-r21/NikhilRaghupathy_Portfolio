import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Cloud, Github as Git, PenTool as Pipeline, Box, Server, Code, Network, LineChart, Wrench, Shield } from 'lucide-react';

export function Skills() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const skillCategories = [
    {
      icon: <Cloud />,
      title: "Cloud Technologies",
      skills: ["AWS", "OpenStack"]
    },
    {
      icon: <Git />,
      title: "Version Control",
      skills: ["Git", "GitHub"]
    },
    {
      icon: <Pipeline />,
      title: "CI/CD Tools",
      skills: ["GitHub Actions", "Jenkins"]
    },
    {
      icon: <Box />,
      title: "Containerization",
      skills: ["Docker"]
    },
    {
      icon: <Server />,
      title: "Web Server",
      skills: ["Nginx"]
    },
    {
      icon: <Code />,
      title: "Programming",
      skills: ["Python", "Shell Scripting"]
    },
    {
      icon: <Network />,
      title: "Networking",
      skills: ["Networking Fundamentals"]
    },
    {
      icon: <Shield />,
      title: "Other tools",
      skills: ["SSH"]
    },
    {
      icon: <LineChart />,
      title: "Monitoring & Visualization",
      skills: ["Prometheus", "Grafana"]
    },
    {
      icon: <Wrench />,
      title: "Infrastructure as Code",
      skills: ["Terraform"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-dark-lighter">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Technical Skills</h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-dark p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-primary">{category.icon}</span>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              <div className="space-y-2">
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="bg-dark-lighter px-3 py-2 rounded-md text-light-darker"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}