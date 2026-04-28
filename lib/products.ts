import type { Product } from "@/components/product-card"

// ─── ALL PRODUCTS ──────────────────────────────────────────────
// These IDs match exactly what your Men/Women/Children/Featured pages use.
// Product detail page uses these same IDs via /product/[id]

export const allProducts: Product[] = [

  // ── FEATURED (from featured-products.tsx) ──
  { id: "1",  name: "Tailored Wool Blazer",  price: 5500, image: "/images/products/blazer.jpg",                    category: "Men",      aiRecommended: true },
  { id: "2",  name: "Silk Midi Dress",        price: 3500, image: "/images/products/dress.jpg",                     category: "Women",    isNew: true },
  { id: "3",  name: "Premium Cotton Tee",     price: 4900, originalPrice: 6900, image: "/images/products/tee.jpg",  category: "Men",      isSale: true },
  { id: "4",  name: "Cashmere Sweater",       price: 4500, image: "/images/products/sweater.jpg",                   category: "Women",    aiRecommended: true },
  { id: "5",  name: "Kids Denim Jacket",      price: 3500, image: "/images/products/kids-jacket.jpg",               category: "Children", isNew: true },
  { id: "6",  name: "Leather Bag",            price: 1500, originalPrice: 2500, image: "/images/products/bag.jpg",  category: "Women",    isSale: true },
  { id: "7",  name: "Linen Shirt",            price: 3500, image: "/images/products/shirt.jpg",                     category: "Men" },
  { id: "8",  name: "Kids Cotton Set",        price: 6500, image: "/images/products/kids-set.jpg",                  category: "Children", aiRecommended: true },
  { id: "9",  name: "Black Hoodie",           price: 4000, image: "/images/products/men/black-hoodie.jpg",          category: "Men",      isNew: true },
  { id: "10", name: "Silky Dress",            price: 3500, image: "/images/products/women/womensilkydress2.jpg",    category: "Women",    aiRecommended: true },
  { id: "11", name: "Kids Brown Jacket",      price: 3000, image: "/images/products/kids/brown-jacket.jpg",         category: "Children", isNew: true },
  { id: "12", name: "Trouser Shirt Set",      price: 6500, image: "/images/products/men/trouser-shirtset.jpg",      category: "Men",      aiRecommended: true },
  { id: "13", name: "Women Coat",             price: 3150, originalPrice: 3700, image: "/images/products/women/womencoat2.jpg", category: "Women", isSale: true },
  { id: "14", name: "Kids Hoodie",            price: 6500, image: "/images/products/kids/kid-hoodie.jpg",           category: "Children", aiRecommended: true },
  { id: "15", name: "Classic Polo",           price: 3500, originalPrice: 4000, image: "/images/products/men/poloshirt.jpg",    category: "Men",  isSale: true },
  { id: "16", name: "Women Dress",            price: 4400, image: "/images/products/women/womendress4.jpg",         category: "Women",    isNew: true },

  // ── MEN (from men/page.tsx) ──
  { id: "m1",  name: "Tailored Wool Blazer",  price: 5500, image: "/images/products/men/blazer.jpg",          category: "Outerwear",   aiRecommended: true },
  { id: "m2",  name: "Premium Cotton Tee",    price: 4900, originalPrice: 6900, image: "/images/products/men/tee.jpg", category: "Tops", isSale: true },
  { id: "m3",  name: "Linen Shirt",           price: 3500, image: "/images/products/men/shirt.jpg",            category: "Tops",        isNew: true },
  { id: "m4",  name: "Slim Fit Chinos",       price: 1000, image: "/images/products/men/chinos.jpg",           category: "Bottoms" },
  { id: "m5",  name: "Merino Wool Sweater",   price: 1750, image: "/images/products/men/sweater.jpg",          category: "Tops",        aiRecommended: true },
  { id: "m6",  name: "Leather Belt",          price: 1500, image: "/images/products/men/belt.jpg",             category: "Accessories" },
  { id: "m7",  name: "Denim Jacket",          price: 6500, originalPrice: 8000, image: "/images/products/men/denim-jacket.jpg", category: "Outerwear", isSale: true },
  { id: "m8",  name: "Oxford Dress Shirt",    price: 4500, image: "/images/products/men/oxford.jpg",           category: "Tops",        isNew: true },
  { id: "m9",  name: "Tailored Trousers",     price: 3500, image: "/images/products/men/trousers.jpg",         category: "Bottoms" },
  { id: "m10", name: "Cashmere Scarf",        price: 1200, image: "/images/products/men/scarf.jpg",            category: "Accessories", aiRecommended: true },
  { id: "m11", name: "Polo Shirt",            price: 4500, image: "/images/products/men/polo.jpg",             category: "Tops" },
  { id: "m12", name: "Quilted Vest",          price: 3000, image: "/images/products/men/vest.jpg",             category: "Outerwear",   isNew: true },
  { id: "m13", name: "Black Hoodie",          price: 4000, image: "/images/products/men/black-hoodie.jpg",     category: "Tops",        isNew: true },
  { id: "m14", name: "Black Jacket",          price: 4500, image: "/images/products/men/black-jacket.jpg",     category: "Outerwear",   isNew: true },
  { id: "m15", name: "Classic Hoodie",        price: 2500, image: "/images/products/men/hoodie.jpg",           category: "Tops" },
  { id: "m16", name: "Blue Polo Shirt",       price: 3000, image: "/images/products/men/polo2.jpg",            category: "Tops",        aiRecommended: true },
  { id: "m17", name: "Classic Polo",          price: 3500, originalPrice: 4000, image: "/images/products/men/poloshirt.jpg", category: "Tops", isSale: true },
  { id: "m18", name: "Trouser Shirt Set",     price: 6500, image: "/images/products/men/trouser-shirtset.jpg", category: "Tops",        isNew: true },
  { id: "m19", name: "Yellow-Blue Set",       price: 5000, image: "/images/products/men/trousershirt-2.jpg",   category: "Tops" },
  { id: "m20", name: "Orange-Cream Set",      price: 6000, originalPrice: 9000, image: "/images/products/men/trousershirt3.jpg", category: "Tops", isSale: true },
  { id: "m21", name: "Hoodie Jacket",         price: 3000, image: "/images/products/men/black-jacket.jpg",     category: "Outerwear",   aiRecommended: true },
  { id: "m22", name: "Casual Polo",           price: 3000, originalPrice: 4000, image: "/images/products/men/polo2.jpg", category: "Tops", isSale: true },
  { id: "m23", name: "Smart Chinos",          price: 1250, image: "/images/products/men/chinos.jpg",           category: "Bottoms",     isNew: true },
  { id: "m24", name: "Winter Scarf",          price: 5500, image: "/images/products/men/scarf.jpg",            category: "Accessories" },
]

// ── HELPERS ──────────────────────────────────────────────────────

export function getProductById(id: string): Product | null {
  return allProducts.find((p) => p.id === id) ?? null
}

export function getNewArrivals(): Product[] {
  return allProducts.filter((p) => p.isNew)
}

export function getSaleProducts(): Product[] {
  return allProducts.filter((p) => p.isSale || p.originalPrice)
}

export function getRelatedProducts(current: Product, count = 4): Product[] {
  return allProducts
    .filter((p) => p.id !== current.id && p.category === current.category)
    .slice(0, count)
}