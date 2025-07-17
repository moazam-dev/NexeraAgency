import React from 'react';
import { motion } from "framer-motion";
import {
    FaReact,
    FaNodeJs,
    FaHtml5,
    FaCss3Alt,
    FaGitAlt,
    FaAws,
    FaDocker,
    FaJsSquare
} from 'react-icons/fa';
import { DiMongodb, DiMysql, DiWordpress, DiFirebase } from 'react-icons/di';
import { SiTypescript, SiTailwindcss, SiNextdotjs } from 'react-icons/si';


// Main Component
export default function App() {
    const techStack = [
        { name: "Figma", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" className="w-12 h-12" /> },
        { name: "Adobe Illustrator", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg" alt="Adobe Illustrator" className="w-12 h-12" /> },
        { name: "Adobe XD", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg" alt="Adobe XD" className="w-12 h-12" /> },
        { name: "Sketch", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg" alt="Sketch" className="w-12 h-12" /> },
        { name: "InVision", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/invision/invision-original.svg" alt="InVision" className="w-12 h-12" /> },
        { name: "Framer", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framer/framer-original.svg" alt="Framer" className="w-12 h-12" /> },
        { name: "Miro", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/miro/miro-original.svg" alt="Miro" className="w-12 h-12" /> },
        { name: "Photoshop", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" alt="Photoshop" className="w-12 h-12" /> },
        
        { name: "React", icon: <FaReact className="text-6xl text-blue-500" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-6xl text-cyan-500" /> },
        { name: "HTML5", icon: <FaHtml5 className="text-6xl text-orange-600" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-6xl text-blue-600" /> },
    ];

    return (
        <div className="bg-white font-sans antialiased">
            <section id="tech-stack" className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    {/* Section Heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">UX/UI Toolkit</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            We utilize industry-leading UX/UI design tools and technologies to create stunning, user-friendly, and accessible digital experiences from concept to prototype to final interface.
                        </p>
                    </motion.div>

                    {/* Tech Stack Grid */}
                    <motion.div
                        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={{
                            visible: { transition: { staggerChildren: 0.05 } }
                        }}
                    >
                        {techStack.map((tech) => (
                            <motion.div
                                key={tech.name}
                                variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
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
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
