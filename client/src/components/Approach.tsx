import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Plus, Minus, FileText, MessageSquare, Key, Route, Calendar, BarChart3, Users, MessageCircle, CheckSquare, Search, Target, Code, Palette, Monitor } from "lucide-react";
import ApproachBackground from "./ApproachBackground"; // Assuming this component handles its own theme or is theme-agnostic

const approaches = [
  {
    week: "01",
    title: "Onboarding",
    description: "We conduct a briefing with you and assess the project's scope. If both parties are ready to proceed after the briefing, all necessary accesses are provided to us. The team begins setting up the project system.",
    result: "The project's goals, expectations, target audience and key performance indicators (KPIs) are clear. Necessary tools and systems are configured, accesses are provided and the team is ready to start working. After a week of adaptation we know the next steps to achieve the project's goals ensuring your confidence in further progress.",
    items: [
      { icon: FileText, label: "Presentation" },
      { icon: MessageSquare, label: "Briefing" },
      { icon: Key, label: "Accesses" },
      { icon: Route, label: "Roadmap" },
      { icon: Calendar, label: "Deadlines" },
      { icon: BarChart3, label: "Reporting" },
      { icon: FileText, label: "Documentation" },
      { icon: Monitor, label: "Monitoring" }
    ],
    features: [
      { icon: Users, label: "Selecting Specialists" },
      { icon: MessageCircle, label: "Communication Standards" },
      { icon: CheckSquare, label: "Project Management" }
    ]
  },
  {
    week: "02",
    title: "Exploration",
    description: "Deep dive into market research, competitor analysis, and strategy development to create a comprehensive understanding of your industry landscape.",
    result: "Complete market analysis and competitive positioning strategy ready for implementation with clear actionable insights.",
    items: [
      { icon: Search, label: "Market Research" },
      { icon: BarChart3, label: "Analytics Setup" },
      { icon: Users, label: "Competitor Analysis" },
      { icon: Target, label: "Strategy Development" },
      { icon: FileText, label: "Documentation" },
      { icon: Route, label: "Planning" },
      { icon: MessageSquare, label: "Client Review" },
      { icon: CheckSquare, label: "Validation" }
    ],
    features: [
      { icon: BarChart3, label: "Data Analysis" },
      { icon: Users, label: "User Research" },
      { icon: CheckSquare, label: "Strategy Planning" }
    ]
  },
  {
    week: "03",
    title: "Implementation",
    description: "Execute the strategy with precision and continuous optimization, ensuring all elements work together seamlessly for maximum impact.",
    result: "Full campaign launch with ongoing optimization and performance monitoring, delivering measurable results.",
    items: [
      { icon: Code, label: "Development" },
      { icon: Palette, label: "Design" },
      { icon: Target, label: "Campaign Launch" },
      { icon: BarChart3, label: "Optimization" },
      { icon: Monitor, label: "Monitoring" },
      { icon: FileText, label: "Reporting" },
      { icon: MessageSquare, label: "Client Updates" },
      { icon: CheckSquare, label: "Quality Assurance" }
    ],
    features: [
      { icon: Code, label: "Technical Implementation" },
      { icon: BarChart3, label: "Performance Tracking" },
      { icon: CheckSquare, label: "Quality Assurance" }
    ]
  }
];

export default function Approach({ isLightThemeActive }) {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleAccordion = (index: number) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    if (openAccordion === index) {
      setOpenAccordion(null);
    } else {
      setOpenAccordion(index);
    }
    
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    contentRefs.current = contentRefs.current.slice(0, approaches.length);
  }, []);

  return (
    <section 
      id="approach" 
      className={`py-32 px-6 relative overflow-hidden transition-colors duration-500 ${
        isLightThemeActive ? 'bg-white text-gray-900' : 'bg-black text-white'
      }`}
    >
      {/* Dynamic Abstract Background */}
      <ApproachBackground /> 
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <span 
            className={`inline-block px-6 py-2 rounded-full text-sm font-semibold mb-8 tracking-wide transition-colors duration-500 ${
              isLightThemeActive ? 'bg-gray-100 text-gray-800' : 'bg-black text-white'
            }`}
          >
            TECHNOLOGY
          </span>
          <h2 
            className={`text-5xl md:text-6xl lg:text-7xl font-black mb-4 transition-colors duration-500 ${
              isLightThemeActive ? 'text-gray-900' : 'text-white'
            }`}
          >
            Our approach
          </h2>
        </div>
        
        <div className="relative accordion-stack">
          {approaches.map((approach, index) => (
            <div 
              key={index} 
              className={`accordion-bar-wrapper ${openAccordion === index ? 'accordion-open' : ''}`}
              style={{ 
                zIndex: approaches.length - index,
                transform: `translateY(${index * -12}px)`,
                marginBottom: index < approaches.length - 1 ? '24px' : '0'
              }}
            >
              <div 
                className={`accordion-bar rounded-2xl shadow-lg border relative overflow-hidden backdrop-blur-sm transition-colors duration-500 ${
                  isLightThemeActive ? 'bg-white border-gray-200' : 'bg-white border-gray-200' // Keeping white for accordion bars in both themes
                }`}
              >
                {/* Gradient Tab */}
                <div className="gradient-tab"></div> 
                
                {/* Bar Header */}
                <div 
                  className={`bar-header cursor-pointer px-8 py-8 flex justify-between items-center transition-all duration-300 ${
                    isLightThemeActive ? 'hover:bg-gray-50' : 'hover:bg-gray-50' // Hover effect
                  }`}
                  onClick={() => toggleAccordion(index)}
                >
                  <h3 
                    className={`text-2xl md:text-3xl font-bold transition-colors duration-500 ${
                      isLightThemeActive ? 'text-gray-900' : 'text-gray-900' // Keeping text dark for contrast on white accordion bar
                    }`}
                  >
                    {approach.title}
                  </h3>
                  <div className="transition-transform duration-300" style={{
                    transform: openAccordion === index ? 'rotate(45deg)' : 'rotate(0deg)'
                  }}>
                    <Plus className="h-7 w-7 text-gray-600" /> {/* Icon color remains consistent */}
                  </div>
                </div>
                
                {/* Bar Content */}
                <div 
                  ref={(el) => contentRefs.current[index] = el}
                  className={`bar-content overflow-hidden transition-all duration-500 ease-in-out ${
                    openAccordion === index ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-8 pb-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {/* Left Column - Project Structure */}
                      <div className="space-y-6">
                        <div 
                          className={`rounded-xl p-6 border transition-colors duration-500 ${
                            isLightThemeActive ? 'bg-gray-50 border-gray-200' : 'bg-gray-50 border-gray-200' // Already light, keep as is
                          }`}
                        >
                          <div className="flex items-center mb-4">
                            <FileText className="h-5 w-5 text-gray-700 mr-2" />
                            <h4 className="font-bold text-lg text-gray-900">New project</h4>
                          </div>
                          <div className="space-y-3">
                            {approach.items.map((item, itemIndex) => (
                              <div key={itemIndex} className="flex items-center space-x-3 py-1">
                                <div className="w-8 h-8 bg-gradient-to-br from-[var(--accent-teal)] to-[var(--accent-green)] rounded-lg flex items-center justify-center flex-shrink-0">
                                  <item.icon className="h-4 w-4 text-white" />
                                </div>
                                <span className="text-sm font-medium text-gray-700">{item.label}</span>
                              </div>
                            ))}
                          </div>
                          
                          {/* Preview Window */}
                          <div 
                            className={`mt-4 rounded-lg p-4 text-center transition-colors duration-500 ${
                              isLightThemeActive ? 'bg-gray-100' : 'bg-gray-900'
                            }`}
                          >
                            <div className="text-[var(--accent-teal)] text-sm font-mono">Brief</div>
                            <div className="mt-2 space-y-1">
                              <div 
                                className={`h-1 rounded w-3/4 mx-auto transition-colors duration-500 ${
                                  isLightThemeActive ? 'bg-gray-300' : 'bg-gray-700'
                                }`}
                              ></div>
                              <div 
                                className={`h-1 rounded w-1/2 mx-auto transition-colors duration-500 ${
                                  isLightThemeActive ? 'bg-gray-300' : 'bg-gray-700'
                                }`}
                              ></div>
                              <div 
                                className={`h-1 rounded w-2/3 mx-auto transition-colors duration-500 ${
                                  isLightThemeActive ? 'bg-gray-300' : 'bg-gray-700'
                                }`}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Right Column - Description & Results */}
                      <div className="space-y-6">
                        <div>
                          <p className="text-lg mb-6 leading-relaxed text-gray-700">
                            {approach.description}
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="font-bold text-xl mb-4 text-gray-900 flex items-center">
                            <CheckSquare className="h-5 w-5 text-[var(--accent-teal)] mr-2" />
                            Result
                          </h4>
                          <p className="text-gray-700 mb-8 leading-relaxed bg-gradient-to-r from-gray-50 to-white p-4 rounded-lg border border-gray-200">
                            {approach.result}
                          </p>
                        </div>
                        
                        <div className="grid grid-cols-3 gap-4 mb-8">
                          {approach.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="text-center">
                              <div className="w-14 h-14 bg-gradient-to-br from-[var(--accent-teal)] to-[var(--accent-green)] rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                                <feature.icon className="h-7 w-7 text-white" />
                              </div>
                              <span className="text-xs font-semibold text-gray-800 leading-tight">{feature.label}</span>
                            </div>
                          ))}
                        </div>
                        
                        <Button 
                          className={`px-8 py-4 rounded-full font-bold w-full shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 ${
                            isLightThemeActive 
                              ? 'bg-gray-800 text-white hover:bg-gray-900' 
                              : 'bg-gradient-to-r from-gray-900 to-black text-white hover:from-black hover:to-gray-900'
                          }`}
                        >
                          BOOK A FREE STRATEGY CALL
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
