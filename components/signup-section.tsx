'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Rocket, CheckCircle2, Mail } from 'lucide-react'

type FormData = {
  childName: string
  mailingAddress: string
  ageRange: string
  interests: string
  otherInterests: string
  additionalComments: string
}

const initialFormData: FormData = {
  childName: '',
  mailingAddress: '',
  ageRange: '',
  interests: '',
  otherInterests: '',
  additionalComments: '',
}

const ageRanges = ['2-4', '5-8', '9-12', '13-16', '16+']

const interestOptions = [
  { value: 'girly', label: '"Girly" choices preferred' },
  { value: 'boyish', label: '"Boy-ish" choices preferred' },
  { value: 'mix', label: "Doesn't matter, mix it up!" },
  { value: 'other', label: 'Other' },
]

export function SignupSection() {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [consentChecked, setConsentChecked] = useState(false)

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
          subject: `New KV Adventure Club Signup: ${formData.childName}`,
          from_name: 'KV Adventure Club',
          childName: formData.childName,
          mailingAddress: formData.mailingAddress,
          ageRange: formData.ageRange,
          interests: formData.interests === 'other' ? formData.otherInterests : formData.interests,
          additionalComments: formData.additionalComments,
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

  const isFormValid = formData.childName && formData.mailingAddress && formData.ageRange && formData.interests && consentChecked

  if (submitted) {
    return (
      <section id="signup" className="relative py-20 md:py-28 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto text-center">
            <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6 border-2 border-primary/30">
              <CheckCircle2 className="w-12 h-12 text-primary" />
            </div>
            <h2 className="text-3xl font-black text-foreground mb-4">
              {"You're"} on the List!
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              {"We've"} received your signup. Get ready for {formData.childName}&apos;s first adventure kit to arrive soon!
            </p>
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent/10 text-accent font-semibold mb-6 border border-accent/20">
              <Mail className="w-5 h-5" />
              Adventure awaits!
            </div>
            <div>
              <Button
                onClick={() => {
                  setFormData(initialFormData)
                  setSubmitted(false)
                  setConsentChecked(false)
                }}
                variant="outline"
                className="rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold px-8 py-6 text-lg transition-all hover:-translate-y-0.5"
              >
                Sign Up Another Child
              </Button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="signup" className="relative py-20 md:py-28 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-4 border border-accent/20">
            Join the Club
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4">
            Start Your{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-primary">Adventure</span>
              <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 12" preserveAspectRatio="none">
                <path d="M2 8 C50 2, 150 2, 198 8" stroke="currentColor" strokeWidth="4" fill="none" className="text-primary/40" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Sign up below and {"we'll"} start preparing your first monthly adventure kit!
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          {/* Form */}
          <div className="relative">
            <form onSubmit={handleSubmit} className="bg-card rounded-3xl border-2 border-border shadow-xl p-8">
              <div className="space-y-6">
              {/* Child's Name */}
              <div className="space-y-2">
                <Label htmlFor="childName" className="text-foreground font-semibold">
                  {"Child's"} Name <span className="text-accent">*</span>
                </Label>
                <p className="text-xs text-muted-foreground">Mail will be addressed to this name</p>
                <Input
                  id="childName"
                  name="childName"
                  type="text"
                  placeholder="First name"
                  value={formData.childName}
                  onChange={handleChange}
                  className="rounded-xl h-12 bg-background"
                  required
                />
              </div>

              {/* Mailing Address */}
              <div className="space-y-2">
                <Label htmlFor="mailingAddress" className="text-foreground font-semibold">
                  Mailing Address <span className="text-accent">*</span>
                </Label>
                <textarea
                  id="mailingAddress"
                  name="mailingAddress"
                  placeholder="Full mailing address (KV area)"
                  value={formData.mailingAddress}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  required
                />
              </div>

              {/* Age Range */}
              <div className="space-y-2">
                <Label htmlFor="ageRange" className="text-foreground font-semibold">
                  {"Child's"} Age Range <span className="text-accent">*</span>
                </Label>
                <select
                  id="ageRange"
                  name="ageRange"
                  value={formData.ageRange}
                  onChange={handleChange}
                  className="w-full h-12 px-4 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  required
                >
                  <option value="">Select age range</option>
                  {ageRanges.map(range => (
                    <option key={range} value={range}>{range}</option>
                  ))}
                </select>
              </div>

              {/* Interests */}
              <div className="space-y-3">
                <Label className="text-foreground font-semibold">
                  Any favoured interests? <span className="text-accent">*</span>
                </Label>
                <p className="text-xs text-muted-foreground">Unicorns, Superheroes, etc.</p>
                <div className="space-y-2">
                  {interestOptions.map(option => (
                    <label 
                      key={option.value} 
                      className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                        formData.interests === option.value 
                          ? 'border-primary bg-primary/5' 
                          : 'border-input bg-background hover:border-primary/50'
                      }`}
                    >
                      <input
                        type="radio"
                        name="interests"
                        value={option.value}
                        checked={formData.interests === option.value}
                        onChange={handleChange}
                        className="w-4 h-4 text-primary accent-primary"
                      />
                      <span className="text-foreground">{option.label}</span>
                    </label>
                  ))}
                </div>
                
                {/* Other interests text field */}
                {formData.interests === 'other' && (
                  <Input
                    name="otherInterests"
                    type="text"
                    placeholder="Please specify interests..."
                    value={formData.otherInterests}
                    onChange={handleChange}
                    className="rounded-xl h-12 bg-background mt-2"
                  />
                )}
              </div>

              {/* Additional Comments */}
              <div className="space-y-2">
                <Label htmlFor="additionalComments" className="text-foreground font-semibold">
                  Additional Children/Comments to add?
                </Label>
                <textarea
                  id="additionalComments"
                  name="additionalComments"
                  placeholder="Any other info we should know? (optional)"
                  value={formData.additionalComments}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                />
              </div>
            </div>

            {/* Consent Checkbox */}
            <div className="mt-6">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={consentChecked}
                  onChange={(e) => setConsentChecked(e.target.checked)}
                  className="w-5 h-5 mt-0.5 rounded accent-primary flex-shrink-0"
                />
                <span className="text-sm text-muted-foreground leading-relaxed">
                  I am the parent/guardian and consent to this information being used to mail 
                  adventure kits to my child. I have read the{' '}
                  <a href="/privacy" target="_blank" className="text-primary hover:underline font-medium">
                    Privacy Policy
                  </a>.
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <div className="mt-6 pt-6 border-t border-border">
              <Button
                type="submit"
                disabled={!isFormValid || isSubmitting}
                className="w-full rounded-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold h-14 text-lg shadow-lg shadow-accent/25 hover:-translate-y-0.5 hover:shadow-xl transition-all"
              >
                <Rocket className="w-5 h-5 mr-2" />
                {isSubmitting ? 'Sending...' : 'Start the Adventure'}
              </Button>
            </div>
          </form>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span>No spam, ever</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span>KV delivery only</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
