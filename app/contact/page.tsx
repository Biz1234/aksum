import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Contact Axum Tech | Start Your Project",
  description:
    "Reach out to Axum Tech to discuss software development, maintenance, and digital product opportunities.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <Navbar />

      <section className="pt-28 pb-10 lg:pt-32 lg:pb-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div
              className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-4 py-2 mb-5"
            >
              <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
              <span className="text-sm font-medium text-[#D4AF37]">
                Contact Axum Tech
              </span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-4 text-[#111827]">
              Tell us what you&apos;re building
            </h1>

            <p className="text-lg leading-relaxed text-[#6B7280]">
              Share your idea, timeline, or challenge. We&apos;ll respond with a clear next step and the right team to help.
            </p>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </main>
  )
}