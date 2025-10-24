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
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  // Form fields
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
  })

  // Accept both input and textarea
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target
    setFormData({ ...formData, [id]: value })
  }

  const handleSelectChange = (value: string) => {
    setFormData({ ...formData, inquiryType: value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbxpUZq8BOCrAM5BKkGzC-0ueuIRfCJhZuUO1qmVaBTBp6Xv5hSydm09FI6z-V6CCBbbBw/exec", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      setLoading(false)
      setFormSubmitted(true)
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        inquiryType: "",
        message: "",
      })
    } catch (err) {
      console.error("Form submission failed:", err) 
      setError(null)
      setLoading(false)
    }
  }

  const offices = [
    {
      name: "Headquarters - Dubai, UAE",
      address: "Power Diesel Building, Industrial Area 2, Dubai, United Arab Emirates",
      phone: "+971508492690",  
      email: "info@pdee.net",
      hours: "Sunday - Thursday: 8:00 AM - 6:00 PM"
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
                            <Input id="name" value={formData.name} onChange={handleChange} placeholder="John Doe" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="company">Company Name</Label>
                            <Input id="company" value={formData.company} onChange={handleChange} placeholder="Your Company Ltd." />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="email">Email Address</Label>
                            <Input id="email" type="email" value={formData.email} onChange={handleChange} placeholder="info@pdee.net" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input id="phone" value={formData.phone} onChange={handleChange} placeholder="+971508492690" />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="inquiry-type">Inquiry Type</Label>
                          <Select onValueChange={handleSelectChange} value={formData.inquiryType}>
                            <SelectTrigger id="inquiry-type">
                              <SelectValue placeholder="Select inquiry type" />
                            </SelectTrigger>
                            <SelectContent>
                              {inquiryTypes.map((type, index) => (
                                <SelectItem key={index} value={type}>
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
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Please provide details about your inquiry..." 
                            rows={6}
                            required
                          />
                        </div>

                        {error && <p className="text-red-600 text-sm">{error}</p>}
                        
                        <Button 
                          type="submit" 
                          className="w-full bg-[#003b6f] hover:bg-[#002a50]" 
                          disabled={loading}
                        >
                          {loading ? "Sending..." : <><Send className="mr-2 h-4 w-4" /> Send Message</>}
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
