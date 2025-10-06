"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import { useParams } from "next/navigation"
import { useState, useEffect } from "react"

// Define a type for our product data
interface ProductData {
  title: string;
  image: string;
  description: string;
}

// Sample product data - in a real app, this would come from a database or API
const products: Record<string, ProductData> = {

  "engine-overhaul-kits": {
    title: "Engine Overhaul Kits",
    image: "/engine_overhaul_kits.webp",
    description: `
      <p class="mb-4">Power Diesel Engineering and equipment trading are proud to be the UK distributor for Maxiforce, a brand committed to manufacturing high-quality parts for diesel engines.</p>
      
      <p class="mb-4">Maxiforce was first established in 1994 and has since expanded its offering, with the most recent partnership with agricultural machinery company Kubota being launched in 2018.</p>
      
      <p class="mb-4">What has helped Maxiforce to build such an impressive range of clientele, and has helped them to stand out from other engine parts distributors, is the range of their engine replacement parts, enabling them to provide extensive and reliable overhaul kits for the leading brands.</p>
      
      <h3 class="text-xl font-bold text-[#003b6f] mt-6 mb-3">The importance of engine overhaul kits</h3>
      <p class="mb-4">An overhaul kit comes in very useful when the engine of your vehicle begins losing efficiency and functionality. The right overhaul kit can extend your engine's life and restore it to its previous performance level and save you from having to spend money on a new engine.</p>
      
      <p class="mb-4">Maxiforce has a vast range of individual parts and components, which can be purchased individually or as part of an engine overhaul kit. These include:</p>
      
      <ul class="list-disc pl-5 mb-4 space-y-1">
        <li>Cylinderheads</li>
        <li>Piston & liner kits</li>
        <li>Main bearings</li>
        <li>Oil pumps</li>
        <li>Oil coolers</li>
        <li>Turbochargers</li>
        <li>Crank shafts</li>
        <li>Camshafts</li>
        <li>Connecting rods</li>
        <li>Gaskets</li>
        <li>Seals</li>
        <li>And many more!</li>
      </ul>
      
      <p class="mb-4">As we've already mentioned, Maxiforce supplies engine parts and engine overhaul kits for a variety of leading engine brands. Below are some brands supported within the Maxiforce range, but there are more being added all the time:</p>
      
      <ul class="list-disc pl-5 mb-4 space-y-1">
        <li>Caterpillar</li>
        <li>Cummins</li>
        <li>Perkins</li>
        <li>Yanmar</li>
        <li>John Deere</li>
        <li>Mitsubishi</li>
        <li>Shibaura</li>
        <li>IH/Navistar</li>
      </ul>
      
      <p class="mb-4">This range of engines are used in a vast range of popular applications across agriculture, construction, marine and power generation applications.</p>
      
      <p class="mb-4">If you have an engine that is need of some restoration and improvement work, get in touch with our team today and we'll provide you with a Maxiforce haul kit that has the components that you need. You can reach us on +44 (0)1604 491 133 or email us at sales@pdee.com. Alternatively, you can get in touch directly by filling out our enquiry form.</p>
    `
  },
  "donaldson-filters": {
    title: "Donaldson Filters",
    image: "/Donaldson_filters .jpg",
    description: `
      <p class="mb-4">In order to provide clients with filtration systems that they can rely on, we partner with businesses that are experts in their field such as Donaldson Filtration Solutions. Donaldson is one of the largest providers of filtration technologies with 100 years to their name to show for it.</p>
      
      <p class="mb-4">The intricacies of Donaldson technology cannot always be seen, but its power is demonstrated through a variety of products from airplane cabins to bulldozers. This is why we stock and distribute quality Donaldson filtration products, because although minor compared to other machine components, choosing the right filter is essential and our customers deserve nothing less than the best.</p>
      
      <h3 class="text-xl font-bold text-[#003b6f] mt-6 mb-3">A Short History of Donaldson</h3>
      <p class="mb-4">It began in 1915 with Frank Donaldson Sr, who upon coming across a gentleman's tractor at his Bull Tractor company, had fashioned a simple air cleaner. The purpose of this invention was to protect the engine against wear and tear, and as a result reduce the number of times it would break down.</p>
      
      <p class="mb-4">After the success of his thinking had been proven, the young inventor introduced his air cleaner to the wider market, and it was at this moment that the Donaldson Company was born.</p>
      
      <h3 class="text-xl font-bold text-[#003b6f] mt-6 mb-3">Why Choose Donaldson Filters?</h3>
      <p class="mb-4">There is a reason that Donaldson has been the go-to supplier of filters for a range of industries from Food & Beverage to Transportation. Donaldson filters have always done the words efficiency, purity and integrity justice, and below are some of the ways in which Donaldson's engineers have helped to achieve this.</p>
      
      <h4 class="text-lg font-semibold text-[#003b6f] mt-4 mb-2">Bulk Fluid Filters</h4>
      <p class="mb-4">Donaldson's range of bulk fluid filtration systems has been designed to prevent contamination in lubricating oil or fuel from eroding filter components. The failure of equipment can lead to higher fuel consumptions and costly repairs.</p>
      
      <h4 class="text-lg font-semibold text-[#003b6f] mt-4 mb-2">Barrier Filtration</h4>
      <p class="mb-4">Donaldson air filters are designed with a sheet of porous paper contained within the filter which allows for air to pass through on its way to the engine, and any contaminant is caught trapped within the pores of the paper. The build up of trapped dirt helps to catch more dirt over time, making the whole filtration system a very effective one.</p>
      
      <h4 class="text-lg font-semibold text-[#003b6f] mt-4 mb-2">Custom Filtration Solutions</h4>
      <p class="mb-4">Donaldson's custom filtration solutions means that should a client have specific criteria that needs to be met, a filter can be designed that is fit for purpose and satisfies all the necessary criteria. It is this flexibility which has enable Donaldson to become a trusted provider of filters for multiple industries.</p>
      
      <h3 class="text-xl font-bold text-[#003b6f] mt-6 mb-3">Product Range:</h3>
      <ul class="list-disc pl-5 mb-4 space-y-1">
        <li>Air filters for engines and cabin air</li>
        <li>Fuel filters and water separators</li>
        <li>Hydraulic filters</li>
        <li>Lube filters</li>
        <li>Coolant filters</li>
        <li>Process filters for industrial applications</li>
      </ul>
      
      <p class="mb-4">With Donaldson filtration, you are taking a step in the direction for a cleaner world. So, if you would like more information about Donaldson filters, or other engine components that we stock contact us via phone on +44 (0) 1604 491133 or email us at sales@pdee.com.</p>
    `
  },
  "engine-parts": {
    title: "Engine Parts",
    image: "/Engine_Parts.jpg",
    description: `
      <p class="mb-4">We understand that Engines are the heart of your machinery, and as such are performance-critical. With over 25 years of experience, we know which brands to stock & supply to ensure savings without the risk of compromising on quality. As one of the UK's leading parts suppliers, Power Diesel Engineering and equipment trading provides replacement Engine Parts for Caterpillar, Cummins, Komatsu, Volvo, Perkins and many other machinery manufacturers.</p>
      
      <h3 class="text-xl font-bold text-[#003b6f] mt-6 mb-3">Our Engine Parts Range:</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <ul class="list-disc pl-5 space-y-1">
          <li>Pistons/Liners</li>
          <li>Piston Rings</li>
          <li>Crankshafts</li>
          <li>Cylinder heads</li>
          <li>Bearings</li>
          <li>Oil and Water pumps</li>
        </ul>
        
        <ul class="list-disc pl-5 space-y-1">
          <li>Fuel Pumps and Injectors</li>
          <li>Coolers</li>
          <li>Turbochargers</li>
          <li>Manifolds</li>
          <li>Drive belts</li>
          <li>Gasket sets</li>
          <li>In and Out of Frame sets</li>
        </ul>
      </div>
      
      <h3 class="text-xl font-bold text-[#003b6f] mt-6 mb-3">For Major Brands Including:</h3>
      <ul class="list-disc pl-5 mb-4 space-y-1">
        <li>Caterpillar</li>
        <li>Cummins</li>
        <li>Komatsu</li>
        <li>Volvo</li>
        <li>Perkins</li>
        <li>And many other machinery manufacturers</li>
      </ul>
      
      <h3 class="text-xl font-bold text-[#003b6f] mt-6 mb-3">Quality Assurance:</h3>
      <ul class="list-disc pl-5 mb-4 space-y-1">
        <li>OEM and high-quality aftermarket options</li>
        <li>Rigorous testing and quality control</li>
        <li>Full warranty coverage</li>
        <li>Technical support and installation advice</li>
      </ul>
      
      <p class="mb-4">We aim to deliver high-quality products to help maintain and improve the efficiency of our customer's equipment, as well as offer an exceptional standard of customer service to match. Online or over the phone, Power Diesel Engineering and equipment trading is here to help you find the right product for your engine. Give us a call on +44 (0) 1604 491133 or email us at sales@pdee.com.</p>
    `
  },
  "transmission": {
    title: "Transmission",
    image: "/Transmission.jpeg",
    description: `
      <p class="mb-4">We stock and distribute a complete range of high-quality replacement transmission and powertrain parts for Caterpillar, Komatsu and Volvo. High performing friction discs and clutch plates are essential to the longevity and performance of powertrain components. The discs and plate components supplied by Power Diesel Engineering and equipment trading are from OEM quality manufacturers.</p>
      
      <h3 class="text-xl font-bold text-[#003b6f] mt-6 mb-3">Transmission Components:</h3>
      <ul class="list-disc pl-5 mb-4 space-y-1">
        <li>Gears</li>
        <li>Carriers</li>
        <li>Friction discs and plates</li>
        <li>Bearings</li>
        <li>Torque converters</li>
        <li>Joints and spiders</li>
        <li>Driveshafts</li>
        <li>Crown wheel and pinion</li>
        <li>Final Drives</li>
      </ul>
      
      <h3 class="text-xl font-bold text-[#003b6f] mt-6 mb-3">ZF Partnership</h3>
      <p class="mb-4">PDEE is an official distributor for Original ZF Power Train and Axle Parts. As a global technology company with over 100 years of history at the forefront of commercial vehicle and industrial technology development, ZF paves the way for transport and mobility solutions. Working alongside one of the most respected names in the industry, Power Diesel Engineering and equipment trading is well equipped to ensure our customers receive the right product at the right price.</p>
      
      <h3 class="text-xl font-bold text-[#003b6f] mt-6 mb-3">Historical Context</h3>
      <p class="mb-4">The earliest earthmoving machines were based on agricultural tractors and utilised direct drive manual gearboxes. Following developments in the USA automotive industry in the 1940/50's construction equipment manufacturers used power trains based around torque convertors, planetary gear groups and power shift transmissions.</p>
      
      <p class="mb-4">One of the first Caterpillar tractors to go into production with a power shift transmission was the legendary D8H tractor in 1959. Marketed as 'split second shifts' the transmission reduced cycle time between forward & reverse. Production and operator efficiency were significantly improved due to the ease of use and comfort of then design.</p>
      
      <h3 class="text-xl font-bold text-[#003b6f] mt-6 mb-3">Applications:</h3>
      <ul class="list-disc pl-5 mb-4 space-y-1">
        <li>Construction equipment</li>
        <li>Mining machinery</li>
        <li>Agricultural equipment</li>
        <li>Forestry equipment</li>
        <li>Material handling</li>
      </ul>
      
      <p class="mb-4">For more information about the transmission products we can source supply, our partnership with ZF, or to enquire about our other products and services, contact us today on +44 (0) 1604 491133 or email us at sales@pdee.com, a member of our team will be happy to help.</p>
    `
  },
  "undercarriage": {
    title: "Undercarriage",
        image: "/Undercarriage.jpeg",
    description: `
      <p class="mb-4">We supply aftermarket undercarriage from Quality Assured European OEM Quality manufacturers ensuring value products.</p>
      
      <h3 class="text-xl font-bold text-[#003b6f] mt-6 mb-3">Our Undercarriage Range:</h3>
      <ul class="list-disc pl-5 mb-4 space-y-1">
        <li>Track links & shoes</li>
        <li>Track rollers & carrier rollers</li>
        <li>Bogies</li>
        <li>Idlers</li>
        <li>Segments</li>
        <li>Track adjuster assemblies</li>
        <li>Rubber and agricultural tracks</li>
      </ul>
      
      <h3 class="text-xl font-bold text-[#003b6f] mt-6 mb-3">Applications:</h3>
      <ul class="list-disc pl-5 mb-4 space-y-1">
        <li>Excavators</li>
        <li>Bulldozers</li>
        <li>Track loaders</li>
        <li>Drilling rigs</li>
        <li>Mining equipment</li>
      </ul>
      
      <h3 class="text-xl font-bold text-[#003b6f] mt-6 mb-3">Historical Context</h3>
      <p class="mb-4">Continuous tracks can be traced back to the 1830's, although the first 'endless railway wheel' was patented by the British Engineer James Boydell in 1846.</p>
      
      <p class="mb-4">Predominantly developed and used for military applications 'continuous tracks' were introduced onto Holt Tractors in the early 1900's. When soldiers observed these tractors 'crawling' they were soon nicknamed 'Caterpillar Tracks'.</p>
      
      <p class="mb-4">Cat also developed the 'high drive' (elevated sprocket) design, this is when the drive is elevated away from the earth, reducing damage and providing design and maintenance advantages. Caterpillar first introduced this with the D10 dozer in 1977.</p>
      
      <p class="mb-4">We continuously ensure our clients receive the right product at the right price. To enquire about our undercarriage products or for more information about the other heavy equipment replacement parts we stock, get in touch on +44 (0) 1604 491133 or email sales@pdee.com. We're on hand online or over the phone to help you get it right.</p>
    `
  },
  "get": {
    title: "GET (Ground Engaging Tools)",
    image: "/get.jpeg",
    description: `
      <p class="mb-4">For more than 25 years, we have been supplying replacement ground engaging tools (GET) and undercarriage parts for heavy-duty Caterpillar, Komatsu and Volvo machinery. Replacing machinery parts, including GET, as part of planned maintenance can help to reduce operating costs and sustain the performance of your machine.</p>
      
      <h3 class="text-xl font-bold text-[#003b6f] mt-6 mb-3">Ground Engaging Tools</h3>
      <p class="mb-4">Work tools and implements are a crucial part of any machine. From blades or buckets to rippers or shanks, no matter the application, GET is the primary reason the machine exists. We offer a wide range of GET components, including Boron steel cutting edges and grader blades sourced from an OEM Manufacturer.</p>
      
      <h3 class="text-xl font-bold text-[#003b6f] mt-6 mb-3">Our GET Product Range:</h3>
      <ul class="list-disc pl-5 mb-4 space-y-1">
        <li>Cutting edges</li>
        <li>Teeth</li>
        <li>Adapters</li>
        <li>Ripper Shanks</li>
        <li>Plow bolts & nuts</li>
      </ul>
      
      <h3 class="text-xl font-bold text-[#003b6f] mt-6 mb-3">Compatible Equipment:</h3>
      <ul class="list-disc pl-5 mb-4 space-y-1">
        <li>Excavators</li>
        <li>Wheel loaders</li>
        <li>Bulldozers</li>
        <li>Motor graders</li>
        <li>Scrapers</li>
      </ul>
      
      <h3 class="text-xl font-bold text-[#003b6f] mt-6 mb-3">Features:</h3>
      <ul class="list-disc pl-5 mb-4 space-y-1">
        <li>Optimized wear materials for extended service life</li>
        <li>Boron steel cutting edges for durability</li>
        <li>OEM quality manufacturing</li>
        <li>Application-specific designs for maximum productivity</li>
      </ul>
      
      <p class="mb-4">We continuously ensure our clients receive the right product at the right price. To enquire about our GET products or for more information about the other heavy equipment replacement parts we stock, get in touch with us today on +44 (0) 1604 491133 or email sales@pdee.com. We're on hand online or over the phone to help you get it right.</p>
    `
  },
  "fuel-injection-parts": {
    title: "Fuel Injection Parts",
    image: "/fuel-injection.jpeg",
    description: `
      <p class="mb-4">Fuel injection parts are crucial in the role they play when it comes to delivering fuel into the cylinder. It is important to ensure that they are in optimal working condition to guarantee maximum engine performance. At PDEE, we offer a range of fuel injection components, including Cummins PT and Celect units and parts for Caterpillar mechanical, along with HEUI and Perkins CAV units. We also supply the wide range of Bosch product.</p>
      
      <h3 class="text-xl font-bold text-[#003b6f] mt-6 mb-3">Our Fuel System Range:</h3>
      <ul class="list-disc pl-5 mb-4 space-y-1">
        <li>Injectors</li>
        <li>Nozzles</li>
        <li>Valve Service Groups</li>
        <li>Complete Fuel Pumps</li>
        <li>Plunger and Barrels</li>
        <li>Fuel Lines</li>
        <li>Turbochargers and Cartridges</li>
      </ul>
      
      <h3 class="text-xl font-bold text-[#003b6f] mt-6 mb-3">Brand Compatibility:</h3>
      <ul class="list-disc pl-5 mb-4 space-y-1">
        <li>Cummins PT and Celect units</li>
        <li>Caterpillar mechanical systems</li>
        <li>Caterpillar HEUI systems</li>
        <li>Perkins CAV units</li>
        <li>Bosch fuel injection systems</li>
      </ul>
      
      <h3 class="text-xl font-bold text-[#003b6f] mt-6 mb-3">Applications:</h3>
      <ul class="list-disc pl-5 mb-4 space-y-1">
        <li>Diesel engines for construction and mining</li>
        <li>Agricultural equipment</li>
        <li>Power generation systems</li>
        <li>Marine engines</li>
        <li>Industrial machinery</li>
      </ul>
      
      <p class="mb-4">Whether you are looking to optimise the current performance of your heavy machinery or are in need of a replacement for a failed item, PDEE can provide the full solution. Talk to one of our experts by calling +44 (0) 1604 491133 or email us at sales@pdee.com</p>
    `
  },
  "fleetguard-filters": {
    title: "Fleetguard Filters",
    image: "/fleetguard_filters.jpg",
    description: `
      <p class="mb-4">We stock and distribute high-quality filtration products from class-leading OE manufacturer Fleetguard, because, when it comes to maintaining the efficiency and performance of heavy-duty machinery we know filtration is critical. Choosing the right filter is an essential, but often over looked part of heavy machinery maintenance which is why PDEE is here to help.</p>
      
      <p class="mb-4">Fleetguard, also known as Cummins Filtration, offers a full line of filters specifically engineered for a wide range of heavy-duty systems. Through advanced design and high-quality performance, Fleetguard filters give customers the ultimate protection for all of their equipment.</p>
      
      <h3 class="text-xl font-bold text-[#003b6f] mt-6 mb-3">Product Range:</h3>
      <ul class="list-disc pl-5 mb-4 space-y-1">
        <li>Air filters</li>
        <li>Fuel filters and water separators</li>
        <li>Lube filters</li>
        <li>Hydraulic filters</li>
        <li>Coolant and DEF filters</li>
        <li>Crankcase ventilation filters</li>
      </ul>
      
      <h3 class="text-xl font-bold text-[#003b6f] mt-6 mb-3">Why Choose Fleetguard:</h3>
      <ul class="list-disc pl-5 mb-4 space-y-1">
        <li><strong>Meets OEM Specifications</strong> – All Fleetguard products meet OEM specifications to ensure engines and other systems reach their maximum life.</li>
        <li><strong>Backed by the best warranty in the business</strong> – Fleetguard filters offer the most inclusive and comprehensive warranty in the industry, giving customers total confidence in their purchase.</li>
        <li><strong>Filters for every fleet</strong> – Covering the widest range of air, lube, fuel, and hydraulic filters in the heavy-duty industry, with over 8,300 products let PDEE find the parts you need.</li>
        <li><strong>Systems approach</strong> – PDEE doesn't just supply parts, in partnership with Fleetguard we supply the comprehensive range to support the maintenance of systems from fuel to cooling systems.</li>
      </ul>
      
      <h3 class="text-xl font-bold text-[#003b6f] mt-6 mb-3">OEM Compatibility:</h3>
      <ul class="list-disc pl-5 mb-4 space-y-1">
        <li>Caterpillar</li>
        <li>Cummins</li>
        <li>Komatsu</li>
        <li>Volvo</li>
        <li>Other major manufacturers</li>
      </ul>
      
      <p class="mb-4">Whether you require information regarding Fleetguard filters, or our other engine part products, our friendly customer service team is on hand to answer your questions. Contact us via phone on +44 (0) 1604 491133 or email us at sales@pdee.com</p>
    `
  },
  "bearings": {
    title: "Bearings",
    image: "/bearings.jpeg",
    description: `
      <p class="mb-4">Bearings truly are the components that keep machines moving, they help to reduce friction between moving parts to ensure smooth operation. As one of the UK's largest parts suppliers we stock bearings for Caterpillar, Komatsu and Volvo machines from OE quality manufacturers such as Timken and NTN-Bower.</p>
      
      <p class="mb-4">There are a variety of different types of bearings, ensuring you opt for the right one for your application is essential.</p>
      
      <h3 class="text-xl font-bold text-[#003b6f] mt-6 mb-3">Our Bearing Range:</h3>
      <ul class="list-disc pl-5 mb-4 space-y-1">
        <li><strong>Tapered bearings</strong> – Typically used in hoisting equipment, wheel bearings, and rolling mills, especially within the mining industry.</li>
        <li><strong>Roller bearings</strong> – This type of bearing is often used in engines of heavy equipment and machinery.</li>
        <li><strong>Needle roller bearing</strong> – Bearings of this type are often used to support rotating shafts due to their suitability for radial, axial, and thrust loads.</li>
        <li><strong>Spherical roller bearings</strong> – Due to their high shock tolerance and load capacity these bearings are often seen in cylinders and conveyors of heavy-duty equipment.</li>
        <li>Frame/bucket pins and bushes</li>
      </ul>
      
      <h3 class="text-xl font-bold text-[#003b6f] mt-6 mb-3">Brand Partnerships:</h3>
      <ul class="list-disc pl-5 mb-4 space-y-1">
        <li>Timken</li>
        <li>NTN-Bower</li>
        <li>Other OE quality manufacturers</li>
      </ul>
      
      <h3 class="text-xl font-bold text-[#003b6f] mt-6 mb-3">Applications:</h3>
      <ul class="list-disc pl-5 mb-4 space-y-1">
        <li>Construction equipment</li>
        <li>Mining machinery</li>
        <li>Agricultural equipment</li>
        <li>Industrial gearboxes</li>
        <li>Electric motors</li>
        <li>Conveyor systems</li>
      </ul>
      
      <h3 class="text-xl font-bold text-[#003b6f] mt-6 mb-3">Historical Context</h3>
      <p class="mb-4">One of the first recorded drawings of a bearing, or anti-friction bearing as they are sometimes called, was by Leonardo da Vinci c. 1503.</p>
      
      <p class="mb-4">In simple terms, bearings help reduce friction between moving parts. The first modern recorded patent on bearings was awarded to Philip Vaughan, a British inventor and ironmaster from Carmarthen in 1794. His was the first modern bearing design, with the ball running along a groove in the axle assembly.</p>
      
      <p class="mb-4">In 1898 Henry Timken obtained a Patent for the tapered roller bearing and a year later the famous Timken Roller Bearing Axle Company was incorporated in St. Louis, USA.</p>
      
      <p class="mb-4">With over 25 years of industry experience behind us, we have the knowledge to proficiently and accurately find the product you require. We look forward to helping you source anything from Caterpillar aftermarket parts to components for Deutz engines.</p>
      
      <p class="mb-4">Our friendly customer service team is on hand to answer your questions, we're here to help. Contact us today on +44 (0) 1604 491133 or email us at sales@pdee.com</p>
    `
  },
  "seals-gaskets": {
    title: "Seals & Gaskets",
    image: "/seals_gaskets.jpg",
    description: `
      <p class="mb-4">Whilst small fixtures compared to the equipment they are used in; seals and gaskets are certainly not small in importance. Quality sealing products are essential to the performance of machine critical components. PDEE source sealing products from USA OEM quality Manufacturers and are committed to ensuring the consistent quality of the sealing products to our customers.</p>
      
      <p class="mb-4">Whether you need a dynamic seal or a stationary gasket, PDEE stock and supply a vast range of high-quality replacements for a large selection of brands. In addition to supplying individual parts, we can build and assemble full or partial overhaul kits to tailor a solution to your specifications and requirements.</p>
      
      <h3 class="text-xl font-bold text-[#003b6f] mt-6 mb-3">Our Seal & Gasket Range:</h3>
      <ul class="list-disc pl-5 mb-4 space-y-1">
        <li>Gaskets and component gasket kits</li>
        <li>O-Rings and general seals (inc: Viton, Neoprene etc.)</li>
        <li>O-Ring kits</li>
        <li>Hydraulic cylinder seal kits</li>
        <li>Track adjuster seal kits</li>
        <li>Duo cone seals</li>
      </ul>
      
      <h3 class="text-xl font-bold text-[#003b6f] mt-6 mb-3">Materials:</h3>
      <ul class="list-disc pl-5 mb-4 space-y-1">
        <li>Nitrile (NBR)</li>
        <li>Viton® (FKM)</li>
        <li>Neoprene</li>
        <li>Silicone</li>
        <li>Polyurethane</li>
        <li>Metal and composite materials</li>
      </ul>
      
      <h3 class="text-xl font-bold text-[#003b6f] mt-6 mb-3">Historical Context</h3>
      <p class="mb-4">An 'O' Ring is a profile of elastomer material with a round (O shaped) cross section used as a mechanical seal. It's a simple but critical design, seating in a groove and compressing during assembly between two parts creating the seal.</p>
      
      <p class="mb-4">The American industrialist and self taught chemist Charles Dunlop first improved the 'elastic' properties of natural rubber by the vulcanisation process in 1839. It was though only during the 1930's that the molecular model of rubber was really understood.</p>
      
      <p class="mb-4">In 1937 a USA aircraft landing gear manufacturer was struggling to find the right seal for their landing struts which needed to be more light weight for military applications. A Cleveland supply Company enlisted the aid of Niels Christensen, a Danish inventor, who had perfected the 'O' Ring and its application inside a grooved metal housing. Christensen, who was living in Ohio at the time, filed for the patent on his invention in 1937. Other Aircraft manufacturers began using the new O ring technology extensively in the production of WWII aircraft.</p>
      
      <p class="mb-4">During the 1960's and 1970's rapid development in synthetic polymers were made and other OEM's such as Caterpillar, Komatsu and Volvo began using Silicon and Nitrile products.</p>
      
      <p class="mb-4">We strive to supply the right products, at the right price; it's this knowledge that sets us apart, along with the excellent customer service we aim for. Call us on +44 (0) 1604 491133 or email us at sales@pdee.com for more information.</p>
    `
  },
  "electrics": {
    title: "Electrics",
    image: "/electrics.jpeg",
    description: `
      <p class="mb-4">We understand how frustrating and costly machinery not operating can be. Whether it is an engine not starting, or batteries not charging due to a poor-quality starter motor or alternator, we can supply the components needed to get up and running. PDEE supply rotating electrics from OEM or OEM quality manufacturers to keep your plant moving. Our industry knowledge and experience means when it comes to supplying you with high-quality replacement parts, we get it right.</p>
      
      <p class="mb-4">We hold a wide range of electrical components in stock for Caterpillar, Komatsu and Cummins machinery and have the following products available:</p>
      
      <h3 class="text-xl font-bold text-[#003b6f] mt-6 mb-3">Electrical Components:</h3>
      <ul class="list-disc pl-5 mb-4 space-y-1">
        <li>Starter Motors</li>
        <li>Alternators</li>
        <li>Switches</li>
        <li>Gauges</li>
        <li>Sensors</li>
        <li>Regulators</li>
        <li>Spark plugs</li>
        <li>Thermocouples</li>
        <li>Terminals</li>
        <li>Glow plugs</li>
        <li>Electronic Control Modules (ECM)</li>
      </ul>
      
      <h3 class="text-xl font-bold text-[#003b6f] mt-6 mb-3">Applications:</h3>
      <ul class="list-disc pl-5 mb-4 space-y-1">
        <li>Diesel and gasoline engines</li>
        <li>Construction equipment</li>
        <li>Mining machinery</li>
        <li>Agricultural equipment</li>
        <li>Industrial systems</li>
      </ul>
      
      <h3 class="text-xl font-bold text-[#003b6f] mt-6 mb-3">Historical Context</h3>
      <p class="mb-4">In 1896 Frank and Perry Remy opened an electrical wiring business in Indiana, USA. The innovative brothers incorporated the Remy Electric Company in 1901. By 1910 Perry had turned his magneto prototypes and experiments into 50,000 production units a year!</p>
      
      <p class="mb-4">In the early days the Remy brothers' main competitor was Dayton Engineering Laboratories Company, DELCO for short, a company that also manufactured ignition equipment and generators. In 1916 both Remy and Delco were purchased by the United Motor Company and then subsequently by General Motors in 1918. It was General Motors who amalgamated the two competitors into the legendary electrical component brand Delco Remy.</p>
      
      <p class="mb-4">From electrical components, to replacement machinery parts, bearings, and filters we offer a one stop service for quality replacement parts. For more information on our wide range of products contact us via phone on +44 (0) 1604 491133 or email us at sales@pdee.com</p>
    `
  },
  "hydraulics-hoses": {
    title: "Hydraulics & Hoses",
    image: "/Hydraulics_Hoses .jpeg",
    description: `
      <p class="mb-4">PDEE stocks and supplies a wide range of quality replacement Hydraulic parts for Caterpillar, Komatsu and Volvo heavy-duty machines to ensure you can service your equipment. We aim to provide a one stop shop for quality parts, which is why we also supply hydraulic hoses.</p>
      
      <h3 class="text-xl font-bold text-[#003b6f] mt-6 mb-3">Hydraulic Components:</h3>
      <ul class="list-disc pl-5 mb-4 space-y-1">
        <li>Hydraulic Cartridges</li>
        <li>Piston Pumps, Barrels and Pistons</li>
        <li>Gear Pumps</li>
        <li>Hydraulic Cylinders</li>
        <li>Hydraulic seal kits</li>
        <li>Hydraulic Motors</li>
      </ul>
      
      <h3 class="text-xl font-bold text-[#003b6f] mt-6 mb-3">Hydraulic Hoses:</h3>
      <p class="mb-4">We also source and supply replacement Hydraulic hoses for Caterpillar. With over 100,000 references available with a full range of Low, Medium and High-pressure hoses. Hoses are made by the part number and we supply interchangeable alternatives for Caterpillar XT-3 and XT-5 range.</p>
      
      <h3 class="text-xl font-bold text-[#003b6f] mt-6 mb-3">Available Configurations:</h3>
      <ul class="list-disc pl-5 mb-4 space-y-1">
        <li>¼" to 2" Hose</li>
        <li>Code 61 Flange</li>
        <li>Code 62 Flange</li>
        <li>JIC 37</li>
        <li>O-Ring Face Seal (ORFS)</li>
        <li>NPTF</li>
        <li>JIS</li>
        <li>BSPP</li>
        <li>Metric</li>
      </ul>
      
      <h3 class="text-xl font-bold text-[#003b6f] mt-6 mb-3">Applications:</h3>
      <ul class="list-disc pl-5 mb-4 space-y-1">
        <li>Construction equipment</li>
        <li>Mining machinery</li>
        <li>Agricultural equipment</li>
        <li>Material handling systems</li>
        <li>Industrial applications</li>
      </ul>
      
      <p class="mb-4">For more information on our wide range of products contact us via phone on +44 (0) 1604 491133 or email us at sales@pdee.com</p>
    `
  }
}

export default function ProductPage() {
  const params = useParams();
  const [product, setProduct] = useState<ProductData>({
    title: "Loading...",
    image: "/placeholder.svg?height=400&width=600",
    description: "<p class='mb-4'>Loading product information...</p>"
  });

  useEffect(() => {
    // Get the slug from params
    const slug = typeof params.slug === 'string' ? params.slug : Array.isArray(params.slug) ? params.slug[0] : '';
    
    // Get the product data
    const productData = products[slug] || {
      title: "Product Not Found",
      image: "/placeholder.svg?height=400&width=600",
      description: "<p class='mb-4'>The requested product information could not be found.</p>"
    };
    
    setProduct(productData);
  }, [params]);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1 py-12 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="mb-8">
            <Link href="/products">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" /> Back to Products
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="relative rounded-lg overflow-hidden">
              <Image 
                src={product.image} 
                alt={product.title}
                width={600}
                height={400}
                className="object-cover w-full h-auto"
              />
            </div>
            
            <div>
              <h1 className="text-3xl font-bold text-[#003b6f] mb-6">{product.title}</h1>
              
              <div 
                className="prose prose-slate max-w-none text-gray-700"
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
              
              <div className="mt-8">
                <Button className="bg-[#00b2f3] hover:bg-[#0090c3] text-white">
                  Enquire About This Product
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