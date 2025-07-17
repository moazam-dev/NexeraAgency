import React from 'react';
import main1 from "./creativemain1.jpg";
import main2 from "./creativemain2.jpg";
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
          Inspiring <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500"> Creative Design</span>
        </h2>
      </div>

      {/* Main grid container - Layout maintained exactly as provided */}
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl w-full">
        {/* Top Left Section: Creative Strategy & Visual Storytelling */}
        <div className="flex flex-col justify-center p-8 sm:p-12 md:p-16 lg:p-20">
          <h3 className="text-4xl sm:text-5xl lg:text-5xl font-bold mb-6 leading-tight">
            Creative Strategy & Visual Storytelling
          </h3>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-xl">
            We blend imagination with strategy to create designs that not only look stunning but also communicate your brand’s story and values. Our team specializes in crafting unique visual identities, engaging graphics, and compelling layouts that capture attention and leave a lasting impression.
            We believe that every design should evoke emotion and spark curiosity.
          </p>
        </div>

        {/* Top Right Section: Image - Creative Workspace */}
        <div className="flex items-center justify-center overflow-hidden">
          <img
            src={main1} // Image: Creative workspace, sketching, or design tools
            alt="Creative workspace with sketchbooks and design tools, symbolizing creative design process"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = "https://placehold.co/600x400/E0E0E0/333333?text=Image+Error";
              e.currentTarget.alt = "Image failed to load";
            }}
          />
        </div>

        {/* Bottom Left Section: Image - Visual Design */}
        <div className="flex items-center justify-center overflow-hidden">
          <img
            src={main2} // Image: Color palettes, digital art, or branding boards
            alt="Color palettes and digital art, representing visual design and branding"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = "https://placehold.co/600x400/E0E0E0/333333?text=Image+Error";
              e.currentTarget.alt = "Image failed to load";
            }}
          />
        </div>

        {/* Bottom Right Section: UI/UX & Illustration */}
        <div className="flex flex-col justify-center p-8 sm:p-12 md:p-16 lg:p-20">
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-xl">
            Our expertise covers everything from UI/UX design and illustration to branding and creative problem-solving. We deliver visually cohesive and user-friendly solutions that elevate your brand and engage your audience across every platform.
            With a passion for innovation and attention to detail, we ensure every project is both beautiful and functional. Let us help you transform your vision into designs that inspire, connect, and make a lasting impact.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DigitalFrontiersSection; // Exporting with new name