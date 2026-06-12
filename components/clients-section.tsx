"use client"

import Image from "next/image"
import { Briefcase, Building2, HeartHandshake, Sparkles } from "lucide-react"

const clients = [
  {
    name: "Wollo University",
    logo: "/images/wollo-logo.jfif",
    category: "Education",
    description: "Higher Education"
  },

]

// Fallback logos for demo - you can replace with actual images
const getFallbackLogo = (name: string) => {
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=D4AF37&color=1E293B&size=128&bold=true&length=2&format=svg`
}

export default function ClientsSection() {
  return (
    <section 
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{ 
        background: "linear-gradient(135deg, #F8FAFC 0%, #FFFFFF 100%)"
      }}
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #D4AF37 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 w-64 h-64 rounded-full opacity-5 blur-3xl"
           style={{ background: "#D4AF37" }} />
      <div className="absolute bottom-20 right-20 w-64 h-64 rounded-full opacity-5 blur-3xl"
           style={{ background: "#1E293B" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
               style={{ background: "rgba(212,175,55,0.08)", border: "1px solid rgba(212,175,55,0.2)" }}>
            <HeartHandshake size={16} style={{ color: "#D4AF37" }} />
            <span className="text-sm font-medium" style={{ color: "#D4AF37" }}>Our Partners</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{ color: "#111827" }}>
            Trusted by <span style={{ color: "#D4AF37" }}>Organizations</span>
          </h2>

          <p className="text-lg leading-relaxed" style={{ color: "#6B7280" }}>
            We work with institutions and teams that value reliable delivery, clear communication, and long-term results.
          </p>
        </div>

        

        {/* Client Logos Grid */}
        <div className="grid grid-cols-1 place-items-center gap-4 lg:gap-6">
          {clients.map((client, index) => (
            <div
              key={client.name}
              className="group relative w-full max-w-xs"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`,
                opacity: 0,
                transform: 'translateY(10px)'
              }}
            >
              <div className="flex flex-col items-center">
                {/* Logo Container */}
                <div className="relative w-full aspect-square mb-3">
                  <div className="absolute inset-0 bg-white rounded-xl shadow-sm transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1"
                       style={{ 
                         border: "1px solid #E5E7EB",
                       }} />
                  
                  <div className="relative w-full h-full p-4 flex items-center justify-center">
                    <Image
                      src={client.logo || getFallbackLogo(client.name)}
                      alt={client.name}
                      width={80}
                      height={80}
                      className="object-contain w-auto h-auto max-w-[60px] max-h-[60px] transition-all duration-300 group-hover:scale-110"
                      onError={(e) => {
                        // Fallback to avatar on error
                        const target = e.target as HTMLImageElement
                        target.src = getFallbackLogo(client.name)
                      }}
                    />
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                       style={{
                         background: "radial-gradient(circle at center, rgba(212,175,55,0.1), transparent 70%)"
                       }} />
                </div>

                {/* Client Info */}
                <h3 className="text-sm font-semibold text-center line-clamp-1"
                    style={{ color: "#111827" }}>
                  {client.name}
                </h3>
                
                {/* Category Badge */}
                <span className="text-xs mt-1 px-2 py-0.5 rounded-full"
                      style={{ 
                        background: "rgba(212,175,55,0.08)",
                        color: "#D4AF37"
                      }}>
                  {client.category}
                </span>

                {/* Trust Badge for first client */}
                {index === 0 && (
                  <div className="absolute -top-2 -right-2">
                    <div className="relative">
                      <div className="absolute inset-0 bg-[#D4AF37] rounded-full animate-ping opacity-25" />
                      <div className="relative w-6 h-6 bg-[#D4AF37] rounded-full flex items-center justify-center">
                        <Sparkles size={12} style={{ color: "#1E293B" }} />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-4 p-4 rounded-2xl"
               style={{ background: "rgba(212,175,55,0.03)", border: "1px solid rgba(212,175,55,0.1)" }}>
            <div className="flex items-center gap-2 text-sm" style={{ color: "#6B7280" }}>
              <Building2 size={16} style={{ color: "#D4AF37" }} />
              <span>Reliable Delivery</span>
            </div>
            <div className="w-px h-4" style={{ background: "#E5E7EB" }} />
            <div className="flex items-center gap-2 text-sm" style={{ color: "#6B7280" }}>
              <Briefcase size={16} style={{ color: "#D4AF37" }} />
              <span>Quality-Focused Work</span>
            </div>
            <div className="w-px h-4" style={{ background: "#E5E7EB" }} />
            <div className="flex items-center gap-2 text-sm" style={{ color: "#6B7280" }}>
              <HeartHandshake size={16} style={{ color: "#D4AF37" }} />
              <span>Long-Term Value</span>
            </div>
          </div>
        </div>

        {/* Add Client CTA */}
        <div className="text-center mt-12">
          <button 
            className="group inline-flex items-center gap-2 text-sm font-medium transition-all duration-300 hover:gap-3"
            style={{ color: "#D4AF37" }}
          >
            <span>Start a Partnership Conversation</span>
            <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  )
}