import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Zap, Settings, Cloud, Bot } from "lucide-react";

export default function CurrentLearningSection() {
  const learningTopics = [
    {
      topic: "Event-driven architecture with Apache Kafka",
      icon: <Zap className="w-6 h-6" />,
      color: "bg-gradient-to-r from-orange-500 to-red-500",
      progress: 70,
    },
    {
      topic: "Graph Database Design with Neo4j",
      icon: <Settings className="w-6 h-6" />,
      color: "bg-gradient-to-r from-red-500 to-pink-500",
      progress: 50,
    },
    {
      topic: "System Design case studies",
      icon: <BookOpen className="w-6 h-6" />,
      color: "bg-gradient-to-r from-blue-500 to-indigo-500",
      progress: 60,
    },
    {
      topic: "Docker + Kubernetes",
      icon: <Cloud className="w-6 h-6" />,
      color: "bg-gradient-to-r from-cyan-500 to-blue-500",
      progress: 70,
    },
    {
      topic: "AI integration via OpenAI and LangChain",
      icon: <Bot className="w-6 h-6" />,
      color: "bg-gradient-to-r from-purple-500 to-indigo-500",
      progress: 40,
    },
  ];

  return (
    <section
      id="current-learning"
      className="py-20 bg-gradient-to-br bg-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white">
            🌱 Current Learning
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            What I'm Learning Now
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto text-white">
            I believe in learning by building — and everything I learn, I try to
            apply in real projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {learningTopics.map((item, index) => (
            <Card
              key={index}
              className="bg-white shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              <CardContent className="p-6">
                <div className="flex items-start mb-4">
                  <div
                    className={`w-12 h-12 ${item.color} rounded-lg flex items-center justify-center text-white mr-4 flex-shrink-0`}
                  >
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-900 mb-3 leading-tight">
                      {item.topic}
                    </h3>

                    {/* Progress bar */}
                    <div className="mb-2">
                      <div className="flex justify-between text-sm text-slate-600 mb-1">
                        <span>Progress</span>
                        <span>{item.progress}%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${item.color} transition-all duration-500`}
                          style={{ width: `${item.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Learning philosophy */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white">
            <CardContent className="p-8 text-center">
              <BookOpen className="w-12 h-12 mx-auto mb-4 opacity-80" />
              <h3 className="text-xl font-bold mb-4">Learning Philosophy</h3>
              <p className="text-lg opacity-90 max-w-3xl mx-auto">
                I'm currently diving deep into cutting-edge technologies that
                shape the future of scalable backend systems. My approach is
                hands-on: I don't just read about these technologies—I build
                projects with them.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
