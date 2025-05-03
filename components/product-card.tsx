import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ProductCardProps {
  title: string
  image: string
  description: string
  slug?: string
}

export default function ProductCard({ title, image, description, slug }: ProductCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-[#003b6f] mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Button
          variant="outline"
          className="w-full border-[#003b6f] text-[#003b6f] hover:bg-[#003b6f] hover:text-white"
        >
          View Details
        </Button>
      </CardContent>
    </Card>
  )
}
