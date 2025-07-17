import React ,{useEffect} from 'react';

// MainPage components
import Navigation from "@/components/MainPage/Navigation";
import FAQ from "@/components/MainPage/FAQ";
import Contact from "@/components/MainPage/Contact";

// Maintenance & Support Service Components
import Hero from "@/components/services/Maintenance & Support/M&SHero";
import WhyWeb from "@/components/services/Maintenance & Support/M&SWhyWeb";
import Expertise from "@/components/services/Maintenance & Support/M&SExpertise";
import Services from "@/components/services/Maintenance & Support/M&SServices";
import WhyNexera from "@/components/services/Maintenance & Support/M&SWhyNexera";
import TechStack from '@/components/services/Maintenance & Support/M&STechStack';

// Renamed the function to be more descriptive
export default function MaintenanceSupportPage() {
  useEffect(()=>{
    window.scroll(0,0);
  },[])
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navigation />
      <Hero />
      <WhyWeb />
      <Expertise />
      <Services />
      <WhyNexera />
      <TechStack />
      <FAQ />      
      <Contact />
    </div>
  );
}
