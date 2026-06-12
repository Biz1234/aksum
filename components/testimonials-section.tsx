"use client"

import { useState, useEffect, useRef } from "react"
import { Star, ChevronLeft, ChevronRight, Quote, User, Sparkles } from "lucide-react"

const testimonials = [
  {
    name: "Mr. Luel Aynekulu",
    role: "Head of Software Engineering Department",
    content: "Axum Technologies PLC delivers excellence with every project. Their ability to integrate innovative technology with a deep understanding of our industry needs has made them an invaluable asset. Their modern, efficient approach ensures we're always ahead of the curve in a competitive market.",
    rating: 5,
    company: "Wollo university",
  },
  {
    name: "Dr. Abebe Teshome",
    role: "IT Director",
    content: "Axum Tech delivered an exceptional university management system that transformed how we handle student administration. Their team was professional and responsive throughout the project.",
    rating: 5,
    company: "Wollo University",
  },
  {
    name: "Sara Hailu",
    role: "Superviser",
    content: "Working with Axum Tech was a game-changer for our business. They built a robust financial platform that exceeded our expectations in both performance and security.",
    rating: 5,
    company: "Dallol enterprice company",
  },
  {
    name: "Yohannes Bekele",
    role: "Operations Manager",
    content: "The logistics platform developed by Axum Tech has streamlined our operations significantly. Their understanding of our business needs was impressive.",
    rating: 4,
    company: "Logistics",
  },
  {
    name: "Tigist Alemayehu",
    role: "Owner",
    content: "Exceptional technical expertise and outstanding support. Axum Tech helped us build a telemedicine platform that has improved healthcare access across the region.",
    rating: 5,
    company: "muse healthcare",
  },
  {
    name: "Dawit Mengistu",
    role: "Founder",
    content: "The agricultural management system they developed has revolutionized how we monitor crop data. Highly recommend their services for any tech project.",
    rating: 5,
    company: "sol-Agri tech Solutions",
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const visibleCount = 3
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext()
    }, 6000)
    return () => clearInterval(timer)
  }, [currentIndex])

  const handleNext = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const handlePrev = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      handleNext()
    }
    if (touchStart - touchEnd < -75) {
      handlePrev()
    }
  }

  const getVisibleTestimonials = () => {
    const items = []
    for (let i = 0; i < visibleCount; i++) {
      items.push(testimonials[(currentIndex + i) % testimonials.length])
    }
    return items
  }

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={14}
            fill={i < rating ? "#D4AF37" : "none"}
            className={i < rating ? "text-[#D4AF37]" : "text-gray-300"}
          />
        ))}
      </div>
    )
  }

  return (
    <section 
      ref={sectionRef}
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{ 
        background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)"
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #D4AF37 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full opacity-5 blur-3xl"
           style={{ background: "#D4AF37" }} />
      <div className="absolute bottom-20 left-20 w-64 h-64 rounded-full opacity-5 blur-3xl"
           style={{ background: "#1E293B" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
               style={{ background: "rgba(212,175,55,0.08)", border: "1px solid rgba(212,175,55,0.2)" }}>
            <Sparkles size={16} style={{ color: "#D4AF37" }} />
            <span className="text-sm font-medium" style={{ color: "#D4AF37" }}>Client Stories</span>
          </div>
          
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
              style={{ color: "#111827" }}>
            What Our <span style={{ color: "#D4AF37" }}>Clients Say</span>
          </h2>
          
          <p className="text-lg" style={{ color: "#6B7280" }}>
            Real feedback from the people and organizations we've had the pleasure to work with
          </p>
        </div>

        {/* Cards Container */}
        <div className="relative px-8 md:px-12">
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg z-20 bg-white border border-gray-200 text-[#1E293B] hover:border-[#D4AF37] hover:text-[#D4AF37]"
            aria-label="Previous testimonials"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg z-20 bg-white border border-gray-200 text-[#1E293B] hover:border-[#D4AF37] hover:text-[#D4AF37]"
            aria-label="Next testimonials"
          >
            <ChevronRight size={20} />
          </button>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {getVisibleTestimonials().map((testimonial, index) => {
              const isMiddle = index === 1
              
              return (
                <div
                  key={`${testimonial.name}-${currentIndex}-${index}`}
                  className={`relative rounded-2xl overflow-hidden transition-all duration-500 ${
                    isAnimating ? 'animate-fade-in' : ''
                  }`}
                  style={{
                    background: "#FFFFFF",
                    border: isMiddle 
                      ? "2px solid #D4AF37" 
                      : "1px solid #E5E7EB",
                    boxShadow: isMiddle 
                      ? "0 20px 40px -10px rgba(212,175,55,0.2)" 
                      : "0 4px 20px rgba(0,0,0,0.02)",
                    transform: isMiddle ? 'scale(1.02)' : 'scale(1)',
                    opacity: isAnimating ? 0.8 : 1
                  }}
                >
                  {/* Gold accent for middle card */}
                  {isMiddle && (
                    <div className="absolute top-0 left-0 w-1 h-16 bg-[#D4AF37]" />
                  )}

                  <div className="p-6 lg:p-8">
                    {/* Quote Icon */}
                    <div className="mb-4">
                      <Quote 
                        size={36} 
                        style={{ 
                          color: isMiddle ? "#D4AF37" : "#E5E7EB",
                          opacity: isMiddle ? 0.3 : 0.5
                        }} 
                      />
                    </div>

                    {/* Content */}
                    <p className="text-base leading-relaxed mb-6 line-clamp-4"
                       style={{ color: "#374151" }}>
                      "{testimonial.content}"
                    </p>

                    {/* Rating */}
                    <div className="mb-4">
                      {renderStars(testimonial.rating)}
                    </div>

                    {/* Author */}
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className={`w-12 h-12 rounded-full overflow-hidden flex items-center justify-center transition-all duration-300 ${
                          isMiddle ? 'ring-2 ring-[#D4AF37] ring-offset-2' : ''
                        }`}
                             style={{ background: "#F3F4F6" }}>
                          <User size={20} style={{ color: "#9CA3AF" }} />
                        </div>
                        {isMiddle && (
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#D4AF37] rounded-full border-2 border-white" />
                        )}
                      </div>
                      
                      <div>
                        <h4 className="font-heading font-bold text-base"
                            style={{ color: "#111827" }}>
                          {testimonial.name}
                        </h4>
                        <p className="text-xs mt-0.5" style={{ color: "#6B7280" }}>
                          {testimonial.role}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Decorative corner for middle card */}
                  {isMiddle && (
                    <div className="absolute bottom-0 right-0 w-16 h-16 overflow-hidden">
                      <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-[#D4AF37]/10 to-transparent transform rotate-45 translate-x-10 translate-y-10" />
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-10">
            {testimonials.map((_, index) => {
              const isActive = index === currentIndex
              return (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    isActive ? 'w-8' : 'w-2'
                  }`}
                  style={{
                    background: isActive ? "#D4AF37" : "#D1D5DB"
                  }}
                  aria-label={`Go to testimonial group ${index + 1}`}
                />
              )
            })}
          </div>

          {/* Counter */}
          <div className="text-center mt-4">
            <span className="text-sm" style={{ color: "#9CA3AF" }}>
              {currentIndex + 1} - {Math.min(currentIndex + visibleCount, testimonials.length)} of {testimonials.length}
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0.5;
            transform: translateY(-5px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
        
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  )
}