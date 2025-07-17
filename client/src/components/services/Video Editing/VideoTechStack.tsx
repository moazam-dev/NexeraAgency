import React from 'react';
import { motion } from "framer-motion";

// Main Component
export default function App() {
    // Fallback handler for broken image links.
    // If an image fails to load, it replaces the source with a placeholder image.
    const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        const img = e.target as HTMLImageElement;
        img.onerror = null; // Prevents infinite loops if the placeholder also fails
        const altText = img.alt || 'Icon';
        // Creates a placeholder with the first 3 letters of the alt text
        img.src = `https://placehold.co/48x48/f0f0f0/999?text=${encodeURIComponent(altText.substring(0,3))}`;
    };

    // Array of technologies with their names and icons.
    // URLs have been updated for stability and an onError handler has been added.
    const techStack = [
        { name: "Adobe Premiere Pro", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-original.svg" alt="Premiere Pro" className="w-12 h-12" onError={handleImageError} /> },
        { name: "Final Cut Pro", icon: <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Final_Cut_Pro_X_logo.png" alt="Final Cut Pro" className="w-12 h-12 rounded" onError={handleImageError} /> },
        { name: "DaVinci Resolve", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/davinciresolve/davinciresolve-original.svg" alt="DaVinci Resolve" className="w-12 h-12" onError={handleImageError} /> },
        { name: "Adobe After Effects", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-original.svg" alt="After Effects" className="w-12 h-12" onError={handleImageError} /> },
        { name: "Adobe Audition", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/audition/audition-original.svg" alt="Audition" className="w-12 h-12" onError={handleImageError} /> },
        { name: "Adobe Photoshop", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" alt="Photoshop" className="w-12 h-12" onError={handleImageError} /> },
        { name: "Adobe Illustrator", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg" alt="Illustrator" className="w-12 h-12" onError={handleImageError} /> },
        { name: "Blender", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg" alt="Blender" className="w-12 h-12" onError={handleImageError} /> },
        { name: "OBS Studio", icon: <img src="https://upload.wikimedia.org/wikipedia/commons/5/5f/OBS_Studio_Logo.svg" alt="OBS Studio" className="w-12 h-12" onError={handleImageError} /> },
        { name: "Camtasia", icon: <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Camtasia_Logo.png" alt="Camtasia" className="w-12 h-12 rounded" onError={handleImageError} /> },
        { name: "Logic Pro", icon: <img src="https://upload.wikimedia.org/wikipedia/commons/2/21/Logic_Pro_X_icon.png" alt="Logic Pro" className="w-12 h-12 rounded" onError={handleImageError} /> },
        { name: "GarageBand", icon: <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/GarageBand_icon.png" alt="GarageBand" className="w-12 h-12 rounded" onError={handleImageError} /> },
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
                            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">Video Creation Toolkit</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            We use industry-leading video editing, motion graphics, and audio tools to deliver cinematic edits, stunning effects, and professional sound for every project.
                        </p>
                    </motion.div>

                    {/* Tech Stack Grid */}
                    <motion.div
                        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8"
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
                                <div className="mb-4 flex-shrink-0 w-12 h-12 flex items-center justify-center">
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
