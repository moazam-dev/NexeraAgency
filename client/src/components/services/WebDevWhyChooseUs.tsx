import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function WhyChooseUs() {
  const { ref, isInView } = useScrollAnimation();

  const benefits = [
    {
      icon: "⚡",
      title: "Blazing Fast Performance",
      description: "Optimized code and advanced caching ensure your website loads in milliseconds, improving user retention and SEO."
    },
    {
      icon: "🛡️",
      title: "Robust Security Measures",
      description: "Implementing industry-leading security protocols to protect your data and user information from cyber threats."
    },
    {
      icon: "👆",
      title: "Intuitive User Experience",
      description: "Crafting engaging and easy-to-navigate interfaces that keep your visitors coming back."
    },
    {
      icon: "📈",
      title: "Future-Proof Scalability",
      description: "Building adaptable solutions that grow with your business, effortlessly handling increased traffic and features."
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-start gap-16">
          {/* Left Column: Heading & Description */}
          <div className="lg:w-1/2 space-y-6">
            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-block"
            >
              <span className="why-choose-tag text-sm font-semibold uppercase tracking-wide text-slate-800 bg-slate-100 px-4 py-2 rounded-full">
                Why Webify Solutions?
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
            >
              Empowering Your Digital Vision with Web Excellence
            </motion.h2>

            {/* Body Paragraphs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4"
            >
              <p className="text-lg text-gray-600 leading-relaxed">
                At Webify Solutions, we blend innovative design with robust engineering to create 
                websites that are not just visually stunning but also highly functional and user-centric. 
                Our agile development process ensures transparency, flexibility, and a final product 
                that exceeds your expectations.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Harnessing cutting-edge technologies and best practices, we are committed to building 
                scalable, secure, and high-performing web solutions that drive growth and solidify 
                your online presence. Partner with us to transform your ideas into powerful digital realities.
              </p>
            </motion.div>
          </div>

          {/* Right Column: Grid of Benefits */}
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
                  <div className="text-center">
                    <div className="benefit-icon mx-auto mb-4">
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