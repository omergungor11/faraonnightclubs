// Google Ads / GTAG conversion helper injected by the gtag snippet in app/layout.tsx.
export {};

declare global {
  interface Window {
    gtag_report_conversion?: (url?: string) => boolean;
  }
}
