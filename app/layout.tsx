import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Khalid Farig - Professional Web Design Agency | kfarig.com",
  description: "Professional web design and development services by Khalid Farig. Custom websites, e-commerce solutions, and digital marketing that drive results.",
  keywords: "web design, web development, e-commerce, SEO, responsive design, Khalid Farig",
  authors: [{ name: "Khalid Farig" }],
  creator: "Khalid Farig",
  publisher: "Khalid Farig",
  openGraph: {
    title: "Khalid Farig - Professional Web Design Agency",
    description: "Transform your business with professional web design services. Custom websites that convert visitors into customers.",
    url: "https://kfarig.com",
    siteName: "Khalid Farig Web Design",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Khalid Farig - Professional Web Design Agency",
    description: "Transform your business with professional web design services.",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
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
