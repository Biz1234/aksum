"use client"

import { useState } from "react"
import { Package, BarChart3, GraduationCap, ShoppingCart, TrendingUp, Users, Star, Clock, CheckCircle, Sparkles, ExternalLink } from "lucide-react"

const products = [
  {
    icon: BarChart3,
    title: "Business Analytics Platform",
    description: "Comprehensive analytics solution for data-driven decision making.",
    longDescription: "Transform raw data into actionable insights with our powerful analytics platform. Real-time dashboards, predictive modeling, and custom reporting.",
    status: "Live",
    statusColor: "#10B981",
    features: ["Real-time Dashboards", "Predictive Analytics", "Custom Reports", "Data Visualization"],
    stats: { users: "500+", rating: "4.8", uptime: "99.9%" },
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: GraduationCap,
    title: "E-Learning Management System",
    description: "Complete learning platform for educational institutions.",
    longDescription: "Empower educators and engage students with our comprehensive LMS. Course management, virtual classrooms, and progress tracking.",
    status: "Live",
    statusColor: "#10B981",
    features: ["Virtual Classrooms", "Course Management", "Student Progress", "Certification"],
    stats: { users: "50+", rating: "4.9", courses: "200+" },
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solution",
    description: "Full-featured online store platform with inventory management.",
    longDescription: "Launch and scale your online store with our feature-rich e-commerce solution. Inventory sync, payment processing, and marketing tools.",
    status: "Beta",
    statusColor: "#D4AF37",
    features: ["Inventory Management", "Payment Gateway", "Mobile Optimized", "Analytics"],
    stats: { merchants: "100+", sales: "10K+", products: "50K+" },
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: Package,
    title: "Inventory Management System",
    description: "Smart inventory tracking and supply chain management.",
    longDescription: "Optimize your supply chain with real-time inventory tracking, automated reordering, and warehouse management.",
    status: "Coming Soon",
    statusColor: "#6B7280",
    features: ["Real-time Tracking", "Auto Reordering", "Warehouse Mgmt", "Supplier Portal"],
    stats: { eta: "Q2 2024", beta: "Soon", spots: "50" },
    gradient: "from-orange-500 to-red-500"
  },
]

export default function ProductsSection() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  const getStatusStyle = (status: string, color: string) => {
    const baseStyle = {
      background: status === "Coming Soon" 
        ? "linear-gradient(135deg, #6B7280 0%, #9CA3AF 100%)"
        : `linear-gradient(135deg, ${color} 0%, ${color}DD 100%)`,
      boxShadow: `0 4px 15px -5px ${color}80`
    }
    return baseStyle
  }

  return (
    <section 
      id="products" 
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{ 
        background: "linear-gradient(135deg, #F9FAFB 0%, #F3F4F6 100%)"
      }}
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-10"
             style={{ background: "#D4AF37", filter: "blur(80px)" }} />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full opacity-10"
             style={{ background: "#1E293B", filter: "blur(80px)" }} />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02]"
           style={{
             backgroundImage: `linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(to right, #D4AF37 1px, transparent 1px)`,
             backgroundSize: '50px 50px'
           }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with enhanced design */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
               style={{ background: "rgba(212,175,55,0.1)", border: "1px solid rgba(212,175,55,0.2)" }}>
            <Sparkles size={16} style={{ color: "#D4AF37" }} />
            <span className="text-sm font-medium" style={{ color: "#D4AF37" }}>Our Product Suite</span>
          </div>
          
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
              style={{ color: "#111827" }}>
            Innovative <span style={{ color: "#D4AF37" }}>Solutions</span> for Modern Business
          </h2>
          

        </div>

        {/* Products Grid - Modern Card Design */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => {
            const Icon = product.icon
            const isHovered = hoveredCard === product.title
            
            return (
              <div
                key={product.title}
                className="group relative"
                onMouseEnter={() => setHoveredCard(product.title)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Card with hover effects */}
                <div className="relative h-full rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                     style={{
                       background: "#FFFFFF",
                       boxShadow: isHovered 
                         ? `0 20px 40px -15px ${product.statusColor}40`
                         : "0 10px 30px -15px rgba(0,0,0,0.1)"
                     }}>
                  
                  {/* Top Gradient Bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${product.gradient}`} />

                  {/* Content Container */}
                  <div className="p-6">
                    {/* Icon and Status Row */}
                    <div className="flex items-start justify-between mb-4">
                      {/* Icon with animated background */}
                      <div className="relative">
                        <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}
                             style={{ 
                               background: `linear-gradient(135deg, ${product.statusColor}15 0%, ${product.statusColor}05 100%)`,
                               border: `1px solid ${product.statusColor}30`
                             }}>
                          <Icon size={28} style={{ color: product.statusColor }} />
                        </div>
                        
                        {/* Live indicator pulse */}
                        {product.status === "Live" && (
                          <span className="absolute -top-1 -right-1 flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                                  style={{ background: product.statusColor }} />
                            <span className="relative inline-flex rounded-full h-3 w-3"
                                  style={{ background: product.statusColor }} />
                          </span>
                        )}
                      </div>

                      {/* Status Badge - Enhanced */}
                      <div className="relative">
                        <div className="px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider"
                             style={getStatusStyle(product.status, product.statusColor)}>
                          <span style={{ color: "#FFFFFF" }}>{product.status}</span>
                        </div>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-heading text-lg font-bold mb-2 group-hover:text-[#D4AF37] transition-colors"
                        style={{ color: "#111827" }}>
                      {product.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm mb-4" style={{ color: "#6B7280" }}>
                      {product.description}
                    </p>

                    {/* Feature Pills - Animated on hover */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.features.slice(0, 2).map((feature, i) => (
                        <span
                          key={i}
                          className={`text-xs px-2 py-1 rounded-full transition-all duration-300 ${
                            isHovered ? 'opacity-100' : 'opacity-70'
                          }`}
                          style={{ 
                            background: `${product.statusColor}10`,
                            color: product.statusColor
                          }}
                        >
                          {feature}
                        </span>
                      ))}
                      <span className="text-xs px-2 py-1 rounded-full"
                            style={{ background: "#F3F4F6", color: "#6B7280" }}>
                        +{product.features.length - 2}
                      </span>
                    </div>

                    {/* Stats Grid - Modern */}
                    <div className="grid grid-cols-3 gap-2 pt-4 border-t"
                         style={{ borderColor: "#F3F4F6" }}>
                      {Object.entries(product.stats).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-sm font-bold" style={{ color: product.statusColor }}>
                            {value}
                          </div>
                          <div className="text-xs capitalize" style={{ color: "#9CA3AF" }}>
                            {key}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Hover Overlay with Quick Actions - Appears on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent 
                                   flex items-end p-6 transition-all duration-500 ${
                                   isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
                                 }`}>
                      <div className="w-full">
                        <p className="text-sm text-white/90 mb-3 line-clamp-2">
                          {product.longDescription}
                        </p>
                        
                        {product.status !== "Coming Soon" ? (
                          <button className="w-full py-2.5 rounded-lg font-medium text-sm transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                                  style={{
                                    background: product.statusColor,
                                    color: "#FFFFFF"
                                  }}>
                            <span>View Demo</span>
                            <ExternalLink size={14} />
                          </button>
                        ) : (
                          <button className="w-full py-2.5 rounded-lg font-medium text-sm transition-all duration-300"
                                  style={{
                                    background: "#FFFFFF",
                                    color: "#1E293B",
                                    border: "1px solid #E5E7EB"
                                  }}>
                            Notify Me
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 p-1 rounded-full mx-auto"
               style={{ background: "rgba(212,175,55,0.1)", border: "1px solid rgba(212,175,55,0.2)" }}>
            <button className="px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                    style={{
                      background: "#D4AF37",
                      color: "#1E293B",
                      boxShadow: "0 10px 20px -10px rgba(212,175,55,0.5)"
                    }}>
              Explore All Products
            </button>
            <button className="px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                    style={{ color: "#D4AF37" }}>
              Request Custom Solution
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  )
}