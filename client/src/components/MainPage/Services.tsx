import { useState } from "react";

type Service = {
  title: string;
  imageUrl: string;
  hoverText: string;
};

const NewServiceCard = ({ title, imageUrl, hoverText }: Service) => {
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

      <div className="absolute inset-0 z-10 transition-all duration-300 bg-black/70"></div>
    </div>
  );
};

const ServicesSection = () => {
  const [showAll, setShowAll] = useState(false);

  const services: Service[] = [
    {
      title: "Web Development",
      imageUrl: "/web.jpg",
      hoverText: "Crafting stunning and responsive websites.",
    },
     {
      title: "Mobile App Development",
      imageUrl: "/app.jpg",
      hoverText: "Building apps for iOS and Android platforms.",
    },
    {
      title: "Brand Identity",
      imageUrl: "/brandid.jpg",
      hoverText: "Creating memorable brand experiences.",
    },
    {
      title: "Maintenance & Support",
      imageUrl: "/mainsup.jpg",
      hoverText: "Keeping your systems secure and up-to-date.",
    },
     {
      title: "E-Commerce Solutions",
      imageUrl: "/ecom.jpg",
      hoverText: "Custom online store development.",
    },
   
    {
      title: "WordPress",
      imageUrl: "/wordp.jpg",
      hoverText: "Professional WordPress website development and customization.",
    },
    {
      title: "Shopify",
      imageUrl: "/shopify.jpg",
      hoverText: "Building and optimizing Shopify stores for your business.",
    },
    {
      title: "Creative Designing",
      imageUrl: "/cretdes.jpg",
      hoverText: "Innovative graphic and creative design solutions.",
    },
    {
      title: "Content Creation",
      imageUrl: "/contcrea.jpg",
      hoverText: "Crafting content that connects and converts.",
    },
    {
      title: "UI/UX Design",
      imageUrl: "/uxui.jpg",
      hoverText: "Designing seamless and beautiful user experiences.",
    },
   
    {
      title: "Video Editing",
      imageUrl: "/vedioed.jpg",
      hoverText: "Professional video editing for all your needs.",
    },
    {
      title: "Digital Marketing",
      imageUrl: "/mark.jpg",
      hoverText: "Boosting your reach with smart strategies.",
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
          />
        ))}
      </div>

        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center justify-center gap-3 px-10 py-5 text-lg font-semibold text-white border-2 border-white rounded-full hover:bg-white hover:text-black transition-all duration-300"
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
