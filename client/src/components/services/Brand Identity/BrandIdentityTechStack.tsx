import React from 'react';
import { motion } from "framer-motion";
import {
    FaFigma,
    FaPenNib,
    FaPalette,
    FaWordpress,
    FaShopify,
    FaCamera,
    FaVideo,
    FaLightbulb
} from 'react-icons/fa';
import { SiAdobephotoshop, SiAdobeillustrator, SiAdobeindesign, SiCanva } from 'react-icons/si';

// Main Component
export default function App() {
    const brandToolkit = [
        { name: "Figma", icon: <FaFigma className="text-6xl text-purple-600" /> },
        { name: "Photoshop", icon: <SiAdobephotoshop className="text-6xl text-blue-500" /> },
        { name: "Illustrator", icon: <SiAdobeillustrator className="text-6xl text-orange-500" /> },
        { name: "InDesign", icon: <SiAdobeindesign className="text-6xl text-pink-500" /> },
        { name: "Brand Strategy", icon: <FaLightbulb className="text-6xl text-yellow-500" /> },
        { name: "Logo Design", icon: <FaPenNib className="text-6xl text-gray-800" /> },
        { name: "Color Theory", icon: <FaPalette className="text-6xl text-teal-500" /> },
        { name: "Photography", icon: <FaCamera className="text-6xl text-gray-600" /> },
        { name: "Videography", icon: <FaVideo className="text-6xl text-red-600" /> },
        { name: "Canva", icon: <SiCanva className="text-6xl text-cyan-500" /> },
        
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
                            Our <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">Branding Toolkit</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            We use a powerful suite of industry-leading tools and creative processes to build memorable and impactful brand identities.
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
                        {brandToolkit.map((tool) => (
                            <motion.div
                                key={tool.name}
                                variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
                                className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                            >
                                <div className="mb-4">
                                    {tool.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 text-center">
                                    {tool.name}
                                </h3>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
