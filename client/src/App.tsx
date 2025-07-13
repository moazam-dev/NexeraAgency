import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";
import CookieConsent from "@/components/MainPage/CookieConsent";
import WebDevelopmentPage from "@/pages/WebPage"; // Import your new page component
import AppDevelopmentPage from "@/pages/AppDevPage"; // Import your new page component
import WebProject from "@/components/Portfolio/web1";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/web-development" component={WebDevelopmentPage} /> {/* Add this line for the new page */}
      <Route path="/app-development" component={AppDevelopmentPage} />
      <Route path="/web-project" component={WebProject} />
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