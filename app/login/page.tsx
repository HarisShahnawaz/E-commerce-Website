"use client"

import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="bg-[#f5f3ef] min-h-screen w-full p-4 sm:p-6 lg:p-8 box-border">
      <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 lg:p-8 w-full max-w-md mx-auto box-border">
        
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-1.5">HMA-Store</p>
          <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1.5 leading-tight">
            Welcome back
          </h1>
          <p className="text-sm sm:text-base text-gray-600">Sign in to your account</p>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-4 sm:gap-5">
          <div>
            <label className="block text-xs sm:text-sm text-gray-700 mb-1.5 font-medium">Email address</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
            />
          </div>
          
          <div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-1.5 gap-2 sm:gap-0">
              <label className="text-xs sm:text-sm text-gray-700 font-medium">Password</label>
              <Link 
                href="#" 
                className="text-xs text-gray-500 hover:text-gray-700 font-medium transition-colors"
              >
                Forgot password?
              </Link>
            </div>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
            />
          </div>
          
          <button className="w-full bg-gray-900 text-white py-3.5 sm:py-4 rounded-lg text-sm sm:text-base font-medium hover:bg-gray-800 active:bg-gray-900 transition-all duration-200 shadow-sm">
            Sign in
          </button>
        </form>

        {/* Divider */}
        <div className="relative my-6 sm:my-8 text-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200" />
          </div>
          <span className="relative bg-white px-4 text-xs text-gray-400">
            or continue with
          </span>
        </div>

        {/* Google Button */}
        <button className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-700 bg-white hover:bg-gray-50 active:bg-gray-100 flex items-center justify-center gap-3 transition-all duration-200 shadow-sm">
          <svg width="18" height="18" viewBox="0 0 48 48" className="shrink-0">
            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
            <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
            <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
            <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
          </svg>
          Continue with Google
        </button>

        {/* Sign up link */}
        <p className="text-center text-xs sm:text-sm text-gray-600 mt-6 sm:mt-8 mb-0">
          Don't have an account?{" "}
          <Link 
            href="/signup" 
            className="text-gray-900 font-semibold hover:text-gray-800 transition-colors"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}