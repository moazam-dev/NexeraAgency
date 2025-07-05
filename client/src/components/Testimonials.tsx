import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Working with UM has been an incredible experience. Their attention to detail and innovative approach helped us achieve remarkable results.",
    author: "John Smith",
    role: "CEO, Tech Company",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
  },
  {
    quote: "The team's expertise in digital marketing transformed our online presence completely. We saw a 300% increase in leads within the first quarter.",
    author: "Sarah Johnson",
    role: "Marketing Director, E-commerce",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
  },
  {
    quote: "Professional, creative, and results-driven. UM delivered exactly what we needed to take our business to the next level.",
    author: "Michael Chen",
    role: "Founder, StartupCo",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-16 text-center">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 card-hover"
            >
              <div className="mb-6">
                <Quote className="h-12 w-12 text-[var(--accent-teal)] mb-4" />
                <blockquote className="text-lg italic leading-relaxed text-gray-300">
                  "{testimonial.quote}"
                </blockquote>
              </div>
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-white">{testimonial.author}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
