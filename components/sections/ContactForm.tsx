import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

export default function ContactForm() {
  return (
    <Card>
      <CardContent className="p-6">
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-gray-700">
                Name
              </label>
              <Input id="name" placeholder="Your name" />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email
              </label>
              <Input id="email" type="email" placeholder="Your email" />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium text-gray-700">
              Phone
            </label>
            <Input id="phone" placeholder="Your phone number" />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-gray-700">
              Message
            </label>
            <Textarea id="message" placeholder="Your message" rows={4} />
          </div>
          <Button className="w-full bg-[#00b2f3] hover:bg-[#0090c3] text-white">Submit</Button>
        </form>
      </CardContent>
    </Card>
  )
} 