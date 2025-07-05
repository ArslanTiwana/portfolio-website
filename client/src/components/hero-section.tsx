import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import ProfileAvatar from "@/components/profile-avatar";

export default function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offsetTop =
        element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-emerald-50 dark:from-slate-900 dark:to-slate-800"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1),transparent)] opacity-70"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-[60px]">
        {/* Profile Avatar */}
        <ProfileAvatar />

        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-emerald-600 dark:from-blue-400 dark:to-emerald-400 bg-clip-text text-transparent">
            Muhammad Arslan
          </h1>

          {/* Academic Achievement Badge */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
            <p className="text-xl md:text-2xl text-muted-foreground">
              Full-Stack Developer
            </p>
            <Badge className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-yellow-900 px-4 py-1 text-sm font-semibold shadow-lg">
              🏆 Gold Medalist BSCS
            </Badge>
          </div>

          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto mb-8 rounded-full"></div>
        </div>

        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12">
          A{" "}
          <strong className="text-yellow-500 dark:text-yellow-400">
            Gold Medalist
          </strong>{" "}
          computer science graduate and detail-driven full-stack engineer with{" "}
          <strong className="text-blue-600 dark:text-blue-400">2+ years</strong>{" "}
          of experience in backend-heavy systems and full-stack application
          design. I bring deep expertise in{" "}
          <strong className="text-emerald-600 dark:text-emerald-400">
            React
          </strong>
          ,{" "}
          <strong className="text-emerald-600 dark:text-emerald-400">
            NestJS
          </strong>
          ,{" "}
          <strong className="text-emerald-600 dark:text-emerald-400">
            PostgreSQL
          </strong>
          , and real-world system architecture.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => scrollToSection("#contact")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 font-semibold transition-colors"
          >
            Get In Touch
          </Button>
          <Link href="/blog">
            <Button
              variant="outline"
              className="border-slate-600 hover:border-blue-500 text-black dark:text-slate-300 hover:text-blue-400 px-8 py-3 font-semibold transition-colors"
            >
              Read My Blog
            </Button>
          </Link>
          <Button
            onClick={() => scrollToSection("#projects")}
            variant="outline"
            className="border-slate-600 hover:border-blue-500 dark:text-slate-300 hover:text-blue-400 px-8 py-3 font-semibold transition-colors"
          >
            View Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
