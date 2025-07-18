import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Globe, BookOpen, ExternalLink } from "lucide-react";

export default function ProjectsSection() {
  const features = [
    {
      title: "Family Tree UI",
      description: "React + Tree visualization lib",
      color: "border-blue-500",
    },
    {
      title: "Graph Traversal",
      description: "Neo4j (sync with PostgreSQL)",
      color: "border-emerald-500",
    },
    {
      title: "Admin & Auth",
      description: "NestJS + Guards + RBAC",
      color: "border-purple-500",
    },
    {
      title: "Dev Docs",
      description: "Public Docusaurus site",
      color: "border-orange-500",
    },
    {
      title: "Project Management",
      description: "GitHub Projects + Clean Docs",
      color: "border-red-500",
    },
  ];

  const docFeatures = [
    {
      icon: "📖",
      title: "Docusaurus-based public docs with versioning",
    },
    {
      icon: "📄",
      title:
        "Release-wise .md tracking for architecture, ERDs, APIs, deployment",
    },
    {
      icon: "👥",
      title: "Designed for internal dev onboarding & open interview showcase",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Personal Project
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Showcasing real-world full-stack application development
          </p>
        </div>

        <Card className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-8 md:p-12">
              <div className="mb-6">
                <h3 className="text-3xl font-bold mb-4 text-slate-900">
                  TiwanaConnect
                </h3>
                <p className="text-lg text-slate-600 mb-6">
                  A high-quality, real-world full-stack app to manage extended
                  family lineage, designed for{" "}
                  <strong className="text-blue-600">400+ members</strong>.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                  <p className="text-sm text-blue-800">
                    📦 <strong>Full release planned for Dec 2025</strong> as a
                    family-facing product
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`border-l-4 ${feature.color} pl-4`}
                  >
                    <h4 className="font-semibold text-slate-900 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-slate-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:w-1/2 bg-gradient-primary p-8 md:p-12 text-white">
              <h4 className="text-2xl font-bold mb-6">
                Documentation & Architecture
              </h4>
              <ul className="space-y-4">
                {docFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-2xl mr-3">{feature.icon}</span>
                    <div>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: feature.title
                            .replace(
                              /Docusaurus/g,
                              "<strong>Docusaurus</strong>"
                            )
                            .replace(/\.md/g, "<strong>.md</strong>"),
                        }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <h5 className="text-lg font-semibold mb-4 text-white">
                  🚀 Live Links (Under Active Development)
                </h5>
                <div className="space-y-3 ml-8">
                  <a
                    href="https://github.com/TiwanaConnect"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm font-semibold text-white hover:text-blue-300 transition-colors "
                  >
                    <Github className="w-5 h-5 mr-2" />
                    GitHub Repository <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                  <a
                    href="https://tiwanaconnect.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm font-semibold text-white hover:text-blue-300 transition-colors"
                  >
                    <Globe className="w-5 h-5 mr-2" />
                    Live Website <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                  <a
                    href="https://docs.tiwanaconnect.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm font-semibold text-white hover:text-blue-300 transition-colors"
                  >
                    <BookOpen className="w-5 h-5 mr-2" />
                    Documentation <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </div>
              </div>
              <div className="mt-8 p-4 bg-white/10 rounded-lg">
                <p className="text-sm">
                  <strong>Tech Highlights:</strong> Event-driven architecture,
                  Real-time updates, Complex relationship mapping, Role-based
                  access control
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
