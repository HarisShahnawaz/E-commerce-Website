import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ReturnsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="max-w-3xl mx-auto px-4 py-16">
          <p className="text-xs text-muted-foreground tracking-[0.25em] uppercase mb-3">Help Center</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-2">Returns & Exchanges</h1>
          <p className="text-muted-foreground mb-12 text-lg">We want you to love what you ordered.</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            {[
              { icon: "📅", title: "7-Day Window", desc: "Return or exchange within 7 days of delivery" },
              { icon: "💸", title: "Free Returns", desc: "No charges for defective or wrong items" },
              { icon: "⚡", title: "Fast Refunds", desc: "Processed within 3–5 business days" },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="p-5 rounded-2xl bg-secondary border border-border text-center">
                <div className="text-3xl mb-2">{icon}</div>
                <h3 className="font-semibold text-foreground text-sm mb-1">{title}</h3>
                <p className="text-xs text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>

          <h2 className="font-semibold text-foreground text-lg mb-4 pb-2 border-b border-border">How to Return</h2>
          <ol className="flex flex-col gap-4 mb-10">
            {[
              { step: "1", title: "Contact Us", desc: "Message us on WhatsApp or via the Contact page with your order details." },
              { step: "2", title: "Get Approval", desc: "Our team confirms eligibility within 24 hours." },
              { step: "3", title: "Ship the Item", desc: "Pack securely in original packaging and ship to our address." },
              { step: "4", title: "Receive Refund", desc: "Refund or replacement processed within 3–5 business days of receiving the item." },
            ].map(({ step, title, desc }) => (
              <li key={step} className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-foreground text-background text-sm font-bold flex items-center justify-center shrink-0 mt-0.5">{step}</div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm mb-1">{title}</h3>
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </div>
              </li>
            ))}
          </ol>

          <h2 className="font-semibold text-foreground text-lg mb-4 pb-2 border-b border-border">Not Eligible for Return</h2>
          <ul className="flex flex-col gap-2 mb-10">
            {["Items returned after 7 days", "Worn, washed, or altered items", "Items without original tags", "Sale items marked as final sale", "Innerwear and accessories"].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="text-red-400 mt-0.5">✕</span>{item}
              </li>
            ))}
          </ul>

          <div className="p-6 rounded-2xl bg-secondary border border-border">
            <h3 className="font-semibold text-foreground mb-2">Still have questions?</h3>
            <p className="text-sm text-muted-foreground mb-4">Our team is happy to help.</p>
            <a href="/contact" className="inline-block px-6 py-2.5 bg-foreground text-background rounded-lg text-sm font-medium hover:opacity-90 transition">Contact Us</a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}