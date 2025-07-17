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
      title: "Wider Market Reach",
      description: "eCommerce solutions break down geographical barriers, allowing your business to reach customers anywhere, anytime, and expand your brand’s presence globally."
    },
    {
      icon: (
        <div className={gradientIconCircle}>
          <FaShieldHalved className={iconStyle} />
        </div>
      ),
      title: "Seamless Shopping Experience",
      description: "Deliver a smooth, intuitive, and enjoyable shopping journey that keeps customers coming back and increases your conversion rates."
    },
    {
      icon: (
        <div className={gradientIconCircle}>
          <FaLightbulb className={iconStyle} />
        </div>
      ),
      title: "Conversion Optimization",
      description: "Leverage data-driven insights and best practices to turn more visitors into loyal buyers and maximize your store’s performance."
    },
    {
      icon: (
        <div className={gradientIconCircle}>
          <FaChartLine className={iconStyle} />
        </div>
      ),
      title: "Secure & Scalable Growth",
      description: "Our eCommerce solutions ensure safe transactions and are built to scale with your business, supporting growth and adapting to new opportunities."
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
                Why Ecommerce Solutions?
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
            >
              Unlocking Growth in the Online Marketplace
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4"
            >
              <p className="text-lg text-gray-600 leading-relaxed">
                eCommerce solutions empower your business to thrive in the digital age. With a robust online store, you can reach new audiences, streamline operations, and deliver exceptional customer experiences. Our approach combines technology, strategy, and creativity to help you stand out and succeed in a competitive market.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                From seamless product management to secure payments and scalable infrastructure, we provide everything you need to grow your online business. Let us help you transform your vision into a thriving eCommerce brand that delights customers and drives results.
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