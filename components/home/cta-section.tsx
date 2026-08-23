import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, Calendar } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section 
      className="py-20 md:py-28 relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08),transparent_70%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold text-sm font-medium uppercase tracking-wider mb-3">
            Hemen İletişime Geçin
          </p>
          <h2 id="cta-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient-gold">Faraon Night Club</span>
            <br />
            <span className="text-foreground">ile Unutulmaz Bir Gece</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            <strong>Kıbrıs night club</strong> deneyiminizi planlamak için hemen bizimle iletişime geçin. 
            <strong> Night club katalog</strong> seçeneklerimizi inceleyin, size özel programınızı oluşturalım.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-lg px-8 py-6 text-foreground"
            >
              <a
                href="https://wa.me/905428857575?text=Merhaba,%20Faraon%20Night%20Club%20hakkında%20bilgi%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp ile Ulaşın
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-gold/50 text-gold hover:bg-gold/10 text-lg px-8 py-6 bg-transparent"
            >
              <a href="tel:905428857575">
                <Phone className="w-5 h-5 mr-2" />
                +90 542 885 75 75
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-border text-foreground hover:bg-muted text-lg px-8 py-6 bg-transparent"
            >
              <Link href="/iletisim">
                <Calendar className="w-5 h-5 mr-2" />
                Rezervasyon Yap
              </Link>
            </Button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground text-sm">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              7/24 Destek
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              Gizlilik Garantisi
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              Güvenli Ödeme
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
