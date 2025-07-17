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
        { name: "WordPress Core", icon: <DiWordpress className="text-6xl text-blue-400" /> },
        { name: "WooCommerce", icon: <FaReact className="text-6xl text-purple-500" /> },
        { name: "Elementor", icon: <FaHtml5 className="text-6xl text-pink-500" /> },
        { name: "Advanced Custom Fields", icon: <FaJsSquare className="text-6xl text-yellow-500" /> },
        { name: "Yoast SEO", icon: <FaGitAlt className="text-6xl text-green-600" /> },
        { name: "WPForms", icon: <FaCss3Alt className="text-6xl text-blue-600" /> },
        { name: "WPML", icon: <SiTypescript className="text-6xl text-blue-600" /> },
        { name: "Jetpack", icon: <FaAws className="text-6xl text-gray-700" /> },
        { name: "UpdraftPlus", icon: <FaDocker className="text-6xl text-blue-700" /> },
        { name: "Wordfence Security", icon: <DiFirebase className="text-6xl text-yellow-600" /> },
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
                            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">WordPress Toolkit</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            We utilize the most trusted WordPress plugins, page builders, and security tools to deliver powerful, flexible, and secure WordPress websites tailored to your needs.
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
