import { Heart, MessageCircle, Send } from "lucide-react";
import { useEffect, useState } from "react";

export default function SocialImpact() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById("social-impact");
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const imageCards = [
    {
      id: 1,
      image: "/api/placeholder/300/200",
      alt: "Group photo of charity participants",
      position: { top: "15%", left: "8%" },
      delay: 0.2
    },
    {
      id: 2,
      image: "/api/placeholder/280/220",
      alt: "Two individuals helping community",
      position: { top: "12%", right: "10%" },
      delay: 0.4
    },
    {
      id: 3,
      image: "/api/placeholder/260/180",
      alt: "White tote bag with custom design",
      position: { bottom: "25%", left: "12%" },
      delay: 0.6
    },
    {
      id: 4,
      image: "/api/placeholder/280/200",
      alt: "Gift box with products and packing",
      position: { bottom: "20%", right: "15%" },
      delay: 0.8
    }
  ];

  return (
    <section id="social-impact" className="min-h-screen py-20 px-6 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white relative overflow-hidden">
      {/* Abstract gradient background */}
      <div className="absolute inset-0">
        {/* Large gradient shape from left */}
        <div className="absolute -left-40 top-0 bottom-0 w-2/3 bg-gradient-to-r from-[var(--accent-green)]/30 via-[var(--accent-teal)]/20 to-blue-600/15 blur-3xl transform -rotate-12"></div>
        
        {/* Particle effects */}
        <div className="absolute inset-0">
          {[...Array(80)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full particle-glow"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
        
        {/* Additional gradient overlays */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-600/20 to-[var(--accent-teal)]/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-to-br from-[var(--accent-green)]/15 to-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Central content */}
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center relative">
          {/* UM Store tag */}
          <div className={`inline-flex items-center space-x-2 bg-gray-800/60 backdrop-blur-sm px-4 py-2 rounded-full mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="w-2 h-2 bg-[var(--accent-teal)] rounded-full"></div>
            <span className="text-sm font-medium tracking-wide">UM STORE</span>
          </div>

          {/* Main heading */}
          <h2 className={`text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-8 max-w-4xl transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            We donate and<br />
            engage in <span className="italic text-blue-200">charity</span><br />
            work for Pakistan
          </h2>

          {/* Central brand card */}
          <div className={`floating-card bg-gray-800/40 backdrop-blur-sm rounded-2xl p-6 flex flex-col items-center space-y-3 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="w-16 h-16 bg-gradient-to-br from-[var(--accent-green)] to-blue-500 rounded-2xl flex items-center justify-center">
              <Heart className="h-8 w-8 text-white fill-current" />
            </div>
            <div className="text-center">
              <div className="font-bold text-lg">@um.str</div>
              <div className="text-sm text-gray-300">UM Store, patriotic clothes & candles</div>
            </div>
          </div>
        </div>

        {/* Floating image cards */}
        {imageCards.map((card) => (
          <div
            key={card.id}
            className={`floating-card absolute rounded-2xl overflow-hidden bg-gray-800/60 backdrop-blur-sm shadow-2xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{
              ...card.position,
              animationDelay: `${card.delay}s`,
              transform: `translateY(${Math.sin(Date.now() * 0.001 + card.id) * 10}px)`
            }}
          >
            {/* Image placeholder with gradient overlay */}
            <div className="relative">
              <div className="w-64 h-48 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                <div className="text-gray-500 text-sm text-center">
                  Pakistan Charity<br />Image {card.id}
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Social interaction icons */}
            <div className="absolute bottom-3 left-3 flex space-x-3">
              <button className="w-8 h-8 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/70 transition-colors">
                <Heart className="h-4 w-4 text-white" />
              </button>
              <button className="w-8 h-8 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/70 transition-colors">
                <MessageCircle className="h-4 w-4 text-white" />
              </button>
              <button className="w-8 h-8 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/70 transition-colors">
                <Send className="h-4 w-4 text-white" />
              </button>
            </div>
          </div>
        ))}
      </div>


    </section>
  );
}