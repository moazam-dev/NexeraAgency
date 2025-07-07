import { useState } from "react";
import { useLocation } from 'wouter';
type Service = {
  title: string;
  imageUrl: string;
  hoverText: string;
};

const NewServiceCard = ({ title, imageUrl, hoverText , onClick}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer bg-gray-800 flex flex-col items-center justify-end h-[300px] text-center transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        src={imageUrl}
        alt={title}
        className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-300 ${
          isHovered ? "blur-sm scale-105" : "blur-0 scale-100"
        }`}
      />
      <div 
        className={`absolute bottom-4 z-20 text-white font-bold text-xl transition-all duration-300 ${
          isHovered ? "opacity-0 -translate-y-6" : "opacity-100"
        }`}
      >
        {title}
      </div>

      {isHovered && (
        <p className="absolute bottom-4 z-20 text-gray-300 text-sm px-4 transition-all duration-300 opacity-100 translate-y-0">
          {hoverText}
        </p>
      )}

      <div className="absolute inset-0 z-10 transition-all duration-300 bg-black/70" onClick={onClick}></div>
    </div>
  );
};

const ServicesSection = () => {
  const [showAll, setShowAll] = useState(false);
  const [, navigate] = useLocation();
  const services: Service[] = [
    {
      title: "Web Development",
      imageUrl: "https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg?auto=compress&cs=tinysrgb&w=800",
      hoverText: "Crafting stunning and responsive websites.",
    },
    {
      title: "Mobile App Development",
      imageUrl: "https://images.pexels.com/photos/6078128/pexels-photo-6078128.jpeg?auto=compress&cs=tinysrgb&w=800",
      hoverText: "Building apps for iOS and Android platforms.",
    },
    {
      title: "UI/UX Design",
      imageUrl: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      hoverText: "Designing seamless and beautiful user experiences.",
    },
    {
      title: "Digital Marketing",
      imageUrl: "https://images.pexels.com/photos/3184463/pexels-photo-3184463.jpeg?auto=compress&cs=tinysrgb&w=800",
      hoverText: "Boosting your reach with smart strategies.",
    },
    {
      title: "SEO Optimization",
      imageUrl: "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=800",
      hoverText: "Improving rankings and driving organic traffic.",
    },
    {
      title: "Cloud Services",
      imageUrl: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
      hoverText: "Deploying secure and scalable cloud setups.",
    },
    {
      title: "Brand Identity",
      imageUrl: "https://images.pexels.com/photos/3527537/pexels-photo-3527537.jpeg?auto=compress&cs=tinysrgb&w=800",
      hoverText: "Creating memorable brand experiences.",
    },
    {
      title: "E-Commerce Solutions",
      imageUrl: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=800",
      hoverText: "Custom online store development.",
    },
    {
      title: "Content Creation",
      imageUrl: "https://images.pexels.com/photos/4050347/pexels-photo-4050347.jpeg?auto=compress&cs=tinysrgb&w=800",
      hoverText: "Crafting content that connects and converts.",
    },
    {
      title: "Analytics & Insights",
      imageUrl: "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=800",
      hoverText: "Making data-driven decisions with confidence.",
    },
    {
      title: "Maintenance & Support",
      imageUrl: "https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=800",
      hoverText: "Keeping your systems secure and up-to-date.",
    },
    {
      title: "AI Integration",
      imageUrl: "https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg?auto=compress&cs=tinysrgb&w=800",
      hoverText: "Automating workflows using AI and ML tools.",
    },
  ];

  const visibleServices = showAll ? services : services.slice(0, 4);

  return (
    <section className="py-16 px-4 bg-black text-white">
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

      <div
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-700`}
      >
        {visibleServices.map((service, index) => (
          <NewServiceCard
            key={index}
            title={service.title}
            imageUrl={service.imageUrl}
            hoverText={service.hoverText}
            onClick={()=>navigate("/web-development")}
          />
        ))}
      </div>

        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center justify-center gap-3 px-10 py-5 text-2xl font-semibold text-white border-2 border-white rounded-full hover:bg-white hover:text-black transition-all duration-300"
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

export default ServicesSection;
