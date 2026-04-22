import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Categories } from "@/components/categories"
import { FeaturedProducts } from "@/components/featured-products"
import { AIFeatures } from "@/components/ai-features"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"
import AboutPage from "./about/page"
import About from "@/components/about"
import { Contact } from "lucide-react"
import ContactUS from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Categories />
      <FeaturedProducts />
       <About/>
       <ContactUS/>
      <AIFeatures />
      <Newsletter />
      <Footer />
    </main>
  )
}
