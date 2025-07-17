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
          Elevating <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">Ecommerce Excellence</span>
        </h2>
      </div>

      {/* Main grid container - Layout maintained exactly as provided */}
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl w-full">
        {/* Top Left Section: Ecommerce Strategy & User Experience */}
        <div className="flex flex-col justify-center p-8 sm:p-12 md:p-16 lg:p-20">
          <h3 className="text-4xl sm:text-5xl lg:text-5xl font-bold mb-6 leading-tight">
            Seamless Shopping Experiences
          </h3>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-xl">
            We design and develop eCommerce platforms that delight customers and drive sales. Our expertise covers intuitive navigation, mobile-first design, and conversion-focused layouts—ensuring every visitor enjoys a smooth and engaging shopping journey. From product discovery to checkout, we optimize every step for maximum impact.
          </p>
        </div>

        {/* Top Right Section: Image - Ecommerce Visual */}
        <div className="flex items-center justify-center overflow-hidden">
          <img
            src="/ecommain1.jpg" // Image: Online store dashboard or shopping cart
            alt="Ecommerce dashboard and shopping cart, symbolizing ecommerce expertise"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = "https://placehold.co/600x400/E0E0E0/333333?text=Image+Error";
              e.currentTarget.alt = "Image failed to load";
            }}
          />
        </div>

        {/* Bottom Left Section: Image - Product Management */}
        <div className="flex items-center justify-center overflow-hidden">
          <img
            src="/ecommain2.jpg" // Image: Product management or inventory dashboard
            alt="Product management and inventory dashboard, representing ecommerce product management"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = "https://placehold.co/600x400/E0E0E0/333333?text=Image+Error";
              e.currentTarget.alt = "Image failed to load";
            }}
          />
        </div>

        {/* Bottom Right Section: Payments & Omnichannel */}
        <div className="flex flex-col justify-center p-8 sm:p-12 md:p-16 lg:p-20">
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-xl">
            Our solutions include secure payment integration, streamlined product management, and omnichannel strategies that connect your brand across every platform. We leverage analytics and best practices to boost conversions, increase average order value, and help your business scale with confidence.
            With real-time insights and continuous optimization, we ensure your store adapts to changing trends and customer needs. Partner with us to unlock new growth opportunities and deliver exceptional value at every stage of the customer journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DigitalFrontiersSection; // Exporting with new name