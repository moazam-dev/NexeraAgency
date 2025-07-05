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
      image: "https://images.pexels.com/photos/6646845/pexels-photo-6646845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Group photo of charity participants
      alt: "Group photo of charity participants",
      position: { top: "15%", left: "-4%" },
      delay: 0.2
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/6646869/pexels-photo-6646869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Two individuals helping community
      alt: "Two individuals helping community",
      position: { top: "12%", right: "1%" },
      delay: 0.4
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/1036858/pexels-photo-1036858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // White tote bag with custom design
      alt: "White tote bag with custom design",
      position: { bottom: "15%", left: "1%" },
      delay: 0.6
    },
    {
      id: 4,
      image: "https://images.pexels.com/photos/6588636/pexels-photo-6588636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Gift box with products and packing
      alt: "Gift box with products and packing",
      position: { bottom: "10%", right: "8%" },
      delay: 0.8
    }
  ];

  return (
    <section id="social-impact" className="min-h-screen py-20 px-6 bg-black text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Central content */}
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center relative">
          {/* UM Store tag */}
          <div className={`inline-flex items-center space-x-2 bg-gray-800/60 backdrop-blur-sm px-4 py-2 rounded-full mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="w-2 h-2 bg-[var(--accent-teal)] rounded-full"></div>
            <span className="text-sm font-medium tracking-wide">We Believe in Charity</span>
          </div>

          {/* Main heading */}
          <h2 className={`text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-8 max-w-4xl transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            We donate and<br />
            engage in <span className="italic text-blue-200">charity</span><br />
            work for Pakistan
          </h2>

          {/* Central brand card */}
          <div className={` bg-gray-800/40 backdrop-blur-sm rounded-2xl p-6 flex flex-col items-center space-y-3 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="w-16 h-16 bg-gradient-to-br from-[var(--accent-green)] to-blue-500 rounded-2xl flex items-center justify-center">
              <Heart className="h-8 w-8 text-white fill-current" />
            </div>
            <div className="text-center">
              <div className="font-bold text-lg">@nexera.official</div>
              <div className="text-sm text-gray-300">Nexera Official, Believed in Humanity</div>
            </div>
          </div>
        </div>

        {/* Floating image cards */}
        {imageCards.map((card) => (
          <div
            key={card.id}
            className={`floating-card absolute rounded-2xl overflow-hidden bg-gray-800/60 backdrop-blur-sm shadow-2xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{
              top: card.position.top,
              left: card.position.left,
              right: card.position.right,
              bottom: card.position.bottom,
              animationDelay: `${card.delay}s`,
              // Removed static transform, now handled by CSS keyframes
            }}
          >
            {/* Image display with gradient overlay */}
            <div className="relative">
              <img
                src={card.image}
                alt={card.alt}
                className="w-64 h-48 object-cover rounded-t-2xl" // Use object-cover to maintain aspect ratio
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/256x192/cccccc/333333?text=Image+Error"; }} // Fallback for image loading errors
              />
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

      {/* Tailwind CSS and custom animations */}
      <style>{` /* Removed 'jsx' from style tag */
        /* Define custom properties for colors if needed elsewhere */
        :root {
          --accent-teal: #00bcd4; /* Example teal color */
          --accent-green: #4caf50; /* Example green color */
        }

        /* Keyframes for continuous floating effect */
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }

        /* Apply floating animation to cards when visible */
        .floating-card.opacity-100 {
          animation: float 3s ease-in-out infinite; /* Adjust duration as needed */
        }
      `}</style>
    </section>
  );
}
