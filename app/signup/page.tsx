"use client"

import Link from "next/link"

export default function SignupPage() {
  return (
    <div style={{ backgroundColor: "#f5f3ef", minHeight: "100vh", width: "100%", overflowY: "auto", padding: "2rem 1rem", boxSizing: "border-box" }}>
      <div style={{
        backgroundColor: "white",
        border: "1px solid #e5e7eb",
        borderRadius: "1rem",
        padding: "2rem",
        width: "100%",
        maxWidth: "420px",
        margin: "0 auto",
        boxSizing: "border-box"
      }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
          <p style={{ fontSize: "11px", color: "#9ca3af", letterSpacing: "0.15em", textTransform: "uppercase", margin: "0 0 6px" }}>HMA-Store</p>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.5rem, 5vw, 2rem)", fontWeight: "700", color: "#111827", margin: "0 0 6px" }}>
            Create account
          </h1>
          <p style={{ fontSize: "14px", color: "#6b7280", margin: 0 }}>Join HMA-Store today</p>
        </div>

        {/* Form */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

          {/* Full Name */}
          <div>
            <label style={{ fontSize: "13px", color: "#4b5563", display: "block", marginBottom: "6px" }}>Full name</label>
            <input
              type="text"
              placeholder="Haris Shahnawaz"
              style={{
                width: "100%",
                border: "1px solid #d1d5db",
                borderRadius: "8px",
                padding: "10px 12px",
                fontSize: "14px",
                backgroundColor: "#fafaf9",
                boxSizing: "border-box",
                outline: "none"
              }}
            />
          </div>

          {/* Email */}
          <div>
            <label style={{ fontSize: "13px", color: "#4b5563", display: "block", marginBottom: "6px" }}>Email address</label>
            <input
              type="email"
              placeholder="you@example.com"
              style={{
                width: "100%",
                border: "1px solid #d1d5db",
                borderRadius: "8px",
                padding: "10px 12px",
                fontSize: "14px",
                backgroundColor: "#fafaf9",
                boxSizing: "border-box",
                outline: "none"
              }}
            />
          </div>

          {/* Password */}
          <div>
            <label style={{ fontSize: "13px", color: "#4b5563", display: "block", marginBottom: "6px" }}>Password</label>
            <input
              type="password"
              placeholder="••••••••"
              style={{
                width: "100%",
                border: "1px solid #d1d5db",
                borderRadius: "8px",
                padding: "10px 12px",
                fontSize: "14px",
                backgroundColor: "#fafaf9",
                boxSizing: "border-box",
                outline: "none"
              }}
            />
            <p style={{ fontSize: "11px", color: "#9ca3af", margin: "4px 0 0" }}>Must be at least 8 characters</p>
          </div>

          {/* Confirm Password */}
          <div>
            <label style={{ fontSize: "13px", color: "#4b5563", display: "block", marginBottom: "6px" }}>Confirm password</label>
            <input
              type="password"
              placeholder="••••••••"
              style={{
                width: "100%",
                border: "1px solid #d1d5db",
                borderRadius: "8px",
                padding: "10px 12px",
                fontSize: "14px",
                backgroundColor: "#fafaf9",
                boxSizing: "border-box",
                outline: "none"
              }}
            />
          </div>

          {/* Terms */}
          <div style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
            <input
              type="checkbox"
              id="terms"
              style={{ marginTop: "3px", accentColor: "#111827", cursor: "pointer" }}
            />
            <label htmlFor="terms" style={{ fontSize: "12px", color: "#6b7280", lineHeight: "1.5", cursor: "pointer" }}>
              I agree to the{" "}
              <Link href="/terms" style={{ color: "#111827", fontWeight: "600", textDecoration: "none" }}>Terms of Service</Link>
              {" "}and{" "}
              <Link href="/privacy" style={{ color: "#111827", fontWeight: "600", textDecoration: "none" }}>Privacy Policy</Link>
            </label>
          </div>

          {/* Submit Button */}
          <button style={{
            width: "100%",
            backgroundColor: "#111827",
            color: "white",
            padding: "11px",
            borderRadius: "8px",
            fontSize: "14px",
            fontWeight: "500",
            border: "none",
            cursor: "pointer"
          }}>
            Create account
          </button>
        </div>

        {/* Divider */}
        <div style={{ position: "relative", margin: "1.25rem 0", textAlign: "center" }}>
          <div style={{ position: "absolute", top: "50%", width: "100%", borderTop: "1px solid #e5e7eb" }} />
          <span style={{ position: "relative", backgroundColor: "white", padding: "0 10px", fontSize: "12px", color: "#9ca3af" }}>
            or continue with
          </span>
        </div>

        {/* Google Button */}
        <button style={{
          width: "100%",
          border: "1px solid #d1d5db",
          borderRadius: "8px",
          padding: "10px",
          fontSize: "14px",
          color: "#374151",
          backgroundColor: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          cursor: "pointer",
          boxSizing: "border-box"
        }}>
          <svg width="16" height="16" viewBox="0 0 48 48">
            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
            <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
            <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
            <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
          </svg>
          Sign up with Google
        </button>

        <p style={{ textAlign: "center", fontSize: "13px", color: "#6b7280", marginTop: "1.25rem", marginBottom: 0 }}>
          Already have an account?{" "}
          <Link href="/login" style={{ color: "#111827", fontWeight: "600", textDecoration: "none" }}>
            Sign in
          </Link>
        </p>

      </div>
    </div>
  )
}