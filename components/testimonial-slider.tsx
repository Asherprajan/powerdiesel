"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "John Smith",
    company: "Manufacturing Solutions Inc.",
    quote:
      "Pdee has been our trusted supplier for over 5 years. Their products are reliable and their technical support is exceptional.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Johnson",
    company: "Industrial Automation Co.",
    quote:
      "We've significantly improved our production efficiency since implementing Pdee's automation solutions. Highly recommended!",
    rating: 5,
  },
  {
    id: 3,
    name: "Michael Chen",
    company: "Global Engineering Ltd.",
    quote:
      "The quality of Pdee's products is outstanding. Their team went above and beyond to ensure our specific requirements were met.",
    rating: 4,
  },
  {
    id: 4,
    name: "Emma Williams",
    company: "Advanced Manufacturing Group",
    quote:
      "Pdee's technical expertise and product knowledge have been invaluable to our operations. A reliable partner for all our industrial needs.",
    rating: 5,
  },
]

export default function TestimonialSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
              <Card className="h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 italic mb-4 flex-grow">"{testimonial.quote}"</blockquote>
                  <div>
                    <p className="font-bold text-[#003b6f]">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2.5 h-2.5 rounded-full ${index === currentSlide ? "bg-[#003b6f]" : "bg-gray-300"}`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
