import React from 'react';

// MainPage components
import Navigation from "@/components/MainPage/Navigation";
import FAQ from "@/components/MainPage/FAQ";
import Contact from "@/components/MainPage/Contact";

// Video Editing Service Components
import Hero from "@/components/services/Video Editing/VideoHero";
import WhyWeb from "@/components/services/Video Editing/VideoWhyWeb";
import Expertise from "@/components/services/Video Editing/VideoExpertise";
import Services from "@/components/services/Video Editing/VideoServices";
import WhyNexera from "@/components/services/Video Editing/VideoWhyNexera";
import TechStack from '@/components/services/Video Editing/VideoTechStack';

// Renamed the function to be more descriptive
export default function VideoEditingPage() {
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
