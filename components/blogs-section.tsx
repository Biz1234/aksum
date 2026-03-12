"use client"

import Image from "next/image"
import Link from "next/link"
import { Calendar, ArrowRight, Clock, BookOpen, Sparkles } from "lucide-react"

const blogs = [
  {
    title: "The Future of AI in Ethiopian Tech",
    excerpt: "Exploring how artificial intelligence is transforming the technology landscape in Ethiopia and Africa.",
    date: "March 5, 2026",
    readTime: "5 min read",
    image: "/images/slider-5.jpg",
    category: "AI & Innovation",
  },
  {
    title: "Building Scalable Web Applications",
    excerpt: "Best practices for creating web applications that can handle millions of users.",
    date: "February 28, 2026",
    readTime: "7 min read",
    image: "/images/slider-2.jpg",
    category: "Development",
  },
  {
    title: "Mobile-First Design Principles",
    excerpt: "Why mobile-first design is essential for modern software development in Africa.",
    date: "February 20, 2026",
    readTime: "4 min read",
    image: "/images/slider-3.jpg",
    category: "Design",
  },
]

export default function BlogsSection() {
  return (
    <section 
      id="blogs" 
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{ 
        background: "linear-gradient(135deg, #F9FAFB 0%, #FFFFFF 100%)"
      }}
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #D4AF37 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full opacity-5 blur-3xl"
           style={{ background: "#D4AF37" }} />
      <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full opacity-5 blur-3xl"
           style={{ background: "#1E293B" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
               style={{ background: "rgba(212,175,55,0.08)", border: "1px solid rgba(212,175,55,0.2)" }}>
            <BookOpen size={16} style={{ color: "#D4AF37" }} />
            <span className="text-sm font-medium" style={{ color: "#D4AF37" }}>Our Blog</span>
          </div>
          
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
              style={{ color: "#111827" }}>
            Latest <span style={{ color: "#D4AF37" }}>Insights</span>
          </h2>
          
          <p className="text-lg" style={{ color: "#6B7280" }}>
            Thoughts, stories, and ideas on technology, innovation, and digital transformation
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {blogs.map((blog, index) => (
            <article
              key={blog.title}
              className="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2"
              style={{
                background: "#FFFFFF",
                boxShadow: "0 4px 20px rgba(0,0,0,0.02), 0 8px 30px rgba(0,0,0,0.02)",
                border: "1px solid rgba(0,0,0,0.03)",
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`,
                opacity: 0,
                transform: 'translateY(10px)'
              }}
            >
              {/* Image Container */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 rounded-full text-xs font-medium backdrop-blur-sm"
                        style={{ 
                          background: "rgba(255,255,255,0.9)",
                          color: "#1E293B",
                          border: "1px solid rgba(212,175,55,0.3)"
                        }}>
                    {blog.category}
                  </span>
                </div>

                {/* Featured Badge for first blog */}
                {index === 0 && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1"
                          style={{ 
                            background: "#D4AF37",
                            color: "#1E293B"
                          }}>
                      <Sparkles size={12} />
                      Featured
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta Info */}
                <div className="flex items-center gap-3 mb-3 text-xs" style={{ color: "#9CA3AF" }}>
                  <div className="flex items-center gap-1">
                    <Calendar size={12} />
                    <span>{blog.date}</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Clock size={12} />
                    <span>{blog.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-heading text-lg font-bold mb-2 line-clamp-2 group-hover:text-[#D4AF37] transition-colors duration-300"
                    style={{ color: "#111827" }}>
                  {blog.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm mb-4 line-clamp-2" style={{ color: "#6B7280" }}>
                  {blog.excerpt}
                </p>

                {/* Read More Link */}
                <Link
                  href={`/blog/${blog.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                  className="inline-flex items-center gap-2 text-sm font-medium transition-all duration-300 group/link"
                  style={{ color: "#D4AF37" }}
                >
                  <span>Read Article</span>
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover/link:translate-x-1" />
                  
                  {/* Animated underline */}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4AF37] group-hover/link:w-full transition-all duration-300" />
                </Link>
              </div>

              {/* Decorative Corner */}
              <div className="absolute bottom-0 right-0 w-12 h-12 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-[#D4AF37]/10 to-transparent transform rotate-45 translate-x-8 translate-y-8" />
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="group relative inline-flex items-center gap-3 px-8 py-3.5 rounded-xl font-semibold overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95"
            style={{ 
              background: "linear-gradient(135deg, #1E293B 0%, #2D3A4F 100%)",
              color: "#FFFFFF",
              boxShadow: "0 10px 25px -5px rgba(30,41,59,0.3)"
            }}
          >
            <span className="relative z-10 flex items-center gap-2">
              <BookOpen size={16} />
              View All Articles
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </span>
            
            {/* Shine Effect */}
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                  style={{
                    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)"
                  }} />
          </Link>
        </div>

      
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  )
}