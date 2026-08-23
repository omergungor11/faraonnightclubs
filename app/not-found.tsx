import type { Metadata } from "next";
import Link from "next/link";
import { Home, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { waLink } from "@/lib/site";

/**
 * Without this file Next renders its unstyled built-in 404 — no header, no
 * footer, no CTA. It also used to inherit the root canonical, which told
 * Google the 404 page was a duplicate of the homepage.
 */
export const metadata: Metadata = {
  title: "Sayfa Bulunamadı",
  robots: { index: false, follow: true },
};

const LINKS = [
  { href: "/kibris-night-club", label: "Kıbrıs Night Club Rehberi" },
  { href: "/night-club", label: "Faraon Night Club" },
  { href: "/night-club-katalog", label: "Night Club Katalog" },
  { href: "/kibris-gece-hayati", label: "Kıbrıs Gece Hayatı" },
  { href: "/hizmetler", label: "Hizmetlerimiz" },
  { href: "/iletisim", label: "İletişim" },
];

export default function NotFound() {
  return (
    <article className="pt-20">
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,69,69,0.15),transparent_50%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-gold text-sm font-medium uppercase tracking-wider mb-3">
              404
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient-gold">Sayfa</span>{" "}
              <span className="text-foreground">Bulunamadı</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Aradığınız sayfa taşınmış veya kaldırılmış olabilir. Aşağıdaki
              bağlantılardan devam edebilir ya da doğrudan bize
              yazabilirsiniz.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Link href="/">
                  <Home className="w-5 h-5 mr-2" />
                  Ana Sayfaya Dön
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-gold/50 text-gold hover:bg-gold/10 bg-transparent"
              >
                <a
                  href={waLink("Merhaba, bilgi almak istiyorum.")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp ile Ulaşın
                </a>
              </Button>
            </div>

            <nav aria-label="Site bağlantıları">
              <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
                {LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </article>
  );
}
