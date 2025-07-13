import { Mail, Instagram, Send, Linkedin } from "lucide-react";

export default function Contact() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { label: "SERVICES", id: "services" },
    { label: "OUR APPROACH", id: "approach" },
    { label: "PROJECTS", id: "portfolio" },
    { label: "ABOUT US", id: "about" },
    { label: "BLOG", id: "blog" }
  ];

  const socialItems = [
    { icon: Instagram, label: "INSTAGRAM", href: "#" },
    { icon: Send, label: "TELEGRAM", href: "#" },
    { icon: Linkedin, label: "LINKEDIN", href: "#" }
  ];

  return (
    <section id="contact" className="min-h-screen py-20 px-6 bg-black text-white relative overflow-hidden">
      {/* Static atmospheric background */}
      <div className="absolute inset-0">
        {/* Large blurry background shapes */}
        <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-[var(--accent-green)]/20 to-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-600/15 to-[var(--accent-teal)]/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-[var(--accent-teal)]/10 to-[var(--accent-green)]/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        
        {/* Static light particles */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.1
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start min-h-[80vh] pt-20">
          {/* Left Section - Massive Static Gradient Typography */}
          <div className="space-y-12">
            <div className="relative">
              <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-none">
                <span className="block bg-gradient-to-br from-[var(--accent-green)] via-[var(--accent-teal)] to-blue-500 bg-clip-text text-transparent">
                  LET'S
                </span>
                <span className="block bg-gradient-to-br from-[var(--accent-green)] via-[var(--accent-teal)] to-blue-500 bg-clip-text text-transparent">
                  DISCUSS
                </span>
                <span className="block bg-gradient-to-br from-[var(--accent-green)] via-[var(--accent-teal)] to-blue-500 bg-clip-text text-transparent">
                  YOUR
                </span>
                <span className="block bg-gradient-to-br from-[var(--accent-green)] via-[var(--accent-teal)] to-blue-500 bg-clip-text text-transparent">
                  PROJECT
                </span>
              </h1>
            </div>
            
            {/* Email Contact Button */}
            <div className="mt-12">
              <button 
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-[var(--accent-green)] to-[var(--accent-teal)] px-8 py-4 rounded-full text-white font-semibold text-lg hover:scale-105 transition-transform duration-300 shadow-lg"
                onClick={() => window.open('mailto:team@unknown.marketing')}
              >
                <Mail className="h-5 w-5" />
                <span>team@unknown.marketing</span>
              </button>
            </div>
          </div>
          
          {/* Right Section - Clean Navigation & Social */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
            {/* Menu Section */}
            <div className="space-y-8">
              <h3 className="text-xl font-bold text-gray-400 tracking-wide">
                MENU
              </h3>
              <div className="space-y-4">
                {menuItems.map((item) => (
                  <button 
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block text-left text-white hover:text-[var(--accent-teal)] transition-colors duration-300 font-medium"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Social Section */}
            <div className="space-y-8">
              <h3 className="text-xl font-bold text-gray-400 tracking-wide">
                OUR SOCIAL
              </h3>
              <div className="space-y-4">
                {socialItems.map((item) => (
                  <a 
                    key={item.label}
                    href={item.href}
                    className="flex items-center space-x-3 text-white hover:text-[var(--accent-teal)] transition-colors duration-300 font-medium"
                  >
                    <div className="w-8 h-8 border border-gray-600 rounded-full flex items-center justify-center hover:border-[var(--accent-teal)] transition-colors">
                      <item.icon className="h-4 w-4" />
                    </div>
                    <span>{item.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-20 pb-8 text-sm text-gray-400">
          <div>
            ©2025 UM. All rights reserved.
          </div>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <button className="hover:text-white transition-colors">Terms of use</button>
            <button className="hover:text-white transition-colors">Privacy Policy</button>
          </div>
        </div>
      </div>
    </section>
  );
}
