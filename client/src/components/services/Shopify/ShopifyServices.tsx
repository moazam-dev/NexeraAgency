import React from 'react';
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import s1 from "./sho1.png";
import s2 from "./sho2.jpg"; // Different extension
import s3 from "./sho3.png";
import s4 from "./sho4.jpg";
import s5 from "./sho5.jpg";
import s6 from "./sho6.jpg";
import s7 from "./sho7.jpg";
import s8 from "./sho8.png";
import s9 from "./sho9.jpg";

export default function WebDevelopmentServices() {
  const { ref, isInView } = useScrollAnimation();

  const services = [
    {
      title: "Custom Shopify Store Design",
      description: "We create visually stunning, brand-aligned Shopify storefronts that engage visitors and drive conversions, tailored to your unique business goals.",
      image: s1,
      isSpecial: true
    },
    {
      title: "Shopify Theme Development",
      description: "From scratch or customization, we build responsive, high-performance Shopify themes that deliver seamless shopping experiences across all devices.",
      image: s2
    },
    {
      title: "App Integration & Automation",
      description: "Integrate essential Shopify apps, payment gateways, and marketing tools to automate operations and enhance your store’s capabilities.",
      image: s3
    },
    {
      title: "Product & Inventory Management",
      description: "Streamline your product uploads, categorization, and inventory tracking for efficient store management and a smooth customer experience.",
      image: s4
    },
    {
      title: "Shopify SEO & Conversion Optimization",
      description: "Boost your store’s visibility and sales with expert Shopify SEO, speed optimization, and conversion-focused enhancements.",
      image: s5
    },
    {
      title: "Migration to Shopify",
      description: "Seamlessly migrate your existing store from any platform to Shopify with zero data loss and minimal downtime.",
      image: s6
    },
    {
      title: "Ongoing Maintenance & Support",
      description: "Keep your Shopify store secure, up-to-date, and running smoothly with our proactive maintenance and expert support services.",
      image: s7
    },
    {
      title: "Shopify Store Redesign",
      description: "Revamp your existing Shopify store with a fresh, modern look and improved user experience to boost engagement and sales.",
      image: s8
    },
    {
      title: "Multi-Channel & International Setup",
      description: "Expand your reach by connecting your Shopify store to marketplaces, social platforms, and enabling multi-currency and multi-language support.",
      image: s9
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
            Our Shopify <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">Expertise</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer end-to-end Shopify store design and development services, from custom themes and app integrations to SEO, migration, and ongoing support. Let us help you build, grow, and optimize your Shopify business for lasting success.
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
