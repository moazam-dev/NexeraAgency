import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function WebDevelopmentServices() {
  const { ref, isInView } = useScrollAnimation();

  const services = [
    {
      title: "Custom Web Development",
      description: "We develop tailored web solutions designed specifically for your unique business needs, combining innovative technology with user-centric design.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      isSpecial: true
    },
    {
      title: "E-Commerce Development",
      description: "We develop powerful and secure e-commerce websites that enable businesses to sell products and services seamlessly online. Our expertise spans across various e-commerce platforms.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Content Management Systems (CMS)",
      description: "Building flexible content management platforms that empower you to easily update and manage your website content with intuitive interfaces.",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Front-end Development",
      description: "Crafting engaging user interfaces and seamless interactive experiences that bring your brand to life in the browser with modern frameworks.",
      image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Back-end Development",
      description: "Building robust server-side architecture and databases that power your applications with reliability, security, and scalability.",
      image: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Full-stack Development",
      description: "Comprehensive end-to-end solutions combining both front-end and back-end expertise for complete web applications and platforms.",
      image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Website Maintenance & Support",
      description: "Ongoing technical support, security updates, and performance optimization to keep your website running smoothly and securely.",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Web Design",
      description: "Creating visually stunning and user-friendly designs that effectively communicate your brand message and engage visitors across all devices.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Responsive Web Development",
      description: "Ensuring your website looks and functions perfectly across all devices, from desktop computers to tablets and mobile phones.",
      image: "https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  return (
    <section id="web-development-services" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Seamless & Enterprise-ready Web Development
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From the visible aesthetics to the intricate backend logic, our comprehensive web development 
            services cover every aspect of your digital presence.
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
              className={`service-card group cursor-pointer rounded-xl overflow-hidden relative h-96 ${
                service.isSpecial ? 'masked-card' : ''
              }`}
            >
              {/* Background Image */}
              <div 
                className="service-card-image absolute inset-0 bg-cover bg-center transition-all duration-600 group-hover:scale-110 group-hover:blur-md"
                style={{ backgroundImage: `url(${service.image})` }}
              ></div>

              {/* Overlay */}
              <div className="service-card-overlay absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:bg-black/80 transition-all duration-600"></div>

              {/* Content */}
              <div className="service-card-content absolute bottom-0 left-0 w-full p-6 text-white z-10">
                <h3 className="service-card-title text-xl font-bold mb-3 transition-all duration-400 group-hover:-translate-y-5">
                  {service.title}
                </h3>
                
                <p className="service-card-description text-sm text-white/90 leading-relaxed opacity-0 max-h-0 overflow-hidden transition-all duration-600 group-hover:opacity-100 group-hover:max-h-32 group-hover:mb-4">
                  {service.description}
                </p>

                <button className="service-card-button bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-full font-semibold text-sm opacity-0 translate-y-5 transition-all duration-600 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
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