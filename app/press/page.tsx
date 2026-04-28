import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const pressReleases = [
  {
    date: "April 15, 2026",
    title: "HMA-Store Expands Logistics Network to Ensure 24-Hour Delivery in Major Cities",
    description: "New partnerships with local couriers allow for faster transit times and improved Cash on Delivery services across Pakistan."
  },
  {
    date: "February 10, 2026",
    title: "Eco-Friendly Packaging Initiative Launched",
    description: "HMA-Store commits to 100% biodegradable packaging for all premium apparel orders starting this quarter."
  },
  {
    date: "December 20, 2025",
    title: "HMA-Store Reaches 10,000 Happy Customers Milestone",
    description: "A look back at our growth and a thank you to the community that made our first year a success."
  }
]

export default function PressPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="max-w-3xl mx-auto px-4 py-16">
          <p className="text-xs text-muted-foreground tracking-[0.25em] uppercase mb-3">Newsroom</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-2">Press</h1>
          <p className="text-muted-foreground mb-12 text-lg">Official updates and media resources from HMA-Store.</p>
          
          <div className="space-y-12">
            <section>
              <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground border-b border-border pb-2 mb-8">Latest Releases</h2>
              <div className="flex flex-col gap-10">
                {pressReleases.map(({ date, title, description }, i) => (
                  <div key={i} className="group cursor-pointer">
                    <p className="text-xs text-primary mb-2 font-medium">{date}</p>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                      {title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-muted/30 p-8 rounded-lg border border-border mt-16">
              <h2 className="text-xl font-semibold mb-4">Media Inquiries</h2>
              <p className="text-muted-foreground text-sm mb-6">
                For interview requests, high-resolution brand assets, or official statements, please reach out to our media team.
              </p>
              <a 
                href="mailto:press@hma-store.com" 
                className="inline-block bg-foreground text-background px-6 py-3 text-sm font-medium hover:bg-foreground/90 transition-colors"
              >
                Contact Press Office
              </a>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}