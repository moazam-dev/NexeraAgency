import React from 'react';
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

// General Pages
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";
import WebProject from "@/components/Portfolio/web1";

// UI Components
import CookieConsent from "@/components/MainPage/CookieConsent";

// Import all service pages from your 'pages' directory
import WebDevelopmentPage from "@/pages/WebPage";
import AppDevelopmentPage from "@/pages/AppDevPage";
import BrandIdentityPage from "@/pages/BrandIdentityPagee";
import ContentCreationPage from "@/pages/ContentCreationPage";
import CreativeDesigningPage from "@/pages/CreativeDesignPage"; // Assuming component name
import DigitalMarketingPage from "@/pages/DigitalMarketingPage";
import EcommercePage from "@/pages/EcommercePage";
import MaintenanceSupportPage from "@/pages/Maintainence&SuportPage"; // Corrected spelling
import ShopifyPage from "@/pages/ShopifyPage";
import UiUxPage from "@/pages/Ui&UxPage"; // Corrected spelling
import VideoEditingPage from "@/pages/VideoEditingPage"; // Assuming component name
import WordpressPage from "@/pages/WordpressPage"; // Assuming component name

function Router() {
  return (
    <Switch>
      {/* Core Routes */}
      <Route path="/" component={Home} />
      <Route path="/web-project" component={WebProject} />

      {/* Service Page Routes */}
      <Route path="/web-development" component={WebDevelopmentPage} />
      <Route path="/app-development" component={AppDevelopmentPage} />
      <Route path="/brand-identity" component={BrandIdentityPage} />
      <Route path="/content-creation" component={ContentCreationPage} />
      <Route path="/creative-designing" component={CreativeDesigningPage} />
      <Route path="/digital-marketing" component={DigitalMarketingPage} />
      <Route path="/ecommerce-solutions" component={EcommercePage} />
      <Route path="/maintenance-support" component={MaintenanceSupportPage} />
      <Route path="/shopify-development" component={ShopifyPage} />
      <Route path="/ui-ux-design" component={UiUxPage} />
      <Route path="/video-editing" component={VideoEditingPage} />
      <Route path="/wordpress-development" component={WordpressPage} />
      
      {/* Fallback Route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="relative">
          <Toaster />
          <Router />
          <CookieConsent />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
