'use client'

import { Map, Eye, BookOpen, ChefHat } from 'lucide-react'
import { FloatingDoodles } from '@/components/decorative-elements'
import { WaveDivider } from '@/components/wave-divider'

const features = [
  {
    icon: Map,
    title: 'Scavenger Hunts',
    description: 'Explore your neighborhood with themed treasure hunts designed for the Kennebecasis Valley. Discover hidden gems in Rothesay, Quispamsis, and beyond!',
    color: 'bg-primary',
    lightColor: 'bg-primary/10',
    textColor: 'text-primary',
    borderColor: 'border-primary/20',
    rotate: '-rotate-1',
  },
  {
    icon: Eye,
    title: 'Secret Missions',
    description: 'Undercover challenges that turn everyday moments into exciting adventures. Complete missions solo or team up with friends and family!',
    color: 'bg-accent',
    lightColor: 'bg-accent/10',
    textColor: 'text-accent',
    borderColor: 'border-accent/20',
    rotate: 'rotate-1',
  },
  {
    icon: BookOpen,
    title: 'Local Facts',
    description: 'Learn fascinating stories about the Kennebecasis River, local wildlife, and the history of our amazing valley community.',
    color: 'bg-sky',
    lightColor: 'bg-sky/10',
    textColor: 'text-sky',
    borderColor: 'border-sky/20',
    rotate: 'rotate-1',
  },
  {
    icon: ChefHat,
    title: 'Easy Recipes',
    description: 'Kid-friendly recipes using seasonal ingredients. Cook up tasty treats that connect you to local farms and Maritime traditions!',
    color: 'bg-sunset',
    lightColor: 'bg-sunset/10',
    textColor: 'text-sunset',
    borderColor: 'border-sunset/20',
    rotate: '-rotate-1',
  },
]

export function WhatsInsideSection() {
  return (
    <section id="whats-inside" className="relative py-20 md:py-28 bg-secondary/50">
      <FloatingDoodles />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4 border border-primary/20">
            {"What's"} Inside Each Kit
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4">
            Packed with{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-accent">Adventure</span>
              <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 12" preserveAspectRatio="none">
                <path d="M2 8 C50 2, 150 2, 198 8" stroke="currentColor" strokeWidth="4" fill="none" className="text-accent/40" strokeLinecap="round" />
              </svg>
            </span>
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
                className={`group relative bg-card rounded-3xl p-8 border-2 ${feature.borderColor} shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${feature.rotate} hover:rotate-0`}
              >
                {/* Sticker badge */}
                <div className={`absolute -top-4 -right-4 w-12 h-12 rounded-full ${feature.lightColor} border-2 ${feature.borderColor} flex items-center justify-center text-lg font-black shadow-md rotate-12 group-hover:rotate-0 transition-transform`}>
                  {index === 0 && '🗺️'}
                  {index === 1 && '🕵️'}
                  {index === 2 && '📚'}
                  {index === 3 && '🧁'}
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl ${feature.lightColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-8 h-8 ${feature.textColor}`} />
                </div>

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative corner */}
                <div className={`absolute bottom-0 right-0 w-24 h-24 ${feature.lightColor} rounded-tl-[5rem] rounded-br-3xl -z-10 opacity-40`} />
              </div>
            )
          })}
        </div>

        {/* Additional info */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-6 px-8 py-5 rounded-2xl bg-card border-2 border-border shadow-md">
            <div className="flex items-center gap-2">
              <span className="text-2xl">📦</span>
              <span className="font-bold text-foreground">Monthly Delivery</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-border" />
            <div className="flex items-center gap-2">
              <span className="text-2xl">🎨</span>
              <span className="font-bold text-foreground">Age-Appropriate</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-border" />
            <div className="flex items-center gap-2">
              <span className="text-2xl">📵</span>
              <span className="font-bold text-foreground">100% Screen-Free</span>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <WaveDivider color="fill-primary" className="opacity-5" />
      </div>
    </section>
  )
}
