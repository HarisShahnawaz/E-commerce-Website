"use client"

import { useState, useMemo } from "react"
import { ProductCard, type Product } from "./product-card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Filter, Grid3X3, LayoutGrid, Sparkles } from "lucide-react"

interface CategoryPageProps {
  title: string
  description: string
  products: Product[]
  hasMore?: boolean
  onLoadMore?: () => void
}

const categoryFilters = ["All", "Tops", "Bottoms", "Dresses", "Outerwear", "Accessories", "Sets"]
const sizes = ["XS", "S", "M", "L", "XL", "XXL"]

export function CategoryPage({ title, description, products, hasMore, onLoadMore }: CategoryPageProps) {
  const [priceRange, setPriceRange] = useState([0, 500])
  const [gridCols, setGridCols] = useState<3 | 4>(4)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedSizes, setSelectedSizes] = useState<string[]>([])
  const [aiOnly, setAiOnly] = useState(false)
  const [sortBy, setSortBy] = useState("featured")

  const toggleSize = (size: string) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    )
  }

  const filteredProducts = useMemo(() => {
    let result = [...products]

    // Category filter
    if (selectedCategory !== "All") {
      result = result.filter((p) => p.category === selectedCategory)
    }

    // Price filter
    result = result.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    )

    // AI filter
    if (aiOnly) {
      result = result.filter((p) => p.aiRecommended)
    }

    // Sort
    if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price)
    } else if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price)
    } else if (sortBy === "newest") {
      result = result.filter((p) => p.isNew).concat(result.filter((p) => !p.isNew))
    }

    return result
  }, [products, selectedCategory, priceRange, aiOnly, sortBy])

  const FilterContent = () => (
    <div className="space-y-8">

      {/* Category */}
      <div>
        <h3 className="font-semibold text-foreground mb-4">Category</h3>
        <div className="space-y-3">
          {categoryFilters.map((category) => (
            <label
              key={category}
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => setSelectedCategory(category)}
            >
              <Checkbox checked={selectedCategory === category} />
              <span className={`text-sm ${selectedCategory === category ? "text-foreground font-medium" : "text-muted-foreground"}`}>
                {category}
              </span>
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
          <span>Rs {priceRange[0]}</span>
          <span>Rs {priceRange[1]}</span>
        </div>
      </div>

      {/* Size */}
      <div>
        <h3 className="font-semibold text-foreground mb-4">Size</h3>
        <div className="flex flex-wrap gap-2">
          {sizes.map((size) => (
            <Button
              key={size}
              variant={selectedSizes.includes(size) ? "default" : "outline"}
              size="sm"
              className="h-9 px-4 rounded-full"
              onClick={() => toggleSize(size)}
            >
              {size}
            </Button>
          ))}
        </div>
      </div>

      {/* AI Picks */}
      <div className="p-4 rounded-xl bg-secondary border border-border">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="h-4 w-4 text-accent" />
          <span className="font-semibold text-foreground text-sm">AI Picks</span>
        </div>
        <p className="text-xs text-muted-foreground mb-3">
          Show only items recommended for your style
        </p>
        <label className="flex items-center gap-3 cursor-pointer" onClick={() => setAiOnly(!aiOnly)}>
          <Checkbox checked={aiOnly} />
          <span className="text-sm text-foreground">Show AI recommendations</span>
        </label>
      </div>

      {/* Reset Filters */}
      <Button
        variant="outline"
        className="w-full"
        onClick={() => {
          setSelectedCategory("All")
          setPriceRange([0, 500])
          setSelectedSizes([])
          setAiOnly(false)
        }}
      >
        Reset Filters
      </Button>

    </div>
  )

  return (
    <div className="container mx-auto px-4 py-8">
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

        <div className="flex-1">
          {/* Toolbar */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
            <div className="flex items-center gap-4">

              {/* Mobile Filter */}
              <Sheet>
                <SheetTrigger asChild className="lg:hidden">
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Filters
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-75 overflow-y-auto">
                  <SheetTitle className="sr-only">Filters</SheetTitle>
                  <h2 className="font-semibold text-lg text-foreground mb-6">Filters</h2>
                  <FilterContent />
                </SheetContent>
              </Sheet>

              <span className="hidden sm:inline text-sm text-muted-foreground">
                {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"}
              </span>
            </div>

            <div className="flex items-center gap-4">
              {/* Sort */}
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-45">
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

          {/* No results */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg mb-4">No products found</p>
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedCategory("All")
                  setPriceRange([0, 500])
                  setSelectedSizes([])
                  setAiOnly(false)
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}

          {/* Products Grid */}
          <div className={`grid grid-cols-2 ${gridCols === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-4'} gap-6`}>
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Load More */}
          {hasMore && filteredProducts.length > 0 && (
            <div className="mt-12 text-center">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-12"
                onClick={onLoadMore}
              >
                Load More
              </Button>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}