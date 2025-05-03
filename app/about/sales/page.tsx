import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SalesPage() {
  const services = [
    {
      title: "Expert Consultation",
      description: "Our sales team provides expert advice on product selection based on your specific requirements and operating conditions."
    },
    {
      title: "Customized Solutions",
      description: "We work with you to develop tailored solutions that address your unique challenges and equipment needs."
    },
    {
      title: "Competitive Pricing",
      description: "Our strong manufacturer relationships and volume purchasing allow us to offer competitive pricing without compromising quality."
    },
    {
      title: "Efficient Delivery",
      description: "With our global logistics network, we ensure timely delivery of your orders, minimizing downtime and keeping your operations running smoothly."
    },
    {
      title: "After-Sales Support",
      description: "Our commitment doesn't end with the sale - we provide ongoing technical support and assistance throughout the product lifecycle."
    },
    {
      title: "Product Training",
      description: "We offer training sessions on proper installation, maintenance, and optimal use of our products to maximize performance and longevity."
    }
  ];

  return (
    <>
      <h1 className="text-3xl font-bold text-[#003b6f] mb-6">Sales and Service</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <div>
          <div className="prose prose-slate max-w-none">
            <p>
              At Power Diesel Engines and Equipment Trading (PDEE), our sales approach is built around understanding 
              your needs and providing solutions that enhance your operations and productivity.
            </p>
            
            <p>
              We believe that successful sales relationships are based on trust, expertise, and a genuine commitment 
              to helping our customers succeed. Our experienced sales team takes the time to understand your business, 
              your challenges, and your specific requirements before recommending products or solutions.
            </p>
          </div>
        </div>
        
        <div className="relative w-full h-64 rounded-lg overflow-hidden">
          <Image 
            src="/placeholder.svg?height=300&width=400" 
            alt="PDEE Sales Team"
            fill
            className="object-cover"
          />
        </div>
      </div>
      
      <h2 className="text-2xl font-bold text-[#003b6f] mb-4">Our Sales Services</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {services.map((service, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-100">
            <h3 className="text-lg font-bold text-[#003b6f] mb-3">{service.title}</h3>
            <p className="text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>
      
      <div className="bg-[#003b6f] text-white rounded-lg p-8 mb-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 md:mr-6">
            <h3 className="text-2xl font-bold mb-2">Ready to explore our products?</h3>
            <p className="text-gray-200">
              Our sales team is ready to assist you in finding the perfect solutions for your equipment needs.
            </p>
          </div>
          <div className="flex-shrink-0">
            <Link href="/contact">
              <Button className="bg-white text-[#003b6f] hover:bg-gray-100">
                Contact Sales Team
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      <h2 className="text-2xl font-bold text-[#003b6f] mb-4">Our Sales Process</h2>
      
      <div className="space-y-6 mb-10">
        <div className="flex items-start">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#00b2f3] text-white flex items-center justify-center font-bold mr-4">
            1
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#003b6f] mb-2">Initial Consultation</h3>
            <p className="text-gray-700">
              We begin by understanding your specific needs, challenges, and requirements through 
              a detailed consultation with our sales experts.
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#00b2f3] text-white flex items-center justify-center font-bold mr-4">
            2
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#003b6f] mb-2">Solution Design</h3>
            <p className="text-gray-700">
              Based on your requirements, we develop a customized solution, recommending the most 
              appropriate products and services for your specific application.
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#00b2f3] text-white flex items-center justify-center font-bold mr-4">
            3
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#003b6f] mb-2">Proposal and Quotation</h3>
            <p className="text-gray-700">
              We provide a detailed proposal outlining our recommended solutions, along with transparent 
              pricing and delivery timelines.
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#00b2f3] text-white flex items-center justify-center font-bold mr-4">
            4
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#003b6f] mb-2">Order Fulfillment</h3>
            <p className="text-gray-700">
              Once your order is confirmed, our logistics team ensures efficient processing and delivery, 
              keeping you informed throughout the process.
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#00b2f3] text-white flex items-center justify-center font-bold mr-4">
            5
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#003b6f] mb-2">After-Sales Support</h3>
            <p className="text-gray-700">
              Our relationship continues after delivery, with our team providing ongoing support, 
              technical assistance, and ensuring your complete satisfaction.
            </p>
          </div>
        </div>
      </div>
      
      <div className="prose prose-slate max-w-none">
        <h2>Custom Procurement Services</h2>
        <p>
          In addition to our standard product offerings, we provide specialized procurement services 
          for rare or hard-to-find parts. If you're looking for specific components that aren't readily 
          available, our global sourcing network can help locate and deliver these items, saving you 
          time and resources.
        </p>
        
        <h2>Volume Discounts</h2>
        <p>
          For bulk orders and regular customers, we offer attractive volume discounts that provide 
          even greater value without compromising on quality or service. Contact our sales team to 
          discuss your volume requirements and discover the savings available to your business.
        </p>
      </div>
    </>
  );
} 