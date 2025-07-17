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
          Elevating <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">Digital Marketing</span>
        </h2>
      </div>

      {/* Main grid container - Layout maintained exactly as provided */}
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl w-full">
        {/* Top Left Section: Digital Strategy & Campaigns */}
        <div className="flex flex-col justify-center p-8 sm:p-12 md:p-16 lg:p-20">
          <h3 className="text-4xl sm:text-5xl lg:text-5xl font-bold mb-6 leading-tight">
            Strategic Campaigns & Growth
          </h3>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-xl">
            We develop data-driven digital marketing strategies that drive measurable results. Our team specializes in SEO, social media marketing, and content creation—ensuring your brand reaches the right audience at the right time. From campaign planning to execution, we help you grow your online presence and achieve your business goals.
          </p>
        </div>

        {/* Top Right Section: Image - Digital Marketing Visual */}
        <div className="flex items-center justify-center overflow-hidden">
          <img
            src="/digitalmain1.jpg" // Image: Digital marketing dashboard or campaign planning
            alt="Digital marketing dashboard and campaign planning, symbolizing digital marketing expertise"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = "https://placehold.co/600x400/E0E0E0/333333?text=Image+Error";
              e.currentTarget.alt = "Image failed to load";
            }}
          />
        </div>

        {/* Bottom Left Section: Image - Analytics & Social */}
        <div className="flex items-center justify-center overflow-hidden">
          <img
            src="/digitalmain2.jpg" // Image: Analytics dashboard or social media icons
            alt="Analytics dashboard and social media icons, representing digital marketing analytics and social media"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = "https://placehold.co/600x400/E0E0E0/333333?text=Image+Error";
              e.currentTarget.alt = "Image failed to load";
            }}
          />
        </div>

        {/* Bottom Right Section: Analytics & Optimization */}
        <div className="flex flex-col justify-center p-8 sm:p-12 md:p-16 lg:p-20">
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-xl">
            Our expertise covers paid advertising, analytics, and ongoing optimization. We leverage the latest tools and trends to maximize ROI, track performance, and refine strategies for continuous growth. Let us help you build a powerful digital presence that converts visitors into loyal customers.
            Through detailed reporting and transparent communication, we keep you informed every step of the way. Our team is dedicated to staying ahead of digital trends, ensuring your marketing efforts are always innovative, effective, and tailored to your unique goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DigitalFrontiersSection; // Exporting with new name