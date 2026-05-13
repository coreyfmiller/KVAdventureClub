'use client'

import { Button } from '@/components/ui/button'
import { Sparkles, Mail } from 'lucide-react'

export function HeroSection() {
  const scrollToSignup = () => {
    const element = document.getElementById('signup')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-24 h-24 rounded-full bg-sky/20 blur-2xl" />
        <div className="absolute top-40 right-20 w-32 h-32 rounded-full bg-sunset/20 blur-2xl" />
        <div className="absolute bottom-20 left-1/4 w-40 h-40 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-40 right-10 w-28 h-28 rounded-full bg-sky/15 blur-2xl" />
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-8">
            <Sparkles className="w-4 h-4" />
            <span>For Kids & Teens in the Kennebecasis Valley</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-foreground leading-tight mb-6">
            <span className="text-primary">Adventure</span> in Your{' '}
            <span className="relative inline-block">
              <span className="relative z-10">Mailbox</span>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-accent/30 -z-10 rounded" />
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Every month, receive screen-free missions, exciting scavenger hunts, 
            collectible stickers, and local discoveries—all delivered right to your door!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button 
              onClick={scrollToSignup}
              size="lg"
              className="rounded-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 py-6 text-lg shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 transition-all hover:-translate-y-0.5"
            >
              <Mail className="w-5 h-5 mr-2" />
              Start the Adventure
            </Button>
            <Button 
              variant="outline"
              size="lg"
              onClick={() => {
                const element = document.getElementById('whats-inside')
                if (element) element.scrollIntoView({ behavior: 'smooth' })
              }}
              className="rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold px-8 py-6 text-lg transition-all"
            >
              See {"What's"} Inside
            </Button>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              { icon: '🗺️', label: 'Scavenger Hunts' },
              { icon: '🔮', label: 'Secret Missions' },
              { icon: '⭐', label: 'Collectible Stickers' },
              { icon: '🍪', label: 'Easy Recipes' },
            ].map((item) => (
              <div 
                key={item.label}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border shadow-sm"
              >
                <span className="text-lg">{item.icon}</span>
                <span className="font-semibold text-foreground text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  )
}
