"use client"

import { useState } from "react"
import { Code2, Wrench, Building2, Smartphone, ArrowRight, X, CheckCircle, Clock, Shield, Zap } from "lucide-react"

const services = [
  {
    id: "software-dev",
    icon: Code2,
    title: "Software Development Services",
    shortDesc: "Custom software solutions tailored to your business needs.",
    description: "From web applications to enterprise systems, we build scalable, secure, and high-performance software that drives business growth. Our expert team uses modern frameworks and best practices to deliver solutions that exceed expectations.",
    features: [
      "Custom Web Applications",
      "Enterprise Software",
      "API Development & Integration",
      "Cloud-Native Solutions",
      "Legacy System Modernization"
    ],
    benefits: ["Increased efficiency", "Scalable architecture", "Reduced operational costs"]
  },
  {
    id: "tech-support",
    icon: Wrench,
    title: "Tech Maintenance and Support",
    shortDesc: "Ongoing technical support to keep your systems running smoothly.",
    description: "Proactive monitoring, regular updates, and 24/7 technical support to ensure your systems remain secure, stable, and optimized for peak performance. We handle the technical details so you can focus on your business.",
    features: [
      "24/7 System Monitoring",
      "Regular Security Updates",
      "Performance Optimization",
      "Backup & Disaster Recovery",
      "Technical Consulting"
    ],
    benefits: ["99.9% uptime", "Enhanced security", "Peace of mind"]
  },
  {
    id: "enterprise-systems",
    icon: Building2,
    title: "Enterprise Software Systems",
    shortDesc: "Scalable enterprise solutions that streamline operations.",
    description: "Comprehensive enterprise solutions including ERP, CRM, and custom business process automation. We help large organizations optimize workflows, improve data visibility, and make data-driven decisions.",
    features: [
      "ERP Implementation",
      "CRM Solutions",
      "Business Process Automation",
      "Data Analytics & Reporting",
      "Supply Chain Management"
    ],
    benefits: ["Streamlined operations", "Better decision making", "Increased ROI"]
  },
  {
    id: "mobile-web",
    icon: Smartphone,
    title: "Mobile and Web Applications",
    shortDesc: "Beautiful, responsive applications that deliver exceptional user experiences.",
    description: "End-to-end mobile and web development services creating intuitive, high-performance applications. From concept to deployment, we build digital experiences that engage users and drive business results.",
    features: [
      "iOS & Android Apps",
      "Progressive Web Apps",
      "Responsive Web Design",
      "UI/UX Design",
      "App Store Optimization"
    ],
    benefits: ["Wider reach", "User engagement", "Competitive advantage"]
  },
]

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (service: typeof services[0]) => {
    setSelectedService(service)
    setIsModalOpen(true)
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedService(null)
    // Restore body scroll
    document.body.style.overflow = 'unset'
  }

  return (
    <>
      <section
        id="services"
        className="py-20 lg:py-28 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)" }}
        aria-labelledby="services-heading"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #D4AF37 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header with improved design */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4" 
                 style={{ background: "rgba(212,175,55,0.1)", border: "1px solid rgba(212,175,55,0.2)" }}>
              <Zap size={16} style={{ color: "#D4AF37" }} />
              <span className="text-sm font-medium" style={{ color: "#D4AF37" }}>
                What We Offer
              </span>
            </div>
            
            <h2
              id="services-heading"
              className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
              style={{ color: "#FFFFFF" }}
            >
              Comprehensive <span style={{ color: "#D4AF37" }}>Technology</span> Solutions
            </h2>
            
            <p className="text-lg" style={{ color: "rgba(255,255,255,0.7)" }}>
              Empowering businesses with cutting-edge software solutions and expert technical support
            </p>
          </div>

          {/* Service Cards - Improved Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <article
                  key={service.id}
                  className="group relative flex flex-col p-6 sm:p-8 rounded-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                  style={{ 
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.05)",
                    backdropFilter: "blur(10px)",
                  }}
                  onClick={() => openModal(service)}
                >
                  {/* Hover Gradient Effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                       style={{
                         background: "radial-gradient(circle at top right, rgba(212,175,55,0.1), transparent 70%)"
                       }} />
                  
                  {/* Icon with animated background */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                         style={{ 
                           background: "linear-gradient(135deg, rgba(212,175,55,0.15) 0%, rgba(212,175,55,0.05) 100%)",
                           border: "1px solid rgba(212,175,55,0.2)"
                         }}>
                      <Icon size={32} style={{ color: "#D4AF37" }} />
                    </div>
                    
                    {/* Decorative dot */}
                    <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full animate-pulse"
                          style={{ background: "#D4AF37", opacity: 0.5 }} />
                  </div>

                  {/* Content */}
                  <h3 className="font-heading font-bold text-xl lg:text-2xl mb-3" style={{ color: "#FFFFFF" }}>
                    {service.title}
                  </h3>
                  
                  <p className="text-sm lg:text-base leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.6)" }}>
                    {service.shortDesc}
                  </p>

                  {/* Features Preview */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.slice(0, 2).map((feature, i) => (
                      <span key={i} className="text-xs px-2 py-1 rounded-full"
                            style={{ background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.5)" }}>
                        {feature}
                      </span>
                    ))}
                    <span className="text-xs px-2 py-1 rounded-full"
                          style={{ background: "rgba(212,175,55,0.1)", color: "#D4AF37" }}>
                      +{service.features.length - 2} more
                    </span>
                  </div>

                  {/* Learn More Button */}
                  <button
                    className="inline-flex items-center gap-2 text-sm font-semibold transition-all group/btn mt-auto"
                    style={{ color: "#D4AF37" }}
                    aria-label={`Learn more about ${service.title}`}
                  >
                    <span>Learn More</span>
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover/btn:translate-x-2"
                    />
                    
                    {/* Animated underline */}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 group-hover/btn:w-full transition-all duration-300"
                          style={{ background: "#D4AF37" }} />
                  </button>
                </article>
              )
            })}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 active:scale-95"
              style={{
                background: "linear-gradient(135deg, #D4AF37 0%, #F5D77F 100%)",
                color: "#1E293B",
                boxShadow: "0 10px 30px -10px rgba(212,175,55,0.3)"
              }}
            >
              <span>Discuss Your Project</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      {isModalOpen && selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
             onClick={closeModal}>
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"
               onClick={closeModal}
               style={{ animation: "fadeIn 0.3s ease-out" }} />
          
          {/* Modal */}
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl"
               style={{
                 background: "linear-gradient(135deg, #1E293B 0%, #0F172A 100%)",
                 border: "1px solid rgba(212,175,55,0.2)",
                 boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)",
                 animation: "slideUp 0.4s ease-out"
               }}
               onClick={(e) => e.stopPropagation()}>
            
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 hover:rotate-90 z-10"
              style={{ background: "rgba(255,255,255,0.1)" }}
              aria-label="Close modal"
            >
              <X size={20} style={{ color: "#D4AF37" }} />
            </button>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 lg:p-10">
              {/* Header with icon */}
              <div className="flex items-start gap-4 mb-8">
                <div className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0"
                     style={{ background: "rgba(212,175,55,0.15)" }}>
                  <selectedService.icon size={36} style={{ color: "#D4AF37" }} />
                </div>
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold mb-2" style={{ color: "#FFFFFF" }}>
                    {selectedService.title}
                  </h3>
                  <p className="text-lg" style={{ color: "#D4AF37" }}>
                    {selectedService.shortDesc}
                  </p>
                </div>
              </div>

              {/* Full description */}
              <div className="mb-8 p-6 rounded-xl" style={{ background: "rgba(0,0,0,0.2)" }}>
                <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.8)" }}>
                  {selectedService.description}
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {selectedService.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle size={20} style={{ color: "#D4AF37" }} className="flex-shrink-0 mt-0.5" />
                    <span style={{ color: "rgba(255,255,255,0.8)" }}>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Benefits */}
              <div className="grid grid-cols-3 gap-3 mb-8">
                {selectedService.benefits.map((benefit, index) => (
                  <div key={index} className="text-center p-3 rounded-lg"
                       style={{ background: "rgba(212,175,55,0.1)" }}>
                    <span className="text-sm font-medium" style={{ color: "#D4AF37" }}>{benefit}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex justify-end">
                <button
                  onClick={() => {
                    closeModal()
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="group inline-flex items-center gap-3 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 active:scale-95"
                  style={{
                    background: "#D4AF37",
                    color: "#1E293B"
                  }}
                >
                  Discuss This Service
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  )
}