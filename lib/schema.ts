/**
 * schema.org graph builders.
 *
 * Design rules enforced here:
 *
 * 1. One business entity, not two. `NightClub` already inherits from
 *    `LocalBusiness` → `Organization`, so emitting a separate `Organization`
 *    node would assert that two different businesses exist. Everything points
 *    at `ORG_ID` instead.
 * 2. Stable `@id`s so nodes cross-reference instead of floating as orphans.
 * 3. Empty values are omitted, never emitted as `""`. A blank `streetAddress`
 *    or an invented `sameAs` profile is worse than an absent property.
 * 4. One `@graph` document per page, so `@id` references resolve locally.
 */

import {
  ADDRESS,
  AREA_SERVED,
  EMAIL,
  GEO,
  OPENING_HOURS,
  PHONE_E164,
  SAME_AS,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";

export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const LOGO_ID = `${SITE_URL}/#logo`;

export const abs = (path: string) => new URL(path, SITE_URL).toString();
export const pageId = (path: string) => `${abs(path)}#webpage`;
export const breadcrumbId = (path: string) => `${abs(path)}#breadcrumb`;
export const faqId = (path: string) => `${abs(path)}#faq`;

type Node = Record<string, unknown>;

/** Drops keys whose value is undefined, null, "" or []. */
function compact(node: Node): Node {
  return Object.fromEntries(
    Object.entries(node).filter(([, value]) => {
      if (value === undefined || value === null || value === "") return false;
      if (Array.isArray(value) && value.length === 0) return false;
      return true;
    }),
  );
}

export function graph(...nodes: Node[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}

/* -------------------------------------------------------------------------- */
/* Site-wide nodes (emitted once, from the root layout)                       */
/* -------------------------------------------------------------------------- */

export function organizationNode(): Node {
  return compact({
    "@type": "NightClub",
    "@id": ORG_ID,
    name: SITE_NAME,
    alternateName: "Faraon Night Club Kıbrıs",
    description:
      "Kıbrıs'ın en prestijli night club deneyimi. VIP gece eğlencesi, sahne performansları ve premium hizmetler.",
    url: SITE_URL,
    logo: { "@id": LOGO_ID },
    image: [abs("/images/hero-main.jpg"), abs("/images/hero-club.jpg")],
    telephone: PHONE_E164,
    email: EMAIL,
    priceRange: "$$$",
    currenciesAccepted: "TRY, EUR, GBP, USD",
    paymentAccepted: "Nakit, Kredi Kartı",
    publicAccess: true,
    isAccessibleForFree: false,
    slogan: "Kıbrıs'ın en prestijli night club deneyimi",
    address: compact({
      "@type": "PostalAddress",
      ...ADDRESS,
    }),
    ...(GEO
      ? { geo: { "@type": "GeoCoordinates", ...GEO } }
      : {}),
    openingHoursSpecification: OPENING_HOURS.map((slot) => ({
      "@type": "OpeningHoursSpecification",
      // `closes` earlier than `opens` is the correct encoding for an
      // overnight venue — schema.org reads it as spanning midnight.
      dayOfWeek: [...slot.days],
      opens: slot.opens,
      closes: slot.closes,
    })),
    contactPoint: [
      {
        "@type": "ContactPoint",
        "@id": `${SITE_URL}/#reservations`,
        telephone: PHONE_E164,
        contactType: "reservations",
        email: EMAIL,
        availableLanguage: ["Turkish", "English", "Russian"],
        areaServed: "CY",
      },
    ],
    areaServed: [
      ...AREA_SERVED.map((name) => ({
        "@type": "AdministrativeArea",
        name,
      })),
      { "@type": "Country", name: "Kuzey Kıbrıs Türk Cumhuriyeti" },
    ],
    knowsLanguage: ["tr", "en", "ru"],
    sameAs: SAME_AS,
    amenityFeature: [
      "VIP Alanlar",
      "Canlı DJ Performansı",
      "Sahne Performansları",
      "Transfer Hizmeti",
      "Konaklama Desteği",
    ].map((name) => ({
      "@type": "LocationFeatureSpecification",
      name,
      value: true,
    })),
  });
}

export function logoNode(): Node {
  return {
    "@type": "ImageObject",
    "@id": LOGO_ID,
    url: abs("/images/logo-official.png"),
    contentUrl: abs("/images/logo-official.png"),
    caption: SITE_NAME,
  };
}

export function websiteNode(): Node {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: SITE_NAME,
    description:
      "Kıbrıs night club, VIP gece eğlencesi ve night club katalog.",
    inLanguage: "tr-TR",
    publisher: { "@id": ORG_ID },
  };
}

/* -------------------------------------------------------------------------- */
/* Per-page nodes                                                             */
/* -------------------------------------------------------------------------- */

export type Crumb = { name: string; path?: string };

/**
 * The final crumb intentionally carries no `item` — Google's guidance is that
 * the current page should be named but not linked.
 */
export function breadcrumbNode(path: string, trail: Crumb[]): Node {
  return {
    "@type": "BreadcrumbList",
    "@id": breadcrumbId(path),
    itemListElement: trail.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      ...(crumb.path ? { item: abs(crumb.path) } : {}),
    })),
  };
}

export type Faq = { question: string; answer: string };

/**
 * Every question passed here must also be rendered visibly on the page.
 * Markup-only FAQs are the most common cause of a manual action on this type.
 * Callers should feed the same array to both this builder and the visible
 * accordion so the two cannot drift apart.
 */
export function faqNode(path: string, faqs: Faq[]): Node {
  return {
    "@type": "FAQPage",
    "@id": faqId(path),
    inLanguage: "tr-TR",
    isPartOf: { "@id": pageId(path) },
    mainEntity: faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };
}

export function webPageNode({
  path,
  type = "WebPage",
  name,
  description,
  image,
  hasFaq = false,
  hasBreadcrumb = true,
  extra = {},
}: {
  path: string;
  type?: "WebPage" | "CollectionPage" | "AboutPage" | "ContactPage";
  name: string;
  description: string;
  image?: string;
  hasFaq?: boolean;
  /** Set false on pages with no visible breadcrumb (e.g. the homepage), so the
   *  graph does not reference a BreadcrumbList node that is never emitted. */
  hasBreadcrumb?: boolean;
  extra?: Node;
}): Node {
  return compact({
    "@type": type,
    "@id": pageId(path),
    url: abs(path),
    name,
    description,
    inLanguage: "tr-TR",
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    ...(hasBreadcrumb ? { breadcrumb: { "@id": breadcrumbId(path) } } : {}),
    ...(image
      ? { primaryImageOfPage: { "@type": "ImageObject", url: abs(image) } }
      : {}),
    ...(hasFaq ? { mainEntity: { "@id": faqId(path) } } : {}),
    ...extra,
  });
}

export function blogPostingNode({
  path,
  headline,
  description,
  datePublished,
  image,
}: {
  path: string;
  headline: string;
  description: string;
  datePublished: string;
  image?: string;
}): Node {
  return compact({
    "@type": "BlogPosting",
    "@id": `${abs(path)}#article`,
    mainEntityOfPage: { "@id": pageId(path) },
    headline,
    description,
    inLanguage: "tr-TR",
    datePublished,
    dateModified: datePublished,
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    ...(image ? { image: abs(image) } : {}),
  });
}
