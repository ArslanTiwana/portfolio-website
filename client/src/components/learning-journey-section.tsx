import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, BookOpen, Code, Zap } from "lucide-react";

export default function LearningJourneySection() {
  const journeySteps = [
    {
      year: "2019–2023",
      title: "Foundation Building",
      description:
        "Learned software development fundamentals, collaborated with peers under pressure, consistently achieved high marks, and graduated with a gold medal—building a solid foundation in core software concepts.",
      icon: <BookOpen className="w-5 h-5" />,
      color: "bg-blue-500",
    },
    {
      year: "2023",
      title: "Real-World Experience",
      description:
        "Interned at a startup, worked on production apps, and contributed to products like Techless.com.",
      icon: <Code className="w-5 h-5" />,
      color: "bg-emerald-500",
    },
    {
      year: "2024",
      title: "Professional Growth",
      description:
        "Worked on Shopify Apps, took up freelance work (800+ hours) and built a strong command over NestJS, Node.js, Rust and PostgreSQL.",
      icon: <TrendingUp className="w-5 h-5" />,
      color: "bg-orange-500",
    },
    {
      year: "2025 (Now)",
      title: "Innovation & Architecture",
      description:
        "Currently diving into system design, building AI agents using LLMs with frameworks like LangChain, and exploring Kafka, event-driven architecture, and scalable backend systems while working on TiwanaConnect.",
      icon: <Zap className="w-5 h-5" />,
      color: "bg-purple-500",
    },
  ];

  return (
    <section id="journey" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-orange-500 to-red-500 text-white">
            🔥 Learning Journey
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black text-sl">
            From Curious Learner to Confident Developer
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-slate-900">
            In 2019, I started my journey in software development with curiosity
            and passion. Over the years, I've grown from building small projects
            to contributing to real-world applications and architecting scalable
            systems.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-emerald-500 via-orange-500 to-purple-500 rounded-full"></div>

          <div className="space-y-12">
            {journeySteps.map((step, index) => (
              <div
                key={index}
                className={`flex items-center ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                  <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-3">
                        <div
                          className={`w-10 h-10 ${step.color} rounded-full flex items-center justify-center text-white mr-3`}
                        >
                          {step.icon}
                        </div>
                        <Badge
                          variant="outline"
                          className="text-sm font-medium text-slate-900"
                        >
                          {step.year}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-slate-900">
                        {step.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline dot */}
                <div className="relative z-10">
                  <div
                    className={`w-6 h-6 ${step.color} rounded-full border-4 border-white shadow-lg`}
                  ></div>
                </div>

                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white">
            <CardContent className="p-8">
              <p className="text-lg font-medium italic">
                "Every day I strive to become better — not just in writing clean
                code, but in thinking deeply about systems, business impact, and
                future-proof design."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
