import React, { useState } from 'react';
// Import motion for animations and the correct icon
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
// It's standard practice to capitalize component names
import ContactForm from "@/components/ContactForm";

const GOOGLE_CALENDAR_URL = "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ25Lkfhfy-PWdh1A0QqCqR4tfvQfbaz3mvxCOmGdjTv2qRRWXzwwDx2GxJQn6kEko2e_Nu52RLJ";

export default function Booking() {
  // State to manage the visibility of the contact form
  const [showContactForm, setShowContactForm] = useState(false);

  // Variants for the button scale animation
  const buttonVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  };

  // Variants for the arrow movement animation
  const arrowVariants = {
    rest: { x: 0, y: 0 },
    hover: { x: 4, y: -4 }
  };

  return (
    // Use a React Fragment to allow the ContactForm to be rendered alongside the section
    <>
      <section className="bg-white font-inter">
        <div className="container mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 text-center">
          
          {/* --- Heading with gradient text --- */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-8">
            Let’s talk about your <span className="relative inline-block pb-1 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">next big move.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-500 mb-12">
            Schedule a free consultation call below. We're excited to learn about your project and discuss how we can help you achieve your goals.
          </p>

          {/* --- Google Calendar Iframe --- */}
          <div 
            className="w-full mx-auto h-[600px] sm:h-[700px] bg-gray-100 rounded-2xl shadow-lg overflow-hidden border border-gray-200"
            style={{ minHeight: '600px' }} // Ensures a minimum height
          >
            <iframe
              src={GOOGLE_CALENDAR_URL}
              className="w-full h-full border-0"
              frameBorder="0"
              title="Booking Calendar"
              scrolling="yes"
            ></iframe>
          </div>

          {/* --- Animated Gradient Button --- */}
          <div className="mt-16 flex justify-center">
            <motion.button
              // This now updates state to show the form
              onClick={() => setShowContactForm(true)}
              variants={buttonVariants}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              // We apply the layout classes directly to the motion component
              className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[var(--accent-teal)] to-[var(--accent-green)] px-6 py-3"
            >
              <span className="text-base font-semibold text-white">Prefer to chat</span>
              <motion.div
                variants={arrowVariants}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="text-white"
              >
                <ArrowUpRight className="h-5 w-5" />
              </motion.div>
            </motion.button>
          </div>

        </div>
         <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
          
          :root {
            --accent-teal: #2dd4bf;  /* Tailwind's teal-400 */
            --accent-green: #34d399; /* Tailwind's emerald-400 */
          }

          .font-inter {
            font-family: 'Inter', sans-serif;
          }
        `}</style>
      </section>

      {/* Conditionally render your ContactForm component */}
      {/* Note: Your ContactForm component should have a close button that calls the onClose prop */}
      {showContactForm && <ContactForm onClose={() => setShowContactForm(false)} />}
    </>
  );
}
