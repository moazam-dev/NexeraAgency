import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const headline = headlineRef.current;
    if (!headline) return;

    const text = headline.textContent || '';
    headline.innerHTML = '';

    text.split('').forEach((char, index) => {
      const span = document.createElement('span');
      span.textContent = char === ' ' ? '\u00A0' : char;
      span.className = 'char-reveal';
      span.style.animationDelay = `${index * 0.05}s`;
      headline.appendChild(span);
    });
  }, []);

  return (
    <section className="hero-bg-image min-h-screen flex items-center relative overflow-hidden">
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70 z-10"></div>
      
      {/* Floating Orbs */}
      <div className="floating-orb floating-orb-1 opacity-20"></div>
      <div className="floating-orb floating-orb-2 opacity-20"></div>
      <div className="floating-orb floating-orb-3 opacity-20"></div>
      
      {/* Particles */}
      <div className="particle" style={{ left: '10%' }}></div>
      <div className="particle" style={{ left: '20%' }}></div>
      <div className="particle" style={{ left: '30%' }}></div>
      <div className="particle" style={{ left: '70%' }}></div>
      <div className="particle" style={{ left: '90%' }}></div>
      
      <div className="container mx-auto px-6 relative z-20">
        <div className="flex items-center min-h-screen">
          {/* Left-aligned content block */}
          <div className="w-full max-w-2xl lg:max-w-3xl xl:max-w-4xl">
            {/* Headline */}
            <h1 
              ref={headlineRef}
              className="massive-text gradient-text mb-6 text-left"
            >
              Your Web Vision, Realized
            </h1>
            
            {/* Body Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg md:text-xl mb-8 text-white font-light leading-relaxed max-w-xl lg:max-w-2xl"
            >
              We craft bespoke digital experiences that drive engagement and deliver measurable results, 
              powered by cutting-edge technology and creative design.
            </motion.p>
            
            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex justify-start"
            >
              <button className="email-button px-10 py-4 rounded-lg text-white font-medium text-lg transition-all duration-300">
                Want to Build?
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
