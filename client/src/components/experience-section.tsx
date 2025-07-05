import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Shopify App Developer",
      company: "Remote",
      period: "2024 - Present",
      status: "current",
      technologies: ["Rust", "React", "GraphQL", "Shopify Functions"],
      techColors: [
        "bg-orange-600",
        "bg-blue-600",
        "bg-purple-600",
        "bg-green-600",
      ],
      achievements: [
        "Worked on production-grade Shopify apps for checkout customization",
        "Wrote backend logic in Rust, integrated deeply with Shopify's new functions API",
        "Designed admin dashboards in React + GraphQL",
        "Learned e-commerce workflows, rate limits, Shopify's infrastructure",
      ],
    },
    {
      title: "Full-Stack Developer",
      company: "Freelance",
      period: "2023 - 2024",
      status: "completed",
      technologies: [],
      techColors: [],
      achievements: [
        "Built backend services in NestJS + PostgreSQL with Redis & BullMQ",
        "Integrated event-based systems using pub/sub logic",
        "Delivered over 800 hours of freelance NestJS work",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Building production-grade applications and systems
          </p>
        </div>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="bg-slate-800 border-slate-700 hover:bg-slate-700 transition-colors"
            >
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-blue-400 mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-slate-300 text-lg">{exp.company}</p>
                  </div>
                  <div className="text-right mt-4 md:mt-0">
                    <Badge
                      variant={
                        exp.status === "current" ? "default" : "secondary"
                      }
                      className={
                        exp.status === "current"
                          ? "bg-emerald-600 text-white"
                          : "bg-blue-600 text-white"
                      }
                    >
                      {exp.period}
                    </Badge>
                  </div>
                </div>

                {exp.technologies.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 text-slate-200">
                      Tech Stack:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          className={`${exp.techColors[techIndex]} text-white`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                <ul className="space-y-3 text-slate-300">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start">
                      <ArrowRight className="w-4 h-4 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                      <span
                        dangerouslySetInnerHTML={{
                          __html: achievement
                            .replace(
                              /\*\*(.*?)\*\*/g,
                              '<strong class="text-blue-400">$1</strong>'
                            )
                            .replace(
                              /Rust/g,
                              '<strong class="text-orange-400">Rust</strong>'
                            )
                            .replace(
                              /React \+ GraphQL/g,
                              '<strong class="text-blue-400">React + GraphQL</strong>'
                            )
                            .replace(
                              /NestJS \+ PostgreSQL/g,
                              '<strong class="text-emerald-400">NestJS + PostgreSQL</strong>'
                            )
                            .replace(
                              /180 hours/g,
                              '<strong class="text-emerald-400">180 hours</strong>'
                            ),
                        }}
                      />
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
