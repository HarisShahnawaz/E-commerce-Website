import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,0,0,0.02)_0%,transparent_50%)]" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* AI Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border mb-8">
          <Sparkles className="h-4 w-4 text-accent" />
          <span className="text-sm font-medium text-foreground">AI-Powered Shopping Experience</span>
        </div>

        {/* Main Headline */}
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground leading-[0.95] text-balance">
          Discover your
          <br />
          <span className="italic">perfect style</span>
        </h1>

        {/* Subheadline */}
        <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
          Experience the future of fashion with our AI-powered recommendations.
          Curated collections for Men, Women, and Children.
        </p>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="rounded-full px-8 h-12 text-base" asChild>
            <Link href="/women">
              Shop Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" className="rounded-full px-8 h-12 text-base" asChild>
            <Link href="/ai-stylist">
              <Sparkles className="mr-2 h-4 w-4" />
              Try AI Stylist
            </Link>
          </Button>
        </div>
      </div>

      {/* Category Links */}
      <div className="relative z-10 mt-20 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
        <Link 
          href="/men" 
          className="group flex items-center gap-2 text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
        >
          <span>Shop Men</span>
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
        <Link 
          href="/women" 
          className="group flex items-center gap-2 text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
        >
          <span>Shop Women</span>
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
        <Link 
          href="/children" 
          className="group flex items-center gap-2 text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
        >
          <span>Shop Children</span>
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  )
}
