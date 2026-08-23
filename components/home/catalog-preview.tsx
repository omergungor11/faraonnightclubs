import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Eye } from "lucide-react"

const catalogItems = [
  {
    id: 1,
    title: "Elite Performans",
    category: "Premium",
    description: "En seçkin performanslar ve VIP deneyim",
  },
  {
    id: 2,
    title: "Gold Deneyim",
    category: "VIP",
    description: "Altın standartlarında gece eğlencesi",
  },
  {
    id: 3,
    title: "Diamond Show",
    category: "Exclusive",
    description: "Özel şovlar ve ayrıcalıklı hizmet",
  },
]

export function CatalogPreview() {
  return (
    <section 
      className="py-20 md:py-28 relative overflow-hidden"
      aria-labelledby="catalog-heading"
    >
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_right,rgba(139,69,69,0.08),transparent_70%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading, Description, Cards & Buttons */}
          <div className="flex flex-col gap-8">
            <div>
              <p className="text-gold text-sm font-medium uppercase tracking-wider mb-3">
                Night Club Katalog
              </p>
              <h2 id="catalog-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-gradient-gold">Faraon Night Club</span>
                <br />
                <span className="text-foreground">Katalog Seçenekleri</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                <strong>Kıbrıs night club katalog</strong> seçeneklerimizi keşfedin. 
                <strong> Faraon Night Club katalog</strong> ile size özel performansları 
                ve VIP deneyimleri inceleyin. Her bütçeye ve tercihe uygun seçenekler.
              </p>
            </div>

            {/* Catalog Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {catalogItems.map((item, index) => (
                <Link
                  key={item.id}
                  href="/katalog"
                  className={`group relative p-6 rounded-2xl bg-card border border-border hover:border-gold/50 transition-all duration-300 hover:shadow-lg hover:shadow-gold/5 ${
                    index === 0 ? "sm:col-span-2" : ""
                  }`}
                >
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 text-xs font-medium bg-gold/10 text-gold rounded-full">
                      {item.category}
                    </span>
                  </div>
                  <div className="pt-4">
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-gold transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="w-5 h-5 text-gold" />
                  </div>
                </Link>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-foreground"
              >
                <Link href="/katalog">
                  <Eye className="w-5 h-5 mr-2" />
                  Katalogu İncele
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-gold/50 text-gold hover:bg-gold/10 bg-transparent"
              >
                <a
                  href="https://wa.me/905428857575?text=Merhaba,%20Night%20Club%20Katalog%20hakkında%20bilgi%20almak%20istiyorum."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Detaylı Bilgi Al
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right Column: Only the Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group overflow-hidden rounded-2xl border border-gold/10 shadow-xl max-w-[360px] transition-all duration-500 hover:border-gold/30">
              <Image 
                src="/images/kibris-gece-hayati-5.jpg" 
                alt="Kıbrıs Night Club Katalog Seçenekleri" 
                width={800} 
                height={450}
                className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
