import type { Metadata } from "next";
import RehberClient from "./RehberClient";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbNode, graph, webPageNode } from "@/lib/schema";

export const metadata: Metadata = {
  title: { absolute: "Kıbrıs Night Club Rehberi | Faraon Night Club" },
  description:
    "Kıbrıs night club rehberi - Gece hayatı, VIP eğlence rehberleri, night club kültürü ve Kıbrıs eğlence mekanları hakkında detaylı bilgiler. Faraon Night Club blog.",
  keywords: [
    "kıbrıs night club rehberi",
    "kıbrıs gece hayatı",
    "night club rehberi",
    "vip eğlence rehberi",
    "kıbrıs eğlence",
    "gece hayatı rehberi",
    "faraon night club",
  ],
  alternates: { canonical: "/rehber" },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "Faraon Night Club",
    url: "/rehber",
    title: "Kıbrıs Night Club Rehberi | Faraon Night Club",
    description: "Kıbrıs gece hayatı ve night club kültürü hakkında detaylı rehber içerikleri.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Faraon Night Club Kıbrıs" }],
  },
};

const blogPosts = [
  {
    id: 1,
    slug: "kibris-night-club-rehberi-2024",
    title: "Kıbrıs Night Club Rehberi: 2024 Güncel Bilgiler",
    excerpt:
      "Kıbrıs night club sahnesinin kapsamlı rehberi. En iyi mekanlar, VIP hizmetler ve gece hayatı ipuçları. Night club katalog seçenekleri ve fiyatlandırma hakkında bilmeniz gerekenler.",
    category: "Rehber",
    date: "2024-01-15",
    readTime: "8 dk",
    featured: true,
  },
  {
    id: 2,
    slug: "vip-night-club-deneyimi",
    title: "VIP Night Club Deneyimi: Bilmeniz Gereken Her Şey",
    excerpt:
      "VIP night club deneyimi nedir? Özel alanlar, kişiye özel hizmetler ve premium paketler hakkında detaylı bilgiler. Faraon Night Club VIP seçenekleri.",
    category: "VIP Rehber",
    date: "2024-01-10",
    readTime: "6 dk",
  },
  {
    id: 3,
    slug: "kibris-gece-hayati-ipuclari",
    title: "Kıbrıs Gece Hayatı: Yeni Başlayanlar İçin İpuçları",
    excerpt:
      "Kıbrıs'a ilk kez gelecekler için gece hayatı rehberi. Night club kültürü, eğlence seçenekleri ve dikkat edilmesi gerekenler.",
    category: "İpuçları",
    date: "2024-01-05",
    readTime: "5 dk",
  },
  {
    id: 4,
    slug: "night-club-katalog-secimi",
    title: "Night Club Katalog: Doğru Seçimi Nasıl Yaparsınız?",
    excerpt:
      "Night club katalog seçenekleri arasında size en uygun olanı nasıl bulursunuz? Bütçe, tercih ve deneyim seviyesine göre katalog rehberi.",
    category: "Katalog",
    date: "2024-01-01",
    readTime: "7 dk",
  },
  {
    id: 5,
    slug: "ozel-organizasyonlar-night-club",
    title: "Özel Organizasyonlar: Night Club'da Kutlama Rehberi",
    excerpt:
      "Doğum günü, bekarlığa veda ve özel kutlamalar için night club organizasyonu nasıl planlanır? Faraon Night Club organizasyon hizmetleri.",
    category: "Organizasyon",
    date: "2023-12-25",
    readTime: "6 dk",
  },
  {
    id: 6,
    slug: "transfer-konaklama-rehberi",
    title: "Kıbrıs Transfer ve Konaklama Rehberi",
    excerpt:
      "Kıbrıs'ta night club deneyiminizi tamamlayan transfer ve konaklama seçenekleri. Havalimanı transferi, VIP ulaşım ve otel önerileri.",
    category: "Hizmetler",
    date: "2023-12-20",
    readTime: "5 dk",
  },
];

const categories = [
  { name: "Tümü", count: 6 },
  { name: "Rehber", count: 2 },
  { name: "VIP Rehber", count: 1 },
  { name: "İpuçları", count: 1 },
  { name: "Katalog", count: 1 },
  { name: "Organizasyon", count: 1 },
];

export default function RehberPage() {
  return (
    <>
      <JsonLd
        id="ld-rehber"
        data={graph(
          webPageNode({
            path: "/rehber",
            type: "CollectionPage",
            name: "Kıbrıs Night Club Rehberi | Faraon Night Club",
            description: "Kıbrıs gece hayatı ve night club kültürü hakkında detaylı rehber içerikleri.",
          }),
          breadcrumbNode("/rehber", [
            { name: "Ana Sayfa", path: "/" },
            { name: "Rehber" },
          ]),
        )}
      />
      <RehberClient blogPosts={blogPosts} categories={categories} />
    </>
  );
}
