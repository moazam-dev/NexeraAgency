import React ,{useEffect}from 'react';

// MainPage components
import Navigation from "@/components/MainPage/Navigation";
import FAQ from "@/components/MainPage/FAQ";
import Contact from "@/components/MainPage/Contact";

// Digital Marketing Service Components
import Hero from "@/components/services/Digital Marketing/DigitalMarketingHero";
import WhyWeb from "@/components/services/Digital Marketing/DigitalMarketingWhyWeb";
import Expertise from "@/components/services/Digital Marketing/DigitalMarketingExpertise";
import Services from "@/components/services/Digital Marketing/DigitalMarketingServices";
import WhyNexera from "@/components/services/Digital Marketing/DigitalMarketingWhyNexera";
import TechStack from '@/components/services/Digital Marketing/DigitalMarketingTechStack';

// Renamed the function to be more descriptive
export default function DigitalMarketingPage() {
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
