"use client"

import Link from "next/link"
import { Phone, Mail } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { t } = useLanguage()

  const currentYear = new Date().getFullYear()

  const navItems = [
    { href: "#home", label: t.nav.home },
    { href: "#about", label: t.nav.about },
    { href: "#services", label: t.nav.services },
    { href: "#projects", label: t.nav.projects },
    { href: "#contact", label: t.nav.contact },
  ]

  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-8 md:px-12 lg:px-16 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-sm overflow-hidden">
                <img src="/images/logo.jpg" alt="HN Control Logo" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight leading-tight">HN</span>
                <span className="text-xs text-primary font-semibold -mt-1">Control</span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t.about.description}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-6">{t.nav.home}</h3>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-6">{t.services.sectionLabel}</h3>
            <ul className="space-y-3">
              <li>
                <span className="text-muted-foreground text-sm">{t.services.service1Title}</span>
              </li>
              <li>
                <span className="text-muted-foreground text-sm">{t.services.service2Title}</span>
              </li>
              <li>
                <span className="text-muted-foreground text-sm">{t.services.service3Title}</span>
              </li>
              <li>
                <span className="text-muted-foreground text-sm">{t.services.service4Title}</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-6">{t.contact.sectionLabel}</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+37443070301"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  <Phone className="h-4 w-4 text-primary" />
                  +374 43 070 301
                </a>
              </li>
              <li>
                <a
                  href="mailto:ha1995yk@mail.ru"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  <Mail className="h-4 w-4 text-primary" />
                  ha1995yk@mail.ru
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-8 md:px-12 lg:px-16 py-6">
          <p className="text-sm text-muted-foreground text-center">
            © {currentYear} HN Control. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  )
}
