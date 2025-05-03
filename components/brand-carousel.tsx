"use client"

import { useRef } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"

const brands = [
  { id: 1, name: "Siemens", logo: "/placeholder-logo.svg" },
  { id: 2, name: "ABB", logo: "/placeholder-logo.svg" },
  { id: 3, name: "SKF", logo: "/placeholder-logo.svg" },
  { id: 4, name: "Schneider Electric", logo: "/placeholder-logo.svg" },
  { id: 5, name: "Bosch Rexroth", logo: "/placeholder-logo.svg" },
  { id: 6, name: "Mitsubishi", logo: "/placeholder-logo.svg" },
  { id: 7, name: "Omron", logo: "/placeholder-logo.svg" },
  { id: 8, name: "Rockwell Automation", logo: "/placeholder-logo.svg" },
]

export default function BrandCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" })
    }
  }

  return (
    <div className="relative">
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto space-x-4 pb-6 scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {brands.map((brand) => (
          <Card key={brand.id} className="flex-shrink-0 w-[200px] hover:shadow-md transition-shadow">
            <CardContent className="flex items-center justify-center h-[120px] p-4">
              <div className="relative h-16 w-full">
                <Image src={brand.logo || "/placeholder.svg"} alt={brand.name} fill className="object-contain" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 hover:bg-gray-100"
        aria-label="Scroll left"
      >
        <ChevronLeft className="h-6 w-6 text-[#003b6f]" />
      </button>

      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 hover:bg-gray-100"
        aria-label="Scroll right"
      >
        <ChevronRight className="h-6 w-6 text-[#003b6f]" />
      </button>
    </div>
  )
}
