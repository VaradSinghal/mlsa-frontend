import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { EvolutionSection } from "@/components/EvolutionSection";
import { MeetSection } from "@/components/MeetSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { OtherFeaturesSection } from "@/components/OtherFeaturesSection";
import { HardwareSection } from "@/components/HardwareSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <EvolutionSection />
        <MeetSection />
        <FeaturesSection />
        <OtherFeaturesSection />
        <HardwareSection />
        <TestimonialsSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
