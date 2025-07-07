import React from 'react';
import { motion } from "framer-motion"; // Assuming you still use framer-motion for animations

// You can adjust the image URL and content as needed.
// This component is designed to be a standalone section.

export default function WebDevelopmentProcess() {
  // Example image URL - replace with your desired high-quality background image
  const backgroundImage = "/Nexera.jpg"; // Abstract tech/digital landscape

  return (
    // A container div to hold both the image section and the button below it
    <div className="flex flex-col items-center justify-center min-h-screen">
      <section 
        className="relative w-full h-screen flex items-center justify-center text-white overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >

      </section>

      {/* Button - Now placed BELOW the image section */}
      <div className="w-full text-center py-20 bg-white"> {/* Added a white background for visibility below the image */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="px-6 py-3 bg-gradient-to-r from-green-400 to-blue-600 text-white font-semibold rounded-full shadow-lg transition-all duration-300 transform 
                     hover:scale-110 hover:shadow-2xl hover:brightness-125 hover:-translate-y-1" // Added heavier hover animation
        >
          Transform Your Digital Presence
        </motion.button>
      </div>
    </div>
  );
}
