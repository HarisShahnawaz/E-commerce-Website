import { ProductCard, type Product } from "./product-card"
import { Sparkles } from "lucide-react"

const featuredProducts: Product[] = [
  {
    id: "1",
    name: "Tailored Wool Blazer",
    price: 300,
    image: "/images/products/blazer.jpg",
    category: "Men",
    aiRecommended: true,
  },
  {
    id: "2",
    name: "Silk Midi Dress",
    price: 195,
    image: "/images/products/dress.jpg",
    category: "Women",
    isNew: true,
  },
  {
    id: "3",
    name: "Premium Cotton Tee",
    price: 49,
    originalPrice: 69,
    image: "/images/products/tee.jpg",
    category: "Men",
    isSale: true,
  },
  {
    id: "4",
    name: "Cashmere Sweater",
    price: 225,
    image: "/images/products/sweater.jpg",
    category: "Women",
    aiRecommended: true,
  },
  {
    id: "5",
    name: "Kids Denim Jacket",
    price: 85,
    image: "/images/products/kids-jacket.jpg",
    category: "Children",
    isNew: true,
  },
  {
    id: "6",
    name: "Leather Crossbody Bag",
    price: 175,
    originalPrice: 220,
    image: "/images/products/bag.jpg",
    category: "Women",
    isSale: true,
  },
  {
    id: "7",
    name: "Linen Shirt",
    price: 95,
    image: "/images/products/shirt.jpg",
    category: "Men",
  },
  {
    id: "8",
    name: "Kids Organic Cotton Set",
    price: 65,
    image: "/images/products/kids-set.jpg",
    category: "Children",
    aiRecommended: true,
  },
  {
  id: "9",
  name: "Black Hoodie",
  price: 110,
  image: "/images/products/men/black-hoodie.jpg",
  category: "Men",
  isNew: true,
},
{
  id: "10",
  name: "Silky Dress",
  price: 205,
  image: "/images/products/women/womensilkydress2.jpg",
  category: "Women",
  aiRecommended: true,
},
{
  id: "11",
  name: "Kids Brown Jacket",
  price: 105,
  image: "/images/products/kids/brown-jacket.jpg",
  category: "Children",
  isNew: true,
},
{
  id: "12",
  name: "Trouser Shirt Set",
  price: 175,
  image: "/images/products/men/trouser-shirtset.jpg",
  category: "Men",
  aiRecommended: true,
},
{
  id: "13",
  name: "Women Coat",
  price: 315,
  originalPrice: 370,
  image: "/images/products/women/womencoat2.jpg",
  category: "Women",
  isSale: true,
},
{
  id: "14",
  name: "Kids Hoodie",
  price: 60,
  image: "/images/products/kids/kid-hoodie.jpg",
  category: "Children",
  aiRecommended: true,
},
{
  id: "15",
  name: "Classic Polo",
  price: 85,
  originalPrice: 105,
  image: "/images/products/men/poloshirt.jpg",
  category: "Men",
  isSale: true,
},
{
  id: "16",
  name: "Women Dress",
  price: 175,
  image: "/images/products/women/womendress4.jpg",
  category: "Women",
  isNew: true,
},
]

export function FeaturedProducts() {
  return (
    <section className="py-20 px-4 bg-card">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium text-accent uppercase tracking-wider">
                AI Curated
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
              Featured Collection
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-muted-foreground max-w-md">
            Handpicked by our AI stylist based on trending styles and customer favorites
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
