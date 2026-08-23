import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Crown, Star, Music, Users, Clock, Sparkles, ArrowRight, MessageCircle } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Kıbrıs Night Club Deneyimi | VIP Gece Eğlencesi",
  description: "Faraon Night Club ile Kıbrıs night club deneyiminin zirvesini yaşayın. VIP alanlar, sahne performansları, özel dans şovları ve premium gece eğlencesi. Kıbrıs gece hayatının adresi.",
  keywords: [
    "kıbrıs night club",
    "night club",
    "vip night club",
    "kıbrıs gece hayatı",
    "özel gece eğlencesi",
    "sahne performansı",
    "faraon night club",
  ],
  openGraph: {
    title: "Kıbrıs Night Club Deneyimi | Faraon Night Club",
    description: "VIP gece eğlencesi, sahne performansları ve premium hizmetler. Kıbrıs night club deneyiminin zirvesi.",
  },
}

const features = [
  {
    icon: Crown,
    title: "VIP Alanlar",
    description: "Özel VIP bölümlerimizde ayrıcalıklı hizmet ve tam gizlilik ile night club deneyiminin keyfini çıkarın.",
  },
  {
    icon: Sparkles,
    title: "Sahne Performansları",
    description: "Profesyonel dansçılarımızın büyüleyici sahne şovları ile unutulmaz bir gece geçirin.",
  },
  {
    icon: Music,
    title: "Canlı DJ Performansları",
    description: "Deneyimli DJ'lerimiz ile gece boyunca en iyi müzik seçkileri ve enerji dolu atmosfer.",
  },
  {
    icon: Users,
    title: "Özel Misafir Hizmeti",
    description: "Kişiye özel hostess hizmeti ve VIP ağırlama ile kendinizi özel hissedin.",
  },
]

const programs = [
  {
    title: "Saatlik Program",
    description: "Kısa süreli ziyaretler için ideal. Night club atmosferini deneyimleyin.",
    features: ["Sahne performansı", "VIP koltuk", "İçecek servisi"],
  },
  {
    title: "Gece Programı",
    description: "Tam gece eğlencesi. En popüler seçeneğimiz.",
    features: ["Tüm gece erişim", "Özel performanslar", "Premium servis", "VIP alan"],
    popular: true,
  },
  {
    title: "Özel Paket",
    description: "Size özel hazırlanan programlar ve organizasyonlar.",
    features: ["Kişiye özel planlama", "Konaklama dahil", "Transfer hizmeti", "7/24 destek"],
  },
]

export default function NightClubPage() {
  return (
    <article className="pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,69,69,0.15),transparent_50%)]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gold text-sm font-medium uppercase tracking-wider mb-3">
              Faraon Night Club
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient-gold">Kıbrıs Night Club</span>
              <br />
              <span className="text-foreground">Deneyimi</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-8 max-w-3xl mx-auto">
              <strong>Faraon Night Club</strong>, Kıbrıs gece hayatının en prestijli mekanı olarak 
              <strong> VIP night club</strong> deneyimi sunuyor. Profesyonel sahne performansları, 
              özel dans şovları ve premium hizmetlerle unutulmaz bir gece sizi bekliyor.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Link href="/katalog">
                  Night Club Katalog
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-gold/50 text-gold hover:bg-gold/10 bg-transparent"
              >
                <a
                  href="https://wa.me/905428857575"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Rezervasyon Yap
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-foreground">Night Club</span>{" "}
              <span className="text-gradient-gold">Özellikleri</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              <strong>Kıbrıs night club</strong> standartlarının üzerinde bir deneyim. 
              Faraon Night Club&apos;ın sunduğu özel imkanları keşfedin.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex gap-5 p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-gold/30 transition-colors"
              >
                <div className="shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <feature.icon className="w-7 h-7 text-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-gradient-gold">Gece Programları</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              İhtiyacınıza uygun <strong>night club</strong> programlarımız. 
              Saatlik, gecelik veya size özel paketlerle <strong>Kıbrıs night club</strong> deneyimi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {programs.map((program) => (
              <div
                key={program.title}
                className={`relative p-6 md:p-8 rounded-2xl border transition-colors ${
                  program.popular
                    ? "bg-primary/5 border-gold"
                    : "bg-card border-border hover:border-gold/30"
                }`}
              >
                {program.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 text-xs font-semibold bg-gold text-background rounded-full">
                      En Popüler
                    </span>
                  </div>
                )}
                
                <h3 className="text-xl font-semibold text-foreground mb-3 mt-2">
                  {program.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {program.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {program.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <Star className="w-4 h-4 text-gold shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button
                  asChild
                  className={`w-full ${
                    program.popular
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                      : "bg-muted hover:bg-muted/80 text-foreground"
                  }`}
                >
                  <a
                    href="https://wa.me/905428857575"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Bilgi Al
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  <span className="text-foreground">Kıbrıs</span>{" "}
                  <span className="text-gradient-gold">Gece Hayatı</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>Faraon Night Club</strong>, Kıbrıs gece hayatının en seçkin adreslerinden biri olarak 
                  misafirlerine premium bir <strong>night club</strong> deneyimi sunmaktadır.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Profesyonel performans ekibimiz, deneyimli servis kadromuz ve 
                  lüks mekan konseptimiz ile <strong>Kıbrıs night club</strong> sektöründe 
                  fark yaratıyoruz.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  VIP gece eğlencesi, özel organizasyonlar ve kişiye özel programlar için 
                  <strong> Faraon Night Club katalog</strong> seçeneklerimizi inceleyebilirsiniz.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 rounded-xl bg-card border border-border text-center">
                  <Clock className="w-8 h-8 text-gold mx-auto mb-3" />
                  <p className="text-2xl font-bold text-foreground mb-1">21:00</p>
                  <p className="text-sm text-muted-foreground">Açılış Saati</p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border text-center">
                  <Clock className="w-8 h-8 text-gold mx-auto mb-3" />
                  <p className="text-2xl font-bold text-foreground mb-1">05:00</p>
                  <p className="text-sm text-muted-foreground">Kapanış Saati</p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border text-center col-span-2">
                  <Star className="w-8 h-8 text-gold mx-auto mb-3" />
                  <p className="text-2xl font-bold text-foreground mb-1">7 Gün</p>
                  <p className="text-sm text-muted-foreground">Haftanın Her Günü Açık</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-gradient-gold">Night Club</span>{" "}
              <span className="text-foreground">Deneyimine Hazır mısınız?</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              <strong>Faraon Night Club</strong> ile <strong>Kıbrıs night club</strong> deneyiminizi planlamak için 
              hemen bizimle iletişime geçin.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <a
                  href="https://wa.me/905428857575"
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
