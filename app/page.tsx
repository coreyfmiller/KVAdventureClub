import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { HowItWorksSection } from '@/components/how-it-works-section'
import { WhatsInsideSection } from '@/components/whats-inside-section'
import { SignupSection } from '@/components/signup-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <HowItWorksSection />
      <WhatsInsideSection />
      <SignupSection />
      <Footer />
    </main>
  )
}
