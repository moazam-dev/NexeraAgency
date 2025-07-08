import React from 'react';
import { motion } from "framer-motion";

// This component is designed to be a standalone section for "Why Choose Nexera"
// and its features, with a focus on mobile responsiveness.

export default function WhyChooseNexera() {
  // Data for the feature cards
  const features = [
    {
      icon: (
        // Inline SVG for a security icon (example)
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.001 12.001 0 002 12c0 2.757 1.25 5.232 3.24 6.944a11.955 11.955 0 018.618 3.04A12.001 12.001 0 0022 12c0-2.757-1.25-5.232-3.24-6.944z" />
        </svg>
      ),
      title: "Robust Security",
      description: "Your website and data are safe with our strong security measures and regular checks."
    },
    {
      icon: (
        // Inline SVG for a performance icon (example)
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H1m18 0A9 9 0 112 12a9 9 0 0117 0z" />
        </svg>
      ),
      title: "Blazing Fast Performance",
      description: "Experience lightning-fast loading times and smooth user interactions."
    },
    {
      icon: (
        // Inline SVG for a design icon (example)
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 100 4m-3.5 12V20A2 2 0 0010 22h4a2 2 0 002-2v-2.5M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Stunning Design",
      description: "Captivate your audience with modern, intuitive, and visually appealing designs."
    },
  ];

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Heading - Responsive text sizing and centering */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-12 sm:mb-16 md:mb-20 leading-tight"
        >
          Why Choose Nexera
        </motion.h2>

        {/* Features Grid/Flex Container */}
        {/*
          Uses flexbox to arrange items.
          On small screens (mobile), items stack vertically (flex-col).
          On medium screens and up (md:), items arrange horizontally (md:flex-row).
          justify-center centers the items.
          gap-8 adds space between items.
          flex-wrap allows items to wrap to the next line if they don't fit horizontally.
        */}
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8 sm:gap-12 lg:gap-16 flex-wrap">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              className="flex flex-col items-center text-center p-6 sm:p-8 bg-white rounded-full shadow-lg 
                         w-64 h-64 sm:w-72 sm:h-72 md:w-64 md:h-64 lg:w-72 lg:h-72 
                         flex-shrink-0 flex-grow-0" // Prevent shrinking/growing to maintain circular shape
              style={{
                border: '2px solid', // Add border for the circular look
                borderColor: 'transparent', // Default transparent border
                borderImage: 'linear-gradient(to right, #4ade80, #3b82f6) 1', // Gradient border
              }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Button - Reusing the button from your previous component, ensuring responsiveness */}
        <div className="w-full text-center mt-12 sm:mt-16 md:mt-20">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: features.length * 0.2 + 0.2 }} // Delay after features
            className="px-6 py-3 bg-gradient-to-r from-green-400 to-blue-600 text-white font-semibold rounded-full shadow-lg transition-all duration-300 transform 
                       hover:scale-110 hover:shadow-2xl hover:brightness-125 hover:-translate-y-1
                       text-base sm:text-lg md:text-xl" // Responsive font size for the button text
          >
            Transform Your Digital Presence
          </motion.button>
        </div>
      </div>
    </section>
  );
}
