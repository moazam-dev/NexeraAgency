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
      title: "Strategic Audience Targeting",
      description: "Digital marketing enables you to reach the right people at the right time, maximizing your impact and return on investment."
    },
    {
      icon: (
        <div className={gradientIconCircle}>
          <FaShieldHalved className={iconStyle} />
        </div>
      ),
      title: "Brand Awareness & Engagement",
      description: "Build a strong online presence and foster meaningful connections with your audience through creative campaigns and consistent messaging."
    },
    {
      icon: (
        <div className={gradientIconCircle}>
          <FaLightbulb className={iconStyle} />
        </div>
      ),
      title: "Data-Driven Decisions",
      description: "Leverage analytics and insights to refine your strategies, optimize performance, and achieve measurable business growth."
    },
    {
      icon: (
        <div className={gradientIconCircle}>
          <FaChartLine className={iconStyle} />
        </div>
      ),
      title: "Scalable Growth",
      description: "Digital marketing solutions are flexible and scalable, allowing your brand to adapt and thrive in a rapidly changing landscape."
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
                Why Digital Marketing?
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
            >
              Unlocking Growth in a Digital World
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4"
            >
              <p className="text-lg text-gray-600 leading-relaxed">
                Digital marketing is the engine behind modern business growth. It empowers you to connect with your audience wherever they are, build brand loyalty, and drive measurable results. With the right strategy, you can amplify your message, outpace competitors, and turn insights into action.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Our approach combines creativity with analytics, ensuring every campaign is both engaging and effective. From social media to search engines, we help you navigate the digital landscape and achieve your goals with confidence. Let us help you harness the full potential of digital marketing for your brand.
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