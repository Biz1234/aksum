"use client"

import { useState } from "react"
import { Mail, Phone, Send } from "lucide-react"

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setForm({ name: "", email: "", subject: "", message: "" })
    setTimeout(() => setSubmitted(false), 4000)
  }

  const contactInfo = [
    { icon: <Mail size={18} />, label: "Email", value: "axumtech@gmail.com" },
    { icon: <Phone size={18} />, label: "Phone", value: "+251 932 367 491" },
  ]

  return (
    <section
      id="contact"
      className="py-24 lg:py-32"
      style={{ background: "#FFFFFF" }}
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ color: "#D4AF37" }}>
            Start a Conversation
          </span>
          <h2
            id="contact-heading"
            className="font-heading font-black text-balance leading-tight mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#1E293B" }}
          >
            Let's Build Something{" "}
            <span style={{ color: "#D4AF37" }}>Together</span>
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "#6B7280" }}>
            Have a project in mind? Reach out and one of our team members will get back to you within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            {contactInfo.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "#1E293B", color: "#D4AF37" }}
                >
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide mb-0.5" style={{ color: "#9CA3AF" }}>
                    {item.label}
                  </p>
                  <p className="text-base font-medium" style={{ color: "#111827" }}>
                    {item.value}
                  </p>
                </div>
              </div>
            ))}

            {/* Decorative card */}
            
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 p-8 rounded-2xl border"
              style={{ borderColor: "rgba(30,41,59,0.12)", background: "#F8FAFC" }}
              noValidate
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-sm font-semibold" style={{ color: "#1E293B" }}>
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="abebe kebede"
                    value={form.name}
                    onChange={handleChange}
                    className="px-4 py-3 rounded-xl border text-sm outline-none transition-all focus:ring-2"
                    style={{
                      borderColor: "rgba(30,41,59,0.2)",
                      background: "#FFFFFF",
                      color: "#111827",
                    }}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-sm font-semibold" style={{ color: "#1E293B" }}>
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@gmail.com"
                    value={form.email}
                    onChange={handleChange}
                    className="px-4 py-3 rounded-xl border text-sm outline-none transition-all focus:ring-2"
                    style={{
                      borderColor: "rgba(30,41,59,0.2)",
                      background: "#FFFFFF",
                      color: "#111827",
                    }}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="subject" className="text-sm font-semibold" style={{ color: "#1E293B" }}>
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="How can we help you?"
                  value={form.subject}
                  onChange={handleChange}
                  className="px-4 py-3 rounded-xl border text-sm outline-none transition-all focus:ring-2"
                  style={{
                    borderColor: "rgba(30,41,59,0.2)",
                    background: "#FFFFFF",
                    color: "#111827",
                  }}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-sm font-semibold" style={{ color: "#1E293B" }}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us about your project..."
                  value={form.message}
                  onChange={handleChange}
                  className="px-4 py-3 rounded-xl border text-sm outline-none transition-all focus:ring-2 resize-none"
                  style={{
                    borderColor: "rgba(30,41,59,0.2)",
                    background: "#FFFFFF",
                    color: "#111827",
                  }}
                />
              </div>

              <button
                type="submit"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all hover:opacity-90 active:scale-95"
                style={{ background: "#D4AF37", color: "#1E293B" }}
              >
                {submitted ? (
                  "Message Sent! We'll be in touch."
                ) : (
                  <>
                    Send Message
                    <Send size={15} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
