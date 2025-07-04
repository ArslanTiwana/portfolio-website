import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import TechStackSection from "@/components/tech-stack-section";
import ExperienceSection from "@/components/experience-section";
import ProjectsSection from "@/components/projects-section";
import LearningRoadmapSection from "@/components/learning-roadmap-section";
import AchievementsSection from "@/components/achievements-section";
import LearningJourneySection from "@/components/learning-journey-section";
import TestimonialsSection from "@/components/testimonials-section";
import CurrentLearningSection from "@/components/current-learning-section";
import DevToolkitSection from "@/components/dev-toolkit-section";
import FavoriteResourcesSection from "@/components/favorite-resources-section";
import QuoteSection from "@/components/quote-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <TechStackSection />
      <ExperienceSection />
      <ProjectsSection />
      <LearningRoadmapSection />
      <AchievementsSection />
      <LearningJourneySection />
      <TestimonialsSection />
      <CurrentLearningSection />
      <DevToolkitSection />
      <FavoriteResourcesSection />
      <QuoteSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
