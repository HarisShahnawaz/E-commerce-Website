"use client"

import Link from "next/link"
import { useState, useRef, useEffect } from "react"
import { Search, ShoppingBag, User, Menu, X, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"

const navigation = [
  { name: "Men", href: "/men" },
  { name: "Women", href: "/women" },
  { name: "Children", href: "/children" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isAccountOpen, setIsAccountOpen] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)
  const accountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsSearchOpen(false)
      }
      if (accountRef.current && !accountRef.current.contains(e.target as Node)) {
        setIsAccountOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

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
            <SheetContent side="left" className="w-70 sm:w-[320px] p-0">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

              {/* Mobile Menu Header */}
              <div className="bg-gray-900 px-6 py-8">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-serif text-2xl font-bold text-white">HMA-Store</span>
                  <Sparkles className="h-4 w-4 text-yellow-400" />
                </div>
                <p className="text-gray-400 text-xs tracking-widest uppercase">AI-Powered Fashion</p>
              </div>

              {/* Navigation Links */}
              <div className="px-4 py-6">
                <p className="text-xs text-gray-400 uppercase tracking-widest px-3 mb-3">Browse</p>
                <nav className="flex flex-col gap-1">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-between px-3 py-3 rounded-xl text-base font-medium text-gray-800 hover:bg-gray-100 transition-colors group"
                    >
                      <span>{item.name}</span>
                      <span className="text-gray-300 group-hover:text-gray-600 transition-colors">→</span>
                    </Link>
                  ))}
                </nav>

                <div className="border-t border-gray-100 my-4" />

                <p className="text-xs text-gray-400 uppercase tracking-widest px-3 mb-3">Account</p>
                <div className="flex flex-col gap-1">
                  <Link
                    href="/login"
                    className="flex items-center gap-3 px-3 py-3 rounded-xl text-base font-medium text-gray-800 hover:bg-gray-100 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-gray-200 transition">
                      <User className="h-4 w-4 text-gray-600" />
                    </div>
                    Login
                  </Link>
                  <Link
                    href="/signup"
                    className="flex items-center gap-3 px-3 py-3 rounded-xl text-base font-medium text-gray-800 hover:bg-gray-100 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-gray-200 transition">
                      <Sparkles className="h-4 w-4 text-gray-600" />
                    </div>
                    Sign Up
                  </Link>
                </div>

                <div className="border-t border-gray-100 my-4" />

                <Link
                  href="/cart"
                  className="flex items-center gap-3 px-3 py-3 rounded-xl bg-gray-900 text-white hover:bg-black transition-colors"
                >
                  <ShoppingBag className="h-4 w-4" />
                  <span className="text-sm font-medium">View Cart</span>
                  <span className="ml-auto bg-white text-gray-900 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">3</span>
                </Link>

              </div>

              <div className="absolute bottom-0 left-0 right-0 px-6 py-4 border-t border-gray-100 bg-gray-50">
                <p className="text-xs text-gray-400 text-center">© 2026 HMA-Store. All rights reserved.</p>
              </div>

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

            {/* Search */}
            <div className="flex items-center" ref={searchRef}>
              {isSearchOpen ? (
                <div className="flex items-center gap-1.5 border border-gray-200 rounded-full px-3 py-1.5 bg-white">
                  <Search className="h-3.5 w-3.5 text-gray-400 shrink-0" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-24 sm:w-32 text-xs text-gray-800 placeholder-gray-400 focus:outline-none bg-transparent"
                    autoFocus
                  />
                  <Sparkles className="h-3.5 w-3.5 text-accent shrink-0" />
                  <button onClick={() => setIsSearchOpen(false)} className="ml-1">
                    <X className="h-3.5 w-3.5 text-gray-400 hover:text-gray-600" />
                  </button>
                </div>
              ) : (
                <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
                  <Search className="h-5 w-5" />
                  <span className="sr-only">Search</span>
                </Button>
              )}
            </div>

            {/* Account Dropdown — click based, works on mobile */}
            <div className="relative" ref={accountRef}>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsAccountOpen(!isAccountOpen)}
              >
                <User className="h-5 w-5" />
                <span className="sr-only">Account</span>
              </Button>

              {isAccountOpen && (
                <div className="absolute right-0 top-full mt-2 w-40 bg-white border border-gray-100 rounded-xl shadow-lg z-50">
                  <div className="py-2">
                    <Link
                      href="/login"
                      onClick={() => setIsAccountOpen(false)}
                      className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      <User className="h-4 w-4 text-gray-400" />
                      Login
                    </Link>
                    <div className="mx-3 border-t border-gray-100" />
                    <Link
                      href="/signup"
                      onClick={() => setIsAccountOpen(false)}
                      className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      <Sparkles className="h-4 w-4 text-gray-400" />
                      Sign Up
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Cart */}
            <Link href="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingBag className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-accent text-[10px] font-medium text-accent-foreground flex items-center justify-center">
                  3
                </span>
                <span className="sr-only">Cart</span>
              </Button>
            </Link>

          </div>
        </div>
      </div>
    </header>
  )
}