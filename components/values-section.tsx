"use client"

import { Target, Users, Lightbulb, Shield } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for excellence in every project, delivering high-quality solutions that exceed expectations.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work closely with our clients, fostering partnerships built on trust and mutual success.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace cutting-edge technologies and creative approaches to solve complex challenges.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "We maintain the highest ethical standards, ensuring transparency and honesty in all our dealings.",
  },
]

export default function ValuesSection() {
  return (
    <section id="values" className="py-20 lg:py-28" style={{ background: "#FFFFFF" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4"
            style={{ background: "rgba(212,175,55,0.1)", color: "#D4AF37" }}
          >
            Our Values
          </span>
          <h2
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-balance"
            style={{ color: "#111827" }}
          >
            What Drives Us Forward
          </h2>
          
        </div>

        {/* Values grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="group relative p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "#F9FAFB",
                border: "1px solid #E5E7EB",
              }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{ background: "rgba(212,175,55,0.1)" }}
              >
                <value.icon size={28} style={{ color: "#D4AF37" }} />
              </div>
              <h3
                className="font-heading text-xl font-bold mb-3"
                style={{ color: "#111827" }}
              >
                {value.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#6B7280" }}>
                {value.description}
              </p>
              {/* Hover accent line */}
              <div
                className="absolute bottom-0 left-6 right-6 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full"
                style={{ background: "#D4AF37" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
