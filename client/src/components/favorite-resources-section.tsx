import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  Github,
  Palette,
  Code,
  GraduationCap,
  ExternalLink,
} from "lucide-react";

export default function FavoriteResourcesSection() {
  const resources = [
    {
      title: "System Design Primer",
      description: "Comprehensive guide to designing large-scale systems",
      type: "GitHub Repository",
      icon: <Github className="w-6 h-6" />,
      color: "bg-gradient-to-r from-slate-600 to-slate-700",
      link: "https://github.com/donnemartin/system-design-primer",
      impact: "Shaped my understanding of scalable architectures",
    },
    {
      title: "Kafka in Action",
      description: "Deep dive into event-driven architecture",
      type: "Youtube",
      icon: <BookOpen className="w-6 h-6" />,
      color: "bg-gradient-to-r from-orange-500 to-red-500",
      link: "https://www.youtube.com/@piyushgargdev",
      impact: "Transformed how I think about distributed systems",
    },
    {
      title: "Refactoring UI",
      description: "Practical design principles for developers",
      type: "Design Resource",
      icon: <Palette className="w-6 h-6" />,
      color: "bg-gradient-to-r from-purple-500 to-pink-500",
      link: "https://scrimba.com/intro-to-ui-design-fundamentals-c0q/~0zdk",
      impact: "Improved my frontend and UX design skills",
    },
    {
      title: "Clean Code",
      description:
        "Robert C. Martin's principles for writing maintainable code",
      type: "Book",
      icon: <Code className="w-6 h-6" />,
      color: "bg-gradient-to-r from-blue-500 to-indigo-500",
      link: "https://github.com/Gatjuat-Wicteat-Riek/clean-code-book/blob/master/Clean%20Code%20(%20PDFDrive.com%20).pdf",
      impact: "Foundation for my coding standards and practices",
    },
  ];

  return (
    <section id="resources" className="py-20  bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white">
            📚 Favorite Resources
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Resources That Shaped My Mindset
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-lg  max-w-3xl mx-auto text-white">
            These carefully selected resources have been instrumental in shaping
            my approach to software development and system design
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <Card
              key={index}
              className="bg-white shadow-lg hover:shadow-xl transition-all transform hover:scale-105 group"
            >
              <CardContent className="p-6">
                {/* Resource header */}
                <div className="flex items-start mb-4">
                  <div
                    className={`w-12 h-12 ${resource.color} rounded-lg flex items-center justify-center text-white mr-4 flex-shrink-0`}
                  >
                    {resource.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {resource.title}
                      </h3>
                      <a
                        href={resource.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <ExternalLink className="w-4 h-4 ml-2 text-slate-400 group-hover:text-blue-600 transition-colors" />
                      </a>
                    </div>
                    <Badge
                      variant="outline"
                      className="text-xs mb-2 text-slate-900"
                    >
                      {resource.type}
                    </Badge>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {resource.description}
                </p>

                {/* Impact */}
                <div className="bg-slate-50 p-3 rounded-lg mb-4">
                  <div className="text-sm font-medium text-slate-700 mb-1">
                    Impact:
                  </div>
                  <div className="text-sm text-slate-600 italic">
                    "{resource.impact}"
                  </div>
                </div>

                {/* Action button */}
                <div className="pt-2">
                  <div
                    className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium text-white ${resource.color} group-hover:scale-105 transition-transform`}
                  >
                    <a
                      href={resource.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <span>Explore Resource</span>
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
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
              <h3 className="text-xl font-bold mb-4">Continuous Learning</h3>
              <p className="text-lg opacity-90 max-w-3xl mx-auto">
                I believe in learning from the best minds in the industry. These
                resources represent years of collective wisdom that have helped
                me grow from a curious student to a confident developer. I
                regularly revisit them and discover new insights.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
