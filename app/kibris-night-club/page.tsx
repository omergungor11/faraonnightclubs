import type { Metadata } from "next";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbNode, faqNode, graph, webPageNode } from "@/lib/schema";
import { PHONE_DISPLAY, PHONE_E164, waLink } from "@/lib/site";
import {
  Car,
  Check,
  Clock,
  CreditCard,
  Crown,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Ticket,
  Users,
} from "lucide-react";

const PATH = "/kibris-night-club";

const TITLE = "Kıbrıs Night Club | KKTC Gece Kulübü Rehberi";
const DESCRIPTION =
  "Kıbrıs night club rehberi: Lefkoşa, Girne ve Gazimağusa'da gece kulübü seçimi, fiyat aralıkları, giriş kuralları, ulaşım ve rezervasyon için bilmeniz gerekenler.";

const LINK_CLASS =
  "text-gold underline underline-offset-4 hover:text-gold-light transition-colors";

const CITIES = [
  {
    city: "Girne",
    density: "En yüksek",
    character: "Otel ve casino ekosistemi, liman hattı",
    profile: "Turist ağırlıklı, karma yaş grubu",
    season: "Yıl boyu, Haziran-Eylül zirve",
  },
  {
    city: "Lefkoşa",
    density: "Yüksek",
    character: "Başkent, iş seyahati ve yerel talep",
    profile: "Yerel misafir ve iş amaçlı ziyaretçi",
    season: "Yıl boyu istikrarlı",
  },
  {
    city: "Gazimağusa",
    density: "Orta-yüksek",
    character: "Üniversite şehri, sahil hattı",
    profile: "Daha genç, öğrenci yoğunluklu",
    season: "Akademik dönemde canlı, yaz sakin",
  },
  {
    city: "İskele - Bafra",
    density: "Artan",
    character: "Yeni otel yatırımları, tatil bölgesi",
    profile: "Otel misafiri, tatilci",
    season: "Ağırlıklı yaz sezonu",
  },
];

const PRICE_PARTS = [
  {
    icon: Ticket,
    title: "Giriş",
    text: "Mekana giriş için alınan tutardır. Bazı mekanlarda gün ve saate göre değişir, bazı mekanlarda ise masa rezervasyonu yapan misafirler için toplam tutarın içine dahil edilir.",
  },
  {
    icon: Crown,
    title: "Masa tipi",
    text: "Toplam maliyeti en çok etkileyen kalemdir. Ana salondaki standart masa en uygun seçenek, ayrılmış bölgedeki VIP masa orta seviye, kapalı özel oda ise en üst seviyedir.",
  },
  {
    icon: CreditCard,
    title: "Minimum harcama",
    text: "Bir masanın ayrılabilmesi için taahhüt edilen alt sınırdır. Ödediğiniz tutar servis olarak masanıza döner; masa ne kadar ayrıcalıklıysa minimum harcama da o kadar yükselir.",
  },
  {
    icon: Sparkles,
    title: "İçecek paketi",
    text: "Şişe ve karışım servisinin önceden belirlenmiş bir bütün olarak alınmasıdır. Tek tek sipariş yerine paket tercih edildiğinde toplam tutar rezervasyon anında netleşir.",
  },
];

const ROOM_TYPES = [
  {
    type: "Standart masa",
    capacity: "Genellikle 2-4 kişi",
    privacy: "Ana salon içinde, açık düzen",
    service: "Standart masa servisi",
    fit: "İlk ziyaret, kısa süreli plan, ekonomik tercih",
  },
  {
    type: "VIP masa",
    capacity: "Genellikle 4-8 kişi",
    privacy: "Ayrılmış bölge, salona hakim konum",
    service: "Öncelikli servis, ayrılmış personel",
    fit: "Arkadaş grupları, kutlama, konforlu gece",
  },
  {
    type: "Özel oda",
    capacity: "Grup büyüklüğüne göre planlanır",
    privacy: "Kapalı alan, dışarıdan görünmez",
    service: "Odaya özel servis düzeni",
    fit: "Mahremiyet önceliği, özel organizasyon, kurumsal ağırlama",
  },
];

const TRANSPORT = [
  {
    icon: Car,
    title: "Taksi",
    text: "Gece saatlerinde en yaygın çözümdür. Bilinen bir taksi hattını tercih edin ve dönüş için aynı sürücüden saat alın; yoğun gecelerde çıkışta araç bulmak zorlaşabilir.",
  },
  {
    icon: Users,
    title: "Mekan transferi",
    text: "Birçok gece kulübü rezervasyon sırasında otel veya bölge bilgisi alarak transfer düzenlemesine yardımcı olur. Gidiş ve dönüşün birlikte planlanması en pratik yoldur.",
  },
  {
    icon: ShieldCheck,
    title: "Kiralık araç",
    text: "Gündüz ulaşımı için rahattır, ancak alkol alacaksanız kullanılmamalıdır. KKTC'de alkollü araç kullanımına yönelik denetimler sıkıdır ve sürücü sorumluluğu tamamen size aittir.",
  },
];

const CRITERIA = [
  {
    title: "Ruhsat ve yasal statü",
    text: "Mekanın KKTC mevzuatına göre ruhsatlı bir işletme olduğundan emin olun. Ruhsatlı mekan, denetlenen mekandır; güvenlik, hijyen ve servis standartları takip edilebilir durumdadır.",
  },
  {
    title: "Şeffaf fiyatlandırma",
    text: "Giriş, masa tipi, minimum harcama ve içecek paketi kalemlerinin ayrı ayrı açıklanabildiği bir mekan tercih edin. Kalemleri açıklamaktan kaçınan işletmelerde toplam tutar hesap anında sürprize dönüşebilir.",
  },
  {
    title: "Yazılı ön teyit",
    text: "Rezervasyonun tarih, kişi sayısı, masa tipi ve toplam tutar bilgisini içeren yazılı bir mesajla teyit edilmesini isteyin. Sözlü mutabakatın aksine yazılı teyit her iki taraf için de bağlayıcı bir kayıttır.",
  },
  {
    title: "Ulaşım ve dönüş planı",
    text: "Mekanın ulaşım konusunda yönlendirme yapıp yapmadığını sorun. Gece toplu taşıma çalışmadığı için dönüş, gidişten daha kritik bir başlıktır ve rezervasyon aşamasında çözülmelidir.",
  },
  {
    title: "Güvenlik personeli",
    text: "Girişte kimlik kontrolü yapan, salon içinde görünür konumda duran profesyonel bir güvenlik ekibi iyi işletilen bir mekanın en net göstergesidir. Kimlik kontrolünü esneten mekanlar diğer kurallarda da esner.",
  },
  {
    title: "İletişim hızı",
    text: "Rezervasyon mesajınıza makul sürede, sorularınızı tek tek yanıtlayarak dönen bir ekip, gece içinde de aynı ilgiyi gösterir. Yavaş ve belirsiz iletişim, mekanın operasyonel düzeni hakkında bilgi verir.",
  },
  {
    title: "Mahremiyet politikası",
    text: "Mekan içinde fotoğraf ve video çekiminin yasak olduğunu, iletişim bilgilerinizin üçüncü taraflarla paylaşılmadığını açıkça belirten işletmeleri tercih edin. Mahremiyet, bu kategoride ölçülebilir bir kalite ölçütüdür.",
  },
];

const RESERVATION_STEPS = [
  {
    title: "İletişime geçin",
    text: "WhatsApp hattı üzerinden yazın veya telefonla arayın. Yazışma, sonradan geri dönüp bakabileceğiniz bir kayıt bıraktığı için tercih edilen yöntemdir.",
  },
  {
    title: "Bilgileri iletin",
    text: "Tarih, saat, kişi sayısı ve tercih ettiğiniz masa tipini tek mesajda bildirin. Doğum günü gibi özel bir kutlama varsa bunu da baştan belirtin.",
  },
  {
    title: "Yazılı teyit alın",
    text: "Mekan uygunluğu, masa tipini ve toplam tutarı yazılı olarak onaylar. Bu adım tamamlanmadan rezervasyonunuzu kesinleşmiş saymayın.",
  },
  {
    title: "Ulaşımı planlayın",
    text: "Aynı yazışmada dönüş ulaşımınızı da konuşun. Transfer veya taksi düzenlemesi rezervasyonla birlikte yapıldığında gece sonunda sorun yaşanmaz.",
  },
];

// Single source of truth: this array feeds BOTH the visible accordion and the
// FAQPage markup, so the two cannot drift apart. A markup-only FAQ is a
// manual-action risk.
const FAQS = [
  {
    question: "Kıbrıs'ta night club nedir?",
    answer:
      "Kıbrıs'ta night club, KKTC yasalarına göre ruhsatlandırılmış, 18 yaş üstü misafirlere yönelik gece eğlence mekanıdır. Bar veya diskotekten farkı, masa ve özel oda düzeninde çalışması, servisin masaya verilmesi ve girişin kimlik kontrolüyle yapılmasıdır. Mekanlar genellikle gece geç saatlerde açılır ve rezervasyonla çalışır.",
  },
  {
    question: "Kıbrıs'ta night club fiyatları ne kadar?",
    answer:
      "Kıbrıs'ta night club maliyeti tek bir giriş ücretinden oluşmaz; giriş, masa tipi, minimum harcama ve içecek paketi ayrı kalemlerdir. Toplam tutarı belirleyen ana etken seçtiğiniz masa tipidir: standart masa en uygun seçenek, özel oda en yüksek seviyedir. Güncel rakamlar sezona göre değiştiği için rezervasyon sırasında yazılı teyit almanız önerilir.",
  },
  {
    question: "Kıbrıs night club'a giriş yaşı kaç?",
    answer:
      "Kıbrıs'ta night club girişi 18 yaş ve üzeri misafirlere açıktır. Girişte geçerli bir kimlik kartı veya pasaport ibrazı zorunludur; kimliği olmayan misafirler yaşından bağımsız olarak içeri alınmaz. Bu kural KKTC mevzuatı gereği olup mekanların takdirine bırakılmamıştır, dolayısıyla istisna uygulanmaz.",
  },
  {
    question: "Kıbrıs'ta gece kulüpleri hangi şehirlerde?",
    answer:
      "Kıbrıs'ta gece kulüpleri ağırlıklı olarak Lefkoşa, Girne, Gazimağusa ve İskele bölgelerinde bulunur. Girne turistik yoğunluğu ve otel-casino ekosistemiyle öne çıkar, Lefkoşa başkent olması nedeniyle yıl boyu istikrarlıdır, Gazimağusa üniversite şehri dinamiğiyle daha genç bir profile sahiptir. İskele-Bafra hattı otel yatırımlarıyla büyüyen yeni bölgedir.",
  },
  {
    question: "Night club'a rezervasyon yapmak zorunlu mu?",
    answer:
      "Rezervasyon zorunlu değildir ancak şiddetle önerilir. Hafta sonları ve tatil dönemlerinde masalar önceden dolduğu için rezervasyonsuz gelen misafirlere yer garantisi verilemez. Rezervasyon ayrıca masa tipini, kişi sayısını ve toplam tutarı önceden netleştirmenizi sağlar; böylece mekana geldiğinizde sürpriz bir maliyetle karşılaşmazsınız.",
  },
  {
    question: "Kıbrıs night club'a nasıl gidilir?",
    answer:
      "Kıbrıs'ta night club'lara ulaşım genellikle özel araç, taksi veya mekanın transfer hizmetiyle sağlanır. Ercan Havalimanı'ndan Girne ve Lefkoşa'ya araçla yaklaşık 30-45 dakikada ulaşılır. Toplu taşıma gece saatlerinde çalışmadığı için dönüş ulaşımınızı önceden planlamanız gerekir; birçok mekan rezervasyon sırasında transfer düzenlemesine yardımcı olur.",
  },
  {
    question: "Night club'da kıyafet kuralı var mı?",
    answer:
      "Evet, Kıbrıs'taki night club'ların çoğu smart casual kıyafet kuralı uygular. Erkekler için gömlek veya şık bir üst ile klasik ayakkabı beklenir; spor ayakkabı, şort, atlet ve plaj kıyafetleri genellikle kabul edilmez. Kadınlar için gece kıyafeti standardı geçerlidir. Kural netleşsin diye rezervasyon sırasında sormanız en pratik yoldur.",
  },
  {
    question: "Kıbrıs'ta night club'lar saat kaça kadar açık?",
    answer:
      "Faraon Night Club haftanın yedi günü açıktır: Pazartesi-Perşembe ve Pazar günleri 21:00-04:00, Cuma ve Cumartesi günleri 21:00-06:00 saatleri arasında hizmet verir. En yoğun saatler 00:00-03:00 arasıdır. Sezon dışında bazı mekanlar programını daraltabileceği için gitmeyi planladığınız günün saatlerini önceden teyit etmeniz doğru olur.",
  },
  {
    question: "Night club'a yalnız gitmek uygun mu?",
    answer:
      "Evet, Kıbrıs'taki night club'lara tek başına gitmek yaygın ve sorunsuzdur. Mekanlar hem grup hem tek misafir için masa düzenlemesi yapar; tek kişilik rezervasyonlarda genellikle bar bölümü veya standart masa önerilir. Yine de yoğun gecelerde yer bulabilmek için tek kişi olsanız bile önceden bilgi vermeniz doğru olur.",
  },
  {
    question: "Night club'da fotoğraf çekmek serbest mi?",
    answer:
      "Hayır, Kıbrıs'taki night club'ların büyük çoğunluğunda mekan içinde fotoğraf ve video çekimi yasaktır. Bu kural diğer misafirlerin mahremiyetini korumak için konulmuştur ve personel tarafından aktif olarak uygulanır. Özel bir kutlama için görsel kayıt istiyorsanız, rezervasyon aşamasında mekan yönetiminden izin talep etmeniz gerekir.",
  },
];

export const metadata: Metadata = {
  title: { absolute: "Kıbrıs Night Club | KKTC Gece Kulübü Rehberi" },
  description: DESCRIPTION,
  keywords: [
    "kıbrıs night club",
    "kktc night club",
    "kuzey kıbrıs night club",
    "lefkoşa night club",
    "girne night club",
    "gazimağusa night club",
    "kıbrıs gece kulüpleri",
    "kıbrıs night club fiyatları",
    "kıbrıs en iyi night club",
    "kktc gece kulübü",
    "iskele night club",
    "kıbrıs night club nasıl gidilir",
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

export default function KibrisNightClubPage() {
  return (
    <article className="pt-20">
      <JsonLd
        id="ld-kibris-night-club"
        data={graph(
          webPageNode({
            path: PATH,
            name: TITLE,
            description: DESCRIPTION,
            hasFaq: true,
          }),
          breadcrumbNode(PATH, [
            { name: "Ana Sayfa", path: "/" },
            { name: "Kıbrıs Night Club" },
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
          <li className="text-gold">Kıbrıs Night Club</li>
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
              <span className="text-gradient-gold">Kıbrıs Night Club Rehberi:</span>
              <br />
              <span className="text-foreground">
                {"KKTC'de Gece Kulübü Seçimi ve Rezervasyon"}
              </span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-6 max-w-3xl mx-auto">
              {
                "Kıbrıs night club sahnesi; Girne, Lefkoşa, Gazimağusa ve İskele hattında yoğunlaşan, ruhsatlı ve rezervasyonla çalışan mekanlardan oluşur. Bu rehber, KKTC'de bir gece kulübü seçerken ihtiyacınız olan bilgiyi tek sayfada topluyor."
              }
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
              {
                "Mekanların nasıl işlediğini, fiyatın hangi kalemlerden oluştuğunu, standart masa ile özel oda arasındaki farkı, giriş kurallarını, ulaşım seçeneklerini ve rezervasyon adımlarını sırasıyla ele alıyoruz. Amaç, mekana varmadan önce cevabı bilinmesi gereken soruları geride bırakmaktır."
              }
            </p>
          </div>
        </div>
      </section>

      {/* Nedir ve nasıl işler */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2
              id="kibris-night-club-nedir"
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              <span className="text-foreground">Kıbrıs night club</span>{" "}
              <span className="text-gradient-gold">nedir ve nasıl işler?</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              {
                "Kıbrıs'ta night club, KKTC mevzuatına göre ruhsatlandırılmış, yalnızca 18 yaş ve üzeri misafirlere hizmet veren, masa ve özel oda düzeninde çalışan gece eğlence mekanıdır. Bu tanımdaki üç unsur belirleyicidir: ruhsat, yaş sınırı ve masa düzeni. Ruhsat mekanın denetlenebilir bir işletme olduğunu, yaş sınırı girişte kimlik kontrolü yapıldığını, masa düzeni ise servisin bar tezgahından değil doğrudan misafirin oturduğu alana verildiğini gösterir."
              }
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              {
                "İşleyiş büyük ölçüde rezervasyon üzerine kuruludur. Misafir gelmeden önce tarihi, kişi sayısını ve masa tipini bildirir; mekan uygunluğu ve toplam tutarı teyit eder. Bu yöntem hem yer garantisi sağlar hem de hesap anında beklenmeyen bir maliyetle karşılaşılmasını önler. Kıbrıs'taki gece kulüpleri akşamın geç saatlerinde açılır ve tek bir program akışı içinde gece boyunca çalışır; en yoğun saat aralığı 00:00 ile 03:00 arasıdır."
              }
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-8">
              {"Night club ile bar ve diskotek arasındaki fark nedir?"}
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              {
                "Fark mekanın kurgusundadır. Barda misafir ayakta durur, siparişini tezgahtan alır ve istediği saatte gelip gider; kimse ona bir alan ayırmaz. Diskotekte ağırlık merkezi dans pistidir. Night club'ta ise merkez masadır: her misafir grubunun kendisine ayrılmış bir alanı, o alana bakan bir servis düzeni ve seçime göre değişen bir mahremiyet seviyesi vardır. Eğlenceli restoranlardan ayrıldığı nokta ise programın yemek değil gece eğlencesi ekseninde kurulmasıdır."
              }
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-8">
              {"Bir gece içinde işleyiş nasıl ilerler?"}
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              {
                "Akış çoğu mekanda benzerdir. Kapıda kimlik kontrolü ve kıyafet değerlendirmesi yapılır; rezervasyonu olan misafir ismiyle karşılanır ve ayrılan masasına yönlendirilir. Servis masaya gelir, sipariş masadan alınır ve gece boyunca aynı personel o masayla ilgilenir. Program genellikle gece ilerledikçe yoğunlaşır; erken saatlerde salon sakinken 00:00'dan sonra tempo yükselir. Hesap gece sonunda masaya getirilir ve rezervasyon sırasında teyit edilen tutarla karşılaştırılabilir olmalıdır."
              }
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-8">
              {"Bir gece kulübünü tanımlayan özellikler"}
            </h3>
            <ul className="space-y-3 mb-6">
              {[
                "KKTC mevzuatına göre ruhsatlı işletme ve düzenli denetim",
                "18 yaş sınırı ve girişte istisnasız kimlik kontrolü",
                "Masa ve özel oda düzeni; servis doğrudan masaya verilir",
                "Rezervasyonla çalışma; hafta sonu yer garantisi rezervasyona bağlıdır",
                "Smart casual kıyafet kuralı ve girişte kıyafet değerlendirmesi",
                "Mekan içinde fotoğraf ve video çekimi yasağı",
                "Girişte ve salonda görev yapan profesyonel güvenlik personeli",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-muted-foreground leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {
                "Bu yapının pratik sonucu şudur: Kıbrıs'ta bir gece kulübüne gitmek, spontane bir bar ziyaretinden farklı olarak kısa bir planlama gerektirir. Tarihi, kişi sayısını ve masa tipini önceden belirleyen misafir, hem daha iyi bir yer alır hem de bütçesini gece başlamadan bilir."
              }
            </p>
          </div>
        </div>
      </section>

      {/* Şehirler */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 id="sehirler" className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-gradient-gold">KKTC&apos;de gece kulüpleri</span>{" "}
              <span className="text-foreground">hangi şehirlerde yoğunlaşır?</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              {
                "KKTC'de gece kulüpleri dört bölgede yoğunlaşır: Girne, Lefkoşa, Gazimağusa ve İskele-Bafra hattı. Bu dağılım turizm altyapısını takip eder; otel ve casino yoğunluğunun yüksek olduğu yerlerde gece kulübü sayısı da artar. Adanın geri kalanında ise dağınık ve büyük ölçüde mevsimlik işletmeler bulunur."
              }
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {"Bölgelerin barlar, casinolar ve canlı müzik mekanları dahil olmak üzere tüm gece dokusunu ele aldığımız "}
              <Link href="/kibris-gece-hayati" className={LINK_CLASS}>
                Kıbrıs gece hayatı rehberi
              </Link>
              {
                " bu sayfanın tamamlayıcısıdır. Aşağıdaki tablo ise yalnızca gece kulüplerine odaklanarak bölgeleri yan yana karşılaştırır."
              }
            </p>

            <div className="overflow-x-auto rounded-2xl border border-border mb-8">
              <table className="w-full text-left border-collapse min-w-[640px]">
                <caption className="sr-only">
                  {"KKTC şehirlerine göre gece kulübü yoğunluğu ve misafir profili"}
                </caption>
                <thead className="bg-muted/50">
                  <tr>
                    <th scope="col" className="px-5 py-4 text-sm font-semibold text-gold">
                      Şehir / Bölge
                    </th>
                    <th scope="col" className="px-5 py-4 text-sm font-semibold text-gold">
                      Yoğunluk
                    </th>
                    <th scope="col" className="px-5 py-4 text-sm font-semibold text-gold">
                      Karakter
                    </th>
                    <th scope="col" className="px-5 py-4 text-sm font-semibold text-gold">
                      Misafir profili
                    </th>
                    <th scope="col" className="px-5 py-4 text-sm font-semibold text-gold">
                      Sezon
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {CITIES.map((row) => (
                    <tr key={row.city} className="border-t border-border">
                      <th
                        scope="row"
                        className="px-5 py-4 text-sm font-semibold text-foreground text-left"
                      >
                        {row.city}
                      </th>
                      <td className="px-5 py-4 text-sm text-muted-foreground">
                        {row.density}
                      </td>
                      <td className="px-5 py-4 text-sm text-muted-foreground">
                        {row.character}
                      </td>
                      <td className="px-5 py-4 text-sm text-muted-foreground">
                        {row.profile}
                      </td>
                      <td className="px-5 py-4 text-sm text-muted-foreground">
                        {row.season}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-8">Lefkoşa</h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              {
                "Lefkoşa, KKTC'nin başkenti olduğu için gece kulübü talebi turizm sezonuna değil şehrin kendi ritmine bağlıdır. İş seyahati trafiği, kamu ve özel sektör yoğunluğu ve kalabalık yerel nüfus, hafta içi geceleri bile ayakta tutar. Bu nedenle Lefkoşa, yıl boyu en istikrarlı bölgedir; yaz ile kış arasındaki fark diğer şehirlere göre belirgin biçimde daha azdır."
              }
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-8">Girne</h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              {
                "Girne, KKTC'de gece kulübü yoğunluğunun en yüksek olduğu bölgedir. Otel ve casino ekosistemi, liman çevresindeki bar hattı ve sürekli turist trafiği burada birbirini besler: konaklayan misafir zaten gece programı arar, mekanlar da bu talebe göre konumlanır. "
              }
              <Link href="/kibris-gece-hayati" className={LINK_CLASS}>
                Girne gece hayatı
              </Link>
              {
                " bu yüzden hem seçenek çeşitliliği hem de sezon uzunluğu bakımından adanın geri kalanından ayrılır. Ercan Havalimanı'na araçla yakınlığı, adaya akşam saatlerinde inen misafirler için de pratik bir avantaj sağlar."
              }
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-8">Gazimağusa</h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              {
                "Gazimağusa bir üniversite şehridir ve gece hayatı bu dinamikle şekillenir. Misafir profili diğer bölgelere göre daha genç, bütçe beklentisi daha ölçülüdür. Akademik dönem boyunca sahil hattı ve şehir merkezi hareketlidir; yaz aylarında öğrenciler ayrıldığında tempo düşer. Gazimağusa'yı tercih edecek misafirlerin dönem takvimini hesaba katması, gecenin ne kadar canlı olacağını önceden tahmin etmenin en kolay yoludur."
              }
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-8">
              {"İskele ve Bafra hattı"}
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {
                "İskele ve Bafra hattı, KKTC'nin en yeni eğlence bölgesidir. Bölgedeki otel yatırımları arttıkça gece programı da otellerin çevresinde şekillenmeye başlamıştır. Yapısı ağırlıklı olarak tatil odaklıdır: sezon yaz aylarında yoğunlaşır, kışın belirgin biçimde sakinleşir. Bu hatta konaklayan misafirlerin Girne veya Lefkoşa'daki bir gece kulübüne gitmeyi planlaması durumunda ulaşım süresini ve dönüş saatini baştan hesaplaması gerekir."
              }
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-8">
              {"Hangi bölgeyi seçmelisiniz?"}
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {
                "Bölge seçiminde birinci ölçüt nerede konakladığınızdır, ikincisi ise gecenin karakterine dair beklentinizdir. Girne'de kalan bir misafirin aynı bölgede kalması ulaşımı en aza indirir. Lefkoşa, hafta içi bir gece planlayanlar için daha güvenli bir tercihtir; çünkü buradaki hareketlilik turizm takvimine bağlı değildir. Gazimağusa ve İskele hattında konaklayıp Girne'ye geçmeyi düşünüyorsanız, tek değişken mesafe değil, dönüş saatinde araç bulabilme ihtimalidir. Bu üç sorunun yanıtı netleştiğinde bölge kendiliğinden belirlenir."
              }
            </p>
          </div>
        </div>
      </section>

      {/* Fiyatlar */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12">
            <h2 id="fiyatlar" className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-foreground">Kıbrıs&apos;ta night club</span>{" "}
              <span className="text-gradient-gold">fiyatları nasıl belirlenir?</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              {
                "Kıbrıs'ta night club fiyatları tek bir giriş ücretiyle değil, dört ayrı kalemin toplamıyla belirlenir: giriş, masa tipi, minimum harcama ve içecek paketi. Toplam tutarı en çok etkileyen kalem masa tipidir. Standart masa en uygun seçenek, özel oda en üst seviyedir; aradaki fark mekanın büyüklüğünden değil, ayrılan alanın mahremiyet ve servis düzeyinden kaynaklanır."
              }
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {
                "Bu dört kalemi bir maliyet listesi olarak değil, bir mekanizma olarak okumak gerekir. Kalemler birbirinin yerine geçebilir: bazı mekanlar masa rezervasyonu yapan misafirden ayrıca giriş almaz, bazıları ise minimum harcamayı içecek paketiyle birleştirir. Bu yüzden iki mekanı yalnızca tek bir kalem üzerinden karşılaştırmak yanıltıcıdır; karşılaştırılması gereken şey toplam tutardır."
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto mb-12">
            {PRICE_PARTS.map((part) => (
              <div
                key={part.title}
                className="p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-gold/50 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <part.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {part.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{part.text}</p>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-foreground mb-3">
              {"Kişi sayısı toplam tutarı nasıl değiştirir?"}
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              {
                "Kişi sayısı, maliyeti doğrudan değil masa tipi üzerinden etkiler. İki kişilik bir rezervasyon standart masaya sığarken altı kişilik bir grup VIP masa veya özel oda gerektirir; artan tutarın asıl sebebi kişi başı bir ücret değil, ayrılan alanın büyümesidir. Bu yüzden kalabalık gruplarda kişi başına düşen maliyet çoğu zaman düşer. Grup büyüdükçe içecek paketi de tek tek siparişe kıyasla daha öngörülebilir hale gelir; toplam tutar gece başlamadan bilinir ve hesap paylaşımı basitleşir."
              }
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3">
              {"Tarih ve sezon fiyatı nasıl etkiler?"}
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              {
                "İkinci belirleyici gündür. Cuma ve Cumartesi geceleri talebin en yüksek olduğu zaman dilimidir; aynı masa tipi hafta içi bir geceyle aynı koşullarda sunulmayabilir. Sezon da benzer şekilde çalışır: Haziran-Eylül aralığında turist trafiği zirveye çıkar, kış aylarında talep düşer. Yılbaşı ve resmi tatiller ise kendi programına ve kendi koşullarına sahip özel gecelerdir."
              }
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {
                "Bu nedenle bir gece kulübünün maliyetini internetteki sabit bir rakamdan öğrenmek mümkün değildir. Doğru soru şudur: seçtiğim tarihte, belirttiğim kişi sayısı ve masa tipi için toplam ne ödeyeceğim? Bu soruyu rezervasyon sırasında sorup yanıtı yazılı olarak almak, Kıbrıs'ta night club bütçesini kontrol altında tutmanın en güvenilir yoludur."
              }
            </p>
          </div>
        </div>
      </section>

      {/* Masa tipleri */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 id="masa-tipleri" className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-foreground">Standart masa, VIP masa ve özel oda</span>{" "}
              <span className="text-gradient-gold">arasındaki fark nedir?</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              {
                "Standart masa, VIP masa ve özel oda arasındaki fark üç başlıkta toplanır: mahremiyet düzeyi, servis önceliği ve kapasite. Standart masa ana salonun içinde, genel atmosferin bir parçası olarak konumlanır. VIP masa ayrılmış bir bölgede yer alır ve öncelikli servis alır. Özel oda ise dışarıdan görünmeyen, kapalı ve kendi servis düzenine sahip bir alandır."
              }
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {
                "Seçim, grubun büyüklüğünden çok gecenin amacına göre yapılır. Atmosferin içinde olmak isteyen misafir için standart masa yeterlidir; konfor ve servis hızı önceliğe geçtiğinde VIP masa devreye girer; kutlama, kurumsal ağırlama veya mahremiyet gerektiren bir gece söz konusuysa özel oda tercih edilir."
              }
            </p>

            <div className="overflow-x-auto rounded-2xl border border-border mb-8">
              <table className="w-full text-left border-collapse min-w-[640px]">
                <caption className="sr-only">
                  {"Standart masa, VIP masa ve özel oda karşılaştırması"}
                </caption>
                <thead className="bg-muted/50">
                  <tr>
                    <th scope="col" className="px-5 py-4 text-sm font-semibold text-gold">
                      Alan tipi
                    </th>
                    <th scope="col" className="px-5 py-4 text-sm font-semibold text-gold">
                      Kapasite
                    </th>
                    <th scope="col" className="px-5 py-4 text-sm font-semibold text-gold">
                      Mahremiyet
                    </th>
                    <th scope="col" className="px-5 py-4 text-sm font-semibold text-gold">
                      Servis
                    </th>
                    <th scope="col" className="px-5 py-4 text-sm font-semibold text-gold">
                      Uygun olduğu durum
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {ROOM_TYPES.map((row) => (
                    <tr key={row.type} className="border-t border-border">
                      <th
                        scope="row"
                        className="px-5 py-4 text-sm font-semibold text-foreground text-left"
                      >
                        {row.type}
                      </th>
                      <td className="px-5 py-4 text-sm text-muted-foreground">
                        {row.capacity}
                      </td>
                      <td className="px-5 py-4 text-sm text-muted-foreground">
                        {row.privacy}
                      </td>
                      <td className="px-5 py-4 text-sm text-muted-foreground">
                        {row.service}
                      </td>
                      <td className="px-5 py-4 text-sm text-muted-foreground">
                        {row.fit}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed">
              {"Kapasiteler ve düzen mekandan mekana değişir; alanların görselleri, kapasiteleri ve hizmet kapsamı için "}
              <Link href="/night-club-katalog" className={LINK_CLASS}>
                güncel night club kataloğu
              </Link>
              {
                " en doğru kaynaktır. Katalog, sezona göre yenilendiği için tabloların dışında kalan ayrıntıları da içerir."
              }
            </p>
          </div>
        </div>
      </section>

      {/* Giriş kuralları */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 id="giris-kurallari" className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-gradient-gold">Giriş kuralları ve mekan etiketi</span>{" "}
              <span className="text-foreground">nasıldır?</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              {
                "Kıbrıs'taki night club'larda giriş kuralları üç başlıkta toplanır: yaş ve kimlik kontrolü, kıyafet kuralı ve mekan içi fotoğraf yasağı. Bu üç kural neredeyse tüm ruhsatlı mekanlarda ortaktır ve girişte uygulanır. Kuralların bilinmesi, kapıda yaşanan gereksiz tartışmaların büyük kısmını ortadan kaldırır."
              }
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-8">
              {"Yaş sınırı ve kimlik kontrolü"}
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              {
                "Kıbrıs'ta gece kulüplerine giriş 18 yaş ve üzeri misafirlere açıktır ve girişte geçerli bir kimlik kartı veya pasaport ibrazı zorunludur. Bu kural KKTC mevzuatı gereğidir; mekanların takdirine bırakılmamıştır, dolayısıyla istisnası yoktur. Kimliğini gösteremeyen misafir yaşından bağımsız olarak içeri alınmaz. Grupla geliyorsanız kapıda beklememek için herkesin kimliğini yanında bulundurduğundan çıkmadan önce emin olun."
              }
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-8">
              {"Kıyafet kuralları"}
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              {
                "Kıbrıs'taki night club'ların çoğu smart casual kıyafet kuralı uygular. Erkek misafirlerden gömlek veya şık bir üst ile klasik ayakkabı beklenir; kadın misafirler için gece kıyafeti standardı geçerlidir. Kural katı bir resmiyet değil, mekanın genel atmosferini koruma amacı taşır."
              }
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "Şort ve kısa pantolon genellikle kabul edilmez",
                "Atlet ve askılı üst kapıda geri çevrilme sebebidir",
                "Plaj kıyafeti ve terlik hiçbir koşulda uygun değildir",
                "Spor ayakkabı çoğu mekanda kabul edilmez, klasik ayakkabı beklenir",
                "Tereddüt ettiğiniz noktayı rezervasyon sırasında sormak en pratik yoldur",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-muted-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-8">
              {"Sorumlu eğlence ve servis sınırları"}
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              {
                "Ruhsatlı bir gece kulübünde alkol servisi sınırsız değildir. Personel, misafirin durumunu gözetmek ve gerektiğinde servisi durdurmakla yükümlüdür; bu bir müdahale değil, işletmenin yasal sorumluluğudur. Aynı çerçeve misafir tarafında da geçerlidir: araç kullanacak kişinin alkol almaması, gecenin sonunda ulaşımın önceden planlanmış olması ve personelin uyarılarına uyulması beklenir. İyi işletilen bir mekanın en görünür işaretlerinden biri, bu sınırları nazik ama net biçimde uygulayabilmesidir."
              }
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-8">
              {"Fotoğraf ve mahremiyet politikası"}
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {
                "Kıbrıs'taki gece kulüplerinin büyük çoğunluğunda mekan içinde fotoğraf ve video çekimi yasaktır. Bu yasak keyfi değildir: diğer misafirlerin mahremiyetini korumak için konulmuştur ve personel tarafından aktif olarak uygulanır. Aynı mantık genel mekan etiketinin de temelini oluşturur — başka masaların alanına girmemek, personelin uyarılarına uymak ve alkol tüketiminde ölçüyü korumak. Doğum günü gibi özel bir kutlama için görsel kayıt istiyorsanız, izni gece içinde değil rezervasyon aşamasında talep etmeniz gerekir."
              }
            </p>
          </div>
        </div>
      </section>

      {/* Rezervasyon */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 id="rezervasyon" className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-gradient-gold">Rezervasyon</span>{" "}
              <span className="text-foreground">nasıl yapılır?</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              {
                "Kıbrıs'ta night club rezervasyonu dört adımda tamamlanır: iletişime geçmek, tarih ve kişi sayısını bildirmek, masa tipiyle toplam tutarın yazılı teyidini almak ve ulaşımı planlamak. Rezervasyon yasal bir zorunluluk değildir, ancak hafta sonu ve tatil dönemlerinde masalar önceden dolduğu için pratikte tek yer garantisi yöntemidir."
              }
            </p>
            <ol className="space-y-5 mb-8">
              {RESERVATION_STEPS.map((step, index) => (
                <li key={step.title} className="flex items-start gap-4">
                  <span className="shrink-0 w-8 h-8 rounded-full bg-primary/10 text-gold text-sm font-semibold flex items-center justify-center">
                    {index + 1}
                  </span>
                  <span>
                    <span className="block text-foreground font-semibold mb-1">
                      {step.title}
                    </span>
                    <span className="block text-muted-foreground leading-relaxed">
                      {step.text}
                    </span>
                  </span>
                </li>
              ))}
            </ol>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-8">
              {"Neden WhatsApp?"}
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              {
                "WhatsApp üç nedenle tercih edilir. Birincisi hızdır: mesaj gece operasyonu sırasında bile takip edilir, telefonun meşgul olması süreci durdurmaz. İkincisi yazılı kayıttır; tarih, masa tipi ve toplam tutar ekranda kalır, hesap anında iki taraf da aynı bilgiye bakar. Üçüncüsü mahremiyettir: kalabalık bir ortamda konuşmak zorunda kalmadan, yalnızca gerekli bilgiyi paylaşarak rezervasyonu tamamlarsınız."
              }
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {"Adım adım işleyişi ve rezervasyonda iletilmesi gereken bilgileri "}
              <Link href="/night-club" className={LINK_CLASS}>
                night club rezervasyon süreci
              </Link>
              {
                " sayfasında ayrıntılı olarak anlatıyoruz. Telefonla rezervasyon tercih eden misafirler ise "
              }
              <a href={`tel:${PHONE_E164}`} className={LINK_CLASS}>
                {PHONE_DISPLAY}
              </a>
              {" numarasından ulaşabilir."}
            </p>
          </div>
        </div>
      </section>

      {/* Ulaşım */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12">
            <h2 id="ulasim" className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-foreground">Kıbrıs night club&apos;a</span>{" "}
              <span className="text-gradient-gold">nasıl gidilir?</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              {
                "Kıbrıs'ta night club'lara ulaşım özel araç, taksi veya mekanın düzenlediği transferle sağlanır; gece saatlerinde toplu taşıma çalışmaz. Ercan Havalimanı'ndan Girne ve Lefkoşa'ya araçla yaklaşık 30-45 dakikada ulaşılır. Bu üç seçenek arasındaki tercih, gecenin nasıl bittiğine göre değil, nasıl başladığına göre yapılmamalıdır: belirleyici olan dönüş yolculuğudur."
              }
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {
                "Gazimağusa ve İskele bölgesinde konaklayan misafirler için mesafe biraz daha uzundur; bu durumda gidiş ve dönüşün aynı araçla planlanması hem zaman hem maliyet açısından avantaj sağlar. Adaya ilk kez gelen misafirlere önerimiz, gece programını havalimanı transferinden bağımsız düşünmemeleri ve kalacakları bölgeyi rezervasyon sırasında mekana bildirmeleridir."
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto mb-12">
            {TRANSPORT.map((item) => (
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
                <p className="text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-foreground mb-3">
              {"Dönüş ulaşımını neden önceden planlamalısınız?"}
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {
                "Çünkü Kıbrıs'ta gece kulüpleri kapandığında çalışan bir toplu taşıma seçeneği yoktur. Mekanların kapanış saatleri Pazartesi-Perşembe ve Pazar günleri 04:00, Cuma ve Cumartesi günleri 06:00 civarındadır; bu saatlerde aynı anda çıkan misafir sayısı taksi talebini yükseltir. Dönüşü rezervasyon sırasında konuşmak, gecenin en yorucu kısmını en başta çözer. Alkol alacak misafirlerin araç kullanmaması ise tercih değil kuraldır; KKTC'de alkollü araç kullanımına yönelik denetimler sıkı biçimde uygulanır."
              }
            </p>
          </div>
        </div>
      </section>

      {/* Seçim kriterleri */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 id="secim-kriterleri" className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-foreground">Kıbrıs&apos;ta gece kulübü seçerken</span>{" "}
              <span className="text-gradient-gold">nelere dikkat etmeli?</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {
                "Kıbrıs'ta gece kulübü seçerken yedi ölçüt belirleyicidir: ruhsat, şeffaf fiyatlandırma, yazılı ön teyit, ulaşım desteği, güvenlik personeli, iletişim hızı ve mahremiyet politikası. Bu yedi başlığın tamamı, mekana gitmeden önce yalnızca birkaç mesajla kontrol edilebilir; hiçbiri gece içinde öğrenilmesi gereken bilgi değildir."
              }
            </p>
            <ol className="space-y-6 mb-8">
              {CRITERIA.map((item, index) => (
                <li key={item.title} className="flex items-start gap-4">
                  <span className="shrink-0 w-9 h-9 rounded-full bg-primary/10 text-gold text-sm font-semibold flex items-center justify-center">
                    {index + 1}
                  </span>
                  <span>
                    <span className="block text-foreground text-lg font-semibold mb-1">
                      {item.title}
                    </span>
                    <span className="block text-muted-foreground leading-relaxed">
                      {item.text}
                    </span>
                  </span>
                </li>
              ))}
            </ol>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {
                "Bu yedi ölçütü karşılayan bir mekan, fiyat listesinde en uygun seçenek olmayabilir. Ancak Kıbrıs'ta gece kulübü deneyiminde memnuniyetsizliğin kaynağı çoğunlukla fiyatın kendisi değil, önceden bilinmemesidir. Şeffaflık sağlandığında geriye yalnızca tercih kalır."
              }
            </p>
          </div>
        </div>
      </section>

      {/* Faraon */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 id="faraon-night-club" className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-gradient-gold">Faraon Night Club&apos;ın</span>{" "}
              <span className="text-foreground">konumu nedir?</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              {
                "Faraon Night Club, Kuzey Kıbrıs'ta Girne merkezli olarak hizmet veren ruhsatlı bir gece kulübüdür ve Girne, Lefkoşa, Gazimağusa, İskele ile Güzelyurt bölgelerinden gelen misafirleri ağırlar. Mekan haftanın yedi günü açıktır: Pazartesi, Salı, Çarşamba, Perşembe ve Pazar günleri 21:00-04:00; Cuma ve Cumartesi günleri 21:00-06:00 saatleri arasında hizmet verir."
              }
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {"Bu rehberde anlatılan yapıyı — masa ve özel oda düzeni, rezervasyonla çalışma, yazılı teyit ve mahremiyet politikası — kendi işleyişinde uygulayan "}
              <Link href="/night-club" className={LINK_CLASS}>
                Faraon Night Club
              </Link>
              {
                ", ulaşım ve masa seçimi konusunda rezervasyon aşamasında yönlendirme yapar. Kalacağınız bölgeyi bildirmeniz halinde transfer düzenlemesine yardımcı olunur."
              }
            </p>
          </div>
        </div>
      </section>

      {/* SSS */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 id="sik-sorulan-sorular" className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-foreground">Sık Sorulan</span>{" "}
              <span className="text-gradient-gold">Sorular</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {
                "Kıbrıs night club konusunda misafirlerimizden en sık gelen sorular ve kısa yanıtları aşağıdadır."
              }
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

      {/* CTA */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 id="iletisim" className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-gradient-gold">Rezervasyon</span>{" "}
              <span className="text-foreground">ve iletişim</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              {
                "Tarihinizi, kişi sayınızı ve tercih ettiğiniz masa tipini iletin; uygunluk ve toplam tutar yazılı olarak teyit edilsin. Hafta sonu geceleri için en az bir gün önceden yazmanızı öneririz."
              }
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {"Telefon, e-posta ve çalışma saatleri dahil tüm "}
              <Link href="/iletisim" className={LINK_CLASS}>
                iletişim bilgileri
              </Link>
              {" için iletişim sayfamıza, Kıbrıs gece kültürü üzerine yazdığımız "}
              <Link href="/rehber" className={LINK_CLASS}>
                gece hayatı yazılarımız
              </Link>
              {" için ise rehber bölümümüze göz atabilirsiniz."}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <a
                  href={waLink(
                    "Merhaba, Kıbrıs night club rehberi sayfanızdan yazıyorum. Rezervasyon hakkında bilgi almak istiyorum.",
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
            <p className="text-muted-foreground text-sm leading-relaxed mt-8 flex items-center justify-center gap-2">
              <Clock className="w-4 h-4 text-gold shrink-0" />
              <span>
                {
                  "Pazartesi - Perşembe, Pazar: 21:00-04:00 · Cuma - Cumartesi: 21:00-06:00"
                }
              </span>
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
