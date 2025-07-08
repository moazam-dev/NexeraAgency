import React from 'react';

// Ensure your tailwind.config.js has the 'gradient-text' utility defined.
// Example:
// plugins: [
//   function({ addUtilities }) {
//     const newUtilities = {
//       '.gradient-text': {
//         'background-image': 'linear-gradient(to right, #00C6FF, #0072FF)', // Adjust these colors for desired neon gradient
//         '-webkit-background-clip': 'text',
//         'background-clip': 'text',
//         'color': 'transparent',
//       },
//     }
//     addUtilities(newUtilities, ['responsive', 'hover'])
//   }
// ],

const DigitalFrontiersSection: React.FC = () => { // Renamed component to fit new theme
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans flex flex-col items-center justify-center py-20">
      {/* Centered Heading for the entire section - Changed content and added gradient */}
      <div className="text-center mb-16 px-6 max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          Crafting <span className="gradient-text">Digital Excellence</span>
        </h2>
      </div>

      {/* Main grid container - Layout maintained exactly as provided */}
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl w-full">
        {/* Top Left Section: New Content for Digital Innovation */}
        <div className="flex flex-col justify-center p-8 sm:p-12 md:p-16 lg:p-20">
          <h3 className="text-4xl sm:text-5xl lg:text-5xl font-bold mb-6 leading-tight">
            Unleashing Next-Gen Technologies
          </h3>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-xl">
            We dive deep into the latest advancements in AI, blockchain, and IoT, transforming complex ideas into tangible solutions. Our focus is on building robust and scalable platforms that not only meet today's demands but are engineered to adapt and thrive in tomorrow's evolving digital landscape, ensuring your business stays ahead.
          </p>
        </div>

        {/* Top Right Section: Image - Technological / Neon */}
        <div className="flex items-center justify-center overflow-hidden">
          <img
            src={"../1.jpeg"} // Image: Neon abstract monitor screen
            alt="Abstract digital screen with vibrant neon patterns, symbolizing technology"
            className="w-full h-full object-cover" // Layout maintained
            onError={(e) => {
              e.currentTarget.src = "https://placehold.co/600x400/E0E0E0/333333?text=Image+Error";
              e.currentTarget.alt = "Image failed to load";
            }}
          />
        </div>

        {/* Bottom Left Section: Image - Technological / Neon */}
        <div className="flex items-center justify-center overflow-hidden">
          <img
            src="../2.jpg" // Image: Face with digital overlay
            alt="Human face with digital data overlay, representing AI and seamless experiences"
            className="w-full h-full object-cover" // Layout maintained
            onError={(e) => {
              e.currentTarget.src = "https://placehold.co/600x400/E0E0E0/333333?text=Image+Error";
              e.currentTarget.alt = "Image failed to load";
            }}
          />
        </div>

        {/* Bottom Right Section: New Content for AI-Driven Experiences */}
        <div className="flex flex-col justify-center p-8 sm:p-12 md:p-16 lg:p-20">
          {/* <h3 className="text-4xl sm:text-5xl lg:text-5xl font-bold mb-6 leading-tight">
            Seamless AI-Driven Experiences
          </h3> */}
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-xl">
            Experience the future of user interaction with interfaces powered by artificial intelligence and machine learning. We design intuitive platforms that learn and adapt to user behavior, coupled with powerful API integrations that connect disparate systems, creating a unified and intelligent digital ecosystem for unparalleled efficiency.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DigitalFrontiersSection; // Exporting with new name