"use client"

import { useState } from "react"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Newsletter() {
  const [email, setEmail] = useState("")

  return (
    <section className="py-20 px-4 bg-foreground">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/10 border border-background/20 mb-6">
          <Sparkles className="h-4 w-4 text-background" />
          <span className="text-sm font-medium text-background">Join the HMA-Store Community</span>
        </div>
        
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-background mb-4">
          Stay ahead of the trends
        </h2>
        <p className="text-background/70 text-lg mb-8 max-w-xl mx-auto">
          Subscribe for exclusive AI-curated style picks, early access to sales, and 10% off your first order.
        </p>

        <form 
          className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          onSubmit={(e) => {
            e.preventDefault()
            // Handle subscription
          }}
        >
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-12 rounded-full bg-background text-foreground placeholder:text-muted-foreground border-0"
          />
          <Button 
            type="submit" 
            className="h-12 rounded-full px-8 bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            Subscribe
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </form>

        <p className="mt-4 text-xs text-background/50">
          By subscribing, you agree to our Privacy Policy and consent to receive updates from HMA-Store.
        </p>
      </div>
    </section>
  )
}
