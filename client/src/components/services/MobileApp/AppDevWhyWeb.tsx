import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
// Corrected import for Font Awesome 6 icons:
// FaMobileAlt is not available in fa6; FaMobileScreen is the common equivalent.
import { FaBolt, FaShieldHalved, FaMobileScreen, FaChartLine } from "react-icons/fa6";

export default function AppDevWhyApp() {
  // Hook for scroll-based animations
  const { ref, isInView } = useScrollAnimation();

  // Tailwind CSS class strings for consistent styling
  const gradientIconCircle = "w-14 h-14 p-3 rounded-full flex items-center justify-center bg-gradient-to-br from-green-400 to-blue-600 shadow-md";
  const iconStyle = "text-white text-xl";

  // Array of benefits, each with an icon, title, and description
  const benefits = [
    {
      icon: (
        <div className={gradientIconCircle}>
          <FaBolt className={iconStyle} />
        </div>
      ),
      title: "Lightning Fast Performance",
      description: "Our mobile apps are optimized for speed and responsiveness, delivering smooth experiences across all devices."
    },
    {
      icon: (
        <div className={gradientIconCircle}>
          <FaShieldHalved className={iconStyle} />
        </div>
      ),
      title: "Enterprise-Grade Security",
      description: "We implement robust security protocols and data encryption to protect your users and business data."
    },
    {
      icon: (
        <div className={gradientIconCircle}>
          {/* Using FaMobileScreen from fa6 as a mobile icon */}
          <FaMobileScreen className={iconStyle} />
        </div>
      ),
      title: "Intuitive Mobile Experience",
      description: "We design engaging, easy-to-use interfaces that keep users coming back and boost retention."
    },
    {
      icon: (
        <div className={gradientIconCircle}>
          <FaChartLine className={iconStyle} />
        </div>
      ),
      title: "Scalable Architecture",
      description: "Our apps are built to grow with your business, easily handling increased users and new features."
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-start gap-16">
          <div className="lg:w-1/2 space-y-6">
            {/* "Why Choose Us?" Tag with animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-block"
            >
              <span className="why-choose-tag text-sm font-semibold uppercase tracking-wide text-slate-800 bg-slate-100 px-4 py-2 rounded-full">
                Why Choose Us?
              </span>
            </motion.div>

            {/* Main heading with animation */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
            >
              Empowering Your Vision with Exceptional App Development
            </motion.h2>

            {/* Description paragraphs with animation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4"
            >
              <p className="text-lg text-gray-600 leading-relaxed">
                We blend innovative design and robust engineering to create mobile apps that are visually stunning, highly functional, and user-centric. Our agile development process ensures transparency, flexibility, and a final product that exceeds your expectations.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Using the latest technologies and best practices, we build scalable, secure, and high-performing mobile solutions that drive growth and elevate your brand. Partner with us to turn your ideas into powerful digital experiences.
              </p>
            </motion.div>
          </div>

          {/* Benefits grid */}
          <div className="lg:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index} // Remember to use a more stable key if possible (e.g., benefit.title)
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="benefit-card bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="benefit-icon mb-4">
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