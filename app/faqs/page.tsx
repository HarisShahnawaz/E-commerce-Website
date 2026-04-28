import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const faqs = [
  { q: "How do I track my order?", a: "Once your order ships, you'll receive an SMS with tracking info within 24 hours." },
  { q: "Can I exchange an item?", a: "Exchanges are free within 7 days of delivery. Contact us via the Contact page." },
  { q: "What payment methods do you accept?", a: "Cash on Delivery, JazzCash, EasyPaisa, and bank transfer." },
  { q: "How long does delivery take?", a: "24–48 hours for major cities. Remote areas may take 3–5 days." },
  { q: "Do you offer free shipping?", a: "Yes! Free shipping on all orders over Rs 30,000." },
  { q: "Are your products authentic?", a: "Every item is 100% authentic and quality-checked before dispatch." },
  { q: "Can I cancel my order?", a: "Orders can be cancelled within 1 hour of placing. Contact us immediately after." },
  { q: "Do you ship internationally?", a: "Currently we only ship within Pakistan. International shipping coming soon." },
]

export default function FAQsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="max-w-3xl mx-auto px-4 py-16">
          <p className="text-xs text-muted-foreground tracking-[0.25em] uppercase mb-3">Help Center</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-2">FAQs</h1>
          <p className="text-muted-foreground mb-12 text-lg">Everything you need to know about HMA-Store.</p>
          <div className="flex flex-col">
            {faqs.map(({ q, a }, i) => (
              <div key={i} className="border-b border-border py-6">
                <h3 className="font-semibold text-foreground mb-2">{q}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}