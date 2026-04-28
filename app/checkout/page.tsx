"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { CheckCircle2, Truck, CreditCard, ClipboardCheck } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"

type Step = 1 | 2 | 3

const STEPS = [
  { id: 1, label: "Shipping", icon: Truck },
  { id: 2, label: "Payment", icon: CreditCard },
  { id: 3, label: "Confirm", icon: ClipboardCheck },
]

export default function CheckoutPage() {
  const { cartItems, totalItems } = useCart()
  const [step, setStep] = useState<Step>(1)
  const [orderPlaced, setOrderPlaced] = useState(false)
  const [form, setForm] = useState({ name: "", phone: "", address: "", city: "", province: "" })
  const [payment, setPayment] = useState("cod")
  const [formError, setFormError] = useState("")

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal > 30000 ? 0 : 500
  const total = subtotal + shipping
  const fmt = (n: number) => `Rs ${n.toLocaleString()}`

  const handleShippingNext = () => {
    const { name, phone, address, city, province } = form
    if (!name || !phone || !address || !city || !province) {
      setFormError("Please fill in all fields")
      return
    }
    setFormError("")
    setStep(2)
  }

  if (orderPlaced) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-[#f5f3ef] flex items-center justify-center px-4">
          <div className="text-center max-w-md">
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="font-serif text-3xl font-bold text-gray-900 mb-2">Order Placed!</h1>
            <p className="text-gray-500 mb-2">Thank you, <span className="font-medium text-gray-800">{form.name}</span>!</p>
            <p className="text-gray-500 text-sm mb-8">We'll contact you on <span className="font-medium text-gray-800">{form.phone}</span> to confirm delivery.</p>
            <div className="bg-white rounded-2xl p-6 border border-gray-100 text-left mb-8">
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-3">Order Summary</p>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-500">Items ({totalItems})</span>
                <span className="font-medium">{fmt(subtotal)}</span>
              </div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-500">Shipping</span>
                <span className={shipping === 0 ? "text-green-600 font-medium" : "font-medium"}>{shipping === 0 ? "Free" : fmt(shipping)}</span>
              </div>
              <div className="border-t border-gray-100 mt-3 pt-3 flex justify-between font-serif font-bold">
                <span>Total</span><span>{fmt(total)}</span>
              </div>
            </div>
            <Link href="/"><Button className="rounded-full px-10">Continue Shopping</Button></Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  if (cartItems.length === 0) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-[#f5f3ef] flex items-center justify-center px-4">
          <div className="text-center">
            <h2 className="font-serif text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
            <p className="text-gray-500 mb-6">Add items before checking out.</p>
            <Link href="/"><Button>Shop Now</Button></Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f5f3ef]">
        <section className="text-center pt-14 pb-8 px-6">
          <p className="text-xs text-gray-400 tracking-[0.25em] uppercase mb-3">Almost There</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900">Checkout</h1>
          <div className="w-12 h-0.5 bg-gray-900 mx-auto mt-5" />
        </section>

        <div className="max-w-2xl mx-auto px-4 mb-10">
          <div className="flex items-center justify-center gap-0">
            {STEPS.map((s, i) => {
              const Icon = s.icon
              const isActive = step === s.id
              const isDone = step > s.id
              return (
                <div key={s.id} className="flex items-center">
                  <div className="flex flex-col items-center gap-1">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${isDone ? "bg-gray-900 border-gray-900" : isActive ? "border-gray-900 bg-white" : "border-gray-200 bg-white"}`}>
                      {isDone ? <CheckCircle2 className="h-5 w-5 text-white" /> : <Icon className={`h-4 w-4 ${isActive ? "text-gray-900" : "text-gray-300"}`} />}
                    </div>
                    <span className={`text-xs font-medium ${isActive ? "text-gray-900" : "text-gray-400"}`}>{s.label}</span>
                  </div>
                  {i < STEPS.length - 1 && <div className={`w-16 sm:w-24 h-0.5 mb-5 mx-2 ${step > s.id ? "bg-gray-900" : "bg-gray-200"}`} />}
                </div>
              )
            })}
          </div>
        </div>

        <section className="max-w-6xl mx-auto px-4 pb-20">
          <div className="flex flex-col lg:flex-row gap-8">

            <div className="flex-1">
              {step === 1 && (
                <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm">
                  <h2 className="font-serif text-xl font-bold text-gray-900 mb-6">Shipping Address</h2>
                  <div className="flex flex-col gap-4">
                    {[
                      { key: "name", label: "Full Name", placeholder: "e.g. Haris Shahnawaz", type: "text" },
                      { key: "phone", label: "Phone Number", placeholder: "e.g. 0300-1234567", type: "tel" },
                      { key: "address", label: "Street Address", placeholder: "House no, Street, Area", type: "text" },
                    ].map(({ key, label, placeholder, type }) => (
                      <div key={key}>
                        <label className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1.5 block">{label}</label>
                        <input
                          type={type}
                          placeholder={placeholder}
                          value={form[key as keyof typeof form]}
                          onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-gray-900 transition"
                        />
                      </div>
                    ))}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1.5 block">City</label>
                        <input type="text" placeholder="e.g. Lahore" value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-gray-900 transition" />
                      </div>
                      <div>
                        <label className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1.5 block">Province</label>
                        <select value={form.province} onChange={(e) => setForm({ ...form, province: e.target.value })} className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-gray-900 transition bg-white">
                          <option value="">Select</option>
                          <option>Punjab</option>
                          <option>Sindh</option>
                          <option>KPK</option>
                          <option>Balochistan</option>
                          <option>Islamabad</option>
                          <option>AJK</option>
                          <option>Gilgit-Baltistan</option>
                        </select>
                      </div>
                    </div>
                    {formError && <p className="text-red-500 text-xs">{formError}</p>}
                    <Button className="w-full h-12 rounded-xl mt-2" onClick={handleShippingNext}>Continue to Payment →</Button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm">
                  <h2 className="font-serif text-xl font-bold text-gray-900 mb-6">Payment Method</h2>
                  <div className="flex flex-col gap-3 mb-6">
                    {[
                      { id: "cod", label: "Cash on Delivery", sub: "Pay when your order arrives", emoji: "💵" },
                      { id: "jazzcash", label: "JazzCash", sub: "Send to 0300-XXXXXXX", emoji: "📱" },
                      { id: "easypaisa", label: "EasyPaisa", sub: "Send to 0300-XXXXXXX", emoji: "📲" },
                      { id: "bank", label: "Bank Transfer", sub: "Account details sent via SMS", emoji: "🏦" },
                    ].map((m) => (
                      <label key={m.id} className={`flex items-center gap-4 p-4 border-2 rounded-xl cursor-pointer transition-all ${payment === m.id ? "border-gray-900 bg-gray-50" : "border-gray-100 hover:border-gray-200"}`}>
                        <input type="radio" name="payment" value={m.id} checked={payment === m.id} onChange={() => setPayment(m.id)} className="accent-gray-900" />
                        <span className="text-2xl">{m.emoji}</span>
                        <div>
                          <p className="text-sm font-semibold text-gray-900">{m.label}</p>
                          <p className="text-xs text-gray-400">{m.sub}</p>
                        </div>
                      </label>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" className="flex-1 h-12 rounded-xl" onClick={() => setStep(1)}>← Back</Button>
                    <Button className="flex-1 h-12 rounded-xl" onClick={() => setOrderPlaced(true)}>Place Order →</Button>
                  </div>
                </div>
              )}
            </div>

            <div className="lg:w-96">
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm sticky top-24">
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-4">Order Summary</p>
                <div className="flex flex-col gap-3 mb-4 max-h-60 overflow-y-auto">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-3 items-center">
                      <div className="relative w-14 h-16 rounded-lg overflow-hidden bg-gray-100 shrink-0">
                        <Image src={item.image} alt={item.name} fill className="object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium text-gray-900 truncate">{item.name}</p>
                        <p className="text-xs text-gray-400">Qty: {item.quantity}</p>
                      </div>
                      <p className="text-xs font-semibold text-gray-900 shrink-0">Rs {(item.price * item.quantity).toLocaleString()}</p>
                    </div>
                  ))}
                </div>
                <div className="border-t border-gray-100 pt-4 flex flex-col gap-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Subtotal ({totalItems} items)</span>
                    <span className="font-medium">{fmt(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Shipping</span>
                    <span className={shipping === 0 ? "text-green-600 font-medium" : "font-medium"}>{shipping === 0 ? "Free" : fmt(shipping)}</span>
                  </div>
                  <div className="border-t border-gray-100 mt-2 pt-3 flex justify-between">
                    <span className="font-serif font-bold text-gray-900">Total</span>
                    <span className="font-serif font-bold text-gray-900 text-lg">{fmt(total)}</span>
                  </div>
                </div>
                {step === 2 && form.name && (
                  <div className="mt-4 p-3 rounded-xl bg-gray-50 border border-gray-100">
                    <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Delivering to</p>
                    <p className="text-sm font-medium text-gray-900">{form.name}</p>
                    <p className="text-xs text-gray-500">{form.address}, {form.city}, {form.province}</p>
                    <p className="text-xs text-gray-500">{form.phone}</p>
                  </div>
                )}
              </div>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}