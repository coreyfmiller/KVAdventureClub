import type { Metadata, Viewport } from 'next'
import { Nunito } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const nunito = Nunito({ 
  subsets: ["latin"],
  variable: '--font-nunito',
  weight: ['400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  title: 'KV Adventure Club | Adventure in Your Mailbox',
  description: 'A monthly snail mail subscription for kids and teens in the Kennebecasis Valley. Screen-free missions, scavenger hunts, local facts, and more delivered to your door!',
  keywords: ['kids subscription', 'snail mail', 'Kennebecasis Valley', 'adventure club', 'screen-free activities', 'scavenger hunts'],
}

export const viewport: Viewport = {
  themeColor: '#3d7a4a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${nunito.className} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
