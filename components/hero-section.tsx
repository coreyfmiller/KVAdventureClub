'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Mail } from 'lucide-react'
import { FloatingDoodles } from '@/components/decorative-elements'
import { WaveDivider } from '@/components/wave-divider'

export function HeroSection() {
  const scrollToSignup = () => {
    const element = document.getElementById('signup')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative h-screen flex items-start justify-center overflow-hidden pt-16">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-sky/20 blur-3xl" />
        <div className="absolute top-40 right-20 w-40 h-40 rounded-full bg-sunset/20 blur-3xl" />
        <div className="absolute bottom-20 left-1/4 w-48 h-48 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-40 right-10 w-36 h-36 rounded-full bg-sky/15 blur-3xl" />
        <div className="absolute top-1/3 left-1/2 w-64 h-64 rounded-full bg-accent/5 blur-3xl" />
      </div>

      {/* Floating doodles */}
      <FloatingDoodles />

      <div className="container mx-auto px-4 pt-0">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-0 flex justify-center">
            <Image
              src="/logo.png"
              alt="KV Adventure Club"
              width={500}
              height={500}
              className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[26rem] lg:h-[26rem] object-contain drop-shadow-lg"
              priority
            />
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-tight mb-0">
            <span className="text-primary">Adventure</span> in Your{' '}
            <span className="relative inline-block">
              <span className="relative z-10">Mailbox</span>
              <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 12" preserveAspectRatio="none">
                <path d="M2 8 C50 2, 150 2, 198 8" stroke="currentColor" strokeWidth="4" fill="none" className="text-accent/50" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-3 leading-normal mt-1">
            A monthly snail-mail subscription packed with screen-free missions, 
            scavenger hunts, collectible stickers, and local discoveries for kids in the Kennebecasis Valley.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-3">
            <Button 
              onClick={scrollToSignup}
              size="lg"
              className="rounded-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 py-6 text-lg shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 transition-all hover:-translate-y-1 hover:scale-105"
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
              className="rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold px-8 py-6 text-lg transition-all hover:-translate-y-0.5"
            >
              See {"What's"} Inside
            </Button>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-3">
            {[
              { icon: '🗺️', label: 'Scavenger Hunts', rotate: '-rotate-1' },
              { icon: '🔮', label: 'Secret Missions', rotate: 'rotate-1' },
              { icon: '⭐', label: 'Collectible Stickers', rotate: '-rotate-2' },
              { icon: '🍪', label: 'Easy Recipes', rotate: 'rotate-1' },
            ].map((item) => (
              <div 
                key={item.label}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-card border-2 border-border shadow-md hover:shadow-lg hover:-translate-y-1 transition-all cursor-default ${item.rotate}`}
              >
                <span className="text-xl">{item.icon}</span>
                <span className="font-bold text-foreground text-sm">{item.label}</span>
              </div>
            ))}
          </div>

          {/* Scroll indicator */}
          <div className="mt-3 flex flex-col items-center gap-1 animate-bounce">
            <span className="text-sm text-muted-foreground font-medium">Scroll to explore</span>
            <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>

      {/* Wave divider at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <WaveDivider color="fill-secondary/50" />
      </div>
    </section>
  )
}
