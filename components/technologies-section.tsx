"use client"

const technologies = [
  {
    name: "Python",
    icon: "🐍",
    description: "Powerful backend logic",
  },
  {
    name: "Django",
    icon: "🎯",
    description: "Robust web framework",
  },
  {
    name: "React",
    icon: "⚛",
    description: "Modern UI library",
  },
  {
    name: "Node.js",
    icon: "🟢",
    description: "Fast server-side JS",
  },
  {
    name: "PostgreSQL",
    icon: "🐘",
    description: "Reliable relational DB",
  },
  {
    name: "Tailwind CSS",
    icon: "🎨",
    description: "Utility-first styling",
  },
  {
    name: "REST API",
    icon: "🔗",
    description: "Standard API design",
  },
]

// Pill-style icon labels, no emojis — using SVG-like letter badges
const TechBadge = ({ name, description }: { name: string; description: string }) => (
  <div
    className="flex flex-col items-center gap-3 p-5 rounded-2xl border transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
    style={{ background: "#FFFFFF", borderColor: "rgba(212,175,55,0.2)" }}
  >
    <div
      className="w-12 h-12 rounded-xl flex items-center justify-center font-heading font-black text-xl"
      style={{ background: "#1E293B", color: "#D4AF37" }}
    >
      {name.slice(0, 2)}
    </div>
    <div className="text-center">
      <p className="font-heading font-bold text-sm" style={{ color: "#1E293B" }}>
        {name}
      </p>
      <p className="text-xs mt-0.5" style={{ color: "#9CA3AF" }}>
        {description}
      </p>
    </div>
  </div>
)

export default function TechnologiesSection() {
  return (
    <section
      id="technologies"
      className="py-24 lg:py-32"
      style={{ background: "#FFFFFF" }}
      aria-labelledby="technologies-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ color: "#10B981" }}>
            Our Stack
          </span>
          <h2
            id="technologies-heading"
            className="font-heading font-black text-balance leading-tight mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#1E293B" }}
          >
            Technologies We Use
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "#6B7280" }}>
            We leverage industry-leading tools and frameworks to deliver high-performance, production-ready software.
          </p>
        </div>

        {/* Tech grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
          {technologies.map((tech) => (
            <TechBadge key={tech.name} name={tech.name} description={tech.description} />
          ))}
        </div>

        {/* Bottom banner */}
        <div
          className="mt-16 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{ background: "#1E293B" }}
        >
          <div>
            <h3 className="font-heading font-bold text-xl mb-2" style={{ color: "#FFFFFF" }}>
              Need a Custom Tech Stack?
            </h3>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
              We adapt to your project needs and integrate with your existing systems.
            </p>
          </div>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="flex-shrink-0 px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:opacity-90"
            style={{ background: "#D4AF37", color: "#1E293B" }}
          >
            Talk to an Expert
          </button>
        </div>
      </div>
    </section>
  )
}
