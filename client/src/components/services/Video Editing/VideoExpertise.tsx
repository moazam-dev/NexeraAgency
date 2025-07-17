import React from 'react';
import m1 from "./vidmain1.jpg";
import m2 from "./vidmain2.jpg";
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
          Crafting <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">Video Masterpieces</span>
        </h2>
      </div>

      {/* Main grid container - Layout maintained exactly as provided */}
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl w-full">
        {/* Top Left Section: New Content for Video Editing Expertise */}
        <div className="flex flex-col justify-center p-8 sm:p-12 md:p-16 lg:p-20">
          <h3 className="text-4xl sm:text-5xl lg:text-5xl font-bold mb-6 leading-tight">
            Elevating Stories Through Editing
          </h3>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-xl">
            Our video editing team transforms raw footage into captivating stories. We focus on seamless transitions, precise cuts, and dynamic pacing to keep your audience engaged from the first frame to the last. Whether it's a cinematic film, a corporate promo, or social media content, we bring your vision to life with creativity and technical expertise.
          </p>
        </div>

        {/* Top Right Section: Image - Video Editing Visual */}
        <div className="flex items-center justify-center overflow-hidden">
          <img
            src={m1} // Image: Video editing timeline and tools
            alt="Video editing timeline and tools, representing creative post-production"
            className="w-full h-full object-cover" // Layout maintained
            onError={(e) => {
              e.currentTarget.src = "https://placehold.co/600x400/E0E0E0/333333?text=Image+Error";
              e.currentTarget.alt = "Image failed to load";
            }}
          />
        </div>

        {/* Bottom Left Section: Image - Video Collaboration */}
        <div className="flex items-center justify-center overflow-hidden">
          <img
            src={m2} // Image: Team collaborating on video project
            alt="Team collaborating on a video project, symbolizing creative teamwork"
            className="w-full h-full object-cover" // Layout maintained
            onError={(e) => {
              e.currentTarget.src = "https://placehold.co/600x400/E0E0E0/333333?text=Image+Error";
              e.currentTarget.alt = "Image failed to load";
            }}
          />
        </div>

        {/* Bottom Right Section: New Content for Post-Production Excellence */}
        <div className="flex flex-col justify-center p-8 sm:p-12 md:p-16 lg:p-20">
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-xl">
            From color grading and sound design to motion graphics and special effects, our post-production services ensure your video stands out. We pay attention to every detail, delivering polished, professional results that resonate with your audience and elevate your brand.
            
            We collaborate closely with you to understand your goals and deliver edits that match your unique style and message.
            
            Timely delivery and clear communication are at the core of our workflow, so your project is always in expert hands.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DigitalFrontiersSection; // Exporting with new name