"use client"

import { useParams, notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { ShoppingBag, Heart, ArrowLeft, Sparkles, Star } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/lib/cart-context"
import { getProductById, getRelatedProducts } from "@/lib/products"

const sizes = ["XS", "S", "M", "L", "XL", "XXL"]

export default function ProductPage() {
  const params = useParams()
  const product = getProductById(params.id as string)

  const [selectedSize, setSelectedSize] = useState("")
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [added, setAdded] = useState(false)
  const [sizeError, setSizeError] = useState(false)
  const { addToCart } = useCart()

  if (!product) return notFound()

  const related = getRelatedProducts(product, 4)
  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : null

  const handleAddToCart = () => {
    if (!selectedSize) {
      setSizeError(true)
      setTimeout(() => setSizeError(false), 2000)
      return
    }
    addToCart(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">

        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <Link href={`/${product.category.toLowerCase()}`} className="hover:text-foreground transition-colors capitalize">
              {product.category}
            </Link>
            <span>/</span>
            <span className="text-foreground truncate max-w-50">{product.name}</span>
          </div>
        </div>

        <section className="container mx-auto px-4 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

            <div className="relative">
              <div className="relative aspect-3/4 rounded-2xl overflow-hidden bg-muted">
                <Image src={product.image} alt={product.name} fill className="object-cover" priority />
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.isNew && <Badge className="bg-foreground text-background">New</Badge>}
                  {product.isSale && discount && <Badge className="bg-red-500 text-white">-{discount}%</Badge>}
                  {product.aiRecommended && (
                    <Badge className="bg-card text-foreground border border-border">
                      <Sparkles className="h-3 w-3 mr-1" />AI Pick
                    </Badge>
                  )}
                </div>
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm hover:bg-white transition"
                >
                  <Heart className={`h-5 w-5 ${isWishlisted ? "fill-red-500 text-red-500" : "text-gray-600"}`} />
                </button>
              </div>
              <Link href={`/${product.category.toLowerCase()}`} className="inline-flex items-center gap-2 mt-4 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <ArrowLeft className="h-4 w-4" />Back to {product.category}
              </Link>
            </div>

            <div className="flex flex-col gap-6 lg:pt-4">
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">{product.category}</p>
                <h1 className="font-serif text-3xl sm:text-4xl font-bold text-foreground leading-tight">{product.name}</h1>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1,2,3,4,5].map((s) => (
                    <Star key={s} className={`h-4 w-4 ${s <= 4 ? "fill-amber-400 text-amber-400" : "text-gray-200"}`} />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">4.0 (24 reviews)</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="font-serif text-3xl font-bold text-foreground">Rs {product.price.toLocaleString()}</span>
                {product.originalPrice && (
                  <>
                    <span className="text-lg text-muted-foreground line-through">Rs {product.originalPrice.toLocaleString()}</span>
                    <span className="text-sm font-medium text-red-500">Save Rs {(product.originalPrice - product.price).toLocaleString()}</span>
                  </>
                )}
              </div>

              <div className="border-t border-border" />

              <div>
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm font-semibold text-foreground">Select Size</p>
                  <Link href="/size-guide" className="text-xs text-muted-foreground underline hover:text-foreground">Size Guide</Link>
                </div>
                <div className="flex flex-wrap gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => { setSelectedSize(size); setSizeError(false) }}
                      className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all ${
                        selectedSize === size
                          ? "bg-foreground text-background border-foreground"
                          : "border-border text-foreground hover:border-foreground"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                {sizeError && <p className="text-red-500 text-xs mt-2">Please select a size before adding to cart</p>}
              </div>

              <div className="flex gap-3">
                <Button className="flex-1 h-12 rounded-xl text-sm font-medium" onClick={handleAddToCart}>
                  <ShoppingBag className="h-4 w-4 mr-2" />
                  {added ? "✓ Added to Cart!" : "Add to Cart"}
                </Button>
                <Link href="/checkout" className="flex-1">
                  <Button variant="outline" className="w-full h-12 rounded-xl text-sm font-medium border-foreground">
                    Buy Now
                  </Button>
                </Link>
              </div>

              {product.aiRecommended && (
                <div className="flex items-start gap-3 p-4 rounded-xl bg-secondary border border-border">
                  <Sparkles className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">AI Recommended</p>
                    <p className="text-xs text-muted-foreground mt-0.5">Our AI stylist picked this based on trending styles and top customer ratings.</p>
                  </div>
                </div>
              )}

              <div className="border-t border-border pt-4">
                <h3 className="text-sm font-semibold text-foreground mb-3">Product Details</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Premium quality fabric</li>
                  <li>• Machine washable</li>
                  <li>• True to size fit</li>
                  <li>• Free delivery on orders over Rs 30,000</li>
                  <li>• Easy 7-day returns</li>
                </ul>
              </div>

              <div className="grid grid-cols-3 gap-3 border-t border-border pt-4">
                {[
                  { icon: "🚚", label: "Free Delivery", sub: "Orders over Rs 30k" },
                  { icon: "↩️", label: "Easy Returns", sub: "Within 7 days" },
                  { icon: "✓", label: "Authentic", sub: "100% guaranteed" },
                ].map(({ icon, label, sub }) => (
                  <div key={label} className="text-center p-3 rounded-xl bg-secondary">
                    <div className="text-xl mb-1">{icon}</div>
                    <p className="text-xs font-semibold text-foreground">{label}</p>
                    <p className="text-xs text-muted-foreground">{sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {related.length > 0 && (
          <section className="bg-card border-t border-border py-16">
            <div className="container mx-auto px-4">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-8">You May Also Like</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {related.map((p) => <ProductCard key={p.id} product={p} />)}
              </div>
            </div>
          </section>
        )}

      </main>
      <Footer />
    </>
  )
}