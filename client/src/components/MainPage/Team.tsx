import { useState, useRef, useEffect } from "react";
import { Briefcase, Plus } from "lucide-react";

export default function Team() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const teamMembers = [
    {
      name: "Dmytro Zabolotnyi",
      role: "Senior Graphic Designer",
      image: "/api/placeholder/280/350",
      bio: "Leading our creative vision with over 10 years of experience in digital design and brand strategy. Known for innovative approaches to visual storytelling."
    },
    {
      name: "Kate Terekhovskaya",
      role: "Middle PPC Specialist",
      image: "/api/placeholder/280/350",
      bio: "She's the heart of our PPC team, always ready to lend her expertise and knowledge. Approachable and kind, she makes complex campaigns seem effortless."
    },
    {
      name: "Vladyslav Chornenkyi",
      role: "Senior PPC Specialist",
      image: "/api/placeholder/280/350",
      bio: "Data-driven PPC expert with expertise in digital campaigns and growth strategies. Specializes in maximizing ROI through strategic optimization."
    },
    {
      name: "Yevhen Subota",
      role: "Technical Lead",
      image: "/api/placeholder/280/350",
      bio: "Full-stack developer specializing in React, Node.js, and cloud architecture solutions. Passionate about creating scalable technical solutions."
    },
    {
      name: "Anna Kovalenko",
      role: "UX Designer",
      image: "/api/placeholder/280/350",
      bio: "Passionate about creating intuitive user experiences through research-driven design approaches. Believes in the power of user-centered design."
    },
    {
      name: "Maksym Petrov",
      role: "Project Manager",
      image: "/api/placeholder/280/350",
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

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-[var(--accent-teal)] rounded-full"></div>
            <span className="text-sm font-medium tracking-wide">OUR TEAM</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight">
            We've joined <span className="italic">forces</span> to turn<br />
            bold ideas into reality
          </h2>
          
          <button className="inline-flex items-center space-x-3 bg-gradient-to-r from-[var(--accent-green)] to-[var(--accent-teal)] px-6 py-3 rounded-full font-semibold text-black hover:scale-105 transition-transform duration-300">
            <span>CAREER HUB</span>
            <Briefcase className="h-5 w-5" />
          </button>
        </div>

        {/* Horizontally Scrollable Team Cards */}
        <div className="relative">
          <div 
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
                  {/* Grayscale Portrait */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-600 via-gray-700 to-gray-800 flex items-center justify-center relative filter grayscale">
                    <div className="text-gray-300 text-center">
                      <div className="text-lg mb-2 font-semibold">{member.name}</div>
                      <div className="text-sm opacity-75">{member.role}</div>
                    </div>
                    
                    {/* Subtle overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  </div>

                  {/* Plus Icon */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-[var(--accent-teal)] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Plus className="h-4 w-4 text-white" />
                  </div>

                  {/* Name and Role at Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/90 to-transparent">
                    <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-sm text-gray-300">{member.role}</p>
                  </div>

                  {/* Hover Overlay Card */}
                  <div className={`absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm rounded-t-2xl p-6 transition-all duration-500 ease-out transform ${
                    hoveredCard === index 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-full opacity-0'
                  }`}>
                    <div className="text-black">
                      <h4 className="font-bold text-lg mb-2">{member.name}</h4>
                      <p className="text-sm text-gray-600 mb-3 font-medium">{member.role}</p>
                      <p className="text-sm text-gray-800 leading-relaxed">{member.bio}</p>
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