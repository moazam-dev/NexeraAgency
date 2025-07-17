import React , {useEffect} from 'react';

// MainPage components
import Navigation from "@/components/MainPage/Navigation";
import FAQ from "@/components/MainPage/FAQ";
import Contact from "@/components/MainPage/Contact";

// Wordpress Service Components
import Hero from "@/components/services/Wordpress/WordpressHero";
import WhyWeb from "@/components/services/Wordpress/WordpressWhyWeb";
import Expertise from "@/components/services/Wordpress/WordpressExpertise";
import Services from "@/components/services/Wordpress/WordpressServices";
import WhyNexera from "@/components/services/Wordpress/WordpressWhyNexera";
import TechStack from '@/components/services/Wordpress/WordpressTechStack';

// Renamed the function to be more descriptive
export default function WordpressPage() {
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
