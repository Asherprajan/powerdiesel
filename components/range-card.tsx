import { Settings, Cpu, Power, PenToolIcon as Tool, ChevronRight } from "lucide-react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

interface RangeCardProps {
  title: string
  icon: string
  description: string
}

export default function RangeCard({ title, icon, description }: RangeCardProps) {
  const getIcon = () => {
    switch (icon) {
      case "settings":
        return <Settings className="h-10 w-10 text-[#00b2f3]" />
      case "cpu":
        return <Cpu className="h-10 w-10 text-[#00b2f3]" />
      case "power":
        return <Power className="h-10 w-10 text-[#00b2f3]" />
      case "tool":
        return <Tool className="h-10 w-10 text-[#00b2f3]" />
      default:
        return <Settings className="h-10 w-10 text-[#00b2f3]" />
    }
  }

  return (
    <Card className="transition-all duration-300 hover:shadow-md hover:border-[#00b2f3]">
      <CardContent className="p-6">
        <div className="mb-4">{getIcon()}</div>
        <h3 className="text-xl font-bold text-[#003b6f] mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link
          href={`/our-range/${title.toLowerCase().replace(/\s+/g, "-")}`}
          className="inline-flex items-center text-[#00b2f3] hover:text-[#003b6f] font-medium"
        >
          View More <ChevronRight className="ml-1 h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  )
}
