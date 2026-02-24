import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle, Phone, Mail } from 'lucide-react'

export default function FAQPage() {
  const faqs = [
    {
      question: "How long does it take to build a website?",
      answer: "The timeline depends on the complexity of your project. A basic 5-page website typically takes 2-3 weeks, while more complex sites with e-commerce functionality can take 4-8 weeks. I'll provide you with a detailed timeline during our initial consultation."
    },
    {
      question: "What's included in your web design packages?",
      answer: "All packages include responsive design, basic SEO setup, contact forms, mobile optimization, and post-launch support. Higher-tier packages include additional features like e-commerce functionality, advanced SEO, content management systems, and extended support periods."
    },
    {
      question: "Do you provide ongoing website maintenance?",
      answer: "Yes! I offer ongoing maintenance services including security updates, content updates, performance optimization, and technical support. Maintenance can be included in your initial package or arranged separately based on your needs."
    },
    {
      question: "Can you help with domain and hosting setup?",
      answer: "I can help you choose and register a domain name, set up reliable hosting, and handle all the technical aspects of getting your website live. This service is included in all packages."
    },
    {
      question: "Will my website be mobile-friendly?",
      answer: "Yes, all websites I create are fully responsive and optimized for mobile devices. With over 60% of web traffic coming from mobile devices, ensuring your site works perfectly on all screen sizes is a top priority."
    },
    {
      question: "Do you offer e-commerce solutions?",
      answer: "Yes, I specialize in e-commerce development. I can create online stores with secure payment processing, inventory management, order tracking, and all the features you need to sell products or services online."
    },
    {
      question: "What if I need changes after the website is launched?",
      answer: "All packages include a support period with free minor changes. For larger modifications or ongoing updates, I offer maintenance packages or can quote individual changes. I'm always here to help your website evolve with your business."
    },
    {
      question: "How much input do I have in the design process?",
      answer: "You have complete input throughout the entire process! I work closely with you to understand your vision, provide regular updates, and incorporate your feedback at every stage. Your satisfaction is my top priority."
    },
    {
      question: "Do you provide SEO services?",
      answer: "Yes, basic SEO is included in all packages, including keyword research, meta tags, site structure optimization, and Google Analytics setup. I also offer advanced SEO services for businesses looking to improve their search rankings."
    },
    {
      question: "What happens if I'm not satisfied with the final result?",
      answer: "I offer a 100% satisfaction guarantee. If you're not completely happy with your website, I'll work with you to make it right. My goal is to exceed your expectations and deliver a website that drives real results for your business."
    },
    {
      question: "Can you redesign my existing website?",
      answer: "Website redesigns are one of my specialties. I can modernize your existing site, improve its performance, enhance user experience, and ensure it meets current web standards while maintaining your brand identity."
    },
    {
      question: "What payment methods do you accept?",
      answer: "I accept various payment methods including bank transfers, credit cards, and PayPal. For larger projects, I typically work with a 50% deposit upfront and the remaining balance upon completion. Payment plans can be arranged for enterprise projects."
    }
  ]

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-navy-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="bg-navy-100 text-navy-800 hover:bg-navy-200 mb-4">
              Frequently Asked Questions
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
              Got Questions? We Have Answers
            </h1>
            <p className="text-xl text-gray-600">
              Find answers to the most common questions about our web design services, 
              process, and what you can expect when working with us.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left text-lg font-semibold text-navy-900 hover:text-blue-600">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pt-2 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Don't hesitate to reach out. 
              I'm here to help and answer any questions about your project.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-2">Live Chat</h3>
                <p className="text-gray-600 mb-4">
                  Get instant answers to your questions through our live chat support.
                </p>
                <Button variant="outline" className="w-full">
                  Start Chat
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-2">Phone Support</h3>
                <p className="text-gray-600 mb-4">
                  Call us directly for immediate assistance with your project.
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <a href="https://calendly.com/khalidfarag87/30min" target="_blank" rel="noopener noreferrer">
                    Schedule Call
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-2">Email Support</h3>
                <p className="text-gray-600 mb-4">
                  Send us an email and we'll get back to you within 24 hours.
                </p>
                <Button variant="outline" className="w-full">
                  Send Email
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-600">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-navy-100 mb-8">
              Don't let questions hold you back. Schedule a free consultation 
              and let's discuss how I can help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8" asChild>
                <a href="https://calendly.com/khalidfarag87/30min" target="_blank" rel="noopener noreferrer">
                  Schedule Free Consultation
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-navy-600 px-8" asChild>
                <a href="https://calendly.com/khalidfarag87/30min" target="_blank" rel="noopener noreferrer">
                  Book Meeting
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
