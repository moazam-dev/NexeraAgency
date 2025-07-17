import React  , {useEffect} from 'react';

// MainPage components
import Navigation from "@/components/MainPage/Navigation";
import FAQ from "@/components/MainPage/FAQ";
import Contact from "@/components/MainPage/Contact";

// Ecommerce Solutions Service Components
import Hero from "@/components/services/Ecommerce Solutions/EcommerceHero";
import WhyWeb from "@/components/services/Ecommerce Solutions/EcommerceWhyWeb";
import Expertise from "@/components/services/Ecommerce Solutions/EcommerceExpertise";
import Services from "@/components/services/Ecommerce Solutions/EcommerceServices";
import WhyNexera from "@/components/services/Ecommerce Solutions/EcommerceWhyNexera";
import TechStack from '@/components/services/Ecommerce Solutions/EcommerceTechStack';

// Renamed the function to be more descriptive
export default function EcommercePage() {
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
