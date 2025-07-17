import React from 'react';
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import e1 from "./ecom1.jpg";
import e2 from "./ecom2.jpg";
import e3 from "./ecom3.jpg";
import e4 from "./ecom4.jpg";
import e5 from "./ecom5.jpg";
import e6 from "./ecom6.jpg";
import e7 from "./ecom7.jpg";
import e8 from "./ecom8.jpg";
import e9 from "./ecom9.jpg";

export default function WebDevelopmentServices() {
  const { ref, isInView } = useScrollAnimation();

  const services = [
    {
      title: "eCommerce Store Setup",
      description: "Launch your online store with a robust, scalable platform tailored to your brand and business goals.",
      image: e1,
      isSpecial: true
    },
    {
      title: "Product & Inventory Management",
      description: "Easily manage products, categories, and inventory with intuitive tools that keep your store organized and up to date.",
      image: e2
    },
    {
      title: "Payment Gateway Integration",
      description: "Offer secure, seamless payment options with support for all major gateways, including Stripe, PayPal, and more.",
      image: e3
    },
    {
      title: "Shopping Cart & Checkout",
      description: "Deliver a frictionless shopping experience with optimized cart and checkout flows that boost conversions.",
      image: e4
    },
    {
      title: "Mobile Commerce",
      description: "Reach customers on any device with responsive, mobile-first eCommerce solutions that drive sales everywhere.",
      image: e5
    },
    {
      title: "Omnichannel Solutions",
      description: "Unify your brand across web, mobile, and marketplaces for a seamless customer experience and expanded reach.",
      image: e6
    },
    {
      title: "Analytics & Conversion Optimization",
      description: "Track performance, analyze customer behavior, and optimize your store to maximize sales and growth.",
      image: e7
    },
    {
      title: "Customer Support Tools",
      description: "Enhance customer satisfaction with integrated support tools like live chat, help desks, and automated responses.",
      image: e8
    },
    {
      title: "Marketing Automation",
      description: "Boost engagement and repeat sales with automated email campaigns, abandoned cart recovery, and personalized offers.",
      image: e9
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
            Our E-Commerce <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From seamless online stores to advanced integrations, our comprehensive e-commerce services empower your business to sell, scale, and succeed in the digital marketplace.
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
              <div className="service-card-overlay absolute inset-0 bg-gradient-to-t from-black/95 via-black/85 to-black/40 transition-all duration-1000"></div>

              {/* Content - Positioned at the top of the card */}
              <div className="service-card-content absolute top-0 left-0 w-full h-full p-6 text-white z-10 flex flex-col justify-between">
                <div> {/* Container for title and description */}
                  {/* Title - Stays constant on top */}
                  <h3 className="service-card-title text-xl font-bold mb-3">
                    {/* E-commerce specific service titles */}
                    {[
                      "Custom Online Storefronts",
                      "Payment Gateway Integration",
                      "Mobile Commerce Solutions",
                      "Inventory & Order Management",
                      "Multi-Channel Selling",
                      "Subscription & Membership Systems",
                      "E-Commerce Analytics & Reporting",
                      "Secure Checkout & Fraud Prevention",
                      "Ongoing Store Maintenance"
                    ][index]}
                  </h3>
                  {/* Description - Appears smoothly from the right on hover */}
                  <p className="service-card-description text-sm text-white/90 leading-relaxed opacity-0 max-h-0 overflow-hidden 
                            transition-all duration-1000 group-hover:opacity-100 group-hover:max-h-32 
                            transform translate-x-10 group-hover:translate-x-0">
                    {/* E-commerce specific service descriptions */}
                    {[
                      "We design and build visually stunning, conversion-focused online stores tailored to your brand and audience.",
                      "Integrate leading payment gateways for secure, seamless transactions and global reach.",
                      "Deliver a flawless shopping experience on any device with responsive, mobile-first e-commerce solutions.",
                      "Automate inventory tracking, order processing, and fulfillment for efficient store operations.",
                      "Expand your reach by selling across multiple platforms—Amazon, eBay, social media, and more.",
                      "Launch and manage subscription boxes, digital memberships, and recurring billing with ease.",
                      "Gain actionable insights with advanced analytics, sales tracking, and performance dashboards.",
                      "Protect your customers and business with secure checkout, SSL, and anti-fraud measures.",
                      "Keep your store running smoothly with regular updates, support, and performance optimization."
                    ][index]}
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
