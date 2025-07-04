import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import TechStackSection from "@/components/tech-stack-section";
import ExperienceSection from "@/components/experience-section";
import ProjectsSection from "@/components/projects-section";
import LearningRoadmapSection from "@/components/learning-roadmap-section";
import AchievementsSection from "@/components/achievements-section";
import QuoteSection from "@/components/quote-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <Navigation />
      <HeroSection />
      <TechStackSection />
      <ExperienceSection />
      <ProjectsSection />
      <LearningRoadmapSection />
      <AchievementsSection />
      <QuoteSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
