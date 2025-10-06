import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import BannerCarousel from "@/components/banner-carousel"
import ProductsSection from "@/components/sections/ProductsSection"
import RangeSection from "@/components/sections/RangeSection"
import BrandsSection from "@/components/sections/BrandsSection"
import AboutSection from "@/components/sections/AboutSection"
import ContactSection from "@/components/sections/ContactSection"
import QualityBrandsSection from "@/components/sections/QualityBrandsSection"
import QualityBadges from "@/components/quality-badges"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Banner Carousel */}
        <section className="w-full">
          <BannerCarousel />
        </section>

        {/* Quality Badges */}
        <QualityBadges />

        {/* Products Overview */}
        <ProductsSection />

        {/* Our Range */}
        <RangeSection />

        {/* Quality Brands */}
        {/* <QualityBrandsSection /> */}
        {/* <BrandsSection /> */}

        {/* About + Testimonials */}
        <AboutSection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}
