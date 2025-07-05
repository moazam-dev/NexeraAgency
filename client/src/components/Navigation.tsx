import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Menu, X } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-black/90 backdrop-blur-md border-b border-gray-800" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="bg-white text-black px-4 py-2 rounded-full font-bold text-xl">
              Nexera
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("services")}
              className="hover:text-[var(--accent-teal)] transition-colors font-medium"
            >
              SERVICES
            </button>
            <button 
              onClick={() => scrollToSection("approach")}
              className="hover:text-[var(--accent-teal)] transition-colors font-medium"
            >
              OUR APPROACH
            </button>
            <button 
              onClick={() => scrollToSection("projects")}
              className="hover:text-[var(--accent-teal)] transition-colors font-medium"
            >
              PROJECTS
            </button>
            <button 
              onClick={() => scrollToSection("about")}
              className="hover:text-[var(--accent-teal)] transition-colors font-medium"
            >
              ABOUT US
            </button>
            <button 
              onClick={() => scrollToSection("blog")}
              className="hover:text-[var(--accent-teal)] transition-colors font-medium"
            >
              BLOG
            </button>
          </div>
          
          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Button 
              onClick={() => scrollToSection("contact")}
              className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              <span>LET'S TALK</span>
              <MessageCircle className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:bg-gray-800"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4 mt-4">
              <button 
                onClick={() => scrollToSection("services")}
                className="text-left hover:text-[var(--accent-teal)] transition-colors font-medium"
              >
                SERVICES
              </button>
              <button 
                onClick={() => scrollToSection("approach")}
                className="text-left hover:text-[var(--accent-teal)] transition-colors font-medium"
              >
                OUR APPROACH
              </button>
              <button 
                onClick={() => scrollToSection("projects")}
                className="text-left hover:text-[var(--accent-teal)] transition-colors font-medium"
              >
                PROJECTS
              </button>
              <button 
                onClick={() => scrollToSection("about")}
                className="text-left hover:text-[var(--accent-teal)] transition-colors font-medium"
              >
                ABOUT US
              </button>
              <button 
                onClick={() => scrollToSection("blog")}
                className="text-left hover:text-[var(--accent-teal)] transition-colors font-medium"
              >
                BLOG
              </button>
              <Button 
                onClick={() => scrollToSection("contact")}
                className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors w-fit"
              >
                <span>LET'S TALK</span>
                <MessageCircle className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
