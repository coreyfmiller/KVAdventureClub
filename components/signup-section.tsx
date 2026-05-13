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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
  }

  const isFormValid = formData.childName && formData.mailingAddress && formData.ageRange && formData.interests

  if (submitted) {
    return (
      <section id="signup" className="py-20 md:py-28 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-3xl font-black text-foreground mb-4">
              {"You're"} on the List!
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              {"We've"} received your signup. Get ready for {formData.childName}&apos;s first adventure kit to arrive soon!
            </p>
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent/10 text-accent font-semibold">
              <Mail className="w-5 h-5" />
              Adventure awaits!
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="signup" className="py-20 md:py-28 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-4">
            Join the Club
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4">
            Start Your <span className="text-primary">Adventure</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Sign up below and {"we'll"} start preparing your first monthly adventure kit!
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-card rounded-3xl border border-border shadow-xl p-8">
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

            {/* Submit Button */}
            <div className="mt-8 pt-6 border-t border-border">
              <Button
                type="submit"
                disabled={!isFormValid}
                className="w-full rounded-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold h-14 text-lg shadow-lg shadow-accent/25"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Start the Adventure
              </Button>
            </div>
          </form>

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
