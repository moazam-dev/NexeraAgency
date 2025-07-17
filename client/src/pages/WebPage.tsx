import React from 'react';
import Navigation from "@/components/MainPage/Navigation";
import Hero from "@/components/services/Web/webdevHero";
import WebDevWhyWeb from "@/components/services/Web/WebDevWhyWeb";
import Expertise from "@/components/services/Web/WebDevExpertise";
import WebDevelopmentServices from "@/components/services/Web/WebDevelopmentServices";
import WebDevelopmentWhyNexera from "@/components/services/Web/WebDevelopmentWhyNexera";
import WebDevTechStack from '@/components/services/Web/WebDevTechStack';
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
