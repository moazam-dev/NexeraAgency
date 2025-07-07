import { useEffect, useRef } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function ApproachBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<Array<{
    x: number;
    y: number;
    vx: number;
    vy: number;
    opacity: number;
    size: number;
    type: 'circle' | 'triangle' | 'square';
  }>>([]);

  useScrollAnimation(containerRef);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const updateCanvasSize = () => {
      const container = containerRef.current;
      if (!container) return;
      
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    // Initialize particles
    const initParticles = () => {
      particlesRef.current = [];
      for (let i = 0; i < 15; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.3 + 0.1,
          size: Math.random() * 60 + 20,
          type: ['circle', 'triangle', 'square'][Math.floor(Math.random() * 3)] as 'circle' | 'triangle' | 'square'
        });
      }
    };

    initParticles();

    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current.forEach(particle => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < -particle.size) particle.x = canvas.width + particle.size;
        if (particle.x > canvas.width + particle.size) particle.x = -particle.size;
        if (particle.y < -particle.size) particle.y = canvas.height + particle.size;
        if (particle.y > canvas.height + particle.size) particle.y = -particle.size;

        // Set drawing properties
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        
        // Create gradient
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size / 2
        );
        gradient.addColorStop(0, 'rgba(45, 212, 191, 0.8)');
        gradient.addColorStop(0.5, 'rgba(16, 185, 129, 0.4)');
        gradient.addColorStop(1, 'rgba(45, 212, 191, 0.1)');
        
        ctx.fillStyle = gradient;
        ctx.strokeStyle = 'rgba(45, 212, 191, 0.2)';
        ctx.lineWidth = 1;

        // Draw different shapes
        ctx.beginPath();
        switch (particle.type) {
          case 'circle':
            ctx.arc(particle.x, particle.y, particle.size / 2, 0, Math.PI * 2);
            break;
          case 'triangle':
            ctx.moveTo(particle.x, particle.y - particle.size / 2);
            ctx.lineTo(particle.x - particle.size / 2, particle.y + particle.size / 2);
            ctx.lineTo(particle.x + particle.size / 2, particle.y + particle.size / 2);
            ctx.closePath();
            break;
          case 'square':
            ctx.rect(particle.x - particle.size / 2, particle.y - particle.size / 2, particle.size, particle.size);
            break;
        }
        
        ctx.fill();
        ctx.stroke();
        ctx.restore();
      });

      // Draw connecting lines
      ctx.save();
      ctx.globalAlpha = 0.1;
      ctx.strokeStyle = 'rgba(45, 212, 191, 0.3)';
      ctx.lineWidth = 1;
      
      particlesRef.current.forEach((particle, i) => {
        particlesRef.current.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 200) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });
      ctx.restore();

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ 
          mixBlendMode: 'multiply',
          opacity: 0.6
        }}
      />
      
      {/* Additional CSS-based abstract elements */}
      <div className="absolute inset-0">
        <div className="floating-orb floating-orb-1"></div>
        <div className="floating-orb floating-orb-2"></div>
        <div className="floating-orb floating-orb-3"></div>
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black-50/20 to-transparent text-white"></div>
    </div>
  );
}