import { Card, CardContent } from "@/components/ui/card";
import { Medal, Code, Server, ShoppingCart } from "lucide-react";

export default function AchievementsSection() {
  const achievements = [
    {
      icon: <Medal className="w-10 h-10 text-yellow-600" />,
      title: "🏆 Gold Medalist",
      description: "BSCS (2019–2023)",
      bgColor: "bg-gradient-to-br from-yellow-100 to-yellow-200",
      iconColor: "text-yellow-600",
      featured: true
    },
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: "180+ Hours",
      description: "Freelance NestJS Projects",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: <Server className="w-8 h-8 text-emerald-600" />,
      title: "Event-Based Systems",
      description: "Built from scratch",
      bgColor: "bg-emerald-100",
      iconColor: "text-emerald-600"
    },
    {
      icon: <ShoppingCart className="w-8 h-8 text-purple-600" />,
      title: "Production Apps",
      description: "Shopify + TiwanaConnect",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600"
    }
  ];

  return (
    <section className="py-20 bg-slate-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Achievements</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <Card 
              key={index} 
              className={`bg-white hover:shadow-xl transition-all transform hover:scale-105 ${
                achievement.featured ? 'ring-2 ring-yellow-400 shadow-yellow-100' : ''
              }`}
            >
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 ${achievement.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 ${
                  achievement.featured ? 'ring-2 ring-yellow-300' : ''
                }`}>
                  {achievement.icon}
                </div>
                <h3 className={`text-lg font-bold mb-2 ${
                  achievement.featured ? 'text-yellow-700' : ''
                }`}>{achievement.title}</h3>
                <p className="text-slate-600">{achievement.description}</p>
                {achievement.featured && (
                  <div className="mt-3 text-xs bg-yellow-50 text-yellow-700 px-3 py-1 rounded-full inline-block">
                    Academic Excellence
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
