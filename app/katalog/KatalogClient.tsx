"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Camera, Image as ImageIcon, MessageCircle, Phone, Star, ShieldCheck, Sparkles, MapPin } from "lucide-react";

const clubsList = [
  {
    id: 1,
    name: "Kıbrıs Night Club",
    location: "Kıbrıs",
    description: "Kıbrıs'ın en özel ve popüler gece kulübü deneyimi.",
    badge: "Popüler",
  },
  {
    id: 2,
    name: "Lefkoşa Night Club",
    location: "Lefkoşa",
    description: "Başkent Lefkoşa'da bitmeyen gece eğlenceleri.",
  },
  {
    id: 3,
    name: "Lipstick Night Club",
    location: "Kıbrıs",
    description: "Renkli şovları ve özel konseptiyle dikkat çekiyor.",
  },
  {
    id: 4,
    name: "Harem Night Club",
    location: "Kıbrıs",
    description: "Oryantal esintiler and mistik bir eğlence atmosferi.",
  },
  {
    id: 5,
    name: "Prenses Night Club",
    location: "Kıbrıs",
    description: "Kendinizi özel hissedeceğiniz kraliyet standartlarında hizmet.",
    badge: "Önerilen",
  },
  {
    id: 6,
    name: "Playboy Night Club",
    location: "Kıbrıs",
    description: "Göz alıcı şovlar ve lüksün sınırlarını zorlayan eğlence.",
  },
  {
    id: 7,
    name: "Faraon Night Club",
    location: "Kıbrıs",
    description: "Kıbrıs'ın en prestijli ve özel eğlence mekanı.",
    badge: "VIP",
  },
  {
    id: 8,
    name: "Crazy Night Club",
    location: "Kıbrıs",
    description: "Sınır tanımayan, çılgın partilerin tek adresi.",
  },
  {
    id: 9,
    name: "İmparator Night Club",
    location: "Kıbrıs",
    description: "Görkemli ve şatafatlı bir gece kulübü deneyimi.",
  },
  {
    id: 10,
    name: "Miss Me Night Club",
    location: "Kıbrıs",
    description: "Eğlencenin zirvesinde unutulmaz anlar yaşayın.",
    badge: "Yeni",
  },
];

export default function KatalogClient() {
  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden flex items-center min-h-[60vh]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-background to-background" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <span className="inline-block px-5 py-2 mb-6 text-sm font-bold tracking-widest uppercase border rounded-full text-gold-light border-gold/30 bg-gold/10 shadow-lg shadow-gold/10">
              Premium Seçenekler
            </span>
            <h1 className="mb-3 text-4xl md:text-6xl lg:text-7xl font-bold font-serif text-white tracking-tight leading-tight">
              Kıbrıs Night Club
              <span className="block text-gradient-gold">
                Katalog
              </span>
            </h1>

            {/* Photo Box under heading */}
            <div className="mb-8 relative group overflow-hidden rounded-2xl border border-gold/20 shadow-2xl shadow-gold/10 max-w-2xl mx-auto transition-all duration-500 hover:border-gold/40">
              <Image 
                src="/images/hero-main.jpg?v=2" 
                alt="Kıbrıs Night Club Premium Katalog" 
                width={1200} 
                height={600}
                priority
                className="w-full h-auto transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            <p className="max-w-3xl mx-auto text-lg md:text-xl text-gold-pale/80 leading-relaxed font-light">
              Kıbrıs'ın en seçkin gece kulüplerini ve en güncel katalog seçeneklerini tek bir platformda toplayan
              <strong> Faraon Night Club</strong> ile eğlencenin sınırlarını zorlayın. Size özel VIP hizmetlerimiz 
              ve profesyonel rehberliğimizle gece hayatının keyfini çıkarın.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Clubs Gallery Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clubsList.map((club, index) => (
              <motion.div
                key={club.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-card/50 border border-gold/10 rounded-3xl overflow-hidden hover:border-gold/30 transition-all duration-500"
              >
                <div className="aspect-[3/4] relative overflow-hidden">
                  <Image
                    src={`/images/clubs/club-${club.id}.jpg`}
                    alt={club.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80" />
                  {club.badge && (
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-gold text-black text-xs font-bold rounded-full shadow-lg">
                        {club.badge}
                      </span>
                    </div>
                  )}
                  <div className="absolute top-4 right-4">
                    <div className="p-2 bg-black/40 backdrop-blur-md rounded-full border border-white/10">
                      <ImageIcon className="w-4 h-4 text-gold" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6 relative">
                  <div className="flex items-center gap-2 text-gold-light/60 text-xs uppercase tracking-widest mb-3">
                    <MapPin className="w-3 h-3" />
                    {club.location}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gold transition-colors font-serif">
                    {club.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-2">
                    {club.description}
                  </p>
                  
                  <Button
                    asChild
                    className="w-full bg-gold/10 hover:bg-gold text-gold hover:text-black border border-gold/30 transition-all duration-500 rounded-xl"
                  >
                    <a
                      href={`https://wa.me/905338801043?text=Merhaba,%20${club.name}%20hakkında%20bilgi%20almak%20istiyorum.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Katalog Talep Et
                    </a>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-gold to-gold-dark hover:from-gold-dark hover:to-gold-dark text-white font-bold h-14 px-10 rounded-full shadow-xl shadow-gold/20"
            >
              <a href="https://wa.me/905338801043?text=Merhaba,%20Kıbrıs%20kulüplerinin%20tam%20katalog%20listesini%20talep%20ediyorum." target="_blank" rel="noopener noreferrer">
                Tüm Kulüpler İçin İletişime Geçin
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* SEO Rich Text Section */}
      <section className="py-24 bg-card/40 border-y border-gold/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto prose prose-invert prose-lg prose-headings:font-serif prose-headings:text-white prose-a:text-gold prose-strong:text-gold-light"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">
              Kıbrıs Night Club Katalog Seçenekleri
            </h2>
            
            <div className="not-prose mb-12 relative group overflow-hidden rounded-2xl border border-gold/20 shadow-2xl shadow-gold/5 max-w-2xl mx-auto transition-all duration-500 hover:border-gold/40 hover:shadow-gold/10">
              <Image 
                src="/images/kibris-gece-hayati-17.jpg?v=2" 
                alt="Kıbrıs Night Club Katalog Seçenekleri" 
                width={1200} 
                height={675}
                priority
                className="w-full h-auto transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <span className="px-4 py-2 bg-gold/90 text-black text-sm font-bold rounded-lg backdrop-blur-md">
                  Görsel Katalog İncelemesi
                </span>
              </div>
            </div>
            <p className="leading-relaxed">
              Gece eğlencesinin zirvesini yaşamak isteyenler için hazırladığımız <strong>Kıbrıs night club katalog</strong> rehberimiz, 
              size en seçkin deneyimleri sunmak üzere özenle tasarlanmıştır. <strong>Faraon Night Club katalog</strong> yelpazesi, 
              hem ilk defa Kıbrıs'a gelecek misafirlerimizin hem de adanın müdavimlerinin beklentilerini en üst düzeyde karşılamayı hedefler.
            </p>
            <div className="grid md:grid-cols-2 gap-10 my-12 not-prose">
              <div className="bg-background/50 p-8 rounded-3xl border border-gold/10 shadow-lg">
                <ShieldCheck className="w-10 h-10 text-gold mb-6" />
                <h3 className="text-2xl font-bold font-serif text-white mb-4">
                  Güvenilir Katalog Erişimi
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Profesyonelliği ve gizliliği ön planda tutarak sunduğumuz <strong>night club katalog</strong> bilgilerimiz tamamen günceldir. 
                  WhatsApp hattımız üzerinden anlık katalog talep ederek Kıbrıs'ın en özel mekanlarına dair detaylara ulaşabilirsiniz.
                </p>
              </div>
              <div className="bg-background/50 p-8 rounded-3xl border border-gold/10 shadow-lg">
                <Sparkles className="w-10 h-10 text-gold mb-6" />
                <h3 className="text-2xl font-bold font-serif text-white mb-4">
                  VIP Hizmet Standartları
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Faraon Night Club</strong> kalitesiyle hazırlanan bu kataloglar, sadece mekan tanıtımı değil, aynı zamanda 
                  size sunulacak ayrıcalıklı hizmetlerin bir taahhüdüdür. Lüks ve konforu bir arada sunan seçeneklerimizi mutlaka inceleyin.
                </p>
              </div>
            </div>
            <p className="leading-relaxed">
              Kıbrıs'ın eşsiz gece hayatında kendinize en uygun konsepti bulmak için <strong>night club katalog</strong> seçeneklerimizden faydalanın. 
              Deneyimli ekibimiz, tercihlerinize göre size en doğru yönlendirmeyi yapacak ve unutulmaz bir gece geçirmenizi sağlayacaktır.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-card to-background border border-gold/20 rounded-[3rem] p-12 md:p-20 text-center overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gold/20 via-transparent to-transparent" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold font-serif mb-6 text-white">
                Katalog Detayları İçin İletişime Geçin
              </h2>
              <p className="text-gold-pale/80 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto font-light">
                <strong>Kıbrıs night club katalog</strong> görsellerini, güncel etkinlik listesini ve 
                özel hizmet fiyatlandırmalarını anında almak için WhatsApp üzerinden bize ulaşabilirsiniz.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                <Button
                  asChild
                  size="lg"
                  className="bg-gold text-black hover:bg-gold-dark h-14 px-8 text-base font-bold shadow-lg shadow-gold/20"
                >
                  <a
                    href="https://wa.me/905338801043?text=Merhaba,%20Kıbrıs%20Night%20Club%20Katalog%20hakkında%20detaylı%20bilgi%20ve%20görsel%20talep%20ediyorum."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp Katalog Hattı
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 bg-transparent h-14 px-8 text-base font-bold backdrop-blur-sm"
                >
                  <a href="tel:905338801043">
                    <Phone className="w-5 h-5 mr-2" />
                    Hemen Arayın
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
