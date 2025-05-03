import Image from "next/image";

export default function GlobalPresencePage() {
  const regions = [
    {
      name: "Middle East",
      countries: ["UAE", "Saudi Arabia", "Qatar", "Kuwait", "Oman", "Bahrain"],
      description: "Our headquarters and main distribution center is located in the UAE, serving the entire GCC region with rapid delivery and local support."
    },
    {
      name: "Africa",
      countries: ["Egypt", "Algeria", "Morocco", "Nigeria", "Kenya", "South Africa"],
      description: "Our African operations focus on supporting mining, construction, and power generation sectors across the continent with specialized local teams."
    },
    {
      name: "Asia",
      countries: ["India", "Pakistan", "Bangladesh", "Philippines", "Malaysia", "Indonesia"],
      description: "Growing presence in key Asian markets with distribution partnerships and technical support centers."
    },
    {
      name: "Europe",
      countries: ["UK", "Germany", "France", "Italy", "Spain"],
      description: "Strategic partnerships with European manufacturers and suppliers, ensuring access to premium quality parts and components."
    }
  ];

  return (
    <>
      <h1 className="text-3xl font-bold text-[#003b6f] mb-6">Global Presence</h1>
      
      <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden mb-8">
        <Image 
          src="/placeholder.svg?height=400&width=800" 
          alt="PDEE Global Map"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      <div className="prose prose-slate max-w-none mb-8">
        <p>
          Power Diesel Engines and Equipment Trading (PDEE) has established a strong global presence, 
          with operations spanning multiple continents. Our international network allows us to 
          serve customers around the world with the same level of quality and dedication that defines 
          our brand.
        </p>
        
        <p>
          Through strategic partnerships, distribution networks, and regional offices, we ensure 
          that our products and services are accessible to customers wherever they operate, backed 
          by local support and expertise.
        </p>
      </div>
      
      <h2 className="text-2xl font-bold text-[#003b6f] mb-4">Our Regional Operations</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {regions.map((region, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-100">
            <h3 className="text-xl font-bold text-[#003b6f] mb-3">{region.name}</h3>
            <p className="text-gray-700 mb-4">{region.description}</p>
            
            <div>
              <h4 className="text-sm font-semibold text-gray-600 mb-2">Countries:</h4>
              <div className="flex flex-wrap gap-2">
                {region.countries.map((country, idx) => (
                  <span 
                    key={idx} 
                    className="px-3 py-1 bg-white text-sm rounded-full border border-gray-200"
                  >
                    {country}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <h2 className="text-2xl font-bold text-[#003b6f] mb-4">Global Supply Chain</h2>
      <div className="prose prose-slate max-w-none">
        <p>
          Our global supply chain is built on reliability, efficiency, and adaptability. We've 
          developed a robust network of suppliers, manufacturers, and logistics partners that 
          enables us to:
        </p>
        
        <ul>
          <li>Source products from the world's leading manufacturers</li>
          <li>Maintain large inventory across strategic locations</li>
          <li>Ensure competitive pricing through volume purchasing</li>
          <li>Provide timely delivery even to remote locations</li>
          <li>Adapt quickly to changing market conditions and customer needs</li>
        </ul>
        
        <h3>International Standards</h3>
        <p>
          In every market we serve, we adhere to the highest international standards for quality, 
          safety, and business practices. Our operations comply with local regulations while 
          maintaining the consistent quality and service that our global customers expect.
        </p>
        
        <h3>Looking Forward</h3>
        <p>
          As part of our growth strategy, we continue to expand our global footprint, identifying 
          new markets and building relationships with local partners who share our commitment to 
          excellence. This ongoing expansion allows us to better serve our international customers 
          and bring our expertise to new regions.
        </p>
      </div>
    </>
  );
} 