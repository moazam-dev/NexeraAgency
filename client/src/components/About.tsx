import { useEffect, useRef } from "react";

export default function About() {
  const textRef = useRef<HTMLParagraphElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current || !sectionRef.current) return;

    const words = textRef.current.querySelectorAll(".word-animate");

    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const windowHeight = window.innerHeight;

      // Calculate scroll progress within the section
      const scrollProgress = Math.max(
        0,
        Math.min(1, (windowHeight - sectionTop) / (sectionHeight + windowHeight * 0.3))
      );

      // Animate words based on scroll progress
      const totalWords = words.length;
      const wordsToHighlight = Math.floor(scrollProgress * totalWords);

      words.forEach((word, index) => {
        const element = word as HTMLElement;
        if (index < wordsToHighlight) {
          const delay = (index / totalWords) * 0.3;
          element.style.transitionDelay = `${delay}s`;
          element.classList.add("highlighted");
        } else {
          element.classList.remove("highlighted");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const text =
    "We are a team of passionate creators, developers, and strategists who believe in the power of exceptional design and cutting-edge technology to transform businesses and create meaningful connections with audiences. Every project is an opportunity to innovate, collaborate, and deliver results that exceed expectations while maintaining the highest standards of quality and creativity.";
  const words = text.split(" ");

  return (
    <section id="about" ref={sectionRef} className="py-20 px-6 relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-3xl md:text-3xl leading-relaxed text-gray-300">
              <p ref={textRef} className="mb-8">
                {words.map((word, index) => (
                  <span key={index} className="word-animate inline-block mr-2">
                    {word}
                  </span>
                ))}
              </p>
            </div>
          </div>

          <div className="w-full aspect-video max-w-2xl mx-0">
            <iframe
              className="w-full h-full rounded-xl"
              src="https://www.youtube.com/embed/hZOeL1FAVII?si=R6G85xZ8C-j5QDci"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
