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
 * Regular opening hours: every day, 08:00 to 01:00 the following morning.
 * `closes` earlier than `opens` denotes an overnight span and is valid
 * schema.org — do not "fix" it.
 */
export const OPENING_HOURS = [
  {
    days: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    daysTr: "Her gün",
    opens: "08:00",
    closes: "01:00",
  },
] as const;

/**
 * Night programmes run outside the regular hours for guests who have booked
 * one — typically starting around 01:00 and running to about 07:00, but the
 * times move with the booking.
 *
 * Deliberately NOT part of OPENING_HOURS: they are variable, and encoding
 * variable hours as a fixed `openingHoursSpecification` would make the markup
 * contradict reality. Describe them in visible copy instead.
 */
export const NIGHT_PROGRAM = {
  opens: "01:00",
  closes: "07:00",
  noteTr:
    "Program rezervasyonu yapan misafirler için düzenlenen gece programları genellikle 01:00 civarında başlayıp sabah 07:00'ye kadar sürer. Saatler programa ve rezervasyona göre değişir.",
} as const;

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
  addressLocality: "Alayköy",
  addressRegion: "Lefkoşa",
  postalCode: "",
  addressCountry: "CY",
} as const;

/**
 * Village-level coordinates for Alayköy (Lefkoşa district), not a surveyed pin
 * on the building.
 *
 * TODO: replace with the venue's exact Google Maps coordinates. Google cross-
 * checks `geo` against the Business Profile, so a centroid a few hundred
 * metres off is tolerable but the exact pin is better.
 */
export const GEO: { latitude: number; longitude: number } | null = {
  latitude: 35.1667,
  longitude: 33.2333,
};

/** Verified social/profile URLs only. An invented profile URL is a spam signal. */
export const SAME_AS: string[] = [];

/** Home region first. */
export const AREA_SERVED = [
  "Lefkoşa",
  "Girne",
  "Gazimağusa",
  "İskele",
  "Güzelyurt",
] as const;
