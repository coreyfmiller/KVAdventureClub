'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Menu, X, Compass } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const navigateToSection = (id: string) => {
    setMobileMenuOpen(false)
    if (pathname === '/') {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      window.location.href = `/#${id}`
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-primary flex items-center justify-center">
              <Compass className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
            </div>
            <span className="text-xl md:text-2xl font-extrabold text-foreground">
              KV Adventure Club
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => navigateToSection('how-it-works')}
              className="text-muted-foreground hover:text-foreground font-medium transition-colors"
            >
              How it Works
            </button>
            <button 
              onClick={() => navigateToSection('whats-inside')}
              className="text-muted-foreground hover:text-foreground font-medium transition-colors"
            >
              {"What's Inside"}
            </button>
            <Button 
              onClick={() => navigateToSection('signup')}
              className="rounded-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-6"
            >
              Join the Club
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-3">
              <button 
                onClick={() => navigateToSection('how-it-works')}
                className="text-muted-foreground hover:text-foreground font-medium py-2 text-left"
              >
                How it Works
              </button>
              <button 
                onClick={() => navigateToSection('whats-inside')}
                className="text-muted-foreground hover:text-foreground font-medium py-2 text-left"
              >
                {"What's Inside"}
              </button>
              <Button 
                onClick={() => navigateToSection('signup')}
                className="rounded-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold w-full mt-2"
              >
                Join the Club
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
