import React, { useState } from 'react';
import app1 from "./firstapp.jpg";
import app2 from "./apiapp.jpg";
// Custom hook to handle image loading with fallback
const useImageFallback = (src: string, fallbackSrc: string) => {
  const [imgSrc, setImgSrc] = useState(src);
  
  const handleError = () => {
    setImgSrc(fallbackSrc);
  };
  
  return { imgSrc, handleError };
};

const DigitalFrontiersSection: React.FC = () => {
  const fallbackSrc = "https://placehold.co/600x400/E0E0E0/333333?text=Image+Error";
  
  const topRightImage = useImageFallback(app1,fallbackSrc);
  const bottomLeftImage = useImageFallback(app2,fallbackSrc);

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans flex flex-col items-center justify-center py-20">
      {/* Centered Heading for the entire section */}
      <div className="text-center mb-16 px-6 max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          Leading <span className="gradient-text">App Development</span>
        </h2>
      </div>

      {/* Main grid container */}
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl w-full">
        {/* Top Left Section: App Development Content */}
        <div className="flex flex-col justify-center p-8 sm:p-12 md:p-16 lg:p-20">
          <h3 className="text-4xl sm:text-5xl lg:text-5xl font-bold mb-6 leading-tight">
            Building Powerful Mobile Experiences
          </h3>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-xl">
           We build custom mobile applications for both iOS and Android platforms, tailored to your unique business needs. Our focus is on delivering high-performance, reliable apps that provide a smooth and intuitive user experience. Using the latest frameworks and native technologies, we design and develop mobile solutions that not only engage users but also support long-term business growth.
          </p>
        </div>

        {/* Top Right Section: App Development Image */}
        <div className="flex items-center justify-center overflow-hidden">
          <img
            src={topRightImage.imgSrc}
            alt="Mobile app development team working on UI"
            className="w-full h-full object-cover"
            onError={topRightImage.handleError}
          />
        </div>

        {/* Bottom Left Section: App Design Image */}
        <div className="flex items-center justify-center overflow-hidden">
          <img
            src={bottomLeftImage.imgSrc}
            alt="Mobile app design wireframes and devices"
            className="w-full h-full object-cover"
            onError={bottomLeftImage.handleError}
          />
        </div>

        {/* Bottom Right Section: App Development Content */}
        <div className="flex flex-col justify-center p-8 sm:p-12 md:p-16 lg:p-20">
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-xl">
           From concept to launch, we manage every stage of mobile app development — including strategy, UI/UX design, coding, testing, and deployment. Our process is end-to-end and detail-driven. We also integrate essential features such as push notifications, secure payment systems, real-time analytics, and third-party APIs to enhance functionality and user engagement. The result is a polished, feature-rich app that performs reliably and stands out in today’s competitive marketplace, while remaining scalable, secure, and ready to grow with your business.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DigitalFrontiersSection;