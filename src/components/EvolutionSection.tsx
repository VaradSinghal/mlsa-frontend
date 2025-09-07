import { Button } from "@/components/ui/button";

export const EvolutionSection = () => {
  return (
    <section className="py-16 bg-section-bg">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-section-text mb-6">
          POP!_OS IS EVOLVING
        </h2>
        <p className="text-lg text-section-text/80 max-w-4xl mx-auto mb-8">
          COSMIC, our budding desktop environment, brings new features, refinements, core 
          apps, stability, security, and performance to Pop!_OS users everywhere.
        </p>
        <Button 
          variant="outline" 
          className="border-section-text text-section-text hover:bg-section-text hover:text-section-bg"
        >
          LEARN MORE ABOUT COSMIC →
        </Button>
      </div>
    </section>
  );
};