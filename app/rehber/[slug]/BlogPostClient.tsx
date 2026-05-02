"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Clock,
  ArrowLeft,
  MessageCircle,
  Share2,
  Tag,
  BookOpen,
} from "lucide-react";

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  content: string;
}

export default function BlogPostClient({ post }: { post: BlogPost }) {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      });
    }
  };

  return (
    <article className="min-h-screen bg-background pt-20">
      {/* Hero Header Section */}
      <section className="relative py-24 md:py-32 overflow-hidden flex items-center min-h-[50vh]">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-background to-background z-0" />
        <div className="absolute inset-0 bg-[url('/images/about-hero.jpg')] bg-cover bg-center opacity-20 mix-blend-overlay z-0" />
        
        {/* Abstract decorative elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-gold/10 rounded-full blur-3xl z-0" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-gold-dark/10 rounded-full blur-3xl z-0" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <Link
              href="/rehber"
              className="inline-flex items-center gap-2 text-gold-pale/70 hover:text-gold-light transition-colors mb-8 text-sm font-medium tracking-wide uppercase"
            >
              <ArrowLeft className="w-4 h-4" />
              Rehbere Dön
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-gold to-gold-dark text-white rounded-full shadow-lg shadow-gold/20">
                <Tag className="w-3.5 h-3.5 fill-current" />
                {post.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-white mb-8 leading-tight">
              {post.title}
            </h1>

            <p className="text-xl md:text-2xl text-gold-pale/80 mb-8 leading-relaxed font-light">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-gold-pale/60 font-medium border-t border-gold/20 pt-6">
              <span className="flex items-center gap-2">
                <Calendar className="w-4.5 h-4.5 text-gold" />
                {new Date(post.date).toLocaleDateString("tr-TR", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4.5 h-4.5 text-gold" />
                {post.readTime} okuma
              </span>
              <button
                onClick={handleShare}
                type="button"
                className="flex items-center gap-2 hover:text-gold-light transition-colors ml-auto"
              >
                <Share2 className="w-4.5 h-4.5 text-gold" />
                Paylaş
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 relative z-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-card/30 border border-gold/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm shadow-xl">
              <div
                className="prose prose-lg prose-invert max-w-none
                  prose-headings:text-foreground prose-headings:font-bold prose-headings:font-serif
                  prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:text-gold-light
                  prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                  prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:text-lg
                  prose-strong:text-gold/90
                  prose-ul:my-6 prose-li:text-muted-foreground prose-li:marker:text-gold
                  prose-a:text-gold hover:prose-a:text-gold-light
                "
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-card/30 border-t border-gold/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative p-10 md:p-16 overflow-hidden text-center rounded-[3rem] bg-gradient-to-br from-primary/10 via-primary/20 to-primary/20 max-w-5xl mx-auto shadow-2xl shadow-primary/20"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gold/20 via-transparent to-transparent" />
            <div className="relative z-10">
              <BookOpen className="w-12 h-12 text-gold-light mx-auto mb-6 opacity-80" />
              <h2 className="text-3xl md:text-5xl font-bold font-serif mb-6 text-white">
                Night Club Deneyimine Hazır mısınız?
              </h2>
              <p className="text-gold-pale/80 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto font-light">
                <strong className="text-gold-light font-medium">Faraon Night Club</strong> ile <strong className="text-white font-medium">Kıbrıs night club</strong> deneyiminizi 
                planlamak için hemen bizimle iletişime geçin. VIP hizmetler ve daha fazlası sizi bekliyor.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-foreground hover:bg-gold/10 h-14 px-8 text-base font-semibold shadow-lg shadow-white/10"
                >
                  <a
                    href="https://wa.me/905338801043"
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
    </article>
  );
}
