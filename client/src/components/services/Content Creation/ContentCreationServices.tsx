import React from 'react';
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import cc1 from "./cc1.jpg";
import cc2 from "./cc2.jpg";
import cc3 from "./cc3.jpg";
import cc4 from "./cc4.jpg";
import cc5 from "./cc5.jpg";
import cc6 from "./cc6.jpg";
import cc7 from "./cc7.jpg";
import cc8 from "./cc8.jpg";
import cc9 from "./cc9.jpg";

export default function ContentCreationServices() {
  const { ref, isInView } = useScrollAnimation();

  const services = [
    {
      title: "Copywriting & Editorial",
      description: "Engaging blog posts, articles, and website copy tailored to your brand voice and audience, optimized for SEO and impact.",
      image: cc1,
      isSpecial: true
    },
    {
      title: "Video Production",
      description: "Professional video content from concept to final edit, including promotional videos, interviews, and social media clips that tell your story visually.",
      image: cc2
    },
    {
      title: "Content Strategy",
      description: "Comprehensive planning and strategy to ensure your content aligns with business goals, audience needs, and market trends.",
      image: cc3
    },
    {
      title: "Social Media Content",
      description: "Creative and consistent content for all major social platforms, designed to boost engagement and grow your online presence.",
      image: cc4
    },
    {
      title: "Brand Storytelling",
      description: "Crafting compelling brand narratives that connect emotionally with your audience and differentiate you from competitors.",
      image: cc5
    },
    {
      title: "Graphic Design & Infographics",
      description: "Visually stunning graphics and infographics that simplify complex ideas and make your content more shareable.",
      image: cc6
    },
    {
      title: "Photography",
      description: "Professional photography services to capture your products, team, and events with creativity and clarity.",
      image: cc7
    },
    {
      title: "Content Audits & Optimization",
      description: "In-depth analysis and improvement of your existing content to maximize performance and ROI.",
      image: cc8
    },
    {
      title: "Content Localization",
      description: "Adapting your content for different languages and cultures to reach a global audience effectively.",
      image: cc9
    }
  ];

  return (
    <section id="content-creation-services" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Our Content <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">Expertise</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From compelling copy to stunning visuals, our content creation services help you connect, engage, and grow your audience across every platform.
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
