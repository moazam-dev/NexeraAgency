import React from 'react';
import ccmain1 from "./ccmain1.jpg";
import ccmain2 from "./ccmain2.jpg";


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

const ContentCreationExpertise: React.FC = () => { // Renamed component to fit new theme
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans flex flex-col items-center justify-center py-20">
      {/* Centered Heading for the entire section - Changed content and added gradient */}
      <div className="text-center mb-16 px-6 max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          Crafting <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">Content That Captivates</span>
        </h2>
      </div>

      {/* Main grid container - Layout maintained exactly as provided */}
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl w-full">
        {/* Top Left Section: New Content for Digital Innovation */}
        <div className="flex flex-col justify-center p-8 sm:p-12 md:p-16 lg:p-20">
          <h3 className="text-4xl sm:text-5xl lg:text-5xl font-bold mb-6 leading-tight">
            Strategic Content Planning & Creation
          </h3>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-xl">
            We specialize in developing a comprehensive content strategy that aligns with your brand's voice and business goals. From engaging blog posts and articles to persuasive website copy, our focus is on creating high-quality, SEO-optimized content that resonates with your target audience and drives organic traffic.
          </p>
        </div>

        {/* Top Right Section: Image - Technological / Neon */}
        <div className="flex items-center justify-center overflow-hidden">
          <img
            src={ccmain1} // Image: Neon abstract monitor screen
            alt="A team collaborating on a content strategy storyboard"
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
            src={ccmain2} // Image: Face with digital overlay
            alt="A high-quality camera lens, symbolizing professional video and photo production"
            className="w-full h-full object-cover" // Layout maintained
            onError={(e) => {
              e.currentTarget.src = "https://placehold.co/600x400/E0E0E0/333333?text=Image+Error";
              e.currentTarget.alt = "Image failed to load";
            }}
          />
        </div>

        {/* Bottom Right Section: New Content for AI-Driven Experiences */}
        <div className="flex flex-col justify-center p-8 sm:p-12 md:p-16 lg:p-20">
           
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-xl">
            Our team of creative professionals excels in visual storytelling. We produce high-impact videos, compelling infographics, and professional photography that bring your brand's narrative to life. We combine artistry with marketing expertise to create visuals that not only look great but also perform. We handle everything from pre-production planning to post-production editing, ensuring a polished final product. Our goal is to create immersive experiences that capture attention and drive engagement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContentCreationExpertise; // Exporting with new name