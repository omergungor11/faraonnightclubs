import { Shield, Clock, Award, Heart } from "lucide-react"

const features = [
  {
    icon: Award,
    title: "Premium Kalite",
    description: "Kıbrıs night club sektöründe 10 yılı aşkın deneyim ve kalite.",
  },
  {
    icon: Shield,
    title: "Gizlilik & Güvenlik",
    description: "Tam gizlilik ve profesyonel güvenlik hizmetleri.",
  },
  {
    icon: Clock,
    title: "7/24 Hizmet",
    description: "Her an ulaşılabilir destek ve rezervasyon imkanı.",
  },
  {
    icon: Heart,
    title: "Müşteri Memnuniyeti",
    description: "5000+ mutlu misafir ve %98 memnuniyet oranı.",
  },
]

export function WhyUsSection() {
  return (
    <section 
      className="py-20 md:py-28 bg-muted/30"
      aria-labelledby="why-us-heading"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-gold text-sm font-medium uppercase tracking-wider mb-3">
              Neden Biz?
            </p>
            <h2 id="why-us-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-foreground">Neden</span>{" "}
              <span className="text-gradient-gold">Faraon Night Club?</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
              <strong>Kıbrıs night club</strong> deneyiminde fark yaratan özelliklerimiz. 
              Faraon Night Club olarak misafirlerimize en iyisini sunuyoruz.
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex gap-5 p-6 rounded-2xl bg-card border border-border hover:border-gold/30 transition-colors"
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
      </div>
    </section>
  )
}
