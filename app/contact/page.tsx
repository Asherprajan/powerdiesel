"use client"

import { useState } from "react"
import Image from "next/image"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, this would send the form data to a server
    setFormSubmitted(true)
    // Reset form fields here if needed
  }
  
  const offices = [
    {
      name: "Headquarters - Dubai, UAE",
      address: "Power Diesel Building, Industrial Area 2, Dubai, United Arab Emirates",
      phone: "+971 4 123 4567",
      email: "info@pdee.com",
      hours: "Sunday - Thursday: 8:00 AM - 6:00 PM"
    },
    {
      name: "Riyadh Office - Saudi Arabia",
      address: "King Fahd Road, Industrial Zone, Riyadh, Saudi Arabia",
      phone: "+966 11 987 6543",
      email: "ksa@pdee.com",
      hours: "Sunday - Thursday: 8:00 AM - 5:00 PM"
    },
    {
      name: "Cairo Office - Egypt",
      address: "Industrial Zone, 10th of Ramadan City, Cairo, Egypt",
      phone: "+20 2 2345 6789",
      email: "egypt@pdee.com",
      hours: "Sunday - Thursday: 9:00 AM - 5:00 PM"
    }
  ]
  
  const inquiryTypes = [
    "Product Inquiry",
    "Parts Availability",
    "Technical Support",
    "Warranty Claims",
    "Price Quote",
    "Delivery Information",
    "Partnership Opportunities",
    "General Inquiry"
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-[#003b6f] text-white py-16 px-4 md:px-6">
          <div className="container mx-auto relative z-10">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
              <p className="text-xl text-gray-200 mb-6">
                Our team is ready to assist you with any inquiries about our products, 
                services, or partnership opportunities.
              </p>
            </div>
          </div>
          <div className="absolute right-0 bottom-0 w-1/3 h-full opacity-10">
            <Image 
              src="/placeholder.svg?height=400&width=400" 
              alt="Contact Background"
              fill
              className="object-contain object-right-bottom"
            />
          </div>
        </section>
        
        {/* Contact Form & Info Section */}
        <section className="py-16 px-4 md:px-6 bg-gray-50">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Info Column */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-[#003b6f] mb-6">Our Offices</h2>
                
                {offices.map((office, index) => (
                  <Card key={index} className="border-t-4 border-t-[#00b2f3]">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">{office.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3 pt-0 text-sm">
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-[#00b2f3] mr-3 flex-shrink-0 mt-0.5" />
                        <span>{office.address}</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-5 w-5 text-[#00b2f3] mr-3 flex-shrink-0" />
                        <span>{office.phone}</span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="h-5 w-5 text-[#00b2f3] mr-3 flex-shrink-0" />
                        <span>{office.email}</span>
                      </div>
                      <div className="flex items-start">
                        <Clock className="h-5 w-5 text-[#00b2f3] mr-3 flex-shrink-0 mt-0.5" />
                        <span>{office.hours}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Follow Us</CardTitle>
                    <CardDescription>Connect with us on social media</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex space-x-4">
                      <a href="#" className="w-9 h-9 bg-[#003b6f] text-white rounded-full flex items-center justify-center hover:bg-[#00b2f3] transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                      </a>
                      <a href="#" className="w-9 h-9 bg-[#003b6f] text-white rounded-full flex items-center justify-center hover:bg-[#00b2f3] transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                      </a>
                      <a href="#" className="w-9 h-9 bg-[#003b6f] text-white rounded-full flex items-center justify-center hover:bg-[#00b2f3] transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                      </a>
                      <a href="#" className="w-9 h-9 bg-[#003b6f] text-white rounded-full flex items-center justify-center hover:bg-[#00b2f3] transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Contact Form Column */}
              <div className="lg:col-span-2">
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-2xl text-[#003b6f]">Send Us a Message</CardTitle>
                    <CardDescription>
                      Fill out the form below and our team will get back to you as soon as possible.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {formSubmitted ? (
                      <div className="bg-green-50 border border-green-200 text-green-700 rounded-lg p-6 text-center">
                        <div className="flex justify-center mb-4">
                          <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                          </div>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Thank You!</h3>
                        <p className="mb-4">Your message has been sent successfully. We'll get back to you soon.</p>
                        <Button 
                          onClick={() => setFormSubmitted(false)}
                          variant="outline"
                        >
                          Send Another Message
                        </Button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input id="name" placeholder="John Doe" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="company">Company Name</Label>
                            <Input id="company" placeholder="Your Company Ltd." />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="email">Email Address</Label>
                            <Input id="email" type="email" placeholder="john@example.com" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input id="phone" placeholder="+1 (555) 123-4567" />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="inquiry-type">Inquiry Type</Label>
                          <Select>
                            <SelectTrigger id="inquiry-type">
                              <SelectValue placeholder="Select inquiry type" />
                            </SelectTrigger>
                            <SelectContent>
                              {inquiryTypes.map((type, index) => (
                                <SelectItem key={index} value={type.toLowerCase().replace(/\s+/g, '-')}>
                                  {type}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="message">Your Message</Label>
                          <Textarea 
                            id="message" 
                            placeholder="Please provide details about your inquiry..." 
                            rows={6}
                            required
                          />
                        </div>
                        
                        <Button type="submit" className="w-full bg-[#003b6f] hover:bg-[#002a50]">
                          <Send className="mr-2 h-4 w-4" /> Send Message
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="py-16 px-4 md:px-6">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold text-[#003b6f] mb-6 text-center">Find Us</h2>
            <div className="relative h-96 rounded-lg overflow-hidden border border-gray-200">
              <Image 
                src="/placeholder.svg?height=600&width=1200&text=Map+Location" 
                alt="Office Location Map"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 px-4 md:px-6 bg-gray-50">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#003b6f] mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Find answers to common questions about our products, services, and policies.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-[#003b6f] mb-3">What are your delivery timeframes?</h3>
                <p className="text-gray-700">
                  Delivery times vary depending on your location and product availability. 
                  For in-stock items, we typically ship within 24-48 hours. International 
                  deliveries generally take 3-10 business days depending on the destination.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-[#003b6f] mb-3">Do you offer technical support?</h3>
                <p className="text-gray-700">
                  Yes, our technical team is available to assist with product selection, 
                  installation guidance, and troubleshooting. You can reach our support 
                  team via phone, email, or by submitting a ticket through our customer portal.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-[#003b6f] mb-3">How can I check the status of my order?</h3>
                <p className="text-gray-700">
                  You can track your order through our customer portal using your order 
                  number and email address. Alternatively, contact our customer service 
                  team with your order reference for updates on your purchase.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-[#003b6f] mb-3">What payment methods do you accept?</h3>
                <p className="text-gray-700">
                  We accept various payment methods including credit/debit cards, bank 
                  transfers, and letters of credit for large orders. For regular business 
                  customers, we also offer flexible payment terms with approved credit.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
} 