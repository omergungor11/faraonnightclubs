import type { Metadata } from "next";
import KatalogClient from "./KatalogClient";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbNode, graph, webPageNode } from "@/lib/schema";

export const metadata: Metadata = {
  title: { absolute: "Kıbrıs Night Club Katalog | Faraon Night Club" },
  description:
    "Faraon Night Club katalog - Kıbrıs night club katalog seçeneklerini keşfedin. Görsel katalog seçenekleri, VIP performanslar, özel şovlar ve premium gece eğlencesi detayları.",
  keywords: [
    "kıbrıs night club katalog",
    "night club katalog",
    "faraon night club katalog",
    "kıbrıs night club",
    "gece eğlencesi katalog",
  ],
  alternates: { canonical: "/katalog" },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "Faraon Night Club",
    url: "/katalog",
    title: "Kıbrıs Night Club Katalog | Faraon Night Club",
    description: "Kıbrıs night club katalog seçeneklerini inceleyin. VIP performanslar ve özel gece eğlencesi.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Faraon Night Club Kıbrıs" }],
  },
};

export default function CatalogPage() {
  return (
    <>
      <JsonLd
        id="ld-katalog"
        data={graph(
          webPageNode({
            path: "/katalog",
            type: "CollectionPage",
            name: "Kıbrıs Night Club Katalog | Faraon Night Club",
            description: "Kıbrıs night club katalog seçeneklerini inceleyin. VIP performanslar ve özel gece eğlencesi.",
          }),
          breadcrumbNode("/katalog", [
            { name: "Ana Sayfa", path: "/" },
            { name: "Katalog" },
          ]),
        )}
      />
      <KatalogClient />
    </>
  );
}
