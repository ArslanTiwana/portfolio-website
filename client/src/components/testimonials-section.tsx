import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "AreekaWeb.com",
      role: "Freelance Client (NestJS Project – 2024)",
      location: "USA",
      quote:
        "Arslan is a brilliant backend developer. He understood complex business logic quickly and delivered a clean, scalable NestJS API faster than expected. Would love to work again!",
      rating: 5,
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
      accentColor: "text-blue-600",
    },
    {
      name: "Lead Developer",
      role: "Team Lead (Startup Internship – 2023)",
      location: "Techless Team",
      quote:
        "Arslan was one of the most consistent and curious interns we've ever had. He took ownership of features and wasn't afraid to dive into difficult bugs or new stacks.",
      rating: 5,
      bgColor: "bg-gradient-to-br from-emerald-50 to-emerald-100",
      accentColor: "text-emerald-600",
    },
    {
      name: "Senior Developer",
      role: "Mentor",
      location: "Mentor",
      quote:
        "He's sharp, humble, and genuinely passionate about backend systems. It's rare to find someone this early in their career with such architectural awareness.",
      rating: 5,
      bgColor: "bg-gradient-to-br from-purple-50 to-purple-100",
      accentColor: "text-purple-600",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-pink-500 to-red-500 text-white">
            ❤️ Testimonials
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground text-slate-900">
            What People Say About My Work
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto mb-6 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`${testimonial.bgColor} border-0 shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105`}
            >
              <CardContent className="p-6">
                {/* Quote icon */}
                <div className="flex justify-center mb-4">
                  <Quote
                    className={`w-8 h-8 ${testimonial.accentColor} opacity-60`}
                  />
                </div>

                {/* Stars */}
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-slate-700 mb-6 italic leading-relaxed text-center">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="text-center">
                  <div
                    className={`font-semibold ${testimonial.accentColor} mb-1`}
                  >
                    — {testimonial.name}
                  </div>
                  <div className="text-sm text-slate-600 mb-1">
                    {testimonial.role}
                  </div>
                  <div className="text-xs text-slate-500">
                    {testimonial.location}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        {/* <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-4">
                Ready to Work Together?
              </h3>
              <p className="text-slate-300 mb-6">
                Join these satisfied clients and let's build something amazing
                together.
              </p>
              <a
                href="#contact"
                className="inline-block bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </a>
            </CardContent>
          </Card>
        </div> */}
      </div>
    </section>
  );
}
