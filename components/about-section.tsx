import { Lightbulb, Eye, Shield } from "lucide-react"

const values = [
  {
    icon: <Lightbulb size={22} />,
    title: "Innovation",
    description: "We constantly explore new technologies and creative approaches to deliver cutting-edge solutions.",
  },
  {
    icon: <Shield size={22} />,
    title: "Reliability",
    description: "We build robust, tested software that businesses can depend on 24/7.",
  },
  {
    icon: <Eye size={22} />,
    title: "Scalability",
    description: "Every product we build is designed to grow with your business from day one.",
  },
]

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 lg:py-32"
      style={{ background: "#FFFFFF" }}
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text content */}
          <div>
            <span className="inline-block text-sm font-semibold uppercase tracking-widest mb-4"
              style={{ color: "#10B981" }}>
              About Us
            </span>
            <h2
              id="about-heading"
              className="font-heading font-black text-balance leading-tight mb-6"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#1E293B" }}
            >
              We Build Technology That{" "}
              <span style={{ color: "#D4AF37" }}>Moves Africa Forward</span>
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "#374151" }}>
              Founded with a vision to bridge the technology gap across Africa, Axum Tech delivers
              modern, scalable software solutions to startups, enterprises, and organizations of all sizes.
              We combine deep technical expertise with a passion for solving real problems.
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: "#374151" }}>
              From concept to deployment, our team of experienced developers, designers, and consultants
              collaborates closely with every client to create digital products that are fast, secure, and built to last.
            </p>

            {/* Mission & Vision */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border" style={{ borderColor: "rgba(212,175,55,0.25)", background: "rgba(212,175,55,0.04)" }}>
                <p className="font-heading font-bold text-sm mb-1" style={{ color: "#1E293B" }}>Our Mission</p>
                <p className="text-sm leading-relaxed" style={{ color: "#6B7280" }}>
                  Helping businesses grow with modern, accessible technology.
                </p>
              </div>
              <div className="p-4 rounded-xl border" style={{ borderColor: "rgba(16,185,129,0.25)", background: "rgba(16,185,129,0.04)" }}>
                <p className="font-heading font-bold text-sm mb-1" style={{ color: "#1E293B" }}>Our Vision</p>
                <p className="text-sm leading-relaxed" style={{ color: "#6B7280" }}>
                  Becoming the leading software company across Africa.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Values */}
          <div className="flex flex-col gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="flex gap-5 items-start p-6 rounded-2xl border transition-shadow hover:shadow-md"
                style={{ borderColor: "rgba(30,41,59,0.1)", background: "#F8FAFC" }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "#1E293B", color: "#D4AF37" }}
                >
                  {v.icon}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg mb-1" style={{ color: "#1E293B" }}>
                    {v.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#6B7280" }}>
                    {v.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
