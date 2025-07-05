import { motion } from "framer-motion";

const projects: Project[] = [
  {
    image: "https://www.ue-germany.com/uploads/sites/9/2021/12/uxuidesign_erina-baftiroska_2800x1200px.png?w=1380&h=776&crop=1",
    title: "UI/UX Design Project",
    description: "Crafting intuitive and beautiful user interfaces for modern applications.",
  },
  {
    image: "https://shaynakit.com/storage/assets/cover_project/RieLrSZWwO2tv0ggV5ioq4DoyejdKC0fxhMhZjAo.png",
    title: "Web Development Solution",
    description: "Building robust and high-performing web applications with cutting-edge technologies.",
  },
  {
    image: "https://mir-s3-cdn-cf.behance.net/projects/404/c87609212421217.Y3JvcCwzMDY4LDI0MDAsMCww.jpg",
    title: "Mobile App Design",
    description: "Designing engaging and user-friendly mobile experiences for iOS and Android.",
  },
  {
    image: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/326588785/original/f64189622e62639beac78e6e189c2315981e25e8/do-mobile-app-ui-ux-design-in-figma.jpg",
    title: "Figma UI/UX Project",
    description: "Interactive prototypes and user-centered designs using Figma for seamless collaboration.",
  },
  {
    image: "https://cdn.dribbble.com/userupload/43358248/file/original-8431914111dc9de01771e44cf3ee6a54.png?resize=752x&vertical=center",
    title: "Digital Product Showcase",
    description: "Visually highlighting key features and benefits of digital products to captivate audiences.",
  },
  {
    image: "https://www.bypeople.com/wp-content/uploads/2021/10/figma-ui-cover.png",
    title: "Brand Identity Creation",
    description: "Developing strong and memorable brand visuals that resonate with your target audience.",
  },
  {
    image: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/336930214/original/edaa674c176e4a0af22958a4917797e85bc2dcec/do-website-ui-design-and-mobile-app-ui-ux-design-ui-ux-design-in-figma.png",
    title: "Website UI/UX Redesign",
    description: "Modernizing interfaces for improved usability and a fresh, contemporary look.",
  },
  {
    image: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/225733566/original/bd971696f26cbe92b6e2d149bac420dd199b3a10/create-website-ui-ux-design-or-web-ui-template-in-figma-xd-or-photoshop-453a.jpg",
    title: "Web Template Development",
    description: "Creating customizable and scalable web templates for diverse business needs.",
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
          Discover our latest projects and see how we bring <span className="bg-[#2e2e2e] text-white italic px-2 py-0 rounded-xl inline-block ">
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
      </div>
    </section>
  );
}
