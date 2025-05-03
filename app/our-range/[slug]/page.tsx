"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import { useParams } from "next/navigation"
import { useState, useEffect } from "react"

// Define a type for our brand data
interface BrandData {
  title: string;
  image: string;
  description: string;
}

// Sample brand data - in a real app, this would come from a database or API
const brands: Record<string, BrandData> = {
  "caterpillar": {
    title: "Caterpillar®",
    image: "/caterpillar.jpeg",
    description: `
      <p class="mb-4">Here at Jaytrac, we stock & supply parts for Caterpillar machinery. With the iconic yellow paint, Caterpillar is the world's largest construction equipment manufacturer. This machinery is used in some of the toughest environments in the construction, mining, power generation and marine industries. The importance of looking after and maintaining parts on your heavy machinery to ensure efficiency and safety is of paramount importance.</p>
      
      <h3 class="text-xl font-bold text-[#003b6f] mt-6 mb-3">Machinery We Supply Parts For:</h3>
      <ul class="list-disc pl-5 mb-4 space-y-1">
        <li>Articulated dump trucks</li>
        <li>Backhoe loaders</li>
        <li>Hydraulic excavators</li>
        <li>Mining trucks</li>
        <li>Motor graders</li>
        <li>Track loaders</li>
        <li>Wheel loaders</li>
      </ul>
      
      <p class="mb-4">From vintage D2 dozers to the huge 120-tonne D11T, along with the legacy 215 and modern 320D hydraulic excavators, we specialise in supplying the complete one-stop-shop parts package. For Cat engines our range includes smaller C1.1 up to larger 3500 engines in heavy plant or power generation applications.</p>
      
      <h3 class="text-xl font-bold text-[#003b6f] mt-6 mb-3">History of Caterpillar</h3>
      <p class="mb-4">The Caterpillar Tractor Co, or 'Cat', was formed in 1925 following the merger of the Holt Manufacturing Company and C.L Best Tractor Co. It was Benjamin Holt who first patented a continuous track in 1907, bolting wooden slats to a chain on an agricultural tractor. Legend has it that an employee remarked that the movement of the tracks looked like a caterpillar, hence the start of the iconic brand name. You can recognise Caterpillar Machinery by its 'Cat Yellow' paint & 'Cat' Logo.</p>
      
      <p class="mb-4">Caterpillar is famous for their crawler tractors, or Dozers, and these were first used in large numbers in WWI as gun-tractors. In WWII Cat machines were manufactured in huge volumes. Their use became closely associated with the Construction Battalions, or 'Seabees' in the Pacific, and airfield construction in Europe. Cat dozers could also be seen playing their part clearing beaches in the Normandy landings.</p>
      
      <p class="mb-4">To find out more call us on +44 (0)1604 491 133, email us at sales@jaytrac.co.uk or get in touch directly via our online enquiry form.</p>
    `
  },
  "komatsu": {
    title: "Komatsu®",
    image: "/komatsu.jpg",
    description: `
      <p class="mb-4">As a leading supplier of quality replacement machinery parts, Jaytrac stock and distribute spare parts for Komatsu Earthmoving and Mining Machines. Whether you are looking to service, or fully repair your machinery, our Komatsu aftermarket parts provide a high quality, low cost-option through our one stop shop.</p>
      
      <h3 class="text-xl font-bold text-[#003b6f] mt-6 mb-3">Our Range of Replacement Parts for Komatsu Machinery:</h3>
      <ul class="list-disc pl-5 mb-4 space-y-1">
        <li>Articulated Dump Trucks</li>
        <li>Backhoe Loaders</li>
        <li>Dozers</li>
        <li>Excavators</li>
        <li>Mine Trucks</li>
        <li>Track Loaders</li>
        <li>Wheel Loaders</li>
        <li>Engine parts for all applications</li>
      </ul>
      
      <h3 class="text-xl font-bold text-[#003b6f] mt-6 mb-3">About Komatsu</h3>
      <p class="mb-4">Komatsu have manufactured mining, agricultural and military equipment since the early 1900s. They are the second-largest manufacturer of construction and mining equipment after Caterpillar. Some of the most notable Komatsu machines include the world's first 1,000 horsepower dozer the D575A, and the huge PC8000 excavator, weighing in at over 700 tonnes! The ever-popular PC200-300 excavators and D65 – D155 dozers are machines that Jaytrac can provide parts for.</p>
      
      <p class="mb-4">We are a one-stop shop for replacement products and consider ourselves to be a genuine alternative, offering value for money. With happy customers across the globe, we can provide a wealth of expert advice. To find out more call us on +44 (0)1604 491 133, email us at sales@jaytrac.co.uk or get in touch directly via our online enquiry form.</p>
    `
  },
  "volvo": {
    title: "Volvo®",
    image: "/Volvo.jpg",
    description: `
      <p class="mb-4">With quality, sustainability, and safety at the core of production, Volvo has been supplying high-quality construction equipment since its start in 1831. Combining progressive design and technological innovation, it's no surprise that Volvo CE is a market leader all over the world.</p>
      
      <p class="mb-4">From the iconic Articulated Hauler (ADT), to excavators and loaders, Volvo has designed, developed, and manufactured a vast range of heavy equipment that continues to shape the future of the construction industry including:</p>
      
      <h3 class="text-xl font-bold text-[#003b6f] mt-6 mb-3">Equipment We Supply Parts For:</h3>
      <ul class="list-disc pl-5 mb-4 space-y-1">
        <li>Articulated Dump Trucks (ADT)</li>
        <li>Excavators</li>
        <li>Wheel loaders</li>
        <li>Backhoe loaders</li>
      </ul>
      
      <p class="mb-4">As significant players in the construction sector, making sure existing vehicles continue to run safely and efficiently is of the utmost importance to any construction site. Jaytrac proudly supplies and distributes a range of high-quality replacement parts for Volvo Construction Equipment (Volvo CE), making sure that all vehicles are repaired and maintained with longevity in mind.</p>
      
      <h3 class="text-xl font-bold text-[#003b6f] mt-6 mb-3">History of Volvo</h3>
      <p class="mb-4">Volvo Construction Equipment evolved from humble beginnings 180 years ago in Sweden. In 1831, young mechanic Johan Munktell set up a local workshop in Eskilstuna, where he sought to modernise tools and machinery. Contributing to the design of Sweden's first steam Locomobile, Munktell established the revolutionary foundations from which Volvo evolved. Over the next decade, Munktell's innovative groundwork was developed further by brothers Jean and Carl Bolinder. They oversaw the revolutionary construction of steam-powered road rollers, alongside Sweden's first combustion engine. Eventually purchased by Volvo, the next century witnessed Bolinder-Munktell's (BM) beginnings flourish from a modest workshop in Sweden to one of the largest manufacturers of construction equipment in the world.</p>
      
      <p class="mb-4">One of Volvo's legendary products is the Articulated hauler or ADT. Since its launch in 1966, this multi-terrain hauler transformed earth moving with its articulation joint between the tractor and trailer unit. The concept became so popular that by the late 1980's, Volvo BM dominated more than 50% of the market with its A20, A25 and A35 machines visible all over the world.</p>
      
      <p class="mb-4">At Jaytrac we prioritise exceptional quality in both our products and our customer service. Find out more about our Volvo replacement parts today by calling us on +44 (0)1604 491 133, email us at sales@jaytrac.co.uk or get in touch directly via our online enquiry form.</p>
    `
  },
  "cummins": {
    title: "Cummins®",
    image: "/cummins.jpg",
    description: `
      <p class="mb-4">A brand synonymous with quality, innovation, and dependability; Indiana-based Cummins Engine Co. is a global market leader with oil-burning 'Diesel' engines so reliable they were the first company to offer a 100,000 mile warranty!</p>
      
      <p class="mb-4">From legendary NH220 units to huge QSK 95-litre V16 engines, Cummins has millions of engines in service in the on-highway, marine, and construction sectors as well as the power-generation, gas, and mining industries.</p>
      
      <p class="mb-4">For over 20 years, Jaytrac has been the one-stop-shop for Cummins replacement engine parts. With the complete Cummins range covered, we're here to help our customers find the perfect replacement part at the right price. Our range covers:</p>
      
      <h3 class="text-xl font-bold text-[#003b6f] mt-6 mb-3">Engine Series We Supply Parts For:</h3>
      <ul class="list-disc pl-5 mb-4 space-y-1">
        <li>B Series</li>
        <li>C Series</li>
        <li>L Series</li>
        <li>M Series</li>
        <li>KT Series</li>
        <li>NV Series</li>
        <li>VT</li>
        <li>I-QSC</li>
        <li>I-QSL</li>
        <li>I-QSX</li>
        <li>QSK Series</li>
        <li>QSV Series</li>
      </ul>
      
      <h3 class="text-xl font-bold text-[#003b6f] mt-6 mb-3">History of Cummins</h3>
      <p class="mb-4">Cummins as a brand was established in 1919 by Engineer Clessie Cummins, and based in Indiana, USA. The Cummins Engine Co. was one of the first to take advantage of the pioneering technology developed in Germany by Rudolf Diesel during the late 1800's. Cummins oil burning, or 'Diesel', engines were so reliable and successful that they were the first Company to offer 100,000 mile Warranty. They were fast as well, competing in the early Indianapolis 500 races running nonstop!</p>
      
      <p class="mb-4">We look forward to helping all our customers rebuild their engines, no matter how big or small the project. To discuss our parts and services in more detail call us on +44 (0)1604 491 133, email us at sales@jaytrac.co.uk or get in touch directly via our online enquiry form.</p>
    `
  },
  "deutz": {
    title: "Deutz®",
    image: "/deutz.jpg",
    description: `
      <p class="mb-4">Found in numerous agricultural, construction, marine, and power-generation applications, Deutz engines operate in some of the most critical, hard-wearing conditions. As the world's oldest leading independent engine manufacturer, they are no strangers to the longevity required of these engines and are continuously developing new and innovative products to serve their worldwide client base.</p>
      
      <p class="mb-4">As a leading supplier of replacement engine parts, here at Jaytrac we offer a full line of high-quality aftermarket parts for Deutz engines including:</p>
      
      <h3 class="text-xl font-bold text-[#003b6f] mt-6 mb-3">Engine Series We Supply Parts For:</h3>
      <ul class="list-disc pl-5 mb-4 space-y-1">
        <li>413 & 511 Series</li>
        <li>912 & 913 Series</li>
        <li>914 & 1011/F Series</li>
        <li>1012 & 1013 Series</li>
        <li>1015/1015C Series</li>
        <li>2011 Series</li>
      </ul>
      
      <p class="mb-4">In addition to our high standard of customer service, we are also known for the quality of the products we stock and distribute. All our parts for Deutz engines have been expertly designed and manufactured for applications in a variety of sectors to allow for a smoother and more efficient operation.</p>
      
      <h3 class="text-xl font-bold text-[#003b6f] mt-6 mb-3">History of Deutz</h3>
      <p class="mb-4">Deutz was founded in Germany in 1864, under the name of N.A Otto & Cie. Designing the four cylinder internal combustion engine and originally focusing in the production of stationary engines, the company expanded, with a new name and an impressive title as the world's oldest leading independent engine manufacturer. They are famous for their simple but robust air cooled engines.</p>
      
      <p class="mb-4">Deutz started and fostered the careers of many famous engineering and automotive icons such as: Nicolaus Otto, Gottlieb Daimler, Wilhelm Maybach, Prosper L'Orange, Ettore Bugatti, and Robert Bosch.</p>
      
      <p class="mb-4">Jaytrac is the one-stop-shop for all replacement Deutz Engine Parts, with our expert team dedicated to helping you rebuild your engine with the right products at the right price. To find out more call us on +44 (0)1604 491 133, email us at sales@jaytrac.co.uk or get in touch directly via our online enquiry form.</p>
    `
  },
  "perkins": {
    title: "Perkins®",
    image: "/perkins.jpg",
    description: `
      <p class="mb-4">As a re-seller of Genuine Perkins engine parts, Jaytrac is dedicated to providing each customer with the long-lasting, high-quality products that each customer associates with the Perkins brand. Founded in Peterborough in 1932, Perkins represents the best of British manufacturing with six world diesel speed records in 1935 and currently producing up to 500,000 units a year creating heavy-duty diesel and gas engines for the agricultural, construction, and power-generation sectors.</p>
      
      <p class="mb-4">Jaytrac is your one-stop-shop for heavy-duty engine parts, serving every customer with pride and diligence to find the exact product for their requirements. Our partnership with Perkins allows us to offer a complete range of Genuine parts for diesel and gas engines alike. Available in 3, 4, 6, and 8-cylinder configurations, our range includes (but is not limited to):</p>
      
      <h3 class="text-xl font-bold text-[#003b6f] mt-6 mb-3">Engine Series We Supply Parts For:</h3>
      <ul class="list-disc pl-5 mb-4 space-y-1">
        <li>4.236</li>
        <li>100 Series</li>
        <li>400 Series</li>
        <li>1000 Series</li>
        <li>1100 Series</li>
        <li>1200 Series</li>
        <li>1300 Series</li>
        <li>1600 Series</li>
        <li>2000 Series</li>
        <li>4000 Series including Gas</li>
      </ul>
      
      <h3 class="text-xl font-bold text-[#003b6f] mt-6 mb-3">History of Perkins</h3>
      <p class="mb-4">Perkins was created by Frank Perkins in 1932 in Peterborough, Great Britain. Frank's concept was to design & manufacture high speed diesel engines that could compete with the petrol engines of the time. By 1935, Perkins held six world diesel speed records over a variety of distances set at the famous Brooklands race track. Perkins had been supplying Massey Ferguson with engines for their agricultural applications for many years and in 1959 Massey purchased Perkins, keeping them as a separate identity.</p>
      
      <p class="mb-4">Perkins was also a supplier to Caterpillar, since the 1970's, and in a major move for both Companies Cat purchased Perkins in 1998. Still developed and manufactured in Peterborough Perkins are leading the way with clean technology to meets today's challenges and standards.</p>
      
      <p class="mb-4">If you need Perkins engine parts for your engine rebuild, get in touch with our team at Jaytrac today. We have a range of experts on-hand to make sure all of our customers find the right parts at the right price. To find out more call us on +44 (0)1604 491 133, email us at sales@jaytrac.co.uk or get in touch directly via our online enquiry form.</p>
    `
  },
  "fg-wilson": {
    title: "FG Wilson®",
    image: "/fgwilson.jpg",
    description: `
      <p class="mb-4">With facilities across the globe, FG Wilson is one of the largest diesel and gas engine power-generation manufacturers with parts uniquely designed to reliably compliment your other generator set components and help your unit achieve its optimum performance, life-span, and fuel efficiency.</p>
      
      <p class="mb-4">Using their unmatched engineering expertise and innovative production methods, all parts available from FG Wilson are manufactured to supply power sets with outputs from 75 to 2,200 KVA around the world.</p>
      
      <p class="mb-4">With over 20 years of expertise supplying the finest replacement parts for construction and power-generation equipment, Jaytrac is your one-stop-shop for finding the complete package at the right price. We can offer a full line of FG Wilson generator parts, including Perkins and Leroy Somer components, as well as many other leading brands to customers worldwide.</p>
      
      <h3 class="text-xl font-bold text-[#003b6f] mt-6 mb-3">Our FG Wilson® Parts Range:</h3>
      <ul class="list-disc pl-5 mb-4 space-y-1">
        <li>Engine components</li>
        <li>Alternators and electrical parts</li>
        <li>Control systems</li>
        <li>Fuel system components</li>
        <li>Cooling system parts</li>
        <li>Filtration solutions</li>
        <li>Exhaust components</li>
      </ul>
      
      <h3 class="text-xl font-bold text-[#003b6f] mt-6 mb-3">History of FG Wilson</h3>
      <p class="mb-4">Founded in 1966 by Fred Wilson, with just six employees, the Northern Ireland firm grew to become a leading supplier of electrical generators. Today, they stand as one of the largest diesel and gas engine power generation manufacturers in the world with facilities across the globe, including in Europe, India, China and Brazil.</p>
      
      <p class="mb-4">Fred Wilson left school at the age of 12 and joined his family firm as an engineering apprentice then becoming a scrap metal merchant. Fred's big breakthrough was entering the power generation market and selling hundreds of units to Saudi Arabia, supplying electricity to Bedouin tribes in remote areas.</p>
      
      <p class="mb-4">FG Wilson was sold to Caterpillar in 1999 but within a year Fred Wilson was back designing and manufacturing golf buggies!</p>
      
      <p class="mb-4">Get in touch with our expert team today to find out how we can help with your latest engine rebuild. Call us on +44 (0)1604 491 133, email us at sales@jaytrac.co.uk or get in touch directly via our online enquiry form.</p>
    `
  }
}

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
            <Link href="/our-range">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" /> Back to Our Range
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