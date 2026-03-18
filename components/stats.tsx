"use client"

import { useLanguage } from "@/lib/language-context"

export function Stats() {
  const { t } = useLanguage()

  const stats = [
    { value: "15+", label: t.stats.projects },
    { value: "10+", label: t.stats.experience },
    { value: "50+", label: t.stats.clients },
    { value: "100K+", label: t.stats.sqm },
  ]

  return (
    <section className="py-16 md:py-20 bg-secondary/30 border-y border-border">
      <div className="container mx-auto px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
