import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

const categories = [
  {
    name: "Men",
    description: "Sophisticated essentials for the modern man",
    href: "/men",
    image: "/images/men-category.jpg",
    products: "2,450+ Products"
  },
  {
    name: "Women",
    description: "Elegant pieces that define your style",
    href: "/women",
    image: "/images/women-category.jpg",
    products: "3,200+ Products"
  },
  {
    name: "Children",
    description: "Playful fashion for little ones",
    href: "/children",
    image: "/images/children-category.jpg",
    products: "1,800+ Products"
  },
]

export function Categories() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Shop by Category
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our curated collections designed for every member of your family
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-muted"
            >
              {/* Image */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent z-10" />
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Content */}
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">
                <span className="text-xs uppercase tracking-widest text-card/70 mb-2">
                  {category.products}
                </span>
                <h3 className="font-serif text-3xl font-bold text-card mb-2">
                  {category.name}
                </h3>
                <p className="text-card/80 text-sm mb-4">
                  {category.description}
                </p>
                <div className="flex items-center gap-2 text-card text-sm font-medium group-hover:gap-4 transition-all">
                  <span>Shop Collection</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
