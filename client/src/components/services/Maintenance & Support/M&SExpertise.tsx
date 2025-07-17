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
          Reliable <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">Maintenance & Support</span>
        </h2>
      </div>

      {/* Main grid container - Layout maintained exactly as provided */}
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl w-full">
        {/* Top Left Section: Maintenance Strategy & Proactive Care */}
        <div className="flex flex-col justify-center p-8 sm:p-12 md:p-16 lg:p-20">
          <h3 className="text-4xl sm:text-5xl lg:text-5xl font-bold mb-6 leading-tight">
            Proactive Care & Optimization
          </h3>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-xl">
            We keep your digital assets running smoothly with proactive monitoring, regular updates, and performance optimization. Our team ensures your website or application is always secure, up-to-date, and operating at peak efficiency. From bug fixes to speed improvements, we handle it all so you can focus on your business.
          </p>
        </div>

        {/* Top Right Section: Image - Maintenance Visual */}
        <div className="flex items-center justify-center overflow-hidden">
          <img
            src="/msmain1.jpg" // Image: Maintenance dashboard or support tools
            alt="Maintenance dashboard and support tools, symbolizing maintenance and support expertise"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = "https://placehold.co/600x400/E0E0E0/333333?text=Image+Error";
              e.currentTarget.alt = "Image failed to load";
            }}
          />
        </div>

        {/* Bottom Left Section: Image - Security & Backups */}
        <div className="flex items-center justify-center overflow-hidden">
          <img
            src="/msmain2.jpg" // Image: Security shield or backup process
            alt="Security shield and backup process, representing security and regular backups"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = "https://placehold.co/600x400/E0E0E0/333333?text=Image+Error";
              e.currentTarget.alt = "Image failed to load";
            }}
          />
        </div>

        {/* Bottom Right Section: Ongoing Support */}
        <div className="flex flex-col justify-center p-8 sm:p-12 md:p-16 lg:p-20">
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-xl">
            Our maintenance and support services include troubleshooting, security patches, regular backups, and 24/7 technical assistance. We’re dedicated to minimizing downtime, preventing issues before they arise, and providing fast, reliable help whenever you need it. Trust us to protect your investment and keep your digital presence strong.
            With our team by your side, you gain peace of mind knowing your systems are monitored and maintained by experts. We help you scale confidently, adapt to new challenges, and ensure your digital assets continue to deliver value as your business grows.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DigitalFrontiersSection; // Exporting with new name