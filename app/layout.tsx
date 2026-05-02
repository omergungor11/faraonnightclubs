import React from "react"
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { FloatingWhatsApp as KatalogButton } from '@/components/katalog-button'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://faraonnightclubs.com'),
  title: {
    default: 'Faraon Night Club | Kıbrıs Night Club - Premium Gece Eğlencesi',
    template: '%s | Faraon Night Club Kıbrıs'
  },
  description: 'Faraon Night Club - Kıbrıs\'ın en prestijli night club deneyimi. VIP gece eğlencesi, özel sahne performansları, night club katalog ve premium hizmetler. Kıbrıs night club arayışınızda doğru adres.',
  keywords: [
    'night club',
    'kıbrıs night club', 
    'night club katalog',
    'faraon night club',
    'faraon night club katalog',
    'kıbrıs gece hayatı',
    'kıbrıs night club katalog',
    'özel gece eğlencesi',
    'vip night club',
    'kıbrıs eğlence',
    'gece kulübü kıbrıs'
  ],
  authors: [{ name: 'Faraon Night Club' }],
  creator: 'Faraon Night Club',
  publisher: 'Faraon Night Club',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://faraonnightclubs.com',
    siteName: 'Faraon Night Club',
    title: 'Faraon Night Club | Kıbrıs\'ın En Özel Night Club Deneyimi',
    description: 'Kıbrıs night club deneyiminde lüks ve kalite. Faraon Night Club ile VIP gece eğlencesi, sahne performansları ve özel hizmetler.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Faraon Night Club - Kıbrıs Night Club',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Faraon Night Club | Kıbrıs Night Club',
    description: 'Kıbrıs\'ın en prestijli night club deneyimi. VIP eğlence, sahne şovları ve premium hizmetler.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://faraonnightclubs.com',
  },
  generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: '#1a0a0a',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'NightClub',
              name: 'Faraon Night Club',
              description: 'Kıbrıs\'ın en prestijli night club deneyimi. VIP gece eğlencesi ve premium hizmetler.',
              url: 'https://faraonnightclubs.com',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'CY',
                addressRegion: 'Kıbrıs',
              },
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                opens: '21:00',
                closes: '05:00',
              },
              priceRange: '$$$',
              servesCuisine: 'Entertainment',
            }),
          }}
        />
      </head>
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <KatalogButton />
        <Analytics />
      </body>
    </html>
  )
}
// Deployment Sync: Sat May  2 18:00:05 EEST 2026
