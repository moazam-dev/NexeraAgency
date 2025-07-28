import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Zap, Puzzle, TrendingUp, Paintbrush, Scaling } from 'lucide-react';

// Animated Underline for the "Custom" keyword
const AnimatedUnderline = () => (
    <motion.svg
        className="absolute -bottom-1 left-0 w-full h-2"
        viewBox="0 0 100 4"
        preserveAspectRatio="none"
        aria-hidden="true"
    >
        <motion.path
            d="M 0,2 L 100,2"
            stroke="url(#underline-gradient)"
            strokeWidth="4"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "circOut", delay: 0.5 }}
        />
        <defs>
            <linearGradient id="underline-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#4ade80" />
                <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
        </defs>
    </motion.svg>
);

// Define the type for the FeatureCard props
interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    delay: number;
}

// Feature Card Component for the grid
const FeatureCard = ({ icon, title, description, delay }: FeatureCardProps) => {
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: 'easeOut', delay }
        }
    };

    return (
        <motion.div
            className="bg-white p-8 flex flex-col items-start text-left space-y-4"
            variants={cardVariants}
            whileHover={{ 
                backgroundColor: 'rgba(249, 250, 251, 1)', // Equivalent to hover:bg-gray-50
                transition: { duration: 0.2 } 
            }}
        >
            <div className="w-14 h-14 p-3 rounded-full flex items-center justify-center bg-gradient-to-br from-green-400 to-blue-600 shadow-md">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900">{title}</h3>
            <p className="text-gray-600 leading-relaxed">{description}</p>
        </motion.div>
    );
};

// Main Component
export default function App() {
    const features = [
        { icon: <ShieldCheck size={28} className="text-white" />, title: "Creative Excellence", description: "Our team of writers, designers, and strategists deliver original, high-impact content that captures attention and inspires action across all digital channels.", delay: 0.1 },
        { icon: <Zap size={28} className="text-white" />, title: "Strategic Storytelling", description: "We craft compelling narratives that align with your brand’s voice and business goals, ensuring every piece of content resonates with your target audience.", delay: 0.2 },
        { icon: <Puzzle size={28} className="text-white" />, title: "Multi-Platform Expertise", description: "From blogs and social media to video and infographics, we create and adapt content for every platform, maximizing your reach and engagement.", delay: 0.3 },
        { icon: <TrendingUp size={28} className="text-white" />, title: "Data-Driven Results", description: "We use analytics and performance insights to refine your content strategy, ensuring continuous improvement and measurable ROI.", delay: 0.4 },
        { icon: <Paintbrush size={28} className="text-white" />, title: "Brand Consistency", description: "We maintain a cohesive brand identity across all content, building trust and recognition with your audience at every touchpoint.", delay: 0.5 },
        { icon: <Scaling size={28} className="text-white" />, title: "Scalable Solutions", description: "Whether you need a single campaign or ongoing content support, our flexible approach scales with your needs and business growth.", delay: 0.6 },
    ];

    return (
        <div className="bg-white font-sans antialiased">
            <section className="max-w-7xl mx-auto py-24 px-6 sm:px-10 lg:px-20 text-center">
                {/* Heading Block */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        visible: { transition: { staggerChildren: 0.1 } }
                    }}
                    className="mb-20"
                >
                    <motion.h1
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className="text-6xl leading-tight tracking-tight font-bold text-gray-900 text-left"
                    >
                        Why Choose Nexera for {' '}
                        <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">
                            Content Creation
                            <AnimatedUnderline />
                        </span>
                        {' '}Services
                    </motion.h1>
                </motion.div>

                {/* Feature Grid */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 border border-gray-200 overflow-hidden"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={{
                        visible: { transition: { staggerChildren: 0.1 } }
                    }}
                >
                    {features.map((feature) => (
                        <FeatureCard key={feature.title} {...feature} />
                    ))}
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
                    className="mt-20"
                >
                    <motion.button
                        className="group rounded-full px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold shadow-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
                        whileHover={{ y: -2, boxShadow: '0 6px 20px rgba(0, 0, 0, 0.2)' }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Start Your Content Journey
                        <ArrowRight className="inline-block ml-2 -mr-1 transition-transform duration-300 group-hover:translate-x-1" size={20} />
                    </motion.button>
                </motion.div>
            </section>
        </div>
    );
}
