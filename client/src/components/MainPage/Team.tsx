import { useState, useRef, useEffect } from "react";
import { Briefcase, Plus, ArrowLeft, ArrowRight } from "lucide-react";
import seniorGraphicDesigner from "../Senior-Graphic-Designer.png";
import UiUxDesigner from "../UX-Designer.png";
import PPC from "../Senior-PPC-Specialist.png";
import techLead from "../Technical-Lead.png";
import middlePPC from "../Middle-PPC-Specialist.png";
import PM from "../Project-Manager.png"

export default function Team() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const teamMembers = [
    {
      name: "Daniel Vance",
      role: "Senior Graphic Designer",
      imageUrl: seniorGraphicDesigner,
      bio: "Leading our creative vision with over 10 years of experience in digital design and brand strategy. Known for innovative approaches to visual storytelling."
    },
    {
      name: "Anna Sterling",
      role: "UX Designer",
      imageUrl: UiUxDesigner,
      bio: "She's the heart of our PPC team, always ready to lend her expertise and knowledge. Approachable and kind, she makes complex campaigns seem effortless."
    },
    {
      name: "Leo Vance",
      role: "Senior PPC Specialist",
      imageUrl:PPC,
      bio: "Data-driven PPC expert with expertise in digital campaigns and growth strategies. Specializes in maximizing ROI through strategic optimization."
    },
    {
      name: "Eugene Croft",
      role: "Technical Lead",
      imageUrl: techLead,
      bio: "Full-stack developer specializing in React, Node.js, and cloud architecture solutions. Passionate about creating scalable technical solutions."
    },
    {
      name: "Katie Evans",
      role: "middle PPC Specialist",
      imageUrl: middlePPC,
      bio: "Passionate about creating intuitive user experiences through research-driven design approaches. Believes in the power of user-centered design."
    },
    {
      name: "Maxwell Pierce",
      role: "Project Manager",
      imageUrl: PM,
      bio: "Ensuring smooth project delivery through agile methodologies and team coordination. Expert at bringing teams together to achieve common goals."
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollCards = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300; // Adjust scroll amount as needed
      if (direction === 'left') {
        scrollContainerRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header with Arrows */}
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex justify-between items-center"> {/* Added flex container for alignment */}
            <div className="text-left"> {/* Kept text-left for the main content */}
              <div className="inline-flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-full mb-6">
                <div className="w-2 h-2 bg-[var(--accent-teal)] rounded-full"></div>
                <span className="text-sm font-medium tracking-wide">OUR TEAM</span>
              </div>

              {/* Added mb-8 back for consistent spacing below the heading */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight">
                We've joined <span className="italic">forces</span> to turn<br />
                bold ideas into reality
              </h2>
            </div>

            {/* Navigation Arrows */}
              <div className="flex space-x-4">
                <button
                  onClick={() => scrollCards('left')}
                  className="p-3 rounded-full text-white transition-transform duration-300 ease-out hover:scale-125 focus:outline-none"
                  aria-label="Scroll left"
                >
                  <ArrowLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={() => scrollCards('right')}
                  className="p-3 rounded-full text-white transition-transform duration-300 ease-out hover:scale-125 focus:outline-none"
                  aria-label="Scroll right"
                >
                  <ArrowRight className="h-6 w-6" />
                </button>
              </div>
          </div> {/* This closing div was missing */}
        </div>

        {/* Horizontally Scrollable Team Cards */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex space-x-6 overflow-x-auto pb-6 team-scroll"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`relative flex-shrink-0 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Main Card */}
                <div className="relative w-72 h-96 rounded-2xl overflow-hidden bg-gray-800 cursor-pointer group">
                  {/* Image with Direct Grayscale/Brightness Transition */}
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className={`absolute inset-0 w-full h-full object-cover object-center z-0 transition-all duration-200 ease-out ${
                      hoveredCard === index ? 'filter grayscale brightness-50' : 'filter-none'
                    }`}
                  />

                  {/* Plus Icon - Animates independently */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-[var(--accent-teal)] rounded-full flex items-center justify-center z-30 transition-transform duration-200 ease-out group-hover:scale-110 group-hover:rotate-90">
                    <Plus className="h-4 w-4 text-white" />
                  </div>

                  {/* Initial Name and Role at Bottom - Fades out */}
                  <div className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/90 to-transparent z-20 transition-opacity duration-150 ${
                    hoveredCard === index ? 'opacity-0' : 'opacity-100'
                  }`}>
                    <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-sm text-gray-300">{member.role}</p>
                  </div>

                  {/* Dynamic Hover Content - This is the "Spotlight" Bio */}
                  <div className={`absolute inset-0 flex items-center justify-center bg-white/95 backdrop-blur-sm p-6 rounded-2xl z-10 transition-all duration-200 ease-out ${
                    hoveredCard === index
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-105 pointer-events-none'
                  }`}>
                    <div className="text-black text-center">
                      <h4 className="font-bold text-xl mb-2">{member.name}</h4>
                      <p className="text-base text-gray-600 mb-4 font-medium">{member.role}</p>
                      <p className="text-sm text-gray-800 leading-relaxed max-w-xs mx-auto">{member.bio}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}