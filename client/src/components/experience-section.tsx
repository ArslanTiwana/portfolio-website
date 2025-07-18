import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Software Engineer (Full-Stack)",
      company: "Leed Software Development",
      period: "2023 - Present",
      status: "current",
      technologies: [],
      techColors: [],
      projects: [
        {
          name: "BeSure Checkout Rules – Shopify App",
          technologies: ["Rust", "React", "GraphQL", "Shopify Functions"],
          techColors: [
            "bg-orange-600",
            "bg-blue-600",
            "bg-purple-600",
            "bg-green-600",
          ],
          achievements: [
            "Developed production-grade Shopify app for checkout customization using <strong class='text-orange-400'>Rust</strong> and <strong class='text-green-600'>Shopify Functions</strong>.",
            "Built interactive admin dashboards with <strong class='text-blue-400'>React + GraphQL</strong>.",
            "Collaborated with merchants to gather feature requests, planned scalable solutions, and implemented new features without affecting existing customer setups.",
            "Integrated with Shopify APIs, infrastructure, and rate limits to scale multi-merchant support.",
          ],
        },
        {
          name: "Techless – A Minimal Phone",
          technologies: ["Node.js", "PostgreSQL", "MQTT"],
          techColors: ["bg-yellow-600", "bg-indigo-600", "bg-cyan-600"],
          achievements: [
            "Built full-stack Family and Admin portals using <strong class='text-yellow-600'>Node.js</strong> and <strong class='text-indigo-600'>PostgreSQL</strong>.",
            "Enabled real-time communication between server and Android phones using <strong class='text-cyan-600'>MQTT</strong>, reducing sync latency by 40%.",
            "Developed parental control features and device activation flows used across 5,000+ devices.",
            "Collaborated with mobile team to reduce feature delivery cycle from 10 to 5 days via better API design and documentation.",
          ],
        },
      ],
    },
    {
      title: "Full-Stack Developer",
      company: "Freelance",
      period: "2022 - Present",
      status: "current",
      technologies: [],
      techColors: [],
      projects: [
        {
          name: "AreekaWeb.com – Online Therapy Platform",
          technologies: [
            "NestJS",
            "Next.js",
            "PostgreSQL",
            "BullMQ",
            "Zoom SDK",
          ],
          techColors: [
            "bg-emerald-600",
            "bg-blue-600",
            "bg-indigo-600",
            "bg-red-600",
            "bg-gray-700",
          ],
          achievements: [
            "Designed and implemented scalable backend in <strong class='text-emerald-400'>NestJS</strong> and <strong class='text-indigo-400'>PostgreSQL</strong> for therapist-patient video consultations.",
            "Built admin dashboard in <strong class='text-blue-400'>Next.js</strong> for managing sessions, therapists, and reports.",
            "Integrated <strong class='text-gray-400'>Zoom SDK</strong> to enable secure real-time therapy sessions.",
            "Used <strong class='text-red-400'>BullMQ</strong> for async job queues to handle email notifications and session reminders.",
            "Wrote clean, modular, and testable code for long-term maintainability and team onboarding.",
          ],
        },
        {
          name: "HafeezPrinting – Print Job Management System",
          technologies: [
            "Node.js",
            "React",
            "MongoDB",
            "WebSockets",
            "Scrum UI",
          ],
          techColors: [
            "bg-emerald-600",
            "bg-blue-600",
            "bg-indigo-600",
            "bg-yellow-500",
            "bg-teal-600",
          ],
          achievements: [
            "Developed backend logic for handling job orders from creation to invoicing using <strong class='text-emerald-400'>Node.js</strong> and <strong class='text-indigo-400'>MongoDB</strong>.",
            "Built real-time job tracking with <strong class='text-yellow-400'>WebSockets</strong> to sync progress across clients.",
            "Integrated a Scrum-like UI for internal order workflow visualization and status transitions.",
            "Implemented secure invoice generation and job history logging for transparency and auditing.",
            "Contributed to reducing manual workload by 50% through automation of common job operations.",
          ],
        },
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
              className="bg-slate-800 border-slate-700  transition-colors"
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
                  <div className="flex flex-col lg:flex-row gap-6">
                    {exp.projects.map((project, pIndex) => (
                      <div
                        key={pIndex}
                        className="flex-1 bg-white text-slate-800 rounded-2xl shadow-md p-6 hover:shadow-lg transition-all transform hover:scale-105"
                      >
                        <h4 className="text-xl font-bold mb-3 text-blue-600">
                          {project.name}
                        </h4>

                        {project.technologies.length > 0 && (
                          <div className="mb-4 flex flex-wrap gap-2">
                            {project.technologies.map((tech, tIndex) => (
                              <Badge
                                key={tIndex}
                                className={`${project.techColors[tIndex]} text-white`}
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        )}

                        <ul className="space-y-3 text-sm text-slate-700">
                          {project.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start">
                              <ArrowRight className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                              <span
                                className="leading-relaxed"
                                dangerouslySetInnerHTML={{
                                  __html: achievement,
                                }}
                              />
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
