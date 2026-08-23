"use client";

import React from "react"

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Instagram,
  Twitter,
  CheckCircle,
  Sparkles,
} from "lucide-react";

export default function IletisimPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "success">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("success");
    setTimeout(() => {
      setFormStatus("idle");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefon",
      value: "+90 542 885 75 75",
      description: "7/24 Rezervasyon Hattı",
      action: "tel:+905428857575",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "+90 542 885 75 75",
      description: "Hızlı İletişim",
      action: "https://wa.me/905428857575",
    },
    {
      icon: Mail,
      title: "E-posta",
      value: "info@faraonnightclubs.com",
      description: "Detaylı Bilgi İçin",
      action: "mailto:info@faraonnightclubs.com",
    },
    {
      icon: MapPin,
      title: "Konum",
      value: "Kıbrıs",
      description: "Detaylı Adres İçin Arayın",
      action: "#",
    },
  ];

  const workingHours = [
    { day: "Pazartesi - Perşembe", hours: "21:00 - 04:00" },
    { day: "Cuma - Cumartesi", hours: "21:00 - 06:00" },
    { day: "Pazar", hours: "21:00 - 04:00" },
  ];

  const faqItems = [
    {
      question: "Rezervasyon nasıl yapabilirim?",
      answer:
        "Faraon Night Club rezervasyonu için telefon, WhatsApp veya iletişim formumuz üzerinden bize ulaşabilirsiniz. Kıbrıs night club deneyiminizi önceden planlamanızı öneririz.",
    },
    {
      question: "Night club katalog'u nasıl görebilirim?",
      answer:
        "Faraon Night Club katalog'umuzu web sitemizin Katalog sayfasından inceleyebilirsiniz. Kıbrıs night club katalog'umuzda tüm performansçılarımız yer almaktadır.",
    },
    {
      question: "VIP hizmetler nelerdir?",
      answer:
        "VIP night club hizmetlerimiz arasında özel masa, kişisel host/hostes, premium içecek servisi, özel performanslar ve daha fazlası bulunmaktadır.",
    },
    {
      question: "Transfer ve konaklama hizmeti var mı?",
      answer:
        "Evet, Faraon Night Club olarak havalimanı transferi, VIP araç kiralama ve lüks konaklama organizasyonu hizmetleri sunuyoruz.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-background to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />

        <div className="container mx-auto relative z-10 px-4 py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 mb-6 text-sm font-medium border rounded-full text-gold-light border-gold/30 bg-gold/10">
              Bize Ulaşın
            </span>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-balance md:text-6xl font-serif text-foreground">
              Faraon Night Club
              <span className="block mt-2 text-transparent ">
                İletişim
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground md:text-xl">
              Kıbrıs night club deneyimi için hemen iletişime geçin. Rezervasyon, night club
              katalog ve tüm sorularınız için 7/24 hizmetinizdeyiz.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 -mt-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.title}
                href={info.action}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="block"
              >
                <Card className="h-full transition-all border-gold/10 bg-card/50 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5 group">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-center w-14 h-14 mb-4 transition-transform rounded-xl bg-gradient-to-br from-gold/20 to-gold-dark/20 group-hover:scale-110">
                      <info.icon className="w-7 h-7 text-gold" />
                    </div>
                    <h3 className="mb-1 text-lg font-semibold text-foreground">{info.title}</h3>
                    <p className="font-medium text-gold">{info.value}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{info.description}</p>
                  </CardContent>
                </Card>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-gold/10 bg-card/50">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-gold/20 to-gold-dark/20">
                      <Send className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold font-serif text-foreground">
                        Mesaj Gönderin
                      </h2>
                      <p className="text-sm text-muted-foreground">
                        Night club rezervasyon ve bilgi talebi
                      </p>
                    </div>
                  </div>

                  {formStatus === "success" ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="py-12 text-center"
                    >
                      <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 rounded-full bg-green-500/20">
                        <CheckCircle className="w-10 h-10 text-green-500" />
                      </div>
                      <h3 className="mb-2 text-xl font-semibold text-foreground">
                        Mesajınız Alındı!
                      </h3>
                      <p className="text-muted-foreground">
                        En kısa sürede size dönüş yapacağız.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="name">Adınız Soyadınız</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                            placeholder="Adınızı girin"
                            required
                            className="border-gold/20 bg-background/50 focus:border-gold"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Telefon</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData({ ...formData, phone: e.target.value })
                            }
                            placeholder="+90 5XX XXX XX XX"
                            required
                            className="border-gold/20 bg-background/50 focus:border-gold"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">E-posta</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          placeholder="ornek@email.com"
                          required
                          className="border-gold/20 bg-background/50 focus:border-gold"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Konu</Label>
                        <Select
                          value={formData.subject}
                          onValueChange={(value) =>
                            setFormData({ ...formData, subject: value })
                          }
                        >
                          <SelectTrigger className="border-gold/20 bg-background/50">
                            <SelectValue placeholder="Konu seçin" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="reservation">
                              Night Club Rezervasyon
                            </SelectItem>
                            <SelectItem value="catalog">
                              Night Club Katalog Bilgisi
                            </SelectItem>
                            <SelectItem value="vip">VIP Hizmetler</SelectItem>
                            <SelectItem value="accommodation">
                              Konaklama & Transfer
                            </SelectItem>
                            <SelectItem value="other">Diğer</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Mesajınız</Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({ ...formData, message: e.target.value })
                          }
                          placeholder="Mesajınızı buraya yazın..."
                          rows={5}
                          required
                          className="border-gold/20 bg-background/50 focus:border-gold resize-none"
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-gradient-to-r from-gold to-gold-dark hover:from-gold-dark hover:to-gold-dark"
                      >
                        <Send className="w-4 h-4 mr-2" />
                        Mesaj Gönder
                      </Button>

                      <p className="text-xs text-center text-muted-foreground">
                        Formu göndererek gizlilik politikamızı kabul etmiş olursunuz.
                      </p>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Working Hours */}
              <Card className="border-gold/10 bg-card/50">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-gold/20 to-gold-dark/20">
                      <Clock className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold font-serif text-foreground">
                        Çalışma Saatleri
                      </h2>
                      <p className="text-sm text-muted-foreground">
                        Kıbrıs night club açılış saatleri
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {workingHours.map((item) => (
                      <div
                        key={item.day}
                        className="flex items-center justify-between p-4 rounded-lg bg-background/50"
                      >
                        <span className="text-foreground">{item.day}</span>
                        <span className="font-semibold text-gold">{item.hours}</span>
                      </div>
                    ))}
                  </div>

                  <p className="mt-6 text-sm text-center text-muted-foreground">
                    Rezervasyon hattımız 7/24 hizmetinizdedir.
                  </p>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="border-gold/10 bg-card/50">
                <CardContent className="p-8">
                  <h3 className="mb-4 text-xl font-bold font-serif text-foreground">
                    Sosyal Medya
                  </h3>
                  <p className="mb-6 text-muted-foreground">
                    Faraon Night Club&apos;ı sosyal medyada takip edin, Kıbrıs night club
                    etkinliklerinden haberdar olun.
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="flex items-center justify-center w-12 h-12 transition-colors rounded-xl bg-gradient-to-br from-gold/20 to-gold-dark/20 hover:from-gold/30 hover:to-gold-dark/30"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-6 h-6 text-gold" />
                    </a>
                    <a
                      href="#"
                      className="flex items-center justify-center w-12 h-12 transition-colors rounded-xl bg-gradient-to-br from-gold/20 to-gold-dark/20 hover:from-gold/30 hover:to-gold-dark/30"
                      aria-label="Twitter"
                    >
                      <Twitter className="w-6 h-6 text-gold" />
                    </a>
                    <a
                      href="#"
                      className="flex items-center justify-center w-12 h-12 transition-colors rounded-xl bg-gradient-to-br from-gold/20 to-gold-dark/20 hover:from-gold/30 hover:to-gold-dark/30"
                      aria-label="WhatsApp"
                    >
                      <MessageCircle className="w-6 h-6 text-gold" />
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card className="overflow-hidden border-gold/10 bg-gradient-to-br from-primary/10 via-primary/20 to-primary/20">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Sparkles className="w-6 h-6 text-gold-light" />
                    <h3 className="text-xl font-bold text-white">Hızlı Rezervasyon</h3>
                  </div>
                  <p className="mb-6 text-gold-pale/80">
                    Kıbrıs night club rezervasyonu için hemen arayın. VIP night club deneyimi
                    için Faraon Night Club.
                  </p>
                  <Button
                    asChild
                    size="lg"
                    className="w-full bg-white text-foreground hover:bg-gold/10"
                  >
                    <a href="tel:+905428857575">
                      <Phone className="w-4 h-4 mr-2" />
                      Hemen Arayın
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <span className="inline-block px-4 py-2 mb-4 text-sm font-medium border rounded-full text-gold-light border-gold/30 bg-gold/10">
              SSS
            </span>
            <h2 className="text-3xl font-bold font-serif md:text-4xl text-foreground">
              Sıkça Sorulan Sorular
            </h2>
            <p className="max-w-2xl mx-auto mt-4 text-muted-foreground">
              Kıbrıs night club ve Faraon Night Club hakkında merak edilenler
            </p>
          </motion.div>

          <div className="grid max-w-4xl gap-4 mx-auto md:grid-cols-2">
            {faqItems.map((item, index) => (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-gold/10 bg-card/50">
                  <CardContent className="p-6">
                    <h3 className="mb-3 font-semibold text-foreground">{item.question}</h3>
                    <p className="text-sm text-muted-foreground">{item.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 text-center"
          >
            <h2 className="text-3xl font-bold font-serif md:text-4xl text-foreground">
              Konumumuz
            </h2>
            <p className="max-w-2xl mx-auto mt-4 text-muted-foreground">
              Kıbrıs&apos;ın kalbinde, eşsiz night club deneyimi için Faraon Night Club
            </p>
          </motion.div>

          <div className="relative overflow-hidden rounded-2xl aspect-[16/6] bg-gradient-to-br from-primary/50 to-primary/50 border border-gold/20">
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <MapPin className="w-12 h-12 mb-4 text-gold" />
              <p className="text-lg font-semibold text-foreground">Kıbrıs</p>
              <p className="text-muted-foreground">
                Detaylı konum bilgisi için lütfen iletişime geçin
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
