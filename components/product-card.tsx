"use client"

import Image from "next/image"
import Link from "next/link"
import { Heart, ShoppingBag, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

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

  return (
    <div className="group relative">
      {/* Image Container */}
      <div className="relative aspect-3/4 overflow-hidden rounded-lg bg-muted mb-4">
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

        {/* Quick Actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button
            variant="secondary"
            size="icon"
            className="h-9 w-9 rounded-full bg-card/90 backdrop-blur-sm hover:bg-card"
            onClick={() => setIsWishlisted(!isWishlisted)}
          >
            <Heart className={`h-4 w-4 ${isWishlisted ? "fill-accent text-accent" : ""}`} />
            <span className="sr-only">Add to wishlist</span>
          </Button>
        </div>

        {/* Add to Cart */}
        <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button className="w-full rounded-full" size="sm">
            <ShoppingBag className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div>
        <Link href={`/product/${product.id}`}>
          <h3 className="font-medium text-foreground hover:text-muted-foreground transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-muted-foreground mt-1">{product.category}</p>
        <div className="flex items-center gap-2 mt-2">
          <span className="font-semibold text-foreground">
            ${product.price.toFixed(2)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
