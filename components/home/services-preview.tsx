import { Crown, Users, Car, Building, Star, Sparkles } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Crown,
    title: "VIP Night Club Deneyimi",
    description: "Faraon Night Club'ın özel VIP alanlarında ayrıcalıklı gece eğlencesi. Kıbrıs night club standartlarının üzerinde hizmet.",
  },
  {
    icon: Sparkles,
    title: "Sahne Performansları",
    description: "Profesyonel dans şovları ve özel sahne performansları ile unutulmaz bir gece. Night club deneyiminin zirvesi.",
  },
  {
    icon: Users,
    title: "Özel Misafir Ağırlama",
    description: "Kişiye özel planlama ve VIP misafir hizmetleri. Faraon Night Club kalitesiyle özel anlar.",
  },
  {
    icon: Car,
    title: "Transfer Hizmetleri",
    description: "Kıbrıs genelinde lüks transfer ve taksi hizmetleri. Güvenli ve konforlu ulaşım.",
  },
  {
    icon: Building,
    title: "Konaklama Desteği",
    description: "Anlaşmalı otellerimizde özel konaklama paketleri. Night club deneyiminizi tamamlayan konfor.",
  },
  {
    icon: Star,
    title: "Özel Organizasyonlar",
    description: "Doğum günü, bekarlığa veda ve özel kutlamalar için night club organizasyon hizmetleri.",
  },
]

export function ServicesPreview() {
  return (
    <section 
      id="services" 
      className="py-20 md:py-28 bg-muted/30"
      aria-labelledby="services-heading"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-gold text-sm font-medium uppercase tracking-wider mb-3">
            Hizmetlerimiz
          </p>
          <h2 id="services-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient-gold">Night Club</span>{" "}
            <span className="text-foreground">Hizmetlerimiz</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            <strong>Faraon Night Club</strong> olarak Kıbrıs&apos;ta premium gece eğlencesi sunuyoruz. 
            VIP hizmetler, özel performanslar ve tam destek ile <strong>Kıbrıs night club</strong> deneyiminizi 
            unutulmaz kılıyoruz.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {services.map((service) => (
            <article
              key={service.title}
              className="group p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-gold/50 transition-all duration-300 hover:shadow-lg hover:shadow-gold/5"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-foreground"
          >
            <Link href="/hizmetler">
              Tüm Hizmetleri İncele
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
