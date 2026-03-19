"use client"

import Image from "next/image"
import { Users, Shield, Clock } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function About() {
  const { t } = useLanguage()

  const features = [
    {
      icon: Users,
      title: t.about.feature1Title,
      description: t.about.feature1Desc,
    },
    {
      icon: Shield,
      title: t.about.feature2Title,
      description: t.about.feature2Desc,
    },
    {
      icon: Clock,
      title: t.about.feature3Title,
      description: t.about.feature3Desc,
    },
  ]

  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-8 md:px-12 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/images/about-team.jpg"
                alt="Construction team reviewing blueprints"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating stat card */}
            {/* <div className="absolute bottom-4 right-4 md:bottom-8 md:-right-8 bg-card border border-border rounded-lg p-6 shadow-xl">
              <div className="text-4xl md:text-5xl font-bold text-primary">10+</div>
              <div className="text-sm text-muted-foreground mt-1">{t.stats.experience}</div>
            </div> */}
            {/* Decorative element */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-primary/20 rounded-lg -z-10" />
          </div>

          {/* Content side */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <span className="text-sm text-primary font-medium uppercase tracking-wider">
                {t.about.sectionLabel}
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance leading-tight">
              {t.about.title}
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              {t.about.description}
            </p>

            <div className="grid gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 bg-secondary/30 rounded-lg border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
