import React from 'react';

const DigitalFrontiersSection: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans flex flex-col items-center justify-center py-20">
      {/* Centered Heading for the entire section */}
      <div className="text-center mb-16 px-6 max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          Building the <span className="bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">Future of the Web</span>
        </h2>
      </div>

      {/* Main grid container */}
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl w-full">
        {/* Top Left Section: Web Development Content */}
        <div className="flex flex-col justify-center p-8 sm:p-12 md:p-16 lg:p-20">
          <h3 className="text-4xl sm:text-5xl lg:text-5xl font-bold mb-6 leading-tight text-gray-900">
            End-to-End Custom Web Solutions
          </h3>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-xl">
            We build bespoke websites and web applications from the ground up, including e-commerce platforms, custom CRMs, and enterprise-level SaaS products. Our focus is on creating clean, efficient code and scalable architecture that powers fast, secure, and reliable digital experiences for your users, ensuring long-term maintainability and performance. This ensures your platform can handle sudden traffic spikes and scale as your business grows.
          </p>
        </div>

        {/* Top Right Section: Web Development Image */}
        <div className="flex items-center justify-center overflow-hidden">
          <img
            src="/webmain1.jpg"
            alt="A screen displaying clean, well-structured code for a web application"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = "https://placehold.co/600x400/E0E0E0/333333?text=Image+Error";
              e.currentTarget.alt = "Image failed to load";
            }}
          />
        </div>

        {/* Bottom Left Section: Responsive Design Image */}
        <div className="flex items-center justify-center overflow-hidden">
          <img
            src="webmain2.jpg"
            alt="A website shown on multiple devices (desktop, tablet, and mobile) to demonstrate responsive design"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = "https://placehold.co/600x400/E0E0E0/333333?text=Image+Error";
              e.currentTarget.alt = "Image failed to load";
            }}
          />
        </div>

        {/* Bottom Right Section: Web Development Content */}
        <div className="flex flex-col justify-center p-8 sm:p-12 md:p-16 lg:p-20">
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-xl">
            Our process covers everything from UI/UX design and front-end development with modern frameworks like React and Vue, to robust back-end engineering with Node.js and Python. We follow agile methodologies to ensure flexibility and transparency, and we handle cloud deployment and CI/CD pipelines. We ensure your website looks great and functions perfectly on all devices, from desktops to smartphones, and we offer ongoing support to keep it running smoothly. Our collaborative sprints keep you involved at every stage, ensuring the final product aligns perfectly with your vision.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DigitalFrontiersSection;
