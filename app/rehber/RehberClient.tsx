"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Calendar,
  Clock,
  ArrowRight,
  MessageCircle,
  BookOpen,
  Tag,
  Star,
  ChevronRight,
  Sparkles
} from "lucide-react";

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  featured?: boolean;
}

interface Category {
  name: string;
  count: number;
}

export default function RehberClient({
  blogPosts,
  categories,
}: {
  blogPosts: BlogPost[];
  categories: Category[];
}) {
  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden flex items-center justify-center min-h-[40vh]">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-background to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-2 mb-6 text-sm font-medium border rounded-full text-gold-light border-gold/30 bg-gold/10">
              Blog & Rehber
            </span>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-balance md:text-6xl font-serif text-foreground">
              Kıbrıs Night Club
              <span className="block mt-2 text-gradient-gold">
                Rehberi
              </span>
            </h1>
            <p className="max-w-3xl mx-auto text-lg text-muted-foreground md:text-xl leading-relaxed">
              Kıbrıs gece hayatı, night club kültürü ve VIP eğlence hakkında kapsamlı rehber
              içerikleri. Faraon Night Club deneyiminizi en iyi şekilde planlamanız için ihtiyacınız
              olan tüm bilgiler.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12 relative z-20 -mt-12">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-6xl mx-auto"
            >
              <Link href={`/rehber/${featuredPost.slug}`} className="block group">
                <div className="relative overflow-hidden rounded-3xl bg-card border border-gold/20 shadow-2xl transition-all duration-500 group-hover:border-gold/50 group-hover:shadow-gold/10">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent z-10" />
                  <div className="absolute inset-0 bg-[url('/images/about-hero.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay group-hover:scale-105 transition-transform duration-700" />
                  
                  <div className="relative z-20 flex flex-col md:flex-row gap-8 p-8 md:p-12 items-center">
                    <div className="flex-1 space-y-6">
                      <div className="flex items-center gap-3">
                        <span className="px-4 py-1.5 text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-gold to-gold-dark text-white rounded-full flex items-center gap-2 shadow-lg shadow-gold/20">
                          <Star className="w-3 h-3 fill-current" />
                          Öne Çıkan
                        </span>
                        <span className="px-4 py-1.5 text-xs font-medium bg-background/50 backdrop-blur-md text-gold-pale rounded-full border border-gold/30">
                          {featuredPost.category}
                        </span>
                      </div>

                      <h2 className="text-3xl md:text-5xl font-bold text-white font-serif leading-tight group-hover:text-gold-light transition-colors">
                        {featuredPost.title}
                      </h2>

                      <p className="text-lg text-gold-pale/80 leading-relaxed max-w-2xl line-clamp-3">
                        {featuredPost.excerpt}
                      </p>

                      <div className="flex items-center gap-6 text-sm text-gold-pale/60 font-medium pt-4">
                        <span className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-gold" />
                          {new Date(featuredPost.date).toLocaleDateString("tr-TR", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })}
                        </span>
                        <span className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-gold" />
                          {featuredPost.readTime}
                        </span>
                      </div>
                    </div>

                    <div className="hidden md:flex shrink-0 w-20 h-20 rounded-full bg-gold/10 border border-gold/30 backdrop-blur-md items-center justify-center group-hover:bg-gold/20 group-hover:scale-110 transition-all duration-300">
                      <ArrowRight className="w-8 h-8 text-gold-light group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* Main Content Area */}
      <section className="py-20 bg-background relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-4 gap-12">
            
            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Categories Widget */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="rounded-2xl bg-card/50 border border-gold/10 p-6 backdrop-blur-sm"
                >
                  <h3 className="text-xl font-bold font-serif text-foreground mb-6 flex items-center gap-3">
                    <Tag className="w-5 h-5 text-gold" />
                    Kategoriler
                  </h3>
                  <ul className="space-y-3">
                    {categories.map((category) => (
                      <li key={category.name}>
                        <button
                          type="button"
                          className={`w-full group flex items-center justify-between p-3 rounded-xl text-sm transition-all duration-300 ${
                            category.name === "Tümü"
                              ? "bg-gradient-to-r from-gold to-gold-dark text-white shadow-md shadow-gold/20"
                              : "bg-background/50 hover:bg-gold/10 text-muted-foreground hover:text-gold-light border border-transparent hover:border-gold/20"
                          }`}
                        >
                          <span className="font-medium flex items-center gap-2">
                            {category.name !== "Tümü" && (
                              <ChevronRight className="w-4 h-4 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                            )}
                            {category.name}
                          </span>
                          <span
                            className={`px-2 py-1 rounded-md text-xs font-bold ${
                              category.name === "Tümü"
                                ? "bg-white/20"
                                : "bg-card border border-gold/10 group-hover:border-gold/30 group-hover:bg-gold/20"
                            }`}
                          >
                            {category.count}
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* CTA Widget */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="rounded-2xl bg-gradient-to-br from-primary/10 to-primary/10 border border-gold/20 p-6 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-gold/20 blur-2xl rounded-full" />
                  <Sparkles className="w-8 h-8 text-gold-light mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2 font-serif">
                    Rezervasyon Yapın
                  </h3>
                  <p className="text-sm text-gold-pale/70 mb-6">
                    Kıbrıs night club deneyiminizi hemen planlamak için bize WhatsApp&apos;tan ulaşın.
                  </p>
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-gold to-gold-dark hover:from-gold-dark hover:to-gold-dark text-white shadow-lg shadow-gold/20 border-0"
                  >
                    <a
                      href="https://wa.me/905428857575"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp İletişim
                    </a>
                  </Button>
                </motion.div>
              </div>
            </aside>

            {/* Posts Grid */}
            <div className="lg:col-span-3">
              <div className="flex items-center gap-3 mb-10 pb-4 border-b border-border">
                <div className="p-2 rounded-lg bg-gold/10 text-gold">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold font-serif text-foreground">
                  Tüm Yazılar
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {regularPosts.map((post, idx) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                  >
                    <Link
                      href={`/rehber/${post.slug}`}
                      className="group flex flex-col h-full rounded-2xl bg-card border border-border hover:border-gold/50 transition-all duration-300 hover:shadow-xl hover:shadow-gold/5 hover:-translate-y-1 overflow-hidden"
                    >
                      {/* Abstract Image / Header for Post */}
                      <div className="h-48 relative overflow-hidden bg-muted">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-background z-10" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-gold/20 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        {/* Decorative pattern/icon */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:scale-110 transition-transform duration-700">
                           <BookOpen className="w-24 h-24 text-gold" />
                        </div>

                        <div className="absolute top-4 left-4 z-20">
                           <span className="px-3 py-1 text-xs font-semibold bg-background/80 backdrop-blur-md border border-border text-foreground rounded-full shadow-sm">
                            {post.category}
                          </span>
                        </div>
                      </div>

                      <div className="p-6 flex flex-col flex-1">
                        <h3 className="text-xl font-bold font-serif text-foreground mb-3 group-hover:text-gold transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        
                        <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
                           <div className="flex items-center gap-4 text-xs font-medium text-muted-foreground">
                            <span className="flex items-center gap-1.5">
                              <Calendar className="w-3.5 h-3.5 text-gold" />
                              {new Date(post.date).toLocaleDateString("tr-TR", {
                                day: "numeric",
                                month: "short",
                                year: "numeric"
                              })}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <Clock className="w-3.5 h-3.5 text-gold" />
                              {post.readTime}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-24 bg-card/30 border-y border-gold/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-invert max-w-none"
            >
              <h2 className="text-3xl font-bold font-serif text-foreground mb-8 text-center">
                <span className="text-gradient-gold">
                  Kıbrıs Night Club
                </span>{" "}
                Hakkında Bilmeniz Gerekenler
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 text-muted-foreground text-sm leading-relaxed">
                <Card className="bg-background/50 border-gold/10">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-foreground mb-3 font-serif flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold">1</span>
                      Sektörün Öncüsü
                    </h3>
                    <p>
                      <strong className="text-gold/80 font-medium">Kıbrıs night club</strong> sektörü, 
                      Akdeniz&apos;in en hareketli gece hayatı destinasyonlarından birini oluşturmaktadır. 
                      <strong className="text-foreground"> Faraon Night Club</strong>, bu sektörün öncü 
                      isimlerinden biri olarak yıllardır kaliteli hizmet sunmaktadır.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-background/50 border-gold/10">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-foreground mb-3 font-serif flex items-center gap-2">
                       <span className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold">2</span>
                      Zengin Katalog
                    </h3>
                    <p>
                      <strong className="text-gold/80 font-medium">Night club katalog</strong> seçenekleri, 
                      misafirlerin tercihlerine ve bütçelerine göre çeşitlilik göstermektedir. 
                      <strong className="text-foreground"> Faraon Night Club katalog</strong> içerisinde 
                      premium, VIP, exclusive ve luxury kategorilerinde seçenekler bulunmaktadır.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-background/50 border-gold/10">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-foreground mb-3 font-serif flex items-center gap-2">
                       <span className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold">3</span>
                      Gece Hayatı Kültürü
                    </h3>
                    <p>
                      <strong className="text-gold/80 font-medium">Kıbrıs gece hayatı</strong>, profesyonel 
                      sahne performansları, canlı müzik ve VIP hizmetler ile tanınmaktadır. 
                      Night club deneyimi, özel dans şovları ve premium eğlence seçenekleri ile 
                      misafirlere unutulmaz anlar yaşatmaktadır.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-background/50 border-gold/10">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-foreground mb-3 font-serif flex items-center gap-2">
                       <span className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold">4</span>
                      VIP Deneyim
                    </h3>
                    <p>
                      <strong className="text-gold/80 font-medium">VIP night club</strong> deneyimi, 
                      özel alanlar, kişiye özel hizmet ve tam gizlilik garantisi ile sunulmaktadır. 
                      <strong className="text-foreground"> Kıbrıs night club katalog</strong> 
                      seçenekleri arasında VIP paketler en çok tercih edilen seçeneklerdendir.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative p-10 md:p-16 overflow-hidden text-center rounded-[3rem] bg-gradient-to-br from-primary/10 via-primary/20 to-primary/20 max-w-5xl mx-auto shadow-2xl shadow-primary/20"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gold/20 via-transparent to-transparent" />
            <div className="relative z-10">
              <h2 className="mb-6 text-3xl font-bold font-serif md:text-5xl text-white">
                Sorularınız mı Var?
              </h2>
              <p className="max-w-2xl mx-auto mb-10 text-lg text-gold-pale/80 leading-relaxed">
                <strong>Kıbrıs night club</strong> deneyiminiz hakkında sorularınız varsa veya 
                <strong> night club katalog</strong> seçenekleri hakkında bilgi almak istiyorsanız, 
                hemen bizimle iletişime geçin.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-foreground hover:bg-gold/10 h-14 px-8 text-base font-semibold shadow-lg shadow-white/10"
                >
                  <a
                    href="https://wa.me/905428857575"
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
                  className="border-white/30 text-white hover:bg-white/10 bg-transparent h-14 px-8 text-base font-semibold backdrop-blur-sm"
                >
                  <Link href="/katalog">
                    Katalogu İncele
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
