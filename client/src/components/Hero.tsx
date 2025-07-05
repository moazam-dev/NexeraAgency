import { useEffect, useRef } from "react";
import InteractiveBackground from "./InteractiveBackground";
import { useMousePosition } from "@/hooks/useMousePosition";

const CombinedHeroSection = () => {
  const mousePosition = useMousePosition();
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const particles = document.querySelectorAll(".particle");
    particles.forEach((particle, index) => {
      const element = particle as HTMLElement;
      const delay = index * 0.1;
      const offsetX =
        (mousePosition.x - window.innerWidth / 2) * (0.05 + index * 0.01);
      const offsetY =
        (mousePosition.y - window.innerHeight / 2) * (0.05 + index * 0.01);

      element.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      element.style.transitionDelay = `${delay}s`;
    });
  }, [mousePosition]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center text-white overflow-hidden bg-black"
    >
      <InteractiveBackground />

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="particle w-2 h-2 bg-white absolute top-1/4 left-1/4 rounded-full"></div>
        <div className="particle w-3 h-3 bg-white absolute top-1/3 right-1/3 rounded-full"></div>
        <div className="particle w-1 h-1 bg-white absolute bottom-1/4 left-1/2 rounded-full"></div>
        <div className="particle w-2 h-2 bg-white absolute top-1/2 right-1/4 rounded-full"></div>
        <div className="particle w-2 h-2 bg-white absolute top-3/4 left-1/3 rounded-full"></div>
        <div className="particle w-1 h-1 bg-white absolute top-1/5 right-1/2 rounded-full"></div>
      </div>

      {/* Main Hero Content */}
      <div className="text-center z-10 px-6 max-w-6xl mx-auto mt-2">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-black mb-8 leading-tight font-bebas tracking-wide">
          Exceptional <br />
          <span className="text-pink-500">Digital</span> <br />
          Experiences
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Driving growth for leading brands through <br className="hidden sm:inline" />
          high-performing{' '}
          <span className="bg-neutral-800 text-white italic px-2 py-0 rounded-xl inline-block">
            software solutions.
          </span>
        </p>
      </div>
    </section>
  );
};

export default CombinedHeroSection;
