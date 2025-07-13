import { useEffect, useRef } from "react";
import { useMousePosition } from "@/hooks/useMousePosition";

export default function ContactBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { x: mouseX, y: mouseY } = useMousePosition();
  const animationRef = useRef<number>();
  const particlesRef = useRef<Array<{
    x: number;
    y: number;
    vx: number;
    vy: number;
    opacity: number;
    size: number;
    connections: number[];
  }>>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const updateCanvasSize = () => {
      const container = canvas.parentElement;
      if (!container) return;
      
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    // Initialize particle network
    const initParticles = () => {
      particlesRef.current = [];
      const particleCount = 50;
      
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          opacity: Math.random() * 0.8 + 0.2,
          size: Math.random() * 3 + 1,
          connections: []
        });
      }
    };

    initParticles();

    const animate = (time: number) => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update particles
      particlesRef.current.forEach((particle, index) => {
        // Mouse influence
        const dx = mouseX - particle.x;
        const dy = mouseY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150) {
          const force = (150 - distance) / 150;
          particle.vx += (dx / distance) * force * 0.01;
          particle.vy += (dy / distance) * force * 0.01;
        }

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Boundary wrapping
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Damping
        particle.vx *= 0.99;
        particle.vy *= 0.99;

        // Find connections
        particle.connections = [];
        particlesRef.current.forEach((other, otherIndex) => {
          if (index !== otherIndex) {
            const dx = particle.x - other.x;
            const dy = particle.y - other.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 120) {
              particle.connections.push(otherIndex);
            }
          }
        });

        // Draw particle
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        
        // Particle glow
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 3
        );
        gradient.addColorStop(0, 'rgba(45, 212, 191, 0.8)');
        gradient.addColorStop(0.5, 'rgba(16, 185, 129, 0.4)');
        gradient.addColorStop(1, 'rgba(45, 212, 191, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
        ctx.fill();
        
        // Core particle
        ctx.fillStyle = 'rgba(45, 212, 191, 1)';
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
      });

      // Draw connections
      ctx.save();
      ctx.strokeStyle = 'rgba(45, 212, 191, 0.1)';
      ctx.lineWidth = 1;
      
      particlesRef.current.forEach((particle, index) => {
        particle.connections.forEach(connectionIndex => {
          if (connectionIndex > index) { // Avoid drawing the same line twice
            const other = particlesRef.current[connectionIndex];
            const dx = particle.x - other.x;
            const dy = particle.y - other.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            ctx.globalAlpha = Math.max(0, (120 - distance) / 120) * 0.3;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        });
      });
      
      ctx.restore();

      // Flowing grid effect
      const gridSize = 60;
      const offsetX = (time * 0.0005) % gridSize;
      const offsetY = (time * 0.0003) % gridSize;
      
      ctx.save();
      ctx.strokeStyle = 'rgba(45, 212, 191, 0.05)';
      ctx.lineWidth = 1;
      
      for (let x = -gridSize + offsetX; x < canvas.width + gridSize; x += gridSize) {
        ctx.globalAlpha = 0.05 + Math.sin(time * 0.001 + x * 0.01) * 0.02;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      for (let y = -gridSize + offsetY; y < canvas.height + gridSize; y += gridSize) {
        ctx.globalAlpha = 0.05 + Math.cos(time * 0.001 + y * 0.01) * 0.02;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
      
      ctx.restore();

      animationRef.current = requestAnimationFrame(animate);
    };

    animate(0);

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mouseX, mouseY]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ 
          mixBlendMode: 'screen',
          opacity: 0.7
        }}
      />
      
      {/* Additional CSS-based effects */}
      <div className="absolute inset-0">
        {/* Floating orbs */}
        <div className="contact-orb contact-orb-1"></div>
        <div className="contact-orb contact-orb-2"></div>
        <div className="contact-orb contact-orb-3"></div>
        
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gray-900/10 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-[var(--accent-teal)]/5 via-transparent to-[var(--accent-green)]/5"></div>
      </div>
    </div>
  );
}