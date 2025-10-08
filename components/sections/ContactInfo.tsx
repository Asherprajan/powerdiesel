import { Phone, Mail, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function ContactInfo() {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="space-y-6">
          <div className="flex items-start space-x-3">
            <Phone className="h-5 w-5 text-[#003b6f] mt-0.5" />
            <div>
              <h3 className="font-medium text-[#003b6f]">Phone</h3>
              <p className="text-gray-600">+971508492690</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Mail className="h-5 w-5 text-[#003b6f] mt-0.5" />
            <div>
              <h3 className="font-medium text-[#003b6f]">Email</h3>
              <p className="text-gray-600">info@pdee.com</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <MapPin className="h-5 w-5 text-[#003b6f] mt-0.5" />
            <div>
              <h3 className="font-medium text-[#003b6f]">Address</h3>
              <p className="text-gray-600">123 Industrial Parkway, Business District, City, Country</p>
            </div>
          </div>
        </div>
        <div className="mt-6 h-48 w-full bg-gray-200 rounded-md overflow-hidden">
          {/* Google Map would be embedded here */}
          <div className="h-full w-full flex items-center justify-center text-gray-500">
            Google Map Embed
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 