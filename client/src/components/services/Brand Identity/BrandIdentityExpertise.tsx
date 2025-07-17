import React from 'react';
import bm1 from "./brandmain1.jpg";
import bm2 from "./brandmain2.jpg";
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
          Shaping <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">Iconic Brands</span>
        </h2>
      </div>

      {/* Main grid container - Layout maintained exactly as provided */}
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl w-full">
        {/* Top Left Section: Brand Identity Strategy */}
        <div className="flex flex-col justify-center p-8 sm:p-12 md:p-16 lg:p-20">
          <h3 className="text-4xl sm:text-5xl lg:text-5xl font-bold mb-6 leading-tight">
            The Art & Science of Brand Identity
          </h3>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-xl">
            We blend creative vision with strategic thinking to craft brand identities that are both visually stunning and deeply meaningful. Our process uncovers your unique story and translates it into a cohesive visual language that resonates with your audience and stands the test of time. From in-depth market research and competitor analysis to collaborative workshops.
          </p>
        </div>

        {/* Top Right Section: Image - Brand Visuals */}
        <div className="flex items-center justify-center overflow-hidden">
          <img
            src={bm1} // Image: Vibrant brand moodboard or logo sketches
            alt="Brand moodboard with vibrant colors and logo sketches, symbolizing creative brand identity design"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = "https://placehold.co/600x400/E0E0E0/333333?text=Image+Error";
              e.currentTarget.alt = "Image failed to load";
            }}
          />
        </div>

        {/* Bottom Left Section: Image - Brand Experience */}
        <div className="flex items-center justify-center overflow-hidden">
          <img
            src={bm2}// Image: People interacting with branded materials
            alt="People engaging with branded materials, representing brand experience and connection"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = "https://placehold.co/600x400/E0E0E0/333333?text=Image+Error";
              e.currentTarget.alt = "Image failed to load";
            }}
          />
        </div>

        {/* Bottom Right Section: Brand Impact */}
        <div className="flex flex-col justify-center p-8 sm:p-12 md:p-16 lg:p-20">
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-xl">
            Our expertise ensures your brand identity is more than just a logo—it’s a complete experience. We create consistent, memorable visuals and messaging that foster trust, spark emotion, and set you apart in your industry. By aligning every touchpoint with your brand’s personality, we help you cultivate loyalty and recognition in a crowded marketplace. Our team is dedicated to ongoing support and evolution, so your brand remains relevant and powerful as your business grows. With every detail
          </p>
        </div>
      </div>
    </div>
  );
};

export default DigitalFrontiersSection; // Exporting with new name