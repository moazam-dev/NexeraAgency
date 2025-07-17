import React from 'react';
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function WebDevelopmentServices() {
  const { ref, isInView } = useScrollAnimation();

  const services = [
    {
      title: "Proactive Monitoring",
      description: "Continuous monitoring of your website or application to detect and resolve issues before they impact your business.",
      image: "/ms1.jpg",
      isSpecial: true
    },
    {
      title: "Security Updates",
      description: "Regular security patches and updates to protect your digital assets from vulnerabilities and threats.",
      image: "/ms2.jpg",
    },
    {
      title: "Performance Optimization",
      description: "Ongoing tuning and improvements to ensure your site runs fast, efficiently, and delivers a great user experience.",
      image: "/ms3.jpg",
    },
    {
      title: "Regular Backups",
      description: "Automated and secure backups to safeguard your data and enable quick recovery in case of any issues.",
      image: "/ms4.jpg",
    },
    {
      title: "Troubleshooting & Bug Fixes",
      description: "Swift identification and resolution of technical issues, bugs, and errors to keep your site running smoothly.",
      image: "/ms5.jpg",
    },
    {
      title: "24/7 Technical Support",
      description: "Round-the-clock assistance from our expert team, ready to help you whenever you need it most.",
      image: "/ms6.jpg",
    },
    {
      title: "Uptime & Incident Response",
      description: "Immediate action and communication in the event of downtime or incidents, minimizing disruption to your business.",
      image: "/ms7.jpg",
    },
    {
      title: "Software Updates & Patch Management",
      description: "Keeping your software, plugins, and integrations up to date for security, compatibility, and performance.",
      image: "/ms8.jpg",
    },
    {
      title: "Scalability Planning",
      description: "Strategic planning and support to help your digital infrastructure grow and adapt as your business evolves.",
      image: "/ms9.jpg",
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
            Our <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">Maintenance & Support Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive maintenance and support services to keep your digital assets secure, up-to-date, and running at peak performance. From proactive monitoring and regular backups to 24/7 technical support, our team ensures your website or application is always reliable and ready for growth.
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
