"use client"

import { useState } from "react"
import { ProductCard, type Product } from "./product-card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Filter, Grid3X3, LayoutGrid, Sparkles } from "lucide-react"

interface CategoryPageProps {
  title: string
  description: string
  products: Product[]
}

const categories = ["All", "Tops", "Bottoms", "Dresses", "Outerwear", "Accessories"]
const sizes = ["XS", "S", "M", "L", "XL", "XXL"]

export function CategoryPage({ title, description, products }: CategoryPageProps) {
  const [priceRange, setPriceRange] = useState([0, 500])
  const [gridCols, setGridCols] = useState<3 | 4>(4)

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Categories */}
      <div>
        <h3 className="font-semibold text-foreground mb-4">Category</h3>
        <div className="space-y-3">
          {categories.map((category) => (
            <label key={category} className="flex items-center gap-3 cursor-pointer">
              <Checkbox />
              <span className="text-sm text-muted-foreground">{category}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="font-semibold text-foreground mb-4">Price Range</h3>
        <Slider
          value={priceRange}
          onValueChange={setPriceRange}
          max={500}
          step={10}
          className="mb-4"
        />
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>

      {/* Sizes */}
      <div>
        <h3 className="font-semibold text-foreground mb-4">Size</h3>
        <div className="flex flex-wrap gap-2">
          {sizes.map((size) => (
            <Button
              key={size}
              variant="outline"
              size="sm"
              className="h-9 px-4 rounded-full"
            >
              {size}
            </Button>
          ))}
        </div>
      </div>

      {/* AI Filter */}
      <div className="p-4 rounded-xl bg-secondary border border-border">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="h-4 w-4 text-accent" />
          <span className="font-semibold text-foreground text-sm">AI Picks</span>
        </div>
        <p className="text-xs text-muted-foreground mb-3">
          Show only items recommended for your style
        </p>
        <label className="flex items-center gap-3 cursor-pointer">
          <Checkbox />
          <span className="text-sm text-foreground">Show AI recommendations</span>
        </label>
      </div>
    </div>
  )

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
          {title}
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          {description}
        </p>
      </div>

      <div className="flex gap-8">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:block w-64 shrink-0">
          <div className="sticky top-24">
            <h2 className="font-semibold text-lg text-foreground mb-6">Filters</h2>
            <FilterContent />
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1">
          {/* Toolbar */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
            <div className="flex items-center gap-4">
              {/* Mobile Filter Button */}
              <Sheet>
                <SheetTrigger asChild className="lg:hidden">
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Filters
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] overflow-y-auto">
                  <h2 className="font-semibold text-lg text-foreground mb-6">Filters</h2>
                  <FilterContent />
                </SheetContent>
              </Sheet>

              <span className="text-sm text-muted-foreground">
                {products.length} products
              </span>
            </div>

            <div className="flex items-center gap-4">
              {/* Sort */}
              <Select defaultValue="featured">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>

              {/* Grid Toggle */}
              <div className="hidden md:flex items-center gap-1 border border-border rounded-lg p-1">
                <Button
                  variant={gridCols === 3 ? "secondary" : "ghost"}
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => setGridCols(3)}
                >
                  <Grid3X3 className="h-4 w-4" />
                </Button>
                <Button
                  variant={gridCols === 4 ? "secondary" : "ghost"}
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => setGridCols(4)}
                >
                  <LayoutGrid className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className={`grid grid-cols-2 ${gridCols === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-4'} gap-6`}>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Load More */}
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" className="rounded-full px-12">
              Load More
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
