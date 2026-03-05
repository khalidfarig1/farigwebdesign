import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, CheckCircle, Globe, Smartphone, Search, ShoppingCart, Palette, Settings, Award, Clock, ArrowRight, Quote, MapPin } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import CalendlyWidget from "@/components/calendly-widget"
import HubSpotForm from "@/components/hubspot-form"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Image
                src="/kfarig-logo.svg"
                alt="KFarig Web Design & Development"
                width={180}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#home" className="text-gray-700 hover:text-navy-600 transition-colors">Home</Link>
              <Link href="#services" className="text-gray-700 hover:text-navy-600 transition-colors">Services</Link>
              <Link href="#pricing" className="text-gray-700 hover:text-navy-600 transition-colors">Pricing</Link>
              <Link href="#portfolio" className="text-gray-700 hover:text-navy-600 transition-colors">Portfolio</Link>
              <Link href="#about" className="text-gray-700 hover:text-navy-600 transition-colors">About</Link>
              <Link href="#contact" className="text-gray-700 hover:text-navy-600 transition-colors">Contact</Link>
            </div>
            <Button className="bg-navy-600 hover:bg-navy-700" asChild>
              <a href="https://calendly.com/khalidfarag87/30min" target="_blank" rel="noopener noreferrer">
                Schedule Meeting
              </a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-navy-50 to-blue-50">
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-navy-100 text-navy-800 hover:bg-navy-200">
                  Northern Virginia's Web Design Expert
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-navy-900 leading-tight">
                  Web Design That Grows
                  <span className="text-blue-600"> Local Businesses</span> in the DMV
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  I help restaurants, healthcare practices, and small businesses across Northern Virginia
                  and the DC metro area get websites that actually bring in customers — not just look pretty.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-navy-600 hover:bg-navy-700 text-lg px-8 py-3" asChild>
                  <a href="https://calendly.com/khalidfarag87/30min" target="_blank" rel="noopener noreferrer">
                    Schedule Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-navy-600 text-navy-600 hover:bg-navy-50 text-lg px-8 py-3" asChild>
                  <a href="#portfolio">
                    View Portfolio
                  </a>
                </Button>
              </div>
              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-navy-900">150+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-navy-900">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-navy-900">100%</div>
                  <div className="text-sm text-gray-600">Client Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/web-designer-laptop.png"
                  alt="Professional Web Designer"
                  width={500}
                  height={600}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-blue-400 to-navy-600 rounded-2xl opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 mb-4">
              Our Services
            </Badge>
            <h2 className="text-4xl font-bold text-navy-900 mb-4">
              Web Design Services for DMV Businesses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to launch, I provide end-to-end web design and development
              for businesses across Northern Virginia, Washington DC, and Maryland.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <Palette className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl text-navy-900">Custom Web Design</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center leading-relaxed">
                  Unique, responsive websites tailored to your brand and business needs. 
                  Every design is crafted from scratch to reflect your company's personality and goals.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  <ShoppingCart className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl text-navy-900">E-commerce Development</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center leading-relaxed">
                  Complete online store creation with secure payment integration, inventory management, 
                  and user-friendly shopping experiences that drive sales.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                  <Globe className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl text-navy-900">Website Redesign</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center leading-relaxed">
                  Modernizing existing websites for better performance, user experience, 
                  and conversion rates while maintaining your brand identity.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                  <Smartphone className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-xl text-navy-900">Mobile Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center leading-relaxed">
                  Ensuring your website works perfectly on all devices with responsive design 
                  that provides optimal viewing experience across smartphones, tablets, and desktops.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                  <Search className="h-8 w-8 text-red-600" />
                </div>
                <CardTitle className="text-xl text-navy-900">SEO Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center leading-relaxed">
                  Building websites with search engine optimization in mind, ensuring your site 
                  ranks well and attracts organic traffic from day one.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-200 transition-colors">
                  <Settings className="h-8 w-8 text-teal-600" />
                </div>
                <CardTitle className="text-xl text-navy-900">Website Maintenance</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center leading-relaxed">
                  Ongoing support and updates for existing sites, including security updates, 
                  content changes, and performance optimization to keep your site running smoothly.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-navy-100 text-navy-800 hover:bg-navy-200 mb-4">
              Your Trusted Partners
            </Badge>
            <h2 className="text-4xl font-bold text-navy-900 mb-8">
              Highly Motivated Team with Innovative Ideas
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <p className="text-xl text-gray-600 leading-relaxed">
                We love what we do and therefore come up with the best possible solutions to help you set and grow online quickly. We are your trusted partners you can count on.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Collaborative approach to every project</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Innovative solutions tailored to your needs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Dedicated support throughout the process</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Results-driven methodology</span>
                </div>
              </div>
              <Button size="lg" className="bg-navy-600 hover:bg-navy-700" asChild>
                <a href="https://calendly.com/khalidfarag87/30min" target="_blank" rel="noopener noreferrer">
                  Work With Our Team
                </a>
              </Button>
            </div>
            
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-800 hover:bg-green-200 mb-4">
              Transparent Pricing
            </Badge>
            <h2 className="text-4xl font-bold text-navy-900 mb-4">
              Choose the Perfect Package for Your Business
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Clear, upfront pricing with no hidden fees. Every package includes everything you need 
              to launch a successful website.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter Package */}
            <Card className="relative border-2 border-gray-200 hover:border-blue-300 transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl text-navy-900 mb-2">Starter Package</CardTitle>
                <div className="text-4xl font-bold text-navy-900 mb-2">$1,500</div>
                <CardDescription className="text-gray-600">Perfect for small businesses and startups</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">5-page responsive website</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Basic SEO setup</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Contact forms</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Mobile optimization</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">30 days support</span>
                  </div>
                </div>
                <Button className="w-full bg-navy-600 hover:bg-navy-700 mt-6" asChild>
                  <a href="https://calendly.com/khalidfarag87/30min" target="_blank" rel="noopener noreferrer">
                    Schedule Consultation
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Professional Package */}
            <Card className="relative border-2 border-blue-500 hover:border-blue-600 transition-all duration-300 shadow-xl">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-blue-500 text-white px-4 py-1">Most Popular</Badge>
              </div>
              <CardHeader className="text-center pb-4 pt-8">
                <CardTitle className="text-2xl text-navy-900 mb-2">Professional Package</CardTitle>
                <div className="text-4xl font-bold text-navy-900 mb-2">$3,500</div>
                <CardDescription className="text-gray-600">Ideal for growing businesses</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Up to 10 pages</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">E-commerce functionality (up to 50 products)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Advanced SEO</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Social media integration</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Google Analytics setup</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Content management system</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">90 days support</span>
                  </div>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 mt-6" asChild>
                  <a href="https://calendly.com/khalidfarag87/30min" target="_blank" rel="noopener noreferrer">
                    Schedule Consultation
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise Package */}
            <Card className="relative border-2 border-gray-200 hover:border-purple-300 transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl text-navy-900 mb-2">Enterprise Package</CardTitle>
                <div className="text-4xl font-bold text-navy-900 mb-2">$6,500</div>
                <CardDescription className="text-gray-600">For large businesses and complex projects</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Unlimited pages</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Advanced e-commerce (unlimited products)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Custom features and integrations</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Premium SEO package</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Multi-language support</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">6 months support</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Priority updates and maintenance</span>
                  </div>
                </div>
                <Button className="w-full bg-purple-600 hover:bg-purple-700 mt-6" asChild>
                  <a href="https://calendly.com/khalidfarag87/30min" target="_blank" rel="noopener noreferrer">
                    Schedule Consultation
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200 mb-4">
              Our Work
            </Badge>
            <h2 className="text-4xl font-bold text-navy-900 mb-4">
              Recent Projects & Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take a look at some of our recent work and see how we've helped businesses 
              transform their online presence and achieve their goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* The Gathering Spoon */}
            <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <Image
                  src="/gathering-spoon-website-screenshot.png"
                  alt="The Gathering Spoon Website"
                  width={500}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-navy-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <CardTitle className="text-xl text-navy-900">The Gathering Spoon</CardTitle>
                  <Badge variant="secondary">Restaurant</Badge>
                </div>
                <CardDescription className="text-gray-600 mb-4 leading-relaxed">
                  Built a custom reservation system and menu showcase for this local restaurant.
                  Within 3 months of launch, online reservations increased by 150% compared to their previous site.
                </CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="text-xs">React</Badge>
                  <Badge variant="outline" className="text-xs">E-commerce</Badge>
                  <Badge variant="outline" className="text-xs">Responsive</Badge>
                  <Badge variant="outline" className="text-xs">SEO</Badge>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
                  <Quote className="h-4 w-4" />
                  <span className="italic">{"\"Khalid transformed our online presence completely. Our bookings increased dramatically!\""}</span>
                </div>
                <Button variant="outline" className="w-full group-hover:bg-navy-600 group-hover:text-white transition-colors" asChild>
                  <a href="https://thegatheringspoon.store" target="_blank" rel="noopener noreferrer">
                    View Live Site
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Peak Performance Gym */}
            <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <Image
                  src="/peak-performance-gym-screenshot.png"
                  alt="Peak Performance Gym Website"
                  width={500}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-navy-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <CardTitle className="text-xl text-navy-900">Peak Performance Gym</CardTitle>
                  <Badge variant="secondary">Fitness</Badge>
                </div>
                <CardDescription className="text-gray-600 mb-4 leading-relaxed">
                  Designed a membership portal with class scheduling and trainer profiles.
                  The gym saw a 200% increase in online sign-ups within the first 6 months after launch.
                </CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="text-xs">Next.js</Badge>
                  <Badge variant="outline" className="text-xs">Booking System</Badge>
                  <Badge variant="outline" className="text-xs">Mobile App</Badge>
                  <Badge variant="outline" className="text-xs">Analytics</Badge>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
                  <Quote className="h-4 w-4" />
                  <span className="italic">{"\"The new website brought in more members than we ever imagined possible.\""}</span>
                </div>
                <Button variant="outline" className="w-full group-hover:bg-navy-600 group-hover:text-white transition-colors" asChild>
                  <a href="https://peakperformancegym.store" target="_blank" rel="noopener noreferrer">
                    View Live Site
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Portrait Perfection Plus */}
            <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <Image
                  src="/portrait-perfection-plus-screenshot.jpeg"
                  alt="Portrait Perfection Plus Website"
                  width={500}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-navy-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <CardTitle className="text-xl text-navy-900">Portrait Perfection Plus</CardTitle>
                  <Badge variant="secondary">Photography</Badge>
                </div>
                <CardDescription className="text-gray-600 mb-4 leading-relaxed">
                  Created a visual portfolio with an integrated booking system and print ordering.
                  Client bookings jumped 180% in the first quarter after the redesign went live.
                </CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="text-xs">Portfolio</Badge>
                  <Badge variant="outline" className="text-xs">Gallery</Badge>
                  <Badge variant="outline" className="text-xs">E-commerce</Badge>
                  <Badge variant="outline" className="text-xs">CMS</Badge>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
                  <Quote className="h-4 w-4" />
                  <span className="italic">{"\"My portfolio has never looked better. Clients love the new booking system!\""}</span>
                </div>
                <Button variant="outline" className="w-full group-hover:bg-navy-600 group-hover:text-white transition-colors" asChild>
                  <a href="https://portraitperfectionplus.store" target="_blank" rel="noopener noreferrer">
                    View Live Site
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Smile Bright Dentistry */}
            <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <Image
                  src="/smile-bright-dentistry-screenshot.png"
                  alt="Smile Bright Dentistry Website"
                  width={500}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-navy-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <CardTitle className="text-xl text-navy-900">Smile Bright Dentistry</CardTitle>
                  <Badge variant="secondary">Healthcare</Badge>
                </div>
                <CardDescription className="text-gray-600 mb-4 leading-relaxed">
                  Built an appointment scheduling system with a patient portal and service directory.
                  New patient inquiries through the website increased by 120% over the following 4 months.
                </CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="text-xs">Healthcare</Badge>
                  <Badge variant="outline" className="text-xs">Appointments</Badge>
                  <Badge variant="outline" className="text-xs">Patient Portal</Badge>
                  <Badge variant="outline" className="text-xs">HIPAA</Badge>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
                  <Quote className="h-4 w-4" />
                  <span className="italic">{"\"Our new website has brought in so many new patients. Excellent work!\""}</span>
                </div>
                <Button variant="outline" className="w-full group-hover:bg-navy-600 group-hover:text-white transition-colors" asChild>
                  <a href="https://smilebrightdentistry.store" target="_blank" rel="noopener noreferrer">
                    View Live Site
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <Badge className="bg-navy-100 text-navy-800 hover:bg-navy-200 mb-4">
                  About Khalid Farig
                </Badge>
                <h2 className="text-4xl font-bold text-navy-900 mb-6">
                  15+ Years Building Websites for Virginia Businesses
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Hi, I'm Khalid Farig, a web designer based in Northern Virginia with over 15 years of experience
                  helping local businesses get online and grow. I've built websites for restaurants, dental practices,
                  fitness centers, and photographers across the DMV area.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  What sets me apart: I don't just make your website look good — I make sure it brings in
                  customers. Every site I build is optimized for search engines, loads fast on mobile, and is
                  designed to turn visitors into paying clients.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-navy-900">Specialties</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-gray-700">Responsive Web Design</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-gray-700">E-commerce Solutions</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-gray-700">SEO Optimization</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-gray-700">Performance Optimization</span>
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-navy-900">Certifications</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Award className="h-4 w-4 text-blue-500" />
                      <span className="text-gray-700">Google Analytics Certified</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Award className="h-4 w-4 text-blue-500" />
                      <span className="text-gray-700">React Developer Certified</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Award className="h-4 w-4 text-blue-500" />
                      <span className="text-gray-700">SEO Specialist</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-navy-900 mb-3">My Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To help businesses succeed online by creating websites that combine beautiful design 
                  with powerful functionality. I'm committed to delivering exceptional results that 
                  exceed expectations and drive real business growth.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/khalid-farig-professional-headshot.png"
                  alt="Khalid Farig - Web Designer"
                  width={500}
                  height={600}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-full h-full bg-gradient-to-tr from-blue-400 to-navy-600 rounded-2xl opacity-20"></div>
              
              {/* Stats Cards */}
              <div className="absolute -right-8 top-16 bg-white p-4 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-navy-900">150+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
              </div>
              
              <div className="absolute -left-8 bottom-32 bg-white p-4 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-navy-900">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-800 hover:bg-green-200 mb-4">
              Get In Touch
            </Badge>
            <h2 className="text-4xl font-bold text-navy-900 mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Let's discuss your project and see how I can help bring your vision to life. 
              Get a free consultation and quote today.
            </p>
          </div>

          {/* Contact Info Bar */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                <Phone className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <div className="font-semibold text-navy-900">Phone</div>
                <div className="text-gray-600">(703) 843-8544</div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                <Mail className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <div className="font-semibold text-navy-900">Email</div>
                <div className="text-gray-600">contact@kfarig.com</div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center shrink-0">
                <MapPin className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <div className="font-semibold text-navy-900">Location</div>
                <div className="text-gray-600">Northern Virginia, DMV Area</div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center shrink-0">
                <Clock className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <div className="font-semibold text-navy-900">Hours</div>
                <div className="text-gray-600">Mon - Fri: 9AM - 6PM EST</div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Send a Message Form */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-navy-900">Send a Message</CardTitle>
                <CardDescription>
                  Tell me about your project and I'll get back to you within 24 hours with a free quote.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <HubSpotForm />
              </CardContent>
            </Card>

            {/* Schedule a Call */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-navy-900">Schedule a Free Call</CardTitle>
                <CardDescription>
                  Prefer to talk? Book a 30-minute consultation to discuss your project.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CalendlyWidget />
              </CardContent>
            </Card>
          </div>

          {/* Why Choose Me */}
          <div className="mt-16 bg-gray-50 p-8 rounded-2xl">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
                <div className="font-semibold text-navy-900">Free Consultation</div>
                <div className="text-sm text-gray-600">No obligation quote</div>
              </div>
              <div>
                <Clock className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                <div className="font-semibold text-navy-900">24-Hour Response</div>
                <div className="text-sm text-gray-600">Fast turnaround</div>
              </div>
              <div>
                <Award className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                <div className="font-semibold text-navy-900">100% Satisfaction</div>
                <div className="text-sm text-gray-600">Guaranteed results</div>
              </div>
              <div>
                <Settings className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                <div className="font-semibold text-navy-900">Ongoing Support</div>
                <div className="text-sm text-gray-600">After launch care</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Image
                  src="/kfarig-logo.svg"
                  alt="KFarig Web Design & Development"
                  width={160}
                  height={36}
                  className="h-8 w-auto brightness-0 invert"
                />
              </div>
              <p className="text-gray-300 leading-relaxed">
                Professional web design and development services for businesses in Northern Virginia, Washington DC, and the DMV area.
              </p>
              <div className="flex space-x-4 mt-4">
                <a href="https://www.linkedin.com/in/khalidfarig" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href="https://www.instagram.com/kfarigdesign" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
                <a href="https://www.facebook.com/kfarigdesign" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="#" className="hover:text-white transition-colors">Web Design</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">E-commerce</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Website Redesign</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">SEO Services</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="#about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="#portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
                <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="#contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-300">
                <div>(703) 843-8544</div>
                <div>contact@kfarig.com</div>
                <div>Northern Virginia, DMV Area</div>
                <div>Mon - Fri: 9AM - 6PM EST</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; {new Date().getFullYear()} Khalid Farig. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
