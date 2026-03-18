"use client"

import { Eye, CheckCircle, MessageSquare, FileText } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Services() {
  const { t } = useLanguage()

  const services = [
    {
      icon: Eye,
      title: t.services.service1Title,
      description: t.services.service1Desc,
    },
    {
      icon: CheckCircle,
      title: t.services.service2Title,
      description: t.services.service2Desc,
    },
    {
      icon: MessageSquare,
      title: t.services.service3Title,
      description: t.services.service3Desc,
    },
    {
      icon: FileText,
      title: t.services.service4Title,
      description: t.services.service4Desc,
    },
  ]

  return (
    <section id="services" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-8 md:px-12 lg:px-16">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <span className="text-sm text-primary font-medium uppercase tracking-wider">
              {t.services.sectionLabel}
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            {t.services.title}
          </h2>

          <p className="text-muted-foreground text-lg">
            {t.services.description}
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
