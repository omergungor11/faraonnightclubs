import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { 
  Crown, 
  Car, 
  Building, 
  Users, 
  Sparkles, 
  Clock, 
  Shield, 
  Gift,
  MessageCircle,
  Phone,
  ArrowRight,
  Star
} from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Night Club Hizmetleri | VIP Eğlence & Organizasyon",
  description: "Faraon Night Club hizmetleri - VIP gece eğlencesi, özel organizasyonlar, transfer ve konaklama hizmetleri. Kıbrıs night club deneyiminizi tamamlayan premium hizmetler.",
  keywords: [
    "night club hizmetleri",
    "vip gece eğlencesi",
    "kıbrıs night club hizmetleri",
    "transfer hizmetleri",
    "konaklama",
    "özel organizasyon",
    "faraon night club",
  ],
  openGraph: {
    title: "Night Club Hizmetleri | Faraon Night Club",
    description: "VIP eğlence, transfer, konaklama ve özel organizasyon hizmetleri.",
  },
}

const mainServices = [
  {
    icon: Sparkles,
    title: "VIP Gece Eğlencesi",
    description: "Faraon Night Club'ın VIP alanlarında ayrıcalıklı gece eğlencesi. Özel sahne performansları, profesyonel dans şovları ve kişiye özel hizmet.",
    features: [
      "Özel VIP bölümler",
      "Profesyonel sahne performansları",
      "Kişiye özel hostess hizmeti",
      "Premium içecek servisi",
    ],
  },
  {
    icon: Crown,
    title: "Özel Gece Planlaması",
    description: "Size özel hazırlanan gece programları. Saatlik, gecelik veya günlük planlamalar ile Kıbrıs night club deneyiminin kontrolü sizde.",
    features: [
      "Saatlik programlar",
      "Gecelik paketler",
      "Günlük organizasyonlar",
      "Özel etkinlik planlaması",
    ],
  },
  {
    icon: Users,
    title: "Özel Misafir Ağırlama",
    description: "VIP misafir ağırlama hizmetimiz ile kendinizi özel hissedin. Kişisel asistan eşliğinde night club deneyimi.",
    features: [
      "Kişisel asistan hizmeti",
      "Özel karşılama",
      "VIP ağırlama protokolü",
      "Tam gizlilik garantisi",
    ],
  },
]

const additionalServices = [
  {
    icon: Car,
    title: "Transfer Hizmetleri",
    description: "Kıbrıs genelinde lüks transfer ve taksi hizmetleri. Havalimanı, otel ve mekan arası güvenli ulaşım.",
    features: ["Havalimanı transferi", "VIP araç filosu", "7/24 hizmet", "Profesyonel şoförler"],
  },
  {
    icon: Building,
    title: "Konaklama Desteği",
    description: "Anlaşmalı otellerimizde özel konaklama paketleri. Night club deneyiminizi tamamlayan konforlu konaklama.",
    features: ["Anlaşmalı oteller", "Özel fiyatlar", "Suit seçenekleri", "Rezervasyon desteği"],
  },
  {
    icon: Gift,
    title: "Özel Organizasyonlar",
    description: "Doğum günü, bekarlığa veda partisi ve özel kutlamalar için night club organizasyon hizmetleri.",
    features: ["Doğum günü partileri", "Bekarlığa veda", "Özel kutlamalar", "Tema geceleri"],
  },
  {
    icon: Shield,
    title: "Güvenlik & Gizlilik",
    description: "Profesyonel güvenlik ekibimiz ve tam gizlilik politikamız ile güvende hissedin.",
    features: ["7/24 güvenlik", "Tam gizlilik", "Profesyonel ekip", "Güvenli ortam"],
  },
  {
    icon: Clock,
    title: "7/24 Destek",
    description: "Her an ulaşılabilir müşteri desteği. Sorularınız ve talepleriniz için yanınızdayız.",
    features: ["WhatsApp destek", "Telefon hattı", "Hızlı yanıt", "Rezervasyon yardımı"],
  },
]

export default function ServicesPage() {
  return (
    <article className="pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,69,69,0.15),transparent_50%)]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gold text-sm font-medium uppercase tracking-wider mb-3">
              Hizmetlerimiz
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient-gold">Night Club</span>{" "}
              <span className="text-foreground">Hizmetlerimiz</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              <strong>Faraon Night Club</strong> olarak <strong>Kıbrıs night club</strong> deneyiminizi 
              mükemmelleştirmek için kapsamlı hizmetler sunuyoruz. VIP eğlenceden transfere, 
              konaklamadan özel organizasyonlara kadar her şey düşünüldü.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-foreground">VIP Eğlence</span>{" "}
              <span className="text-gradient-gold">& Organizasyon</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Ana hizmetlerimiz ile <strong>night club</strong> deneyiminin keyfini çıkarın.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {mainServices.map((service) => (
              <div
                key={service.title}
                className="p-8 rounded-2xl bg-card border border-border hover:border-gold/50 transition-all duration-300 hover:shadow-lg hover:shadow-gold/5"
              >
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-gold" />
                </div>
                
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Star className="w-4 h-4 text-gold shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient-gold">Ek Hizmetler</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              <strong>Kıbrıs night club</strong> deneyiminizi tamamlayan destek hizmetleri.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {additionalServices.map((service) => (
              <div
                key={service.title}
                className="p-6 rounded-2xl bg-card border border-border hover:border-gold/30 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.slice(0, 2).map((feature) => (
                        <span
                          key={feature}
                          className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Nasıl</span>{" "}
                <span className="text-gradient-gold">Çalışıyoruz?</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                <strong>Faraon Night Club</strong> ile <strong>night club</strong> deneyiminizi planlamak çok kolay.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "1", title: "İletişim", desc: "WhatsApp veya telefonla ulaşın" },
                { step: "2", title: "Planlama", desc: "Size özel program oluşturuyoruz" },
                { step: "3", title: "Onay", desc: "Detayları netleştiriyoruz" },
                { step: "4", title: "Deneyim", desc: "Unutulmaz bir gece geçirin" },
              ].map((item, index) => (
                <div key={item.step} className="text-center relative">
                  <div className="w-14 h-14 rounded-full bg-primary/10 border-2 border-gold flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-gold">{item.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                  
                  {index < 3 && (
                    <ArrowRight className="hidden md:block absolute top-7 -right-3 w-6 h-6 text-gold/50" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-gradient-gold">Night Club Hizmetleri</span>{" "}
              <span className="text-foreground">Hakkında Bilgi Alın</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              <strong>Faraon Night Club</strong> hizmetleri hakkında detaylı bilgi almak ve 
              <strong> Kıbrıs night club</strong> deneyiminizi planlamak için iletişime geçin.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <a
                  href="https://wa.me/905428857575?text=Merhaba,%20Night%20Club%20hizmetleri%20hakkında%20bilgi%20almak%20istiyorum."
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
                className="border-gold/50 text-gold hover:bg-gold/10 bg-transparent"
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
                className="border-border text-foreground hover:bg-muted bg-transparent"
              >
                <Link href="/katalog">
                  Katalogu İncele
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </article>
  )
}
