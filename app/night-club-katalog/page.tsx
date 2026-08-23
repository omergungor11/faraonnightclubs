import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Check,
  Clock,
  Crown,
  FileText,
  Lock,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Users,
  Wine,
} from "lucide-react";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbNode, faqNode, graph, webPageNode } from "@/lib/schema";
import { PHONE_DISPLAY, PHONE_E164, waLink } from "@/lib/site";

const PATH = "/night-club-katalog";

const TITLE = "Night Club Katalog | Faraon Güncel Kataloğu";
const DESCRIPTION =
  "Faraon Night Club güncel kataloğu: VIP oda ve masa seçenekleri, mekan görselleri, hizmet paketleri. Katalog talebi ve rezervasyon için WhatsApp hattımız.";

// Single source of truth: this array feeds BOTH the visible accordion and the
// FAQPage markup, so the two cannot drift apart. A markup-only FAQ is a
// manual-action risk.
const FAQS = [
  {
    question: "Night club kataloğu nedir?",
    answer:
      "Night club kataloğu, mekanın alanlarını, oda ve masa tiplerini, hizmet paketlerini ve organizasyon seçeneklerini bir arada gösteren güncel tanıtım dosyasıdır. Katalog sayesinde gelmeden önce hangi alanın size uygun olduğunu, kapasiteleri ve servis kapsamını görebilirsiniz. Faraon Night Club kataloğu sezona göre düzenli olarak güncellenir.",
  },
  {
    question: "Kataloğu nasıl talep edebilirim?",
    answer:
      "Kataloğu WhatsApp hattımızdan talep edebilirsiniz: +90 542 885 75 75. Mesajınızda planladığınız tarihi ve kişi sayısını belirtmeniz yeterlidir; ekibimiz size güncel kataloğu ve o tarihe ait uygunluk bilgisini iletir. Katalog talebi ücretsizdir ve herhangi bir rezervasyon yükümlülüğü doğurmaz.",
  },
  {
    question: "Katalog ücretli mi?",
    answer:
      "Hayır, katalog talebi tamamen ücretsizdir. Kataloğu incelemeniz size hiçbir yükümlülük getirmez; rezervasyon yapıp yapmamak tamamen sizin tercihinizdir. Katalogla birlikte seçtiğiniz alan için güncel fiyat bilgisini de yazılı olarak iletiyoruz, böylece karar vermeden önce toplam maliyeti net şekilde görürsünüz.",
  },
  {
    question: "Katalog ne sıklıkla güncelleniyor?",
    answer:
      "Kataloğumuz sezon başlarında ve mekanda düzenleme yapıldığında güncellenir; pratikte yılda birkaç kez yenilenir. Sitedeki bilgiler her zaman en son sürümü yansıtmayabileceği için, kesin ve güncel bilgi almak isteyen misafirlerimize WhatsApp hattımızdan doğrudan katalog talep etmelerini öneriyoruz.",
  },
  {
    question: "Katalogda fiyatlar yer alıyor mu?",
    answer:
      "Fiyat bilgisi kataloğa sabit olarak basılmaz, çünkü tutar seçtiğiniz alana, kişi sayısına, tarihe ve içecek paketine göre değişir. Katalog talebinizle birlikte tarih ve kişi sayısını iletmeniz halinde, size özel toplam tutarı yazılı olarak bildiriyoruz. Bu yöntem sürpriz maliyetleri tamamen ortadan kaldırır.",
  },
  {
    question: "Özel oda ile VIP masa arasında nasıl seçim yapmalıyım?",
    answer:
      "Seçim önceliğinize göre değişir: mahremiyet ve kendinize ait bir alan istiyorsanız özel oda, genel atmosferin içinde kalıp öncelikli servis istiyorsanız VIP masa daha uygundur. Özel oda genellikle 4 kişi ve üzeri gruplar, kutlamalar ve mahremiyet önceliği olan misafirler için tercih edilir. Kararsız kalırsanız ekibimiz yönlendirir.",
  },
  {
    question: "Rezervasyonumu iptal edebilir miyim?",
    answer:
      "Evet, rezervasyonunuzu belirtilen süre içinde iptal edebilirsiniz. Standart masa rezervasyonlarında aynı gün bilgilendirme yeterlidir. Özel oda ve grup rezervasyonlarında ise ön ödeme alındığı durumlar olabileceğinden, iptal koşulları rezervasyon onayı sırasında size yazılı olarak bildirilir. İptalinizi WhatsApp hattımızdan iletmeniz yeterlidir.",
  },
  {
    question: "Bilgilerim gizli tutuluyor mu?",
    answer:
      "Evet, misafir gizliliği işletmemizin temel ilkesidir. Rezervasyon sırasında paylaştığınız iletişim bilgileri üçüncü taraflarla paylaşılmaz ve pazarlama amacıyla kullanılmaz. Mekan içinde fotoğraf ve video çekimi yasaktır. Ziyaretinize dair hiçbir bilgi kayıt altına alınmaz veya dışarıya aktarılmaz.",
  },
  {
    question: "Katalogdaki görseller gerçek mekana mı ait?",
    answer:
      "Evet, katalogdaki tüm görseller Faraon Night Club'ın kendi mekanında çekilmiştir; stok fotoğraf kullanmıyoruz. Işıklandırma nedeniyle görseller ile mekanın gece görünümü arasında ton farkı olabilir. Alan, kapasite ve düzen açısından katalog birebir gerçeği yansıtır; ek görsel talep ederseniz WhatsApp'tan iletebiliriz.",
  },
  {
    question: "Grup için katalog talep edebilir miyim?",
    answer:
      "Evet, grup organizasyonları için ayrı seçenekler sunuyoruz. Katalog talebinizde kişi sayısını ve organizasyonun türünü (doğum günü, kurumsal etkinlik, bekarlığa veda vb.) belirtmeniz halinde, size uygun oda ve paket seçeneklerini içeren bir öneri hazırlıyoruz. 6 kişi ve üzeri gruplar için en az 48 saat önceden haber vermenizi öneririz.",
  },
];

const AREAS = [
  {
    icon: Sparkles,
    title: "Ana salon",
    description:
      "Sahnenin, DJ kabininin ve genel oturma düzeninin bulunduğu alandır. Katalogda salonun oturma planı, masa yerleşimi ve sahneye olan mesafeler görselleriyle birlikte yer alır. Gecenin genel atmosferini yaşamak isteyen misafirlerimiz için ana salon standart masa düzeniyle sunulur.",
  },
  {
    icon: Crown,
    title: "VIP masa bölümü",
    description:
      "Ana salondan ayrılmış, sahneye hakim ve daha korunaklı bir bölümdür. Katalogda VIP bölümün konumu, masa aralıkları ve öncelikli servis kapsamı açıklanır. Genel atmosferin içinde kalmak ama daha rahat bir alanda oturmak isteyen misafirler için tasarlanmıştır.",
  },
  {
    icon: Lock,
    title: "Özel odalar",
    description:
      "Kendi girişi, kendi servisi ve dışarıdan görünmeyen kapalı bir düzeni olan alanlardır. Katalog her odanın kapasitesini, oturma düzenini ve servis kapsamını ayrı ayrı gösterir. Kutlamalar ve mahremiyet önceliği olan misafirler için en uygun seçenektir.",
  },
  {
    icon: Wine,
    title: "Bar ve lounge alanı",
    description:
      "Gecenin erken saatleri ve tek kişilik ziyaretler için uygun, daha serbest bir alandır. Katalogda bar hattı, lounge oturma grupları ve içecek menüsünün kapsamı gösterilir. Masaya geçmeden önce mekanı tanımak isteyen misafirler genellikle burada başlar.",
  },
];

export const metadata: Metadata = {
  title: { absolute: "Night Club Katalog | Faraon Güncel Kataloğu" },
  description: DESCRIPTION,
  keywords: [
    "night club katalog",
    "night club kataloğu",
    "gece kulübü katalog",
    "kıbrıs night club katalog",
    "faraon katalog",
    "night club katalog talep",
    "güncel night club katalog",
    "night club vip oda görselleri",
    "night club mekan galerisi",
    "night club katalog whatsapp",
    "night club paket seçenekleri",
    "gece kulübü hizmet kataloğu",
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
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Faraon Night Club Kıbrıs",
      },
    ],
  },
};

function CtaStrip({
  heading,
  body,
  buttonLabel,
  waText,
}: {
  heading: string;
  body: string;
  buttonLabel: string;
  waText: string;
}) {
  return (
    <div className="max-w-4xl mx-auto p-6 md:p-8 rounded-2xl bg-card border border-gold/30">
      <div className="flex flex-col md:flex-row md:items-center gap-6">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-foreground mb-2">
            {heading}
          </h3>
          <p className="text-muted-foreground leading-relaxed">{body}</p>
        </div>
        <div className="shrink-0">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <a href={waLink(waText)} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5 mr-2" />
              {buttonLabel}
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function NightClubKatalogPage() {
  return (
    <article className="pt-20">
      <JsonLd
        id="ld-night-club-katalog"
        data={graph(
          webPageNode({
            path: PATH,
            type: "CollectionPage",
            name: TITLE,
            description: DESCRIPTION,
            image: "/images/hero-main.jpg",
            hasFaq: true,
          }),
          breadcrumbNode(PATH, [
            { name: "Ana Sayfa", path: "/" },
            { name: "Night Club Katalog" },
          ]),
          faqNode(PATH, FAQS),
        )}
      />

      <nav aria-label="Breadcrumb" className="container mx-auto px-4 pt-8">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          <li>
            <Link href="/" className="hover:text-gold transition-colors">
              Ana Sayfa
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-gold">Night Club Katalog</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,69,69,0.15),transparent_50%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gold text-sm font-medium uppercase tracking-wider mb-3">
              Faraon Night Club
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient-gold">
                Faraon Night Club Kataloğu
              </span>
              <br />
              <span className="text-foreground">
                Mekan, Oda ve Hizmet Seçenekleri
              </span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-8 max-w-3xl mx-auto">
              Faraon Night Club kataloğu; ana salonun, VIP masa bölümünün, özel
              odaların ve bar-lounge alanının düzenini, kapasitesini ve servis
              kapsamını tek dosyada gösteren güncel tanıtım belgesidir. Kataloğu
              WhatsApp hattımızdan ücretsiz talep edebilir, planladığınız tarih
              ve kişi sayısı için uygunluk bilgisini yazılı olarak
              alabilirsiniz.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <a
                  href={waLink(
                    "Merhaba, Faraon Night Club güncel kataloğunu almak istiyorum.",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Güncel Kataloğu İsteyin
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-gold/50 text-gold hover:bg-gold/10 bg-transparent"
              >
                <a href={`tel:${PHONE_E164}`}>
                  <Phone className="w-5 h-5 mr-2" />
                  {PHONE_DISPLAY}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Katalog nedir */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2
              id="night-club-katalogu-nedir"
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              <span className="text-foreground">Night club kataloğu</span>{" "}
              <span className="text-gradient-gold">nedir, ne içerir?</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Night club kataloğu, bir mekanın alanlarını, masa ve oda
              tiplerini, kapasitelerini ve hizmet paketlerini tek dosyada
              toplayan güncel tanıtım belgesidir. Katalog dört başlık üzerine
              kurulur: alanların tanıtımı, her alanın kapasitesi, servis
              kapsamı ve organizasyon seçenekleri. Fiyat bilgisi kataloğa sabit
              olarak basılmaz; tutar tarihe, kişi sayısına ve seçilen içecek
              paketine göre değiştiği için talep sırasında ayrıca yazılı olarak
              iletilir.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Kataloğun amacı beklentiyi önceden netleştirmektir. Mekana
              geldikten sonra &laquo;burası bize uygun değilmiş&raquo; demek
              yerine, hangi alanın kaç kişilik olduğunu ve servisin neyi
              kapsadığını daha rezervasyon aşamasında görürsünüz. İşletmenin
              genel yaklaşımı ve çalışma prensipleri için{" "}
              <Link
                href="/night-club"
                className="text-gold underline underline-offset-4 hover:text-gold-light transition-colors"
              >
                Faraon Night Club hakkında
              </Link>{" "}
              sayfasını inceleyebilirsiniz.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-8">
              Faraon Night Club kataloğunda yer alan başlıklar
            </h3>
            <ul className="space-y-3 mb-6">
              {[
                "Ana salon, VIP masa bölümü, özel odalar ve bar-lounge alanının mekan görselleri",
                "Her alanın kapasitesi ve oturma düzeni: kaç kişi rahatça oturur, masalar nasıl birleştirilir",
                "Servis kapsamı: masaya servis, öncelikli servis ve özel odaya ayrılmış servis arasındaki fark",
                "Hizmet paketlerinin içeriği ve hangi paketin hangi grup büyüklüğüne uygun olduğu",
                "Doğum günü, kurumsal etkinlik ve bekarlığa veda gibi organizasyonlarda yapılabilen düzenlemeler",
                "Rezervasyon, ön bildirim süreleri ve iptal koşullarının özeti",
                "Çalışma saatleri ve yoğun saat aralıkları",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-muted-foreground leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12">
            <CtaStrip
              heading="Kataloğu birkaç dakika içinde alın"
              body="Tarih ve kişi sayısını yazmanız yeterli; güncel kataloğu ve o tarihe ait uygunluk bilgisini WhatsApp üzerinden yazılı olarak iletiyoruz."
              buttonLabel="Katalog Talep Et"
              waText="Merhaba, güncel katalog ve uygunluk bilgisi rica ediyorum."
            />
          </div>
        </div>
      </section>

      {/* Mekan kataloğu */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2
              id="mekan-katalogumuzda-neler-var"
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              <span className="text-foreground">Mekan kataloğumuzda</span>{" "}
              <span className="text-gradient-gold">neler var?</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Faraon Night Club mekan kataloğu dört alan üzerine kuruludur: ana
              salon, VIP masa bölümü, özel odalar ve bar-lounge alanı. Her alan
              katalogda kendi görselleri, kapasitesi ve servis tanımıyla ayrı
              bir bölüm olarak sunulur. Katalog mekanı tanıtır; kişileri değil,
              alanları ve hizmeti anlatır.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Kuzey Kıbrıs&apos;taki farklı mekanları bir arada görmek
              istiyorsanız{" "}
              <Link
                href="/katalog"
                className="text-gold underline underline-offset-4 hover:text-gold-light transition-colors"
              >
                kulüp kataloğumuz
              </Link>{" "}
              ayrı bir sayfada listelenir. Bu sayfadaki katalog ise yalnızca
              Faraon Night Club&apos;ın kendi alanlarını, odalarını ve hizmet
              paketlerini kapsar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {AREAS.map((area) => (
              <div
                key={area.title}
                className="p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-gold/50 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <area.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {area.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <CtaStrip
              heading="Hangi alan size uygun, birlikte belirleyelim"
              body="Kişi sayınızı ve gecenin amacını yazın; ana salon, VIP masa ve özel oda arasından size en uygun alanı önerelim."
              buttonLabel="Alan Önerisi Alın"
              waText="Merhaba, kişi sayımıza uygun alan önerisi ve katalog rica ediyorum."
            />
          </div>
        </div>
      </section>

      {/* Hizmet paketleri */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-10">
            <h2
              id="hizmet-paketleri-neleri-kapsar"
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              <span className="text-foreground">Hizmet paketleri</span>{" "}
              <span className="text-gradient-gold">neleri kapsar?</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Faraon Night Club kataloğunda dört hizmet paketi yer alır: saatlik
              program, gece programı, özel oda paketi ve grup organizasyon
              paketi. Paketler birbirinden üç şeyle ayrılır — mekanda geçirilen
              süre, kullanılan alan tipi ve servisin kapsamı. Aşağıdaki tablo
              paketlerin yapısını gösterir; tutarlar tarihe ve kişi sayısına
              göre değiştiği için katalog talebinizde ayrıca yazılı olarak
              iletilir.
            </p>
          </div>

          <div className="max-w-6xl mx-auto overflow-x-auto rounded-2xl border border-border">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <caption className="sr-only">
                Faraon Night Club hizmet paketlerinin kapsamı, uygun olduğu
                grup ve ön bildirim süresi
              </caption>
              <thead className="bg-muted/50">
                <tr>
                  <th
                    scope="col"
                    className="px-5 py-4 text-sm font-semibold text-gold"
                  >
                    Paket
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-4 text-sm font-semibold text-gold"
                  >
                    Kapsam
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-4 text-sm font-semibold text-gold"
                  >
                    Uygun olduğu misafir
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-4 text-sm font-semibold text-gold"
                  >
                    Ön bildirim
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-border">
                  <th
                    scope="row"
                    className="px-5 py-4 text-sm font-medium text-foreground"
                  >
                    Saatlik program
                  </th>
                  <td className="px-5 py-4 text-sm text-muted-foreground">
                    Ana salonda standart masa, sahne performansı ve masaya
                    içecek servisi
                  </td>
                  <td className="px-5 py-4 text-sm text-muted-foreground">
                    Kısa süreli ziyaret, mekanı ilk kez görenler
                  </td>
                  <td className="px-5 py-4 text-sm text-muted-foreground">
                    Aynı gün mümkün
                  </td>
                </tr>
                <tr className="border-t border-border">
                  <th
                    scope="row"
                    className="px-5 py-4 text-sm font-medium text-foreground"
                  >
                    Gece programı
                  </th>
                  <td className="px-5 py-4 text-sm text-muted-foreground">
                    Kapanışa kadar erişim, VIP masa alanı, öncelikli servis ve
                    içecek paketi
                  </td>
                  <td className="px-5 py-4 text-sm text-muted-foreground">
                    Tüm geceyi planlayan 2-6 kişilik gruplar
                  </td>
                  <td className="px-5 py-4 text-sm text-muted-foreground">
                    Hafta sonu için 1-2 gün önce
                  </td>
                </tr>
                <tr className="border-t border-border">
                  <th
                    scope="row"
                    className="px-5 py-4 text-sm font-medium text-foreground"
                  >
                    Özel oda paketi
                  </th>
                  <td className="px-5 py-4 text-sm text-muted-foreground">
                    Kapalı özel oda, odaya ayrılmış servis ekibi ve özel içecek
                    düzeni
                  </td>
                  <td className="px-5 py-4 text-sm text-muted-foreground">
                    Mahremiyet önceliği olan misafirler ve kutlamalar
                  </td>
                  <td className="px-5 py-4 text-sm text-muted-foreground">
                    En az 48 saat önce
                  </td>
                </tr>
                <tr className="border-t border-border">
                  <th
                    scope="row"
                    className="px-5 py-4 text-sm font-medium text-foreground"
                  >
                    Grup ve organizasyon paketi
                  </th>
                  <td className="px-5 py-4 text-sm text-muted-foreground">
                    Birleştirilmiş masa veya özel oda, pasta ve dekorasyon
                    düzenlemesi, ulaşım koordinasyonu
                  </td>
                  <td className="px-5 py-4 text-sm text-muted-foreground">
                    6 kişi ve üzeri gruplar, kurumsal etkinlikler
                  </td>
                  <td className="px-5 py-4 text-sm text-muted-foreground">
                    En az 48 saat önce
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="max-w-4xl mx-auto mt-8">
            <p className="text-muted-foreground text-lg leading-relaxed">
              Paketler sabit kalıplar değildir. İçecek tercihinizi, oturma
              düzeninizi veya kutlama düzenlemenizi değiştirmek isterseniz
              katalog talebinizde belirtmeniz yeterlidir. Transfer
              koordinasyonu, konaklama desteği ve özel organizasyon planlaması
              dahil{" "}
              <Link
                href="/hizmetler"
                className="text-gold underline underline-offset-4 hover:text-gold-light transition-colors"
              >
                tüm hizmetlerimiz
              </Link>{" "}
              rezervasyon sırasında birlikte planlanabilir.
            </p>
          </div>
        </div>
      </section>

      {/* Alan tipi karşılaştırma */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-10">
            <h2
              id="alan-tiplerini-nasil-karsilastirabilirim"
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              <span className="text-foreground">Alan tiplerini</span>{" "}
              <span className="text-gradient-gold">
                nasıl karşılaştırabilirim?
              </span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Alan tiplerini dört ölçüte bakarak karşılaştırabilirsiniz:
              kapasite, mahremiyet düzeyi, servis düzeyi ve uygun olduğu durum.
              Faraon Night Club&apos;ta bu dört ölçüt bar-lounge alanından özel
              odaya doğru kademeli olarak yükselir; kapasite arttıkça değil,
              alan kapandıkça mahremiyet artar. Aşağıdaki tablo katalogdaki
              karşılaştırmanın özetidir.
            </p>
          </div>

          <div className="max-w-6xl mx-auto overflow-x-auto rounded-2xl border border-border">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <caption className="sr-only">
                Faraon Night Club alan tiplerinin kapasite, mahremiyet, servis
                düzeyi ve kullanım amacına göre karşılaştırması
              </caption>
              <thead className="bg-muted/50">
                <tr>
                  <th
                    scope="col"
                    className="px-5 py-4 text-sm font-semibold text-gold"
                  >
                    Alan tipi
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-4 text-sm font-semibold text-gold"
                  >
                    Kapasite
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-4 text-sm font-semibold text-gold"
                  >
                    Mahremiyet
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-4 text-sm font-semibold text-gold"
                  >
                    Servis düzeyi
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-4 text-sm font-semibold text-gold"
                  >
                    Uygun olduğu durum
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-border">
                  <th
                    scope="row"
                    className="px-5 py-4 text-sm font-medium text-foreground"
                  >
                    Bar ve lounge
                  </th>
                  <td className="px-5 py-4 text-sm text-muted-foreground">
                    Tek kişi veya çift
                  </td>
                  <td className="px-5 py-4 text-sm text-muted-foreground">
                    Açık alan
                  </td>
                  <td className="px-5 py-4 text-sm text-muted-foreground">
                    Bar servisi
                  </td>
                  <td className="px-5 py-4 text-sm text-muted-foreground">
                    Erken saatler, kısa ziyaret, tek başına gelenler
                  </td>
                </tr>
                <tr className="border-t border-border">
                  <th
                    scope="row"
                    className="px-5 py-4 text-sm font-medium text-foreground"
                  >
                    Standart masa
                  </th>
                  <td className="px-5 py-4 text-sm text-muted-foreground">
                    Genellikle 2-4 kişi
                  </td>
                  <td className="px-5 py-4 text-sm text-muted-foreground">
                    Ana salonun içinde
                  </td>
                  <td className="px-5 py-4 text-sm text-muted-foreground">
                    Masaya servis
                  </td>
                  <td className="px-5 py-4 text-sm text-muted-foreground">
                    Genel atmosferi yaşamak isteyenler, ilk ziyaret
                  </td>
                </tr>
                <tr className="border-t border-border">
                  <th
                    scope="row"
                    className="px-5 py-4 text-sm font-medium text-foreground"
                  >
                    VIP masa
                  </th>
                  <td className="px-5 py-4 text-sm text-muted-foreground">
                    Genellikle 4-6 kişi
                  </td>
                  <td className="px-5 py-4 text-sm text-muted-foreground">
                    Ayrılmış bölge
                  </td>
                  <td className="px-5 py-4 text-sm text-muted-foreground">
                    Öncelikli servis
                  </td>
                  <td className="px-5 py-4 text-sm text-muted-foreground">
                    Sahneye yakın oturmak ve rahat alan isteyen gruplar
                  </td>
                </tr>
                <tr className="border-t border-border">
                  <th
                    scope="row"
                    className="px-5 py-4 text-sm font-medium text-foreground"
                  >
                    Özel oda
                  </th>
                  <td className="px-5 py-4 text-sm text-muted-foreground">
                    Genellikle 4 kişi ve üzeri
                  </td>
                  <td className="px-5 py-4 text-sm text-muted-foreground">
                    Tamamen kapalı
                  </td>
                  <td className="px-5 py-4 text-sm text-muted-foreground">
                    Odaya ayrılmış servis
                  </td>
                  <td className="px-5 py-4 text-sm text-muted-foreground">
                    Kutlamalar, kurumsal ağırlama, mahremiyet önceliği
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-12">
            <CtaStrip
              heading="Özel oda uygunluğunu anında sorun"
              body="Özel odalar sınırlı sayıdadır ve hafta sonları erken dolar. Planladığınız tarihi yazın, oda uygunluğunu hemen kontrol edelim."
              buttonLabel="Oda Uygunluğu Sorun"
              waText="Merhaba, belirttiğim tarih için özel oda uygunluğunu öğrenmek istiyorum."
            />
          </div>
        </div>
      </section>

      {/* Katalog talebi süreci */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2
              id="katalogu-nasil-talep-edersiniz"
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              <span className="text-foreground">Kataloğu</span>{" "}
              <span className="text-gradient-gold">nasıl talep edersiniz?</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Katalog talebi üç adımda tamamlanır ve ücretsizdir. WhatsApp
              hattımıza yazarsınız, planladığınız tarihi ve kişi sayısını
              belirtirsiniz, ekibimiz güncel kataloğu ve o tarihe özel teklifi
              yazılı olarak iletir. Katalog talep etmeniz herhangi bir
              rezervasyon yükümlülüğü doğurmaz.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {[
                {
                  step: "1",
                  title: "WhatsApp hattına yazın",
                  text: "Faraon Night Club WhatsApp hattı gün içinde ve mekan açıkken aktiftir. Tek bir mesaj yeterlidir; form doldurmanız veya kayıt oluşturmanız gerekmez.",
                },
                {
                  step: "2",
                  title: "Tarih ve kişi sayısını belirtin",
                  text: "Planladığınız gece, kaç kişi olacağınız ve varsa organizasyon türü, size doğru alanı ve doğru paketi önerebilmemiz için gereken tek bilgidir.",
                },
                {
                  step: "3",
                  title: "Güncel kataloğu ve teklifi alın",
                  text: "Size güncel kataloğu, o tarihe ait uygunluk durumunu ve seçtiğiniz alan için toplam tutarı yazılı olarak iletiyoruz. Yazılı teyit sürpriz maliyeti ortadan kaldırır.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="p-6 rounded-2xl bg-card border border-border hover:border-gold/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-gold text-lg font-bold">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-8">
              Neden telefon yerine WhatsApp?
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              WhatsApp üç somut avantaj sağlar. Birincisi hız: mesajınıza mekan
              açıkken dakikalar içinde dönüş yapılır. İkincisi yazılı kayıt:
              masa tipi, kişi sayısı ve toplam tutar konuşulup unutulmaz,
              telefonunuzda durur. Üçüncüsü mahremiyet: kalabalık bir ortamda
              telefonla konuşmadan, sessizce yazışarak planınızı
              netleştirirsiniz. Telefonla rezervasyonu tercih ederseniz{" "}
              {PHONE_DISPLAY} numaramız da açıktır.
            </p>
          </div>

          <div className="mt-12">
            <CtaStrip
              heading="Katalog talebi ücretsiz ve yükümlülüksüzdür"
              body="İncelemek için rezervasyon yapmanız gerekmez. Kataloğu görün, kararınızı sonra verin."
              buttonLabel="Kataloğu Gönderin"
              waText="Merhaba, katalog talebimi iletmek istiyorum."
            />
          </div>
        </div>
      </section>

      {/* Katalog güncelleme */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2
              id="katalog-neden-duzenli-guncellenir"
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              <span className="text-foreground">Katalog neden</span>{" "}
              <span className="text-gradient-gold">düzenli güncellenir?</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Katalog, mekanda ve sezonda değişen her şeyi yansıtmak için
              güncellenir; pratikte yılda birkaç kez yenilenir. Değişimin üç
              kaynağı vardır: sezon geçişleri, mekan içi düzenlemeler ve
              paketlerin kapsamındaki güncellemeler. Bu nedenle elinizdeki eski
              bir katalog, bugünkü düzeni doğru göstermeyebilir.
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "Sezon geçişleri: yaz ve kış dönemlerinde salon düzeni, program yoğunluğu ve içecek menüsü farklılaşır.",
                "Mekan düzenlemeleri: masa yerleşimi değiştiğinde veya bir alan yenilendiğinde katalog görselleri yeniden çekilir.",
                "Paket kapsamı: içecek paketlerinin içeriği ve organizasyon düzenlemeleri dönemsel olarak güncellenir.",
                "Yoğunluk takvimi: resmi tatiller ve özel gecelerde uygunluk ve ön bildirim süreleri değişebilir.",
                "Kapasite bilgisi: oturma düzeninde yapılan değişiklikler alan kapasitelerini etkileyebilir.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-muted-foreground leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Web sitesindeki bilgiler her zaman en son sürümü yansıtmayabilir.
              Kesin bilgi almak isteyen misafirlerimize kataloğu doğrudan
              WhatsApp hattımızdan talep etmelerini öneririz; hattan gönderilen
              dosya her zaman yürürlükteki sürümdür.
            </p>
          </div>
        </div>
      </section>

      {/* Rezervasyon ve ödeme koşulları */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2
              id="rezervasyon-ve-odeme-kosullari"
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              <span className="text-foreground">
                Rezervasyon ve ödeme koşulları
              </span>{" "}
              <span className="text-gradient-gold">nelerdir?</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Rezervasyon yazılı teyitle kesinleşir, ödeme mekanda nakit veya
              kredi kartıyla yapılır ve toplam tutar siz gelmeden önce
              tarafınıza bildirilir. Faraon Night Club&apos;ta ödeme para birimi
              Türk Lirası&apos;dır. Bu düzenin tek amacı vardır: hesabın mekanda
              değil, rezervasyon anında netleşmesi.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-8">
              Rezervasyon koşulları
            </h3>
            <ul className="space-y-3 mb-6">
              {[
                "Rezervasyon; tarih, kişi sayısı ve alan tipi belirlendikten sonra yazılı teyitle kesinleşir.",
                "Hafta içi için aynı gün rezervasyon genellikle mümkündür; hafta sonu için 1-2 gün önceden iletişim öneririz.",
                "Özel oda talepleri ve 6 kişi üzeri gruplar için en az 48 saat önceden haber verilmesi gerekir.",
                "Rezervasyon saatinizde 30 dakikadan uzun gecikme olacaksa WhatsApp hattından bilgi vermeniz masanızın korunmasını sağlar.",
                "Giriş 18 yaş ve üzeri misafirlere açıktır; girişte geçerli kimlik veya pasaport ibrazı zorunludur.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-muted-foreground leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-8">
              İptal ve ödeme
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Standart masa rezervasyonlarında aynı gün bilgilendirme yapmanız
              iptal için yeterlidir. Özel oda ve grup rezervasyonlarında ön
              ödeme alındığı durumlar olabileceğinden, iptal koşulları
              rezervasyon onayı sırasında size yazılı olarak bildirilir; sonradan
              değişen bir koşul uygulanmaz. Kurumsal organizasyonlar için ön
              ödeme veya fatura düzenlemesi yapılabilir. Yaş sınırı, kıyafet
              kuralı ve mekan içi kurallar dahil{" "}
              <Link
                href="/night-club"
                className="text-gold underline underline-offset-4 hover:text-gold-light transition-colors"
              >
                giriş şartları ve mekan kuralları
              </Link>{" "}
              rezervasyon teyidiyle birlikte tekrar hatırlatılır.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              {[
                {
                  icon: Clock,
                  title: "Pazartesi - Perşembe, Pazar",
                  text: "21:00 - 04:00",
                },
                {
                  icon: Clock,
                  title: "Cuma - Cumartesi",
                  text: "21:00 - 06:00",
                },
                {
                  icon: Users,
                  title: "En yoğun saat aralığı",
                  text: "00:00 - 03:00",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-6 rounded-xl bg-card border border-border text-center"
                >
                  <item.icon className="w-7 h-7 text-gold mx-auto mb-3" />
                  <p className="text-sm text-muted-foreground mb-1">
                    {item.title}
                  </p>
                  <p className="text-lg font-semibold text-foreground">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <CtaStrip
              heading="Toplam tutarı gelmeden önce öğrenin"
              body="Tarih, kişi sayısı ve alan tipini yazın; size özel toplam tutarı yazılı olarak iletelim."
              buttonLabel="Yazılı Teklif Alın"
              waText="Merhaba, tarih ve kişi sayımıza göre yazılı teklif rica ediyorum."
            />
          </div>
        </div>
      </section>

      {/* Gizlilik */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2
              id="gizlilik-taahhudumuz"
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              <span className="text-foreground">Gizlilik taahhüdümüz</span>{" "}
              <span className="text-gradient-gold">nedir?</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Gizlilik taahhüdümüz üç somut kuraldan oluşur: misafir bilgileri
              kayıt altına alınmaz, iletişim bilgileri üçüncü taraflarla
              paylaşılmaz ve mekan içinde fotoğraf ile video çekimi yasaktır. Bu
              kurallar Faraon Night Club&apos;ta tercihe bağlı bir hizmet değil,
              işletmenin çalışma esasıdır ve personel tarafından aktif olarak
              uygulanır.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Bu kategoride misafirin en çok tereddüt ettiği konu, bir gecenin
              kaydının bir yerde kalması ihtimalidir. Bu nedenle gizliliği
              genel bir vaat olarak değil, madde madde tanımlıyoruz — böylece
              neyin yapılmadığını da açıkça görürsünüz.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: Lock,
                  title: "Ziyaret kaydı tutulmaz",
                  text: "Kim, ne zaman geldi bilgisi bir müşteri veritabanına işlenmez. Rezervasyon bilgileri o gecenin organizasyonu için kullanılır ve arşivlenmez. Geçmiş ziyaretlerinize dair sorgulanabilir bir kayıt tutmuyoruz.",
                },
                {
                  icon: ShieldCheck,
                  title: "İletişim bilgileri paylaşılmaz",
                  text: "Rezervasyon sırasında verdiğiniz telefon numarası ve isim üçüncü taraflarla, reklam ağlarıyla veya iş ortaklarıyla paylaşılmaz. Toplu pazarlama mesajı listesine eklenmezsiniz; sizden onay almadan tanıtım mesajı göndermiyoruz.",
                },
                {
                  icon: FileText,
                  title: "Mekan içinde çekim yasaktır",
                  text: "Fotoğraf ve video çekimi tüm misafirlerin mahremiyetini korumak için yasaktır ve kural personel tarafından takip edilir. Doğum günü gibi bir kutlama için görsel kayıt talebiniz varsa rezervasyon aşamasında iletin; uygun koşullarda kontrollü bir düzenleme yapılabilir.",
                },
                {
                  icon: Crown,
                  title: "Özel odada tam mahremiyet",
                  text: "Özel odalar dışarıdan görünmez ve odaya yalnızca görevli servis ekibi girer. Kapalı düzen, kurumsal ağırlama ve mahremiyet önceliği olan misafirler için kataloğun en çok talep edilen bölümüdür.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-gold/50 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <item.icon className="w-7 h-7 text-gold" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <CtaStrip
              heading="Gizlilik önceliğiniz mi? Özel odaları konuşalım"
              body="Kapalı düzen, ayrı servis ve dışarıdan görünmeyen alan. Katalogdaki özel oda bölümünü size ayrıca iletebiliriz."
              buttonLabel="Özel Oda Kataloğu"
              waText="Merhaba, özel oda seçeneklerini ve katalog bölümünü rica ediyorum."
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Karşılaştırma yapmak ve bölge bölge{" "}
              <Link
                href="/kibris-night-club"
                className="text-gold underline underline-offset-4 hover:text-gold-light transition-colors"
              >
                Kıbrıs night club seçenekleri
              </Link>{" "}
              hakkında bilgi almak isterseniz rehber sayfamızı
              inceleyebilirsiniz. Aşağıda ise katalogla ilgili en sık aldığımız
              sorular yer alıyor.
            </p>

            <h2
              id="sik-sorulan-sorular"
              className="text-3xl md:text-4xl font-bold mb-8"
            >
              <span className="text-foreground">Sık</span>{" "}
              <span className="text-gradient-gold">Sorulan Sorular</span>
            </h2>

            <Accordion type="single" collapsible className="w-full">
              {FAQS.map((faq, i) => (
                <AccordionItem
                  key={faq.question}
                  value={`item-${i}`}
                  className="border-border"
                >
                  <AccordionTrigger className="text-left text-foreground hover:text-gold text-base md:text-lg font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2
              id="katalog-talebi"
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              <span className="text-gradient-gold">Katalog talebi</span>{" "}
              <span className="text-foreground">ve rezervasyon</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Faraon Night Club güncel kataloğunu almak için WhatsApp hattımıza
              planladığınız tarihi ve kişi sayısını yazmanız yeterlidir. Katalog
              talebi ücretsizdir, yükümlülük doğurmaz ve size aynı mesajda
              uygunluk bilgisiyle birlikte iletilir. Telefonla ulaşmak
              isterseniz {PHONE_DISPLAY} numaramız haftanın yedi günü açıktır.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <a
                  href={waLink(
                    "Merhaba, Faraon Night Club güncel kataloğunu ve rezervasyon bilgisi almak istiyorum.",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp ile Ulaşın
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-gold/50 text-gold hover:bg-gold/10 bg-transparent"
              >
                <a href={`tel:${PHONE_E164}`}>
                  <Phone className="w-5 h-5 mr-2" />
                  {PHONE_DISPLAY}
                </a>
              </Button>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Ulaşım planlaması, transfer koordinasyonu ve{" "}
              <Link
                href="/iletisim"
                className="text-gold underline underline-offset-4 hover:text-gold-light transition-colors"
              >
                konum ve ulaşım bilgileri
              </Link>{" "}
              için iletişim sayfamızdan bize yazabilirsiniz.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
