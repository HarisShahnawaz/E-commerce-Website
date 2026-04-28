import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="max-w-3xl mx-auto px-4 py-16">
          <p className="text-xs text-muted-foreground tracking-[0.25em] uppercase mb-3">Legal</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-2">Privacy Policy</h1>
          <p className="text-muted-foreground mb-12">Last updated: April 2026</p>
          <div className="flex flex-col gap-10 text-sm text-muted-foreground leading-relaxed">
            {[
              { title: "1. Information We Collect", body: "When you place an order, we collect your name, phone number, delivery address, and order history. We do not collect payment card details — transactions go through JazzCash or EasyPaisa directly." },
              { title: "2. How We Use Your Information", body: "We use your data to process and deliver orders, send SMS tracking updates, respond to inquiries, improve our site, and send promotional offers only if you opt in." },
              { title: "3. Data Sharing", body: "We do not sell or rent your personal information. We only share your delivery address and phone number with our courier partners to fulfill your order." },
              { title: "4. Cookies", body: "We use cookies to improve your browsing experience, remember your cart, and analyze traffic. You can disable cookies in your browser, which may affect some features." },
              { title: "5. Data Security", body: "We use industry-standard security to protect your data. No method of internet transmission is 100% secure, but we take all reasonable steps." },
              { title: "6. Your Rights", body: "You may request to view, update, or delete your personal data at any time via our Contact page. We respond within 5 business days." },
              { title: "7. Contact", body: "For privacy questions, reach out via our Contact page." },
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