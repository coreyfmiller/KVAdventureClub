export function FloatingDoodles({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none -z-10 ${className}`}>
      {/* Stars */}
      <svg className="absolute top-[15%] left-[8%] w-6 h-6 text-accent/40 rotate-12" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
      <svg className="absolute top-[25%] right-[12%] w-4 h-4 text-sky/50 -rotate-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
      <svg className="absolute bottom-[30%] left-[5%] w-5 h-5 text-primary/30 rotate-45" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>

      {/* Leaves */}
      <svg className="absolute top-[40%] right-[6%] w-8 h-8 text-primary/25 rotate-[30deg]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17,8C8,10,5.9,16.17,3.82,21.34L5.71,22l1-2.3A4.49,4.49,0,0,0,8,20a4,4,0,0,0,4-4,4,4,0,0,0-4-4,4.49,4.49,0,0,0-1.29.19A13.08,13.08,0,0,1,17,8Z" />
      </svg>
      <svg className="absolute bottom-[20%] right-[15%] w-6 h-6 text-primary/20 -rotate-[20deg]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17,8C8,10,5.9,16.17,3.82,21.34L5.71,22l1-2.3A4.49,4.49,0,0,0,8,20a4,4,0,0,0,4-4,4,4,0,0,0-4-4,4.49,4.49,0,0,0-1.29.19A13.08,13.08,0,0,1,17,8Z" />
      </svg>

      {/* Compass */}
      <svg className="absolute top-[60%] left-[10%] w-7 h-7 text-sky/25 rotate-[15deg]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill="currentColor" opacity="0.5" />
      </svg>

      {/* Trail dots */}
      <div className="absolute top-[70%] left-[20%] flex gap-2 rotate-[25deg]">
        <div className="w-1.5 h-1.5 rounded-full bg-accent/30" />
        <div className="w-1.5 h-1.5 rounded-full bg-accent/25" />
        <div className="w-1.5 h-1.5 rounded-full bg-accent/20" />
        <div className="w-1.5 h-1.5 rounded-full bg-accent/15" />
      </div>
      <div className="absolute top-[35%] right-[25%] flex gap-2 -rotate-[15deg]">
        <div className="w-1.5 h-1.5 rounded-full bg-primary/25" />
        <div className="w-1.5 h-1.5 rounded-full bg-primary/20" />
        <div className="w-1.5 h-1.5 rounded-full bg-primary/15" />
      </div>

      {/* Map pin */}
      <svg className="absolute bottom-[45%] right-[8%] w-5 h-5 text-accent/30 rotate-[-10deg]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
      </svg>
    </div>
  )
}
