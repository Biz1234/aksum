"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, Phone, Mail, Send } from "lucide-react"

const servicesProducts = [
  { label: "Software Development Services", href: "#services" },
  { label: "Tech Maintenance and Support", href: "#services" },
  { label: "Enterprise Software Systems", href: "#services" },
  { label: "Mobile and Web Applications", href: "#services" },
]

const socialLinks = [
  { label: "Facebook", href: "https://facebook.com", icon: Facebook },
  { label: "Twitter", href: "https://twitter.com", icon: Twitter },
  { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { label: "Instagram", href: "https://instagram.com", icon: Instagram },
]

export default function Footer() {
  const [email, setEmail] = useState("")

  const scrollTo = (href: string) => {
    if (href.startsWith("#")) {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    alert("Thank you for subscribing!")
    setEmail("")
  }

  return (
    <footer id="site-footer" style={{ background: "#111827" }} role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden">
                <Image
                  src="/images/aksum-logo2.png"
                  alt="Axum Tech Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <h3
              className="font-heading font-bold text-sm uppercase tracking-widest mb-4"
              style={{ color: "#D4AF37" }}
            >
              About
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-semibold mb-1" style={{ color: "#FFFFFF" }}>
                  Mission
                </h4>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                  To deliver innovative software solutions that empower businesses across Africa.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-1" style={{ color: "#FFFFFF" }}>
                  Values
                </h4>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                  Excellence, Innovation, Integrity, and Collaboration.
                </p>
              </div>
            </div>
          </div>

          {/* Services & Products column */}
          <div>
            <h3
              className="font-heading font-bold text-sm uppercase tracking-widest mb-4"
              style={{ color: "#D4AF37" }}
            >
              Service & Product
            </h3>
            <ul className="flex flex-col gap-2.5" role="list">
              {servicesProducts.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm transition-colors hover:text-white text-left"
                    style={{ color: "rgba(255,255,255,0.55)" }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3
              className="font-heading font-bold text-sm uppercase tracking-widest mb-4"
              style={{ color: "#D4AF37" }}
            >
              Contact Us
            </h3>
            <div className="flex flex-col gap-4">
              <a
                href="tel:+251921030278"
                className="flex items-center gap-3 text-sm transition-colors hover:text-white"
                style={{ color: "rgba(255,255,255,0.55)" }}
              >
                <Phone size={16} style={{ color: "#D4AF37" }} />
                +251 968 665 356
              </a>
              <a
                href="mailto:aksumtech@aksumtechnologies.com"
                className="flex items-center gap-3 text-sm transition-colors hover:text-white"
                style={{ color: "rgba(255,255,255,0.55)" }}
              >
                <Mail size={16} style={{ color: "#D4AF37" }} />
                Axum@gmail.com
              </a>
            </div>

            {/* Social links */}
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:text-white"
                style={{ color: "rgba(255,255,255,0.55)" }}
              >
                Open Contact Form
              </Link>
              <h4 className="text-xs font-medium mb-3" style={{ color: "rgba(255,255,255,0.4)" }}>
                Follow Us
              </h4>
              <div className="flex items-center gap-2">
                {socialLinks.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Axum Tech on ${social.label}`}
                    className="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                    style={{ background: "rgba(212,175,55,0.1)", color: "#D4AF37" }}
                  >
                    <social.icon size={16} />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Newsletter column */}
          <div>
            <h3
              className="font-heading font-bold text-sm uppercase tracking-widest mb-4"
              style={{ color: "#D4AF37" }}
            >
              Subscribe to Our Newsletter
            </h3>
            <p className="text-xs mb-4" style={{ color: "rgba(255,255,255,0.55)" }}>
              Stay updated with our latest news and updates.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all focus:ring-2"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#FFFFFF",
                }}
              />
              <button
                type="submit"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all hover:opacity-90 active:scale-95"
                style={{ background: "#D4AF37", color: "#1E293B" }}
              >
                Subscribe
                <Send size={14} />
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t" style={{ borderColor: "rgba(255,255,255,0.1)" }} />

        {/* Bottom bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
            &copy; {new Date().getFullYear()} Axum Tech. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <button
                key={item}
                className="text-xs hover:text-white transition-colors"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
