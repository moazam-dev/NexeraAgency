import React from 'react';
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import cd2 from "./creative2.jpg";
import cd3 from "./creative3.jpg";
import cd4 from "./creative4.jpg";
import cd5 from "./creative5.jpg";
import cd6 from "./creative6.jpg";
import cd1 from "./creative1.jpg";

export default function WebDevelopmentServices() {
  const { ref, isInView } = useScrollAnimation();

  const services = [
    {
      title: "Brand Identity Design",
      description: "We craft cohesive brand identities that capture your vision and set you apart with memorable visuals and consistent style.",
      image: cd1,
      isSpecial: true
    },
    {
      title: "Logo & Icon Design",
      description: "Our team creates distinctive logos and icons that make your brand instantly recognizable across all platforms.",
      image: cd2
    },
    {
      title: "UI/UX Design",
      description: "We design intuitive and visually engaging interfaces that deliver seamless user experiences for web and mobile applications.",
      image: cd3
    },
    {
      title: "Print & Digital Graphics",
      description: "From posters to social media graphics, we produce eye-catching designs that communicate your message effectively in any format.",
      image: cd4
    },
    {
      title: "Illustration & Artwork",
      description: "Custom illustrations and artwork that add personality and uniqueness to your brand, marketing, or product materials.",
      image: cd5
    },
    {
      title: "Packaging & Product Design",
      description: "We design attractive, functional packaging and product visuals that enhance shelf appeal and user experience.",
      image: cd6
    }
  ];
  return (
    <section id="web-development-services" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Our Creative <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500"> Design Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer a full suite of creative design services—from brand identity and illustration to UI/UX and packaging—helping you stand out with visuals that inspire and engage.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`service-card group cursor-pointer overflow-hidden relative h-96 ${
                service.isSpecial ? 'masked-card' : ''
              }`}
            >
              {/* Background Image - Smoothly zooms and blurs on hover */}
              <div 
                className="service-card-image absolute inset-0 bg-cover bg-center transition-all duration-1000 group-hover:scale-110 group-hover:blur-sm"
                style={{ backgroundImage: `url(${service.image})` }}
              ></div>

              {/* Overlay - Darker, always present gradient */}
              <div className="service-card-overlay absolute inset-0 bg-gradient-to-t from-black/95 via-black/85 to-black/60 transition-all duration-1000"></div>

              {/* Content - Positioned at the top of the card */}
              <div className="service-card-content absolute top-0 left-0 w-full h-full p-6 text-white z-10 flex flex-col justify-between">
                <div> {/* Container for title and description */}
                  {/* Title - Stays constant on top */}
                  <h3 className="service-card-title text-xl font-bold mb-3">
                    {service.title}
                  </h3>
                  
                  {/* Description - Appears smoothly from the right on hover */}
                  <p className="service-card-description text-sm text-white/90 leading-relaxed opacity-0 max-h-0 overflow-hidden 
                            transition-all duration-1000 group-hover:opacity-100 group-hover:max-h-32 
                            transform translate-x-10 group-hover:translate-x-0">
                    {service.description}
                  </p>
                </div>

                {/* Button - Now always visible, left-aligned, smaller, and with a unique hover effect */}
                <button className="service-card-button bg-teal-500 text-white px-4 py-2 rounded-full font-semibold text-sm 
                                transition-all duration-300 self-start w-fit
                                hover:bg-white hover:text-teal-500 hover:scale-105 hover:shadow-lg"> {/* Smaller padding, w-fit for minimum width, unique hover effect */}
                  Get In Touch
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
