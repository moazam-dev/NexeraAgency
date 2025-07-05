import { Heart, MessageCircle, Send, Quote, Star, ArrowRight } from "lucide-react"; // Import Star and ArrowRight icon
import { useEffect, useState } from "react";

// Testimonials data
const testimonials = [
  {
    quote: "Working with UM has been an incredible experience. Their attention to detail and innovative approach helped us achieve remarkable results.",
    author: "John Smith",
    role: "CEO, Tech Company",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
  },
  {
    quote: "The team's expertise in digital marketing transformed our online presence completely. We saw a 300% increase in leads within the first quarter.",
    author: "Sarah Johnson",
    role: "Marketing Director, E-commerce",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
  },
  {
    quote: "Professional, creative, and results-driven. UM delivered exactly what we needed to take our business to the next level.",
    author: "Michael Chen",
    role: "Founder, StartupCo",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
  },
  {
    quote: "Outstanding support and innovative solutions. Highly recommend their services to anyone looking to grow.",
    author: "Emily White",
    role: "Product Manager, Innovate Corp",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG0otwYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
  },
  {
    quote: "Their strategic insights were invaluable. Our team learned so much and saw immediate improvements.",
    author: "David Lee",
    role: "Operations Lead, Global Solutions",
    image: "https://images.unsplash.com/photo-1547425260-76bc0fa66b9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
  },
  {
    quote: "A truly collaborative partner, helping us navigate complex challenges with ease and expertise.",
    author: "Olivia Brown",
    role: "Marketing Specialist, Creative Agency",
    image: "https://images.unsplash.com/photo-1599566150163-c68e150172e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
  },
  {
    quote: "Exceptional service and dedication. They consistently exceed our expectations with their innovative solutions.",
    author: "Daniel Wilson",
    role: "Director of Sales, FinTech Startup",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
  },
  {
    quote: "The results speak for themselves. Our investment with UM has yielded significant returns and growth.",
    author: "Sophia Martinez",
    role: "Brand Manager, Retail Group",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
  }
];

// Star Rating Component
const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />);
    } else if (i - 0.5 === rating) {
      stars.push(<Star key={i} className="h-5 w-5 fill-yellow-200 text-yellow-400" />);
    } else {
      stars.push(<Star key={i} className="h-5 w-5 text-gray-300" />);
    }
  }
  return <div className="flex">{stars}</div>;
};


export default function App() {
  const [isSocialImpactVisible, setIsSocialImpactVisible] = useState(false);

  useEffect(() => {
    // Observer for Social Impact section
    const socialImpactObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSocialImpactVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const socialImpactSection = document.getElementById("social-impact");
    if (socialImpactSection) {
      socialImpactObserver.observe(socialImpactSection);
    }

    return () => {
      socialImpactObserver.disconnect();
    };
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
    <>
      <section id="social-impact" className="min-h-screen py-20 px-6 bg-black text-white relative overflow-hidden font-inter">
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Central content */}
          <div className="flex flex-col items-center justify-center min-h-[80vh] text-center relative">
            {/* UM Store tag */}
            <div className={`inline-flex items-center space-x-2 bg-gray-800/60 backdrop-blur-sm px-4 py-2 rounded-full mb-8 transition-all duration-1000 ${isSocialImpactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="w-2 h-2 bg-[var(--accent-teal)] rounded-full"></div>
              <span className="text-sm font-medium tracking-wide">We Believe in Charity</span>
            </div>

            {/* Main heading */}
            <h2 className={`text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-8 max-w-4xl transition-all duration-1000 delay-300 ${isSocialImpactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              We donate and<br />
              engage in <span className="italic text-blue-200">charity</span><br />
              work for Pakistan
            </h2>

            {/* Central brand card */}
            <div className={` bg-gray-800/40 backdrop-blur-sm rounded-2xl p-6 flex flex-col items-center space-y-3 transition-all duration-1000 delay-500 ${isSocialImpactVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
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
              className={`floating-card absolute rounded-2xl overflow-hidden bg-gray-800/60 backdrop-blur-sm shadow-2xl transition-all duration-1000 ${isSocialImpactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{
                top: card.position.top,
                left: card.position.left,
                right: card.position.right,
                bottom: card.position.bottom,
                animationDelay: `${card.delay}s`,
              }}
            >
              {/* Image display with gradient overlay */}
              <div className="relative">
                <img
                  src={card.image}
                  alt={card.alt}
                  className="w-64 h-48 object-cover rounded-t-2xl"
                  onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/256x192/cccccc/333333?text=Image+Error"; }}
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
      </section>

      {/* Testimonials Section - Modernized */}
      <section className="py-32 bg-white text-gray-800 font-inter overflow-hidden">
        <div className="max-w-full mx-auto px-6">
          {/* Testimonials Header */}
          <div className="text-left mb-16 flex justify-between items-center">
            <div>
              <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">Testimonials</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
                Don't take our word for it!<br />
                Hear it from our partners.
              </h2>
            </div>
            {/* Arrow indicating scroll */}
            <div className="hidden md:block">
              <ArrowRight className="h-12 w-24 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Testimonial Cards Container - Horizontal Scroll */}
        <div className="overflow-x-auto no-scrollbar">
          <div className="flex snap-x snap-mandatory pb-4 space-x-6 lg:space-x-8 pl-8 pr-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="testimonial-card flex-shrink-0 w-[calc(100%-4rem)] md:w-[calc(50%-2rem)] lg:w-[calc(31%-1rem)] snap-start 
                           relative bg-white border border-gray-200 rounded-xl p-8 shadow-xl min-h-[300px] md:min-h-[350px] lg:min-h-[400px]
                           transition-all duration-300 ease-in-out cursor-pointer group hover:shadow-2xl hover:border-blue-300" /* Removed hover:-translate-y-1 and hover:scale-[1.01] */
              >
                {/* Content */}
                <div className="relative z-10 flex flex-col h-full justify-between">
                  {/* Star Rating and Quote */}
                  <div className="mb-6 flex-grow">
                    <div className="mb-4">
                      <StarRating rating={4.5} />
                    </div>
                    <blockquote className="text-lg leading-relaxed text-gray-700">
                      {testimonial.quote}
                    </blockquote>
                  </div>

                  {/* Author and Role - Always visible, no text color changes on hover */}
                  <div className="flex items-center space-x-4 mt-auto pt-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-14 h-14 rounded-full object-cover border-2 border-gray-300 transition-colors duration-300"
                      onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/56x56/cccccc/333333?text=User"; }}
                    />
                    <div>
                      <p className="font-semibold text-gray-900 text-lg transition-colors duration-300">
                        {testimonial.author}
                      </p>
                      <p className="text-gray-500 text-sm transition-colors duration-300">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom CSS for animations and variables */}
      <style>{`
        /* Import Inter font */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

        body {
          font-family: 'Inter', sans-serif;
        }

        :root {
          --accent-teal: #00bcd4;
          --accent-green: #4caf50;
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }

        .floating-card.opacity-100 {
          animation: float 3s ease-in-out infinite;
        }

        /* Hide scrollbar for horizontal scrolling div */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }

        .no-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
    </>
  );
}
