"use client"

import {Header }from "@/components/header"
import {Footer} from "@/components/footer"

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f5f3ef]">

        {/* ── TOP HEADING ── */}
        <section className="text-center pt-16 pb-10 px-6">
          <p className="text-xs text-gray-400 tracking-[0.25em] uppercase mb-3">Get In Touch</p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
            Contact Us
          </h1>
          <div className="w-12 h-0.5 bg-gray-900 mx-auto mt-5" />
          <p className="text-gray-500 text-sm sm:text-base mt-6 max-w-2xl mx-auto leading-relaxed">
  Have a question, feedback, or need help with an order? We're here for you. 
  Our friendly support team is available 6 days a week and will get back to 
  you within 24 hours. Don't hesitate to reach out — we'd love to hear from you!
</p>
        </section>

        {/* ── MAIN CONTENT ── */}
        <section className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-8 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1">

            {/* LEFT — Contact Form */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6">Send a Message</h2>

              <div className="flex flex-col gap-5">
                {/* Name */}
                <div>
                  <label className="text-sm text-gray-600 block mb-1.5">Full Name</label>
                  <input
                    type="text"
                    placeholder="Haris Shahnawaz"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300 bg-[#fafaf9]"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="text-sm text-gray-600 block mb-1.5">Email Address</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300 bg-[#fafaf9]"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="text-sm text-gray-600 block mb-1.5">Subject</label>
                  <input
                    type="text"
                    placeholder="How can we help?"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300 bg-[#fafaf9]"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="text-sm text-gray-600 block mb-1.5">Message</label>
                  <textarea
                    rows={5}
                    placeholder="Write your message here..."
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300 bg-[#fafaf9] resize-none"
                  />
                </div>

                {/* Submit */}
                <button className="w-full bg-gray-900 text-white py-3 rounded-lg text-sm font-medium hover:bg-black transition">
                  Send Message
                </button>
              </div>
            </div>

            {/* RIGHT — Info + Map */}
            <div className="flex flex-col gap-6">

              {/* Contact Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {[
                  {
                    icon: "📍",
                    title: "Our Address",
                    detail: "5/4L ZEE Mart Okara, Pakistan"
                  },
                  {
                    icon: "📞",
                    title: "Phone Number",
                    detail: "+92 0313 1435116"
                  },
                  {
                    icon: "✉️",
                    title: "Email Address",
                    detail: "harisshahnawaz97@gmail.com"
                  },
                  {
                    icon: "🕐",
                    title: "Working Hours",
                    detail: "Mon – Sat: 9:00 AM – 6:00 PM"
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="bg-white rounded-2xl px-6 py-5 border border-gray-100 shadow-sm flex items-start gap-4"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 mb-0.5">{item.title}</p>
                      <p className="text-sm text-gray-500">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm h-64 lg:h-full min-h-62.5">
                <iframe
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13708.967317599978!2d73.42251000506204!3d30.795851925564435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3922a700126265d1%3A0x5a53a86115ca3772!2sMuzaffar%20Colony%20Chak%20No.%205%2F4-L%20Okara!5e0!3m2!1sen!2sus!4v1776547650419!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "250px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

            </div>
          </div>
        </section>

       

      </main>
      <Footer />
    </>
  )
}