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
    FaGoogle, FaFacebook, FaMailchimp, FaHubspot, FaBuffer, FaTwitter, FaInstagram, FaLinkedin, FaYoutube
} from 'react-icons/fa';
import { DiMongodb, DiMysql, DiWordpress, DiFirebase } from 'react-icons/di';
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiGoogletagmanager, SiGoogleanalytics, SiSemrush, SiHootsuite, SiCanva } from 'react-icons/si';


// Main Component
export default function App() {
    const techStack = [
        { name: "Google Analytics", icon: <SiGoogleanalytics className="text-6xl text-orange-500" /> },
        { name: "Google Ads", icon: <FaGoogle className="text-6xl text-blue-500" /> },
        { name: "Facebook Ads", icon: <FaFacebook className="text-6xl text-blue-700" /> },
        { name: "Mailchimp", icon: <FaMailchimp className="text-6xl text-yellow-500" /> },
        { name: "HubSpot", icon: <FaHubspot className="text-6xl text-orange-600" /> },
        { name: "SEMrush", icon: <SiSemrush className="text-6xl text-orange-700" /> },
        { name: "Hootsuite", icon: <SiHootsuite className="text-6xl text-gray-800" /> },
        { name: "Buffer", icon: <FaBuffer className="text-6xl text-gray-600" /> },
        { name: "Canva", icon: <SiCanva className="text-6xl text-cyan-500" /> },
        { name: "Instagram", icon: <FaInstagram className="text-6xl text-pink-500" /> },
        { name: "Twitter", icon: <FaTwitter className="text-6xl text-blue-400" /> },
        { name: "LinkedIn", icon: <FaLinkedin className="text-6xl text-blue-700" /> },
        { name: "YouTube", icon: <FaYoutube className="text-6xl text-red-600" /> },
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
                            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">Marketing Toolkit</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            We use industry-leading digital marketing tools and platforms to analyze, optimize, and amplify your brand’s reach and results across every channel.
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
