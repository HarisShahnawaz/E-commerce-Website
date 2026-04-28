"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CategoryPage } from "@/components/category-page"
import { getNewArrivals } from "@/lib/products"

export default function NewArrivalsPage() {
  const newProducts = getNewArrivals()
  const [visible, setVisible] = useState(12)

  return (
    <main className="min-h-screen">
      <Header />
      <CategoryPage
        title="New Arrivals"
        description="Fresh styles just landed. Be the first to wear the latest additions to our AI-curated collection."
        products={newProducts.slice(0, visible)}
        hasMore={visible < newProducts.length}
        onLoadMore={() => setVisible(visible + 4)}
      />
      <Footer />
    </main>
  )
}