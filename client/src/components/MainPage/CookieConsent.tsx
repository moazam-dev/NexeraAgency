import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  const dismissCookies = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 md:right-auto md:max-w-md bg-gray-900 border border-gray-700 rounded-lg p-4 z-50 shadow-2xl backdrop-blur-sm">
      <div className="flex justify-between items-start mb-3">
        <p className="text-sm text-gray-300 pr-4">
          We use cookies to improve website and ensure you get the best experience.{" "}
          <a href="#" className="text-[var(--accent-teal)] hover:underline">
            Learn more
          </a>
        </p>
        <button
          onClick={dismissCookies}
          className="text-gray-400 hover:text-white transition-colors flex-shrink-0"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
      <Button
        onClick={acceptCookies}
        className="bg-[var(--accent-teal)] hover:bg-[var(--accent-green)] text-white px-6 py-2 rounded-full text-sm font-semibold transition-colors"
      >
        ACCEPT
      </Button>
    </div>
  );
}
