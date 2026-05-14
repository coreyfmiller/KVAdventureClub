'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Mail } from 'lucide-react'
import { FloatingDoodles } from '@/components/decorative-elements'

export function HeroSection() {
  const scrollToSignup = () => {
    const element = document.getElementById('signup')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative h-screen flex flex-col items-center justify-between bg-background pt-20 pb-6">
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

      {/* Main content */}
      <div className="flex-1 flex items-center pb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Logo */}
            <div className="-mb-2 flex justify-center">
              <Image
                src="/logo.png"
                alt="KV Adventure Club"
                width={500}
                height={500}
                className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 object-contain drop-shadow-lg"
                priority
              />
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-tight mb-2">
              <span className="text-primary">Adventure</span> in Your{' '}
              <span className="relative inline-block">
                <span className="relative z-10">Mailbox</span>
                <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 12" preserveAspectRatio="none">
                  <path d="M2 8 C50 2, 150 2, 198 8" stroke="currentColor" strokeWidth="4" fill="none" className="text-accent/50" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-xl mx-auto mb-4 leading-normal">
              A monthly snail-mail subscription packed with screen-free missions, 
              scavenger hunts, collectible stickers, and local discoveries for kids in the Kennebecasis Valley.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button 
                onClick={scrollToSignup}
                size="lg"
                className="rounded-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 py-5 text-base md:text-lg shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 transition-all hover:-translate-y-1 hover:scale-105"
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
                className="rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold px-8 py-5 text-base md:text-lg transition-all hover:-translate-y-0.5"
              >
                See {"What's"} Inside
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - pinned to bottom */}
      <div className="flex flex-col items-center gap-1 animate-bounce mb-2">
        <span className="text-sm text-muted-foreground font-medium">Scroll to explore</span>
        <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
