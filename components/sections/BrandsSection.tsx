import BrandCarousel from "@/components/brand-carousel"

export default function BrandsSection() {
  return (
    <section className="py-16 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#003b6f] mb-4">Brands We Represent</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We partner with industry-leading manufacturers to bring you the highest quality products.
          </p>
        </div>
        <BrandCarousel />
      </div>
    </section>
  )
} 