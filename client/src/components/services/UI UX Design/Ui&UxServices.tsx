import React from 'react';
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function WebDevelopmentServices() {
  const { ref, isInView } = useScrollAnimation();

  const services = [
    {
      title: "User Research & Analysis",
      description: "We uncover user needs and behaviors through research, interviews, and analytics to inform every design decision and create meaningful experiences.",
      image: "/ux1.jpg", // Tech image: person typing on laptop
      isSpecial: true
    },
    {
      title: "Wireframing & Prototyping",
      description: "We bring ideas to life with interactive wireframes and prototypes, allowing you to visualize and test user flows before development begins.",
      image: "/ux2.jpg" // Tech image: shopping cart with digital elements
    },
    {
      title: "UI Design Systems",
      description: "We create scalable design systems and style guides to ensure visual consistency and efficiency across all your digital products.",
      image: "/ux3.jpg" // Tech image: data flow/server room
    },
    {
      title: "Visual Interface Design",
      description: "We design visually stunning and brand-aligned interfaces that captivate users and communicate your message clearly.",
      image: "/ux4.jpg" // Tech image: close-up of code on screen
    },
    {
      title: "Interaction & Motion Design",
      description: "We craft engaging micro-interactions and animations that enhance usability and bring interfaces to life.",
      image: "/ux5.jpg" // Tech image: circuit board
    },
    {
      title: "Usability Testing",
      description: "We validate designs with real users, gathering feedback and insights to refine and optimize the user experience.",
      image: "/ux6.jpg" // Tech image: team collaborating on digital project
    },
    {
      title: "Accessibility Design",
      description: "We ensure your digital products are accessible to everyone, meeting standards and best practices for inclusive design.",
      image: "/ux7.jpg" // Tech image: abstract data security
    },
    {
      title: "Mobile & Responsive Design",
      description: "We design seamless experiences across all devices, ensuring your product looks and works great everywhere.",
      image: "/ux8.jpg" // Tech image: abstract digital design on monitor
    },
    {
      title: "UX Audits & Consulting",
      description: "We analyze your existing products and provide actionable recommendations to improve usability, engagement, and conversion.",
      image: "/ux9.jpg" // Tech image: person with data overlay, responsive feel
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
            Our UX/UI <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">Expertise</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From research and wireframes to polished interfaces and usability testing, our UX/UI services cover every step needed to create delightful, effective digital experiences.
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
