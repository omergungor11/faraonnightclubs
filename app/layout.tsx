import React from "react"
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { FloatingWhatsApp as KatalogButton } from '@/components/katalog-button'
import Script from 'next/script'
import { JsonLd } from '@/components/seo/json-ld'
import { graph, logoNode, organizationNode, websiteNode } from '@/lib/schema'
import { SITE_URL } from '@/lib/site'

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
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Faraon Night Club | Kıbrıs Night Club - Premium Gece Eğlencesi',
    template: '%s | Faraon Night Club'
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
    url: SITE_URL,
    siteName: 'Faraon Night Club',
    title: "Faraon Night Club | Kıbrıs Premium Night Club",
    description: "Kıbrıs'ın en özel night club deneyimi.",
    // logo-official.png is actually a 1.1 MB 4970x3337 JPEG (wrong extension,
    // a copy of the hero) — far outside the 1200x630 OG spec, so previews
    // crop unpredictably. og-image.jpg is the real share asset.
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Faraon Night Club Kıbrıs" }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Faraon Night Club | Kıbrıs Night Club',
    description: 'Kıbrıs\'ın en prestijli night club deneyimi. VIP eğlence, sahne şovları ve premium hizmetler.',
    images: ['/og-image.jpg'],
  },
  // NOTE: no `alternates.canonical` here on purpose. Next.js inherits metadata
  // into every child segment, so a canonical set at the root made all 13 URLs
  // declare the homepage as their canonical — telling Google the entire site
  // was duplicate content. Each route sets its own self-referencing canonical.
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
        {/* Site-wide entity graph. Page-level nodes (WebPage, BreadcrumbList,
            FAQPage, BlogPosting) live in each route and reference these @ids. */}
        <JsonLd
          id="ld-site"
          data={graph(organizationNode(), logoNode(), websiteNode())}
        />
      </head>
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased min-h-screen flex flex-col`}>
        {/* Google Tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18124099734"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-18124099734');

            window.gtag_report_conversion = function(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };
              gtag('event', 'conversion', {
                  'send_to': 'AW-18124099734/nQPwCK7uuKYcEJahn8JD',
                  'value': 1.0,
                  'currency': 'USD',
                  'event_callback': callback
              });
              return false;
            }
          `}
        </Script>
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
// Analytics Trigger: Sat May  2 18:37:57 EEST 2026
