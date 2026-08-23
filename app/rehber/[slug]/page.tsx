import type { Metadata } from "next"
import { notFound } from "next/navigation";
import BlogPostClient from "./BlogPostClient";
import { JsonLd } from "@/components/seo/json-ld";
import { abs, blogPostingNode, breadcrumbNode, graph, webPageNode } from "@/lib/schema";

const blogPosts = [
  {
    id: 1,
    slug: "kibris-night-club-rehberi-2024",
    title: "Kıbrıs Night Club Rehberi: 2024 Güncel Bilgiler",
    excerpt: "Kıbrıs night club sahnesinin kapsamlı rehberi. En iyi mekanlar, VIP hizmetler ve gece hayatı ipuçları.",
    category: "Rehber",
    date: "2024-01-15",
    readTime: "8 dk",
    content: `
      <h2>Kıbrıs Night Club Sektörüne Genel Bakış</h2>
      <p><strong>Kıbrıs night club</strong> sektörü, Akdeniz'in en hareketli gece hayatı destinasyonlarından birini oluşturmaktadır. Özellikle yerli ve yabancı turistlerin yoğun ilgi gösterdiği bu sektör, yüksek kaliteli hizmetler ve profesyonel eğlence seçenekleri sunmaktadır.</p>
      
      <h3>Night Club Türleri ve Özellikleri</h3>
      <p><strong>Night club</strong> mekanları, sundukları hizmetlere ve hedef kitlelerine göre farklı kategorilere ayrılmaktadır. Premium, VIP ve exclusive kategorilerinde hizmet veren mekanlar, misafirlerine özel deneyimler sunmaktadır.</p>
      
      <h3>Night Club Katalog Seçenekleri</h3>
      <p><strong>Night club katalog</strong> seçenekleri, misafirlerin tercihlerine göre çeşitlilik göstermektedir. <strong>Faraon Night Club katalog</strong> içerisinde her bütçeye ve tercihe uygun seçenekler bulunmaktadır.</p>
      
      <h2>VIP Night Club Deneyimi</h2>
      <p><strong>VIP night club</strong> deneyimi, özel alanlar, kişiye özel hizmet ve tam gizlilik garantisi ile sunulmaktadır. Bu hizmetler, misafirlerin kendilerini özel hissetmelerini sağlamaktadır.</p>
      
      <h3>VIP Hizmet Özellikleri</h3>
      <ul>
        <li>Özel VIP bölümler</li>
        <li>Kişiye özel hostess hizmeti</li>
        <li>Premium içecek servisi</li>
        <li>Profesyonel sahne performansları</li>
        <li>Tam gizlilik garantisi</li>
      </ul>
      
      <h2>Kıbrıs Gece Hayatı İpuçları</h2>
      <p><strong>Kıbrıs gece hayatı</strong> deneyiminizi en iyi şekilde geçirmek için bazı önemli noktaları göz önünde bulundurmanız gerekmektedir. İşte size yardımcı olacak ipuçları:</p>
      
      <h3>Rezervasyon Önemi</h3>
      <p>Özellikle hafta sonları ve özel günlerde <strong>night club</strong> mekanları oldukça yoğun olabilir. Önceden rezervasyon yaptırmanız, hem yer garantisi hem de daha iyi hizmet almanızı sağlayacaktır.</p>
      
      <h3>Transfer ve Konaklama</h3>
      <p><strong>Faraon Night Club</strong> gibi kaliteli mekanlar, transfer ve konaklama hizmetleri de sunmaktadır. Bu hizmetlerden yararlanarak daha rahat ve güvenli bir deneyim yaşayabilirsiniz.</p>
      
      <h2>Sonuç</h2>
      <p><strong>Kıbrıs night club</strong> deneyimi, doğru mekan ve hizmet seçimi ile unutulmaz olabilir. <strong>Faraon Night Club</strong> olarak, misafirlerimize en kaliteli hizmeti sunmak için çalışıyoruz.</p>
    `,
  },
  {
    id: 2,
    slug: "vip-night-club-deneyimi",
    title: "VIP Night Club Deneyimi: Bilmeniz Gereken Her Şey",
    excerpt: "VIP night club deneyimi nedir? Özel alanlar, kişiye özel hizmetler ve premium paketler hakkında detaylı bilgiler.",
    category: "VIP Rehber",
    date: "2024-01-10",
    readTime: "6 dk",
    content: `
      <h2>VIP Night Club Nedir?</h2>
      <p><strong>VIP night club</strong> deneyimi, standart night club hizmetlerinin çok ötesinde özel ve ayrıcalıklı bir eğlence konseptidir. Bu deneyim, gizlilik, konfor ve özel hizmetin bir arada sunulduğu premium bir seçenektir.</p>
      
      <h3>VIP Alanların Özellikleri</h3>
      <p>VIP alanlar, genel alandan ayrı, özel tasarlanmış bölümlerdir. Bu alanlarda misafirler, kalabalıktan uzak, özel bir atmosferde gece eğlencesinin keyfini çıkarabilirler.</p>
      
      <h2>VIP Hizmet Paketleri</h2>
      <p><strong>Faraon Night Club</strong> olarak sunduğumuz VIP paketler, misafirlerimizin her türlü ihtiyacını karşılayacak şekilde tasarlanmıştır.</p>
      
      <h3>Paket İçerikleri</h3>
      <ul>
        <li>Özel VIP bölüm kullanımı</li>
        <li>Kişiye özel hostess hizmeti</li>
        <li>Premium içecek servisi</li>
        <li>Özel sahne performansları</li>
        <li>7/24 destek hizmeti</li>
      </ul>
      
      <h2>Neden VIP Tercih Etmelisiniz?</h2>
      <p><strong>VIP night club</strong> deneyimi, özel anlar yaşamak isteyenler için ideal bir seçenektir. Gizlilik, konfor ve özel hizmet anlayışı ile misafirlerimize unutulmaz bir gece sunuyoruz.</p>
    `,
  },
  {
    id: 3,
    slug: "kibris-gece-hayati-ipuclari",
    title: "Kıbrıs Gece Hayatı: Yeni Başlayanlar İçin İpuçları",
    excerpt: "Kıbrıs'a ilk kez gelecekler için gece hayatı rehberi. Night club kültürü, eğlence seçenekleri ve dikkat edilmesi gerekenler.",
    category: "İpuçları",
    date: "2024-01-05",
    readTime: "5 dk",
    content: `
      <h2>Kıbrıs Gece Hayatına Hoş Geldiniz</h2>
      <p><strong>Kıbrıs gece hayatı</strong>, Akdeniz'in en renkli ve hareketli eğlence destinasyonlarından birini oluşturmaktadır. İlk kez Kıbrıs'a gelecekler için hazırladığımız bu rehber, gece hayatı deneyiminizi daha keyifli hale getirecektir.</p>
      
      <h3>Gece Hayatı Kültürü</h3>
      <p><strong>Night club</strong> kültürü Kıbrıs'ta oldukça gelişmiştir. Profesyonel hizmet anlayışı ve kaliteli eğlence seçenekleri ile misafirlerine unutulmaz deneyimler sunmaktadır.</p>
      
      <h2>İlk Ziyaretiniz İçin İpuçları</h2>
      <p>İşte <strong>Kıbrıs night club</strong> deneyiminizi daha keyifli hale getirecek önemli ipuçları:</p>
      
      <h3>1. Önceden Araştırma Yapın</h3>
      <p><strong>Night club katalog</strong> seçeneklerini önceden inceleyin ve size uygun mekanı belirleyin.</p>
      
      <h3>2. Rezervasyon Yaptırın</h3>
      <p>Özellikle hafta sonları ve özel günlerde önceden rezervasyon yaptırmanız önerilir.</p>
      
      <h3>3. Transfer Hizmetlerinden Yararlanın</h3>
      <p>Güvenli ve konforlu ulaşım için transfer hizmetlerini tercih edin.</p>
      
      <h2>Faraon Night Club Farkı</h2>
      <p><strong>Faraon Night Club</strong> olarak, ilk kez gelen misafirlerimize özel rehberlik hizmeti sunuyoruz. Deneyimli ekibimiz, sizin için en uygun programı oluşturmakta yardımcı olacaktır.</p>
    `,
  },
  {
    id: 4,
    slug: "night-club-katalog-secimi",
    title: "Night Club Katalog: Doğru Seçimi Nasıl Yaparsınız?",
    excerpt: "Night club katalog seçenekleri arasında size en uygun olanı nasıl bulursunuz? Bütçe, tercih ve deneyim seviyesine göre katalog rehberi.",
    category: "Katalog",
    date: "2024-01-01",
    readTime: "7 dk",
    content: `
      <h2>Night Club Katalog Nedir?</h2>
      <p><strong>Night club katalog</strong>, mekanlarda sunulan hizmet ve performans seçeneklerinin listelendiği bir rehberdir. <strong>Faraon Night Club katalog</strong> içerisinde farklı kategorilerde seçenekler bulunmaktadır.</p>
      
      <h3>Katalog Kategorileri</h3>
      <p><strong>Kıbrıs night club katalog</strong> seçenekleri genellikle şu kategorilerde sunulmaktadır:</p>
      <ul>
        <li>Premium - Standart VIP hizmet</li>
        <li>VIP - Özel ayrıcalıklı hizmet</li>
        <li>Exclusive - En seçkin deneyim</li>
        <li>Luxury - Lüks tam paket</li>
      </ul>
      
      <h2>Doğru Seçim İçin Kriterler</h2>
      <p>Size en uygun <strong>night club katalog</strong> seçeneğini bulmak için şu kriterleri göz önünde bulundurun:</p>
      
      <h3>Bütçe</h3>
      <p>Her kategori farklı fiyat aralıklarında hizmet sunmaktadır. Bütçenize uygun seçeneği belirleyin.</p>
      
      <h3>Tercihler</h3>
      <p>Performans türü, mekan özellikleri ve ek hizmetler açısından tercihlerinizi netleştirin.</p>
      
      <h3>Deneyim Seviyesi</h3>
      <p>İlk kez deneyimleyecekler için Premium veya VIP, deneyimli misafirler için Exclusive veya Luxury seçenekleri önerilmektedir.</p>
    `,
  },
  {
    id: 5,
    slug: "ozel-organizasyonlar-night-club",
    title: "Özel Organizasyonlar: Night Club'da Kutlama Rehberi",
    excerpt: "Doğum günü, bekarlığa veda ve özel kutlamalar için night club organizasyonu nasıl planlanır?",
    category: "Organizasyon",
    date: "2023-12-25",
    readTime: "6 dk",
    content: `
      <h2>Night Club'da Özel Organizasyonlar</h2>
      <p><strong>Night club</strong> mekanları, özel kutlamalar için mükemmel bir ortam sunmaktadır. Doğum günleri, bekarlığa veda partileri ve özel etkinlikler için <strong>Faraon Night Club</strong> organizasyon hizmetleri.</p>
      
      <h3>Organizasyon Türleri</h3>
      <ul>
        <li>Doğum günü partileri</li>
        <li>Bekarlığa veda gecesi</li>
        <li>Özel kutlamalar</li>
        <li>Tema geceleri</li>
        <li>Kurumsal etkinlikler</li>
      </ul>
      
      <h2>Organizasyon Planlaması</h2>
      <p>Başarılı bir <strong>night club</strong> organizasyonu için dikkat edilmesi gereken noktalar:</p>
      
      <h3>Erken Rezervasyon</h3>
      <p>Özellikle hafta sonları için en az 1 hafta önceden rezervasyon yapılması önerilir.</p>
      
      <h3>Detayları Paylaşın</h3>
      <p>Organizasyonunuzun özel isteklerini önceden paylaşarak size özel bir program oluşturulmasını sağlayın.</p>
    `,
  },
  {
    id: 6,
    slug: "transfer-konaklama-rehberi",
    title: "Kıbrıs Transfer ve Konaklama Rehberi",
    excerpt: "Kıbrıs'ta night club deneyiminizi tamamlayan transfer ve konaklama seçenekleri.",
    category: "Hizmetler",
    date: "2023-12-20",
    readTime: "5 dk",
    content: `
      <h2>Transfer Hizmetleri</h2>
      <p><strong>Kıbrıs night club</strong> deneyiminizi tamamlayan transfer hizmetleri, güvenli ve konforlu ulaşım sağlamaktadır.</p>
      
      <h3>Transfer Seçenekleri</h3>
      <ul>
        <li>Havalimanı transferi</li>
        <li>Otel transferi</li>
        <li>VIP araç hizmeti</li>
        <li>Limuzin servisi</li>
      </ul>
      
      <h2>Konaklama Desteği</h2>
      <p><strong>Faraon Night Club</strong> olarak, anlaşmalı otellerimizde özel konaklama paketleri sunuyoruz.</p>
      
      <h3>Konaklama Özellikleri</h3>
      <ul>
        <li>Özel fiyat avantajları</li>
        <li>VIP suit seçenekleri</li>
        <li>Kolay rezervasyon</li>
        <li>7/24 destek</li>
      </ul>
    `,
  },
]

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find(p => p.slug === slug)
  
  if (!post) {
    return {
      title: "Sayfa Bulunamadı",
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
    keywords: [
      "kıbrıs night club",
      "night club rehberi",
      "faraon night club",
      post.category.toLowerCase(),
    ],
    alternates: { canonical: `/rehber/${post.slug}` },
    openGraph: {
      type: "article",
      locale: "tr_TR",
      siteName: "Faraon Night Club",
      url: `/rehber/${post.slug}`,
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      images: [
        { url: "/og-image.jpg", width: 1200, height: 630, alt: "Faraon Night Club Kıbrıs" },
      ],
    },
  }
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = blogPosts.find(p => p.slug === slug)

  if (!post) {
    notFound()
  }

  const path = `/rehber/${post.slug}`

  return (
    <>
      <JsonLd
        id="ld-blog-post"
        data={graph(
          webPageNode({
            path,
            name: post.title,
            description: post.excerpt,
            extra: { mainEntity: { "@id": `${abs(path)}#article` } },
          }),
          breadcrumbNode(path, [
            { name: "Ana Sayfa", path: "/" },
            { name: "Rehber", path: "/rehber" },
            { name: post.title },
          ]),
          blogPostingNode({
            path,
            headline: post.title,
            description: post.excerpt,
            datePublished: post.date,
          }),
        )}
      />
      <BlogPostClient post={post} />
    </>
  );
}
