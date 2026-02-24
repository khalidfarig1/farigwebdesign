'use client'

import { useEffect } from 'react'

export default function CalendlyWidget() {
  useEffect(() => {
    // Load Calendly script if not already loaded
    if (!document.querySelector('script[src*="assets.calendly.com"]')) {
      const script = document.createElement('script')
      script.src = 'https://assets.calendly.com/assets/external/widget.js'
      script.async = true
      document.head.appendChild(script)
    }
  }, [])

  return (
    <div 
      className="calendly-inline-widget w-full" 
      data-url="https://calendly.com/khalidfarag87/30min" 
      style={{ minWidth: '320px', height: '700px' }}
    />
  )
}
