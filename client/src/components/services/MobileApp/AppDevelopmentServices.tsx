import React from 'react';
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import cust from "./custapp.png";
import cp from "./crssplat.jpg";
import uiuxapp from "./uxuiapp.png";
import apiintapp from "./apiintapp.jpg";
import iosapp from "./iosapp.jpg";
export default function AppDevelopmentServices() {
  const { ref, isInView } = useScrollAnimation();

  const services = [
    {
      title: "Custom Mobile App Development",
      description: "We build bespoke mobile applications tailored to your business goals, delivering seamless user experiences and robust functionality for both iOS and Android platforms.",
      image:cust,
      isSpecial: true
    },
    {
      title: "Cross-Platform App Development",
      description: "Reach a wider audience with cross-platform apps using React Native or Flutter, ensuring consistent performance and appearance across all devices.",
      image: cp
    },
    {
      title: "UI/UX Design for Mobile",
      description: "Our design team crafts intuitive, visually appealing interfaces that engage users and enhance retention, focusing on mobile-first principles.",
      image: "/uxuiapp.png"
    },
    {
      title: "App Maintenance & Support",
      description: "We provide ongoing updates, bug fixes, and performance optimization to keep your app secure, up-to-date, and running smoothly.",
      image: uiuxapp
    },
    {
      title: "API & Third-Party Integrations",
      description: "Integrate your app with powerful APIs and third-party services to extend functionality, enable payments, notifications, analytics, and more.",
      image: apiintapp
    },
    {
      title: "App Store Deployment",
      description: "We handle the entire submission process for the App Store and Google Play, ensuring your app meets all guidelines and reaches your users quickly.",
      image: iosapp
    }
  ];

  return (
    <section id="app-development-services" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Our Mobile App <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From concept to launch, we deliver high-quality mobile applications that drive engagement and business growth.
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
              <div className="service-card-overlay absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/30 transition-all duration-1000"></div>


              {/* Content - Positioned at the top of the card */}
              <div className="service-card-content absolute top-0 left-0 w-full h-full p-6 text-white z-10 flex flex-col justify-between">
                <div>
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
