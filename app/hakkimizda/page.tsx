"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Crown,
  Shield,
  Users,
  Award,
  Clock,
  MapPin,
  Star,
  Heart,
  Sparkles,
  Target,
} from "lucide-react";

export default function HakkimizdaPage() {
  const values = [
    {
      icon: Crown,
      title: "Premium Kalite",
      description:
        "Kıbrıs night club sektöründe en yüksek standartları sunuyoruz. Her detay titizlikle planlanır.",
    },
    {
      icon: Shield,
      title: "Güvenilirlik",
      description:
        "Müşteri memnuniyeti ve gizlilik bizim için en önemli değerlerdir. Night club deneyiminiz güvende.",
    },
    {
      icon: Users,
      title: "Profesyonel Ekip",
      description:
        "Deneyimli ve eğitimli kadromuz ile unutulmaz anlar yaşatıyoruz. Faraon Night Club farkı.",
    },
    {
      icon: Award,
      title: "Tecrübe",
      description:
        "Yıllardır Kıbrıs night club sektöründe edindiğimiz tecrübe ile hizmet veriyoruz.",
    },
  ];



  const stats = [
    { value: "10+", label: "Yıllık Deneyim" },
    { value: "50K+", label: "Mutlu Misafir" },
    { value: "100+", label: "Night Club Performansçı" },
    { value: "24/7", label: "Hizmet" },
  ];

  const team = [
    {
      name: "Yönetim Ekibi",
      role: "Night Club Operasyonları",
      description: "Deneyimli yönetim kadromuz, Faraon Night Club'ın kusursuz işleyişini sağlar.",
    },
    {
      name: "Misafir İlişkileri",
      role: "Müşteri Deneyimi",
      description: "Kıbrıs night club deneyiminizi en üst seviyeye taşımak için çalışırlar.",
    },
    {
      name: "Performans Ekibi",
      role: "Sahne Sanatları",
      description: "Profesyonel dansçılarımız, night club katalog'umuzdaki en yetenekli isimlerdir.",
    },
    {
      name: "Güvenlik Ekibi",
      role: "Koruma Hizmetleri",
      description: "Night club'ımızda güvenliğiniz her zaman ön plandadır.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-background to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />

        <div className="container mx-auto relative z-10 px-4 py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 mb-6 text-sm font-medium border rounded-full text-gold-light border-gold/30 bg-gold/10">
              Hikayemiz
            </span>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-balance md:text-6xl font-serif text-foreground">
              Faraon Night Club
              <span className="block mt-2 text-transparent ">
                Hakkımızda
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground md:text-xl">
              Kıbrıs night club sektörünün öncüsü olarak, yıllardır premium gece eğlencesi
              sunuyoruz. Faraon Night Club ile tanışın.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-6 text-3xl font-bold font-serif md:text-4xl text-foreground">
                Kıbrıs Night Club Deneyiminde{" "}
                <span className="text-gold">Öncü Marka</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Faraon Night Club, 2015 yılında Kıbrıs'ta gece eğlencesine yeni bir soluk getirmek
                  amacıyla kuruldu. Vizyonumuz, Kıbrıs night club sektöründe kalite ve prestijin
                  simgesi olmaktı.
                </p>
                <p>
                  Bugün, night club katalog'umuzda yer alan yüzlerce profesyonel performansçımız
                  ve deneyimli ekibimizle, misafirlerimize unutulmaz anlar yaşatıyoruz. Kıbrıs
                  night club deneyiminde Faraon farkını yaşayın.
                </p>
                <p>
                  VIP hizmetler, lüks konaklama, özel transfer ve daha fazlası... Faraon Night
                  Club olarak, gece eğlencesinin tüm detaylarını düşünüyoruz. Night club
                  katalog'umuzu keşfedin ve Kıbrıs'ın en özel gecesini yaşayın.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mt-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-gold to-gold-dark hover:from-gold-dark hover:to-gold-dark"
                >
                  <Link href="/katalog">Night Club Katalog</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-gold/50 text-gold-light hover:bg-gold/10 bg-transparent">
                  <Link href="/iletisim">Bize Ulaşın</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-gold-dark/20" />
                <Image
                  src="/images/about-hero.jpg"
                  alt="Faraon Night Club - Kıbrıs Night Club İç Mekan"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute p-4 border rounded-xl -bottom-6 -left-6 bg-card border-gold/20">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-gold to-gold-dark">
                    <Crown className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Premium Hizmet</p>
                    <p className="text-sm text-muted-foreground">Kıbrıs Night Club #1</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y bg-card/50 border-gold/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl font-bold text-transparent md:text-5xl ">
                  {stat.value}
                </p>
                <p className="mt-2 text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <span className="inline-block px-4 py-2 mb-4 text-sm font-medium border rounded-full text-gold-light border-gold/30 bg-gold/10">
              Değerlerimiz
            </span>
            <h2 className="text-3xl font-bold font-serif md:text-4xl text-foreground">
              Neden Faraon Night Club?
            </h2>
            <p className="max-w-2xl mx-auto mt-4 text-muted-foreground">
              Kıbrıs night club deneyiminde fark yaratan değerlerimiz
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full transition-all border-gold/10 bg-card/50 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-center w-14 h-14 mb-4 rounded-xl bg-gradient-to-br from-gold/20 to-gold-dark/20">
                      <value.icon className="w-7 h-7 text-gold" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-foreground">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <span className="inline-block px-4 py-2 mb-4 text-sm font-medium border rounded-full text-gold-light border-gold/30 bg-gold/10">
              Ekibimiz
            </span>
            <h2 className="text-3xl font-bold font-serif md:text-4xl text-foreground">
              Profesyonel Kadromuz
            </h2>
            <p className="max-w-2xl mx-auto mt-4 text-muted-foreground">
              Faraon Night Club'ın arkasındaki uzman ekip
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full text-center transition-all border-gold/10 bg-card/50 hover:border-gold/30">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-gold/20 to-gold-dark/20">
                      <Users className="w-10 h-10 text-gold" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
                    <p className="text-sm text-gold">{member.role}</p>
                    <p className="mt-3 text-sm text-muted-foreground">{member.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-gold/10 bg-card/50">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-gold/20 to-gold-dark/20">
                    <Target className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="mb-4 text-2xl font-bold font-serif text-foreground">Misyonumuz</h3>
                  <p className="text-muted-foreground">
                    Kıbrıs night club sektöründe en kaliteli hizmeti sunmak ve misafirlerimize
                    unutulmaz deneyimler yaşatmak. Faraon Night Club olarak, her detayı özenle
                    planlıyor ve müşteri memnuniyetini en üst düzeyde tutuyoruz. Night club
                    katalog'umuzdaki her performansçı, profesyonellik ve kalite standartlarımızı
                    yansıtır.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="h-full border-gold/10 bg-card/50">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-gold/20 to-gold-dark/20">
                    <Sparkles className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="mb-4 text-2xl font-bold font-serif text-foreground">Vizyonumuz</h3>
                  <p className="text-muted-foreground">
                    Kıbrıs night club deneyiminde global standartları belirleyen, yenilikçi ve
                    öncü bir marka olmak. Faraon Night Club olarak, teknoloji ve konforun
                    buluştuğu modern bir night club anlayışı sunuyoruz. Kıbrıs night club
                    katalog'umuz ile sektörde fark yaratmaya devam ediyoruz.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative p-8 overflow-hidden text-center rounded-3xl md:p-16 bg-gradient-to-br from-primary/10 via-primary/20 to-primary/20"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gold/20 via-transparent to-transparent" />
            <div className="relative z-10">
              <h2 className="mb-4 text-3xl font-bold font-serif md:text-4xl text-white">
                Faraon Night Club'a Hoş Geldiniz
              </h2>
              <p className="max-w-2xl mx-auto mb-8 text-gold-pale/80">
                Kıbrıs night club deneyiminin en iyisini yaşamak için hemen iletişime geçin.
                VIP rezervasyon, night club katalog ve özel hizmetler için bizi arayın.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-foreground hover:bg-gold/10"
                >
                  <Link href="/iletisim">Hemen İletişime Geçin</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="text-white border-white/30 hover:bg-white/10 bg-transparent"
                >
                  <Link href="/katalog">Katalog'u Keşfedin</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
