import Image from "next/image";

export default function HistoryPage() {
  const milestones = [
    {
      year: 1992,
      title: "Foundation",
      description: "Power Diesel Engines and Equipment Trading (PDEE) was established in the UAE as a small operation focused on supplying diesel engine parts to local businesses."
    },
    {
      year: 1998,
      title: "Regional Expansion",
      description: "After establishing a strong reputation in the UAE, PDEE expanded operations to serve the wider GCC region, opening its first international office in Saudi Arabia."
    },
    {
      year: 2003,
      title: "Product Line Expansion",
      description: "Responding to customer demand, PDEE significantly expanded its product range to include a comprehensive selection of parts for heavy equipment beyond just diesel engines."
    },
    {
      year: 2007,
      title: "New Headquarters",
      description: "To accommodate our growing team and inventory, PDEE moved to a larger headquarters facility with expanded warehousing capabilities."
    },
    {
      year: 2010,
      title: "International Partnerships",
      description: "PDEE established strategic partnerships with leading manufacturers in Europe and the Americas, becoming an authorized distributor for several premium brands."
    },
    {
      year: 2015,
      title: "Digital Transformation",
      description: "Embracing technology, PDEE launched its digital platform, allowing customers to browse inventory, place orders, and track shipments online."
    },
    {
      year: 2018,
      title: "African Market Entry",
      description: "PDEE expanded into the African market, establishing distribution centers in key countries to serve the growing demand for quality parts in the region."
    },
    {
      year: 2020,
      title: "E-commerce Launch",
      description: "Adapting to changing market conditions, PDEE introduced a comprehensive e-commerce solution, enabling seamless online ordering and faster deliveries."
    },
    {
      year: 2023,
      title: "Sustainable Operations Initiative",
      description: "PDEE launched its sustainability program, implementing eco-friendly practices in our operations and offering more environmentally conscious product options."
    }
  ];

  return (
    <>
      <h1 className="text-3xl font-bold text-[#003b6f] mb-6">Our History</h1>
      
      <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden mb-8">
        <Image 
          src="/history.jpg" 
          alt="PDEE Through the Years"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      <div className="prose prose-slate max-w-none mb-10">
        <p>
          Power Diesel Engines and Equipment Trading (PDEE) was founded in 1992 with a 
          vision to provide high-quality industrial parts and components to businesses across the 
          Middle East. What began as a small operation has grown into a global enterprise, serving 
          customers in multiple continents and offering a comprehensive range of products for the 
          construction, mining, agriculture, and power generation sectors.
        </p>
        
        <p>
          Our journey has been defined by a commitment to quality, innovation, and customer 
          satisfaction. As we've grown and evolved, these principles have remained at the core of 
          everything we do, guiding our expansion into new markets and product categories.
        </p>
      </div>
      
      <h2 className="text-2xl font-bold text-[#003b6f] mb-6">Our Journey: Key Milestones</h2>
      
      <div className="relative border-l-2 border-[#00b2f3] pl-10 ml-6 mb-12">
        {milestones.map((milestone, index) => (
          <div key={index} className="mb-10 relative">
            <div className="absolute -left-[52px] w-10 h-10 rounded-full bg-[#003b6f] text-white flex items-center justify-center border-4 border-white">
              <span className="text-xs font-bold">{milestone.year}</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#003b6f] mb-2">{milestone.title}</h3>
              <p className="text-gray-700">{milestone.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
          <h3 className="text-xl font-bold text-[#003b6f] mb-3">Our Founder's Vision</h3>
          <p className="text-gray-700">
            PDEE was developed by engineers, with extensive experience in the diesel 
            engine industry. Having recognized the need for reliable parts and equipment suppliers 
            in the region, the founders established the company with a clear vision: to provide high-quality 
            products, exceptional service, and technical expertise that customers could depend on. 
            The founders have a combined experience of over 50 years in the diesel engine industry, 
            and have a deep understanding of the needs of the customers.
          </p>
          <p className="text-gray-700 mt-3">
            This vision continues to drive our operations today, as we've expanded from a small local 
            supplier to a global provider of industrial equipment solutions.
          </p>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
          <h3 className="text-xl font-bold text-[#003b6f] mb-3">Growth Through Adaptation</h3>
          <p className="text-gray-700">
            Throughout our history, PDEE has demonstrated a remarkable ability to adapt to changing 
            market conditions and customer needs. From expanding our product lines to embracing digital 
            technologies, we've continuously evolved our business to better serve our customers.
          </p>
          <p className="text-gray-700 mt-3">
            This adaptability has been key to our sustained growth and success, allowing us to navigate 
            industry challenges and seize new opportunities as they arise.
          </p>
        </div>
      </div>
      
      <div className="bg-[#003b6f] text-white rounded-lg p-8 mb-10">
        <h2 className="text-2xl font-bold mb-4">Looking to the Future</h2>
        <p className="text-gray-200 mb-4">
          As we move forward, PDEE remains committed to the values that have guided us since our 
          founding. We continue to invest in new technologies, expand our product offerings, and 
          enhance our services to meet the evolving needs of our customers.
        </p>
        <p className="text-gray-200">
          With a focus on sustainability, innovation, and customer satisfaction, we are building 
          on our rich history to create an even stronger future for our company, our employees, 
          and the customers we serve around the world.
        </p>
      </div>
      
      <div className="prose prose-slate max-w-none">
        <h2>Community Involvement</h2>
        <p>
          Throughout our history, PDEE has been committed to giving back to the communities in which 
          we operate. From supporting local education initiatives to participating in environmental 
          conservation efforts, we believe in being a responsible corporate citizen and contributing 
          to the well-being of our communities.
        </p>
        
        <h2>Industry Leadership</h2>
        <p>
          Over the years, PDEE has established itself as a thought leader in the industrial equipment 
          sector. Our technical experts regularly contribute to industry publications, participate in 
          conferences, and share their knowledge to advance best practices in our field.
        </p>
        
        <p>
          This commitment to industry leadership has not only enhanced our reputation but has also 
          allowed us to stay at the forefront of technological developments and industry trends, 
          ensuring that we continue to provide cutting-edge solutions to our customers.
        </p>
        
        <h2>A Legacy of Excellence</h2>
        <p>
          As we reflect on our history, we take pride in the reputation for excellence that PDEE 
          has built over the decades. This legacy is the result of the hard work, dedication, and 
          expertise of our team members, past and present, as well as the trust and support of our 
          loyal customers.
        </p>
        
        <p>
          We are committed to honoring this legacy as we continue to write new chapters in the 
          PDEE story, always striving to exceed expectations and set new standards for quality and 
          service in our industry.
        </p>
      </div>
    </>
  );
} 