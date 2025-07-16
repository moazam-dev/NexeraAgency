import React, { useRef } from 'react';
// Import motion from framer-motion
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { Quote, Star, ArrowRight } from "lucide-react";

// Testimonial data remains the same
const testimonials = [
  {
    quote: "The final app was flawless. The UI/UX is intuitive, and our user engagement has skyrocketed since launch. Their team delivered on time and exceeded our expectations.",
    author: "Samantha Chen",
    role: "Head of Mobile Products, InnovateApp",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100",
    rating: 5,
  },
  {
    quote: "We needed a scalable backend for our high-traffic application. They architected and delivered a robust solution that handles millions of requests without a hitch. Truly top-tier engineers.",
    author: "Michael Rodriguez",
    role: "CTO, DataStream Solutions",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
    rating: 5,
  },
  {
    quote: "Their cross-platform development expertise saved us significant time and budget. We launched on both iOS and Android simultaneously, with a consistent and polished user experience.",
    author: "Emily Carter",
    role: "Founder, ConnectSphere",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
    rating: 4.5,
  },
  {
    quote: "The attention to security and data privacy was impressive. They built a HIPAA-compliant healthcare app for us that patients and doctors trust.",
    author: "Dr. David Lee",
    role: "Chief Medical Officer, HealthSync",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
    rating: 5,
  },
  {
    quote: "From wireframes to the final App Store submission, the process was seamless. Their project management is excellent, with clear communication and no surprises.",
    author: "Jessica Nguyen",
    role: "Product Manager, RetailGo",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
    rating: 4.5,
  },
  {
    quote: "They transformed our outdated app into a modern, high-performing platform. The user feedback has been overwhelmingly positive. A fantastic return on investment.",
    author: "James Wilson",
    role: "Director of Engineering, FinTech Corp",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
    rating: 4,
  },
  {
    quote: "The analytics dashboard they built is a game-changer. We can now track user behavior in real-time, which has been crucial for our feature planning and marketing efforts.",
    author: "Priya Sharma",
    role: "Data Scientist, MetricsFlow",
    image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100",
    rating: 4.5,
  },
  {
    quote: "Their agile approach was fantastic. We were involved in every sprint, and the team was incredibly responsive to feedback, resulting in a final product that truly met our users' needs.",
    author: "Ben Carter",
    role: "Agile Coach, Sprintify Inc.",
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100",
    rating: 5,
  }
];


// StarRating component remains the same
const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />);
    } else if (i - 0.5 <= rating) {
      stars.push(
        <span key={i} className="relative inline-block">
          <Star className="h-5 w-5 text-gray-300" />
          <Star className="h-5 w-5 fill-yellow-400 text-yellow-400 absolute top-0 left-0" style={{ clipPath: 'inset(0 50% 0 0)' }} />
        </span>
      );
    } else {
      stars.push(<Star key={i} className="h-5 w-5 text-gray-300" />);
    }
  }
  return <div className="flex items-center">{stars}</div>;
};


// NEW: Animated Testimonial Card Component
const AnimatedCard = ({ testimonial }) => {
  const cardRef = useRef(null);
  
  // Create motion values for mouse position
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Transform mouse position into a 3D rotation
  const rotateX = useTransform(y, [-150, 150], [10, -10]); // Slower rotation
  const rotateY = useTransform(x, [-150, 150], [-10, 10]);

  // Handle mouse movement over the card
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    // Update motion values with position relative to card center
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  // Handle mouse leaving the card
  const handleMouseLeave = () => {
    // Animate back to the resting state
    animate(x, 0, { duration: 0.3, ease: 'easeOut' });
    animate(y, 0, { duration: 0.3, ease: 'easeOut' });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        rotateX,
        rotateY,
      }}
      className="testimonial-card flex-shrink-0 w-[calc(100%-4rem)] md:w-[calc(50%-2rem)] lg:w-[calc(31%-1rem)] snap-start 
                 relative bg-white border border-gray-200 rounded-xl p-8 shadow-lg min-h-[300px] md:min-h-[350px] lg:min-h-[400px]
                 cursor-pointer group"
    >
      <div 
        style={{ transform: "translateZ(50px)" }} // Push content forward for better 3D effect
        className="relative z-10 flex flex-col h-full justify-between"
      >
        {/* Animated Quote Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileHover={{ opacity: 0.08, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute top-0 right-0 -translate-y-4 translate-x-4"
        >
          <Quote className="w-32 h-32 text-gray-200" />
        </motion.div>

        <div className="mb-6 flex-grow">
          <div className="mb-4">
            <StarRating rating={testimonial.rating} />
          </div>
          <blockquote className="text-lg leading-relaxed text-gray-700">
            {testimonial.quote}
          </blockquote>
        </div>
        <div className="flex items-center space-x-4 mt-auto pt-4">
          <motion.img
            whileHover={{ scale: 1.1, boxShadow: '0px 0px 20px rgba(0,0,0,0.2)' }}
            transition={{ type: "spring", stiffness: 300 }}
            src={testimonial.image}
            alt={testimonial.author}
            className="w-14 h-14 rounded-full object-cover border-2 border-gray-300"
            onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/56x56/cccccc/333333?text=User"; }}
          />
          <div>
            <p className="font-semibold text-gray-900 text-lg">
              {testimonial.author}
            </p>
            <p className="text-gray-500 text-sm">
              {testimonial.role}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};


export default function Testimonials() {
  const scrollContainerRef = useRef(null);

  const scrollRight = () => {
    // Scroll logic remains the same
    if (scrollContainerRef.current) {
      const firstCard = scrollContainerRef.current.querySelector('.testimonial-card');
      if (firstCard) {
        const cardWidth = firstCard.offsetWidth;
        const computedStyle = window.getComputedStyle(firstCard);
        const marginRight = parseFloat(computedStyle.marginRight);
        const scrollAmount = cardWidth + marginRight;
        
        scrollContainerRef.current.scrollBy({
          left: scrollAmount,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <section className="py-32 bg-white text-gray-800 font-inter overflow-hidden">
      <div className="max-w-full mx-auto px-6" style={{ perspective: "1000px" }}> {/* Added perspective for 3D */}
        <div className="text-left mb-16 flex justify-between items-center">
          <div>
            <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">Testimonials</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
              Don't take our word for it!<br />
              Hear it from our partners.
            </h2>
          </div>
          <div className="hidden md:block">
            <ArrowRight
              className="h-12 w-24 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
              onClick={scrollRight}
            />
          </div>
        </div>
      </div>

      <div className="overflow-x-auto no-scrollbar" ref={scrollContainerRef}>
        <div className="flex snap-x snap-mandatory pb-4 space-x-6 lg:space-x-8 pl-8 pr-8">
          {/* Map over testimonials and use the new AnimatedCard component */}
          {testimonials.map((testimonial, index) => (
            <AnimatedCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
      <style>{`
        /* Styles remain the same */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        body {
          font-family: 'Inter', sans-serif;
        }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
}