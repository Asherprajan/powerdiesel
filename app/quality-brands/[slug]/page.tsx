"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"

// Define the brand data type
interface BrandData {
  title: string;
  image: string;
  description: string;
}

// Brand data object with detailed information
const brands: Record<string, BrandData> = {
  "maxiforce": {
    title: "Maxiforce Engine Repair Parts",
    image: "/maxiforce.jpg",
    description: `
      <p class="mb-4">Maxiforce is a trusted provider of high-quality aftermarket diesel engine parts designed for a wide range of applications. Their comprehensive product line includes replacement parts for major engine brands including Caterpillar, Cummins, Detroit Diesel, Perkins, and more.</p>
      
      <p class="mb-4">With a focus on quality and reliability, Maxiforce parts are manufactured to meet or exceed OEM specifications, providing excellent performance and durability at competitive prices.</p>
      
      <h3 class="text-xl font-bold text-[#003b6f] mt-6 mb-3">Our Maxiforce Range Includes:</h3>
      <ul class="list-disc pl-5 mb-4 space-y-1">
        <li>Gasket Sets</li>
        <li>Cylinder Liners</li>
        <li>Pistons and Rings</li>
        <li>Valvetrain Components</li>
        <li>Bearings</li>
        <li>Oil Pumps</li>
        <li>Water Pumps</li>
        <li>Fuel System Components</li>
      </ul>
      
      <p class="mb-4">At Jaytrac, we stock a comprehensive selection of Maxiforce engine parts to support your maintenance and repair needs. Our technical team can help you identify the right components for your specific engine model and application.</p>
    `
  },
  "ipd": {
    title: "IPD Engine Parts",
    image: "/placeholder.svg?height=400&width=600",
    description: `
      <p class="mb-4">IPD is a leading manufacturer of high-quality replacement parts for Caterpillar engines, with a history dating back to 1955. Known for their precision engineering and rigorous quality control, IPD parts provide exceptional reliability and durability for heavy-duty applications.</p>
      
      <p class="mb-4">IPD's comprehensive product range includes critical engine components manufactured to exacting standards, helping equipment owners reduce maintenance costs without compromising on performance or reliability.</p>
      
      <h3 class="text-xl font-bold text-[#003b6f] mt-6 mb-3">Our IPD Range Includes:</h3>
      <ul class="list-disc pl-5 mb-4 space-y-1">
        <li>Piston Sets</li>
        <li>Cylinder Liners</li>
        <li>Bearing Sets</li>
        <li>Gasket Sets</li>
        <li>Valvetrain Components</li>
        <li>Oil Pumps</li>
        <li>Water Pumps</li>
        <li>Cylinder Heads</li>
      </ul>
      
      <p class="mb-4">Jaytrac is proud to be a distributor of IPD engine components, offering our customers cost-effective alternatives without compromising on quality or performance.</p>
    `
  },
  "interstate-mcbee": {
    title: "Interstate-McBee Engine Parts",
    image: "/placeholder.svg?height=400&width=600",
    description: `
      <p class="mb-4">Interstate-McBee is a premier manufacturer and supplier of replacement parts for diesel engines, specializing in components for Cummins, Detroit Diesel, Caterpillar, John Deere, and other major engine brands.</p>
      
      <p class="mb-4">With over 70 years of experience in the industry, Interstate-McBee has built a reputation for producing high-quality components that meet or exceed OEM specifications, providing excellent value and reliability.</p>
      
      <h3 class="text-xl font-bold text-[#003b6f] mt-6 mb-3">Our Interstate-McBee Range Includes:</h3>
      <ul class="list-disc pl-5 mb-4 space-y-1">
        <li>Fuel System Components</li>
        <li>Cooling System Parts</li>
        <li>Engine Bearings</li>
        <li>Gaskets and Seals</li>
        <li>Cylinder Components</li>
        <li>Valvetrain Components</li>
        <li>Electrical Parts</li>
        <li>Filters and Maintenance Items</li>
      </ul>
      
      <p class="mb-4">Jaytrac supplies a wide range of Interstate-McBee components to support your engine repair and maintenance needs, offering technical expertise to help you select the right parts for your application.</p>
    `
  },
  "bosch": {
    title: "Bosch Fuel Injection Parts",
    image: "/Fuel_Injection_Parts.jpg",
    description: `
      <p class="mb-4">Bosch is a global leader in automotive and industrial technology, renowned for their precision-engineered fuel injection systems and components for diesel engines. With over 130 years of innovation, Bosch has established itself as a premium manufacturer of fuel system technology.</p>
      
      <p class="mb-4">Their fuel injection components are designed to deliver optimal engine performance, fuel efficiency, and emissions control, making them the preferred choice for both OEMs and aftermarket applications.</p>
      
      <h3 class="text-xl font-bold text-[#003b6f] mt-6 mb-3">Our Bosch Range Includes:</h3>
      <ul class="list-disc pl-5 mb-4 space-y-1">
        <li>Fuel Injection Pumps</li>
        <li>Injectors and Nozzles</li>
        <li>Common Rail Components</li>
        <li>Delivery Valves</li>
        <li>Pressure Regulators</li>
        <li>Fuel Filters</li>
        <li>Electronic Control Units</li>
        <li>Repair Kits</li>
      </ul>
      
      <p class="mb-4">At Jaytrac, we offer a comprehensive selection of genuine Bosch fuel injection components to help maintain optimal performance and reliability in your diesel engines.</p>
    `
  },
  "fleetguard": {
    title: "Fleetguard Filtration Products",
    image: "/placeholder.svg?height=400&width=600",
    description: `
      <p class="mb-4">Fleetguard, a brand of Cummins Filtration, is a global leader in the design and manufacture of filtration solutions for diesel engines and industrial applications. With over 60 years of experience, Fleetguard has built a reputation for innovation and quality in filtration technology.</p>
      
      <p class="mb-4">Their comprehensive range of filtration products is designed to provide superior protection for engines and equipment, extending service life and improving performance in demanding applications.</p>
      
      <h3 class="text-xl font-bold text-[#003b6f] mt-6 mb-3">Our Fleetguard Range Includes:</h3>
      <ul class="list-disc pl-5 mb-4 space-y-1">
        <li>Air Filters</li>
        <li>Fuel Filters and Water Separators</li>
        <li>Lube Filters</li>
        <li>Hydraulic Filters</li>
        <li>Coolant Filters</li>
        <li>Coolants and Additives</li>
        <li>Crankcase Ventilation Filters</li>
        <li>Filter Service Kits</li>
      </ul>
      
      <p class="mb-4">Jaytrac supplies a wide range of genuine Fleetguard filtration products to help you maintain your equipment in optimal condition and protect your investment in heavy-duty machinery.</p>
    `
  },
  "itr": {
    title: "ITR Undercarriage and GET",
    image: "/placeholder.svg?height=400&width=600",
    description: `
      <p class="mb-4">ITR is a leading manufacturer of high-quality undercarriage components and ground engaging tools (GET) for construction and mining equipment. Their comprehensive product range is designed to fit machines from all major manufacturers, providing excellent performance and durability in demanding applications.</p>
      
      <p class="mb-4">With a focus on quality and innovation, ITR components are manufactured to meet or exceed OEM specifications, offering exceptional value and reliability for equipment owners and operators.</p>
      
      <h3 class="text-xl font-bold text-[#003b6f] mt-6 mb-3">Our ITR Range Includes:</h3>
      <ul class="list-disc pl-5 mb-4 space-y-1">
        <li>Track Chains and Shoes</li>
        <li>Rollers and Idlers</li>
        <li>Sprockets and Segments</li>
        <li>Bucket Teeth and Adapters</li>
        <li>Cutting Edges and End Bits</li>
        <li>Grader Blades</li>
        <li>Ripper Shanks and Tips</li>
        <li>Hardware and Fasteners</li>
      </ul>
      
      <p class="mb-4">Jaytrac is proud to be a distributor of ITR components, offering our customers high-quality alternatives for their undercarriage and GET requirements at competitive prices.</p>
    `
  },
  "perkins-parts": {
    title: "Perkins Engine Parts",
    image: "/placeholder.svg?height=400&width=600",
    description: `
      <p class="mb-4">Perkins is one of the world's leading suppliers of diesel and gas engines, with a history dating back to 1932. Their engines power a wide range of equipment in the construction, agricultural, industrial, and power generation sectors.</p>
      
      <p class="mb-4">At Jaytrac, we supply both genuine and high-quality aftermarket parts for Perkins engines, providing solutions that balance performance, reliability, and value for our customers.</p>
      
      <h3 class="text-xl font-bold text-[#003b6f] mt-6 mb-3">Our Perkins Parts Range Includes:</h3>
      <ul class="list-disc pl-5 mb-4 space-y-1">
        <li>Cylinder Components</li>
        <li>Gasket Sets</li>
        <li>Bearing Sets</li>
        <li>Valvetrain Components</li>
        <li>Cooling System Parts</li>
        <li>Fuel System Components</li>
        <li>Electrical Parts</li>
        <li>Service and Maintenance Kits</li>
      </ul>
      
      <h3 class="text-xl font-bold text-[#003b6f] mt-6 mb-3">Engine Series We Supply Parts For:</h3>
      <ul class="list-disc pl-5 mb-4 space-y-1">
        <li>100 Series</li>
        <li>400 Series</li>
        <li>850 Series</li>
        <li>1000 Series</li>
        <li>1100 Series</li>
        <li>1200 Series</li>
        <li>1300 Series</li>
        <li>2000 Series</li>
        <li>3000 Series</li>
        <li>4000 Series</li>
      </ul>
      
      <p class="mb-4">Our technical team can help you identify the right components for your specific Perkins engine model and application, ensuring you get the parts you need to keep your equipment running smoothly.</p>
    `
  },
  "timken": {
    title: "Timken Bearing Products",
    image: "/placeholder.svg?height=400&width=600",
    description: `
      <p class="mb-4">Timken is a global leader in engineered bearings and power transmission products, with over a century of experience in manufacturing high-quality components for industrial applications. Their products are renowned for their precision engineering, durability, and performance in demanding environments.</p>
      
      <p class="mb-4">Timken bearings and related components are designed to deliver reliable operation and extended service life in heavy-duty equipment, helping to reduce maintenance costs and equipment downtime.</p>
      
      <h3 class="text-xl font-bold text-[#003b6f] mt-6 mb-3">Our Timken Range Includes:</h3>
      <ul class="list-disc pl-5 mb-4 space-y-1">
        <li>Tapered Roller Bearings</li>
        <li>Spherical Roller Bearings</li>
        <li>Cylindrical Roller Bearings</li>
        <li>Ball Bearings</li>
        <li>Thrust Bearings</li>
        <li>Mounted Bearings</li>
        <li>Bearing Housings</li>
        <li>Seals and Lubricants</li>
      </ul>
      
      <p class="mb-4">Jaytrac supplies genuine Timken products to ensure the reliable performance of your equipment in construction, mining, agriculture, and other industrial applications.</p>
    `
  },
  "delco-remy": {
    title: "Delco Remy Rotating Electrics",
    image: "/placeholder.svg?height=400&width=600",
    description: `
      <p class="mb-4">Delco Remy is a leading manufacturer of starters, alternators, and electrical components for commercial and industrial applications. With over 100 years of innovation in rotating electrical products, Delco Remy has established itself as a trusted brand in the heavy-duty market.</p>
      
      <p class="mb-4">Their products are designed to deliver reliable performance in demanding environments, with features that enhance durability, efficiency, and service life.</p>
      
      <h3 class="text-xl font-bold text-[#003b6f] mt-6 mb-3">Our Delco Remy Range Includes:</h3>
      <ul class="list-disc pl-5 mb-4 space-y-1">
        <li>Starting Motors</li>
        <li>Alternators</li>
        <li>Voltage Regulators</li>
        <li>Solenoids</li>
        <li>Brushes and Brush Holders</li>
        <li>Bearings and Bushings</li>
        <li>Drive Components</li>
        <li>Repair Kits</li>
      </ul>
      
      <p class="mb-4">At Jaytrac, we offer a comprehensive selection of genuine Delco Remy electrical components to help maintain the electrical systems in your heavy-duty equipment.</p>
    `
  },
  "j-and-n": {
    title: "J & N Electrics",
    image: "/placeholder.svg?height=400&width=600",
    description: `
      <p class="mb-4">J & N Electrics specializes in electrical components and systems for heavy-duty applications and industrial equipment. With a focus on quality and reliability, they provide solutions for the electrical needs of construction, mining, and agricultural machinery.</p>
      
      <p class="mb-4">Their products are designed to withstand the harsh conditions often encountered in industrial environments, delivering consistent performance and extended service life.</p>
      
      <h3 class="text-xl font-bold text-[#003b6f] mt-6 mb-3">Our J & N Range Includes:</h3>
      <ul class="list-disc pl-5 mb-4 space-y-1">
        <li>Alternators</li>
        <li>Starters</li>
        <li>Electrical Control Units</li>
        <li>Switches and Sensors</li>
        <li>Wiring Harnesses</li>
        <li>Battery Management Components</li>
        <li>Lighting Systems</li>
        <li>Repair Parts and Kits</li>
      </ul>
      
      <p class="mb-4">Jaytrac supplies a wide range of J & N electrical components to support your equipment maintenance and repair needs, with technical expertise to help you select the right parts for your application.</p>
    `
  },
  "fmc": {
    title: "FMC Friction Materials",
    image: "/placeholder.svg?height=400&width=600",
    description: `
      <p class="mb-4">FMC specializes in high-quality friction materials for transmission, brake, and clutch applications in heavy-duty equipment. Their products are engineered for optimal performance, durability, and reliability in demanding conditions.</p>
      
      <p class="mb-4">With a focus on material science and advanced manufacturing techniques, FMC friction materials provide excellent wear resistance and consistent performance throughout their service life.</p>
      
      <h3 class="text-xl font-bold text-[#003b6f] mt-6 mb-3">Our FMC Range Includes:</h3>
      <ul class="list-disc pl-5 mb-4 space-y-1">
        <li>Clutch Discs and Plates</li>
        <li>Brake Pads and Shoes</li>
        <li>Transmission Friction Discs</li>
        <li>Power Take-Off Clutches</li>
        <li>Steering Clutches</li>
        <li>Brake Bands</li>
        <li>Brake Linings</li>
        <li>Service Kits</li>
      </ul>
      
      <p class="mb-4">At Jaytrac, we supply FMC friction materials to help maintain the transmission, braking, and clutch systems in your heavy-duty equipment, ensuring safe and reliable operation.</p>
    `
  }
};

export default function BrandPage() {
  const params = useParams();
  const [brand, setBrand] = useState<BrandData>({
    title: "Loading...",
    image: "/placeholder.svg?height=400&width=600",
    description: "<p class='mb-4'>Loading brand information...</p>"
  });

  useEffect(() => {
    // Get the slug from params
    const slug = typeof params.slug === 'string' ? params.slug : Array.isArray(params.slug) ? params.slug[0] : '';
    
    // Get the brand data
    const brandData = brands[slug] || {
      title: "Brand Not Found",
      image: "/placeholder.svg?height=400&width=600",
      description: "<p class='mb-4'>The requested brand information could not be found.</p>"
    };
    
    setBrand(brandData);
  }, [params]);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1 py-12 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="mb-8">
            <Link href="/quality-brands">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" /> Back to Quality Brands
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="relative rounded-lg overflow-hidden">
              <Image 
                src={brand.image} 
                alt={brand.title}
                width={600}
                height={400}
                className="object-cover w-full h-auto"
              />
            </div>
            
            <div>
              <h1 className="text-3xl font-bold text-[#003b6f] mb-6">{brand.title}</h1>
              
              <div 
                className="prose prose-slate max-w-none text-gray-700"
                dangerouslySetInnerHTML={{ __html: brand.description }}
              />
              
              <div className="mt-8">
                <Button className="bg-[#00b2f3] hover:bg-[#0090c3] text-white">
                  Enquire About Parts
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
} 