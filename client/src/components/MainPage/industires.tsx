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
  // Explicitly type the state variables to allow 'number' or 'null'
  const [hoveredCardId, setHoveredCardId] = useState<number | null>(null);
  const [clickedCardId, setClickedCardId] = useState<number | null>(null);

  // Type 'id' parameter as number
  const handleCardClick = (id: number) => {
    setClickedCardId(prevId => (prevId === id ? null : id));
  };

  return (
    <section className="py-20 px-4 sm:px-6 bg-white font-inter">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-left mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-gray-900">
            We are specializing for
          </h2>
        </div>

        {/* Cards Container */}
        <div className="flex flex-col lg:flex-row gap-6 justify-center lg:justify-start">
          {specializations.map((card) => (
            <div
              key={card.id}
              className={`
                relative rounded-xl overflow-hidden shadow-lg border border-gray-200 cursor-pointer
                transition-all duration-700 ease-in-out transform
                ${clickedCardId === card.id
                  ? 'w-full lg:w-[60%] xl:w-[65%] min-h-[550px] lg:min-h-[650px] scale-100' // Main clicked card
                  : clickedCardId
                    ? 'w-full lg:w-[calc(20%-1rem)] xl:w-[calc(17.5%-1rem)] opacity-70 min-h-[300px] lg:min-h-[400px]' // Other cards when one is clicked
                    : 'w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.33%-1rem)] min-h-[380px] lg:min-h-[480px]'} // Default size
              `}
              onMouseEnter={() => setHoveredCardId(card.id)}
              onMouseLeave={() => setHoveredCardId(null)}
              onClick={() => handleCardClick(card.id)}
            >
              {/* Image background with enhanced opacity control */}
              <div
                className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500
                  ${((hoveredCardId === card.id && !clickedCardId) || clickedCardId === card.id) ? 'opacity-100' : 'opacity-0'}
                `}
                style={{ backgroundImage: `url(${card.image})` }}
                // Correctly type the event and access style property
                onError={(e: React.SyntheticEvent<HTMLDivElement, Event>) => {
                  const target = e.target as HTMLDivElement;
                  target.style.backgroundImage = 'none';
                  target.style.backgroundColor = '#ccc';
                }}
              >
                <div className="absolute inset-0 bg-black/60"></div> {/* Darker overlay for better text contrast */}
              </div>

              {/* Card Content */}
              <div className={`relative z-10 p-6 sm:p-8 flex flex-col h-full justify-between
                ${((hoveredCardId === card.id && !clickedCardId) || clickedCardId === card.id) ? 'text-white' : 'text-gray-900'}
                transition-colors duration-300
              `}>
                {/* Top section: Cases and Arrow */}
                <div className="flex justify-between items-center mb-4">
                  <p className="text-sm uppercase tracking-wider font-semibold opacity-80">{card.cases}</p>
                  <ArrowRight
                    className={`h-7 w-7 transition-transform duration-300
                      ${((hoveredCardId === card.id && !clickedCardId) || clickedCardId === card.id) ? 'translate-x-1' : ''}
                    `}
                  />
                </div>

                {/* Main Title */}
                <h3 className={`text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4
                  ${clickedCardId === card.id ? 'mt-auto' : ''} /* Push title to bottom when clicked */
                `}>
                  {card.title}
                </h3>

                {/* Description - Only visible when clicked, now with fancy styling and at the bottom */}
                <p className={`font-serif italic text-base sm:text-lg leading-relaxed mb-4 transition-all duration-500
                  ${clickedCardId === card.id ? 'opacity-100 block max-h-screen' : 'opacity-0 hidden max-h-0'}
                  overflow-hidden
                `}>
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecializationCards;