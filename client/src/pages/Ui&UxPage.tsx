import React from 'react';

// MainPage components
import Navigation from "@/components/MainPage/Navigation";
import FAQ from "@/components/MainPage/FAQ";
import Contact from "@/components/MainPage/Contact";

// UI UX Design Service Components
import Hero from "@/components/services/UI UX Design/Ui&UxHero";
import WhyWeb from "@/components/services/UI UX Design/Ui&UxWhyWeb";
import Expertise from "@/components/services/UI UX Design/Ui&UxExpertise";
import Services from "@/components/services/UI UX Design/Ui&UxServices";
import WhyNexera from "@/components/services/UI UX Design/Ui&UxWhyNexera";
import TechStack from '@/components/services/UI UX Design/Ui&UxTechStack';

// Renamed the function to be more descriptive
export default function UiUxPage() {
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
