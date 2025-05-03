import ContactForm from "./ContactForm"
import ContactInfo from "./ContactInfo"

export default function ContactSection() {
  return (
    <section className="py-16 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#003b6f] mb-4">Let's Connect</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions or need assistance? Reach out to our team of experts.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
          <div>
            <ContactInfo />
          </div>
        </div>
      </div>
    </section>
  )
} 