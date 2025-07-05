import Navigation from "@/components/Navigation";
import InteractiveHero from "@/components/InteractiveHero";
import About from "@/components/About";
import Services from "@/components/Services";
import Approach from "@/components/Approach";
import Team from "@/components/Team";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import SocialImpact from "@/components/SocialImpact";
import Contact from "@/components/Contact";
import CookieConsent from "@/components/CookieConsent";
import SpecializationCards from "@/components/industires"


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
      <FAQ />
      <SocialImpact />
      <Contact />
      <CookieConsent />
    </div>
  );
}
