import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";

export default function WebDevelopmentProcess() {
  const { ref, isInView } = useScrollAnimation();
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const processSteps = [
    {
      id: 1,
      title: "Discovery & Planning",
      description: "We immerse ourselves in your vision, defining project goals, target audience, and functional requirements. This initial phase sets a clear roadmap for success.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      position: { x: 150, y: 120 }
    },
    {
      id: 2,
      title: "Design & Prototyping", 
      description: "From wireframes to interactive prototypes, we meticulously craft intuitive user interfaces and experiences, ensuring a visually appealing and highly usable design.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5H9a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2z" />
        </svg>
      ),
      position: { x: 400, y: 80 }
    },
    {
      id: 3,
      title: "Development & Coding",
      description: "Our expert developers bring your design to life using cutting-edge technologies, writing clean, efficient, and scalable code.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      position: { x: 650, y: 150 }
    },
    {
      id: 4,
      title: "Testing & Quality Assurance",
      description: "Rigorous testing across devices and browsers ensures a bug-free and high-performing website. We conduct extensive QA to guarantee a flawless user experience.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      position: { x: 550, y: 320 }
    },
    {
      id: 5,
      title: "Launch & Deployment",
      description: "After final approvals, we handle seamless deployment to your chosen hosting environment, minimizing downtime and ensuring a smooth transition for your users.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      ),
      position: { x: 300, y: 350 }
    },
    {
      id: 6,
      title: "Post-Launch Support & Maintenance",
      description: "Our commitment extends beyond launch. We provide ongoing maintenance, security updates, performance monitoring, and timely support to keep your website optimal.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      position: { x: 100, y: 280 }
    }
  ];

  return (
    <section id="web-development-process" className="py-24 bg-white" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Our Web Development Process
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A transparent journey from concept to successful launch.
          </p>
        </motion.div>

        {/* Process Infographic */}
        <div className="process-infographic relative max-w-6xl mx-auto mb-20">
          {/* Background Container */}
          <div className="relative min-h-[500px] bg-gradient-to-br from-blue-50/80 via-white to-teal-50/80 rounded-3xl p-8 overflow-hidden">
            
            {/* Central Energy Element */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-teal-500 to-green-500 rounded-full flex items-center justify-center text-white text-2xl shadow-lg z-10"
              style={{ animation: 'pulse 3s ease-in-out infinite' }}
            >
              ⚡
            </motion.div>

            {/* Animated SVG Path */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 400" style={{ zIndex: 1 }}>
              <defs>
                <linearGradient id="gradient-path" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#14b8a6" />
                  <stop offset="50%" stopColor="#06b6d4" />
                  <stop offset="100%" stopColor="#10b981" />
                </linearGradient>
              </defs>
              
              <motion.path
                d="M150,120 Q250,60 400,80 Q550,100 650,150 Q680,200 550,320 Q400,360 300,350 Q150,340 100,280 Q80,220 150,120"
                fill="none"
                stroke="url(#gradient-path)"
                strokeWidth="4"
                strokeDasharray="1000"
                initial={{ strokeDashoffset: 1000 }}
                animate={isInView ? { strokeDashoffset: 0 } : {}}
                transition={{ duration: 3, delay: 1, ease: "easeInOut" }}
              />
            </svg>

            {/* Process Nodes */}
            {processSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.3 + 1.5 }}
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 ${
                  hoveredStep === step.id ? 'scale-110' : ''
                }`}
                style={{ left: `${(step.position.x / 800) * 100}%`, top: `${(step.position.y / 400) * 100}%`, zIndex: 5 }}
                onMouseEnter={() => setHoveredStep(step.id)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                <div className={`w-20 h-20 bg-white rounded-full border-4 border-teal-500 flex flex-col items-center justify-center shadow-lg transition-all duration-300 ${
                  hoveredStep === step.id ? 'border-teal-600 shadow-xl bg-teal-50' : ''
                }`}>
                  <div className={`text-teal-600 mb-1 transition-colors duration-300 ${
                    hoveredStep === step.id ? 'text-teal-700' : ''
                  }`}>
                    {step.icon}
                  </div>
                  <div className={`text-lg font-bold text-teal-600 transition-colors duration-300 ${
                    hoveredStep === step.id ? 'text-teal-700' : ''
                  }`}>
                    {step.id}
                  </div>
                </div>

                {/* Glow Effect on Hover */}
                {hoveredStep === step.id && (
                  <motion.div
                    className="absolute inset-0 bg-teal-400 rounded-full opacity-20"
                    initial={{ scale: 1 }}
                    animate={{ scale: 1.3 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process Step Labels */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 + 2.5 }}
              className={`process-step-label p-6 rounded-xl transition-all duration-300 ${
                hoveredStep === step.id 
                  ? 'bg-teal-50 border-2 border-teal-200 shadow-lg transform -translate-y-2' 
                  : 'bg-gray-50 border-2 border-gray-100 shadow-md hover:shadow-lg'
              }`}
              onMouseEnter={() => setHoveredStep(step.id)}
              onMouseLeave={() => setHoveredStep(null)}
            >
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg transition-all duration-300 ${
                  hoveredStep === step.id ? 'bg-teal-600 scale-110' : 'bg-teal-500'
                }`}>
                  {step.id}
                </div>
                <div className="flex-1">
                  <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
                    hoveredStep === step.id ? 'text-teal-700' : 'text-gray-900'
                  }`}>
                    {step.title}
                  </h3>
                  <p className={`leading-relaxed transition-colors duration-300 ${
                    hoveredStep === step.id ? 'text-gray-700' : 'text-gray-600'
                  }`}>
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}