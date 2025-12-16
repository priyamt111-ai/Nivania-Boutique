import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";

const slides = [
  {
    image: hero1,
    subtitle: "New Collection 2026",
    title: "Timeless Elegance",
    description: "Discover our curated collection of sophisticated pieces designed for the modern woman.",
    cta: "Customize Now",
    ctaLink: "#collections",
  },
  {
    image: hero2,
    subtitle: "Exclusive Pieces",
    title: "Define Your Style",
    description: "Life is too short to wear boring clothes. Express yourself with our premium selection.",
    cta: "Customize Now",
    ctaLink: "#new-arrivals",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 800);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 800);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-out ${
            index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent z-10" />
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover object-center"
          />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 container-wide h-full flex items-center">
        <div className="max-w-xl">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                index === currentSlide
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8 absolute"
              }`}
            >
              {index === currentSlide && (
                <>
                  <span className="inline-block text-sm font-body font-medium tracking-[0.3em] uppercase text-accent mb-4 opacity-0 animate-fade-up">
                    {slide.subtitle}
                  </span>
                  <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-6 opacity-0 animate-fade-up stagger-1">
                    {slide.title}
                  </h1>
                  <p className="text-lg text-muted-foreground mb-8 max-w-md opacity-0 animate-fade-up stagger-2">
                    {slide.description}
                  </p>
                  <a
                    href={slide.ctaLink}
                    className="btn-primary inline-block opacity-0 animate-fade-up stagger-3"
                  >
                    {slide.cta}
                  </a>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-8 right-8 z-20 flex gap-2">
        <button
          onClick={prevSlide}
          className="w-12 h-12 border border-foreground/20 flex items-center justify-center hover:bg-foreground hover:text-background transition-all duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="w-12 h-12 border border-foreground/20 flex items-center justify-center hover:bg-foreground hover:text-background transition-all duration-300"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1 transition-all duration-500 ${
              index === currentSlide ? "w-8 bg-foreground" : "w-4 bg-foreground/30"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
