"use client"

import Image from "next/image"

const technologies = [
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Django", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
  { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
  { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
]

export default function TechStackSection() {
  return (
    <section id="techstack" className="py-20 lg:py-28 overflow-hidden" style={{ background: "#111827" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4"
            style={{ background: "rgba(212,175,55,0.15)", color: "#D4AF37" }}
          >
            Our Technology Stack
          </span>
          <h2
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-balance"
            style={{ color: "#FFFFFF" }}
          >
            Technologies We Use
          </h2>
          <p className="mt-4 text-lg" style={{ color: "rgba(255,255,255,0.7)" }}>
            We leverage modern technologies to build robust and scalable solutions.
          </p>
        </div>
      </div>

      {/* Sliding Marquee */}
      <div 
        className="relative w-full flex overflow-hidden" 
        style={{ 
          maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)", 
          WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" 
        }}
      >
        <div className="flex animate-marquee gap-8 py-4 whitespace-nowrap min-w-max">
          {[...technologies, ...technologies].map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="group flex flex-col items-center gap-3 p-4 md:p-6 rounded-2xl transition-all duration-300 hover:scale-105"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.1)",
                minWidth: "120px",
              }}
            >
              <div 
                className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-xl p-3 transition-colors duration-300 group-hover:bg-white/20"
                style={{ background: "rgba(255,255,255,0.1)" }}
              >
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <span
                className="text-sm md:text-base font-medium transition-colors duration-300 group-hover:text-[#D4AF37]"
                style={{ color: "rgba(255,255,255,0.8)" }}
              >
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
