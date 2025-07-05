import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

// Data for specialization cards
const specializations = [
  {
    id: 1,
    cases: "20 Cases",
    title: "Clothing",
    image: "https://images.pexels.com/photos/3315292/pexels-photo-3315292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Placeholder for clothing
    description: "Our extensive experience in this field helps us better understand your audience: their tastes, beauty routines, and needs. We develop a tailored strategy that highlights your brand and makes it easier for buyers to find what they need. Our approach is aimed at attracting new customers, increasing sales, and developing your product."
  },
  {
    id: 2,
    cases: "13 Cases",
    title: "Cosmetics",
    image: "https://images.pexels.com/photos/3373716/pexels-photo-3373716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Placeholder for cosmetics
    description: "In the dynamic cosmetics industry, we craft engaging digital experiences that showcase your products' unique benefits. From elegant e-commerce sites to interactive campaigns, we help beauty brands connect with their audience and drive sales."
  },
  {
    id: 3,
    cases: "27 Cases",
    title: "Electronics",
    image: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Placeholder for electronics
    description: "For electronics brands, we build platforms that highlight innovation and user experience. Our solutions ensure your products are presented effectively, from sleek designs to detailed specifications, captivating tech enthusiasts and everyday consumers alike."
  },
  {
    id: 4,
    cases: "14 Cases",
    title: "B2B",
    image: "https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Placeholder for B2B
    description: "We specialize in creating robust digital strategies for B2B companies, focusing on lead generation, client acquisition, and brand authority. Our approach helps you reach decision-makers and build lasting partnerships through compelling online presences."
  },
  {
    id: 5,
    cases: "17 Cases",
    title: "Other",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Placeholder for other
    description: "Beyond specific industries, we offer tailored digital solutions for unique business needs. Whether it's a niche market or a groundbreaking concept, our adaptable strategies ensure your vision comes to life online with maximum impact."
  }
];

const SpecializationCards = () => {
  const [hoveredCardId, setHoveredCardId] = useState(null);
  const [clickedCardId, setClickedCardId] = useState(null);

  const handleCardClick = (id) => {
    setClickedCardId(prevId => (prevId === id ? null : id));
  };

  return (
    <section className="py-20 px-6 bg-white font-inter">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-left mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-gray-900">
            We are specializing for
          </h2>
        </div>

        {/* Cards Container */}
        <div className="flex flex-wrap lg:flex-nowrap gap-6 justify-center lg:justify-start">
          {specializations.map((card) => (
            <div
              key={card.id}
              className={`
                relative rounded-xl overflow-hidden shadow-lg border border-gray-200
                transition-all duration-500 ease-in-out
                ${clickedCardId === card.id ? 'w-full lg:w-[65%] min-h-[500px] lg:min-h-[600px]' : 
                   clickedCardId ? 'w-[calc(33.33%-1rem)] lg:w-[calc(17.5%-1rem)] opacity-50' : 
                   'w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)] min-h-[300px] lg:min-h-[400px]'}
                ${hoveredCardId === card.id && !clickedCardId ? 'group' : ''}
              `}
              onMouseEnter={() => setHoveredCardId(card.id)}
              onMouseLeave={() => setHoveredCardId(null)}
              onClick={() => handleCardClick(card.id)}
            >
              {/* Image background on hover/click */}
              <div
                className={`absolute inset-0 bg-cover bg-center transition-opacity duration-300
                  ${(hoveredCardId === card.id && !clickedCardId) || clickedCardId === card.id ? 'opacity-100' : 'opacity-0'}
                `}
                style={{ backgroundImage: `url(${card.image})` }}
                onError={(e) => { e.target.onerror = null; e.target.style.backgroundImage = 'none'; e.target.style.backgroundColor = '#ccc'; }}
              >
                <div className="absolute inset-0 bg-black/50"></div> {/* Dark overlay */}
              </div>

              {/* Card Content */}
              <div className={`relative z-10 p-8 flex flex-col h-full justify-between
                ${(hoveredCardId === card.id && !clickedCardId) || clickedCardId === card.id ? 'text-white' : 'text-gray-900'}
                transition-colors duration-300
              `}>
                {/* Top section: Cases and Arrow */}
                <div className="flex justify-between items-center mb-4">
                  <p className="text-sm uppercase tracking-wider font-semibold">{card.cases}</p>
                  <ArrowRight className="h-6 w-6" />
                </div>

                {/* Main Title */}
                <h3 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4
                  ${clickedCardId === card.id ? 'block' : 'block'}
                `}>
                  {card.title}
                </h3>

                {/* Description - Only visible when clicked */}
                <p className={`text-base leading-relaxed mt-4 transition-opacity duration-300
                  ${clickedCardId === card.id ? 'opacity-100 block' : 'opacity-0 hidden'}
                `}>
                  {card.description}
                </p>

                {/* User icon/name - Always visible */}
                <div className="flex items-center space-x-3 mt-auto pt-4">
                    <img
                        src={card.image} // Using card image for user icon as per reference
                        alt={card.author}
                        className="w-12 h-12 rounded-full object-cover border-2 border-white"
                        onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/48x48/cccccc/333333?text=User"; }}
                    />
                    <div>
                        <p className="font-semibold text-lg">{card.author}</p>
                        <p className="text-sm opacity-75">{card.role}</p>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecializationCards;
