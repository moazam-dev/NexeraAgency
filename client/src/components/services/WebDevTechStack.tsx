import React from 'react';
import { motion } from "framer-motion";
// Assuming useScrollAnimation is available in your project
import { useScrollAnimation } from "@/hooks/useScrollAnimation"; 

// Importing icons for various technologies. You might need to install 'react-icons'
// npm install react-icons
// For specific dev icons, you might use 'react-icons/di' for DevIcons, or 'react-icons/fa6' for Font Awesome.
// I'll use a mix for demonstration.
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaAws, FaDocker } from 'react-icons/fa6'; // FaJsSquare removed from here
import { FaJsSquare } from 'react-icons/fa'; // FaJsSquare imported from react-icons/fa
import { DiMongodb, DiMysql, DiWordpress, DiFirebase } from 'react-icons/di';


export default function WebDevTechStack() { // Changed function name to WebDevTechStack to match potential file naming convention
  const { ref, isInView } = useScrollAnimation();

  const techStack = [
    { name: "React", icon: <FaReact className="text-6xl text-blue-500" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-6xl text-green-600" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-6xl text-orange-600" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-6xl text-blue-600" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-6xl text-yellow-500" /> },
    { name: "MongoDB", icon: <DiMongodb className="text-6xl text-green-700" /> },
    { name: "MySQL", icon: <DiMysql className="text-6xl text-blue-700" /> },
    { name: "Git", icon: <FaGitAlt className="text-6xl text-orange-700" /> },
    { name: "AWS", icon: <FaAws className="text-6xl text-orange-400" /> },
    { name: "Docker", icon: <FaDocker className="text-6xl text-blue-700" /> },
    { name: "WordPress", icon: <DiWordpress className="text-6xl text-blue-400" /> },
    { name: "Firebase", icon: <DiFirebase className="text-6xl text-yellow-600" /> },
  ];

  return (
    <section id="tech-stack" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Our <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We leverage a diverse and robust set of technologies to build high-performance, scalable, and secure web applications.
          </p>
        </motion.div>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="mb-4">
                {tech.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 text-center">
                {tech.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
