import type { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/site";

/**
 * Blog slugs.
 *
 * NOTE: the post arrays are currently duplicated inline in both
 * `app/rehber/page.tsx` and `app/rehber/[slug]/page.tsx`, so this is a third
 * hand-maintained copy of the slug list. Extracting all three into a single
 * `lib/blog-posts.ts` is the real fix — until then, adding a post means
 * updating this list too or it will not be submitted to search engines.
 */
const BLOG_SLUGS = [
  "kibris-night-club-rehberi-2024",
  "vip-night-club-deneyimi",
  "kibris-gece-hayati-ipuclari",
  "night-club-katalog-secimi",
  "ozel-organizasyonlar-night-club",
  "transfer-konaklama-rehberi",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes: {
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  }[] = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },

    // The four long-form SEO landing pages. `/kibris-night-club` is the hub of
    // the cluster, so it carries the highest priority after the homepage.
    { path: "/kibris-night-club", priority: 0.9, changeFrequency: "monthly" },
    { path: "/night-club", priority: 0.9, changeFrequency: "monthly" },
    { path: "/kibris-gece-hayati", priority: 0.8, changeFrequency: "monthly" },
    { path: "/night-club-katalog", priority: 0.8, changeFrequency: "monthly" },

    { path: "/katalog", priority: 0.9, changeFrequency: "weekly" },
    { path: "/hizmetler", priority: 0.8, changeFrequency: "monthly" },
    { path: "/rehber", priority: 0.8, changeFrequency: "weekly" },
    { path: "/hakkimizda", priority: 0.6, changeFrequency: "yearly" },
    { path: "/iletisim", priority: 0.7, changeFrequency: "yearly" },
  ];

  return [
    ...routes.map(({ path, priority, changeFrequency }) => ({
      url: new URL(path, SITE_URL).toString(),
      lastModified,
      changeFrequency,
      priority,
    })),
    ...BLOG_SLUGS.map((slug) => ({
      url: new URL(`/rehber/${slug}`, SITE_URL).toString(),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
