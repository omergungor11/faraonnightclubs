import type { Metadata } from "next";

import IletisimClient from "./IletisimClient";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbNode, faqNode, graph, webPageNode } from "@/lib/schema";

const PATH = "/iletisim";

const TITLE = "İletişim ve Rezervasyon | Faraon Night Club Kıbrıs";
const DESCRIPTION =
  "Faraon Night Club iletişim ve rezervasyon. Kıbrıs night club rezervasyonu, VIP masa, özel oda ve transfer talepleriniz için WhatsApp ve telefon hattımız açık.";

/**
 * These four Q&A are rendered visibly by IletisimClient (its `faqItems` array).
 * They are mirrored here for FAQPage markup — the answer text must match the
 * visible text or the markup becomes a manual-action risk.
 *
 * TODO: hoist this into a shared module and have IletisimClient import it, so
 * editing one cannot silently desync the other.
 */
const FAQS = [
  {
    question: "Rezervasyon nasıl yapabilirim?",
    answer:
      "Faraon Night Club rezervasyonu için telefon, WhatsApp veya iletişim formumuz üzerinden bize ulaşabilirsiniz. Kıbrıs night club deneyiminizi önceden planlamanızı öneririz.",
  },
  {
    question: "Night club katalog'u nasıl görebilirim?",
    answer:
      "Faraon Night Club katalog'umuzu web sitemizin Katalog sayfasından inceleyebilirsiniz. Kıbrıs night club katalog'umuzda tüm performansçılarımız yer almaktadır.",
  },
  {
    question: "VIP hizmetler nelerdir?",
    answer:
      "VIP night club hizmetlerimiz arasında özel masa, kişisel host/hostes, premium içecek servisi, özel performanslar ve daha fazlası bulunmaktadır.",
  },
  {
    question: "Transfer ve konaklama hizmeti var mı?",
    answer:
      "Evet, Faraon Night Club olarak havalimanı transferi, VIP araç kiralama ve lüks konaklama organizasyonu hizmetleri sunuyoruz.",
  },
];

export const metadata: Metadata = {
  title: { absolute: "İletişim ve Rezervasyon | Faraon Night Club" },
  description: DESCRIPTION,
  keywords: [
    "faraon night club iletişim",
    "kıbrıs night club rezervasyon",
    "night club telefon",
    "faraon night club whatsapp",
    "kıbrıs night club iletişim",
  ],
  alternates: { canonical: PATH },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "Faraon Night Club",
    url: PATH,
    title: TITLE,
    description: DESCRIPTION,
    images: [
      { url: "/og-image.jpg", width: 1200, height: 630, alt: "Faraon Night Club Kıbrıs" },
    ],
  },
};

export default function IletisimPage() {
  return (
    <>
      <JsonLd
        id="ld-iletisim"
        data={graph(
          webPageNode({
            path: PATH,
            type: "ContactPage",
            name: TITLE,
            description: DESCRIPTION,
            hasFaq: true,
          }),
          breadcrumbNode(PATH, [
            { name: "Ana Sayfa", path: "/" },
            { name: "İletişim" },
          ]),
          faqNode(PATH, FAQS),
        )}
      />
      <IletisimClient />
    </>
  );
}
