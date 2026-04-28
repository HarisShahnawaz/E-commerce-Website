import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const jobs = [
  {
    title: "Frontend Developer (React/Next.js)",
    location: "Remote / Islamabad",
    type: "Full-time",
    description: "Build beautiful, performant user interfaces for our growing e-commerce platform."
  },
  {
    title: "Social Media Manager",
    location: "Remote",
    type: "Part-time",
    description: "Lead our creative strategy and grow the HMA-Store community across social platforms."
  },
  {
    title: "Operations Associate",
    location: "Lahore",
    type: "Full-time",
    description: "Manage logistics, inventory, and ensure our 24-48 hour delivery promise is met."
  }
]

export default function CareersPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="max-w-3xl mx-auto px-4 py-16">
          <p className="text-xs text-muted-foreground tracking-[0.25em] uppercase mb-3">Join our team</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-2">Careers</h1>
          <p className="text-muted-foreground mb-12 text-lg">Help us redefine the shopping experience in Pakistan.</p>
          
          <div className="space-y-16">
            <section>
              <h2 className="text-2xl font-serif font-bold mb-4">Why HMA-Store?</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We are a small, fast-moving team dedicated to quality and customer trust. At HMA-Store, you&apos;ll have the freedom to own your projects, experiment with new tech, and see your work impact thousands of customers.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 border border-border rounded-md">
                  <h4 className="font-bold mb-1">Remote-First</h4>
                  <p className="text-sm text-muted-foreground">Work from wherever you are most productive.</p>
                </div>
                <div className="p-4 border border-border rounded-md">
                  <h4 className="font-bold mb-1">Growth Mindset</h4>
                  <p className="text-sm text-muted-foreground">Monthly stipend for learning resources and courses.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground border-b border-border pb-2 mb-8">Current Openings</h2>
              <div className="flex flex-col border-t border-border">
                {jobs.map((job, i) => (
                  <div key={i} className="group border-b border-border py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">{job.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{job.location} • {job.type}</p>
                      <p className="text-sm text-muted-foreground mt-3 max-w-md">{job.description}</p>
                    </div>
                    <button className="whitespace-nowrap border border-foreground px-6 py-2 text-sm font-medium hover:bg-foreground hover:text-background transition-all">
                      Apply Now
                    </button>
                  </div>
                ))}
              </div>
            </section>

            <section className="text-center py-12 bg-muted/20 rounded-xl border border-dashed border-border">
              <h3 className="text-xl font-semibold mb-2">Don&apos;t see a fit?</h3>
              <p className="text-muted-foreground text-sm mb-6">We are always looking for talented developers and designers.</p>
              <a href="mailto:careers@hma-store.com" className="text-primary font-medium hover:underline">
                Send us your CV →
              </a>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}