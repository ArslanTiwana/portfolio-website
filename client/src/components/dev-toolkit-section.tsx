import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Terminal, Globe, Github, Zap, Database } from "lucide-react";

export default function DevToolkitSection() {
  const toolCategories = [
    {
      category: "Editor & Terminal",
      icon: <Code className="w-6 h-6" />,
      color: "bg-gradient-to-r from-blue-500 to-indigo-500",
      tools: [
        { name: "VS Code", description: "with custom setup" },
        { name: "Warp + Zsh + Tmux", description: "terminal setup" }
      ]
    },
    {
      category: "API & Database",
      icon: <Database className="w-6 h-6" />,
      color: "bg-gradient-to-r from-emerald-500 to-green-500",
      tools: [
        { name: "Postman", description: "API testing" },
        { name: "TablePlus", description: "database management" }
      ]
    },
    {
      category: "Development & Debugging",
      icon: <Globe className="w-6 h-6" />,
      color: "bg-gradient-to-r from-orange-500 to-red-500",
      tools: [
        { name: "Browser DevTools", description: "debugging" },
        { name: "React DevTools", description: "React debugging" }
      ]
    },
    {
      category: "Version Control & Project Management",
      icon: <Github className="w-6 h-6" />,
      color: "bg-gradient-to-r from-purple-500 to-pink-500",
      tools: [
        { name: "GitHub + GitKraken", description: "version control" },
        { name: "Linear", description: "project management" },
        { name: "Notion", description: "documentation" }
      ]
    },
    {
      category: "Deployment & Infrastructure",
      icon: <Zap className="w-6 h-6" />,
      color: "bg-gradient-to-r from-cyan-500 to-blue-500",
      tools: [
        { name: "Railway", description: "deployment" },
        { name: "Render", description: "hosting" },
        { name: "AWS EC2", description: "cloud infrastructure" },
        { name: "Nginx", description: "web server" }
      ]
    }
  ];

  return (
    <section id="toolkit" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
            🛠️ Dev Toolkit
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            My Development Arsenal
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Here's what I use daily to stay productive and build high-quality software
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {toolCategories.map((category, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
              <CardContent className="p-6">
                {/* Category header */}
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center text-white mr-4`}>
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {category.category}
                  </h3>
                </div>

                {/* Tools list */}
                <div className="space-y-3">
                  {category.tools.map((tool, toolIndex) => (
                    <div key={toolIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <div className="font-semibold text-slate-900">{tool.name}</div>
                        <div className="text-sm text-slate-600">{tool.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Productivity note */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-slate-900 to-slate-800 text-white">
            <CardContent className="p-8 text-center">
              <Terminal className="w-12 h-12 mx-auto mb-4 opacity-80" />
              <h3 className="text-xl font-bold mb-4">Productivity Focus</h3>
              <p className="text-lg opacity-90 max-w-3xl mx-auto">
                I've carefully curated this toolkit over years of development. Each tool serves a specific purpose 
                in my workflow, from rapid prototyping to production deployment. The goal is maximum efficiency 
                with minimal context switching.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}