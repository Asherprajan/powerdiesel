import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProductCard from "@/components/product-card"
import Link from "next/link"

export default function ProductsSection() {
  return (
    <section className="py-16 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#003b6f] mb-4">Explore Our Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our range of high-quality industrial equipment and components designed for reliability and
            performance.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
     
          <Link href="/products/engine-overhaul-kits">
            <ProductCard
              title="Engine Overhaul Kits"
              image="/engine_overhaul_kits.webp"
              description="Complete rebuild kits for diesel and gasoline engines"
            />
          </Link>
          <Link href="/products/donaldson-filters">
            <ProductCard
              title="Donaldson Filters"
              image="/Donaldson_filters .jpg"
              description="Premium quality air, fuel, and hydraulic filtration solutions"
            />
          </Link>
          <Link href="/products/engine-parts">
            <ProductCard
              title="Engine Parts"
              image="/Engine_Parts.jpg"
              description="Premium quality diesel engines and components"
            />
          </Link>
        </div>
        <div className="text-center mt-10">
          <Link href="/products">
            <Button className="bg-[#003b6f] hover:bg-[#002a50] text-white">
              View All Products <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
} 