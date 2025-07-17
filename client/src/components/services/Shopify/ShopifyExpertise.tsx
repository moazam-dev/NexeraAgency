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

const ShopifyExpertiseSection: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans flex flex-col items-center justify-center py-20">
      {/* Centered Heading for the entire section - Shopify-focused content */}
      <div className="text-center mb-16 px-6 max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          Elevate Your <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">Shopify Store</span>
        </h2>
      </div>

      {/* Main grid container - Layout maintained exactly as provided */}
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl w-full">
        {/* Top Left Section: Shopify Store Design & Development */}
        <div className="flex flex-col justify-center p-8 sm:p-12 md:p-16 lg:p-20">
          <h3 className="text-4xl sm:text-5xl lg:text-5xl font-bold mb-6 leading-tight">
            Custom Shopify Solutions
          </h3>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-xl">
            Our team specializes in crafting visually stunning and conversion-focused Shopify stores tailored to your brand. From bespoke theme design to seamless user experiences, we ensure your online shop stands out and drives sales. Whether you’re launching a new store or revamping an existing one.
          </p>
        </div>

        {/* Top Right Section: Image - Shopify store visual */}
        <div className="flex items-center justify-center overflow-hidden">
          <img
            src="/shomain1.jpg"
            alt="Modern Shopify store interface on a digital device"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = "https://placehold.co/600x400/E0E0E0/333333?text=Image+Error";
              e.currentTarget.alt = "Image failed to load";
            }}
          />
        </div>

        {/* Bottom Left Section: Image - Shopify branding visual */}
        <div className="flex items-center justify-center overflow-hidden">
          <img
            src="/shomain2.jpg"
            alt="Shopify branding and e-commerce visuals"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = "https://placehold.co/600x400/E0E0E0/333333?text=Image+Error";
              e.currentTarget.alt = "Image failed to load";
            }}
          />
        </div>

        {/* Bottom Right Section: Shopify Integrations & Optimization */}
        <div className="flex flex-col justify-center p-8 sm:p-12 md:p-16 lg:p-20">
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-xl">
            Unlock the full potential of Shopify with powerful integrations and ongoing optimization. We implement essential apps, payment gateways, and marketing tools to streamline your operations and boost conversions. Our experts continuously analyze performance, optimize for speed, and enhance your store’s functionality to deliver a seamless shopping experience for your customers.
            
            We also provide expert guidance on Shopify SEO best practices to help your store rank higher and attract more organic traffic.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShopifyExpertiseSection;