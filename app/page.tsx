import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, CheckCircle, Globe, Smartphone, Search, ShoppingCart, Palette, Settings, Award, Clock, ArrowRight, Quote } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import CalendlyWidget from "@/components/calendly-widget"

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
                  Professional Web Design Agency
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-navy-900 leading-tight">
                  Transform Your Business with 
                  <span className="text-blue-600"> Professional</span> Web Design
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  I create stunning, responsive websites that drive results. From custom designs to e-commerce solutions, 
                  I help businesses establish a powerful online presence that converts visitors into customers.
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
              Comprehensive Web Design Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to launch, I provide end-to-end web design and development services 
              that help your business succeed online.
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
                  A sophisticated culinary website featuring online reservations, menu showcase, 
                  and event booking system. Increased online reservations by 150%.
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
                  Dynamic fitness website with membership management, class scheduling, 
                  and trainer profiles. Boosted membership sign-ups by 200%.
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
                  Stunning photography portfolio with gallery management, client booking system, 
                  and print ordering. Increased bookings by 180%.
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
                  Professional dental practice website with appointment scheduling, service information, 
                  and patient portal. Improved patient acquisition by 120%.
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
                  Passionate Web Designer with 15+ Years of Experience
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Hi, I'm Khalid Farig, a dedicated web designer and developer with over 15 years of experience 
                  creating stunning, functional websites that drive business growth. I specialize in custom web design, 
                  e-commerce development, and helping businesses establish a powerful online presence.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  My approach combines creative design with strategic thinking to deliver websites that not only 
                  look amazing but also convert visitors into customers. I believe every business deserves a 
                  website that truly represents their brand and achieves their goals.
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

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-navy-900">Schedule Your Free Consultation</CardTitle>
                <CardDescription>
                  Book a 30-minute call to discuss your project and get a custom quote.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CalendlyWidget />
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-navy-900 mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-navy-900">Phone</div>
                      <div className="text-gray-600">(703) 843-8544</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Mail className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-navy-900">Email</div>
                      <div className="text-gray-600">contact@kfarig.com</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <Clock className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-navy-900">Business Hours</div>
                      <div className="text-gray-600">Mon - Fri: 9AM - 6PM EST</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-navy-900 mb-3">Why Choose Me?</h4>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-gray-700">Free consultation and quote</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-gray-700">24-hour response time</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-gray-700">100% satisfaction guarantee</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-gray-700">Ongoing support included</span>
                  </li>
                </ul>
              </div>

              <Card className="bg-navy-600 text-white border-0">
                <CardContent className="p-6 text-center">
                  <h4 className="text-xl font-bold mb-2">Ready to Get Started?</h4>
                  <p className="mb-4 opacity-90">
                    Schedule a free consultation to discuss your project
                  </p>
                  <Button variant="secondary" className="bg-white text-navy-600 hover:bg-gray-100" asChild>
                    <a href="https://calendly.com/khalidfarag87/30min" target="_blank" rel="noopener noreferrer">
                      Schedule Consultation
                    </a>
                  </Button>
                </CardContent>
              </Card>
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
                Professional web design and development services that help businesses succeed online.
              </p>
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
                <li><Link href="#" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Portfolio</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-300">
                <div>(703) 843-8544</div>
                <div>contact@kfarig.com</div>
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
