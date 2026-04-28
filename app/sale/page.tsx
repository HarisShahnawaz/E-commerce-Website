"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CategoryPage } from "@/components/category-page"
import { getSaleProducts } from "@/lib/products"

export default function SalePage() {
  const saleProducts = getSaleProducts()
  const [visible, setVisible] = useState(12)

  return (
    <main className="min-h-screen">
      <Header />
      <CategoryPage
        title="Sale"
        description="Up to 40% off on selected styles. Premium fashion at prices you'll love — limited time only."
        products={saleProducts.slice(0, visible)}
        hasMore={visible < saleProducts.length}
        onLoadMore={() => setVisible(visible + 4)}
      />
      <Footer />
    </main>
  )
}