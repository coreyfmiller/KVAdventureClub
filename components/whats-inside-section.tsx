import { Map, Eye, BookOpen, ChefHat } from 'lucide-react'

const features = [
  {
    icon: Map,
    title: 'Scavenger Hunts',
    description: 'Explore your neighborhood with themed treasure hunts designed for the Kennebecasis Valley. Discover hidden gems in Rothesay, Quispamsis, and beyond!',
    color: 'bg-primary',
    lightColor: 'bg-primary/10',
  },
  {
    icon: Eye,
    title: 'Secret Missions',
    description: 'Undercover challenges that turn everyday moments into exciting adventures. Complete missions solo or team up with friends and family!',
    color: 'bg-accent',
    lightColor: 'bg-accent/10',
  },
  {
    icon: BookOpen,
    title: 'Local Facts',
    description: 'Learn fascinating stories about the Kennebecasis River, local wildlife, and the history of our amazing valley community.',
    color: 'bg-sky',
    lightColor: 'bg-sky/10',
  },
  {
    icon: ChefHat,
    title: 'Easy Recipes',
    description: 'Kid-friendly recipes using seasonal ingredients. Cook up tasty treats that connect you to local farms and Maritime traditions!',
    color: 'bg-sunset',
    lightColor: 'bg-sunset/10',
  },
]

export function WhatsInsideSection() {
  return (
    <section id="whats-inside" className="py-20 md:py-28 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
            {"What's"} Inside Each Kit
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4">
            Packed with <span className="text-accent">Adventure</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every month brings new surprises, challenges, and discoveries tailored specifically for kids and teens in our valley.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div 
                key={feature.title}
                className="group relative bg-card rounded-3xl p-8 border border-border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                {/* Number badge */}
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-muted flex items-center justify-center text-sm font-bold text-muted-foreground border border-border">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl ${feature.lightColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-8 h-8 ${feature.color === 'bg-primary' ? 'text-primary' : feature.color === 'bg-accent' ? 'text-accent' : feature.color === 'bg-sky' ? 'text-sky' : 'text-sunset'}`} />
                </div>

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative corner */}
                <div className={`absolute bottom-0 right-0 w-20 h-20 ${feature.lightColor} rounded-tl-[4rem] rounded-br-3xl -z-10 opacity-50`} />
              </div>
            )
          })}
        </div>

        {/* Additional info */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-6 px-8 py-4 rounded-2xl bg-card border border-border">
            <div className="flex items-center gap-2">
              <span className="text-2xl">📦</span>
              <span className="font-semibold text-foreground">Monthly Delivery</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-border" />
            <div className="flex items-center gap-2">
              <span className="text-2xl">🎨</span>
              <span className="font-semibold text-foreground">Age-Appropriate</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-border" />
            <div className="flex items-center gap-2">
              <span className="text-2xl">📵</span>
              <span className="font-semibold text-foreground">100% Screen-Free</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
