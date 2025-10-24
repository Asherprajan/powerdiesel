import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#003b6f] text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Image
              src="/power_diesel.PNG"
              alt="Pdee Logo"
              width={120}
              height={40}
              className="mb-4 bg-white p-2 rounded"
              style={{ height: 'auto' }}
            />
            <p className="text-sm mt-4">Your trusted partner for industrial equipment and automation solutions.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:text-[#00b2f3]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-sm hover:text-[#00b2f3]">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/our-range" className="text-sm hover:text-[#00b2f3]">
                  Our Range
                </Link>
              </li>
              <li>
                <Link href="/brands" className="text-sm hover:text-[#00b2f3]">
                  Brands
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm hover:text-[#00b2f3]">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-[#00b2f3]">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm hover:text-[#00b2f3]">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-sm hover:text-[#00b2f3]">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-sm">
                <Phone className="h-4 w-4 mr-2" /> +971508492690
              </li>
              <li className="flex items-center text-sm">
                <Mail className="h-4 w-4 mr-2" /> info@pdee.net
              </li>
              <li className="flex items-start text-sm">
                <MapPin className="h-4 w-4 mr-2 mt-0.5" /> 123 Industrial Parkway, Business District, City, Country
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Pdee Industrial Equipment. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 