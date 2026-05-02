import { HeroSection } from "@/components/home/hero-section"
import { ServicesPreview } from "@/components/home/services-preview"
import { CatalogPreview } from "@/components/home/catalog-preview"
import { WhyUsSection } from "@/components/home/why-us-section"
import { CTASection } from "@/components/home/cta-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"

export default function HomePage() {
  return (
    <article itemScope itemType="https://schema.org/NightClub">
      <meta itemProp="name" content="Faraon Night Club" />
      <meta itemProp="description" content="Kıbrıs'ın en prestijli night club deneyimi" />
      
      <HeroSection />
      <ServicesPreview />
      <CatalogPreview />
      <WhyUsSection />
      <TestimonialsSection />
      <CTASection />
    </article>
  )
}
