import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Expertise() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="expertise" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Expertise That <span className="gradient-text">Delivers</span>
          </h2>
        </motion.div>
        
        {/* Row 1: Text Left, Image Right */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col lg:flex-row items-center gap-12 mb-20"
        >
          {/* Text Content */}
          <div className="lg:w-1/2 space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Crafting Bespoke Digital Experiences
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              We don't just build websites; we engineer custom web applications and platforms 
              meticulously tailored to your unique business needs. From complex enterprise solutions 
              to innovative SaaS products, our development focuses on scalability, robust performance, 
              and future-proof architecture, ensuring your digital presence is not just functional, 
              but a true asset.
            </p>
          </div>
          
          {/* Image */}
          <div className="lg:w-1/2">
            <div className="expertise-image-container rounded-xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/17483870/pexels-photo-17483870.png?auto=compress&cs=tinysrgb&w=800&h=600"
                alt="Abstract neural networks and digital technology"
                className="expertise-image w-full h-80 object-cover"
              />
            </div>
          </div>
        </motion.div>
        
        {/* Row 2: Image Left, Text Right */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col lg:flex-row-reverse items-center gap-12"
        >
          {/* Text Content */}
          <div className="lg:w-1/2 space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Intuitive Interfaces & Powerful Integrations
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Beyond the backend, we prioritize the front-end, designing and developing highly 
              intuitive user interfaces (UI) and engaging user experiences (UX) that captivate 
              your audience. We seamlessly integrate essential third-party services, APIs, and 
              databases, creating a cohesive digital ecosystem that streamlines operations and 
              enhances overall functionality for both you and your users.
            </p>
          </div>
          
          {/* Image */}
          <div className="lg:w-1/2">
            <div className="expertise-image-container rounded-xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
                alt="Responsive design on multiple devices"
                className="expertise-image w-full h-80 object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
