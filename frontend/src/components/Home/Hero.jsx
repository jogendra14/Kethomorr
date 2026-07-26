import { useState, useEffect } from "react";
import HeroHeader from "./HeroHeader";

const Slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&h=500&fit=crop",
    title: "Summer Sale - 50% Off",
    subtitle: "Grab the best deals before they are gone!",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&h=500&fit=crop",
    title: "New Arrivals",
    subtitle: "Check out the latest collection today.",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=1200&h=500&fit=crop",
    title: "Premium Quality",
    subtitle: "Experience excellence in every detail.",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=500&fit=crop",
    title: "Free Shipping",
    subtitle: "On all orders over $50. Shop now!",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&h=500&fit=crop",
    title: "Limited Edition",
    subtitle: "Exclusive items available for a short time.",
  },
];

export default function Hero() {
  const sliderSlides = [
    Slides[Slides.length - 1], // last clone
    ...Slides,
    Slides[0], // first clone
  ];

  const [current, setCurrent] = useState(1);
  const [transition, setTransition] = useState(true);

  // Auto-play every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => prev + 1);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const handleTransitionEnd = () => {
    if (current === sliderSlides.length - 1) {
      setTransition(false);
      setCurrent(1);
    }

    if (current === 0) {
      setTransition(false);
      setCurrent(Slides.length);
    }
  };

  useEffect(() => {
    if (!transition) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setTransition(true);
        });
      });
    }
  }, [transition]);

  const next = () => {
    if (current < sliderSlides.length - 1) {
      setCurrent(current + 1);
    }
  };

  const prev = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  return (
    <>
      <div>
        <HeroHeader />
      </div>
      <section className="relative w-full h-[85vh] min-h-125 max-h-200 overflow-hidden">
        {/* Slides Container */}
        <div
          onTransitionEnd={handleTransitionEnd}
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${current * 100}%)`,
            transition: transition ? "transform 0.6s ease-in-out" : "none",
          }}
        >
          {sliderSlides.map((img, i) => (
            <div key={i} className="min-w-full h-full relative flex shrink-0">

              {/* Background Image */}
              <img src={img.image} alt={img.title} className="w-full h-full object-cover" />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/20 to-transparent" />

              {/* Text Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 md:p-14 text-white">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 drop-shadow-lg">{img.title}</h2>
                <p className="text-sm sm:text-base md:text-lg opacity-90 drop-shadow">{img.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Prev Button */}
        <button
          onClick={prev}
          className="absolute top-1/2 left-3 sm:left-5 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/40 transition-all duration-300 border border-white/30"
          aria-label="Previous slide"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        {/* Next Button */}
        <button
          onClick={next}
          className="absolute top-1/2 right-3 sm:right-5 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/40 transition-all duration-300 border border-white/30"
          aria-label="Next slide"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </section>
    </>
  );
}
