"use client"

import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

const aboutNavItems = [
  { title: "Overview", href: "/about/overview" },
  { title: "Global Presence", href: "/about/global-presence" },
  { title: "Sales", href: "/about/sales" },
  { title: "Quality Control", href: "/about/quality-control" },
  { title: "Meet The Team", href: "/about/team" },
  { title: "Product Warranty", href: "/about/warranty" },
  { title: "History", href: "/about/history" },
]

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1 py-12 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar Navigation */}
            <aside className="md:w-1/4">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
                <h3 className="text-xl font-bold text-[#003b6f] mb-6">About PDEE</h3>
                <nav className="space-y-1">
                  {aboutNavItems.map((item) => (
                    <ClientSideNavLink 
                      key={item.href} 
                      href={item.href}
                      title={item.title}
                    />
                  ))}
                </nav>
              </div>
            </aside>
            
            {/* Main Content */}
            <div className="md:w-3/4">
              <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
                {children}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

// Client component for active link highlighting
function ClientSideNavLink({ href, title }: { href: string; title: string }) {
  const pathname = usePathname()
  const isActive = pathname === href
  
  return (
    <Link 
      href={href}
      className={cn(
        "block py-2 px-3 rounded-md text-sm font-medium transition-colors",
        isActive 
          ? "bg-[#00b2f3] text-white" 
          : "text-gray-700 hover:bg-gray-100"
      )}
    >
      {title}
    </Link>
  )
} 