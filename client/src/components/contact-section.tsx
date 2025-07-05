import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, MessageCircle } from "lucide-react";

export default function ContactSection() {
  const contactMethods = [
    {
      icon: (
        <Github className="w-10 h-10 text-slate-300 group-hover:text-white" />
      ),
      title: "GitHub",
      description: "View my code",
      href: "https://github.com/ArslanTiwana",
      hoverClass: "group-hover:text-white",
    },
    {
      icon: (
        <Linkedin className="w-10 h-10 text-blue-400 group-hover:text-blue-300" />
      ),
      title: "LinkedIn",
      description: "Professional network",
      href: "https://www.linkedin.com/in/muhammad-arslan-650b4b1a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      hoverClass: "group-hover:text-blue-300",
    },
    {
      icon: (
        <MessageCircle className="w-10 h-10 text-emerald-400 group-hover:text-emerald-300" />
      ),
      title: "Whatsapp",
      description: "Get in touch",
      href: "https://wa.me/+923128588409",
      hoverClass: "group-hover:text-emerald-300",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-lg max-w-2xl mx-auto text-slate-900">
            Ready to build something amazing together?
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className="bg-white border-slate-700 hover:bg-slate-700 transition-colors group"
              >
                <CardContent className="p-6">
                  <a
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="mb-4">{method.icon}</div>
                    <h3 className="text-lg font-semibold mb-2 text-slate-900 group-hover:text-slate-300">
                      {method.title}
                    </h3>
                    <p className="text-slate-400 group-hover:text-slate-300">
                      {method.description}
                    </p>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              asChild
              className="bg-gradient-primary hover:opacity-90 text-white px-8 py-4 font-semibold text-lg transition-all transform hover:scale-105"
            >
              <a href="mailto:muhammadarslan0111@email.com">
                Start a Conversation
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
