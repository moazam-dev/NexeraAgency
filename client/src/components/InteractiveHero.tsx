import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMousePosition } from "@/hooks/useMousePosition";
import { FaRegCalendarAlt } from "react-icons/fa";

const words = ["Excellence", "Innovation", "Solution"];

export default function InteractiveHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { x, y } = useMousePosition();
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const animationRef = useRef<number>();

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const particles: any[] = [];
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
        color: `hsl(${180 + Math.random() * 60}, 70%, 60%)`,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const gradient = ctx.createRadialGradient(
        x || canvas.width / 2,
        y || canvas.height / 2,
        0,
        x || canvas.width / 2,
        y || canvas.height / 2,
        Math.max(canvas.width, canvas.height) * 0.6
      );
      gradient.addColorStop(0, "rgba(0, 255, 255, 0.03)");
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        if (x && y) {
          const dx = x - particle.x;
          const dy = y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 150) {
            particle.vx += (dx / distance) * 0.02;
            particle.vy += (dy / distance) * 0.02;
          }
        }

        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vx *= 0.99;
        particle.vy *= 0.99;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.fill();
      });

      particles.forEach((p1, i) => {
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = "rgba(0, 255, 255, 0.1)";
            ctx.globalAlpha = 0.3 - (dist / 100) * 0.3;
            ctx.stroke();
          }
        }
      });

      ctx.globalAlpha = 1;
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [x, y]);

  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden mt-5">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 1 }}
      />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-5xl md:text-6xl lg:text-8xl font-black leading-[0.8] tracking-wide mb-6 italic"
        >
          If (Client): <br /><span className=" italic text-1xl">return</span>
          <br />
          <AnimatePresence mode="wait">
            <motion.span
              key={currentIndex}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-gradient-to-r from-[var(--accent-teal)] to-[var(--accent-green)] bg-clip-text text-transparent inline-block italic"
            >
              {words[currentIndex]}
            </motion.span>
          </AnimatePresence>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-lg md:text-xl lg:text-2xl text-gray-400 mb-10 max-w-3xl leading-relaxed"
        >
          Building powerful solutions through <br className="hidden sm:inline" />
          high-performing{" "}
          {/* --- SPAN FOR "digital innovation." - Hover effect removed --- */}
          <span className="bg-[#2e2e2e] text-white italic px-2 py-0 rounded-full inline-block">
            digital innovation.
          </span>
          {/* --- END OF SPAN MODIFICATION --- */}
        </motion.p>

        {/* --- START OF THE MODIFIED BUTTON CODE --- */}
        <motion.button
          // Added transition-all and direct hover:bg-gradient styles
          className="relative flex items-center justify-center px-6 py-3 md:px-10 md:py-4 bg-white rounded-full text-lg md:text-xl font-bold overflow-hidden group transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gradient-to-r hover:from-[var(--accent-green)] hover:to-[var(--accent-teal)]"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Text: Dark initially, white on hover */}
          <span className="relative z-20 mr-3 md:mr-4 font-['Bebas_Neue'] text-lg md:text-xl tracking-wider text-[#2e2e2e] group-hover:text-white transition-colors duration-300">
            FREE STRATEGY CALL
          </span>
          {/* Icon Container: Black circle initially, transparent on hover, icon inside remains white */}
          <div className="relative z-20 w-10 h-10 md:w-12 md:h-12 bg-black rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-transparent">
            <motion.div
              className="flex items-center justify-center"
              initial={{ rotate: 0 }}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <FaRegCalendarAlt className="text-white text-xl md:text-2xl" />
            </motion.div>
          </div>

          {/* The absolute overlay div is now REMOVED as the main button handles the gradient */}
        </motion.button>
        {/* --- END OF THE MODIFIED BUTTON CODE --- */}

      </div>
    </section>
  );
}