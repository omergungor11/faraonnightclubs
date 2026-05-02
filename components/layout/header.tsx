"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Ana Sayfa", href: "/" },
  { name: "Night Club", href: "/night-club" },
  { name: "Katalog", href: "/katalog" },
  { name: "Hizmetler", href: "/hizmetler" },
  { name: "Rehber", href: "/rehber" },
  { name: "Hakkımızda", href: "/hakkimizda" },
  { name: "İletişim", href: "/iletisim" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg"
          : "bg-transparent"
      )}
    >
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <span className="text-xl md:text-2xl font-bold tracking-wider text-gradient-gold">
                FARAON
              </span>
              <span className="block text-[10px] md:text-xs tracking-[0.3em] text-gold/80 uppercase">
                Night Club
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-gold transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="border-gold/50 text-gold hover:bg-gold/10 hover:border-gold bg-transparent"
            >
              <a href="tel:+905551234567">
                <Phone className="w-4 h-4 mr-2" />
                Ara
              </a>
            </Button>
            <Button
              asChild
              size="sm"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <a
                href="https://wa.me/905551234567"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground hover:text-gold transition-colors"
            aria-label="Menüyü aç"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300",
            isOpen ? "max-h-[500px] pb-4" : "max-h-0"
          )}
        >
          <div className="flex flex-col gap-1 pt-2 border-t border-border">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 text-base font-medium text-foreground/80 hover:text-gold hover:bg-muted/50 rounded-lg transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
            <div className="flex gap-2 mt-4 px-4">
              <Button
                asChild
                variant="outline"
                className="flex-1 border-gold/50 text-gold hover:bg-gold/10 bg-transparent"
              >
                <a href="tel:+905551234567">
                  <Phone className="w-4 h-4 mr-2" />
                  Ara
                </a>
              </Button>
              <Button
                asChild
                className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <a
                  href="https://wa.me/905551234567"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
