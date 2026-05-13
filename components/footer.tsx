'use client'

import { Compass, Mail, TreePine } from 'lucide-react'

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-primary-foreground/20 flex items-center justify-center">
              <Compass className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <span className="text-xl font-extrabold block">KV Adventure Club</span>
              <span className="text-sm text-primary-foreground/70">Kennebecasis Valley</span>
            </div>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-primary-foreground/80 hover:text-primary-foreground font-medium transition-colors"
            >
              How it Works
            </button>
            <a 
              href="mailto:hello@kvadventureclub.ca"
              className="text-primary-foreground/80 hover:text-primary-foreground font-medium transition-colors flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Contact Us
            </a>
          </nav>

          {/* Decorative */}
          <div className="flex items-center gap-2 text-primary-foreground/60">
            <TreePine className="w-5 h-5" />
            <span className="text-sm">Made with love in the KV</span>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-primary-foreground/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} KV Adventure Club. All rights reserved.</p>
          <p>Screen-free adventures for curious kids.</p>
        </div>
      </div>
    </footer>
  )
}
