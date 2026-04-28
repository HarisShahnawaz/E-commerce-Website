"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Trash2, Plus, Minus, ShoppingBag, Tag, ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useCart } from "@/lib/cart-context"

const suggestedProducts = [
  { id: "m3", name: "Linen Shirt",       price: 3500, image: "/images/products/men/shirt.jpg",   category: "Men" },
  { id: "6",  name: "Leather Bag",        price: 1500, image: "/images/products/bag.jpg",         category: "Women" },
  { id: "m2", name: "Premium Cotton Tee", price: 4900, image: "/images/products/men/tee.jpg",     category: "Men" },
  { id: "5",  name: "Kids Denim Jacket",  price: 3500, image: "/images/products/kids-jacket.jpg", category: "Children" },
]

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity } = useCart()
  const [coupon, setCoupon] = useState("")
  const [couponApplied, setCouponApplied] = useState(false)
  const [couponError, setCouponError] = useState("")

  const applyCoupon = () => {
    if (coupon.toUpperCase() === "HMA10") {
      setCouponApplied(true)
      setCouponError("")
    } else {
      setCouponError("Invalid coupon code")
      setCouponApplied(false)
    }
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const discount = couponApplied ? subtotal * 0.1 : 0
  const shipping = subtotal > 30000 ? 0 : 500
  const total = subtotal - discount + shipping
  const fmt = (n: number) => `Rs ${n.toLocaleString()}`

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f5f3ef]">

        <section className="text-center pt-14 pb-8 px-6">
          <p className="text-xs text-gray-400 tracking-[0.25em] uppercase mb-3">Your Selection</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900">Shopping Cart</h1>
          <div className="w-12 h-0.5 bg-gray-900 mx-auto mt-5" />
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          {cartItems.length === 0 ? (
            <div className="text-center py-24">
              <ShoppingBag className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
              <p className="text-gray-500 text-sm mb-8">Looks like you haven't added anything yet.</p>
              <Link href="/" className="bg-gray-900 text-white px-8 py-3 rounded-lg text-sm font-medium hover:bg-black transition">
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row gap-8">

              <div className="flex-1">
                <div className="flex flex-col gap-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="bg-white rounded-2xl p-4 sm:p-6 border border-gray-100 shadow-sm flex gap-4 sm:gap-6">
                      <div className="relative w-24 h-28 sm:w-32 sm:h-36 rounded-xl overflow-hidden shrink-0 bg-gray-100">
                        <Image src={item.image} alt={item.name} fill className="object-cover" />
                      </div>
                      <div className="flex-1 flex flex-col justify-between">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">{item.category}</p>
                            <h3 className="font-serif text-base sm:text-lg font-bold text-gray-900">{item.name}</h3>
                          </div>
                          <button onClick={() => removeFromCart(item.id)} className="text-gray-300 hover:text-red-400 transition p-1">
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-2 py-1">
                            <button onClick={() => updateQuantity(item.id, -1)} className="text-gray-500 hover:text-gray-900 transition">
                              <Minus className="h-3.5 w-3.5" />
                            </button>
                            <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, 1)} className="text-gray-500 hover:text-gray-900 transition">
                              <Plus className="h-3.5 w-3.5" />
                            </button>
                          </div>
                          <p className="font-serif text-lg font-bold text-gray-900">{fmt(item.price * item.quantity)}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Link href="/" className="inline-flex items-center gap-2 mt-6 text-sm text-gray-500 hover:text-gray-900 transition">
                  ← Continue Shopping
                </Link>
              </div>

              <div className="lg:w-96">
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm sticky top-24">
                  <p className="text-xs text-gray-400 uppercase tracking-widest mb-5">Order Summary</p>

                  <div className="flex flex-col gap-3 mb-5">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Subtotal</span>
                      <span className="font-medium text-gray-900">{fmt(subtotal)}</span>
                    </div>
                    {couponApplied && (
                      <div className="flex justify-between text-sm">
                        <span className="text-green-600">Discount (10%)</span>
                        <span className="font-medium text-green-600">− {fmt(discount)}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Shipping</span>
                      <span className={`font-medium ${shipping === 0 ? "text-green-600" : "text-gray-900"}`}>
                        {shipping === 0 ? "Free" : fmt(shipping)}
                      </span>
                    </div>
                    {shipping > 0 && <p className="text-xs text-gray-400">Free shipping on orders over Rs 30,000</p>}
                  </div>

                  <div className="flex gap-2 mb-2">
                    <div className="flex-1 flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2">
                      <Tag className="h-4 w-4 text-gray-400 shrink-0" />
                      <input
                        type="text"
                        placeholder="Coupon code"
                        value={coupon}
                        onChange={(e) => setCoupon(e.target.value)}
                        className="flex-1 text-sm focus:outline-none text-gray-800 placeholder-gray-400 bg-transparent"
                      />
                    </div>
                    <button onClick={applyCoupon} className="px-4 py-2 bg-gray-900 text-white rounded-xl text-xs font-medium hover:bg-black transition shrink-0">
                      Apply
                    </button>
                  </div>
                  {couponError && <p className="text-xs text-red-500 mb-2">{couponError}</p>}
                  {couponApplied && <p className="text-xs text-green-600 mb-2">✓ Coupon applied — 10% off!</p>}
                  <p className="text-xs text-gray-400 mb-5">Try: HMA10</p>

                  <div className="border-t border-gray-100 pt-4 flex justify-between mb-5">
                    <span className="font-serif font-bold text-gray-900">Total</span>
                    <span className="font-serif text-xl font-bold text-gray-900">{fmt(total)}</span>
                  </div>

                  <Link href="/checkout">
                    <button className="w-full bg-gray-900 text-white py-4 rounded-xl text-sm font-medium hover:bg-black transition flex items-center justify-center gap-2">
                      Proceed to Checkout <ArrowRight className="h-4 w-4" />
                    </button>
                  </Link>

                  <div className="flex justify-center gap-4 mt-4">
                    {["🔒 Secure", "📦 Free Returns", "✓ Authentic"].map((b) => (
                      <span key={b} className="text-xs text-gray-400">{b}</span>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          )}
        </section>

        <section className="bg-white py-14 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs text-gray-400 tracking-[0.25em] uppercase mb-2">You Might Like</p>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Suggested For You</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              {suggestedProducts.map((product) => (
                <Link key={product.id} href={`/product/${product.id}`} className="group cursor-pointer">
                  <div className="relative w-full aspect-3/4 rounded-xl overflow-hidden bg-gray-100 mb-3">
                    <Image src={product.image} alt={product.name} fill className="object-cover group-hover:scale-105 transition duration-300" />
                  </div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mb-0.5">{product.category}</p>
                  <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
                  <p className="text-sm font-bold text-gray-900 mt-0.5">Rs {product.price.toLocaleString()}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}