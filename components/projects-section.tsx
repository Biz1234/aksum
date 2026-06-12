"use client"

import Image from "next/image"

const projects = [
  {
    title: "University Management System",
    category: "Education",
    description: "Complete university management platform with student portal, grading, and administration.",
    image: "/images/slider-4.jpg",
  },
  {
    title: "Healthcare App",
    category: "Healthcare",
    description: "Patient management and appointment scheduling system for clinics.",
    image: "/images/slider-2.jpg",
  },
  {
    title: "Financial Dashboard",
    category: "Finance",
    description: "Real-time financial analytics and reporting dashboard for enterprises.",
    image: "/images/slider-1.jpg",
  },
  {
    title: "Logistics Platform",
    category: "Logistics",
    description: "End-to-end supply chain and delivery management system.",
    image: "/images/slider-3.jpg",
  },
]

export default function ProjectsSection() {
  return (
    <section 
      id="projects" 
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{ 
        background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)"
      }}
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #D4AF37 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          {/* Decorative Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
               style={{ background: "rgba(212,175,55,0.08)", border: "1px solid rgba(212,175,55,0.2)" }}>
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#D4AF37" }} />
            <span className="text-sm font-medium" style={{ color: "#D4AF37" }}>Our Projects</span>
          </div>
          
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
              style={{ color: "#111827" }}>
            Recent <span style={{ color: "#D4AF37" }}>Work</span>
          </h2>
          
          <p className="text-lg" style={{ color: "#6B7280" }}>
            Showcasing our latest digital solutions and success stories
          </p>
        </div>

        {/* Projects Grid - Clean and Modern */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative rounded-2xl overflow-hidden cursor-pointer transform transition-all duration-500 hover:-translate-y-2"
              style={{
                background: "#FFFFFF",
                boxShadow: "0 4px 20px rgba(0,0,0,0.02), 0 8px 30px rgba(0,0,0,0.02)",
                animation: `fadeIn 0.6s ease-out ${index * 0.1}s forwards`,
                opacity: 0
              }}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 rounded-full text-xs font-medium backdrop-blur-sm"
                        style={{ 
                          background: "rgba(255,255,255,0.9)",
                          color: "#1E293B",
                          border: "1px solid rgba(212,175,55,0.3)"
                        }}>
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold mb-2 group-hover:text-[#D4AF37] transition-colors duration-300"
                    style={{ color: "#111827" }}>
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6B7280" }}>
                  {project.description}
                </p>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#D4AF37]/10 to-transparent transform rotate-45 translate-x-8 -translate-y-8" />
              </div>
            </div>
          ))}
        </div>

       
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}