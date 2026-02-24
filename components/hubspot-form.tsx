'use client'

import { useEffect, useState } from 'react'

export default function HubSpotForm() {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    // Check if script is already loaded
    const existingScript = document.querySelector('script[src*="js-na2.hsforms.net/forms/embed/243529234.js"]')
    
    if (!existingScript) {
      const script = document.createElement('script')
      script.src = 'https://js-na2.hsforms.net/forms/embed/243529234.js'
      script.defer = true
      script.onload = () => {
        setIsLoading(false)
      }
      script.onerror = () => {
        setError(true)
        setIsLoading(false)
      }
      document.head.appendChild(script)
    } else {
      setIsLoading(false)
    }

    // Cleanup function
    return () => {
      // Optional: Remove script on unmount if needed
    }
  }, [])

  if (error) {
    return (
      <div className="p-6 text-center text-gray-600">
        <p>Unable to load contact form. Please email us directly at contact@kfarig.com</p>
      </div>
    )
  }

  return (
    <div className="w-full">
      {isLoading && (
        <div className="flex items-center justify-center p-8">
          <div className="w-8 h-8 border-4 border-navy-600 border-t-transparent rounded-full animate-spin"></div>
          <span className="ml-3 text-gray-600">Loading contact form...</span>
        </div>
      )}
      <div 
        className="hs-form-frame w-full" 
        data-region="na2" 
        data-form-id="3b8e11ae-f4c2-4891-a59c-975cfd36e982" 
        data-portal-id="243529234"
        style={{ minHeight: isLoading ? '0' : '400px' }}
      />
    </div>
  )
}
