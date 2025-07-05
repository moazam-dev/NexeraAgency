import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import InteractiveBackground from "./InteractiveBackground";
import { useMousePosition } from "@/hooks/useMousePosition";

export default function Hero() {
  const mousePosition = useMousePosition();
  const heroRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    // Add floating particles that follow mouse
    const particles = document.querySelectorAll(".particle");
    particles.forEach((particle, index) => {
      const element = particle as HTMLElement;
      const delay = index * 0.1;
      const offsetX = (mousePosition.x - window.innerWidth / 2) * (0.05 + index * 0.01);
      const offsetY = (mousePosition.y - window.innerHeight / 2) * (0.05 + index * 0.01);
      
      element.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      element.style.transitionDelay = `${delay}s`;
    });
  }, [mousePosition]);

  return (
    <section className="hero-bg min-h-screen flex items-center justify-center relative overflow-hidden" ref={heroRef}>
      <InteractiveBackground />
      
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="particle w-2 h-2 top-1/4 left-1/4" style={{ animationDelay: "0s" }}></div>
        <div className="particle w-3 h-3 top-1/3 right-1/3" style={{ animationDelay: "1s" }}></div>
        <div className="particle w-1 h-1 bottom-1/4 left-1/2" style={{ animationDelay: "2s" }}></div>
        <div className="particle w-2 h-2 top-1/2 right-1/4" style={{ animationDelay: "3s" }}></div>
        <div className="particle w-2 h-2 top-3/4 left-1/3" style={{ animationDelay: "4s" }}></div>
        <div className="particle w-1 h-1 top-1/5 right-1/2" style={{ animationDelay: "5s" }}></div>
      </div>
      
      <div className="text-center z-10 px-6 max-w-6xl mx-10">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-black mb-8 leading-tight">
          Exceptional<br />
          <span className="gradient-text">Digital Solutions</span>
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          We create stunning digital experiences that drive results and exceed expectations
        </p>
        <Button 
          onClick={scrollToContact}
          className="bg-gradient-to-r from-[var(--accent-teal)] to-[var(--accent-green)] text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300"
        >
          Let's Talk
        </Button>
      </div>
    </section>
  );
}
