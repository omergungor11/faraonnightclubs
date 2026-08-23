/**
 * Single source of truth for site-wide identity, NAP (name/address/phone) and
 * opening hours.
 *
 * Everything that renders these values — the header, the footer, the contact
 * page, and the JSON-LD graph — imports from here. That is deliberate: Google
 * treats structured data that contradicts the visible page as a markup/content
 * mismatch, and before this file the site stated three different sets of
 * opening hours in three different places.
 */

export const SITE_URL = "https://faraonnightclubs.com";

export const SITE_NAME = "Faraon Night Club";

export const PHONE_DISPLAY = "+90 542 885 75 75";
/** E.164, for tel: links and schema.org `telephone`. */
export const PHONE_E164 = "+905428857575";
/** Digits only, for wa.me links. */
export const PHONE_WHATSAPP = "905428857575";

export const EMAIL = "info@faraonnightclubs.com";

export function waLink(text?: string): string {
  const base = `https://wa.me/${PHONE_WHATSAPP}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

/**
 * Opening hours. `closes` earlier than `opens` denotes an overnight span and is
 * valid schema.org — do not "fix" it.
 */
export const OPENING_HOURS = [
  {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Sunday"],
    daysTr: "Pazartesi - Perşembe, Pazar",
    opens: "21:00",
    closes: "04:00",
  },
  {
    days: ["Friday", "Saturday"],
    daysTr: "Cuma - Cumartesi",
    opens: "21:00",
    closes: "06:00",
  },
] as const;

/**
 * Address and geo coordinates.
 *
 * `streetAddress`, `postalCode`, `geo` and `sameAs` are intentionally left
 * empty: schema.org properties with placeholder or invented values are worse
 * than absent ones, and fabricated `sameAs` profiles are a spam signal. The
 * schema builders in `lib/schema.ts` omit any property that is empty here, so
 * filling these in is the only step needed to activate them.
 */
export const ADDRESS = {
  streetAddress: "",
  addressLocality: "Girne",
  addressRegion: "Girne",
  postalCode: "",
  addressCountry: "CY",
} as const;

export const GEO: { latitude: number; longitude: number } | null = null;

/** Verified social/profile URLs only. An invented profile URL is a spam signal. */
export const SAME_AS: string[] = [];

export const AREA_SERVED = [
  "Girne",
  "Lefkoşa",
  "Gazimağusa",
  "İskele",
  "Güzelyurt",
] as const;
