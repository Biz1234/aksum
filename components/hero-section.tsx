"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    image: "/images/slider-1.jpg",
    headline: "Innovative Software Solutions",
    subtext: "Building the future of Ethiopian technology",
  },
  {
    image: "/images/slider-2.jpg",
    headline: "Mobile & Web Applications",
    subtext: "Crafting seamless digital experiences",
  },
  {
    image: "/images/slider-3.jpg",
    headline: "Expert Development Team",
    subtext: "Skilled engineers delivering excellence",
  },
  {
    image: "/images/slider-4.jpg",
    headline: "Enterprise Solutions",
    subtext: "Powering businesses with smart systems",
  },
  {
    image: "/images/slider-5.jpg",
    headline: "Cloud & Infrastructure",
    subtext: "Scalable technology for growth",
  },
]

export default function HeroSection() {
  const [current, setCurrent] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [direction, setDirection] = useState<"left" | "right">("right")

  const goTo = useCallback((index: number, dir: "left" | "right") => {
    if (isAnimating) return
    setDirection(dir)
    setIsAnimating(true)
    setTimeout(() => {
      setCurrent(index)
      setIsAnimating(false)
    }, 500)
  }, [isAnimating])

  const next = useCallback(() => {
    goTo((current + 1) % slides.length, "right")
  }, [current, goTo])

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length, "left")
  }, [current, goTo])

  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-700 ease-out ${
            index === current
              ? "opacity-100 scale-100"
              : "opacity-0 scale-105"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.headline}
            fill
            className="object-cover"
            priority={index === 0}
          />
          {/* Overlay */}
          <div 
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to right, rgba(17,24,39,0.95) 0%, rgba(17,24,39,0.7) 50%, rgba(17,24,39,0.5) 100%)"
            }}
          />
        </div>
      ))}

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            {/* Animated headline */}
            <div className="overflow-hidden">
              <h1
                key={current}
                className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight animate-slide-up"
                style={{ color: "#FFFFFF" }}
              >
                {slides[current].headline.split(" ").map((word, i) => (
                  <span key={i} className="inline-block mr-3">
                    {i === 0 ? (
                      <span style={{ color: "#D4AF37" }}>{word}</span>
                    ) : (
                      word
                    )}
                  </span>
                ))}
              </h1>
            </div>

            {/* Subtext */}
            <p
              key={`sub-${current}`}
              className="mt-4 text-lg sm:text-xl animate-fade-in opacity-0"
              style={{ 
                color: "rgba(255,255,255,0.8)",
                animationDelay: "0.2s",
                animationFillMode: "forwards"
              }}
            >
              {slides[current].subtext}
            </p>

            {/* CTA buttons */}
            <div 
              className="mt-8 flex flex-wrap gap-4 animate-fade-in opacity-0"
              style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
            >
              <button
                onClick={() => {
                  document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
                }}
                className="px-8 py-3.5 text-sm font-semibold rounded-xl transition-all duration-200 hover:scale-105 active:scale-95"
                style={{ background: "#D4AF37", color: "#1E293B" }}
              >
                Our Services
              </button>
              <button
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }}
                className="px-8 py-3.5 text-sm font-semibold rounded-xl transition-all duration-200 hover:scale-105 active:scale-95 border-2"
                style={{ borderColor: "#D4AF37", color: "#D4AF37", background: "transparent" }}
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <div className="absolute bottom-1/2 translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
        <button
          onClick={prev}
          className="pointer-events-auto w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
          style={{ background: "rgba(212,175,55,0.2)", color: "#D4AF37" }}
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={next}
          className="pointer-events-auto w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
          style={{ background: "rgba(212,175,55,0.2)", color: "#D4AF37" }}
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index, index > current ? "right" : "left")}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === current ? "w-8" : "w-2"
            }`}
            style={{
              background: index === current ? "#D4AF37" : "rgba(255,255,255,0.4)"
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 hidden lg:flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs font-medium" style={{ color: "rgba(255,255,255,0.5)" }}>
          Scroll
        </span>
        <div 
          className="w-px h-8" 
          style={{ background: "linear-gradient(to bottom, rgba(212,175,55,0.5), transparent)" }}
        />
      </div>

      <style jsx>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  )
}
