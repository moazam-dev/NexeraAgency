import React from 'react';
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function WebDevelopmentServices() {
  const { ref, isInView } = useScrollAnimation();

  const services = [
    {
      title: "Cinematic Video Editing",
      description: "Transforming raw footage into compelling cinematic stories with seamless transitions, pacing, and creative vision.",
      image: "/vid1.jpg", // Tech image: person typing on laptop
      isSpecial: true
    },
    {
      title: "Social Media Video Production",
      description: "Crafting dynamic, shareable content tailored for every platform—perfect for brand awareness, engagement, and viral impact.",
      image: "/vid2.jpg" // Tech image: shopping cart with digital elements
    },
    {
      title: "Color Grading & Correction",
      description: "Enhancing the mood and style of your videos with professional color grading and correction for a polished, cinematic look.",
      image: "/vid3.jpg" // Tech image: data flow/server room
    },
    {
      title: "Sound Design & Mixing",
      description: "Immersing your audience with crisp audio, sound effects, and perfectly balanced music for a complete sensory experience.",
      image: "/vid4.jpg" // Tech image: close-up of code on screen
    },
    {
      title: "Motion Graphics & Animation",
      description: "Adding energy and clarity to your message with custom motion graphics, animated titles, and visual effects.",
      image: "/vid5.jpg" // Tech image: circuit board
    },
    {
      title: "Corporate & Event Videos",
      description: "Professional editing for corporate promos, interviews, and event highlights that showcase your brand and story.",
      image: "/vid6.jpg" // Tech image: team collaborating on digital project
    },
    {
      title: "YouTube & Content Creator Support",
      description: "Helping creators grow their channels with engaging edits, intros, outros, and content repurposing for maximum reach.",
      image: "/vid7.jpg" // Tech image: abstract data security
    },
    {
      title: "Promotional & Ad Videos",
      description: "Editing high-impact promotional videos and ads that drive conversions and leave a lasting impression.",
      image: "/vid8.jpg" // Tech image: abstract digital design on monitor
    },
    {
      title: "Reels, Shorts & Vertical Video",
      description: "Optimizing your content for mobile-first audiences with fast-paced, vertical edits for Instagram, TikTok, and more.",
      image: "/vid9.jpg" // Tech image: person with data overlay, responsive feel
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
            Our Video <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">Expertise</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From cinematic storytelling to social-ready content, our video editing services cover every aspect of post-production to make your message unforgettable.
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
              <div className="service-card-overlay absolute inset-0 bg-gradient-to-t from-black/80 via-black/70 to-black/50 transition-all duration-1000"></div>

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
