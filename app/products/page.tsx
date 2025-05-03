"use client"

import Link from "next/link"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import ProductCard from "@/components/product-card"

// Product data - in a real app, this would come from a database or API
const products = [
  
  {
    slug: "engine-overhaul-kits",
    title: "Engine Overhaul Kits",
    image: "/engine_overhaul_kits.webp",
    description: "Complete rebuild kits for diesel and gasoline engines"
  },
  {
    slug: "donaldson-filters",
    title: "Donaldson Filters",
    image: "/Donaldson_filters .jpg",
    description: "Premium quality air, fuel, and hydraulic filtration solutions"
  },
  {
    slug: "engine-parts",
    title: "Engine Parts",
    image: "/Engine_Parts.jpg",
    description: "OEM and aftermarket engine components for all major brands"
  },
  {
    slug: "transmission",
    title: "Transmission",
    image: "/Transmission.jpeg",
    description: "Heavy-duty transmission components and assemblies"
  },
  {
    slug: "undercarriage",
    title: "Undercarriage",
    image: "/Undercarriage.jpeg",
    description: "Track systems, rollers, and undercarriage components for heavy equipment"
  },
  {
    slug: "get",
    title: "GET (Ground Engaging Tools)",
    image: "/get.jpeg",
    description: "Buckets, teeth, and cutting edges for excavation equipment"
  },
  {
    slug: "fuel-injection-parts",
    title: "Fuel Injection Parts",
    image: "/fuel_injection_parts .jpg",
    description: "High-precision fuel injectors, pumps, and injection system components"
  },
  {
    slug: "fleetguard-filters",
    title: "Fleetguard Filters",
    image: "/fleetguard_filters.jpg",
    description: "Premium filtration products for diesel engines and equipment"
  },
  {
    slug: "bearings",
    title: "Bearings",
    image: "/bearings.jpeg",
    description: "Ball, roller, and specialty bearings for industrial applications"
  },
  {
    slug: "seals-gaskets",
    title: "Seals & Gaskets",
    image: "/seals_gaskets.jpg",
    description: "High-performance sealing solutions for engines and machinery"
  },
  {
    slug: "electrics",
    title: "Electrics",
    image: "/electrics.jpeg",
    description: "Starters, alternators, sensors, and electrical components"
  },
  {
    slug: "hydraulics-hoses",
    title: "Hydraulics & Hoses",
    image: "/Hydraulics_Hoses .jpeg",
    description: "Hydraulic cylinders, pumps, valves, and high-pressure hose assemblies"
  }
]

export default function ProductsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="py-16 px-4 md:px-6">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-[#003b6f] mb-4">Our Products</h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Browse our comprehensive range of high-quality industrial equipment, parts and components
                designed for reliability and performance.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <Link href={`/products/${product.slug}`} key={product.slug}>
                  <ProductCard
                    title={product.title}
                    image={product.image}
                    description={product.description}
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
} 