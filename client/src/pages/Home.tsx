import Navigation from "@/components/MainPage/Navigation";
import InteractiveHero from "@/components/MainPage/InteractiveHero";
import About from "@/components/MainPage/About";
import Services from "@/components/MainPage/Services";
import Approach from "@/components/MainPage/Approach";
import Team from "@/components/MainPage/Team";
import Portfolio from "@/components/MainPage/Portfolio";
import Testimonials from "@/components/MainPage/Testimonials";
import SocialImpact from "@/components/MainPage/SocialImpact";
import FAQ from "@/components/MainPage/FAQ";
import Contact from "@/components/MainPage/Contact";
import CookieConsent from "@/components/MainPage/CookieConsent";
import SpecializationCards from "@/components/MainPage/industires"


export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <InteractiveHero />
      <About />
      <Services />
      <Approach />
      <Team />
      <Portfolio />
      <Testimonials />
      <SpecializationCards />
      <SocialImpact />
      <FAQ />      
      <Contact />
      <CookieConsent />
    </div>
  );
}
