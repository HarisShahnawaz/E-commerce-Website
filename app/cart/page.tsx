"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Trash2, Plus, Minus, ShoppingBag, Tag, ArrowRight } from "lucide-react"
import {Header} from "@/components/header"
import {Footer} from "@/components/footer"

const initialCartItems = [
  {
    id: 1,
    name: "Tailored Wool Blazer",
    category: "Men",
    price: 300,
    quantity: 1,
    size: "M",
    image: "/images/products/blazer.jpg",
  },
  {
    id: 2,
    name: "Silk Midi Dress",
    category: "Women",
    price: 195,
    quantity: 2,
    size: "S",
    image: "/images/products/dress.jpg",
  },
  {
    id: 3,
    name: "Cashmere Sweater",
    category: "Women",
    price: 225,
    quantity: 1,
    size: "L",
    image: "/images/products/sweater.jpg",
  },
]

const suggestedProducts = [
  {
    id: 4,
    name: "Linen Shirt",
    price: 95,
    image: "/images/products/shirt.jpg",
    category: "Men",
  },
  {
    id: 5,
    name: "Leather Crossbody Bag",
    price: 175,
    image: "/images/products/bag.jpg",
    category: "Women",
  },
  {
    id: 6,
    name: "Premium Cotton Tee",
    price: 49,
    image: "/images/products/tee.jpg",
    category: "Men",
  },
  {
    id: 7,
    name: "Kids Denim Jacket",
    price: 85,
    image: "/images/products/kids-jacket.jpg",
    category: "Children",
  },
]

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems)
  const [coupon, setCoupon] = useState("")
  const [couponApplied, setCouponApplied] = useState(false)
  const [couponError, setCouponError] = useState("")

  const updateQuantity = (id: number, delta: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    )
  }

  const removeItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id))
  }

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
  const shipping = subtotal > 300 ? 0 : 15
  const total = subtotal - discount + shipping

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f5f3ef]">

        {/* ── HEADING ── */}
        <section className="text-center pt-14 pb-8 px-6">
          <p className="text-xs text-gray-400 tracking-[0.25em] uppercase mb-3">Your Selection</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900">
            Shopping Cart
          </h1>
          <div className="w-12 h-0.5 bg-gray-900 mx-auto mt-5" />
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          {cartItems.length === 0 ? (

            /* ── EMPTY STATE ── */
            <div className="text-center py-24">
              <ShoppingBag className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
              <p className="text-gray-500 text-sm mb-8">Looks like you haven't added anything yet.</p>
              <Link
                href="/"
                className="bg-gray-900 text-white px-8 py-3 rounded-lg text-sm font-medium hover:bg-black transition"
              >
                Continue Shopping
              </Link>
            </div>

          ) : (
            <div className="flex flex-col lg:flex-row gap-8">

              {/* ── LEFT — Cart Items ── */}
              <div className="flex-1">
                <div className="flex flex-col gap-4">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white rounded-2xl p-4 sm:p-6 border border-gray-100 shadow-sm flex gap-4 sm:gap-6"
                    >
                      {/* Image */}
                      <div className="relative w-24 h-28 sm:w-32 sm:h-36 rounded-xl overflow-hidden shrink-0 bg-gray-100">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Details */}
                      <div className="flex-1 flex flex-col justify-between">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">{item.category}</p>
                            <h3 className="font-serif text-base sm:text-lg font-bold text-gray-900">{item.name}</h3>
                            <p className="text-xs text-gray-400 mt-1">Size: {item.size}</p>
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-gray-300 hover:text-red-400 transition p-1"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>

                        <div className="flex items-center justify-between mt-4">
                          {/* Quantity */}
                          <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-2 py-1">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="text-gray-500 hover:text-gray-900 transition"
                            >
                              <Minus className="h-3.5 w-3.5" />
                            </button>
                            <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="text-gray-500 hover:text-gray-900 transition"
                            >
                              <Plus className="h-3.5 w-3.5" />
                            </button>
                          </div>
                          {/* Price */}
                          <p className="font-serif text-lg font-bold text-gray-900">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Continue Shopping */}
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 mt-6 text-sm text-gray-500 hover:text-gray-900 transition"
                >
                  ← Continue Shopping
                </Link>
              </div>

              {/* ── RIGHT — Order Summary ── */}
              <div className="w-full lg:w-96 shrink-0">
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm sticky top-24">
                  <h2 className="font-serif text-xl font-bold text-gray-900 mb-6">Order Summary</h2>

                  {/* Price Breakdown */}
                  <div className="flex flex-col gap-3 text-sm mb-6">
                    <div className="flex justify-between text-gray-600">
                      <span>Subtotal ({cartItems.reduce((s, i) => s + i.quantity, 0)} items)</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    {couponApplied && (
                      <div className="flex justify-between text-green-600">
                        <span>Discount (HMA10)</span>
                        <span>-${discount.toFixed(2)}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-gray-600">
                      <span>Shipping</span>
                      <span>{shipping === 0 ? <span className="text-green-600">Free</span> : `$${shipping.toFixed(2)}`}</span>
                    </div>
                    {shipping > 0 && (
                      <p className="text-xs text-gray-400">Free shipping on orders over $300</p>
                    )}
                    <div className="border-t border-gray-100 pt-3 flex justify-between font-bold text-gray-900 text-base">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>

                  {/* Coupon */}
                  <div className="mb-6">
                    <label className="text-xs text-gray-500 uppercase tracking-widest block mb-2">
                      Coupon Code
                    </label>
                    <div className="flex gap-2">
  <div className="flex-1 min-w-0 flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 bg-[#fafaf9]">
    <Tag className="h-3.5 w-3.5 text-gray-400 shrink-0" />
    <input
      type="text"
      value={coupon}
      onChange={(e) => setCoupon(e.target.value)}
      placeholder="Enter code"
      className="w-full text-sm focus:outline-none bg-transparent text-gray-800 placeholder-gray-400"
    />
  </div>
  <button
    onClick={applyCoupon}
    className="shrink-0 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-black transition whitespace-nowrap"
  >
    Apply
  </button>
</div>
                    {couponApplied && (
                      <p className="text-xs text-green-600 mt-1.5">✓ Coupon applied! 10% off</p>
                    )}
                    {couponError && (
                      <p className="text-xs text-red-400 mt-1.5">{couponError}</p>
                    )}
                    <p className="text-xs text-gray-400 mt-1.5">Try: <span className="font-medium text-gray-600">HMA10</span></p>
                  </div>

                  {/* Checkout Button */}
                  <button className="w-full bg-gray-900 text-white py-3.5 rounded-xl text-sm font-medium hover:bg-black transition flex items-center justify-center gap-2">
                    Proceed to Checkout
                    <ArrowRight className="h-4 w-4" />
                  </button>

                  {/* Trust Badges */}
                  <div className="flex justify-center gap-6 mt-6">
                    {["🔒 Secure", "🚀 Fast", "↩️ Easy Returns"].map((badge) => (
                      <span key={badge} className="text-xs text-gray-400">{badge}</span>
                    ))}
                  </div>

                </div>
              </div>

            </div>
          )}
        </section>

        {/* ── SUGGESTED PRODUCTS ── */}
        <section className="bg-white py-14 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs text-gray-400 tracking-[0.25em] uppercase mb-2">You Might Like</p>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
              Suggested For You
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              {suggestedProducts.map((product) => (
                <div
                  key={product.id}
                  className="group cursor-pointer"
                >
                  <div className="relative w-full aspect-3/4 rounded-xl overflow-hidden bg-gray-100 mb-3">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mb-0.5">{product.category}</p>
                  <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
                  <p className="text-sm font-bold text-gray-900 mt-0.5">${product.price}.00</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}