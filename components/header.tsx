"use client"

import Link from "next/link"
import { useState } from "react"
import { Search, ShoppingBag, User, Menu, X, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navigation = [
  { name: "Men", href: "/men" },
  { name: "Women", href: "/women" },
  { name: "Children", href: "/children" },
  { name: "New Arrivals", href: "/new-arrivals" },
  { name: "Sale", href: "/sale" },
]

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="mr-2">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-75 sm:w-100">
              <nav className="flex flex-col gap-4 mt-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-lg font-medium text-foreground hover:text-muted-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="font-serif text-2xl font-bold tracking-tight text-foreground">
              HMA-Store
            </span>
            <Sparkles className="h-4 w-4 text-accent" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors uppercase tracking-wider"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* AI Search */}
            <div className="relative">
              {isSearchOpen ? (
                <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Ask AI to find your style..."
                      className="w-50 md:w-75 h-9 rounded-full border border-border bg-card px-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      autoFocus
                    />
                    <Sparkles className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-accent" />
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="ml-2"
                    onClick={() => setIsSearchOpen(false)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsSearchOpen(true)}
                >
                  <Search className="h-5 w-5" />
                  <span className="sr-only">Search</span>
                </Button>
              )}
            </div>

            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Button>

            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-accent text-[10px] font-medium text-accent-foreground flex items-center justify-center">
                3
              </span>
              <span className="sr-only">Cart</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
