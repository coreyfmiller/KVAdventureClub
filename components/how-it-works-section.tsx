import { ClipboardList, Package, Compass } from 'lucide-react'
import { WaveDivider } from '@/components/wave-divider'

const steps = [
  {
    icon: ClipboardList,
    title: 'Sign Up',
    description: 'Fill out our quick form with your info and your adventurer\u2019s age so we can customize their experience.',
    color: 'text-primary',
    bgColor: 'bg-primary/10',
    borderColor: 'border-primary/20',
  },
  {
    icon: Package,
    title: 'Receive Your Kit',
    description: 'Every month, a surprise-filled envelope arrives at your door, packed with screen-free activities.',
    color: 'text-accent',
    bgColor: 'bg-accent/10',
    borderColor: 'border-accent/20',
  },
  {
    icon: Compass,
    title: 'Explore & Discover',
    description: 'Head outside to complete missions, learn about the KV, and create unforgettable memories!',
    color: 'text-sky',
    bgColor: 'bg-sky/10',
    borderColor: 'border-sky/20',
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative py-20 md:py-28 bg-cream/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-sky/10 text-sky font-semibold text-sm mb-4 border border-sky/20">
            Simple & Fun
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Getting started with KV Adventure Club is as easy as 1-2-3!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={step.title} className="relative text-center group">
                  {/* Connector line */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 border-t-2 border-dashed border-border" />
                  )}
                  
                  {/* Step card */}
                  <div className={`relative z-10 w-28 h-28 rounded-3xl bg-card border-2 ${step.borderColor} shadow-lg flex flex-col items-center justify-center mx-auto mb-6 group-hover:-translate-y-1 group-hover:shadow-xl transition-all`}>
                    <div className={`w-16 h-16 rounded-2xl ${step.bgColor} flex items-center justify-center`}>
                      <Icon className={`w-8 h-8 ${step.color}`} />
                    </div>
                    <span className="absolute -top-3 -right-3 w-9 h-9 rounded-full bg-foreground text-background font-black text-sm flex items-center justify-center shadow-md">
                      {index + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              )
            })}
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
