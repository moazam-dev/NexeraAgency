import React, { useState, useRef, useEffect } from "react";
import { Link } from "wouter"; // Import the Link component for navigation
import web from "../web.jpg";
import app from "../app.jpg";
import brand from "../brandid.jpg";
import maintain from "../mainsup.jpg";
import ecommerce from "../ecom.jpg";
import wordpress from "../wordp.jpg";
import shopify from "../shopify.jpg";
import creativeDesign from "../cretdes.jpg";
import contentCreation from "../contcrea.jpg";
import UiUx from "../uxui.jpg";
import videoEditing from "../vedioed.jpg";
import digitalMarketing from "../mark.jpg";
// Updated Service type to include a navigation path
type Service = {
  title: string;
  imageUrl: string;
  hoverText: string;
  path: string; // The URL path for the service page
};

const NewServiceCard = ({ title, imageUrl, hoverText }: Omit<Service, 'path'>) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    // Main card container: Adds group for hover effects, subtle lift and scale, faster transition
    <div
      className={`relative overflow-hidden shadow-lg cursor-pointer bg-gray-800 flex flex-col items-center justify-end h-[300px] text-center rounded-none
               transition-all duration-150 ease-out group`} // Added 'group' class for hover effects
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ willChange: 'transform, box-shadow' }} // Hint for browser optimization
    >
      {/* Image: More pronounced zoom, blur, and color on hover, faster transition */}
      <img
        src={imageUrl}
        alt={title}
        className={`absolute top-0 left-0 w-full h-full object-cover
                   transition-all duration-150 ease-out
                   ${isHovered ? "scale-110 blur-sm grayscale-0" : "scale-100 blur-0 grayscale-[70%]"}`} // Increased scale, blur, and grayscale effect
        style={{ willChange: 'transform, filter' }} // Hint for browser optimization
        // Fallback for images in case the URL is broken or image fails to load
        onError={(e) => {
          e.currentTarget.src = `https://placehold.co/600x400/CCCCCC/000000?text=Image+Error`;
          e.currentTarget.onerror = null; // Prevent infinite loop if fallback also fails
        }}
      />
      {/* Overlay for darkening the image and ensuring text readability: Darkens more on hover, faster transition */}
      <div
        className={`absolute inset-0 z-10 transition-all duration-150 ease-out
                   ${isHovered ? "bg-black/70" : "bg-black/30"}`} // Overlay darkens more on hover
        style={{ willChange: 'background-color' }} // Hint for browser optimization
      ></div>

      {/* Container for both title and hover text, positioned at the bottom */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-end p-4">
        {/* Title visibility controlled by hover state - slides up and fades out, faster transition */}
        <div
          className={`text-white font-bold text-xl mb-2 absolute
                     transition-all duration-150 ease-out
                     ${isHovered ? "opacity-0 -translate-y-4" : "opacity-100 translate-y-0"}`} // Title slides up and disappears on hover
          style={{ willChange: 'opacity, transform' }} // Hint for browser optimization
        >
          {title}
        </div>

        {/* Hover text appears only on hover - slides up and fades in, faster transition */}
        <p
          className={`text-gray-300 text-sm px-2 text-center absolute
                     transition-all duration-150 ease-out
                     ${isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} // Hover text slides up and appears on hover
          style={{ willChange: 'opacity, transform' }} // Hint for browser optimization
        >
          {hoverText}
        </p>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    if (!showAll && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [showAll]);

  // Array of service objects with added 'path' for navigation
  const services: Service[] = [
    {
      title: "Web Development",
      imageUrl: web,
      hoverText: "Crafting stunning and responsive websites.",
      path: "/web-development",
    },
    {
      title: "Mobile App Development",
      imageUrl: app,
      hoverText: "Building apps for iOS and Android platforms.",
      path: "/app-development",
    },
    {
      title: "Brand Identity",
      imageUrl: brand,
      hoverText: "Creating memorable brand experiences.",
      path: "/brand-identity",
    },
    {
      title: "Maintenance & Support",
      imageUrl: maintain,
      hoverText: "Keeping your systems secure and up-to-date.",
      path: "/maintenance-support",
    },
    {
      title: "E-Commerce Solutions",
      imageUrl: ecommerce,
      hoverText: "Custom online store development.",
      path: "/ecommerce-solutions",
    },
    {
      title: "WordPress",
      imageUrl: wordpress,
      hoverText: "Professional WordPress website development and customization.",
      path: "/wordpress-development",
    },
    {
      title: "Shopify",
      imageUrl: shopify,
      hoverText: "Building and optimizing Shopify stores for your business.",
      path: "/shopify-development",
    },
    
    {
      title: "Creative Designing",
      imageUrl: creativeDesign,
      hoverText: "Innovative graphic and creative design solutions.",
      path: "/creative-designing",
    },
    {
      title: "Content Creation",
      imageUrl: contentCreation,
      hoverText: "Crafting content that connects and converts.",
      path: "/content-creation",
    },
    {
      title: "UI/UX Design",
      imageUrl: UiUx,
      hoverText: "Designing seamless and beautiful user experiences.",
      path: "/ui-ux-design",
    },
    {
      title: "Video Editing",
      imageUrl: videoEditing,
      hoverText: "Professional video editing for all your needs.",
      path: "/video-editing",
    },
    {
      title: "Digital Marketing",
      imageUrl: digitalMarketing,
      hoverText: "Boosting your reach with smart strategies.",
      path: "/digital-marketing",
    },
  ];

  const visibleServices = showAll ? services : services.slice(0, 4);

  return (
    <section className="py-16 px-4 bg-black text-white font-sans" ref={sectionRef}>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-4">
          SERVICES WE OFFER
        </h2>
        <p className="text-xl text-gray-400 max-w-xl mx-auto">
          We provide a comprehensive suite of services <br />
          to help your business thrive in the{" "}
          <span className="bg-[#2e2e2e] text-white italic px-2 py-0 rounded-xl inline-block">
            digital landscape.
          </span>
        </p>
      </div>

      {/* Grid for displaying service cards, responsive layout */}
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-700`}
      >
        {visibleServices.map((service) => (
          // Each card is wrapped in a Link component to make it clickable
          <Link key={service.path} href={service.path}>
            <a className="block"> {/* The anchor tag is used for semantic navigation */}
              <NewServiceCard
                title={service.title}
                imageUrl={service.imageUrl}
                hoverText={service.hoverText}
              />
            </a>
          </Link>
        ))}
      </div>

      {/* Button to toggle between showing more or fewer services */}
      <div className="mt-10 flex justify-center">
        <button
          onClick={() => setShowAll(!showAll)}
          className="flex items-center justify-center gap-3 px-6 py-3 mt-7 text-lg font-semibold text-white border-2 border-white rounded-full hover:bg-white hover:text-black transition-all duration-300"
        >
          {showAll ? "View Less Services" : "View More Services"}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-6 h-6 transition-transform duration-300 ${showAll ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </section>
  );
};

// Main App component to render the ServicesSection
export default function App() {
  return (
    <div className="min-h-screen bg-black font-sans">
      <ServicesSection />
    </div>
  );
}
