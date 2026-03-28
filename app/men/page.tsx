import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CategoryPage } from "@/components/category-page"
import type { Product } from "@/components/product-card"

const menProducts: Product[] = [
  {
    id: "m1",
    name: "Tailored Wool Blazer",
    price: 289,
    image: "/images/products/men/blazer.jpg",
    category: "Outerwear",
    aiRecommended: true,
  },
  {
    id: "m2",
    name: "Premium Cotton Tee",
    price: 49,
    originalPrice: 69,
    image: "/images/products/men/tee.jpg",
    category: "Tops",
    isSale: true,
  },
  {
    id: "m3",
    name: "Linen Shirt",
    price: 95,
    image: "/images/products/men/shirt.jpg",
    category: "Tops",
    isNew: true,
  },
  {
    id: "m4",
    name: "Slim Fit Chinos",
    price: 115,
    image: "/images/products/men/chinos.jpg",
    category: "Bottoms",
  },
  {
    id: "m5",
    name: "Merino Wool Sweater",
    price: 175,
    image: "/images/products/men/sweater.jpg",
    category: "Tops",
    aiRecommended: true,
  },
  {
    id: "m6",
    name: "Leather Belt",
    price: 85,
    image: "/images/products/men/belt.jpg",
    category: "Accessories",
  },
  {
    id: "m7",
    name: "Denim Jacket",
    price: 165,
    originalPrice: 195,
    image: "/images/products/men/denim-jacket.jpg",
    category: "Outerwear",
    isSale: true,
  },
  {
    id: "m8",
    name: "Oxford Dress Shirt",
    price: 89,
    image: "/images/products/men/oxford.jpg",
    category: "Tops",
    isNew: true,
  },
  {
    id: "m9",
    name: "Tailored Trousers",
    price: 135,
    image: "/images/products/men/trousers.jpg",
    category: "Bottoms",
  },
  {
    id: "m10",
    name: "Cashmere Scarf",
    price: 120,
    image: "/images/products/men/scarf.jpg",
    category: "Accessories",
    aiRecommended: true,
  },
  {
    id: "m11",
    name: "Polo Shirt",
    price: 75,
    image: "/images/products/men/polo.jpg",
    category: "Tops",
  },
  {
    id: "m12",
    name: "Quilted Vest",
    price: 145,
    image: "/images/products/men/vest.jpg",
    category: "Outerwear",
    isNew: true,
  },
]

export default function MenPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <CategoryPage
        title="Men"
        description="Sophisticated essentials crafted for the modern man. Discover tailored pieces that blend timeless style with contemporary comfort."
        products={menProducts}
      />
      <Footer />
    </main>
  )
}
