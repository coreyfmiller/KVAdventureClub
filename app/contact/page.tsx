'use client'

import { useState } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Send, CheckCircle2 } from 'lucide-react'

const reasons = [
  { value: 'general', label: 'General inquiry' },
  { value: 'cancel', label: 'Cancel my subscription' },
  { value: 'remove-data', label: 'Remove my data' },
  { value: 'other', label: 'Other' },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    reason: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          access_key: '42404944-0465-4f35-bdad-6ad78cf5ca31',
          subject: `KV Adventure Club Contact: ${formData.reason === 'remove-data' ? 'Data Removal Request' : formData.reason === 'cancel' ? 'Cancellation Request' : 'General Inquiry'}`,
          from_name: 'KV Adventure Club - Contact Form',
          name: formData.name,
          email: formData.email,
          reason: formData.reason,
          message: formData.message,
        }),
      })

      const result = await response.json()
      if (result.success) {
        setSubmitted(true)
      } else {
        alert('Something went wrong. Please try again!')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      alert('Something went wrong. Please try again!')
    } finally {
      setIsSubmitting(false)
    }
  }

  const isFormValid = formData.name && formData.email && formData.reason && formData.message

  if (submitted) {
    return (
      <main className="min-h-screen">
        <Header />
        <section className="pt-28 pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto text-center">
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6 border-2 border-primary/30">
                <CheckCircle2 className="w-10 h-10 text-primary" />
              </div>
              <h2 className="text-3xl font-black text-foreground mb-4">
                Message Sent!
              </h2>
              <p className="text-muted-foreground text-lg">
                {"We've"} received your message and will get back to you as soon as possible.
              </p>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen">
      <Header />
      <section className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4">
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Have a question, want to cancel, or need your data removed? Let us know below.
            </p>
          </div>

          <div className="max-w-lg mx-auto">
            <form onSubmit={handleSubmit} className="bg-card rounded-3xl border-2 border-border shadow-xl p-8">
              <div className="space-y-6">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground font-semibold">
                    Your Name <span className="text-accent">*</span>
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Full name"
                    value={formData.name}
                    onChange={handleChange}
                    className="rounded-xl h-12 bg-background"
                    required
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-semibold">
                    Email Address <span className="text-accent">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="rounded-xl h-12 bg-background"
                    required
                  />
                </div>

                {/* Reason */}
                <div className="space-y-2">
                  <Label htmlFor="reason" className="text-foreground font-semibold">
                    Reason for Contact <span className="text-accent">*</span>
                  </Label>
                  <select
                    id="reason"
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    className="w-full h-12 px-4 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    required
                  >
                    <option value="">Select a reason</option>
                    {reasons.map(reason => (
                      <option key={reason.value} value={reason.value}>{reason.label}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground font-semibold">
                    Message <span className="text-accent">*</span>
                  </Label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder={formData.reason === 'remove-data' 
                      ? "Please include the name and address used when signing up so we can locate your information." 
                      : "How can we help?"}
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    required
                  />
                </div>
              </div>

              {/* Submit */}
              <div className="mt-8 pt-6 border-t border-border">
                <Button
                  type="submit"
                  disabled={!isFormValid || isSubmitting}
                  className="w-full rounded-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold h-14 text-lg shadow-lg shadow-accent/25 hover:-translate-y-0.5 hover:shadow-xl transition-all"
                >
                  <Send className="w-5 h-5 mr-2" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
