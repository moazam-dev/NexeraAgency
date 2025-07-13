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
        { icon: <ShieldCheck size={28} className="text-white" />, title: "Secure by Design", description: "In finance, precision and performance are paramount. We build secure web portals and mobile banking apps that allow seamless, 24/7 access to services. Our solutions integrate payment gateways and transaction tracking.", delay: 0.1 },
        { icon: <Zap size={28} className="text-white" />, title: "Blazing Performance", description: "From real-time tracking systems to warehouse management apps, we create custom digital platforms that provide end-to-end visibility into your supply chain operations, improving efficiency and decision-making.", delay: 0.2 },
        { icon: <Puzzle size={28} className="text-white" />, title: "Modular Architecture", description: "Digital solutions in healthcare must adhere to strict regulations like HIPAA and GDPR. We develop secure patient portals, telemedicine apps, and healthcare management systems that streamline operations.", delay: 0.3 },
        { icon: <TrendingUp size={28} className="text-white" />, title: "Growth-Driven", description: "In the competitive retail landscape, a fast, smooth, and responsive platform is essential for customer retention. We specialize in building custom e-commerce websites and mobile apps that integrate seamlessly.", delay: 0.4 },
        { icon: <Paintbrush size={28} className="text-white" />, title: "Bespoke Aesthetics", description: "We build scalable Learning Management Systems (LMS) that offer interactive, customizable content and data-driven insights. Our platforms are ideal for schools, universities, and corporate training programs.", delay: 0.5 },
        { icon: <Scaling size={28} className="text-white" />, title: "Scalable Systems", description: "We create robust and scalable systems that can handle high traffic and complex processes, ensuring your application remains stable and performant as your user base grows. Our architecture is built for the future.", delay: 0.6 },
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
                        Why Choose Us for {' '}
                        <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">
                            Custom
                            <AnimatedUnderline />
                        </span>
                        {' '}Web Development Services
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
                        Let’s Build Something Unforgettable
                        <ArrowRight className="inline-block ml-2 -mr-1 transition-transform duration-300 group-hover:translate-x-1" size={20} />
                    </motion.button>
                </motion.div>
            </section>
        </div>
    );
}
