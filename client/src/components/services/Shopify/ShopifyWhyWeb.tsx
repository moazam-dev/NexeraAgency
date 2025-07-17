import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { FaBolt, FaShieldHalved, FaLightbulb, FaChartLine } from "react-icons/fa6";

export default function WebDevWhyWeb() {
  const { ref, isInView } = useScrollAnimation();

  // Gradient circle container for the icon
  // Adjusted size to w-14 h-14 for a slightly more compact look as per the image
  const gradientIconCircle = "w-14 h-14 p-3 rounded-full flex items-center justify-center bg-gradient-to-br from-green-400 to-blue-600 shadow-md";

  // Style for the React Icon itself: white color and smaller size
  const iconStyle = "text-white text-xl"; // Adjusted to text-xl for a perfect fit

  const benefits = [
    {
      icon: (
        <div className={gradientIconCircle}>
          <FaBolt className={iconStyle} />
        </div>
      ),
      title: "Expert Shopify Store Setup",
      description: "We handle every aspect of your Shopify store launch, from initial setup to going live, ensuring a smooth and stress-free experience."
    },
    {
      icon: (
        <div className={gradientIconCircle}>
          <FaShieldHalved className={iconStyle} />
        </div>
      ),
      title: "Custom Theme Design & Branding",
      description: "Our team crafts unique, visually compelling Shopify themes that reflect your brand identity and engage your target audience."
    },
    {
      icon: (
        <div className={gradientIconCircle}>
          <FaLightbulb className={iconStyle} />
        </div>
      ),
      title: "Seamless Integrations & Automation",
      description: "We connect your store with essential apps, payment gateways, and marketing tools to streamline operations and boost efficiency."
    },
    {
      icon: (
        <div className={gradientIconCircle}>
          <FaChartLine className={iconStyle} />
        </div>
      ),
      title: "Ongoing Optimization & Support",
      description: "Benefit from continuous improvements, performance monitoring, and expert support to keep your Shopify store running at its best."
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-start gap-16">
          <div className="lg:w-1/2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-block"
            >
              <span className="why-choose-tag text-sm font-semibold uppercase tracking-wide text-slate-800 bg-slate-100 px-4 py-2 rounded-full">
                Why Choose Nexera for Shopify?
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
            >
              Shopify Store Design & Development Tailored for Your Success
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4"
            >
              <p className="text-lg text-gray-600 leading-relaxed">
                Nexera delivers end-to-end Shopify solutions, from custom design and development to seamless integrations and ongoing support. We focus on creating stores that are visually stunning, easy to manage, and optimized for sales.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Whether you’re launching a new store or upgrading an existing one, our Shopify experts ensure your e-commerce presence is powerful, scalable, and ready to grow with your business.
              </p>
            </motion.div>
          </div>

          <div className="lg:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="benefit-card bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Ensure all content within the card is centered using flexbox */}
                  <div className="flex flex-col items-center text-center"> 
                    <div className="benefit-icon mb-4"> {/* Removed mx-auto here as parent flex will handle */}
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}