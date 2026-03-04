'use client'

import { useEffect, useRef, useState } from 'react'

declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (config: {
          region: string
          portalId: string
          formId: string
          target: string
        }) => void
      }
    }
  }
}

export default function HubSpotForm() {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)
  const formCreated = useRef(false)

  useEffect(() => {
    const createForm = () => {
      if (formCreated.current) return
      if (window.hbspt) {
        formCreated.current = true
        window.hbspt.forms.create({
          region: 'na2',
          portalId: '243529234',
          formId: '3b8e11ae-f4c2-4891-a59c-975cfd36e982',
          target: '#hubspot-form-container',
        })
        setIsLoading(false)
      }
    }

    // Check if script is already loaded
    const existingScript = document.querySelector(
      'script[src="https://js.hsforms.net/forms/v2.js"]'
    )

    if (existingScript) {
      createForm()
      return
    }

    const script = document.createElement('script')
    script.src = 'https://js.hsforms.net/forms/v2.js'
    script.charset = 'utf-8'
    script.defer = true
    script.onload = () => {
      createForm()
    }
    script.onerror = () => {
      setError(true)
      setIsLoading(false)
    }
    document.head.appendChild(script)
  }, [])

  if (error) {
    return (
      <div className="p-6 text-center text-gray-600">
        <p>
          Unable to load contact form. Please email us directly at
          contact@kfarig.com
        </p>
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
        id="hubspot-form-container"
        className="w-full"
        style={{ minHeight: isLoading ? '0' : '400px' }}
      />
    </div>
  )
}
