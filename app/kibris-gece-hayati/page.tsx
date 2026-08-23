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
  CalendarDays,
  Car,
  Check,
  Clock,
  Dices,
  Guitar,
  Hotel,
  MapPin,
  MessageCircle,
  Music,
  Phone,
  ShieldCheck,
  Wallet,
  Wine,
} from "lucide-react";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbNode, faqNode, graph, webPageNode } from "@/lib/schema";
import { PHONE_DISPLAY, PHONE_E164, waLink } from "@/lib/site";

const PATH = "/kibris-gece-hayati";

const TITLE = "Kıbrıs Gece Hayatı | KKTC Eğlence Rehberi";
const DESCRIPTION =
  "Kıbrıs gece hayatı rehberi: Girne, Lefkoşa ve Gazimağusa'da gece kulüpleri, barlar, casinolar, ulaşım, bütçe planlama ve güvenlik önerileri tek sayfada.";

// Single source of truth: this array feeds BOTH the visible accordion and the
// FAQPage markup, so the two cannot drift apart. A markup-only FAQ is a
// manual-action risk.
const FAQS = [
  {
    question: "Kıbrıs'ta gece hayatı nasıl?",
    answer:
      "Kıbrıs'ta gece hayatı canlı, çeşitli ve yıl boyu süren bir yapıdadır. Akdeniz temposuna uygun olarak geceler geç başlar; sahil barları 21:00 civarında hareketlenir, gece kulüpleri 23:00'ten sonra dolar. Girne turistik yoğunluğuyla, Lefkoşa yerel karakteriyle, Gazimağusa üniversite dinamiğiyle öne çıkar. Casinolar ve oteller de gece eğlencesinin önemli bir parçasıdır.",
  },
  {
    question: "Kıbrıs'ta gece nereye gidilir?",
    answer:
      "Kıbrıs'ta gece için dört ana seçenek vardır: sahil barları ve lounge'lar erken akşam ve düşük bütçe için, gece kulüpleri geç saat eğlencesi için, casinolar oyun ve gösteri için, canlı müzik mekanları ise yerel atmosfer için tercih edilir. Girne limanı, Lefkoşa Dereboyu ve Gazimağusa sahil hattı en yoğun bölgelerdir.",
  },
  {
    question: "Kıbrıs'ta bir gece ne kadara mal olur?",
    answer:
      "Kıbrıs'ta bir gecenin maliyeti tercih ettiğiniz mekan türüne göre büyük fark gösterir. Sahil barında içecek odaklı bir akşam en ekonomik seçenektir; gece kulübünde masa rezervasyonlu bir gece orta-üst segmenttir; VIP oda ve içecek paketi en yüksek seviyedir. Ulaşım ve dönüş taksisini de bütçenize eklemeyi unutmayın.",
  },
  {
    question: "Kıbrıs gece hayatı hangi şehirde daha canlı?",
    answer:
      "Girne, Kıbrıs'ta gece hayatının en canlı olduğu şehirdir. Otel ve casino yoğunluğu, liman bölgesindeki bar hattı ve turist trafiği sayesinde hem seçenek hem hareketlilik açısından öndedir. Lefkoşa yıl boyu istikrarlı ve daha yerel bir sahneye sahiptir; Gazimağusa ise üniversite dönemi boyunca genç ve uygun bütçeli bir alternatiftir.",
  },
  {
    question: "Kıbrıs'ta gece hayatı ne zaman başlar?",
    answer:
      "Kıbrıs'ta gece hayatı genellikle 21:00-22:00 arasında barlarda başlar, gece kulüpleri ise 23:00'ten sonra hareketlenir. En yoğun saat aralığı 00:00 ile 03:00 arasıdır ve birçok mekan sabaha karşı kapanır. Yaz aylarında akşam yemeği geç yendiği için bu saatler bir miktar daha kayabilir.",
  },
  {
    question: "Kıbrıs gece hayatı için hangi mevsim uygun?",
    answer:
      "Kıbrıs gece hayatı yıl boyu açıktır, ancak en yoğun dönem Haziran-Eylül arasıdır. Yaz aylarında sahil barları ve açık hava mekanları devreye girer, turist trafiği zirveye çıkar. Kış aylarında kapalı mekanlar, casinolar ve gece kulüpleri aktif kalmaya devam eder; bu dönem daha sakin ve genellikle daha uygun fiyatlıdır.",
  },
  {
    question: "Kıbrıs'ta gece ulaşım nasıl sağlanır?",
    answer:
      "Kıbrıs'ta gece saatlerinde toplu taşıma çalışmaz; ulaşım taksi, özel transfer veya kiralık araçla sağlanır. Bu nedenle dönüş yolculuğunuzu çıkmadan önce planlamanız gerekir. Alkol alacaksanız araç kullanmayın — KKTC'de alkollü araç kullanımına yönelik denetimler sıkıdır. Birçok mekan ve otel rezervasyon sırasında transfer ayarlamasında yardımcı olur.",
  },
  {
    question: "Kıbrıs'ta gece hayatı güvenli mi?",
    answer:
      "Evet, Kıbrıs gece hayatı genel olarak güvenlidir ve turistlere yönelik ciddi bir sorun yaşanmaz. Yine de temel önlemler geçerlidir: ruhsatlı mekanları tercih edin, hesabı önceden netleştirin, içeceğinizi gözünüzün önünden ayırmayın ve dönüş ulaşımınızı bilinen bir taksi veya transferle yapın. Değerli eşyalarınızı otel kasasında bırakmanız önerilir.",
  },
  {
    question: "Kıbrıs'ta hangi para birimi kullanılır?",
    answer:
      "KKTC'de resmi para birimi Türk Lirası'dır ve gece mekanlarında ödemeler ağırlıklı olarak TL ile yapılır. Turistik bölgelerde Sterlin ve Euro da kabul edilebilir, ancak kur mekan tarafından belirlendiği için genelde dezavantajlıdır. Kart ödemesi yaygın olsa da bahşiş ve taksi için yanınızda nakit bulundurmanız pratik olur.",
  },
  {
    question: "Kıbrıs gece kulüplerine yaş sınırı var mı?",
    answer:
      "Evet, Kıbrıs'ta gece kulüpleri ve casinolar 18 yaş ve üzeri misafirlere hizmet verir. Girişte geçerli kimlik veya pasaport ibrazı zorunludur ve bu kural mekanların takdirine bırakılmamıştır. Barlar ve lounge'lar için de aynı yaş sınırı geçerlidir; kimlik göstermeye hazır olmanız girişte gecikme yaşamanızı önler.",
  },
];

export const metadata: Metadata = {
  title: { absolute: "Kıbrıs Gece Hayatı | KKTC Eğlence Rehberi" },
  description: DESCRIPTION,
  keywords: [
    "kıbrıs gece hayatı",
    "kktc gece hayatı",
    "girne gece hayatı",
    "lefkoşa gece hayatı",
    "gazimağusa gece hayatı",
    "kıbrıs gece hayatı nasıl",
    "kıbrıs eğlence mekanları",
    "kıbrıs'ta gece nereye gidilir",
    "kıbrıs casino ve gece hayatı",
    "kıbrıs bar sokağı",
    "kıbrıs gece hayatı ulaşım",
    "kıbrıs gece hayatı bütçe",
    "kıbrıs tatilde gece eğlencesi",
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

const venueTypes = [
  {
    type: "Sahil barı ve lounge",
    hours: "19:00 - 01:00",
    budget: "Ekonomik",
    dress: "Serbest / şık günlük",
    reservation: "Genellikle gerekmez",
  },
  {
    type: "Gece kulübü (night club)",
    hours: "21:00 - 04:00 / 06:00",
    budget: "Orta - premium",
    dress: "Smart casual",
    reservation: "Önerilir, hafta sonu şart",
  },
  {
    type: "Casino",
    hours: "Çoğunlukla 24 saat",
    budget: "Değişken",
    dress: "Şık günlük",
    reservation: "Gerekmez, üyelik/kimlik istenir",
  },
  {
    type: "Canlı müzik mekanı ve meyhane",
    hours: "20:00 - 02:00",
    budget: "Ekonomik - orta",
    dress: "Serbest",
    reservation: "Canlı müzik gecelerinde önerilir",
  },
  {
    type: "Otel eğlence programı",
    hours: "21:00 - 01:00",
    budget: "Konaklamaya dahil olabilir",
    dress: "Şık günlük",
    reservation: "Otel resepsiyonundan",
  },
];

const budgetTiers = [
  {
    item: "Tipik mekan",
    economy: "Sahil barı, meyhane, otel programı",
    mid: "Gece kulübünde standart masa",
    premium: "VIP masa veya özel oda",
  },
  {
    item: "Giriş / masa bedeli",
    economy: "Genellikle yok",
    mid: "Giriş + masa bedeli ayrı kalemler",
    premium: "Oda bedeli ve minimum harcama birlikte",
  },
  {
    item: "İçecek düzeni",
    economy: "Adet bazlı sipariş",
    mid: "Adet bazlı ya da küçük paket",
    premium: "Şişe veya içecek paketi",
  },
  {
    item: "Yeme-içme",
    economy: "Mekan dışında akşam yemeği",
    mid: "Atıştırmalık servisi",
    premium: "Masaya servis, ikram tabakları",
  },
  {
    item: "Ulaşım",
    economy: "Yürüme mesafesi veya tek yön taksi",
    mid: "Gidiş-dönüş taksi",
    premium: "Özel transfer, kapıdan kapıya",
  },
  {
    item: "Kime uygun",
    economy: "İlk gece, keşif amaçlı çıkış",
    mid: "Hafta sonu planlı bir gece",
    premium: "Kutlama, grup, mahremiyet önceliği",
  },
];

export default function KibrisGeceHayatiPage() {
  return (
    <article className="pt-20">
      <JsonLd
        id="ld-kibris-gece-hayati"
        data={graph(
          webPageNode({
            path: PATH,
            name: TITLE,
            description: DESCRIPTION,
            hasFaq: true,
          }),
          breadcrumbNode(PATH, [
            { name: "Ana Sayfa", path: "/" },
            { name: "Kıbrıs Gece Hayatı" },
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
          <li className="text-gold">Kıbrıs Gece Hayatı</li>
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
              <span className="text-gradient-gold">Kıbrıs Gece Hayatı:</span>
              <br />
              <span className="text-foreground">
                KKTC&apos;de Gece Eğlencesi İçin Tam Rehber
              </span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-8 max-w-3xl mx-auto">
              Bu rehber Kıbrıs gece hayatını altı başlıkta topluyor: mekan türleri,
              şehir farkları, saatler ve sezon, bütçe kalemleri, gece ulaşımı ve
              güvenlik. Amacı, KKTC&apos;ye ilk kez gelen bir misafirin bir geceyi
              baştan sona kendi başına planlayabilmesi.
            </p>
          </div>
        </div>
      </section>

      {/* Genel bakış */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2
              id="kibris-gece-hayati-nasildir"
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              <span className="text-foreground">Kıbrıs gece hayatı</span>{" "}
              <span className="text-gradient-gold">nasıldır?</span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Kıbrıs&apos;ta gece hayatı, Girne, Lefkoşa ve Gazimağusa merkezli, yıl
              boyu süren ve dört ana mekan türünden oluşan bir yapıdır: sahil barları,
              gece kulüpleri, casinolar ve canlı müzik mekanları. Geceler Akdeniz
              temposuna uygun olarak geç başlar — barlar 21:00 civarında hareketlenir,
              gece kulüpleri 23:00&apos;ten sonra dolar ve en yoğun saat aralığı
              00:00-03:00&apos;tür. Girne otel ve casino yoğunluğuyla en canlı
              bölgedir; Lefkoşa daha yerel bir sahneye sahiptir; Gazimağusa üniversite
              dönemi boyunca genç ve uygun bütçeli bir alternatif sunar.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Bu yapının adayı ziyaret edenler açısından en belirleyici özelliği
              sürekliliktir. KKTC&apos;de gece eğlencesi yalnızca yaz sezonuna bağlı
              bir tatil aktivitesi değil, yıl boyu işleyen bir hizmet sektörüdür.
              Yaz aylarında açık hava mekanları, sahil barları ve otel teraslarındaki
              programlar devreye girer; kış aylarında ise kapalı mekanlar, casinolar
              ve gece kulüpleri programı taşımaya devam eder. Bu nedenle Kasım ayında
              gelen bir misafir de, Temmuz ayında gelen bir misafir de gidecek bir yer
              bulur — değişen şey seçeneğin çeşitliliği ve kalabalığın yoğunluğudur.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Tanımı netleştirmek gerekirse: Kıbrıs gece hayatı, KKTC sınırları
              içindeki Girne, Lefkoşa, Gazimağusa ve İskele bölgelerinde faaliyet
              gösteren ruhsatlı eğlence mekanlarının oluşturduğu, akşam saat 21:00
              civarında başlayıp sabaha karşı sona eren bir eğlence ekosistemidir.
              Bu ekosistemin içinde birbirinin alternatifi değil, birbirinin devamı
              olan duraklar vardır: akşam yemeği, sahil barı, gece kulübü ve gerekirse
              casino. Yerel alışkanlık da bu sırayı izler.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Misafir profili de çeşitlidir. Adaya tatil için gelen turistler, iş
              seyahati kapsamında Lefkoşa&apos;da konaklayan çalışanlar, üniversite
              öğrencileri ve Kıbrıs&apos;ta ikamet eden yerel misafirler aynı mekanlarda
              buluşur. Bu karışım, mekanların hem uluslararası hem yerel bir servis
              standardı tutmasını gerektirir; pratikte Türkçe ve İngilizce her yerde
              iş görür, birçok mekanda Rusça bilen personel de bulunur.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-8">
              Kısa özet: bilmeniz gereken altı temel bilgi
            </h3>
            <ul className="space-y-3 mb-6">
              {[
                "Sezon: Mekanlar yıl boyu açıktır; en yoğun dönem Haziran-Eylül arasıdır.",
                "Saatler: Barlar 21:00 civarında, gece kulüpleri 23:00'ten sonra hareketlenir; en yoğun aralık 00:00-03:00'tür.",
                "Yaş sınırı: Gece kulüpleri ve casinolar 18 yaş ve üzerine açıktır, girişte kimlik veya pasaport zorunludur.",
                "Para birimi: KKTC'de resmi para birimi Türk Lirası'dır; kart ödemesi yaygındır, taksi ve bahşiş için nakit pratiktir.",
                "Ulaşım: Gece saatlerinde toplu taşıma çalışmaz; taksi, transfer veya özel araç gerekir.",
                "Kıyafet: Sahil barlarında serbest, gece kulüplerinde smart casual kuralı uygulanır.",
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
        </div>
      </section>

      {/* Mekan türleri */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2
              id="gece-eglencesi-turleri"
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              <span className="text-foreground">Kıbrıs&apos;ta gece eğlencesi</span>{" "}
              <span className="text-gradient-gold">türleri nelerdir?</span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Kıbrıs&apos;ta gece eğlencesi beş ana mekan türünde toplanır: sahil
              barları ve lounge&apos;lar, gece kulüpleri, casinolar, canlı müzik
              mekanları ve otel eğlence programları. Bu beş tür saat aralığı, bütçe
              seviyesi, kıyafet beklentisi ve rezervasyon ihtiyacı bakımından
              birbirinden ayrılır. Bir geceyi planlarken en verimli yaklaşım, bunları
              birbirinin rakibi olarak değil, saat ilerledikçe sırayla uğranan duraklar
              olarak düşünmektir.
            </p>

            <div className="overflow-x-auto rounded-2xl border border-border mb-8">
              <table className="w-full text-left border-collapse min-w-[720px]">
                <caption className="sr-only">
                  Kıbrıs&apos;taki gece eğlencesi mekan türlerinin saat aralığı, bütçe
                  seviyesi, kıyafet kuralı ve rezervasyon ihtiyacına göre
                  karşılaştırması
                </caption>
                <thead className="bg-muted/50">
                  <tr>
                    <th
                      scope="col"
                      className="px-5 py-4 text-sm font-semibold text-gold"
                    >
                      Mekan türü
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-4 text-sm font-semibold text-gold"
                    >
                      Tipik saat aralığı
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-4 text-sm font-semibold text-gold"
                    >
                      Bütçe seviyesi
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-4 text-sm font-semibold text-gold"
                    >
                      Kıyafet
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-4 text-sm font-semibold text-gold"
                    >
                      Rezervasyon gerekir mi?
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {venueTypes.map((row) => (
                    <tr key={row.type} className="border-t border-border">
                      <th
                        scope="row"
                        className="px-5 py-4 text-sm font-medium text-foreground text-left"
                      >
                        {row.type}
                      </th>
                      <td className="px-5 py-4 text-sm text-muted-foreground">
                        {row.hours}
                      </td>
                      <td className="px-5 py-4 text-sm text-muted-foreground">
                        {row.budget}
                      </td>
                      <td className="px-5 py-4 text-sm text-muted-foreground">
                        {row.dress}
                      </td>
                      <td className="px-5 py-4 text-sm text-muted-foreground">
                        {row.reservation}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid gap-6 md:grid-cols-2 mb-10">
              <div className="p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-gold/50 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Wine className="w-7 h-7 text-gold" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Sahil barları ve lounge&apos;lar
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Sahil barları, gecenin en erken ve en düşük bütçeli halkasıdır.
                  Girne liman çevresi ve Gazimağusa sahil hattı bu tür mekanların
                  yoğunlaştığı bölgelerdir. Genellikle rezervasyon istemezler, kıyafet
                  kuralları esnektir ve müzik konuşmayı engellemeyecek seviyededir.
                  Gruplar burada buluşup gecenin gerisini planlar; yaz aylarında
                  açık hava bölümleri devreye girdiği için kapasite belirgin biçimde
                  artar.
                </p>
              </div>

              <div className="p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-gold/50 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Music className="w-7 h-7 text-gold" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Gece kulüpleri ve night club&apos;lar
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Gece kulüpleri, KKTC yasalarına göre ruhsatlandırılmış, 18 yaş üstü
                  misafirlere yönelik ve masa düzeninde çalışan mekanlardır. Bar
                  düzeninden farkı, servisin masaya verilmesi, girişte kimlik kontrolü
                  yapılması ve rezervasyonla çalışmasıdır. Bu kategoriyi seçerken
                  ruhsat, fiyat şeffaflığı ve iletişim hızı en önemli kriterlerdir;
                  ayrıntılı bir karşılaştırma için{" "}
                  <Link
                    href="/kibris-night-club"
                    className="text-gold underline underline-offset-4 hover:text-gold-light transition-colors"
                  >
                    Kıbrıs night club rehberi
                  </Link>{" "}
                  sayfasına bakabilirsiniz.
                </p>
              </div>

              <div className="p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-gold/50 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Dices className="w-7 h-7 text-gold" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Casinolar
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Casinolar KKTC gece hayatının ayırt edici unsurudur ve çoğu büyük
                  otelin bünyesinde çalışır. Bu nedenle bir casino ziyareti pratikte
                  otel içinde geçen bir akşam anlamına gelir: yeme-içme, canlı müzik
                  ve oyun alanları aynı binadadır. Giriş 18 yaş ve üzerine açıktır,
                  kimlik ibrazı istenir ve şık günlük bir kıyafet beklenir. Oyun
                  oynamadan yalnızca atmosferi görmek için de girilebilir.
                </p>
              </div>

              <div className="p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-gold/50 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Guitar className="w-7 h-7 text-gold" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Canlı müzik mekanları ve meyhaneler
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Canlı müzik mekanları ve meyhaneler, adanın en yerel gece deneyimini
                  sunar. Program genellikle akşam yemeğiyle başlar, canlı müzikle
                  devam eder ve gece yarısı civarında biter. Türk müziği ağırlıklı
                  programlar Lefkoşa ve Gazimağusa&apos;da, daha karma repertuvarlar
                  Girne&apos;de yaygındır. Canlı müzik gecelerinde masa sınırlı olduğu
                  için önceden yer ayırtmak neredeyse zorunludur.
                </p>
              </div>

              <div className="p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-gold/50 transition-all duration-300 md:col-span-2">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Hotel className="w-7 h-7 text-gold" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Otel eğlence programları
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  KKTC&apos;deki büyük oteller kendi akşam programlarını düzenler:
                  canlı müzik, sahne gösterisi, tema geceleri ve havuz başı etkinlikler.
                  Bu programlar çoğu zaman konaklama paketinin içindedir ve ulaşım
                  sorununu tamamen ortadan kaldırır — otelden çıkmanız gerekmez. Dezavantajı,
                  programın standart ve erken bitmesidir; genellikle 01:00 civarında
                  sona erdiği için gecenin devamını dışarıda planlamak isteyen
                  misafirler ikinci bir durak belirler.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Şehir şehir */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2
              id="sehir-sehir-kibris-gece-hayati"
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              <span className="text-foreground">Şehir şehir</span>{" "}
              <span className="text-gradient-gold">
                Kıbrıs gece hayatı nasıl farklılaşır?
              </span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Kıbrıs gece hayatı dört merkezde belirgin biçimde farklı karakterler
              gösterir: Girne turistik ve en yoğun merkez, Lefkoşa yerel ve yıl boyu
              istikrarlı sahne, Gazimağusa genç ve uygun bütçeli alternatif,
              İskele-Long Beach hattı ise otel yatırımlarıyla büyüyen yeni bölgedir.
              Hangi şehirde konakladığınız, gecenizin karakterini mekan seçiminizden
              daha fazla belirler — çünkü gece saatlerinde şehirler arası ulaşım
              taksiye bağlıdır ve maliyeti bütçeye eklenir.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-8">
              Girne gece hayatı
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Girne, Kıbrıs&apos;ta gece hayatının en canlı olduğu şehirdir. Tarihi
              liman çevresi bar ve restoranların yoğunlaştığı yürünebilir bir hat
              oluşturur; şehrin doğusu ve batısı boyunca uzanan otel hattı ise casino
              ve sahne programlarını barındırır. Girne&apos;nin avantajı seçenek
              genişliği ve yürüme mesafesinde kümelenmiş mekanlardır: bir akşam
              içinde limanda başlayıp otel hattında devam eden bir program kurmak
              mümkündür. Dezavantajı, yaz aylarında Temmuz-Ağustos döneminde
              kalabalığın ve talebin zirveye çıkmasıdır; bu dönemde masa bulmak
              rezervasyonsuz zordur.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-8">
              Lefkoşa gece hayatı
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Lefkoşa, başkent olması nedeniyle yıl boyu istikrarlı ve turist
              trafiğinden görece bağımsız bir gece sahnesine sahiptir. Şehrin iki
              ekseni öne çıkar: tarihi surlariçi bölgesindeki restore edilmiş
              yapılarda kurulmuş kafe-bar hattı ve Dereboyu ekseni boyunca uzanan
              modern bar, restoran ve eğlence mekanları. Buradaki misafir profili
              ağırlıklı olarak yereldir; iş seyahati için Lefkoşa&apos;da konaklayan
              ziyaretçiler için de en pratik seçenektir. Lefkoşa&apos;nın karakteri
              Girne&apos;ye göre daha sakin ve daha az sezonluktur — Ocak ayındaki bir
              Cumartesi gecesi ile Ağustos ayındaki bir Cumartesi gecesi arasındaki
              fark burada en azdır.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-8">
              Gazimağusa gece hayatı
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Gazimağusa, üniversite şehri dinamiğiyle en genç ve genellikle en uygun
              bütçeli gece hayatına sahiptir. Şehirdeki üniversite nüfusu, akademik
              dönem boyunca — kabaca Ekim-Haziran arası — mekanların doluluğunu
              belirler. Bu, Kıbrıs&apos;taki diğer şehirlerin tersine bir mevsimsellik
              yaratır: Gazimağusa yaz ortasında görece sakinleşirken, dönem içindeki
              hafta içi geceleri bile hareketli olabilir. Sahil hattındaki mekanlar
              ve şehir merkezindeki bar yoğunluğu iki ana odağı oluşturur.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-8">
              İskele ve Long Beach hattı
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              İskele ve Long Beach hattı, KKTC&apos;nin otel ve konut yatırımlarıyla
              en hızlı büyüyen bölgesidir ve gece hayatı da bu yatırımlara bağlı
              olarak gelişmektedir. Buradaki eğlence büyük ölçüde otel eksenlidir:
              plaj kulüpleri, otel içi sahne programları ve sezonluk açık hava
              etkinlikleri. Bölgenin karakteri belirgin biçimde yaz odaklıdır; kış
              aylarında seçenekler daralır. İskele&apos;de konaklayıp Girne veya
              Gazimağusa&apos;da bir gece planlıyorsanız, dönüş ulaşımını çıkmadan
              önce bağlamanız şarttır.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Özetle: şehri seçmek aslında geceyi seçmektir. Turistik yoğunluk ve
              seçenek genişliği istiyorsanız Girne, yerel ve istikrarlı bir sahne
              istiyorsanız Lefkoşa, genç ve ekonomik bir gece istiyorsanız Gazimağusa
              öne çıkar. Şehri belirledikten sonraki adım mekan türü ve mekanın
              kendisidir; bu aşamada nelere dikkat edilmesi gerektiğini{" "}
              <Link
                href="/kibris-night-club"
                className="text-gold underline underline-offset-4 hover:text-gold-light transition-colors"
              >
                KKTC gece kulübü seçimi
              </Link>{" "}
              başlığı altında ayrıntılı olarak ele aldık.
            </p>
          </div>
        </div>
      </section>

      {/* Gün ve sezon */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2
              id="hangi-gun-hangi-sezon"
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              <span className="text-foreground">Hangi gün ve hangi sezon</span>{" "}
              <span className="text-gradient-gold">daha hareketli?</span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Kıbrıs gece hayatının en hareketli günleri Cuma ve Cumartesi, en yoğun
              dönemi ise Haziran-Eylül arasıdır. Gün içindeki en yoğun saat aralığı
              haftanın hangi günü olursa olsun 00:00-03:00 arasında kalır. Bu iki
              bilgi bir geceyi planlarken en çok işe yarayan iki değişkendir: yoğun
              bir gece daha canlı bir atmosfer ama daha zor masa bulma anlamına gelir;
              sakin bir gece ise daha rahat servis ve genellikle daha esnek koşullar
              sunar.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-8">
              Haftanın günlerine göre yoğunluk
            </h3>
            <ul className="space-y-3 mb-6">
              {[
                "Pazartesi ve Salı: En sakin günler. Mekanlar açıktır ancak program daha dar tutulur; rezervasyonsuz gelseniz de yer bulma olasılığınız yüksektir.",
                "Çarşamba ve Perşembe: Hareketlenmenin başladığı günler. Özellikle üniversite döneminde Gazimağusa'da Çarşamba geceleri hafta sonuna yakın yoğunluk görebilir.",
                "Cuma: Hafta sonunun açılışı. Gece kulüplerinde masalar akşam saatlerinde dolmaya başlar, rezervasyon belirgin avantaj sağlar.",
                "Cumartesi: Haftanın en yoğun gecesi. Rezervasyonsuz masa bulmak, özellikle yaz aylarında Girne'de çoğu zaman mümkün olmaz.",
                "Pazar: Yaz sezonunda hâlâ hareketli, kış aylarında belirgin biçimde sakin. Ertesi gün iş günü olduğu için program erken biter.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CalendarDays className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-muted-foreground leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-8">
              Sezona göre yoğunluk
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Haziran-Eylül arası dönem, turist trafiğinin ve açık hava mekanlarının
              aynı anda devreye girmesiyle yılın zirvesidir. Bu dönemde sahil barları
              ve plaj kulüpleri tam kapasite çalışır, otel programları genişler ve
              gece kulüplerinde hafta içi geceler bile hafta sonu yoğunluğuna
              yaklaşabilir. Ekim-Mayıs arasında ise sahne kapalı mekanlara taşınır:
              casinolar, gece kulüpleri ve canlı müzik mekanları programı taşır.
              Kış dönemi genellikle daha sakin, daha uygun fiyatlı ve rezervasyon
              açısından daha esnektir.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Üçüncü bir değişken tatil dönemleridir. Yılbaşı, resmi tatiller ve
              uzun hafta sonları, takvimde nereye denk gelirse gelsin yoğunluğu
              yukarı çeker; bu tarihlerde birçok mekan özel program uygular ve
              koşullar normal bir geceden farklı olabilir. Böyle tarihlerde gitmeyi
              planlıyorsanız hem yerin hem koşulların önceden yazılı olarak teyit
              edilmesi en güvenli yöntemdir.
            </p>
          </div>
        </div>
      </section>

      {/* Bütçe */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2
              id="bir-gece-ne-kadara-mal-olur"
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              <span className="text-foreground">Kıbrıs&apos;ta bir gece</span>{" "}
              <span className="text-gradient-gold">ne kadara mal olur?</span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Kıbrıs&apos;ta bir gecenin maliyeti tek bir kalemden değil, dört kalemin
              toplamından oluşur: mekan girişi veya masa bedeli, içecek düzeni,
              yeme-içme ve ulaşım. Bu rehberde güncel rakam verilmez, çünkü tutarlar
              sezona, güne, şehre ve mekana göre değişir ve hızla eskir. Bunun yerine
              maliyetin nasıl oluştuğunu bilmek daha kalıcı bir bilgidir: kalemleri
              tanıdığınızda hem bütçenizi doğru kurarsınız hem de bir mekanın size
              verdiği fiyatın neyi kapsadığını sorabilirsiniz.
            </p>

            <div className="overflow-x-auto rounded-2xl border border-border mb-8">
              <table className="w-full text-left border-collapse min-w-[720px]">
                <caption className="sr-only">
                  Kıbrıs&apos;ta ekonomik, orta segment ve premium bir gecenin
                  bütçe kalemlerine göre karşılaştırması
                </caption>
                <thead className="bg-muted/50">
                  <tr>
                    <th
                      scope="col"
                      className="px-5 py-4 text-sm font-semibold text-gold"
                    >
                      Bütçe kalemi
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-4 text-sm font-semibold text-gold"
                    >
                      Ekonomik gece
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-4 text-sm font-semibold text-gold"
                    >
                      Orta segment gece
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-4 text-sm font-semibold text-gold"
                    >
                      Premium gece
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {budgetTiers.map((row) => (
                    <tr key={row.item} className="border-t border-border">
                      <th
                        scope="row"
                        className="px-5 py-4 text-sm font-medium text-foreground text-left"
                      >
                        {row.item}
                      </th>
                      <td className="px-5 py-4 text-sm text-muted-foreground">
                        {row.economy}
                      </td>
                      <td className="px-5 py-4 text-sm text-muted-foreground">
                        {row.mid}
                      </td>
                      <td className="px-5 py-4 text-sm text-muted-foreground">
                        {row.premium}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-8">
              Bütçeyi asıl belirleyen dört değişken
            </h3>
            <ul className="space-y-3 mb-6">
              {[
                "Masa tipi: Gece kulüplerinde toplam tutarı en çok belirleyen kalemdir. Standart masa en uygun seçenek, VIP masa ara seviye, özel oda en yüksek seviyedir.",
                "İçecek düzeni: Adet bazlı sipariş küçük gruplar için, şişe veya içecek paketi kalabalık gruplar için genellikle daha hesaplıdır. Hangisinin uygun olduğunu kişi sayısı belirler.",
                "Minimum harcama: Bazı mekanlar masa başına bir alt sınır uygular. Bu bir ek ücret değil, harcamanız gereken taban tutardır — rezervasyon sırasında sormanız gereken ilk sorudur.",
                "Tarih ve sezon: Cumartesi gecesi ile Salı gecesi, Ağustos ile Şubat arasında koşullar farklılaşır. Aynı mekan aynı masayı farklı tarihlerde farklı koşullarla verebilir.",
                "Ulaşım: Bütçede en sık unutulan kalem gidiş-dönüş taksidir. Özellikle şehirler arası bir plan yapıyorsanız bu tutar gecenin toplamında hatırı sayılır bir yer tutar.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Wallet className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-muted-foreground leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Pratik kural şudur: rezervasyon aşamasında toplam tutarı ve neyi
              kapsadığını yazılı olarak isteyin. Yazılı teyit hem sizi hem mekanı
              korur, çünkü gecenin sonunda hesapla ilgili bir belirsizlik kalmaz.
              Fiyatını yazılı vermekten kaçınan bir mekan, o gecenin geri kalanı
              hakkında da yeterince açık bilgi vermeyecektir.
            </p>
          </div>
        </div>
      </section>

      {/* Ulaşım */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2
              id="gece-ulasimi"
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              <span className="text-foreground">Kıbrıs&apos;ta gece ulaşımı</span>{" "}
              <span className="text-gradient-gold">nasıl sağlanır?</span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Kıbrıs&apos;ta gece ulaşımı taksi, önceden ayarlanmış transfer veya özel
              araçla sağlanır; toplu taşıma gece saatlerinde çalışmaz. Bu tek cümle,
              adaya ilk kez gelen misafirlerin en sık yaşadığı sorunun da cevabıdır:
              gitmek kolaydır, sorun dönüştür. Bu yüzden Kıbrıs&apos;ta bir gece planı
              her zaman iki yönlü kurulur — çıkmadan önce dönüşün nasıl olacağı belli
              olmalıdır.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-8">
              Havalimanından şehirlere ulaşım
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              KKTC&apos;ye giriş noktası Ercan Havalimanı&apos;dır. Ercan
              Havalimanı&apos;ndan Girne ve Lefkoşa&apos;ya araçla yaklaşık 30-45
              dakikada ulaşılır; Gazimağusa ve İskele yönü için süre bir miktar
              uzayabilir. Havalimanında taksi bulunur, ancak uçuşunuz gece geç
              saatteyse otelinizden veya bir transfer firmasından önceden araç
              ayarlatmak hem bekleme süresini hem belirsizliği ortadan kaldırır.
              Deniz yoluyla Girne Limanı üzerinden gelen misafirler için de aynı
              mantık geçerlidir.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-8">
              Gece taksi ve transfer
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Şehir içi ve şehirler arası gece ulaşımının ana yöntemi taksidir.
              Kıbrıs&apos;ta taksiler genellikle taksimetre yerine bölge bazlı tarife
              ile çalışır; bu nedenle bineceğiniz zaman tutarı önceden sormak yerleşik
              ve normal bir davranıştır. İkinci yöntem transferdir: otelinizin
              resepsiyonu ya da gideceğiniz mekan, anlaşmalı bir araçla kapıdan kapıya
              ulaşım ayarlayabilir. Transferin avantajı, dönüş saatinin de baştan
              belirlenmiş olmasıdır — gecenin sonunda araç aramak zorunda kalmazsınız.
              Rezervasyon yaparken kaldığınız otel veya bölgeyi belirtmeniz,
              çoğu mekanın bu düzenlemede size yardımcı olması için yeterlidir.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-8">
              Araç kiralama ve alkol
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Araç kiralamak Kıbrıs&apos;ta gündüz gezileri için pratiktir, ancak gece
              programı için tek başına yeterli bir çözüm değildir. KKTC&apos;de trafik
              soldan akar ve bu, sağdan trafiğe alışkın sürücüler için gece
              saatlerinde ek bir dikkat gerektirir. Daha önemlisi: alkol alacaksanız
              kesinlikle araç kullanmayın. KKTC&apos;de alkollü araç kullanımına
              yönelik denetimler sıkıdır ve yaptırımları ciddidir. Grupla
              geliyorsanız en yaygın çözüm, grubun içinden bir kişinin alkol
              almaması ya da gecenin tamamı için taksi veya transfer kullanılmasıdır.
            </p>
          </div>
        </div>
      </section>

      {/* Güvenlik */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2
              id="kibris-gece-hayati-guvenli-mi"
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              <span className="text-foreground">Kıbrıs gece hayatı</span>{" "}
              <span className="text-gradient-gold">güvenli mi?</span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Evet, Kıbrıs gece hayatı genel olarak güvenlidir ve turistlere yönelik
              ciddi bir sorun yaşanmaz. KKTC küçük ve turizme dayalı bir ekonomiye
              sahip olduğu için eğlence sektörü denetime tabidir ve mekanlar itibar
              kaybını göze alamaz. Yine de her turistik destinasyonda geçerli olan
              temel önlemler burada da geçerlidir; aşağıdaki başlıklar sorunların
              büyük çoğunluğunu daha oluşmadan ortadan kaldırır.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-8">
              Ödeme ve para birimi
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              KKTC&apos;de resmi para birimi Türk Lirası&apos;dır ve gece mekanlarında
              ödemeler ağırlıklı olarak TL ile yapılır. Turistik bölgelerde Sterlin ve
              Euro da kabul edilebilir, ancak kur mekan tarafından belirlendiği için
              bu genellikle sizin aleyhinize olur; mümkünse TL ile ödemek daha
              avantajlıdır. Kart ödemesi yaygındır, fakat taksi ve bahşiş için
              yanınızda bir miktar nakit bulundurmak pratik olur. Hesabı kapatırken
              adisyonu görmek isteyin — bu ne olağandışı ne de kaba bir taleptir.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-8">
              Mekanda ve yolda temel önlemler
            </h3>
            <ul className="space-y-3 mb-6">
              {[
                "Ruhsatlı mekanları tercih edin. Ruhsatlı bir işletmede güvenlik personeli, yangın düzenlemesi ve hesap disiplini kurumsal olarak vardır.",
                "Hesabı önceden netleştirin. Masa tipi, minimum harcama ve içecek düzeninin ne olduğunu girişten önce yazılı olarak öğrenin.",
                "İçeceğinizi gözünüzün önünden ayırmayın. Bu, dünyanın her yerinde geçerli olan en temel gece kuralıdır.",
                "Dönüş ulaşımınızı bilinen bir taksi veya transferle yapın; sokakta rastgele durdurulan bir araca binmeyin.",
                "Değerli eşyalarınızı otel kasasında bırakın. Yanınızda yalnızca o gece ihtiyaç duyacağınız kart, nakit ve kimliği taşıyın.",
                "Telefonunuzu şarjlı tutun ve konakladığınız yerin adını yazılı olarak yanınızda bulundurun.",
                "Grupla geliyorsanız buluşma noktası ve saati belirleyin; kalabalık bir mekanda telefon her zaman çalmaz.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-muted-foreground leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Mahremiyet konusuna ayrıca değinmek gerekir. Kıbrıs&apos;taki gece
              kulüplerinin büyük çoğunluğunda mekan içinde fotoğraf ve video çekimi
              yasaktır ve bu kural personel tarafından aktif olarak uygulanır. Kural
              kısıtlayıcı görünse de aslında misafirin lehinedir: kimse sizin
              görüntünüzü izinsiz kaydedemez. Özel bir kutlama için görsel kayıt
              istiyorsanız, bunu rezervasyon aşamasında mekan yönetimine iletmeniz
              gerekir.
            </p>
          </div>
        </div>
      </section>

      {/* 10 öneri */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2
              id="ilk-kez-gelenler-icin-10-pratik-oneri"
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              <span className="text-foreground">İlk kez gelenler için</span>{" "}
              <span className="text-gradient-gold">10 pratik öneri</span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Aşağıdaki on madde, Kıbrıs&apos;ta ilk gecesini geçirecek bir misafirin
              en sık karşılaştığı sorunları önceden çözer. Her madde tek başına
              uygulanabilir; sırayla okunması gerekmez.
            </p>

            <ol className="list-decimal list-outside pl-6 space-y-5 mb-8 marker:text-gold marker:font-semibold">
              <li className="pl-2">
                <strong className="text-foreground font-semibold">
                  Geceyi 21:00&apos;e göre değil 23:00&apos;e göre planlayın.
                </strong>{" "}
                <span className="text-muted-foreground leading-relaxed">
                  Kıbrıs&apos;ta gece kulüpleri 21:00&apos;de açılır ama asıl
                  hareketlilik 23:00&apos;ten sonra başlar ve 00:00-03:00 arasında
                  zirveye çıkar. Çok erken giderseniz boş bir salon bulursunuz.
                  Akşam yemeğini geç saate almak yerel alışkanlığa da uygundur.
                </span>
              </li>
              <li className="pl-2">
                <strong className="text-foreground font-semibold">
                  Hafta sonu için en az bir gün önceden rezervasyon yapın.
                </strong>{" "}
                <span className="text-muted-foreground leading-relaxed">
                  Cuma ve Cumartesi geceleri masalar akşam saatlerinde dolar;
                  rezervasyonsuz gelen misafirlere yer garantisi verilemez. Hafta içi
                  için aynı gün rezervasyon genellikle mümkündür, ancak yine de bir
                  mesaj atmak size hem masa hem fiyat teyidi kazandırır.
                </span>
              </li>
              <li className="pl-2">
                <strong className="text-foreground font-semibold">
                  Toplam tutarı ve neyi kapsadığını yazılı olarak isteyin.
                </strong>{" "}
                <span className="text-muted-foreground leading-relaxed">
                  Giriş, masa tipi, minimum harcama ve içecek paketi ayrı kalemlerdir.
                  WhatsApp üzerinden alınan yazılı bir teyit, gecenin sonunda hesapla
                  ilgili her türlü belirsizliği ortadan kaldırır ve bu talep her
                  ciddi mekanda normal karşılanır.
                </span>
              </li>
              <li className="pl-2">
                <strong className="text-foreground font-semibold">
                  Kimliğinizi veya pasaportunuzu mutlaka yanınıza alın.
                </strong>{" "}
                <span className="text-muted-foreground leading-relaxed">
                  Gece kulüpleri ve casinolar 18 yaş ve üzerine hizmet verir ve
                  girişte geçerli kimlik ibrazı zorunludur. Bu kural mekanların
                  takdirine bırakılmamıştır; kimliği olmayan misafir yaşından
                  bağımsız olarak içeri alınmaz. Grupla geliyorsanız herkesin
                  kimliğini kontrol edin.
                </span>
              </li>
              <li className="pl-2">
                <strong className="text-foreground font-semibold">
                  Smart casual giyinin, spor ayakkabıyı otelde bırakın.
                </strong>{" "}
                <span className="text-muted-foreground leading-relaxed">
                  Gece kulüplerinin çoğunda şort, atlet, plaj kıyafeti ve spor
                  ayakkabı kabul edilmez. Erkekler için gömlek veya şık bir üst ile
                  klasik ayakkabı, kadınlar için gece kıyafeti standardı beklenir.
                  Sahil barlarında kural esnektir; tereddüt ederseniz rezervasyon
                  sırasında sorun.
                </span>
              </li>
              <li className="pl-2">
                <strong className="text-foreground font-semibold">
                  Dönüş ulaşımını çıkmadan önce bağlayın.
                </strong>{" "}
                <span className="text-muted-foreground leading-relaxed">
                  Gece saatlerinde toplu taşıma çalışmaz. Otelden çıkmadan önce ya
                  dönüş taksisini ayarlayın ya da mekandan transfer talep edin.
                  Bu, ilk kez gelen misafirlerin en sık yaşadığı sorunu tamamen
                  ortadan kaldırır.
                </span>
              </li>
              <li className="pl-2">
                <strong className="text-foreground font-semibold">
                  Alkol alacaksanız araç kullanmayın.
                </strong>{" "}
                <span className="text-muted-foreground leading-relaxed">
                  KKTC&apos;de alkollü araç kullanımına yönelik denetimler sıkıdır ve
                  yaptırımlar ciddidir. Ayrıca trafik soldan akar; alkolsüz bile olsa
                  gece saatlerinde alışkın olmadığınız bir düzende araç kullanmak ek
                  risk yaratır. Grup içinden bir kişiyi sürücü olarak belirleyin ya
                  da taksi kullanın.
                </span>
              </li>
              <li className="pl-2">
                <strong className="text-foreground font-semibold">
                  Ödemeyi Türk Lirası ile yapın, yanınızda biraz nakit bulundurun.
                </strong>{" "}
                <span className="text-muted-foreground leading-relaxed">
                  KKTC&apos;de resmi para birimi Türk Lirası&apos;dır. Sterlin ve Euro
                  turistik bölgelerde kabul edilse de kur mekan tarafından belirlenir
                  ve genelde dezavantajlıdır. Kart ödemesi yaygındır, ancak taksi ve
                  bahşiş için nakit pratiktir.
                </span>
              </li>
              <li className="pl-2">
                <strong className="text-foreground font-semibold">
                  Mekan içinde fotoğraf çekmeyi baştan planlamayın.
                </strong>{" "}
                <span className="text-muted-foreground leading-relaxed">
                  Gece kulüplerinin büyük çoğunluğunda fotoğraf ve video çekimi
                  yasaktır; bu kural tüm misafirlerin mahremiyetini korumak için
                  vardır. Doğum günü gibi özel bir kutlama için görsel kayıt
                  istiyorsanız, izni rezervasyon aşamasında talep edin.
                </span>
              </li>
              <li className="pl-2">
                <strong className="text-foreground font-semibold">
                  Şehri seçin, sonra mekanı seçin.
                </strong>{" "}
                <span className="text-muted-foreground leading-relaxed">
                  Gece saatlerinde şehirler arası ulaşım taksiye bağlıdır ve bütçeye
                  eklenir. Konakladığınız şehirde kalmak hem maliyeti hem riski
                  düşürür: Girne&apos;de seçenek genişliği, Lefkoşa&apos;da yerel bir
                  sahne, Gazimağusa&apos;da genç ve ekonomik bir gece bulursunuz.
                </span>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* SSS */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2
              id="sik-sorulan-sorular"
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              <span className="text-foreground">Kıbrıs gece hayatı</span>{" "}
              <span className="text-gradient-gold">sık sorulan sorular</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Kıbrıs gece hayatı hakkında en sık sorulan on soru ve doğrudan
              cevapları.
            </p>

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

      {/* Marka bölümü */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2
              id="gece-kulubu-deneyimi-onerimiz"
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              <span className="text-foreground">Gece kulübü deneyimi için</span>{" "}
              <span className="text-gradient-gold">önerimiz nedir?</span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Bu rehberi yayımlayan{" "}
              <Link
                href="/night-club"
                className="text-gold underline underline-offset-4 hover:text-gold-light transition-colors"
              >
                Faraon Night Club
              </Link>
              , KKTC&apos;de faaliyet gösteren ruhsatlı bir gece kulübüdür ve
              yukarıdaki başlıkların tamamını kendi misafirleri için uygular: 18 yaş
              sınırı ve kimlik kontrolü, smart casual kıyafet kuralı, mekan içinde
              fotoğraf yasağı ve rezervasyon aşamasında yazılı fiyat teyidi. Masa,
              VIP masa ve özel oda seçenekleri, transfer düzenlemesi ve grup
              organizasyonları dahil{" "}
              <Link
                href="/hizmetler"
                className="text-gold underline underline-offset-4 hover:text-gold-light transition-colors"
              >
                sunduğumuz hizmetler
              </Link>{" "}
              hakkında ayrıntılı bilgi alabilirsiniz.
            </p>

            <div className="grid gap-6 md:grid-cols-2 mb-8">
              <div className="p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-gold/50 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Clock className="w-7 h-7 text-gold" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Çalışma saatlerimiz
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Faraon Night Club haftanın yedi günü, her gün 08:00 - 01:00
                  saatleri arasında açıktır. Program rezervasyonu yapan
                  misafirlerimiz için düzenlenen gece programları ise genellikle
                  01:00 civarında başlayıp sabah 07:00&apos;ye kadar sürer.
                </p>
              </div>

              <div className="p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-gold/50 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Car className="w-7 h-7 text-gold" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Ulaşım desteği
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Rezervasyon sırasında kaldığınız otel veya bölgeyi bildirdiğinizde
                  ulaşım düzenlemesinde yardımcı oluyoruz. Alkol alacak misafirlerimizin
                  araç kullanmamasını, gidiş ve dönüş ulaşımını önceden planlamasını
                  öneriyoruz.
                </p>
              </div>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed">
              Kıbrıs gece hayatının diğer başlıklarını — şehir rehberleri, mekan
              seçimi ve sezon önerileri — okumak isterseniz{" "}
              <Link
                href="/rehber"
                className="text-gold underline underline-offset-4 hover:text-gold-light transition-colors"
              >
                Kıbrıs gece hayatı yazıları
              </Link>{" "}
              bölümünde toplandı.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 mx-auto">
              <MapPin className="w-7 h-7 text-gold" />
            </div>
            <h2
              id="rezervasyon-ve-iletisim"
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              <span className="text-gradient-gold">Gecenizi planlamak için</span>{" "}
              <span className="text-foreground">bize yazın</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Tarih, kişi sayısı ve tercih ettiğiniz masa tipini yazmanız yeterli;
              Faraon Night Club ekibi uygunluğu ve toplam tutarı yazılı olarak teyit
              eder. Ulaşım ve grup organizasyonu talepleriniz için de{" "}
              <Link
                href="/iletisim"
                className="text-gold underline underline-offset-4 hover:text-gold-light transition-colors"
              >
                bize ulaşın
              </Link>
              .
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <a
                  href={waLink(
                    "Merhaba, Kıbrıs gece hayatı rehberinizi okudum. Rezervasyon hakkında bilgi almak istiyorum.",
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
          </div>
        </div>
      </section>
    </article>
  );
}
