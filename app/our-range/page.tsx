import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

export default function OurRangePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1 py-12 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[#003b6f] mb-4">Our Range</h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We specialize in providing high-quality replacement parts for a wide range of leading equipment manufacturers.
              Browse our comprehensive selection below.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <Link href="/our-range/caterpillar" className="block">
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
                <div className="relative h-52">
                  <Image 
                    src="/caterpillar.jpeg" 
                    alt="Caterpillar®"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h2 className="text-xl font-bold text-[#003b6f] mb-2">Caterpillar®</h2>
                  <p className="text-gray-600 mb-4">High-quality parts and components for Caterpillar machinery</p>
                  <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                    View Range <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Link>
            
            <Link href="/our-range/komatsu" className="block">
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
                <div className="relative h-52">
                  <Image 
                    src="/komatsu.jpg" 
                    alt="Komatsu®"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h2 className="text-xl font-bold text-[#003b6f] mb-2">Komatsu®</h2>
                  <p className="text-gray-600 mb-4">Reliable replacement parts for Komatsu construction and mining equipment</p>
                  <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                    View Range <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Link>
            
            <Link href="/our-range/volvo" className="block">
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
                <div className="relative h-52">
                  <Image 
                    src="/volvo.WEBP" 
                    alt="Volvo®"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h2 className="text-xl font-bold text-[#003b6f] mb-2">Volvo®</h2>
                  <p className="text-gray-600 mb-4">Premium parts for Volvo construction machinery and equipment</p>
                  <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                    View Range <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Link>
            
              <Link href="/our-range/deep-sea-electronics" className="block">
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
                <div className="relative h-52">
                  <Image 
                    src="/deep-sea.jpg" 
                    alt="Deepsea Electronics range"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h2 className="text-xl font-bold text-[#003b6f] mb-2">Deepsea Electronics range</h2>
                  <p className="text-gray-600 mb-4">Deepsea Electronics range</p>
                  <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                    View Range <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Link>
            <Link href="/our-range/cummins" className="block">
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
                <div className="relative h-52">
                  <Image 
                    src="/cummins.jpg" 
                    alt="Cummins®"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h2 className="text-xl font-bold text-[#003b6f] mb-2">Cummins®</h2>
                  <p className="text-gray-600 mb-4">Engine parts and components for Cummins power solutions</p>
                  <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                    View Range <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Link>
            
            <Link href="/our-range/deutz" className="block">
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
                <div className="relative h-52">
                  <Image 
                    src="/DEUTZ.png" 
                    alt="Deutz®"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h2 className="text-xl font-bold text-[#003b6f] mb-2">Deutz®</h2>
                  <p className="text-gray-600 mb-4">Specialized parts for Deutz diesel engines and power systems</p>
                  <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                    View Range <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Link>
            
            <Link href="/our-range/perkins" className="block">
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
                <div className="relative h-52">
                  <Image 
                    src="/perkins.jpg" 
                    alt="Perkins®"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h2 className="text-xl font-bold text-[#003b6f] mb-2">Perkins®</h2>
                  <p className="text-gray-600 mb-4">Quality replacement parts for Perkins engines and generators</p>
                  <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                    View Range <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Link>
            
            <Link href="/our-range/fg-wilson" className="block">
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
                <div className="relative h-52">
                  <Image 
                    src="/fgwilson.jpg" 
                    alt="FG Wilson®"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h2 className="text-xl font-bold text-[#003b6f] mb-2">FG Wilson®</h2>
                  <p className="text-gray-600 mb-4">Specialized parts for FG Wilson generator sets and power solutions</p>
                  <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                    View Range <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
} 