import React, { useRef } from 'react';
import { Quote, Star, ArrowRight } from "lucide-react";

// More "legit" testimonials data with app-development focus and varied ratings
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
];

// Star Rating Component
const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />);
    } else if (i - 0.5 <= rating) {
      stars.push(<Star key={i} className="h-5 w-5 fill-yellow-400 text-gray-300" style={{ clipPath: 'inset(0 50% 0 0)' }} />);
    } else {
      stars.push(<Star key={i} className="h-5 w-5 text-gray-300" />);
    }
  }
  return <div className="flex">{stars}</div>;
};

export default function Testimonials() {
  const scrollContainerRef = useRef(null);

  const scrollRight = () => {
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
    <section className="py-24 bg-slate-50 text-gray-800 font-inter overflow-hidden relative">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M20%200L20%2040M0%2020L40%2020%22%20stroke%3D%22%23e2e8f0%22%20stroke-width%3D%221%22%20stroke-dasharray%3D%222%202%22%2F%3E%3C%2Fsvg%3E')] opacity-50"></div>
      
      <div className="relative max-w-full mx-auto px-6">
        {/* Testimonials Header */}
        <div className="text-left mb-16 flex justify-between items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-2">Client Success Stories</p>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
              Why Teams Love Working With Us
            </h2>
          </div>
          {/* Arrow indicating scroll */}
          <div className="hidden md:block">
            <button
              onClick={scrollRight}
              aria-label="Scroll testimonials right"
              className="group rounded-full p-3 border border-gray-300 hover:bg-gray-100 transition-all duration-300"
            >
              <ArrowRight
                className="h-6 w-6 text-gray-500 group-hover:text-gray-900 transition-colors"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Testimonial Cards Container - Horizontal Scroll */}
      <div className="overflow-x-auto no-scrollbar" ref={scrollContainerRef}>
        <div className="flex snap-x snap-mandatory pb-8 space-x-6 lg:space-x-8 pl-6 lg:pl-12 pr-6 lg:pr-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card flex-shrink-0 w-[calc(100%-3rem)] md:w-[calc(50%-2rem)] lg:w-[calc(33.33%-2rem)] snap-start 
                         relative bg-white border border-gray-200 rounded-2xl p-8 shadow-md min-h-[320px]
                         transition-all duration-300 ease-in-out hover:shadow-xl hover:border-blue-400 hover:-translate-y-1"
            >
              <Quote className="absolute top-6 right-6 h-16 w-16 text-gray-100" />
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-4">
                  <StarRating rating={testimonial.rating} />
                </div>
                <blockquote className="text-base leading-relaxed text-gray-700 flex-grow">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center space-x-4 mt-6 pt-4 border-t border-gray-100">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
                    onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/48x48/e0e0e0/333333?text=A"; }}
                  />
                  <div>
                    <p className="font-bold text-gray-900 text-base">
                      {testimonial.author}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        body { font-family: 'Inter', sans-serif; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
}
