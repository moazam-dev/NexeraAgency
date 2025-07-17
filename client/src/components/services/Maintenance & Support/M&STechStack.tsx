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
    FaJsSquare,
    FaWordpress
} from 'react-icons/fa';
import { DiMongodb, DiMysql, DiWordpress, DiFirebase } from 'react-icons/di';
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiCloudflare, SiNewrelic, SiDatadog, SiSentry, SiPingdom } from 'react-icons/si';


// Main Component
export default function App() {
    const techStack = [
        { name: "Pingdom", icon: <SiPingdom className="text-6xl text-yellow-500" /> },
        { name: "Sentry", icon: <SiSentry className="text-6xl text-purple-700" /> },
        { name: "Datadog", icon: <SiDatadog className="text-6xl text-indigo-600" /> },
        { name: "New Relic", icon: <SiNewrelic className="text-6xl text-green-700" /> },
        { name: "Cloudflare", icon: <SiCloudflare className="text-6xl text-orange-500" /> },
        { name: "AWS", icon: <FaAws className="text-6xl text-orange-400" /> },
        { name: "Docker", icon: <FaDocker className="text-6xl text-blue-700" /> },
        { name: "Git", icon: <FaGitAlt className="text-6xl text-orange-700" /> },
       
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
                            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">Support Toolkit</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            We use industry-leading tools for monitoring, security, backups, and support to keep your digital assets safe, reliable, and always available.
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
