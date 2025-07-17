import React from 'react';
import main1 from "./wmain1.jpg";
import main2 from "./wmain2.jpg";
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
          Expert <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">WordPress Solutions</span>
        </h2>
      </div>

      {/* Main grid container - Layout maintained exactly as provided */}
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl w-full">
        {/* Top Left Section: WordPress Customization */}
        <div className="flex flex-col justify-center p-8 sm:p-12 md:p-16 lg:p-20">
          <h3 className="text-4xl sm:text-5xl lg:text-5xl font-bold mb-6 leading-tight">
            Custom Themes & Plugins
          </h3>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-xl">
            We specialize in building custom WordPress themes and plugins tailored to your brand and business needs. Our team ensures your website is unique, visually stunning, and fully functional, with seamless integration of essential features and third-party services.
          </p>
        </div>

        {/* Top Right Section: Image - WordPress Visual */}
        <div className="flex items-center justify-center overflow-hidden">
          <img
            src={main1} // Image: WordPress dashboard or theme editor
            alt="WordPress dashboard and theme editor, representing customization"
            className="w-full h-full object-cover" // Layout maintained
            onError={(e) => {
              e.currentTarget.src = "https://placehold.co/600x400/E0E0E0/333333?text=Image+Error";
              e.currentTarget.alt = "Image failed to load";
            }}
          />
        </div>

        {/* Bottom Left Section: Image - WordPress Collaboration */}
        <div className="flex items-center justify-center overflow-hidden">
          <img
            src={main2} // Image: Team collaborating on WordPress project
            alt="Team collaborating on a WordPress project, symbolizing teamwork and expertise"
            className="w-full h-full object-cover" // Layout maintained
            onError={(e) => {
              e.currentTarget.src = "https://placehold.co/600x400/E0E0E0/333333?text=Image+Error";
              e.currentTarget.alt = "Image failed to load";
            }}
          />
        </div>

        {/* Bottom Right Section: WordPress Performance & Security */}
        <div className="flex flex-col justify-center p-8 sm:p-12 md:p-16 lg:p-20">
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-xl">
            Our WordPress solutions are optimized for speed, security, and scalability. We implement best practices for SEO, performance, and data protection, ensuring your site runs smoothly and ranks well. From e-commerce to blogs, we empower your online presence with reliable, future-ready WordPress development.
            
            We provide ongoing maintenance and support, so your website stays up-to-date and protected against emerging threats.
           
            With our expertise, you can focus on growing your business while we handle the technical details and keep your site performing at its best.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DigitalFrontiersSection; // Exporting with new name