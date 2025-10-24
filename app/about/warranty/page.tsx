import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function WarrantyPage() {
  const warrantyBenefits = [
    "Protection against manufacturing defects",
    "Coverage for premature wear under normal operating conditions",
    "Support from our technical team for warranty concerns",
    "Simple and transparent claim process",
    "Peace of mind for your equipment investment"
  ];

  return (
    <>
      <h1 className="text-3xl font-bold text-[#003b6f] mb-6">Product Warranty</h1>
      
      <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden mb-8">
        <Image 
          src="/warranty.jpg" 
          alt="PDEE Quality Products"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      <div className="prose prose-slate max-w-none mb-8">
        <p>
          At Power Diesel Engines and Equipment Trading (PDEE), we stand behind the quality of 
          every product we sell. Our comprehensive warranty program reflects our confidence in 
          our products and our commitment to customer satisfaction.
        </p>
        
        <p>
          We understand that reliability is crucial for your operations, which is why we offer 
          warranties that provide genuine protection and peace of mind for your investment.
        </p>
      </div>
      
      <div className="bg-white border border-gray-200 rounded-lg p-8 mb-10 shadow-sm">
        <h2 className="text-2xl font-bold text-[#003b6f] mb-6">Standard Warranty Terms</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold text-[#003b6f] mb-3">Coverage Period</h3>
            <p className="text-gray-700">
              Our standard warranty provides coverage for <span className="font-semibold">12 months</span> from 
              the date of purchase or <span className="font-semibold">1,000 operating hours</span>, whichever occurs first. 
              Extended warranty options are available for selected product categories.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-[#003b6f] mb-3">What's Covered</h3>
            <p className="text-gray-700 mb-4">
              Our warranty covers defects in materials and workmanship under normal use and 
              service conditions. This includes:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Manufacturing defects</li>
              <li>Material failures</li>
              <li>Premature wear under normal operating conditions</li>
              <li>Components that fail to perform as specified</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-[#003b6f] mb-3">What's Not Covered</h3>
            <p className="text-gray-700 mb-4">
              Our warranty does not cover damage resulting from:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Improper installation or use</li>
              <li>Neglect or lack of proper maintenance</li>
              <li>Accidents or abuse</li>
              <li>Unauthorized modifications</li>
              <li>Normal wear and tear</li>
              <li>Environmental factors beyond our control</li>
            </ul>
          </div>
        </div>
      </div>
      
      <h2 className="text-2xl font-bold text-[#003b6f] mb-4">Warranty Benefits</h2>
      
      <div className="bg-gray-50 rounded-lg p-6 border border-gray-100 mb-10">
        <ul className="space-y-3">
          {warrantyBenefits.map((benefit, index) => (
            <li key={index} className="flex items-center">
              <div className="w-6 h-6 rounded-full bg-[#00b2f3] flex items-center justify-center mr-3 flex-shrink-0">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-gray-800">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <h2 className="text-2xl font-bold text-[#003b6f] mb-4">Warranty Claim Process</h2>
      
      <div className="space-y-6 mb-10">
        <div className="flex items-start">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#00b2f3] text-white flex items-center justify-center font-bold mr-4">
            1
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#003b6f] mb-2">Contact Us</h3>
            <p className="text-gray-700">
              As soon as you encounter an issue, contact our customer service team to report the problem
              and initiate the warranty claim process.
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#00b2f3] text-white flex items-center justify-center font-bold mr-4">
            2
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#003b6f] mb-2">Provide Information</h3>
            <p className="text-gray-700">
              Supply the required details, including purchase information, product details, and a 
              description of the issue, along with supporting documentation like photos or videos.
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#00b2f3] text-white flex items-center justify-center font-bold mr-4">
            3
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#003b6f] mb-2">Claim Assessment</h3>
            <p className="text-gray-700">
              Our technical team will assess the claim based on the information provided and may 
              request additional details or inspection of the product.
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#00b2f3] text-white flex items-center justify-center font-bold mr-4">
            4
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#003b6f] mb-2">Resolution</h3>
            <p className="text-gray-700">
              Once approved, we will provide the appropriate resolution, which may include repair, 
              replacement, or refund, depending on the specific circumstances.
            </p>
          </div>
        </div>
      </div>
      
      <div className="bg-[#003b6f] text-white rounded-lg p-8 mb-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 md:mr-6">
            <h3 className="text-2xl font-bold mb-2">Need to make a warranty claim?</h3>
            <p className="text-gray-200">
              Our team is ready to assist you with any warranty concerns or questions.
            </p>
          </div>
          <div className="flex-shrink-0">
            <Link href="/contact">
              <Button className="bg-white text-[#003b6f] hover:bg-gray-100">
                Contact Support
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      <div className="prose prose-slate max-w-none">
        <h2>Extended Warranty Options</h2>
        <p>
          For additional protection and peace of mind, we offer extended warranty options for 
          selected product categories. These extended warranties provide coverage beyond our 
          standard warranty period, ensuring longer-term protection for your investment.
        </p>
        
        <p>
          Extended warranty options can be purchased at the time of original product purchase or 
          within 30 days of the purchase date. Contact our sales team for more information on 
          available extended warranty options for your specific products.
        </p>
        
        <h2>Warranty Registration</h2>
        <p>
          To ensure smooth processing of any future warranty claims, we recommend registering 
          your product warranty within 30 days of purchase. Registration can be completed online 
          through our customer portal or by submitting the warranty registration card included 
          with your product.
        </p>
        
        <h2>Our Warranty Commitment</h2>
        <p>
          Our warranty policy reflects our commitment to customer satisfaction and product quality. 
          We strive to handle all warranty claims fairly, transparently, and efficiently, working 
          with you to resolve any issues as quickly as possible to minimize disruption to your 
          operations.
        </p>
      </div>
    </>
  );
} 