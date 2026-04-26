"use client"

import Image from "next/image"
import Link from "next/link"
import { Heart, ShoppingBag, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import { useCart } from "@/lib/cart-context"

export interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  image: string
  category: string
  isNew?: boolean
  isSale?: boolean
  aiRecommended?: boolean
}

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [added, setAdded] = useState(false)
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <div className="group relative">

      {/* Image Container */}
      <div className="relative aspect-3/4 overflow-hidden rounded-lg bg-muted mb-3">
        <Link href={`/product/${product.id}`}>
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </Link>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <Badge className="bg-foreground text-background">New</Badge>
          )}
          {product.isSale && (
            <Badge className="bg-accent text-accent-foreground">Sale</Badge>
          )}
          {product.aiRecommended && (
            <Badge className="bg-card text-foreground border border-border">
              <Sparkles className="h-3 w-3 mr-1" />
              AI Pick
            </Badge>
          )}
        </div>

        {/* Wishlist — hover only */}
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button
            variant="secondary"
            size="icon"
            className="h-8 w-8 rounded-full bg-card/90 backdrop-blur-sm hover:bg-card"
            onClick={() => setIsWishlisted(!isWishlisted)}
          >
            <Heart className={`h-3.5 w-3.5 ${isWishlisted ? "fill-accent text-accent" : ""}`} />
            <span className="sr-only">Add to wishlist</span>
          </Button>
        </div>

        {/* Add to Cart — desktop hover only */}
        <div className="absolute bottom-2 left-2 right-2 hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity">
          <Button
            className="w-full rounded-full text-xs h-8"
            size="sm"
            onClick={handleAddToCart}
          >
            <ShoppingBag className="h-3 w-3 mr-1" />
            {added ? "✓ Added" : "Add to Cart"}
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div>

        {/* Add to Cart — mobile only, above product name */}
        <button
          onClick={handleAddToCart}
        className="sm:hidden mb-2 w-full flex items-center justify-center gap-1.5 border border-gray-300 rounded-lg py-1.5 text-xs font-medium text-gray-700 active:bg-gray-900 active:text-white active:border-gray-900 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition"
        >
          <ShoppingBag className="h-3 w-3" />
          {added ? "✓ Added" : "Add to Cart"}
        </button>

        <Link href={`/product/${product.id}`}>
          <h3 className="font-medium text-foreground hover:text-muted-foreground transition-colors text-sm sm:text-base">
            {product.name}
          </h3>
        </Link>
        <p className="text-xs sm:text-sm text-muted-foreground mt-1">{product.category}</p>
        <div className="flex items-center gap-2 mt-1.5">
          <span className="font-semibold text-foreground text-sm sm:text-base">
            Rs {product.price.toLocaleString()}
          </span>
          {product.originalPrice && (
            <span className="text-xs sm:text-sm text-muted-foreground line-through">
              Rs {product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>
      </div>

    </div>
  )
}