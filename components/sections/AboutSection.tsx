import TestimonialSlider from "@/components/testimonial-slider"

export default function AboutSection() {
  return (
    <section className="py-16 px-4 md:px-6 bg-[#f8f9fa]">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#003b6f] mb-4">Why Choose Pdee?</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            At Pdee, we specialize in delivering industrial-grade mechanical and automation solutions tailored to
            your operational needs. With a legacy of trust and quality, our mission is to empower industries with
            the right products and services.
          </p>
        </div>
        <div className="mt-12">
          <TestimonialSlider />
        </div>
      </div>
    </section>
  )
} 