import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

// Top brands to show in the section
const featuredBrands = [
  {
    name: "Maxiforce Engine Repair Parts",
    image: "/maxiforce1.webp",
    description: "High-quality aftermarket diesel engine parts",
    href: "/products/engine-overhaul-kits"
  },
  {
    name: "Bosch Fuel Injection Parts",
    image: "/boschlogo.png",
    description: "Precision-engineered fuel injection components",
    href: "/products/fuel-injection-parts"
  },
  {
    name: "Fleetguard Filtration Products",
    image: "/fleetguardlogo.png",
    description: "Industry-leading filtration solutions",
    href: "/products/fleetguard-filters"
  },
  {
    name: "Timken Bearing Products",
    image: "/timkenlogo.png",
    description: "Premium quality bearings for demanding applications",
    href: "/products/bearings"
  } 
];

export default function QualityBrandsSection() {
  return (
    <section className="py-16 px-4 md:px-6 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#003b6f] mb-4">Quality Brands</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We partner with industry-leading manufacturers to provide you with the highest quality 
            replacement parts for your heavy-duty machinery.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {featuredBrands.map((brand, index) => (
            <Link 
              key={index}
              href={brand.href}
              className="bg-white rounded-lg shadow-sm overflow-hidden transition-transform hover:scale-105"
            >
              <div className="relative h-44">
                <Image 
                  src={brand.image} 
                  alt={brand.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-[#003b6f] mb-2 line-clamp-1">{brand.name}</h3>
                <p className="text-gray-600 text-sm mb-2 line-clamp-2">{brand.description}</p>
                <div className="text-[#00b2f3] text-sm font-medium">Learn more →</div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center">
          <Link href="/quality-brands">
            <Button variant="outline" className="flex items-center mx-auto gap-2">
              View All Quality Brands <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
} 