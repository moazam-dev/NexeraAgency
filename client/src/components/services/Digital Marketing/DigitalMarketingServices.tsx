import React from 'react';
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function WebDevelopmentServices() {
  const { ref, isInView } = useScrollAnimation();

  const services = [
    {
      title: "Search Engine Optimization (SEO)",
      description: "Boost your website’s visibility and attract organic traffic with proven SEO strategies tailored to your business goals.",
      image: "/digital1.jpg",
      isSpecial: true
    },
    {
      title: "Social Media Marketing",
      description: "Engage your audience and grow your brand across all major social platforms with creative campaigns and targeted content.",
      image: "/digital2.jpg",
    },
    {
      title: "Pay-Per-Click (PPC) Advertising",
      description: "Drive instant results and maximize ROI with expertly managed Google Ads, Facebook Ads, and other paid campaigns.",
      image: "/digital3.jpg",
    },
    {
      title: "Content Marketing",
      description: "Attract, inform, and convert your audience with high-quality blogs, articles, videos, and more, tailored to your brand.",
      image: "/digital4.jpg",
    },
    {
      title: "Email Marketing",
      description: "Nurture leads and build customer loyalty with personalized, automated email campaigns that deliver real value.",
      image: "/digital5.jpg",
    },
    {
      title: "Analytics & Conversion Optimization",
      description: "Track, analyze, and optimize your digital marketing performance to turn more visitors into loyal customers.",
      image: "/digital5.jpg"
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
            Our Digital Marketing <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From brand awareness to lead generation, our digital marketing services help you connect, engage, and grow your audience across every digital channel.
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
                    {/* Digital marketing specific service titles */}
                    {[
                      "Search Engine Optimization (SEO)",
                      "Pay-Per-Click (PPC) Advertising",
                      "Social Media Marketing",
                      "Content Marketing",
                      "Email Marketing Campaigns",
                      "Influencer & Affiliate Marketing",
                      "Analytics & Conversion Tracking",
                      "Online Reputation Management",
                      "Marketing Automation"
                    ][index]}
                  </h3>
                  {/* Description - Appears smoothly from the right on hover */}
                  <p className="service-card-description text-sm text-white/90 leading-relaxed opacity-0 max-h-0 overflow-hidden 
                            transition-all duration-1000 group-hover:opacity-100 group-hover:max-h-32 
                            transform translate-x-10 group-hover:translate-x-0">
                    {/* Digital marketing specific service descriptions */}
                    {[
                      "Boost your website’s visibility and rankings with proven SEO strategies tailored to your business.",
                      "Drive targeted traffic and maximize ROI with expertly managed Google Ads and paid campaigns.",
                      "Grow your brand and engage your audience across all major social platforms with creative campaigns.",
                      "Attract, inform, and convert with compelling blog posts, videos, and multimedia content.",
                      "Nurture leads and increase retention with personalized, automated email marketing solutions.",
                      "Expand your reach and credibility through strategic influencer partnerships and affiliate programs.",
                      "Track, analyze, and optimize every campaign with advanced analytics and conversion tracking.",
                      "Protect and enhance your brand’s reputation with proactive online review and feedback management.",
                      "Streamline your marketing with automation tools for lead nurturing, segmentation, and more."
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
