import type { Metadata } from "next";

import HakkimizdaClient from "./HakkimizdaClient";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbNode, graph, webPageNode } from "@/lib/schema";

const PATH = "/hakkimizda";

const TITLE = "Hakkımızda | Faraon Night Club Kıbrıs";
const DESCRIPTION =
  "Faraon Night Club hakkında: Kıbrıs'ta premium gece kulübü deneyimi, ekibimiz, hizmet anlayışımız ve misafir mahremiyetine yaklaşımımız.";

/**
 * Server wrapper. The page body is a Client Component, and a Client Component
 * cannot export `metadata` — without this file the route silently inherited the
 * homepage's title and description verbatim.
 */
export const metadata: Metadata = {
  title: { absolute: "Hakkımızda | Faraon Night Club Kıbrıs" },
  description: DESCRIPTION,
  keywords: [
    "faraon night club hakkında",
    "kıbrıs night club hakkımızda",
    "faraon night club ekibi",
    "kıbrıs gece kulübü işletmesi",
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

export default function HakkimizdaPage() {
  return (
    <>
      <JsonLd
        id="ld-hakkimizda"
        data={graph(
          webPageNode({
            path: PATH,
            type: "AboutPage",
            name: TITLE,
            description: DESCRIPTION,
          }),
          breadcrumbNode(PATH, [
            { name: "Ana Sayfa", path: "/" },
            { name: "Hakkımızda" },
          ]),
        )}
      />
      <HakkimizdaClient />
    </>
  );
}
