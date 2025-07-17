import React from 'react';
import Navigation from "@/components/MainPage/Navigation";
import Hero from "@/components/services/MobileApp/AppdevHero";
import WebDevWhyWeb from "@/components/services/MobileApp/AppDevWhyWeb";
import Expertise from "@/components/services/MobileApp/AppDevExpertise";
import WebDevelopmentServices from "@/components/services/MobileApp/AppDevelopmentServices";
import WebDevelopmentWhyNexera from "@/components/services/MobileApp/AppDevelopmentWhyNexera";
import WebDevTechStack from '@/components/services/MobileApp/AppDevTechStack';
import FAQ from "@/components/MainPage/FAQ";
import Contact from "@/components/MainPage/Contact";
import { useEffect } from 'react';
export default function Home() {
  useEffect(()=>{
    window.scroll(0,0);
  },[])
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navigation />
      <Hero />
      <WebDevWhyWeb />
      <Expertise />
      <WebDevelopmentServices />
      <WebDevelopmentWhyNexera />
      <WebDevTechStack />
      <FAQ />      
      <Contact />
    </div>
  );
}
