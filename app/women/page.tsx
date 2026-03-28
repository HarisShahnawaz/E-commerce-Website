import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CategoryPage } from "@/components/category-page"
import type { Product } from "@/components/product-card"

const womenProducts: Product[] = [
  {
    id: "w1",
    name: "Silk Midi Dress",
    price: 195,
    image: "/images/products/women/dress.jpg",
    category: "Dresses",
    isNew: true,
  },
  {
    id: "w2",
    name: "Cashmere Sweater",
    price: 225,
    image: "/images/products/women/sweater.jpg",
    category: "Tops",
    aiRecommended: true,
  },
  {
    id: "w3",
    name: "Leather Crossbody Bag",
    price: 175,
    originalPrice: 220,
    image: "/images/products/women/bag.jpg",
    category: "Accessories",
    isSale: true,
  },
  {
    id: "w4",
    name: "High-Waist Trousers",
    price: 125,
    image: "/images/products/women/trousers.jpg",
    category: "Bottoms",
  },
  {
    id: "w5",
    name: "Satin Blouse",
    price: 110,
    image: "/images/products/women/blouse.jpg",
    category: "Tops",
    aiRecommended: true,
  },
  {
    id: "w6",
    name: "Wool Blend Coat",
    price: 295,
    image: "/images/products/women/coat.jpg",
    category: "Outerwear",
    isNew: true,
  },
  {
    id: "w7",
    name: "Pleated Midi Skirt",
    price: 95,
    originalPrice: 120,
    image: "/images/products/women/skirt.jpg",
    category: "Bottoms",
    isSale: true,
  },
  {
    id: "w8",
    name: "Statement Earrings",
    price: 65,
    image: "/images/products/women/earrings.jpg",
    category: "Accessories",
  },
  {
    id: "w9",
    name: "Wrap Dress",
    price: 165,
    image: "/images/products/women/wrap-dress.jpg",
    category: "Dresses",
    aiRecommended: true,
  },
  {
    id: "w10",
    name: "Silk Scarf",
    price: 85,
    image: "/images/products/women/scarf.jpg",
    category: "Accessories",
  },
  {
    id: "w11",
    name: "Cropped Cardigan",
    price: 135,
    image: "/images/products/women/cardigan.jpg",
    category: "Tops",
    isNew: true,
  },
  {
    id: "w12",
    name: "Wide Leg Jeans",
    price: 145,
    image: "/images/products/women/jeans.jpg",
    category: "Bottoms",
  },
]

export default function WomenPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <CategoryPage
        title="Women"
        description="Elegant pieces that define your unique style. From timeless classics to contemporary trends, discover fashion that empowers."
        products={womenProducts}
      />
      <Footer />
    </main>
  )
}
