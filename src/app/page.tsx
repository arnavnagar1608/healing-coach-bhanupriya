import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PhilosophySection from "@/components/PhilosophySection";
import ServicesSection from "@/components/ServicesSection";
import FeaturedReadingSection from "@/components/FeaturedReadingSection";
import ReikiLearningSection from "@/components/ReikiLearningSection";
import TarotCourseSection from "@/components/TarotCourseSection";
import CrystalSection from "@/components/CrystalSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import JournalSection from "@/components/JournalSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full">
      <Navbar />
      <Hero />
      <PhilosophySection />
      <ServicesSection />
      <FeaturedReadingSection />
      <ReikiLearningSection />
      <TarotCourseSection />
      <CrystalSection />
      <AboutSection />
      <TestimonialsSection />
      <JournalSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
