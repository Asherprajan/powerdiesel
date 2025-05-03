"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useIsMobile } from "@/hooks/use-mobile"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const isMobile = useIsMobile()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image 
            src="/power_diesel.PNG" 
            alt="Pdee Logo" 
            width={180} 
            height={60} 
            priority 
            style={{ height: 'auto' }}
            className="scale-110"
          />
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-sm font-medium text-[#003b6f] hover:text-[#00b2f3] transition-colors">
            Home
          </Link>
          <Link href="/products" className="text-sm font-medium text-[#003b6f] hover:text-[#00b2f3] transition-colors">
            Products
          </Link>
          <Link href="/our-range" className="text-sm font-medium text-[#003b6f] hover:text-[#00b2f3] transition-colors">
            Our Range
          </Link>
          <Link href="/quality-brands" className="text-sm font-medium text-[#003b6f] hover:text-[#00b2f3] transition-colors">
            Brands
          </Link>
          <Link href="/about" className="text-sm font-medium text-[#003b6f] hover:text-[#00b2f3] transition-colors">
            About Us
          </Link>
          <Link href="/contact" className="text-sm font-medium text-[#003b6f] hover:text-[#00b2f3] transition-colors">
            Contact
          </Link>
          <Button className="bg-[#00b2f3] hover:bg-[#0090c3] text-white">Enquire Now</Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <Button 
          variant="outline" 
          size="icon" 
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        "fixed inset-0 top-16 z-40 bg-white transition-transform duration-300 md:hidden",
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="container py-6 flex flex-col space-y-4">
          <Link 
            href="/" 
            className="text-lg font-medium text-[#003b6f] hover:text-[#00b2f3] py-2 border-b"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            href="/products" 
            className="text-lg font-medium text-[#003b6f] hover:text-[#00b2f3] py-2 border-b"
            onClick={() => setIsMenuOpen(false)}
          >
            Products
          </Link>
          <Link 
            href="/our-range" 
            className="text-lg font-medium text-[#003b6f] hover:text-[#00b2f3] py-2 border-b"
            onClick={() => setIsMenuOpen(false)}
          >
            Our Range
          </Link>
          <Link 
            href="/quality-brands" 
            className="text-lg font-medium text-[#003b6f] hover:text-[#00b2f3] py-2 border-b"
            onClick={() => setIsMenuOpen(false)}
          >
            Brands
          </Link>
          <Link 
            href="/about" 
            className="text-lg font-medium text-[#003b6f] hover:text-[#00b2f3] py-2 border-b"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </Link>
          <Link 
            href="/contact" 
            className="text-lg font-medium text-[#003b6f] hover:text-[#00b2f3] py-2 border-b"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <Button className="bg-[#00b2f3] hover:bg-[#0090c3] text-white w-full mt-4">
            Enquire Now
          </Button>
        </div>
      </div>
    </header>
  )
}