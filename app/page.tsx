import { HeroSection } from "@/components/home/hero-section"
import { ServicesPreview } from "@/components/home/services-preview"
import { CatalogPreview } from "@/components/home/catalog-preview"
import { WhyUsSection } from "@/components/home/why-us-section"
import { CTASection } from "@/components/home/cta-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import type { Metadata } from "next"
import { JsonLd } from "@/components/seo/json-ld"
import { graph, webPageNode, ORG_ID } from "@/lib/schema"

export const metadata: Metadata = {
  // Explicit self-referencing canonical. The root layout no longer sets one,
  // because a canonical there is inherited by every child route.
  alternates: { canonical: "/" },
}

export default function HomePage() {
  return (
    // The previous microdata (itemScope/itemType NightClub) was removed: the
    // root layout already declares a NightClub entity in JSON-LD, so this was
    // a second, competing declaration of the same business in a different
    // vocabulary. The JSON-LD graph is the single source of truth.
    <article>
      <JsonLd
        id="ld-home"
        data={graph(
          webPageNode({
            path: "/",
            name: "Faraon Night Club | Kıbrıs Night Club",
            description:
              "Kıbrıs'ın en prestijli night club deneyimi. VIP gece eğlencesi, sahne performansları ve premium hizmetler.",
            hasBreadcrumb: false,
            extra: { mainEntity: { "@id": ORG_ID } },
          }),
        )}
      />

      <HeroSection />
      <ServicesPreview />
      <CatalogPreview />
      <WhyUsSection />
      <TestimonialsSection />
      <CTASection />
    </article>
  )
}
