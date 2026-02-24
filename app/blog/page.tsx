import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight, User } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function BlogPage() {
  const blogPosts = [
    {
      title: "10 Essential Web Design Trends for 2024",
      excerpt: "Discover the latest web design trends that will dominate 2024 and how to implement them in your projects.",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Design Trends",
      image: "/modern-web-design-2024.png"
    },
    {
      title: "The Complete Guide to E-commerce Website Development",
      excerpt: "Everything you need to know about building a successful e-commerce website that converts visitors into customers.",
      date: "March 10, 2024",
      readTime: "8 min read",
      category: "E-commerce",
      image: "/ecommerce-development-guide.png"
    },
    {
      title: "Mobile-First Design: Why It Matters More Than Ever",
      excerpt: "Learn why mobile-first design is crucial for modern websites and how to implement it effectively.",
      date: "March 5, 2024",
      readTime: "6 min read",
      category: "Mobile Design",
      image: "/placeholder-mqw9c.png"
    },
    {
      title: "SEO Best Practices for Web Designers",
      excerpt: "Essential SEO strategies that every web designer should know to create search-engine friendly websites.",
      date: "February 28, 2024",
      readTime: "7 min read",
      category: "SEO",
      image: "/seo-web-design.png"
    },
    {
      title: "How to Choose the Right Color Scheme for Your Website",
      excerpt: "A comprehensive guide to selecting colors that enhance user experience and reflect your brand identity.",
      date: "February 20, 2024",
      readTime: "4 min read",
      category: "Design Tips",
      image: "/website-color-psychology.png"
    },
    {
      title: "Website Performance Optimization: Speed Up Your Site",
      excerpt: "Practical tips and techniques to improve your website's loading speed and overall performance.",
      date: "February 15, 2024",
      readTime: "9 min read",
      category: "Performance",
      image: "/placeholder.svg?height=300&width=500"
    }
  ]

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-navy-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="bg-navy-100 text-navy-800 hover:bg-navy-200 mb-4">
              Web Design Blog
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
              Web Design Tips & Insights
            </h1>
            <p className="text-xl text-gray-600">
              Stay updated with the latest web design trends, tips, and best practices 
              to create better websites and grow your business online.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                <div className="relative overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 text-navy-800">
                      {post.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl text-navy-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </CardDescription>
                  <Button variant="outline" className="w-full group-hover:bg-navy-600 group-hover:text-white transition-colors">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-navy-600">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated with Web Design Tips
            </h2>
            <p className="text-navy-100 mb-8">
              Get the latest web design insights, tips, and trends delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-blue-400"
              />
              <Button className="bg-blue-600 hover:bg-blue-700 px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
