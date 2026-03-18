"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone, Mail, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useLanguage } from "@/lib/language-context"
import type { Language } from "@/lib/translations"

const languages: { code: Language; name: string; flag: string }[] = [
  { code: "en", name: "English", flag: "EN" },
  { code: "ru", name: "Русский", flag: "RU" },
  { code: "hy", name: "Hayeren", flag: "Հայ" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const navItems = [
    { href: "#home", label: t.nav.home },
    { href: "#about", label: t.nav.about },
    { href: "#services", label: t.nav.services },
    { href: "#projects", label: t.nav.projects },
    { href: "#contact", label: t.nav.contact },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      {/* Top bar with contact info */}
      <div className="hidden md:block bg-secondary/50 py-2">
        <div className="container mx-auto px-8 md:px-12 lg:px-16 flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <a
              href="tel:+37443070301"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="h-3.5 w-3.5" />
              <span>+374 43 070 301</span>
            </a>
            <a
              href="mailto:ha1995yk@mail.ru"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-3.5 w-3.5" />
              <span>ha1995yk@mail.ru</span>
            </a>
          </div>
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-foreground">
                <Globe className="h-4 w-4" />
                <span>{languages.find((l) => l.code === language)?.flag}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {languages.map((lang) => (
                <DropdownMenuItem
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={language === lang.code ? "bg-accent" : ""}
                >
                  <span className="mr-2 font-semibold">{lang.flag}</span>
                  {lang.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-8 md:px-12 lg:px-16">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-sm overflow-hidden">
              <Image src="/images/logo.jpg" alt="HN Control Logo" width={48} height={48} className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg lg:text-xl font-bold tracking-tight leading-tight">HN</span>
              <span className="text-xs lg:text-sm text-primary font-semibold -mt-1">Control</span>
            </div>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="#contact">{t.hero.cta}</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-2">
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="text-muted-foreground md:hidden">
                  <Globe className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={language === lang.code ? "bg-accent" : ""}
                  >
                    <span className="mr-2 font-semibold">{lang.flag}</span>
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </nav>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                <a
                  href="tel:+37443070301"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  <span>+374 43 070 301</span>
                </a>
                <a
                  href="mailto:ha1995yk@mail.ru"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span>ha1995yk@mail.ru</span>
                </a>
              </div>
              <Button asChild className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="#contact" onClick={() => setIsMenuOpen(false)}>
                  {t.hero.cta}
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
