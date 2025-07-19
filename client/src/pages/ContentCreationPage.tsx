import React from 'react';

// MainPage components (paths unchanged as requested)
import Navigation from "@/components/MainPage/Navigation";
import FAQ from "@/components/MainPage/FAQ";
import Contact from "@/components/MainPage/Contact";

// MobileApp Service Components (Corrected local variable names)
import Hero from "@/components/services/Content Creation/ContentCreatonHero";
import AppDevWhyWeb from "@/components/services/Content Creation/ContentCreationWhyWeb";
import Expertise from "@/components/services/Content Creation/ContentCreationExpertise";
import AppDevelopmentServices from "@/components/services/Content Creation/ContentCreationServices";
import AppDevelopmentWhyNexera from "@/components/services/Content Creation/ContentCreationWhyNexera";
import AppDevTechStack from '@/components/services/Content Creation/ContentCreationTechStack';
import {useEffect} from "react";
// Renamed the function to be more descriptive
export default function AppDevPage() {
  useEffect(()=>{
    window.scroll(0,0);
  },[])
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navigation />
      <Hero />
      {/* Using the corrected component variable names */}
      <AppDevWhyWeb />
      <Expertise />
      <AppDevelopmentServices />
      <AppDevelopmentWhyNexera />
      <AppDevTechStack />
      <FAQ />      
      <Contact />
    </div>
  );
}
