"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CategoryPage } from "@/components/category-page"
import type { Product } from "@/components/product-card"

const childrenProducts: Product[] = [
  { id: "c1", name: "Kids Denim Jacket", price: 99, image: "/images/products/kids/jacket.jpg", category: "Outerwear", isNew: true },
  { id: "c2", name: "Organic Cotton Set", price: 65, image: "/images/products/kids/set.jpg", category: "Sets", aiRecommended: true },
  { id: "c3", name: "Printed T-Shirt", price: 35, originalPrice: 45, image: "/images/products/kids/tshirt.jpg", category: "Tops", isSale: true },
  { id: "c4", name: "Cozy Hoodie", price: 55, image: "/images/products/kids/hoodie.jpg", category: "Tops" },
  { id: "c5", name: "Soft Leggings", price: 32, image: "/images/products/kids/leggings.jpg", category: "Bottoms", aiRecommended: true },
  { id: "c6", name: "Puffer Jacket", price: 95, image: "/images/products/kids/puffer.jpg", category: "Outerwear", isNew: true },
  { id: "c7", name: "Stripe Dress", price: 55, originalPrice: 70, image: "/images/products/kids/dress.jpg", category: "Dresses", isSale: true },
  { id: "c8", name: "Canvas Sneakers", price: 45, image: "/images/products/kids/sneakers.jpg", category: "Accessories" },
  { id: "c9", name: "Knit Cardigan", price: 65, image: "/images/products/kids/cardigan.jpg", category: "Tops", aiRecommended: true },
  { id: "c10", name: "Jogger Pants", price: 42, image: "/images/products/kids/joggers.jpg", category: "Bottoms" },
  { id: "c11", name: "Raincoat", price: 75, image: "/images/products/kids/raincoat.jpg", category: "Outerwear", isNew: true },
  { id: "c12", name: "Beanie Hat", price: 25, image: "/images/products/kids/beanie.jpg", category: "Accessories" },
  { id: "c13", name: "Brown Jacket", price: 100, image: "/images/products/kids/brown-jacket.jpg", category: "Outerwear", isNew: true },
  { id: "c14", name: "Dress", price: 55, image: "/images/products/kids/kid-frauk.jpg", category: "Tops", aiRecommended: true },
  { id: "c15", name: "Kids Hoodie", price: 60, originalPrice: 75, image: "/images/products/kids/kid-hoodie.jpg", category: "Tops", isSale: true },
  { id: "c16", name: "Casual Shoes", price: 50, image: "/images/products/kids/kid-shoes.jpg", category: "Accessories", isNew: true },
  { id: "c17", name: "Brown Trouser", price: 45, image: "/images/products/kids/kid-trouser.jpg", category: "Bottoms" },
  { id: "c18", name: "Trouser-Shirt Set ", price: 70, image: "/images/products/kids/kidset-2.jpg", category: "Sets", aiRecommended: true },
  { id: "c19", name: "Brown Shirt", price: 38, originalPrice: 48, image: "/images/products/kids/kidshirt.jpg", category: "Tops", isSale: true },
  { id: "c20", name: "Trouser Set", price: 75, image: "/images/products/kids/tshirt.jpg", category: "Sets", isNew: true },
  { id: "c21", name: "Kids Winter Jacket", price: 110, image: "/images/products/kids/brown-jacket.jpg", category: "Outerwear", aiRecommended: true },
{ id: "c22", name: "Kids Casual Set", price: 65, originalPrice: 80, image: "/images/products/kids/kidset-2.jpg", category: "Sets", isSale: true },
{ id: "c23", name: "Kids Sport Shoes", price: 55, image: "/images/products/kids/kid-shoes.jpg", category: "Accessories", isNew: true },
{ id: "c24", name: "Kids Warm Hoodie", price: 65, image: "/images/products/kids/kid-hoodie.jpg", category: "Tops" },
]

export default function ChildrenPage() {
  const [visible, setVisible] = useState(20)

  return (
    <main className="min-h-screen">
      <Header />
      <CategoryPage
        title="Children"
        description="Playful fashion for little ones that combines comfort with style. Durable, soft, and designed for endless adventures."
        products={childrenProducts.slice(0, visible)}
        hasMore={visible < childrenProducts.length}
        onLoadMore={() => setVisible(visible + 4)}
      />
      <Footer />
    </main>
  )
}