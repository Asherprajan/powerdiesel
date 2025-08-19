import Image from "next/image";

export default function TeamPage() {
  const executiveTeam = [
    {
      name: "Ahmed Al-Farsi",
      title: "Chief Executive Officer",
      image: "/placeholder.svg?height=200&width=200",
      bio: "With over 25 years of experience in the heavy equipment industry, Ahmed leads PDEE with a vision for excellence and innovation. His expertise in international business development has been instrumental in expanding our global presence."
    },
    {
      name: "Mohammed Al-Saud",
      title: "Chief Operations Officer",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Mohammed oversees all operational aspects of PDEE, ensuring efficiency and quality at every level. His background in supply chain management and logistics enables us to deliver exceptional service to customers worldwide."
    },
    {
      name: "Sarah Johnson",
      title: "Chief Financial Officer",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Sarah brings 20 years of financial expertise to PDEE, with a strong background in international finance and strategic growth. Her leadership ensures our financial stability and enables our continued expansion."
    }
  ];

  const departmentHeads = [
    {
      name: "Raj Patel",
      title: "Head of Procurement",
      image: "/placeholder.svg?height=150&width=150",
      bio: "Raj leads our global procurement team, managing relationships with suppliers and manufacturers to ensure we source only the highest quality products."
    },
    {
      name: "Li Wei",
      title: "Director of Sales",
      image: "/placeholder.svg?height=150&width=150",
      bio: "Li oversees our international sales operations, developing strategies to expand our market presence and build lasting relationships with our customers."
    },
    {
      name: "David Rodriguez",
      title: "Technical Director",
      image: "/placeholder.svg?height=150&width=150",
      bio: "David's extensive technical knowledge of diesel engines and heavy equipment ensures that we provide accurate advice and solutions to our customers."
    },
    {
      name: "Fatima Hassan",
      title: "Quality Control Manager",
      image: "/placeholder.svg?height=150&width=150",
      bio: "Fatima leads our quality assurance team, implementing rigorous testing and inspection protocols to maintain our high standards."
    },
    {
      name: "John Anderson",
      title: "Logistics Manager",
      image: "/placeholder.svg?height=150&width=150",
      bio: "John coordinates our global logistics operations, ensuring timely delivery of products to customers around the world."
    },
    {
      name: "Aisha Al-Mansour",
      title: "Customer Service Director",
      image: "/placeholder.svg?height=150&width=150",
      bio: "Aisha leads our customer service department, focusing on providing exceptional support and building lasting relationships with our clients."
    }
  ];

  return (
    <>
      <h1 className="text-3xl font-bold text-[#003b6f] mb-6">Meet The Team</h1>
      
      <div className="prose prose-slate max-w-none mb-8">
        <p>
          The success of Power Diesel Engines and Equipment Trading (PDEE) is driven by our exceptional 
          team of industry professionals. With diverse backgrounds and expertise, our team brings 
          together decades of combined experience in the diesel engine and heavy equipment industry.
        </p>
        
        <p>
          We pride ourselves on building a team that embodies our core values of quality, integrity, 
          expertise, and customer focus. Each member contributes their unique skills and knowledge to 
          provide our customers with the highest level of service and support.
        </p>
      </div>
      
        {/* <h2 className="text-2xl font-bold text-[#003b6f] mb-4">Executive Leadership</h2> */}
      
      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {executiveTeam.map((executive, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
            <div className="relative w-full h-64">
              <Image 
                src={executive.image} 
                alt={executive.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#003b6f] mb-1">{executive.name}</h3>
              <p className="text-[#00b2f3] font-medium mb-4">{executive.title}</p>
              <p className="text-gray-700">{executive.bio}</p>
            </div>
          </div>
        ))}
      </div>
      
      <h2 className="text-2xl font-bold text-[#003b6f] mb-4">Department Leaders</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {departmentHeads.map((leader, index) => (
          <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg border border-gray-100">
            <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 flex-shrink-0">
              <Image 
                src={leader.image} 
                alt={leader.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#003b6f] mb-1">{leader.name}</h3>
              <p className="text-[#00b2f3] text-sm font-medium mb-2">{leader.title}</p>
              <p className="text-sm text-gray-700">{leader.bio}</p>
            </div>
          </div>
        ))}
      </div> */}
      
      {/* <div className="bg-[#003b6f] text-white rounded-lg p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4">Our Team Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-bold mb-2">Expertise</h3>
            <p className="text-gray-200">
              Our team members are experts in their fields, continuously expanding their knowledge 
              and skills to provide the best solutions to our customers.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Collaboration</h3>
            <p className="text-gray-200">
              We believe in the power of teamwork, working together across departments and regions 
              to deliver exceptional results.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Innovation</h3>
            <p className="text-gray-200">
              We encourage creative thinking and embrace new technologies and methodologies to 
              continuously improve our products and services.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Customer Focus</h3>
            <p className="text-gray-200">
              Every team member is dedicated to understanding and meeting customer needs, going 
              above and beyond to ensure satisfaction.
            </p>
          </div>
        </div>
      </div> */}
      
      <div className="prose prose-slate max-w-none">
        <h2>Join Our Team</h2>
        <p>
          PDEE is always looking for talented individuals who are passionate about excellence and 
          innovation in the industrial equipment sector. If you're interested in joining our team, 
          please visit our careers page to learn about current opportunities.
        </p>
        
        <h2>Our Expertise</h2>
        <p>
          Our team brings together expertise in various areas, including:
        </p>
        
        <ul>
          <li>Diesel engine technology and components</li>
          <li>Heavy equipment parts and systems</li>
          <li>Supply chain management and logistics</li>
          <li>Quality control and assurance</li>
          <li>International trade and distribution</li>
          <li>Technical support and customer service</li>
        </ul>
        
        <p>
          This diverse knowledge base allows us to provide comprehensive solutions and expert 
          advice to our customers, no matter their specific needs or challenges.
        </p>
      </div>
    </>
  );
} 