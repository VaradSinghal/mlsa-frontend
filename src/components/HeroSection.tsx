import { Button } from "@/components/ui/button";
import heroSpaceBg from "@/assets/hero-space-bg.jpg";

export const HeroSection = () => {
  return (
    <section
      className="relative min-h-[80vh] flex items-center justify-center text-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroSpaceBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-space-blue/80"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-hero-text mb-6">
            Welcome to Pop!_OS
          </h1>
          <p className="text-xl md:text-2xl text-hero-text/90 mb-8 max-w-3xl mx-auto">
            Unleash your potential on Pop!_OS: an operating system for STEM and creative professionals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="secondary" 
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 py-3 text-lg font-medium"
            >
              DOWNLOAD
            </Button>
            <Button 
              variant="default"
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-lg font-medium"
            >
              DONATE TO POP
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};