"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown, Phone, MessageCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Faraon Night Club Ana Bölüm"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-main.jpg?v=2"
          alt="Faraon Night Club - Kıbrıs Night Club Atmosferi"
          fill
          className="object-cover object-center"
          priority
          quality={85}
        />
        {/* Dark overlay with gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/60 to-background/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
        {/* Gold accent overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.12),transparent_60%)]" />
      </div>

      {/* Animated decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto relative z-10 px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Subtitle */}
          <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border text-sm text-gold mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            Kıbrıs&apos;ın Premium Night Club Deneyimi
          </p>

          {/* Main Heading - H1 */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="text-gradient-gold">Faraon Night Club</span>
            <br />
            <span className="text-foreground text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              Kıbrıs&apos;ın En Özel Night Club Deneyimi
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            <strong>Faraon Night Club</strong>, Kıbrıs gece hayatının en prestijli adresi.
            VIP gece eğlencesi, özel sahne performansları ve unutulmaz anlar için
            <strong> Kıbrıs night club</strong> deneyiminin zirvesine hoş geldiniz.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-lg px-8 py-6 animate-pulse-gold text-white text-white"
            >
              <Link href="/katalog">
                Night Club Katalog
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-gold/50 hover:bg-gold/10 hover:border-gold text-lg px-8 py-6 bg-transparent text-primary"
            >
              <a
                href="https://wa.me/905338801043"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp İletişim
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-border text-foreground hover:bg-muted text-lg px-8 py-6 bg-transparent"
            >
              <a href="tel:905338801043">
                <Phone className="w-5 h-5 mr-2" />
                Hemen Ara
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-3xl mx-auto">
            {[
              { value: "10+", label: "Yıllık Deneyim" },
              { value: "5000+", label: "Mutlu Misafir" },
              { value: "VIP", label: "Özel Hizmet" },
              { value: "7/24", label: "Destek" },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-4 rounded-xl bg-muted/30 border border-border/50">
                <div className="text-2xl md:text-3xl font-bold text-gradient-gold mb-1">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToServices}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-gold transition-colors cursor-pointer"
          aria-label="Aşağı kaydır"
        >
          <span className="text-xs uppercase tracking-wider">Keşfet</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </button>
      </div>
    </section>
  )
}
