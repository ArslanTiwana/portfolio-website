import { Card, CardContent } from "@/components/ui/card";
import { Workflow, Cloud, GitBranch, Bot, Gauge, Settings } from "lucide-react";

export default function LearningRoadmapSection() {
  const roadmapItems = [
    {
      icon: <Workflow className="w-8 h-8 text-blue-400" />,
      title: "Event Architecture",
      description: "Kafka, Event Sourcing, CQRS patterns",
      color: "text-blue-400"
    },
    {
      icon: <Cloud className="w-8 h-8 text-purple-400" />,
      title: "Container Orchestration",
      description: "Kubernetes + Service discovery",
      color: "text-purple-400"
    },
    {
      icon: <GitBranch className="w-8 h-8 text-emerald-400" />,
      title: "Advanced Neo4j",
      description: "GraphQL, visual queries",
      color: "text-emerald-400"
    },
    {
      icon: <Bot className="w-8 h-8 text-orange-400" />,
      title: "AI Integration",
      description: "LangChain, OpenAI in business apps",
      color: "text-orange-400"
    },
    {
      icon: <Gauge className="w-8 h-8 text-red-400" />,
      title: "Scaling Systems",
      description: "Rate limits, distributed caching",
      color: "text-red-400"
    },
    {
      icon: <Settings className="w-8 h-8 text-cyan-400" />,
      title: "System Design",
      description: "Microservices, scaling patterns",
      color: "text-cyan-400"
    }
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Learning Roadmap</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Next 3–6 Months Focus Areas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roadmapItems.map((item, index) => (
            <Card key={index} className="bg-slate-800 border-slate-700 hover:bg-slate-700 transition-colors">
              <CardContent className="p-6">
                <div className="mb-4">
                  {item.icon}
                </div>
                <h3 className={`text-xl font-bold mb-2 ${item.color}`}>{item.title}</h3>
                <p className="text-slate-300">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
