import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="max-w-3xl mx-auto px-4 py-16">
          <p className="text-xs text-muted-foreground tracking-[0.25em] uppercase mb-3">Legal</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-2">Terms of Service</h1>
          <p className="text-muted-foreground mb-12">Last updated: April 2026</p>
          <div className="flex flex-col gap-10 text-sm text-muted-foreground leading-relaxed">
            {[
              { title: "1. Acceptance of Terms", body: "By using HMA-Store, you agree to these Terms. If you disagree, please do not use our website." },
              { title: "2. Products & Pricing", body: "All prices are in Pakistani Rupees (PKR). We may update prices at any time. In the event of a pricing error, we reserve the right to cancel or adjust orders." },
              { title: "3. Orders & Payment", body: "By placing an order you confirm the information provided is accurate, you are authorized to use the payment method selected, and your order is subject to availability and confirmation. We may refuse any order at our discretion." },
              { title: "4. Shipping & Delivery", body: "Delivery timeframes are estimates only. HMA-Store is not liable for delays caused by couriers, weather, or other factors outside our control. See our Shipping Info page for details." },
              { title: "5. Returns & Refunds", body: "Returns are accepted within 7 days of delivery per our Returns Policy. Refunds are issued to the original payment method within 3–5 business days of receiving the returned item." },
              { title: "6. Intellectual Property", body: "All content on this site — logos, images, and text — belongs to HMA-Store and may not be used without written permission." },
              { title: "7. Limitation of Liability", body: "HMA-Store is not liable for indirect or consequential damages from use of our website or products, to the maximum extent permitted by Pakistani law." },
              { title: "8. Changes to Terms", body: "We may update these Terms at any time. Continued use of the site after changes means you accept the updated Terms." },
              { title: "9. Contact", body: "For questions about these Terms, contact us via our Contact page." },
            ].map(({ title, body }) => (
              <section key={title}>
                <h2 className="font-semibold text-foreground text-lg mb-3">{title}</h2>
                <p>{body}</p>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}