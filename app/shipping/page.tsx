import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ShippingPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="max-w-3xl mx-auto px-4 py-16">
          <p className="text-xs text-muted-foreground tracking-[0.25em] uppercase mb-3">Help Center</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-2">Shipping Info</h1>
          <p className="text-muted-foreground mb-12 text-lg">Fast, reliable delivery across Pakistan.</p>

          {[
            {
              title: "Delivery Timeframes",
              rows: [
                ["Major Cities (Lahore, Karachi, Islamabad)", "24 – 48 hours"],
                ["Other Cities & Towns", "2 – 4 business days"],
                ["Remote Areas", "3 – 5 business days"],
              ],
            },
            {
              title: "Shipping Charges",
              rows: [
                ["Orders under Rs 30,000", "Rs 500 flat rate"],
                ["Orders over Rs 30,000", "Free shipping"],
                ["Express (same day — Lahore only)", "Rs 1,000"],
              ],
            },
            {
              title: "Order Processing",
              rows: [
                ["Cut-off time", "Orders before 2 PM dispatched same day"],
                ["Weekend orders", "Dispatched next business day"],
                ["Tracking", "SMS link sent within 24 hours of dispatch"],
              ],
            },
          ].map((section) => (
            <div key={section.title} className="mb-10">
              <h2 className="font-semibold text-foreground text-lg mb-4 pb-2 border-b border-border">{section.title}</h2>
              {section.rows.map(([label, value]) => (
                <div key={label} className="flex flex-col sm:flex-row sm:justify-between gap-1 py-2 border-b border-border/50">
                  <span className="text-sm text-muted-foreground">{label}</span>
                  <span className="text-sm font-medium text-foreground">{value}</span>
                </div>
              ))}
            </div>
          ))}

          <div className="p-6 rounded-2xl bg-secondary border border-border">
            <h3 className="font-semibold text-foreground mb-2">Need help with your shipment?</h3>
            <p className="text-sm text-muted-foreground mb-4">Our team is happy to help.</p>
            <a href="/contact" className="inline-block px-6 py-2.5 bg-foreground text-background rounded-lg text-sm font-medium hover:opacity-90 transition">Contact Us</a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}