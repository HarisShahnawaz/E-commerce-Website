import Link from "next/link"
import Image from "next/image"
import {Header} from "@/components/header"
import {Footer} from "@/components/footer"

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f5f3ef]">

        {/* ── TOP HEADING ── */}
        <section className="text-center pt-16 pb-10 px-6">
          <p className="text-xs text-gray-400 tracking-[0.25em] uppercase mb-3">Who We Are</p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
            About Us
          </h1>
          <div className="w-12 h-0.5 bg-gray-900  mt-5" />
        </section>

        {/* ── FULL WIDTH IMAGE ── */}
        <section className="relative w-full h-[40vh] sm:h-[55vh] lg:h-[80vh] overflow-hidden">
          <Image
            src="/aboutimage.png"
            alt="HMA-Store boutique"
            fill
            className="object-cover object-center"
            priority
          />
        </section>

        {/* ── INTRO ── */}
        <section className="max-w-5xl mx-auto px-6 sm:px-10 py-14 sm:py-20 text-left">

<h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-10">
  Fashion Meets <span className="italic text-gray-400">Intelligence</span>
</h2>
<p className="text-gray-600 text-lg sm:text-xl leading-relaxed mb-5 max-w-2xl">
  We believe fashion should be effortless, intelligent, and accessible to everyone. 
  HMA-Store was built to bring you the finest curated collections for Men, Women, 
  and Children — all powered by cutting-edge AI technology.
</p>
<p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-2xl ">
  From timeless classics to the latest trends, every product is handpicked by 
  our AI stylist to match your personality, lifestyle, and budget. We are committed 
  to making fashion fun, personal, and accessible for the whole family.
</p>
        </section>

        {/* ── FEATURES ── */}
        <section className="px-6 sm:px-10 lg:px-20 pb-16 sm:pb-20">
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                icon: "🚀",
                title: "Fast Delivery",
                desc: "Express shipping to your doorstep within 24–48 hours, anywhere in the country."
              },
              {
                icon: "✨",
                title: "AI Recommendations",
                desc: "Our AI stylist learns your taste and suggests outfits perfectly matched to you."
              },
              {
                icon: "🔒",
                title: "Secure Payments",
                desc: "Shop with confidence. All transactions are encrypted and fully protected."
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm hover:shadow-md transition text-center"
              >
                <span className="text-3xl mb-4 block">{feature.icon}</span>
                <h3 className="text-base font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── STATS ── */}
        <section className="bg-gray-900 py-14 sm:py-16 px-6">
          <div className="max-w-4xl mx-auto grid grid-cols-3 gap-4 text-center">
            {[
              { number: "7,000+", label: "Products" },
              { number: "50K+", label: "Happy Customers" },
              { number: "100%", label: "AI Curated" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </p>
                <p className="text-xs text-gray-400 uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-16 sm:py-20 px-6 text-center bg-[#f5f3ef]">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Ready to discover your style?
          </h2>
          <p className="text-gray-500 text-sm sm:text-base mb-8 max-w-md mx-auto">
            Explore thousands of AI-curated pieces for the whole family.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/women"
              className="bg-gray-900 text-white px-8 py-3 rounded-lg text-sm font-medium hover:bg-black transition"
            >
              Shop Now
            </Link>
            <Link
              href="/contact"
              className="border border-gray-300 text-gray-900 px-8 py-3 rounded-lg text-sm font-medium hover:bg-white transition"
            >
              Contact Us
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}