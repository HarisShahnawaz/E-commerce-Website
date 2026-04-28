import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const men = [
  { size: "XS", chest: "34–36", waist: "28–30", hip: "34–36" },
  { size: "S",  chest: "36–38", waist: "30–32", hip: "36–38" },
  { size: "M",  chest: "38–40", waist: "32–34", hip: "38–40" },
  { size: "L",  chest: "40–42", waist: "34–36", hip: "40–42" },
  { size: "XL", chest: "42–44", waist: "36–38", hip: "42–44" },
  { size: "XXL",chest: "44–46", waist: "38–40", hip: "44–46" },
]
const women = [
  { size: "XS", chest: "32–34", waist: "24–26", hip: "34–36" },
  { size: "S",  chest: "34–36", waist: "26–28", hip: "36–38" },
  { size: "M",  chest: "36–38", waist: "28–30", hip: "38–40" },
  { size: "L",  chest: "38–40", waist: "30–32", hip: "40–42" },
  { size: "XL", chest: "40–42", waist: "32–34", hip: "42–44" },
  { size: "XXL",chest: "42–44", waist: "34–36", hip: "44–46" },
]
const kids = [
  { size: "2–3Y",   height: "92–98 cm",    chest: `21"`, waist: `20"` },
  { size: "4–5Y",   height: "104–110 cm",  chest: `22"`, waist: `21"` },
  { size: "6–7Y",   height: "116–122 cm",  chest: `24"`, waist: `22"` },
  { size: "8–9Y",   height: "128–134 cm",  chest: `26"`, waist: `23"` },
  { size: "10–11Y", height: "140–146 cm",  chest: `28"`, waist: `24"` },
  { size: "12–13Y", height: "152–158 cm",  chest: `30"`, waist: `25"` },
]

function SizeTable({ headers, rows }: { headers: string[], rows: string[][] }) {
  return (
    <div className="overflow-x-auto mb-12">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-secondary">
            {headers.map((h) => <th key={h} className="text-left px-4 py-3 font-semibold text-foreground border-b border-border">{h}</th>)}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-background" : "bg-secondary/40"}>
              {row.map((cell, j) => (
                <td key={j} className={`px-4 py-3 border-b border-border/50 ${j === 0 ? "font-semibold text-foreground" : "text-muted-foreground"}`}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function SizeGuidePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <p className="text-xs text-muted-foreground tracking-[0.25em] uppercase mb-3">Help Center</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-2">Size Guide</h1>
          <p className="text-muted-foreground mb-4 text-lg">All measurements in inches unless stated.</p>
          <p className="text-sm text-muted-foreground mb-12 p-4 rounded-xl bg-secondary border border-border">
            💡 <strong className="text-foreground">Tip:</strong> Between sizes? Size up for a more comfortable fit.
          </p>

          <h2 className="font-semibold text-foreground text-xl mb-4">Men</h2>
          <SizeTable headers={["Size", "Chest", "Waist", "Hip"]} rows={men.map(r => [r.size, r.chest+'"', r.waist+'"', r.hip+'"'])} />

          <h2 className="font-semibold text-foreground text-xl mb-4">Women</h2>
          <SizeTable headers={["Size", "Chest", "Waist", "Hip"]} rows={women.map(r => [r.size, r.chest+'"', r.waist+'"', r.hip+'"'])} />

          <h2 className="font-semibold text-foreground text-xl mb-4">Children</h2>
          <SizeTable headers={["Age", "Height", "Chest", "Waist"]} rows={kids.map(r => [r.size, r.height, r.chest, r.waist])} />

          <div className="p-6 rounded-2xl bg-secondary border border-border">
            <h3 className="font-semibold text-foreground mb-2">Not sure about your size?</h3>
            <p className="text-sm text-muted-foreground mb-4">Contact us and we'll help you find the perfect fit.</p>
            <a href="/contact" className="inline-block px-6 py-2.5 bg-foreground text-background rounded-lg text-sm font-medium hover:opacity-90 transition">Contact Us</a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}