import { motion } from "framer-motion";
// Import an icon from react-icons
import { FaArrowRight } from "react-icons/fa";

type Project = {
  image: string;
  title: string;
  description: string;
};

const projects: Project[] = [
  {
    image: "/Mockup-1.png",
    title: "Goru Ecommerce",
    description: "Crafting intuitive and beautiful user interfaces for modern applications.",
  },
  {
    image: "/Mockup-3.png",
    title: "The Sweet Slice",
    description: "Designing engaging and user-friendly mobile experiences for iOS and Android.",
  },
  {
    image: "/Mockup-2.png",
    title: "Zivan agency",
    description: "Crafting intuitive and beautiful user interfaces for modern applications.",
  },
];

export default function Portfolio() {
  return (
    <section className="bg-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight text-center mb-0.7">
          OUR PORTFOLIO
        </h2>
        <p className="text-xl text-gray-300 text-center mb-12 mt-0">
          Discover our latest projects and see how we bring{" "}
          <span className="bg-[#2e2e2e] text-white italic px-2 py-0 rounded-xl inline-block ">
            ideas to life.
          </span>
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-6 place-items-center">
          {projects.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03, y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`w-full max-w-sm flex flex-col text-center ${
                index % 2 !== 0 ? "mt-12" : ""
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[440px] object-cover"
              />
              <h3 className="text-white text-xl font-bold mt-4">
                {item.title}
              </h3>
              <p className="text-gray-300 text-sm mt-2">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* --- Updated Button Added Here --- */}
        <div className="text-center mt-20">
          <motion.button
            className="flex items-center justify-center gap-3 px-10 py-5 text-lg font-semibold text-white border-2 border-white rounded-full hover:bg-white hover:text-black transition-all duration-300 mx-auto"
            whileHover="hover" // Animate on hover
            initial="rest"
            animate="rest"
          >
            <span>View Case Studies</span>
            <motion.div
              variants={{
                rest: { x: 0 },
                hover: { x: 8 }, // Move 8px to the right on hover
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <FaArrowRight />
            </motion.div>
          </motion.button>
        </div>
        
      </div>
    </section>
  );
}