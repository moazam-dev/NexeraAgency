// Home.tsx
import React, { useRef, useEffect, useState } from 'react';
import Navigation from "@/components/Navigation";
import InteractiveHero from "@/components/InteractiveHero";
import About from "@/components/About";
import Services from "@/components/Services";
import Approach from "@/components/Approach";
import Team from "@/components/Team";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import SocialImpact from "@/components/SocialImpact";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import CookieConsent from "@/components/CookieConsent";
import SpecializationCards from "@/components/industires"; // Corrected import path

export default function Home() {
  // Create refs to attach to the Testimonials and SpecializationCards components
  const testimonialsRef = useRef(null);
  const specializationCardsRef = useRef(null); // New ref for SpecializationCards
  const approachSectionRef = useRef(null);
  const portfolioSectionref = useRef(null)
  // State to control the global light theme activation
  const [isLightThemeActive, setIsLightThemeActive] = useState(false);
 
  // Effect for approach section component visibility
  useEffect(() => {
    const observer = new IntersectionObserver (
      ([entry]) => {
        // If Testimonials is at least 1% visible, activate the light theme
        if (entry.isIntersecting && entry.intersectionRatio >= 0.01) {
          setIsLightThemeActive(true);
        }
        // Note: Testimonials only triggers activation, not deactivation
      },
      {
        root: null, // The viewport is the root
        rootMargin: '0px',
        threshold: 0.01, // Trigger when 1% of the target is visible
      }
    );

    if (approachSectionRef.current) {
      observer.observe(approachSectionRef.current);
    }

    return () => {
      if (approachSectionRef.current) {
        observer.unobserve(approachSectionRef.current);
      }
    };
  }, []); // Runs once on mount
    // Effect for portfoilio section component visibility
    useEffect(() => {
      const observer = new IntersectionObserver (
        ([entry]) => {
          // If Testimonials is at least 1% visible, activate the light theme
          if (entry.isIntersecting && entry.intersectionRatio >= 0.01) {
            setIsLightThemeActive(false);
          }
          // Note: Testimonials only triggers activation, not deactivation
        },
        {
          root: null, // The viewport is the root
          rootMargin: '0px',
          threshold: 0.01, // Trigger when 1% of the target is visible
        }
      );
  
      if (portfolioSectionref.current) {
        observer.observe(portfolioSectionref.current);
      }
  
      return () => {
        if (portfolioSectionref.current) {
          observer.unobserve(portfolioSectionref.current);
        }
      };
    }, []); // Runs once on mount
  
  useEffect(() => {
    const observer = new IntersectionObserver (
      ([entry]) => {
        // If Testimonials is at least 1% visible, activate the light theme
        if (entry.isIntersecting && entry.intersectionRatio >= 0.01) {
          setIsLightThemeActive(true);
        }
        // Note: Testimonials only triggers activation, not deactivation
      },
      {
        root: null, // The viewport is the root
        rootMargin: '0px',
        threshold: 0.01, // Trigger when 1% of the target is visible
      }
    );

    if (testimonialsRef.current) {
      observer.observe(testimonialsRef.current);
    }

    return () => {
      if (testimonialsRef.current) {
        observer.unobserve(testimonialsRef.current);
      }
    };
  }, []); // Runs once on mount

  // Effect for SpecializationCards component visibility (for deactivation)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If SpecializationCards is completely out of view (intersectionRatio is 0),
        // deactivate the light theme.
        if (entry.intersectionRatio >= 0.3) {
          setIsLightThemeActive(false);
        }
        // Note: SpecializationCards only triggers deactivation, not activation
      },
      {
        root: null, // The viewport is the root
        rootMargin: '0px',
        threshold: 0.3, // Trigger immediately when it leaves the view (or enters)
      }
    );

    if (specializationCardsRef.current) {
      observer.observe(specializationCardsRef.current);
    }

    return () => {
      if (specializationCardsRef.current) {
        observer.unobserve(specializationCardsRef.current);
      }
    };
  }, []); // Runs once on mount

  return (
    <div className="min-h-screen">
      <Navigation />
      <InteractiveHero />
      <About />
     
      <Services />
     
      <div ref={approachSectionRef}>
      <Approach isLightThemeActive={isLightThemeActive}/>
      </div>
      <div ref={portfolioSectionref}> 
      <Team />
      </div>
      <Portfolio isLightThemeActive={isLightThemeActive}/>
     
     
     
      {/* Testimonials section: Attach ref and pass the theme state */}
      <Testimonials ref={testimonialsRef} isLightThemeActive={isLightThemeActive} />
      {/* SpecializationCards section: Attach ref and pass the theme state */}
     
        <SpecializationCards isLightThemeActive={isLightThemeActive} />
     
      {/* SocialImpact section: Pass the theme state */}
      <div ref={specializationCardsRef}>
      <SocialImpact isLightThemeActive={isLightThemeActive} />
      </div>
     
      {/* FAQ section: Pass the theme state */}
      <FAQ isLightThemeActive={isLightThemeActive} />
      <Contact />
      <CookieConsent />
    </div>
  );
}
