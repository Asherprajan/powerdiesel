import { ThumbsUp, Clock, Shield, Percent } from "lucide-react"

// Badge data
const badges = [
  {
    icon: "thumbs-up",
    title: "Premium Parts",
    description: "High-quality components designed to meet or exceed OEM specifications"
  },
  {
    icon: "clock",
    title: "Exceptional Service",
    description: "Expert advice and support for all your equipment needs"
  },
  {
    icon: "shield",
    title: "Full product Warranty",
    description: "Comprehensive warranty on all products we supply"
  },
  {
    icon: "percent",
    title: "Outstanding Savings",
    description: "Competitive pricing without compromising on quality"
  }
];

export default function QualityBadges() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "thumbs-up":
        return <ThumbsUp className="h-8 w-8 text-[#00b2f3]" />;
      case "clock":
        return <Clock className="h-8 w-8 text-[#00b2f3]" />;
      case "shield":
        return <Shield className="h-8 w-8 text-[#00b2f3]" />;
      case "percent":
        return <Percent className="h-8 w-8 text-[#00b2f3]" />;
      default:
        return <ThumbsUp className="h-8 w-8 text-[#00b2f3]" />;
    }
  };

  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((badge, index) => (
            <div 
              key={index} 
              className="flex items-start p-4 bg-white rounded-lg shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:border-[#00b2f3]"
            >
              <div className="mr-4 p-2 bg-white rounded-full shadow-sm">
                {getIcon(badge.icon)}
              </div>
              <div>
                <h3 className="text-base font-bold text-[#003b6f] mb-1">{badge.title}</h3>
                <p className="text-sm text-gray-600">{badge.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}