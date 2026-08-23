import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Crown,
  Star,
  Music,
  Users,
  Clock,
  Sparkles,
  ArrowRight,
  MessageCircle,
  Check,
  Phone,
} from "lucide-react"
import Link from "next/link"
import { JsonLd } from "@/components/seo/json-ld"
import { breadcrumbNode, faqNode, graph, webPageNode } from "@/lib/schema"
import { PHONE_DISPLAY, PHONE_E164, waLink } from "@/lib/site"

const PATH = "/night-club"

const TITLE = "Faraon Night Club | VIP Rezervasyon ve Gece Eğlencesi"
const DESCRIPTION =
  "Faraon Night Club: VIP masa ve özel oda rezervasyonu, profesyonel servis, gizlilik. Giriş şartları, çalışma saatleri ve rezervasyon için WhatsApp hattımız açık."

const LINK = "text-gold underline underline-offset-4 hover:text-gold-light transition-colors"

// Single source of truth: this array feeds BOTH the visible accordion and the
// FAQPage markup, so the two cannot drift apart.
const FAQS = [
  {
    question: "Faraon Night Club'a nasıl rezervasyon yapabilirim?",
    answer:
      "Rezervasyon için en hızlı yol WhatsApp hattımızdır: +90 542 885 75 75. Mesajınızda tarih, kişi sayısı ve tercih ettiğiniz masa tipini belirtmeniz yeterlidir; ekibimiz uygunluk ve toplam tutarı yazılı olarak teyit eder. Telefonla da rezervasyon alıyoruz. Hafta sonları için en az bir gün önceden rezervasyon yapmanızı öneririz.",
  },
  {
    question: "Rezervasyon için ne kadar önceden iletişime geçmeliyim?",
    answer:
      "Hafta içi için aynı gün rezervasyon genellikle mümkündür, ancak hafta sonu ve tatil dönemleri için en az 1-2 gün önceden iletişime geçmenizi öneririz. Özel oda talepleri ve 6 kişiden büyük gruplar için daha erken haber vermeniz gerekir. Yoğun sezonda masalar hızlı dolduğu için erken rezervasyon avantaj sağlar.",
  },
  {
    question: "Giriş için yaş sınırı nedir?",
    answer:
      "Faraon Night Club'a giriş 18 yaş ve üzeri misafirlere açıktır. Girişte geçerli kimlik kartı veya pasaport ibrazı zorunludur; kimlik gösteremeyen misafirler içeri alınmaz. Bu kural KKTC mevzuatı gereğidir ve hiçbir koşulda istisna uygulanmaz. Grupla geliyorsanız tüm misafirlerin kimliklerini yanlarında bulundurduğundan emin olun.",
  },
  {
    question: "Kıyafet kuralınız var mı?",
    answer:
      "Evet, mekanımızda smart casual kıyafet kuralı geçerlidir. Erkek misafirlerimizden gömlek veya şık bir üst ile klasik ayakkabı bekliyoruz; şort, atlet, plaj kıyafeti ve spor ayakkabı kabul edilmemektedir. Kadın misafirlerimiz için gece kıyafeti standardı uygulanır. Tereddüt ederseniz rezervasyon sırasında WhatsApp'tan sorabilirsiniz.",
  },
  {
    question: "VIP oda ile standart masa arasındaki fark nedir?",
    answer:
      "Temel fark mahremiyet ve servis düzeyidir. Standart masa ana salonda yer alır ve genel atmosferin içindedir. VIP masa ayrılmış bir bölgede, öncelikli servisle sunulur. Özel oda ise tamamen kapalı, kendine ait servisi olan ve dışarıdan görünmeyen bir alandır; özel kutlamalar ve mahremiyet önceliği olan misafirler için uygundur.",
  },
  {
    question: "Faraon Night Club saat kaçta açılıyor?",
    answer:
      "Faraon Night Club haftanın yedi günü açıktır. Pazartesi, Salı, Çarşamba, Perşembe ve Pazar günleri 21:00-04:00; Cuma ve Cumartesi günleri 21:00-06:00 saatleri arasında hizmet veriyoruz. En yoğun saatlerimiz 00:00 ile 03:00 arasıdır. Özel günlerde saatlerde değişiklik olabileceği için WhatsApp hattımızdan teyit etmenizi öneririz.",
  },
  {
    question: "Ödeme nasıl yapılıyor?",
    answer:
      "Nakit ve kredi kartı ile ödeme kabul ediyoruz. Rezervasyon sırasında toplam tutar tarafınıza yazılı olarak bildirilir, böylece mekana geldiğinizde beklemediğiniz bir maliyetle karşılaşmazsınız. Ödeme para birimi Türk Lirası'dır. Kurumsal organizasyonlar ve büyük gruplar için ön ödeme veya fatura düzenlemesi yapılabilir.",
  },
  {
    question: "Mekan içinde fotoğraf çekebilir miyim?",
    answer:
      "Hayır, mekanımız içinde fotoğraf ve video çekimi yasaktır. Bu kural tüm misafirlerimizin mahremiyetini korumak amacıyla uygulanır ve personelimiz tarafından takip edilir. Doğum günü gibi özel bir kutlama için görsel kayıt talebiniz varsa, rezervasyon aşamasında bize iletin; uygun koşullarda kontrollü bir düzenleme yapabiliriz.",
  },
  {
    question: "Grup rezervasyonu ve özel organizasyon yapıyor musunuz?",
    answer:
      "Evet, doğum günü, bekarlığa veda ve kurumsal organizasyonlar için özel düzenleme yapıyoruz. 6 kişi ve üzeri gruplar için özel oda veya birleştirilmiş masa seçenekleri sunuyoruz. Pasta, dekorasyon ve içecek paketi gibi talepleri en az 48 saat önceden iletmeniz halinde hazırlayabiliriz. Detaylar için WhatsApp hattımızdan yazabilirsiniz.",
  },
  {
    question: "Transfer hizmetiniz var mı?",
    answer:
      "Talep üzerine ulaşım düzenlemesinde yardımcı oluyoruz. Rezervasyon sırasında kalacağınız otel veya bölgeyi bildirdiğinizde, anlaşmalı transfer aracı veya taksi ayarlaması yapabiliyoruz. Alkol alacak misafirlerimizin kesinlikle araç kullanmamasını, gidiş ve dönüş ulaşımını önceden planlamasını öneriyoruz.",
  },
]

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "faraon night club",
    "faraon night club iletişim",
    "faraon night club nerede",
    "night club rezervasyon",
    "vip masa rezervasyonu night club",
    "night club vip oda",
    "night club giriş şartları",
    "night club açılış saatleri",
    "gece kulübü masa rezervasyonu",
    "night club yaş sınırı",
    "night club kıyafet kuralları",
    "night club transfer hizmeti",
    "night club whatsapp rezervasyon",
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
}

const features = [
  {
    icon: Crown,
    title: "VIP Alanlar",
    description: "Özel VIP bölümlerimizde ayrıcalıklı hizmet ve tam gizlilik ile night club deneyiminin keyfini çıkarın.",
  },
  {
    icon: Sparkles,
    title: "Sahne Performansları",
    description: "Profesyonel dansçılarımızın büyüleyici sahne şovları ile unutulmaz bir gece geçirin.",
  },
  {
    icon: Music,
    title: "Canlı DJ Performansları",
    description: "Deneyimli DJ'lerimiz ile gece boyunca en iyi müzik seçkileri ve enerji dolu atmosfer.",
  },
  {
    icon: Users,
    title: "Özel Misafir Hizmeti",
    description: "Kişiye özel hostess hizmeti ve VIP ağırlama ile kendinizi özel hissedin.",
  },
]

const programs = [
  {
    title: "Saatlik Program",
    description: "Kısa süreli ziyaretler için ideal. Night club atmosferini deneyimleyin.",
    features: ["Sahne performansı", "VIP koltuk", "İçecek servisi"],
  },
  {
    title: "Gece Programı",
    description: "Tam gece eğlencesi. En popüler seçeneğimiz.",
    features: ["Tüm gece erişim", "Özel performanslar", "Premium servis", "VIP alan"],
    popular: true,
  },
  {
    title: "Özel Paket",
    description: "Size özel hazırlanan programlar ve organizasyonlar.",
    features: ["Kişiye özel planlama", "Konaklama dahil", "Transfer hizmeti", "7/24 destek"],
  },
]

const tableRows = [
  {
    tip: "Standart Masa",
    kapasite: "2-4 kişi",
    mahremiyet: "Ana salon içinde, açık düzen",
    servis: "Standart masa servisi",
    uygun: "İlk ziyaret, kısa süreli program, ikili gelen misafirler",
  },
  {
    tip: "VIP Masa",
    kapasite: "4-8 kişi",
    mahremiyet: "Ayrılmış bölge, salona hakim konum",
    servis: "Öncelikli servis, ayrılmış personel",
    uygun: "Arkadaş grupları, sahneyi yakından izlemek isteyenler",
  },
  {
    tip: "Özel Oda",
    kapasite: "4 kişi ve üzeri",
    mahremiyet: "Kapalı alan, dışarıdan görünmez",
    servis: "Odaya özel servis, çağrı ile hizmet",
    uygun: "Kutlamalar, kurumsal ağırlama, mahremiyet önceliği",
  },
]

const hoursRows = [
  { gun: "Pazartesi - Perşembe", saat: "21:00 - 04:00", yogun: "00:00 - 02:00" },
  { gun: "Cuma - Cumartesi", saat: "21:00 - 06:00", yogun: "00:00 - 03:00" },
  { gun: "Pazar", saat: "21:00 - 04:00", yogun: "00:00 - 02:00" },
]

const reasons = [
  {
    title: "Ruhsatlı işletme",
    description:
      "Faraon Night Club, KKTC mevzuatına uygun şekilde ruhsatlandırılmış bir eğlence işletmesidir. Yaş kontrolü, güvenlik ve alkol servisi kuralları denetime tabi standartlarda uygulanır.",
  },
  {
    title: "Şeffaf fiyatlandırma ve yazılı teyit",
    description:
      "Rezervasyon onayında masa tipi, kişi sayısı ve toplam tutar size yazılı olarak iletilir. Mekana geldiğinizde konuşulmamış bir kalemle karşılaşmazsınız.",
  },
  {
    title: "Gizlilik politikası",
    description:
      "Mekan içinde fotoğraf ve video çekimi yasaktır; rezervasyon sırasında paylaştığınız iletişim bilgileri üçüncü taraflarla paylaşılmaz ve pazarlama amacıyla kullanılmaz.",
  },
  {
    title: "Profesyonel güvenlik",
    description:
      "Girişte kimlik kontrolü yapan ve salon içinde görev alan eğitimli güvenlik ekibi, misafirlerin rahatsız edilmeden vakit geçirmesini sağlar.",
  },
  {
    title: "Hızlı iletişim",
    description:
      "WhatsApp hattımız çalışma saatlerimiz boyunca aktiftir. Rezervasyon, değişiklik ve iptal talepleri aynı hat üzerinden dakikalar içinde yanıtlanır.",
  },
]

export default function NightClubPage() {
  return (
    <article className="pt-20">
      <JsonLd
        id="ld-night-club"
        data={graph(
          webPageNode({
            path: PATH,
            name: TITLE,
            description: DESCRIPTION,
            hasFaq: true,
          }),
          breadcrumbNode(PATH, [
            { name: "Ana Sayfa", path: "/" },
            { name: "Faraon Night Club" },
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
          <li className="text-gold">Faraon Night Club</li>
        </ol>
      </nav>

      {/* Hero Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,69,69,0.15),transparent_50%)]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gold text-sm font-medium uppercase tracking-wider mb-3">
              Faraon Night Club
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient-gold">Faraon Night Club</span>
              <br />
              <span className="text-foreground">
                Kuzey Kıbrıs&apos;ta Premium Gece Kulübü Deneyimi
              </span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-8 max-w-3xl mx-auto">
              <strong>Faraon Night Club</strong>, ruhsatlı bir gece kulübü olarak
              standart masa, <strong>VIP masa</strong> ve özel oda seçenekleriyle
              rezervasyona dayalı hizmet verir. Profesyonel sahne performansları,
              canlı DJ ve gizliliğe öncelik veren servis anlayışıyla gecenizi
              planlıyoruz.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Link href="/katalog">
                  Kulüp Kataloğumuz
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-gold/50 text-gold hover:bg-gold/10 bg-transparent"
              >
                <a
                  href={waLink("Merhaba, Faraon Night Club için rezervasyon yapmak istiyorum.")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Rezervasyon Yap
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-foreground">Night Club</span>{" "}
              <span className="text-gradient-gold">Özellikleri</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              <strong>Faraon Night Club</strong> standartlarının üzerinde bir deneyim.
              Faraon Night Club&apos;ın sunduğu özel imkanları keşfedin.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex gap-5 p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-gold/30 transition-colors"
              >
                <div className="shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <feature.icon className="w-7 h-7 text-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-gradient-gold">Gece Programları</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              İhtiyacınıza uygun <strong>night club</strong> programlarımız.
              Saatlik, gecelik veya size özel paketlerle <strong>Faraon Night Club</strong> deneyimi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {programs.map((program) => (
              <div
                key={program.title}
                className={`relative p-6 md:p-8 rounded-2xl border transition-colors ${
                  program.popular
                    ? "bg-primary/5 border-gold"
                    : "bg-card border-border hover:border-gold/30"
                }`}
              >
                {program.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 text-xs font-semibold bg-gold text-background rounded-full">
                      En Popüler
                    </span>
                  </div>
                )}

                <h3 className="text-xl font-semibold text-foreground mb-3 mt-2">
                  {program.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {program.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {program.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <Star className="w-4 h-4 text-gold shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className={`w-full ${
                    program.popular
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                      : "bg-muted hover:bg-muted/80 text-foreground"
                  }`}
                >
                  <a
                    href="https://wa.me/905428857575"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Bilgi Al
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faraon Night Club nedir? */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 id="faraon-night-club-nedir" className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-foreground">Faraon</span>{" "}
              <span className="text-gradient-gold">Night Club nedir?</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Faraon Night Club, Kuzey Kıbrıs&apos;ta faaliyet gösteren, ruhsatlı ve
              yalnızca 18 yaş üzeri misafirlere açık bir gece kulübüdür. Mekan üç
              alan tipinden oluşur: ana salondaki standart masalar, ayrılmış VIP
              masa bölgesi ve dışarıdan görünmeyen özel odalar. Hizmet kapsamı masa
              rezervasyonu, içecek servisi, canlı DJ ve sahne performansları ile
              talep üzerine ulaşım koordinasyonunu içerir.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Faraon Night Club rezervasyon odaklı çalışır. Kapıdan girişe açık bir
              bar değil, masa ve oda düzeni üzerinden planlanan bir mekandır; bu
              nedenle geleceğiniz tarihi, kişi sayınızı ve tercih ettiğiniz alanı
              önceden bildirmeniz hem yer garantisi hem de net bir maliyet bilgisi
              anlamına gelir. Gecenin akışı sabit bir programa değil, salondaki
              yoğunluğa ve sahne performans saatlerine göre şekillenir.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              İşletmemizin yaklaşımı, ekibi ve hizmet ilkeleri konusunda daha fazla
              bilgi için{" "}
              <Link href="/hakkimizda" className={LINK}>
                hakkımızda
              </Link>{" "}
              sayfasını, sunduğumuz organizasyon ve ağırlama seçeneklerinin tamamı
              için{" "}
              <Link href="/hizmetler" className={LINK}>
                hizmet detaylarımız
              </Link>{" "}
              sayfasını inceleyebilirsiniz.
            </p>
          </div>
        </div>
      </section>

      {/* Mekan ve atmosfer */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 id="mekan-ve-atmosfer" className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-foreground">Mekan ve</span>{" "}
              <span className="text-gradient-gold">atmosfer nasıldır?</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Faraon Night Club&apos;ın atmosferi üç katmanlıdır: sahnenin ve DJ
              kabininin bulunduğu enerjik ana salon, salona hakim ancak ayrılmış
              olan VIP masa bölgesi ve tamamen kapalı özel odalar. Aynı gece içinde
              bu üç ortamın tonu belirgin şekilde farklıdır; hangisini seçtiğiniz
              gecenizin nasıl geçeceğini doğrudan belirler. Aydınlatma ve ses düzeni
              gece ilerledikçe kademeli olarak yoğunlaşır.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-8">Ana salon</h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Ana salon, sahne performanslarının ve DJ setlerinin merkezidir.
              Standart masalar bu alanda konumlanır ve sahneye görüş açısı doğrudan
              olacak şekilde yerleştirilir. Gecenin en canlı bölümünü ortamın içinde
              yaşamak isteyen, iki ila dört kişilik gelen misafirler için en uygun
              bölümdür. Servis ekibi salonu masa bazlı takip eder, sipariş için bara
              gitmeniz gerekmez.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-8">VIP masa alanı</h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              VIP masa alanı, ana salondan ayrılmış ancak sahneye hakim bir
              bölgededir. Bu alandaki masalar daha geniş oturma düzenine sahiptir ve
              öncelikli servis alır; masa başına ayrılan personel sayesinde sipariş
              bekleme süresi kısalır. Dört ila sekiz kişilik gruplar, atmosferin
              içinde kalmak isteyip aynı zamanda kendi alanına sahip olmak isteyen
              misafirler için tasarlanmıştır.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-8">Özel odalar</h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Özel odalar, dışarıdan görülmeyen ve kendi servisi olan kapalı
              alanlardır. Ses ve ışık düzeni oda içinden ayarlanabilir, servis çağrı
              ile gelir ve oda dışına hiçbir görüntü aktarılmaz. Doğum günü,
              bekarlığa veda ve kurumsal ağırlama gibi mahremiyet önceliği olan
              organizasyonlar için tercih edilir. Özel oda talepleri sınırlı sayıda
              olduğu için rezervasyonun erken yapılması gerekir.
            </p>
          </div>
        </div>
      </section>

      {/* Masa karşılaştırma tablosu */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 id="masa-secenekleri" className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-foreground">Masa seçenekleri</span>{" "}
              <span className="text-gradient-gold">nasıl karşılaştırılır?</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Masa seçenekleri dört ölçüte göre karşılaştırılır: kapasite,
              mahremiyet düzeyi, servis biçimi ve uygun olduğu durum. Faraon Night
              Club&apos;ta üç alan tipi bulunur ve aralarındaki fark fiyattan önce bu
              yapısal ölçütlerde ortaya çıkar. Güncel tutarlar tarihe, kişi sayısına
              ve içecek tercihine göre değiştiği için tabloda fiyat yer almaz;
              seçtiğiniz alan için net rakamı WhatsApp hattımızdan yazılı olarak
              iletiyoruz.
            </p>

            <div className="overflow-x-auto rounded-2xl border border-border mb-6">
              <table className="w-full text-left border-collapse min-w-[720px]">
                <caption className="sr-only">
                  Faraon Night Club masa ve oda tiplerinin kapasite, mahremiyet,
                  servis düzeyi ve kullanım amacına göre karşılaştırması
                </caption>
                <thead className="bg-muted/50">
                  <tr>
                    <th scope="col" className="px-5 py-4 text-sm font-semibold text-gold">Alan Tipi</th>
                    <th scope="col" className="px-5 py-4 text-sm font-semibold text-gold">Kapasite</th>
                    <th scope="col" className="px-5 py-4 text-sm font-semibold text-gold">Mahremiyet</th>
                    <th scope="col" className="px-5 py-4 text-sm font-semibold text-gold">Servis Düzeyi</th>
                    <th scope="col" className="px-5 py-4 text-sm font-semibold text-gold">Uygun Olduğu Durum</th>
                  </tr>
                </thead>
                <tbody>
                  {tableRows.map((row) => (
                    <tr key={row.tip} className="border-t border-border">
                      <th scope="row" className="px-5 py-4 text-sm font-semibold text-foreground">
                        {row.tip}
                      </th>
                      <td className="px-5 py-4 text-sm text-muted-foreground">{row.kapasite}</td>
                      <td className="px-5 py-4 text-sm text-muted-foreground">{row.mahremiyet}</td>
                      <td className="px-5 py-4 text-sm text-muted-foreground">{row.servis}</td>
                      <td className="px-5 py-4 text-sm text-muted-foreground">{row.uygun}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Alanların görsellerini, oturma düzenlerini ve hizmet paketlerini bir
              arada görmek isterseniz{" "}
              <Link href="/night-club-katalog" className={LINK}>
                night club kataloğumuzu inceleyin
              </Link>
              . Katalog sezona göre güncellenir ve talep etmeniz herhangi bir
              rezervasyon yükümlülüğü doğurmaz.
            </p>
          </div>
        </div>
      </section>

      {/* Rezervasyon */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 id="rezervasyon-nasil-yapilir" className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-foreground">Rezervasyon</span>{" "}
              <span className="text-gradient-gold">nasıl yapılır?</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Rezervasyon WhatsApp veya telefon üzerinden, dört adımda tamamlanır:
              talebinizi iletirsiniz, ekibimiz uygunluğu kontrol eder, masa tipi ve
              toplam tutar yazılı olarak teyit edilir, gece geldiğinizde adınıza
              ayrılmış alana yönlendirilirsiniz. Hafta içi aynı gün rezervasyon
              çoğunlukla mümkündür; Cuma, Cumartesi ve tatil dönemleri için 1-2 gün
              önceden yazmanız gerekir.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-8">
              WhatsApp ile rezervasyon
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              WhatsApp, en hızlı ve en güvenli rezervasyon kanalımızdır; çünkü
              konuşulan her şey yazılı kalır. Telefonda yanlış anlaşılan bir tarih
              veya kişi sayısı riski ortadan kalkar, teyit mesajını gece yanınızda
              taşırsınız.
            </p>
            <ol className="space-y-3 mb-6 list-decimal list-inside">
              <li className="text-muted-foreground text-lg leading-relaxed">
                {PHONE_DISPLAY} numaralı WhatsApp hattımıza yazın.
              </li>
              <li className="text-muted-foreground text-lg leading-relaxed">
                Tarihi, kişi sayısını ve tercih ettiğiniz masa tipini belirtin.
              </li>
              <li className="text-muted-foreground text-lg leading-relaxed">
                Ekibimiz uygunluğu ve toplam tutarı yazılı olarak teyit etsin.
              </li>
              <li className="text-muted-foreground text-lg leading-relaxed">
                Teyit mesajını saklayın; girişte adınızı bildirmeniz yeterlidir.
              </li>
            </ol>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-8">
              Telefonla rezervasyon
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Telefonla rezervasyon için {PHONE_DISPLAY} numarasını arayabilirsiniz.
              Hattımız çalışma saatlerimiz boyunca açıktır ve gündüz saatlerinde de
              rezervasyon talepleri alınır. Telefonda rezervasyon oluşturduğunuzda,
              detayları teyit etmek için sizden aynı numara üzerinden bir WhatsApp
              mesajı göndermenizi rica ediyoruz.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-8">
              Rezervasyonda bize iletmeniz gerekenler
            </h3>
            <ul className="space-y-3 mb-6">
              {[
                "Tarih ve yaklaşık geliş saati — masa ayırma önceliği bu bilgiye göre belirlenir.",
                "Kişi sayısı — 6 kişi ve üzeri gruplarda oda veya birleştirilmiş masa düzeni gerekir.",
                "Masa tipi tercihi — standart masa, VIP masa veya özel oda.",
                "Özel istekler — doğum günü pastası, dekorasyon veya içecek paketi talepleri.",
                "Ulaşım ihtiyacı — kalacağınız otel veya bölge, transfer koordinasyonu için.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-muted-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-8">
              Ulaşım ve transfer koordinasyonu
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Talep üzerine ulaşım düzenlemesinde yardımcı oluyoruz. Rezervasyon
              sırasında kalacağınız otel veya bölgeyi bildirmeniz halinde anlaşmalı
              transfer aracı ya da taksi ayarlaması yapıyoruz. Alkol alacak
              misafirlerimizin araç kullanmamasını, gidiş ve dönüş ulaşımını
              rezervasyon aşamasında planlamasını öneriyoruz. Geceyi daha geniş bir
              plan içinde kurgulamak isterseniz{" "}
              <Link href="/kibris-gece-hayati" className={LINK}>
                Kıbrıs gece hayatı hakkında
              </Link>{" "}
              hazırladığımız rehber yol gösterici olacaktır.
            </p>
          </div>
        </div>
      </section>

      {/* Giriş şartları */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 id="giris-sartlari" className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-foreground">Giriş şartları ve mekan</span>{" "}
              <span className="text-gradient-gold">kuralları nelerdir?</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Faraon Night Club&apos;a giriş dört kurala bağlıdır: 18 yaş sınırı ve
              kimlik ibrazı, smart casual kıyafet standardı, mekan içinde fotoğraf
              ve video yasağı, sorumlu alkol servisi. Bu kurallar istisnasız
              uygulanır ve girişte kontrol edilir. Kuralların amacı misafirlerin
              mahremiyetini ve mekanın güvenliğini birlikte korumaktır.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-8">
              Yaş sınırı ve kimlik
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Faraon Night Club yalnızca 18 yaş ve üzeri misafirlere açıktır.
              Girişte geçerli kimlik kartı veya pasaport ibrazı zorunludur; kimlik
              gösteremeyen misafirler içeri alınmaz. Bu kural KKTC mevzuatı gereğidir
              ve hiçbir koşulda esnetilmez. Grup halinde geliyorsanız, rezervasyonu
              yapan kişinin değil, tüm misafirlerin kimliklerini yanlarında
              bulundurması gerekir.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-8">
              Kıyafet kuralları
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Mekanımızda smart casual kıyafet kuralı geçerlidir. Erkek
              misafirlerimizden gömlek veya şık bir üst ile klasik ayakkabı
              bekliyoruz; kadın misafirlerimiz için gece kıyafeti standardı
              uygulanır. Kabul edilmeyen kıyafetler şunlardır:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "Şort ve kısa pantolon",
                "Atlet ve kolsuz üst",
                "Plaj kıyafeti, terlik ve sandalet",
                "Spor ayakkabı ve antrenman kıyafeti",
                "Yırtık veya aşırı yıpranmış giysiler",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-muted-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-8">
              Fotoğraf ve gizlilik politikası
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Mekan içinde fotoğraf ve video çekimi yasaktır ve bu kural personelimiz
              tarafından aktif olarak takip edilir. Rezervasyon sırasında
              paylaştığınız iletişim bilgileri üçüncü taraflarla paylaşılmaz,
              pazarlama listelerine eklenmez. Doğum günü gibi bir kutlama için görsel
              kayıt talebiniz varsa, rezervasyon aşamasında bize iletin; uygun
              koşullarda kontrollü bir düzenleme yapabiliriz.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-8">
              Sorumlu eğlence
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Alkol servisi yalnızca 18 yaş üzeri misafirlere yapılır ve servis ekibi
              gerekli gördüğü durumlarda servisi sınırlandırma hakkını saklı tutar.
              Diğer misafirleri rahatsız eden davranışlar karşısında güvenlik ekibi
              müdahale eder. Araç kullanacak misafirlerimizin alkol almamasını,
              alkol alacak misafirlerimizin ise dönüş ulaşımını önceden planlamasını
              önemle rica ediyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Çalışma saatleri */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 id="calisma-saatleri" className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-foreground">Çalışma</span>{" "}
              <span className="text-gradient-gold">saatlerimiz nedir?</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Faraon Night Club haftanın yedi günü açıktır. Pazartesi, Salı,
              Çarşamba, Perşembe ve Pazar günleri 21:00-04:00; Cuma ve Cumartesi
              günleri 21:00-06:00 saatleri arasında hizmet veriyoruz. Salonun en
              yoğun olduğu aralık 00:00 ile 03:00 arasıdır; sahne performansları da
              bu saatlerde yoğunlaşır. Özel günlerde saatlerde değişiklik
              olabileceğinden geliş öncesi teyit almanızı öneririz.
            </p>

            <div className="overflow-x-auto rounded-2xl border border-border mb-6">
              <table className="w-full text-left border-collapse min-w-[640px]">
                <caption className="sr-only">
                  Faraon Night Club haftalık çalışma saatleri ve en yoğun saat aralıkları
                </caption>
                <thead className="bg-muted/50">
                  <tr>
                    <th scope="col" className="px-5 py-4 text-sm font-semibold text-gold">Gün</th>
                    <th scope="col" className="px-5 py-4 text-sm font-semibold text-gold">Açılış - Kapanış</th>
                    <th scope="col" className="px-5 py-4 text-sm font-semibold text-gold">En Yoğun Saatler</th>
                  </tr>
                </thead>
                <tbody>
                  {hoursRows.map((row) => (
                    <tr key={row.gun} className="border-t border-border">
                      <th scope="row" className="px-5 py-4 text-sm font-semibold text-foreground">
                        {row.gun}
                      </th>
                      <td className="px-5 py-4 text-sm text-muted-foreground">{row.saat}</td>
                      <td className="px-5 py-4 text-sm text-muted-foreground">{row.yogun}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Erken gelmek isteyen misafirlerimiz için 21:00-23:00 aralığı daha sakin
              bir ortam sunar; sahne programının tamamını izlemek isteyenler için
              00:00 sonrası uygundur. Masa rezervasyonlarında geliş saatini önceden
              bildirmeniz, masanızın sizin için ne kadar süre tutulacağını netleştirir.
            </p>
          </div>
        </div>
      </section>

      {/* Neden Faraon Night Club? */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 id="neden-faraon-night-club" className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-foreground">Neden</span>{" "}
              <span className="text-gradient-gold">Faraon Night Club?</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Faraon Night Club&apos;ı tercih etmenin beş somut nedeni vardır:
              ruhsatlı işletme statüsü, şeffaf fiyatlandırma ve yazılı teyit,
              uygulanan gizlilik politikası, profesyonel güvenlik ve hızlı iletişim.
              Bunların hepsi rezervasyon öncesinde doğrulayabileceğiniz, gece
              içindeyse doğrudan hissedeceğiniz maddelerdir.
            </p>

            <ul className="space-y-3 mb-6">
              {reasons.map((reason) => (
                <li key={reason.title} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">{reason.title}.</strong>{" "}
                    {reason.description}
                  </span>
                </li>
              ))}
            </ul>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              KKTC genelindeki mekan tiplerini, şehir farklarını ve fiyat
              bileşenlerini karşılaştırarak karar vermek isterseniz{" "}
              <Link href="/kibris-night-club" className={LINK}>
                Kıbrıs night club rehberi
              </Link>{" "}
              içeriğimiz kapsamlı bir başlangıç noktasıdır.
            </p>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 id="faraon-night-club-farki" className="text-3xl md:text-4xl font-bold mb-6">
                  <span className="text-foreground">Faraon</span>{" "}
                  <span className="text-gradient-gold">Night Club Farkı</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>Faraon Night Club</strong>, Kuzey Kıbrıs&apos;ın en seçkin adreslerinden biri olarak
                  misafirlerine premium bir <strong>night club</strong> deneyimi sunmaktadır.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Profesyonel performans ekibimiz, deneyimli servis kadromuz ve
                  lüks mekan konseptimiz ile <strong>Faraon Night Club</strong> markası
                  fark yaratıyor.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  VIP gece eğlencesi, özel organizasyonlar ve kişiye özel programlar için
                  <strong> Faraon Night Club katalog</strong> seçeneklerimizi inceleyebilirsiniz.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 rounded-xl bg-card border border-border text-center">
                  <Clock className="w-8 h-8 text-gold mx-auto mb-3" />
                  <p className="text-2xl font-bold text-foreground mb-1">21:00</p>
                  <p className="text-sm text-muted-foreground">Her Gün Açılış</p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border text-center">
                  <Clock className="w-8 h-8 text-gold mx-auto mb-3" />
                  <p className="text-2xl font-bold text-foreground mb-1">04:00</p>
                  <p className="text-sm text-muted-foreground">Pazartesi-Perşembe ve Pazar Kapanış</p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border text-center col-span-2">
                  <Star className="w-8 h-8 text-gold mx-auto mb-3" />
                  <p className="text-2xl font-bold text-foreground mb-1">06:00</p>
                  <p className="text-sm text-muted-foreground">Cuma-Cumartesi Kapanış</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SSS */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 id="sikca-sorulan-sorular" className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-foreground">Sık Sorulan</span>{" "}
              <span className="text-gradient-gold">Sorular</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Faraon Night Club hakkında en çok sorulan sorular ve yanıtları. Burada
              bulamadığınız her konu için WhatsApp hattımızdan yazabilirsiniz.
            </p>

            <Accordion type="single" collapsible className="w-full">
              {FAQS.map((faq, i) => (
                <AccordionItem key={faq.question} value={`item-${i}`} className="border-border">
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

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-gradient-gold">Night Club</span>{" "}
              <span className="text-foreground">Deneyimine Hazır mısınız?</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              <strong>Faraon Night Club</strong> gecenizi planlamak için tarihi ve
              kişi sayısını yazmanız yeterli; masa tipini ve toplam tutarı yazılı
              olarak teyit ediyoruz. Telefonla ulaşmak için {PHONE_DISPLAY}
              , diğer kanallar için{" "}
              <Link href="/iletisim" className={LINK}>
                iletişim ve konum
              </Link>{" "}
              sayfamızı kullanabilirsiniz.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <a
                  href={waLink("Merhaba, Faraon Night Club için masa rezervasyonu yapmak istiyorum.")}
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
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-gold/50 text-gold hover:bg-gold/10 bg-transparent"
              >
                <Link href="/night-club-katalog">
                  Güncel Katalog Talebi
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </article>
  )
}
