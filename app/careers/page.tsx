"use client"

import Image from "next/image"
import { MapPin, Clock, Users, Briefcase, CheckCircle } from "lucide-react"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function CareersPage() {
  const benefits = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Professional Development",
      description: "Continuous learning opportunities and career advancement programs"
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Competitive Package",
      description: "Attractive salary, performance bonuses, and comprehensive benefits"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Work-Life Balance",
      description: "Flexible working hours and generous leave policies"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Prime Location",
      description: "Modern office in Dubai's business district with excellent connectivity"
    }
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-[#003b6f] text-white py-16 px-4 md:px-6">
          <div className="container mx-auto relative z-10">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold mb-4">Join Our Team</h1>
              <p className="text-xl text-gray-200 mb-6">
                Be part of a dynamic team that's shaping the future of industrial equipment 
                supply in the Middle East. Discover exciting career opportunities with PDEE.
              </p>
            </div>
          </div>
          <div className="absolute right-0 bottom-0 w-1/3 h-full opacity-10">
            <Image 
              src="/careers.jpg" 
              alt="Careers Background"
              fill
              className="object-contain object-right-bottom"
            />
          </div>
        </section>

        {/* Why Work With Us Section */}
        <section className="py-16 px-4 md:px-6 bg-gray-50">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#003b6f] mb-4">Why Work With PDEE?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We offer more than just a job - we provide a platform for growth, 
                innovation, and making a real impact in the industrial sector.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center border-t-4 border-t-[#00b2f3]">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <div className="w-12 h-12 bg-[#00b2f3] text-white rounded-full flex items-center justify-center">
                        {benefit.icon}
                      </div>
                    </div>
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Job Openings Section */}
        <section className="py-16 px-4 md:px-6">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#003b6f] mb-4">Current Openings</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                There are currently no open positions at this time. Please check back later.
              </p>
              <div className="mt-8">
                <span className="block text-[#003b6f] text-lg font-medium">
                  You may send your resume to{" "}
                  <a
                    href="mailto:info@pdee.online"
                    className="underline text-[#00b2f3]"
                  >
                    info@pdee.online
                  </a>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Company Culture Section */}
        <section className="py-16 px-4 md:px-6">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-[#003b6f] mb-6">Our Culture</h2>
                <p className="text-gray-700 mb-6">
                  At PDEE, we believe that our people are our greatest asset. We foster a culture 
                  of collaboration, innovation, and continuous learning that empowers our team 
                  members to reach their full potential.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-[#003b6f]">Collaborative Environment</h3>
                      <p className="text-gray-600 text-sm">Work with talented professionals in a supportive team environment</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-[#003b6f]">Growth Opportunities</h3>
                      <p className="text-gray-600 text-sm">Access to training programs and career advancement opportunities</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-[#003b6f]">Innovation Focus</h3>
                      <p className="text-gray-600 text-sm">Be part of cutting-edge solutions in the industrial equipment sector</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image 
                  src="/careers.jpg" 
                  alt="PDEE Team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}

