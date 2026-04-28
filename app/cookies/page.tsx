import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const cookieSections = [
  {
    title: "What are cookies?",
    content: "Cookies are small text files stored on your device when you visit a website. They help us remember your preferences, keep your shopping cart saved, and understand how you interact with HMA-Store."
  },
  {
    title: "How we use cookies",
    content: "We use cookies to enhance your shopping experience. This includes keeping you signed in, remembering items in your cart, and providing personalized content. We also use analytics cookies to see which products are most popular."
  },
  {
    title: "Types of cookies we use",
    content: "1. Essential Cookies: Necessary for the website to function (e.g., checkout and login).\n2. Performance Cookies: Help us improve the speed and usability of the site.\n3. Marketing Cookies: Used to show you relevant offers and ads based on your browsing history."
  },
  {
    title: "Managing your preferences",
    content: "Most web browsers allow you to control cookies through their settings. You can choose to block or delete cookies, but please note that this may limit your ability to use certain features on HMA-Store, such as the shopping cart."
  },
  {
    title: "Third-party cookies",
    content: "In some cases, we use cookies provided by trusted third parties, such as Google Analytics, to help us analyze site traffic and optimize our marketing efforts."
  }
]

export default function CookiesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="max-w-3xl mx-auto px-4 py-16">
          <p className="text-xs text-muted-foreground tracking-[0.25em] uppercase mb-3">Legal</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-2">Cookie Policy</h1>
          <p className="text-muted-foreground mb-12 text-lg">How HMA-Store uses data to improve your experience.</p>
          
          <div className="flex flex-col">
            {cookieSections.map(({ title, content }, i) => (
              <div key={i} className="border-b border-border py-8">
                <h3 className="font-semibold text-foreground mb-3 text-xl">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line">
                  {content}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-muted/50 rounded-lg border border-border">
            <p className="text-sm text-muted-foreground italic">
              Last updated: April 29, 2026. If you have any questions regarding our use of cookies, please visit our Contact page.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}