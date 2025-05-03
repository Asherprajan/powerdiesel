import Link from "next/link"
import Image from "next/image"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

// Define the brand data type
interface BrandData {
  name: string;
  image: string;
  description: string;
  slug: string;
  href: string;
}

// Brand data array
const brands: BrandData[] = [
  {
    name: "Maxiforce Engine Repair Parts",
    image: "/maxiforce1.webp",
    description: "High-quality aftermarket diesel engine parts for Caterpillar, Cummins, Detroit Diesel, Perkins, and more.",
    slug: "maxiforce",
    href: "/products/engine-overhaul-kits"
  },
  {
    name: "IPD Engine Parts",
    image: "/ipd_logo.webp",
    description: "Premium quality replacement parts for Caterpillar engines, providing reliability and durability.",
    slug: "ipd",
    href: "/products/engine-parts"
  },
  {
    name: "Interstate-McBee Engine Parts",
    image: "/interstate_mcbee.jpg",
    description: "Specialized replacement parts for a wide range of diesel engines in the heavy-duty and industrial markets.",
    slug: "interstate-mcbee",
    href: "/products/engine-parts"
  },
  {
    name: "Bosch Fuel Injection Parts",
    image: "/boschlogo.png",
    description: "Precision-engineered fuel injection components for optimal engine performance and efficiency.",
    slug: "bosch",
    href: "/products/fuel-injection-parts"
  },
  {
    name: "Fleetguard Filtration Products",
    image: "/fleetguardlogo.png",
    description: "Industry-leading filtration solutions for diesel engines, providing superior protection and performance.",
    slug: "fleetguard",
    href: "/products/fleetguard-filters"
  },
  {
    name: "ITR Undercarriage and GET",
    image: "/itrlogo.jpg",
    description: "High-quality ground engaging tools and undercarriage components for construction and mining equipment.",
    slug: "itr",
    href: "/products/undercarriage"
  },
  {
    name: "Perkins Engine Parts",
    image: "/perkinslogo.png",
    description: "Genuine and aftermarket parts for Perkins diesel engines, ensuring optimal performance and reliability.",
    slug: "perkins-parts",
    href: "/our-range/perkins"
  },
  {
    name: "Timken Bearing Products",
    image: "/timkenlogo.png",
    description: "Premium quality bearings and related components designed for demanding industrial applications.",
    slug: "timken",
    href: "/products/bearings"
  },
     {
      name: "ZF Powertrain and Axle Parts",
      image: "/zflogo.png",
      description: "High-quality powertrain and axle components for heavy-duty vehicles and equipment.",
      slug: "zf",
      href: "/products/transmission"
     },
  {
    name: "Donaldson Filtration Products",
    image: "/donaldsonlogo.png",
    description: "High-quality filtration solutions for diesel engines, providing superior protection and performance.",
    slug: "donaldson",
    href: "/products/donaldson-filters"
  },
{
  name:"Magnum Sealing Solutions",
  image: "/magnumlogo.png",
  description: "High-quality sealing solutions for heavy-duty machinery and equipment, ensuring optimal performance and reliability.",
  slug: "magnum",
  href: "/products/seals-gaskets"
},
{
  name:"Garrett Turbocharger Products",
  image: "/garrettlogo.png",
  description: "High-quality turbocharger products for heavy-duty vehicles and equipment, ensuring optimal performance and reliability.",
  slug: "garrett",
  href: "/products/engine-parts"
},
  {

    name: "Delco Remy Rotating Electrics",
    image: "/delcologo.png",
    description: "High-performance starters, alternators, and electrical components for commercial and industrial vehicles.",
    slug: "delco-remy",
    href: "/products/electrics"
  },
  {
    name: "J & N Electrics",
    image: "/jandnlogo.jpg",
    description: "Specialized electrical components and systems for heavy-duty applications and industrial equipment.",
    slug: "j-and-n",
    href: "/products/electrics"
  },
  {
    name: "FMC Friction Materials",
    image: "/fmclogo.jpg",
    description: "High-quality friction materials for transmission, brake, and clutch applications in heavy-duty equipment.",
    slug: "fmc",
    href: "/products/transmission"
  }
];

export default function QualityBrandsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1 py-12 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[#003b6f] mb-4">Quality Brands</h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We partner with leading manufacturers to provide you with the highest quality replacement parts 
              for your heavy-duty machinery and equipment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {brands.map((brand, index) => (
              <Link 
                href={brand.href} 
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
              >
                <div className="relative h-48">
                  <Image 
                    src={brand.image} 
                    alt={brand.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h2 className="text-xl font-bold text-[#003b6f] mb-2">{brand.name}</h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">{brand.description}</p>
                  <div className="text-[#00b2f3] font-medium">Learn more →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
} 