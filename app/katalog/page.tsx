import type { Metadata } from "next";
import KatalogClient from "./KatalogClient";

export const metadata: Metadata = {
  title: "Kıbrıs Night Club Katalog | Faraon Night Club Katalog Seçenekleri",
  description:
    "Faraon Night Club katalog - Kıbrıs night club katalog seçeneklerini keşfedin. Görsel katalog seçenekleri, VIP performanslar, özel şovlar ve premium gece eğlencesi detayları.",
  keywords: [
    "kıbrıs night club katalog",
    "night club katalog",
    "faraon night club katalog",
    "kıbrıs night club",
    "gece eğlencesi katalog",
  ],
  openGraph: {
    title: "Kıbrıs Night Club Katalog | Faraon Night Club",
    description: "Kıbrıs night club katalog seçeneklerini inceleyin. VIP performanslar ve özel gece eğlencesi.",
  },
};

export default function CatalogPage() {
  return <KatalogClient />;
}
