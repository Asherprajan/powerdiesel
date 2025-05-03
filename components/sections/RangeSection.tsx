import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function RangeSection() {
  return (
    <section className="py-16 px-4 md:px-6 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#003b6f] mb-4">Our Range of Solutions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions tailored to meet the diverse needs of modern industries.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link href="/our-range/caterpillar" className="block">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden transition-transform hover:scale-105">
              <div className="relative h-48">
                <Image 
                  src="/caterpillar.jpeg" 
                  alt="Caterpillar®"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-[#003b6f] mb-2">Caterpillar®</h3>
                <p className="text-gray-600 text-sm">High-quality parts and components for Caterpillar machinery</p>
              </div>
            </div>
          </Link>
          
          <Link href="/our-range/komatsu" className="block">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden transition-transform hover:scale-105">
              <div className="relative h-48">
                <Image 
                  src="/komatsu.jpg" 
                  alt="Komatsu®"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-[#003b6f] mb-2">Komatsu®</h3>
                <p className="text-gray-600 text-sm">Reliable replacement parts for Komatsu construction and mining equipment</p>
              </div>
            </div>
          </Link>
          
          <Link href="/our-range/cummins" className="block">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden transition-transform hover:scale-105">
              <div className="relative h-48">
                <Image 
                  src="/cummins.jpg" 
                  alt="Cummins®"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-[#003b6f] mb-2">Cummins®</h3>
                <p className="text-gray-600 text-sm">Engine parts and components for Cummins power solutions</p>
              </div>
            </div>
          </Link>
          
          <Link href="/our-range/perkins" className="block">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden transition-transform hover:scale-105">
              <div className="relative h-48">
                <Image 
                  src="/perkins.jpg" 
                  alt="Perkins®"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-[#003b6f] mb-2">Perkins®</h3>
                <p className="text-gray-600 text-sm">Quality replacement parts for Perkins engines and generators</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="text-center mt-10">
          <Link href="/our-range">
            <Button className="bg-[#003b6f] hover:bg-[#002a50] text-white">
              View All Products <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
} 