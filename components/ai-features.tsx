import { Sparkles, Wand2, Palette, BarChart3 } from "lucide-react"

const features = [
  {
    icon: Wand2,
    title: "AI Style Recommendations",
    description: "Get personalized outfit suggestions based on your preferences, body type, and occasion.",
  },
  {
    icon: Palette,
    title: "Virtual Try-On",
    description: "See how clothes look on you before you buy with our AI-powered virtual fitting room.",
  },
  {
    icon: BarChart3,
    title: "Size Predictor",
    description: "Our AI analyzes your measurements to recommend the perfect size every time.",
  },
  {
    icon: Sparkles,
    title: "Smart Wardrobe",
    description: "Build complete outfits from your purchases with intelligent mix-and-match suggestions.",
  },
]

export function AIFeatures() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        {/* Section of Header  */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border mb-6">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-foreground">Powered by AI</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Shopping, Reimagined
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Experience the future of fashion retail with our cutting-edge AI technology
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-8 rounded-xl bg-card border border-border hover:border-foreground/20 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-6 group-hover:bg-foreground group-hover:text-background transition-colors">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
