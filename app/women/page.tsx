"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CategoryPage } from "@/components/category-page"
import type { Product } from "@/components/product-card"

const womenProducts: Product[] = [
  { id: "w1", name: "Silk Midi Dress", price: 195, image: "/images/products/women/dress.jpg", category: "Dresses", isNew: true },
  { id: "w2", name: "Cashmere Sweater", price: 225, image: "/images/products/women/sweater.jpg", category: "Tops", aiRecommended: true },
  { id: "w3", name: "Leather Crossbody Bag", price: 175, originalPrice: 220, image: "/images/products/women/bag.jpg", category: "Accessories", isSale: true },
  { id: "w4", name: "High-Waist Trousers", price: 125, image: "/images/products/women/trousers.jpg", category: "Bottoms" },
  { id: "w5", name: "Satin Blouse", price: 110, image: "/images/products/women/blouse.jpg", category: "Tops", aiRecommended: true },
  { id: "w6", name: "Wool Blend Coat", price: 295, image: "/images/products/women/coat.jpg", category: "Outerwear", isNew: true },
  { id: "w7", name: "Pleated Midi Skirt", price: 95, originalPrice: 120, image: "/images/products/women/skirt.jpg", category: "Bottoms", isSale: true },
  { id: "w8", name: "Statement Earrings", price: 65, image: "/images/products/women/earrings.jpg", category: "Accessories" },
  { id: "w9", name: "Wrap Dress", price: 165, image: "/images/products/women/wrap-dress.jpg", category: "Dresses", aiRecommended: true },
  { id: "w10", name: "Silk Scarf", price: 85, image: "/images/products/women/scarf.jpg", category: "Accessories" },
  { id: "w11", name: "Cropped Cardigan", price: 135, image: "/images/products/women/cardigan.jpg", category: "Tops", isNew: true },
  { id: "w12", name: "Wide Leg Jeans", price: 145, image: "/images/products/women/jeans.jpg", category: "Bottoms" },
  { id: "w13", name: "Ear Ring", price: 55, image: "/images/products/women/ear-ring.jpg", category: "Accessories", isNew: true },
  { id: "w14", name: "Silk Shawl", price: 95, image: "/images/products/women/shawl.jpg", category: "Accessories", aiRecommended: true },
  { id: "w15", name: "Silky Top", price: 115, originalPrice: 145, image: "/images/products/women/silky3.jpg", category: "Tops", isSale: true },
  { id: "w16", name: "Women Bag", price: 185, image: "/images/products/women/womenbag.jpg", category: "Accessories", isNew: true },
  { id: "w17", name: "Black Women Coat ", price: 315, image: "/images/products/women/womencoat2.jpg", category: "Outerwear", aiRecommended: true },
  { id: "w18", name: "Blue Women Dress ", price: 175, originalPrice: 210, image: "/images/products/women/womendress4.jpg", category: "Dresses", isSale: true },
  { id: "w19", name: "Red Silky Dress ", price: 205, image: "/images/products/women/womensilkydress2.jpg", category: "Dresses", isNew: true },
  { id: "w20", name: "Classic Dress ", price: 155, image: "/images/products/women/wrap-dress.jpg", category: "Dresses", aiRecommended: true },
  { id: "w21", name: "Evening Dress", price: 225, image: "/images/products/women/womendress4.jpg", category: "Dresses", aiRecommended: true },
{ id: "w22", name: "Boho Skirt", price: 105, originalPrice: 130, image: "/images/products/women/skirt.jpg", category: "Bottoms", isSale: true },
{ id: "w23", name: "Silk Kimono", price: 155, image: "/images/products/women/womensilkydress2.jpg", category: "Outerwear", isNew: true },
{ id: "w24", name: "Classic Cardigan", price: 145, image: "/images/products/women/cardigan.jpg", category: "Tops" },
]

export default function WomenPage() {
  const [visible, setVisible] = useState(20)

  return (
    <main className="min-h-screen">
      <Header />
      <CategoryPage
        title="Women"
        description="Elegant pieces that define your unique style. From timeless classics to contemporary trends, discover fashion that empowers."
        products={womenProducts.slice(0, visible)}
        hasMore={visible < womenProducts.length}
        onLoadMore={() => setVisible(visible + 4)}
      />
      <Footer />
    </main>
  )
}