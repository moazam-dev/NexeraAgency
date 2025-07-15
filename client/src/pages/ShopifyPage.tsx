import React from 'react';

// MainPage components
import Navigation from "@/components/MainPage/Navigation";
import FAQ from "@/components/MainPage/FAQ";
import Contact from "@/components/MainPage/Contact";

// Shopify Service Components
import Hero from "@/components/services/Shopify/ShopifyHero";
import WhyWeb from "@/components/services/Shopify/ShopifyWhyWeb";
import Expertise from "@/components/services/Shopify/ShopifyExpertise";
import Services from "@/components/services/Shopify/ShopifyServices";
import WhyNexera from "@/components/services/Shopify/ShopifyWhyNexera";
import TechStack from '@/components/services/Shopify/ShopifyTechStack';

// Renamed the function to be more descriptive
export default function ShopifyPage() {
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
