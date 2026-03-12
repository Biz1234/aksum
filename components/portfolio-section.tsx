import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Car Rental System",
    category: "Web Application",
    description:
      "A full-featured car rental platform with real-time booking, fleet management, and payment integration.",
    tags: ["Django", "React", "PostgreSQL"],
    color: "#D4AF37",
  },
  {
    title: "Issue Tracking Portal",
    category: "Project Management",
    description:
      "Collaborative issue tracker with role-based access, sprint planning, and automated reporting dashboards.",
    tags: ["Node.js", "React", "REST API"],
    color: "#10B981",
  },
  {
    title: "AI Chatbot System",
    category: "Artificial Intelligence",
    description:
      "Intelligent conversational AI system integrated into customer support workflows with NLP capabilities.",
    tags: ["Python", "Django", "API"],
    color: "#6366F1",
  },
  {
    title: "E-commerce Website",
    category: "E-commerce",
    description:
      "Scalable online store with inventory management, secure checkout, and a mobile-optimized storefront.",
    tags: ["React", "Node.js", "PostgreSQL"],
    color: "#D4AF37",
  },
]

export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="py-24 lg:py-32"
      style={{ background: "#F8FAFC" }}
      aria-labelledby="portfolio-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ color: "#10B981" }}>
            Our Work
          </span>
          <h2
            id="portfolio-heading"
            className="font-heading font-black text-balance leading-tight mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#1E293B" }}
          >
            Featured Projects
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "#6B7280" }}>
            A selection of solutions we have delivered for clients across various industries.
          </p>
        </div>

        {/* Project grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group relative flex flex-col p-7 rounded-2xl border bg-white overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              style={{ borderColor: "rgba(30,41,59,0.1)" }}
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                style={{ background: project.color }}
                aria-hidden="true"
              />

              {/* Category badge */}
              <span
                className="inline-block text-xs font-semibold uppercase tracking-widest mb-3 px-3 py-1 rounded-full w-fit"
                style={{
                  color: project.color,
                  background: `${project.color}18`,
                }}
              >
                {project.category}
              </span>

              {/* Title */}
              <h3 className="font-heading font-bold text-xl mb-2 flex items-center justify-between" style={{ color: "#111827" }}>
                {project.title}
                <ExternalLink
                  size={16}
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: "#9CA3AF" }}
                  aria-hidden="true"
                />
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: "#6B7280" }}>
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full font-medium"
                    style={{ background: "rgba(30,41,59,0.07)", color: "#1E293B" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
