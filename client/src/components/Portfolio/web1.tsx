import React from 'react';
import { motion } from 'framer-motion';
import { Github, Link as LinkIcon, ChevronDown } from 'lucide-react';
import finalBackgroundImage from '/p3.png'; // Using the image import

// --- Sample Data ---
const project = {
    title: "Goru. Ecommerce",
    category: "Web Development",
    summary: "A conceptual operating system designed for creative professionals, focusing on a minimalist interface, fluid workflows, and deep hardware integration.",
    technologies: ['React', 'Electron', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Rust'],
    timeline: "4 Months",
    role: "Product Designer & Lead Developer",
    liveUrl: "#",
    repoUrl: "#",
    heroImage: "/p1.png",
    caseStudy: {
        objective: "The primary goal was to challenge the conventional desktop paradigm. We aimed to design an OS that feels less like a tool and more like an extension of the creative mind, minimizing distractions and maximizing focus.",
        challenge: "The biggest hurdle was creating a universally intuitive gesture-based navigation system that was powerful for pro users but easy for newcomers to discover. Balancing minimalism with functionality required constant iteration and user testing.",
        solution: "We developed a 'Command Palette' as the central hub for all actions, combined with a radial menu for context-aware tasks. This reduced UI clutter by over 80% compared to traditional OS layouts. The backend was built in Rust for performance and security.",
    }
};

// --- Animation Variants ---
const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
};
const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] } },
};

// --- The Main Component ---
const UniqueProjectPage: React.FC = () => {
    return (
        <div className="font-sans bg-black">
            {/* --- Hero Section --- */}
            <motion.div
                className="min-h-screen w-full relative flex flex-col items-center justify-center text-white"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
            >
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center"
                    style={{ backgroundImage: `linear-gradient(to top, black, rgba(0, 0, 0, 0.8), transparent), url(${project.heroImage})` }}
                    role="img"
                    aria-label={project.title}
                />
                <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8 text-left">
                    <motion.p variants={fadeIn} className="text-lg text-gray-300 mb-2">{project.category}</motion.p>
                    <motion.h1 variants={fadeIn} className="text-6xl md:text-8xl font-bold tracking-tight text-white">
                        {project.title}
                    </motion.h1>
                </div>
                <motion.div variants={fadeIn} className="absolute bottom-10 z-10 flex flex-col items-center gap-2 text-gray-400 animate-bounce">
                    <span className="text-sm">Scroll Down</span>
                    <ChevronDown size={24} />
                </motion.div>
            </motion.div>

            {/* --- White Content Container --- */}
            <div className="bg-white text-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
                        <motion.div className="lg:sticky top-24 h-fit" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8 }}>
                            <h2 className="text-3xl font-bold mb-6 text-black">Project Overview</h2>
                            <p className="text-gray-600 mb-8 leading-relaxed">{project.summary}</p>
                            <div className="space-y-4 border-t border-gray-200 pt-6">
                                <div className="flex flex-col items-start"><span className="font-semibold text-gray-500">Role</span><span className="font-medium text-gray-800">{project.role}</span></div>
                                <div className="flex flex-col items-start"><span className="font-semibold text-gray-500">Timeline</span><span className="font-medium text-gray-800">{project.timeline}</span></div>
                            </div>
                            <div className="mt-8 border-t border-gray-200 pt-6">
                                <h3 className="font-semibold text-gray-500 mb-4">Core Technologies</h3>
                                <div className="flex flex-wrap gap-2">{project.technologies.map(tech => (<span key={tech} className="bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">{tech}</span>))}</div>
                            </div>
                            <div className="flex gap-4 mt-10">
                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1 text-center bg-black text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center gap-2"><LinkIcon size={18} /> Live Demo</a>
                                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="flex-1 text-center bg-transparent border border-gray-300 text-black font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2"><Github size={18} /> Source</a>
                            </div>
                        </motion.div>
                        <motion.div className="lg:col-span-2 space-y-16" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
                            {Object.entries(project.caseStudy).map(([key, value]) => (<motion.div key={key} variants={fadeIn}><h3 className="text-2xl font-bold capitalize mb-4 relative pl-4 text-black after:content-[''] after:absolute after:left-0 after:top-1/2 after:-translate-y-1/2 after:w-1 after:h-6 after:bg-blue-500 after:rounded-full">{key}</h3><p className="text-gray-700 text-lg leading-relaxed">{value}</p></motion.div>))}
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* --- THIRD SECTION: Full-Screen Background Image --- */}
            <div
                className="h-screen w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${finalBackgroundImage})` }}
            >
                {/* This section is now just a full-screen background image, with no other content. */}
                    <div className="absolute w-[58.8%] h-[24.47%] top-[67%] left-[25.3%] overflow-hidden rounded-lg">
                        <iframe
                            src="https://html.themexplosion.com/goru/index.html"
                            title={project.title}
                            className="h-full w-full"
                            // This style now hides both vertical and horizontal scrollbars
                            style={{
                                width: 'calc(100% + 17px)',
                                height: 'calc(100% + 17px)',
                                border: 0
                            }}
                        ></iframe>
                    </div>
            </div>
        </div>
    );
};

export default UniqueProjectPage;