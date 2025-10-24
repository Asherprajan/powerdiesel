import Image from "next/image";

export default function OverviewPage() {
  return (
    <>
      <h1 className="text-3xl font-bold text-[#003b6f] mb-6">Company Overview</h1>
      
      <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden mb-8">
        <Image 
          src="/overview.jpg" 
          alt="PDEE Headquarters"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      <div className="prose prose-slate max-w-none">
        <p>
          Power Diesel Engines and Equipment Trading (PDEE) is a premier supplier of high-quality 
          industrial equipment, parts, and components for the construction, mining, agriculture, 
          and power generation sectors across the Middle East and beyond.
        </p>
        
        <p>
          Founded on principles of quality, reliability, and exceptional service, PDEE has 
          established itself as a trusted partner for businesses seeking premium solutions for 
          their heavy machinery needs.
        </p>
        
        <h2>Our Mission</h2>
        <p>
          To provide our customers with superior quality products and outstanding service that 
          exceeds expectations, while maintaining competitive pricing and fostering long-term 
          relationships built on trust and mutual success.
        </p>
        
        <h2>Our Vision</h2>
        <p>
          To be the leading supplier of industrial equipment parts in the Middle East, recognized 
          for our unwavering commitment to quality, innovation, and customer satisfaction.
        </p>
        
        <h2>Core Values</h2>
        <ul>
          <li>
            <strong>Quality:</strong> We are committed to providing only the highest quality products 
            that meet or exceed industry standards.
          </li>
          <li>
            <strong>Integrity:</strong> We conduct our business with honesty, transparency, and 
            ethical practices.
          </li>
          <li>
            <strong>Customer Focus:</strong> We prioritize understanding and meeting our customers' 
            needs, building lasting relationships based on trust and reliability.
          </li>
          <li>
            <strong>Innovation:</strong> We continuously seek better solutions and embrace 
            technological advancements to improve our offerings.
          </li>
          <li>
            <strong>Expertise:</strong> We invest in our team's knowledge and skills to provide 
            expert advice and solutions to our customers.
          </li>
        </ul>
        
        <h2>What Sets Us Apart</h2>
        <p>
          At PDEE, we distinguish ourselves through our comprehensive product range, technical 
          expertise, and dedicated customer service. Our team of industry professionals brings 
          decades of combined experience, ensuring that we can provide not just products, but 
          complete solutions tailored to our customers' specific requirements.
        </p>
        
        <p>
          We maintain strategic partnerships with leading global manufacturers, allowing us to 
          offer both OEM and high-quality aftermarket parts at competitive prices without 
          compromising on performance or reliability.
        </p>
      </div>
    </>
  );
} 