import React from 'react';
import { motion } from "framer-motion";
import {
    FaWordpress,
    FaYoutube,
    FaInstagram,
    FaTwitter,
    FaFacebook,
    FaCameraRetro,
    FaPenNib,
    FaFileVideo,
    FaPaintBrush
} from 'react-icons/fa';
import { SiAdobecreativecloud, SiCanva, SiHootsuite, SiGrammarly, SiGoogleanalytics } from 'react-icons/si';


// Main Component
export default function App() {
    const techStack = [
        { name: "Adobe Creative Cloud", icon: <SiAdobecreativecloud className="text-6xl text-pink-500" /> },
        { name: "Canva", icon: <SiCanva className="text-6xl text-cyan-500" /> },
        { name: "Hootsuite", icon: <SiHootsuite className="text-6xl text-gray-900" /> },
        { name: "Grammarly", icon: <SiGrammarly className="text-6xl text-green-500" /> },
        { name: "Google Analytics", icon: <SiGoogleanalytics className="text-6xl text-orange-500" /> },
        { name: "YouTube", icon: <FaYoutube className="text-6xl text-red-600" /> },
        { name: "Instagram", icon: <FaInstagram className="text-6xl text-pink-600" /> },
        { name: "Twitter", icon: <FaTwitter className="text-6xl text-blue-400" /> },
        { name: "Facebook", icon: <FaFacebook className="text-6xl text-blue-700" /> },
        { name: "Photography", icon: <FaCameraRetro className="text-6xl text-gray-700" /> },
        { name: "Copywriting", icon: <FaPenNib className="text-6xl text-yellow-700" /> },
        { name: "Video Editing", icon: <FaFileVideo className="text-6xl text-purple-700" /> },
        { name: "Graphic Design", icon: <FaPaintBrush className="text-6xl text-green-700" /> },
    ];

    return (
        <div className="bg-white font-sans antialiased">
            <section id="content-creation-tools" className="py-20 bg-white">
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
                            Our <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">Content Creation Toolkit</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            We utilize industry-leading tools and platforms to craft, edit, and distribute high-quality content across all digital channels.
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
