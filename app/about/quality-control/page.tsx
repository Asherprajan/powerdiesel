import Image from "next/image";

export default function QualityControlPage() {
  const qualitySteps = [
    {
      title: "Supplier Qualification",
      description: "We carefully evaluate and qualify all suppliers through a rigorous assessment process, ensuring they meet our strict quality standards."
    },
    {
      title: "Incoming Material Inspection",
      description: "Every shipment undergoes thorough inspection upon receipt to verify specifications, dimensions, and condition."
    },
    {
      title: "Random Sampling Tests",
      description: "We conduct random sampling and testing throughout our inventory to ensure consistent quality across all product batches."
    },
    {
      title: "Performance Testing",
      description: "Critical components undergo performance testing to verify they meet or exceed industry standards and specifications."
    },
    {
      title: "Comprehensive Documentation",
      description: "We maintain detailed records of all quality checks, certifications, and test results for complete traceability."
    },
    {
      title: "Continuous Improvement",
      description: "Our quality processes are regularly reviewed and refined to incorporate new technologies and methodologies."
    }
  ];

  const certifications = [
    "ISO 9001:2015 - Quality Management Systems",
    "ISO 14001:2015 - Environmental Management Systems",
    "OHSAS 18001 - Occupational Health and Safety Management",
    "API Specifications (Various Categories)",
    "CE Marking for European Market Products"
  ];

  return (
    <>
      <h1 className="text-3xl font-bold text-[#003b6f] mb-6">Quality Control</h1>
      
      <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden mb-8">
        <Image 
          src="/placeholder.svg?height=400&width=800" 
          alt="PDEE Quality Control Lab"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      <div className="prose prose-slate max-w-none mb-8">
        <p>
          At Power Diesel Engines and Equipment Trading (PDEE), quality is not just a goal – it's a 
          fundamental principle that guides everything we do. We understand that our customers rely on 
          our products for critical operations, and equipment failure is simply not an option.
        </p>
        
        <p>
          Our comprehensive quality control system ensures that every product we supply meets the 
          highest standards of performance, reliability, and durability. From supplier selection to 
          final delivery, we maintain strict quality controls at every stage of the process.
        </p>
      </div>
      
      <h2 className="text-2xl font-bold text-[#003b6f] mb-4">Our Quality Control Process</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {qualitySteps.map((step, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-[#00b2f3] text-white flex items-center justify-center font-bold mr-3">
                {index + 1}
              </div>
              <h3 className="text-lg font-bold text-[#003b6f]">{step.title}</h3>
            </div>
            <p className="text-gray-700">{step.description}</p>
          </div>
        ))}
      </div>
      
      <div className="bg-white border border-gray-200 rounded-lg p-8 mb-10 shadow-sm">
        <h2 className="text-2xl font-bold text-[#003b6f] mb-4">Quality Assurance Principles</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-[#003b6f] mb-3">Prevention Over Detection</h3>
            <p className="text-gray-700 mb-6">
              We focus on preventing quality issues rather than detecting them after they occur. 
              This proactive approach includes careful supplier selection, clear specifications, 
              and rigorous incoming inspections.
            </p>
            
            <h3 className="text-xl font-bold text-[#003b6f] mb-3">Continuous Improvement</h3>
            <p className="text-gray-700">
              Our quality systems are continually evaluated and refined. We analyze performance data, 
              customer feedback, and industry developments to enhance our processes and products.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-[#003b6f] mb-3">Total Quality Management</h3>
            <p className="text-gray-700 mb-6">
              Quality is everyone's responsibility at PDEE. From management to warehouse staff, 
              every team member is trained in quality principles and empowered to identify and 
              address potential issues.
            </p>
            
            <h3 className="text-xl font-bold text-[#003b6f] mb-3">Data-Driven Decisions</h3>
            <p className="text-gray-700">
              We collect and analyze data throughout our operations to make informed decisions 
              about quality improvements, supplier performance, and product selection.
            </p>
          </div>
        </div>
      </div>
      
      <h2 className="text-2xl font-bold text-[#003b6f] mb-4">Certifications and Standards</h2>
      
      <div className="mb-10">
        <p className="text-gray-700 mb-4">
          Our commitment to quality is reflected in our adherence to international standards and 
          certifications. PDEE maintains the following certifications:
        </p>
        
        <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
          <ul className="space-y-2">
            {certifications.map((cert, index) => (
              <li key={index} className="flex items-center">
                <div className="w-5 h-5 rounded-full bg-[#00b2f3] flex items-center justify-center mr-3 flex-shrink-0">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-gray-800">{cert}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="prose prose-slate max-w-none">
        <h2>Product Traceability</h2>
        <p>
          We maintain complete traceability for all our products, allowing us to track each item 
          from supplier to customer. This traceability system enables us to:
        </p>
        
        <ul>
          <li>Quickly identify and resolve any quality issues</li>
          <li>Provide detailed product history and documentation when needed</li>
          <li>Ensure proper lot control and inventory management</li>
          <li>Facilitate efficient product recalls if ever necessary</li>
        </ul>
        
        <h2>Supplier Quality Management</h2>
        <p>
          Our suppliers are essential partners in our quality mission. We maintain strict supplier 
          qualification and monitoring processes, including:
        </p>
        
        <ul>
          <li>Comprehensive initial qualification assessments</li>
          <li>Regular performance evaluations</li>
          <li>On-site audits of key suppliers</li>
          <li>Collaborative improvement initiatives</li>
        </ul>
        
        <p>
          Through these efforts, we ensure that our suppliers maintain the same commitment to quality 
          that defines PDEE, resulting in consistently excellent products for our customers.
        </p>
      </div>
    </>
  );
} 