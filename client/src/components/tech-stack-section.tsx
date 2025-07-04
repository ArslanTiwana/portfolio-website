import { Card, CardContent } from "@/components/ui/card";
import { Server, Cloud, Code, Brain, Check } from "lucide-react";

export default function TechStackSection() {
  const techStacks = [
    {
      icon: <Server className="w-10 h-10 text-blue-600" />,
      title: "Backend & APIs",
      skills: ["NestJS", "Node.js", "Express", "PostgreSQL", "Prisma ORM", "Redis", "BullMQ", "MongoDB"]
    },
    {
      icon: <Cloud className="w-10 h-10 text-purple-600" />,
      title: "Infra & DevOps",
      skills: ["Docker", "GitHub Actions", "Railway", "Fly.io", "PM2", "Nginx", "CI/CD pipelines"]
    },
    {
      icon: <Code className="w-10 h-10 text-orange-600" />,
      title: "Frontend",
      skills: ["React.js", "Next.js", "Tailwind CSS", "shadcn/ui", "daisyUI", "Custom Trees", "Relationship Graphs"]
    },
    {
      icon: <Brain className="w-10 h-10 text-emerald-600" />,
      title: "Other Interests",
      skills: ["Neo4j", "LangChain", "OpenAI", "System Design", "Event Sourcing", "Microservices", "Scaling Patterns"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tech Stack & Tools</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Specialized in backend-heavy systems with full-stack capabilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techStacks.map((stack, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow bg-white">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="mb-4">{stack.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{stack.title}</h3>
                </div>
                <ul className="space-y-2 text-sm">
                  {stack.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center">
                      <Check className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
