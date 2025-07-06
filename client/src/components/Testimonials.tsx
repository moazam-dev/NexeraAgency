import React, { useState, useRef } from 'react'; // Import useRef
import { Quote, Star, ArrowRight } from "lucide-react";

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
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
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

export default function Testimonials() {
  const scrollContainerRef = useRef(null);

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      // Calculate the width of one card including its right margin
      const firstCard = scrollContainerRef.current.querySelector('.testimonial-card');
      if (firstCard) {
        const cardWidth = firstCard.offsetWidth;
        const computedStyle = window.getComputedStyle(firstCard);
        const marginRight = parseFloat(computedStyle.marginRight); // Get dynamic margin
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
            <ArrowRight
              className="h-12 w-24 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
              onClick={scrollRight} // Added onClick handler
            />
          </div>
        </div>
      </div>

      {/* Testimonial Cards Container - Horizontal Scroll */}
      <div className="overflow-x-auto no-scrollbar" ref={scrollContainerRef}> {/* Added ref */}
        <div className="flex snap-x snap-mandatory pb-4 space-x-6 lg:space-x-8 pl-8 pr-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card flex-shrink-0 w-[calc(100%-4rem)] md:w-[calc(50%-2rem)] lg:w-[calc(31%-1rem)] snap-start 
                         relative bg-white border border-gray-200 rounded-xl p-8 shadow-xl min-h-[300px] md:min-h-[350px] lg:min-h-[400px]
                         transition-all duration-300 ease-in-out cursor-pointer group hover:shadow-2xl hover:border-blue-300"
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
      {/* Custom CSS for animations and variables */}
      <style>{`
        /* Import Inter font */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

        body {
          font-family: 'Inter', sans-serif;
        }

        /* Force hide scrollbar for all browsers */
        .no-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }
      `}</style>
    </section>
  );
}
