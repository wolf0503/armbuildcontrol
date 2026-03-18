import type { Metadata, Viewport } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from '@/lib/language-context'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin", "cyrillic"],
  variable: '--font-inter'
})

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-geist-mono'
})

export const metadata: Metadata = {
  title: 'HN Control | Technical Supervision & Construction Consulting',
  description: 'Professional technical supervision consulting services for construction works in Armenia. Expert quality control, building inspection, and consulting for residential and commercial projects in Yerevan.',
  keywords: ['technical supervision', 'construction consulting', 'Armenia', 'Yerevan', 'building inspection', 'quality control', 'construction supervision'],
  authors: [{ name: 'HN Control' }],
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    title: 'HN Control | Technical Supervision & Construction Consulting',
    description: 'Professional technical supervision consulting services for construction works in Armenia.',
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['ru_RU', 'hy_AM'],
  },
}

export const viewport: Viewport = {
  themeColor: '#c9a55c',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${geistMono.variable} font-sans antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
