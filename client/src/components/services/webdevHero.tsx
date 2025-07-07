import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import React from 'react';

export default function Hero() {
  return (
    <section className="hero-bg-image min-h-screen flex items-center relative overflow-hidden">
      {/* Embedded CSS for self-contained styling */}
      <style>
        {`
        :root {
          --accent-green: #34d399;
          --accent-teal: #20c997;
          --accent-blue: #3b82f6;
        }

        .massive-text {
          font-size: clamp(2rem, 10vw, 5rem);
          font-weight: 900;
          line-height: 1;
          color: white;
          background: none;
          background-size: initial;
          -webkit-background-clip: unset;
          -webkit-text-fill-color: initial;
          background-clip: unset;
          animation: none;
          margin-bottom: 40px;
        }

        /* Styles for the button directly */
        .hero-button {
          background: linear-gradient(135deg, var(--accent-green), var(--accent-teal), var(--accent-blue)); /* Default gradient background */
          color: white; /* Default white text */
          padding: 15px 30px;
          border-radius: 9999px;
          border: none;
          font-weight: 600;
          font-family: 'Inter', sans-serif;
          font-size: 1rem;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease-in-out;
        }

        .hero-button:hover {
          background: white; /* White background on hover */
          color: #2e2e2e; /* Dark text on hover */
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
          transform: translateY(-2px);
        }

        .hero-button svg {
          color: white; /* Default icon color (white) */
          transition: color 0.3s ease-in-out, transform 0.3s ease-in-out; /* Added transform transition */
          font-size: 1.1rem;
        }

        .hero-button:hover svg {
          color: #2e2e2e; /* Dark icon on hover */
          transform: translateX(5px); /* Animated arrow on hover */
        }
        `}
      </style>

      <div className="absolute inset-0 bg-black bg-opacity-70 z-10"></div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="flex items-center min-h-screen">
          <div className="w-full max-w-2xl lg:max-w-3xl xl:max-w-4xl">
            {/* Web Development Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block text-white text-sm px-4 py-2 rounded-full mb-6 font-medium web-dev-label border border-white border-opacity-30"
            >
              WEB DEVELOPMENT
            </motion.div>

            <h1
              className="massive-text mb-6 text-left"
            >
              Building Your <br /> <span className="">Digital Legacy.</span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg md:text-xl lg:text-2xl text-white mb-10 max-w-3xl leading-relaxed"
            >
              We craft bespoke digital experiences that drive engagement and deliver measurable results,
              powered by cutting-edge technology and creative design.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex justify-start"
            >
              <motion.button
                className="hero-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="font-['Inter']">
                  JOIN THE LEGACY
                </span>
                <FaArrowRight />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
