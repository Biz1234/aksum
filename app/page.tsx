import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import ValuesSection from "@/components/values-section"
import ServicesSection from "@/components/services-section"
import ProductsSection from "@/components/products-section"
import ProjectsSection from "@/components/projects-section"
import TechStackSection from "@/components/techstack-section"
import BlogsSection from "@/components/blogs-section"
import TestimonialsSection from "@/components/testimonials-section"
import ClientsSection from "@/components/clients-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ValuesSection />
      <ServicesSection />
      <ProjectsSection />
      <TechStackSection />
      <BlogsSection />
      <TestimonialsSection />
      <ClientsSection />
      <Footer />
    </main>
  )
}
