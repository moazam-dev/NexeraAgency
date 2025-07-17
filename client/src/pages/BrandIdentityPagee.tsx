import React from 'react';

// General Components
import Navigation from '@/components/MainPage/Navigation';
import FAQ from '@/components/MainPage/FAQ';
import Contact from "@/components/MainPage/Contact";

// Brand Identity Specific Components
import Hero from '@/components/services/Brand Identity/BrandIdentityHero';
import WebDevWhyWeb from '@/components/services/Brand Identity/BrandIdentityWhyWeb';
import Expertise from '@/components/services/Brand Identity/BrandIdentityExpertise';
import WebDevelopmentServices from '@/components/services/Brand Identity/BrandIdentityServices';
import WebDevelopmentWhyNexera from '@/components/services/Brand Identity/BrandIdentityWhyNexera';
import WebDevTechStack from '@/components/services/Brand Identity/BrandIdentityTechStack';
import { useEffect } from 'react';
// Renamed the function to be more descriptive
export default function BrandIdentityPage() {
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