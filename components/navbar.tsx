"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu, X, Phone, ArrowRight } from "lucide-react"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Values", href: "#values" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Tech Stack", href: "#techstack" },
  { label: "Blogs", href: "#blogs" },
  { label: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState("#home")

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setScrolled(scrollPosition > 20)

      // Active section tracking
      const sections = navLinks.map((l) => l.href.replace("#", ""))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && scrollPosition + 100 >= el.offsetTop) {
          setActive(`#${sections[i]}`)
          break
        }
      }
    }
    
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu on resize if open
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false)
      }
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [isOpen])

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    setActive(href)
    const el = document.querySelector(href)
    if (el) {
      const offset = 80
      const elementPosition = el.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "py-0 shadow-lg shadow-black/10" 
          : "py-2"
      }`}
      style={{
        background: scrolled
          ? "rgba(17,24,39,0.95)"
          : "linear-gradient(to bottom, rgba(17,24,39,0.5) 0%, transparent 100%)",
        backdropFilter: scrolled ? "blur(12px)" : "blur(4px)",
        borderBottom: scrolled ? "1px solid rgba(212,175,55,0.15)" : "none",
      }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <button
            onClick={() => handleNavClick("#home")}
            className="flex items-center gap-2 sm:gap-3 group cursor-pointer relative"
            aria-label="Axum Tech - Go to home"
          >
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl overflow-hidden transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/aksum-logo2.png"
                alt="Axum Tech Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            
            {/* Brand name - hidden on mobile, visible on tablet up */}
            <span className="hidden sm:block text-base lg:text-lg font-semibold text-white/90 group-hover:text-white transition-colors">
              Axum Tech
            </span>
          </button>

          {/* Desktop Nav - Hidden on mobile/tablet, visible on lg up */}
          <ul className="hidden lg:flex items-center gap-1" role="list">
            {navLinks.slice(0, 6).map((link) => { // Show first 6 items on desktop
              const isActive = active === link.href
              return (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className={`relative px-3 xl:px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "text-[#1E293B]"
                        : "text-white/80 hover:text-white"
                    }`}
                    style={{
                      background: isActive ? "#D4AF37" : "transparent",
                    }}
                  >
                    {link.label}
                  </button>
                </li>
              )
            })}
            
            {/* Show remaining items in a dropdown or as separate */}
            {navLinks.slice(6).map((link) => {
              const isActive = active === link.href
              return (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className={`relative px-3 xl:px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "text-[#1E293B]"
                        : "text-white/80 hover:text-white"
                    }`}
                    style={{
                      background: isActive ? "#D4AF37" : "transparent",
                    }}
                  >
                    {link.label}
                  </button>
                </li>
              )
            })}
          </ul>

          {/* Tablet Navigation - Shows abbreviated menu */}
          <ul className="hidden md:flex lg:hidden items-center gap-1" role="list">
            {navLinks.slice(0, 4).map((link) => {
              const isActive = active === link.href
              return (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                      isActive
                        ? "text-[#1E293B]"
                        : "text-white/80 hover:text-white"
                    }`}
                    style={{
                      background: isActive ? "#D4AF37" : "transparent",
                    }}
                  >
                    {link.label}
                  </button>
                </li>
              )
            })}
          </ul>

          {/* CTA Button - Perfectly sized with standard margin */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => handleNavClick("#contact")}
              className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 hover:opacity-90 active:scale-95 mr-0 sm:mr-2 md:mr-4"
              style={{
                background: "#D4AF37",
                color: "#1E293B",
                boxShadow: "0 2px 8px rgba(212,175,55,0.25)"
              }}
            >
              <Phone size={14} />
              <span className="hidden xl:inline">Get in Touch</span>
              <span className="inline xl:hidden">Contact</span>
            </button>

            {/* Mobile toggle - Perfectly positioned */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative p-2 rounded-lg text-white hover:bg-white/10 transition-all duration-200"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu - Smooth slide down with proper animation */}
        <div
          id="mobile-menu"
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen 
              ? "max-h-[calc(100vh-4rem)] opacity-100 visible" 
              : "max-h-0 opacity-0 invisible"
          }`}
        >
          <div 
            className="py-3 mt-2 rounded-xl overflow-hidden"
            style={{
              background: "rgba(17,24,39,0.98)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(212,175,55,0.15)",
              boxShadow: "0 20px 40px rgba(0,0,0,0.4)"
            }}
          >
            {/* Mobile menu items with staggered animation */}
            <ul className="flex flex-col" role="list">
              {navLinks.map((link, index) => {
                const isActive = active === link.href
                return (
                  <li 
                    key={link.href}
                    className="px-2"
                    style={{
                      animation: isOpen 
                        ? `slideIn 0.3s ease-out ${index * 0.05}s forwards` 
                        : 'none',
                      opacity: 0,
                      transform: 'translateY(-10px)'
                    }}
                  >
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className={`w-full text-left px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 flex items-center gap-3 ${
                        isActive
                          ? "bg-[#D4AF37]/10 text-[#D4AF37]"
                          : "text-white/70 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                        isActive ? "bg-[#D4AF37] scale-100" : "bg-transparent scale-0"
                      }`} />
                      {link.label}
                    </button>
                  </li>
                )
              })}
            </ul>
            
            {/* Mobile CTA */}
            <div className="px-4 pt-2 mt-2" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
              <button
                onClick={() => handleNavClick("#contact")}
                className="w-full py-3 text-sm font-semibold rounded-lg transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 mt-3"
                style={{
                  background: "#D4AF37",
                  color: "#1E293B",
                }}
              >
                <Phone size={16} />
                Get in Touch
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </header>
  )
}