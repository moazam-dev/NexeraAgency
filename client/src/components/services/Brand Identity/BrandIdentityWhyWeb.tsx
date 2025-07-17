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
      title: "Unforgettable First Impressions",
      description: "A striking brand identity ensures your business is remembered from the very first glance, opening doors to new opportunities and lasting connections."
    },
    {
      icon: (
        <div className={gradientIconCircle}>
          <FaShieldHalved className={iconStyle} />
        </div>
      ),
      title: "Builds Trust & Credibility",
      description: "Consistent and professional branding builds trust with your audience, making your business appear reliable and established."
    },
    {
      icon: (
        <div className={gradientIconCircle}>
          <FaLightbulb className={iconStyle} />
        </div>
      ),
      title: "Stand Out in the Crowd",
      description: "A unique identity sets you apart in a saturated market, making your business instantly recognizable and impossible to ignore."
    },
    {
      icon: (
        <div className={gradientIconCircle}>
          <FaChartLine className={iconStyle} />
        </div>
      ),
      title: "Drives Consistent Growth",
      description: "Unified branding across all channels helps drive recognition, loyalty, and long-term business growth."
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
                Why Brand Identity?
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
            >
              Transform Perception. Inspire Loyalty. Ignite Growth.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4"
            >
              <p className="text-lg text-gray-600 leading-relaxed">
                Your brand identity is the heartbeat of your business. It’s how the world sees you, remembers you, and connects with you. A powerful brand identity doesn’t just look good—it tells your story, sets you apart, and inspires trust at every touchpoint.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
              We help you craft a brand identity that captures your essence and communicates your value with clarity and confidence. Let’s build a brand that not only stands out, but stands for something. We dive deep into your story, values, and vision to shape a brand that truly represents you.From logo to messaging, every element is designed to connect and inspire. Together, we’ll create a lasting impression that turns first-time viewers into loyal supporters.
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