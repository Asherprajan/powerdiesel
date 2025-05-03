"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const slides = [
  {
    id: 1,
    image: "/Transmission.jpeg",
    title: "Explore High-Performance Industrial Gear Systems",
    description: "Engineered for reliability and durability in demanding environments",
    cta: "View More",
    link: "/products/gear-systems",
  },
  {
    id: 2,
    image: "/Engine_Parts.jpg",
    title: "Trusted Brands, Proven Quality",
    description: "Partner with industry leaders for superior industrial solutions",
    cta: "Enquire Now",
    link: "/brands",
  },
  {
    id: 3,
    image: "/fleetguard_filters.jpg",
    title: "Your Partner in Engineering Solutions",
    description: "Custom engineering services tailored to your specific requirements",
    cta: "Contact Us",
    link: "/contact",
  },
]

export default function BannerCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white p-4">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{slide.title}</h2>
              <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">{slide.description}</p>
              <Link href={slide.link}>
                <Button className="bg-[#00b2f3] hover:bg-[#0090c3] text-white">{slide.cta}</Button>
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button> */}

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
