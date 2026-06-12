import { Users, Cpu, Lock, DollarSign, CheckCircle2 } from "lucide-react"

const reasons = [
  {
    icon: <Users size={26} />,
    title: "Experienced Developers",
    description:
      "Our team brings years of hands-on experience across web, mobile, and enterprise software development.",
    accent: "#D4AF37",
  },
  {
    icon: <Cpu size={26} />,
    title: "Modern Technologies",
    description:
      "We stay ahead of the curve, using the latest frameworks and best practices to future-proof your product.",
    accent: "#10B981",
  },
  {
    icon: <Lock size={26} />,
    title: "Secure & Scalable",
    description:
      "Security and scalability are built in from day one — not added as an afterthought.",
    accent: "#D4AF37",
  },
  {
    icon: <DollarSign size={26} />,
    title: "Affordable Pricing",
    description:
      "High-quality software doesn't need to break the bank. We offer competitive rates for every budget.",
    accent: "#10B981",
  },
]

const guarantees = [
  "100% client satisfaction focus",
  "Transparent communication throughout",
  "On-time delivery commitment",
  "Post-launch support included",
]

export default function WhyChooseUsSection() {
  return (
    <section
      className="py-24 lg:py-32"
      style={{ background: "#1E293B" }}
      aria-labelledby="why-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <span className="inline-block text-sm font-semibold uppercase tracking-widest mb-4"
              style={{ color: "#10B981" }}>
              Why Axum Tech
            </span>
            <h2
              id="why-heading"
              className="font-heading font-black text-balance leading-tight mb-6"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#FFFFFF" }}
            >
              The Partner You Can{" "}
              <span style={{ color: "#D4AF37" }}>Count On</span>
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.65)" }}>
              Choosing the right technology partner is critical to your success. Here is why hundreds
              of clients trust Axum Tech to deliver excellence every time.
            </p>

            {/* Guarantees list */}
            <ul className="flex flex-col gap-3">
              {guarantees.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={18} style={{ color: "#10B981", flexShrink: 0 }} />
                  <span className="text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Reason cards */}
          <div className="grid sm:grid-cols-2 gap-5">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="p-6 rounded-2xl border transition-all duration-200 hover:border-opacity-50"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  borderColor: "rgba(255,255,255,0.1)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${reason.accent}20`, color: reason.accent }}
                >
                  {reason.icon}
                </div>
                <h3 className="font-heading font-bold text-base mb-2" style={{ color: "#FFFFFF" }}>
                  {reason.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
