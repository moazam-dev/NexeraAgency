import React from 'react';
import Navigation from "@/components/Navigation";
import Hero from "@/components/services/webdevHero";
import Expertise from "@/components/services/WebDevExpertise";
import WhyChooseUs from "@/components/services/WebDevWhyChooseUs";
import WebDevelopmentServices from "@/components/services/WebDevelopmentServices";
import WebDevelopmentProcess from "@/components/services/WebDevelopmentProcess";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Hero />
      <Expertise />
      <WhyChooseUs />
      <WebDevelopmentServices />
      <WebDevelopmentProcess />

    </div>
  );
}
