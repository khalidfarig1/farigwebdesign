import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import { Suspense } from "react"
import Script from 'next/script'

const GA_MEASUREMENT_ID = 'G-J3HXB3BFTY'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Khalid Farig - Web Design Agency in Northern Virginia | kfarig.com",
  description: "Professional web design and development services in Northern Virginia & the DMV area. Custom websites, e-commerce solutions, and SEO that drive results for local businesses.",
  keywords: "web design Northern Virginia, web developer DMV, web design Virginia, e-commerce development, SEO, responsive design, Khalid Farig, web design Washington DC area",
  authors: [{ name: "Khalid Farig" }],
  creator: "Khalid Farig",
  publisher: "Khalid Farig",
  openGraph: {
    title: "Khalid Farig - Web Design Agency in Northern Virginia",
    description: "Professional web design services in Northern Virginia & the DMV area. Custom websites that convert visitors into customers.",
    url: "https://kfarig.com",
    siteName: "Khalid Farig Web Design",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Khalid Farig - Web Design Agency in Northern Virginia",
    description: "Professional web design services in Northern Virginia & the DMV area.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.app'
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Khalid Farig Web Design',
  description: 'Professional web design and development services in Northern Virginia and the DMV area.',
  url: 'https://kfarig.com',
  telephone: '(703) 843-8544',
  email: 'contact@kfarig.com',
  areaServed: [
    { '@type': 'State', name: 'Virginia' },
    { '@type': 'City', name: 'Washington, DC' },
    { '@type': 'State', name: 'Maryland' },
  ],
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'VA',
    addressCountry: 'US',
  },
  openingHours: 'Mo-Fr 09:00-18:00',
  priceRange: '$1,500 - $6,500',
  sameAs: [
    'https://www.linkedin.com/in/khalidfarig',
    'https://www.instagram.com/kfarigdesign',
    'https://www.facebook.com/kfarigdesign',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Web Design Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom Web Design' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'E-commerce Development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Website Redesign' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO Integration' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mobile Optimization' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Website Maintenance' } },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <Suspense fallback={
          <div className="min-h-screen bg-white flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-navy-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <h2 className="text-xl font-semibold text-navy-900 mb-2">Loading...</h2>
              <p className="text-gray-600">Please wait while we load the content</p>
            </div>
          </div>
        }>
          {children}
        </Suspense>
      </body>
    </html>
  )
}
