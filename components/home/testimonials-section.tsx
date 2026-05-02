import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Mehmet K.",
    location: "İstanbul",
    rating: 5,
    text: "Kıbrıs'ta birçok night club denedim ama Faraon Night Club gerçekten farklı. VIP hizmet anlayışları ve profesyonellikleri mükemmel.",
  },
  {
    id: 2,
    name: "Ahmet Y.",
    location: "Ankara",
    rating: 5,
    text: "Night club katalog seçenekleri çok geniş. İstediğimiz her şeyi ayarladılar. Kesinlikle tekrar geleceğim.",
  },
  {
    id: 3,
    name: "Can B.",
    location: "İzmir",
    rating: 5,
    text: "Transfer ve konaklama dahil her şeyi organize ettiler. Faraon Night Club ile Kıbrıs gece hayatı çok keyifli geçti.",
  },
]

export function TestimonialsSection() {
  return (
    <section 
      className="py-20 md:py-28"
      aria-labelledby="testimonials-heading"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-gold text-sm font-medium uppercase tracking-wider mb-3">
            Misafir Yorumları
          </p>
          <h2 id="testimonials-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Misafirlerimiz</span>{" "}
            <span className="text-gradient-gold">Ne Diyor?</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            <strong>Faraon Night Club</strong> deneyimini yaşayan misafirlerimizin yorumları. 
            Kıbrıs night club tercihlerinde neden biz?
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-gold/30 transition-colors"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-gold text-gold"
                  />
                ))}
              </div>
              
              {/* Text */}
              <p className="text-foreground leading-relaxed mb-6">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-sm font-semibold text-gold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
