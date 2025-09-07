import { Button } from "@/components/ui/button";

export const AboutSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-primary mb-4 tracking-wide">Proud Advocates for Open Source</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            About System76
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <div className="aspect-video bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg overflow-hidden mb-6">
              <div className="w-full h-full flex items-center justify-center text-white">
                <div className="text-center">
                  <h3 className="text-xl font-bold">Engineers design linux desktop prototype</h3>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Built for User Freedom
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Pop!_OS is engineered and designed in-house by System76, the US computer manufacturer. 
              From our factory in Colorado, we craft open source software, repairable computers, and 
              airtight firmware—with the aim of empowering users' ambitions on the best-quality 
              product we can muster.
            </p>
            <Button 
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Our mission
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};