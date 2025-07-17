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
          Elevating <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">UX/UI Design</span>
        </h2>
      </div>

      {/* Main grid container - Layout maintained exactly as provided */}
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl w-full">
        {/* Top Left Section: New Content for UX/UI Design Principles */}
        <div className="flex flex-col justify-center p-8 sm:p-12 md:p-16 lg:p-20">
          <h3 className="text-4xl sm:text-5xl lg:text-5xl font-bold mb-6 leading-tight">
            Designing Intuitive Experiences
          </h3>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-xl">
            Our approach to UX/UI design centers on understanding user needs and behaviors. We craft visually stunning and highly functional interfaces that prioritize usability, accessibility, and seamless interaction. Every element is thoughtfully designed to guide users effortlessly through your digital product, ensuring satisfaction at every touchpoint.
          </p>
        </div>

        {/* Top Right Section: Image - UX/UI Design Visual */}
        <div className="flex items-center justify-center overflow-hidden">
          <img
            src="/uxuimain1.jpg" // Image: Modern UI wireframe or design workspace
            alt="Modern UI wireframe and design workspace, representing UX/UI creativity"
            className="w-full h-full object-cover" // Layout maintained
            onError={(e) => {
              e.currentTarget.src = "https://placehold.co/600x400/E0E0E0/333333?text=Image+Error";
              e.currentTarget.alt = "Image failed to load";
            }}
          />
        </div>

        {/* Bottom Left Section: Image - UX/UI Collaboration */}
        <div className="flex items-center justify-center overflow-hidden">
          <img
            src="uxuimain2.jpg" // Image: Designers collaborating on interface sketches
            alt="Team of designers collaborating on interface sketches and prototypes"
            className="w-full h-full object-cover" // Layout maintained
            onError={(e) => {
              e.currentTarget.src = "https://placehold.co/600x400/E0E0E0/333333?text=Image+Error";
              e.currentTarget.alt = "Image failed to load";
            }}
          />
        </div>

        {/* Bottom Right Section: New Content for User-Centered Design */}
        <div className="flex flex-col justify-center p-8 sm:p-12 md:p-16 lg:p-20">
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-xl">
            We believe in a user-centered design process, involving real users at every stage to validate ideas and refine solutions. From wireframes to interactive prototypes, our team ensures that every design decision enhances clarity, engagement, and delight, resulting in digital products that users love to use.
            
            We conduct usability testing and gather feedback to continuously improve our designs, making sure they truly resonate with your audience.
           
            Our commitment to iterative design guarantees that your product evolves with user needs, delivering exceptional experiences every time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DigitalFrontiersSection; // Exporting with new name