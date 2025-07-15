import React from 'react';

// MainPage components
import Navigation from "@/components/MainPage/Navigation";
import FAQ from "@/components/MainPage/FAQ";
import Contact from "@/components/MainPage/Contact";

// Creative Designing Service Components
import Hero from "@/components/services/Creaative designing/CreaativedesigningHero";
import WhyWeb from "@/components/services/Creaative designing/CreaativedesigningWhyWeb";
import Expertise from "@/components/services/Creaative designing/CreaativedesigningExpertise";
import Services from "@/components/services/Creaative designing/CreaativedesigningServices";
import WhyNexera from "@/components/services/Creaative designing/CreaativedesigningWhyNexera";
import TechStack from '@/components/services/Creaative designing/CreaativedesigningTechStack';

// Renamed the function to be more descriptive
export default function CreativeDesigningPage() {
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
