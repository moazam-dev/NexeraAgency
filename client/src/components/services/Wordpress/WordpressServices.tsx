import React from 'react';
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import w1 from "./w1.jpg";
import w2 from "./w2.jpg";
import w3 from "./w3.jpg";
import w4 from "./w4.jpg";
import w5 from "./w5.jpg";
import w6 from "./w6.jpg";
import w7 from "./w7.jpg";
import w8 from "./w8.jpg";
import w9 from "./w9.png";

export default function WebDevelopmentServices() {
  const { ref, isInView } = useScrollAnimation();

  const services = [
    {
      title: "Custom WordPress Themes",
      description: "We design and develop unique WordPress themes tailored to your brand, ensuring a visually stunning and fully responsive website that stands out.",
      image: w1, // Tech image: person typing on laptop
      isSpecial: true
    },
    {
      title: "WordPress E-Commerce",
      description: "Launch a powerful online store with WooCommerce and custom integrations. We build secure, scalable e-commerce solutions for seamless shopping experiences.",
      image: w2
    },
    {
      title: "Plugin Development",
      description: "Extend your site's functionality with custom WordPress plugins built to your exact requirements, from booking systems to advanced integrations.",
      image: w3
    },
    {
      title: "Performance Optimization",
      description: "We optimize your WordPress site for speed, reliability, and scalability, ensuring fast load times and a smooth user experience on any device.",
      image: w4
    },
    {
      title: "Security & Maintenance",
      description: "Protect your WordPress site with robust security measures, regular updates, and ongoing maintenance to keep your data and users safe.",
      image: w5
    },
    {
      title: "WordPress Migration",
      description: "Seamlessly migrate your website to WordPress or between hosts with zero downtime and complete data integrity.",
      image: w6
    },
    {
      title: "Ongoing Support",
      description: "Enjoy peace of mind with our dedicated WordPress support, covering troubleshooting, updates, and technical assistance whenever you need it.",
      image: w7
    },
    {
      title: "SEO for WordPress",
      description: "Boost your site's visibility with expert SEO strategies tailored for WordPress, including on-page optimization, schema, and performance enhancements.",
      image: w8
    },
    {
      title: "Multilingual & Accessibility",
      description: "Reach a global audience with multilingual WordPress solutions and ensure your site is accessible to all users, meeting modern web standards.",
      image: w9
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
            Our WordPress <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From custom themes and plugins to e-commerce, SEO, and ongoing support, our WordPress services empower your business to thrive online with a secure, high-performing, and beautifully designed website.
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
