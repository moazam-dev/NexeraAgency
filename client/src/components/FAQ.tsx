import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus, Minus, MessageCircle } from "lucide-react";

const faqs = [
  {
    question: "When will we see the first sales?",
    answer: "Results typically begin showing within 2-4 weeks of campaign launch, depending on your industry and competition level. We focus on quick wins while building long-term sustainable growth."
  },
  {
    question: "How do you measure the success of advertising campaigns?",
    answer: "We track key metrics including ROI, conversion rates, cost per acquisition, and overall campaign performance against your specific goals. You'll receive detailed analytics and insights in our regular reports."
  },
  {
    question: "How often will I receive reports on campaign performance?",
    answer: "We provide weekly progress updates and comprehensive monthly reports with detailed analytics and optimization recommendations. You'll also have access to real-time dashboards for ongoing visibility."
  },
  {
    question: "What makes your approach different from other agencies?",
    answer: "Our data-driven methodology combined with creative excellence sets us apart. We don't just execute campaigns - we build comprehensive strategies tailored to your business objectives and market position."
  },
  {
    question: "Do you work with businesses in my industry?",
    answer: "We have experience across various industries including e-commerce, SaaS, healthcare, finance, and more. Our adaptable approach allows us to quickly understand and excel in new verticals."
  }
];

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="py-20 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="text-center lg:text-left">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300"
              alt="Veronika - PPC Team Leader"
              className="w-48 h-48 rounded-full mx-auto lg:mx-0 mb-6 filter grayscale hover:grayscale-0 transition-all duration-300"
            />
            <p className="text-lg mb-6 text-gray-300 leading-relaxed">
              Meet Veronika, Leader of the PPC Team. Feel free to text her and get all that you need.
            </p>
            <Button className="bg-gradient-to-r from-[var(--accent-teal)] to-[var(--accent-green)] text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform">
              <MessageCircle className="mr-2 h-5 w-5" />
              ASK A QUESTION
            </Button>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-8">
              FAQ
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-800 rounded-lg bg-gray-900/30 backdrop-blur-sm hover:bg-gray-900/50 transition-colors"
                >
                  <div
                    className="p-6 cursor-pointer flex justify-between items-center"
                    onClick={() => toggleFaq(index)}
                  >
                    <h3 className="text-lg font-semibold pr-4">
                      {faq.question}
                    </h3>
                    {openFaq === index ? (
                      <Minus className="h-5 w-5 text-[var(--accent-teal)] flex-shrink-0" />
                    ) : (
                      <Plus className="h-5 w-5 text-[var(--accent-teal)] flex-shrink-0" />
                    )}
                  </div>
                  {openFaq === index && (
                    <div className="px-6 pb-6 text-gray-400 animate-in slide-in-from-top duration-300">
                      <p className="leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
