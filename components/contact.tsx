"use client"

import { useState } from "react"
import { Phone, Mail, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useLanguage } from "@/lib/language-context"

export function Contact() {
  const { t } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    alert("Message sent! (Demo)")
  }

  const contactInfo = [
    {
      icon: Phone,
      label: t.contact.phone,
      value: "+374 43 070 301",
      href: "tel:+37443070301",
    },
    {
      icon: Mail,
      label: t.contact.email,
      value: "ha1995yk@mail.ru",
      href: "mailto:ha1995yk@mail.ru",
    },
  ]

  return (
    <section id="contact" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-8 md:px-12 lg:px-16">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <span className="text-sm text-primary font-medium uppercase tracking-wider">
              {t.contact.sectionLabel}
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            {t.contact.title}
          </h2>

          <p className="text-muted-foreground text-lg">{t.contact.description}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact form */}
          <div className="bg-card border border-border rounded-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    {t.contact.formName}
                  </label>
                  <Input
                    id="name"
                    type="text"
                    required
                    className="bg-background border-border"
                    placeholder={t.contact.formName}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    {t.contact.formEmail}
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    className="bg-background border-border"
                    placeholder={t.contact.formEmail}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  {t.contact.formMessage}
                </label>
                <Textarea
                  id="message"
                  required
                  rows={3}
                  className="bg-background border-border resize-none"
                  placeholder={t.contact.formMessage}
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="h-4 w-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="h-4 w-4" />
                    {t.contact.formSubmit}
                  </span>
                )}
              </Button>
            </form>
          </div>

          {/* Contact info and map */}
          <div className="space-y-8">
            {/* Contact info cards */}
            <div className="grid gap-4">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{item.label}</div>
                    <div className="font-medium">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
