import React from 'react';
import Navigation from "@/components/Navigation";
import Hero from "@/components/services/webdevHero";
import WebDevWhyWeb from "@/components/services/WebDevWhyWeb";
import Expertise from "@/components/services/WebDevExpertise";
import WebDevelopmentServices from "@/components/services/WebDevelopmentServices";
import WebDevelopmentWhyNexera from "@/components/services/WebDevelopmentWhyNexera";
import WebDevTechStack from '@/components/services/WebDevTechStack';
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";

export default function Home() {
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
