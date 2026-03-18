"use client"

import { useState } from "react"
import { MapPin, ChevronLeft, ChevronRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const MAP_URL = "https://maps.app.goo.gl/3iQyWC1wtJpdhb5c6"

const projectImages = [
  "/images/project-arabkir-1.jpg",
  "/images/project-arabkir-2.jpg",
]

export function Projects() {
  const { t } = useLanguage()
  const [current, setCurrent] = useState(0)

  const prev = (e: React.MouseEvent) => {
    e.preventDefault()
    setCurrent((c) => (c === 0 ? projectImages.length - 1 : c - 1))
  }

  const next = (e: React.MouseEvent) => {
    e.preventDefault()
    setCurrent((c) => (c === projectImages.length - 1 ? 0 : c + 1))
  }

  return (
    <section id="projects" className="py-20 md:py-32 bg-secondary/20">
      <div className="container mx-auto px-8 md:px-12 lg:px-16">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <span className="text-sm text-primary font-medium uppercase tracking-wider">
              {t.projects.sectionLabel}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            {t.projects.title}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t.projects.description}
          </p>
        </div>

        {/* Single project card */}
        <div className="max-w-2xl mx-auto">
          <a
            href={MAP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300"
          >
            {/* Image slider */}
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={projectImages[current]}
                alt={t.projects.project1Title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

              {/* Location badge */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-2 text-sm text-foreground/80">
                  <MapPin className="h-4 w-4" />
                  <span>{t.projects.project1Location}</span>
                </div>
              </div>

              {/* Slider controls */}
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-background/70 hover:bg-background/90 rounded-full flex items-center justify-center transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-background/70 hover:bg-background/90 rounded-full flex items-center justify-center transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              {/* Dots */}
              <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-2">
                {projectImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={(e) => { e.preventDefault(); setCurrent(i) }}
                    className={`w-2 h-2 rounded-full transition-colors ${i === current ? "bg-primary" : "bg-foreground/40"}`}
                    aria-label={`Go to image ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Card content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">{t.projects.project1Title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t.projects.project1Desc}
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
