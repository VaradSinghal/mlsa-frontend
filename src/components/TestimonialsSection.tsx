import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    name: "Robert H.",
    quote: "When I first got my System76 laptop I decided I'd use Pop!_OS until it annoyed me, and would then switch to my distro-of-choice. Two years later not only am I still using it, it's become my distro-of-choice. It's radically cut how much time I spend hand-hacking configuration files, which gives me more time to spend on my projects."
  },
  {
    name: "Stuart L",
    quote: "My favorite thing about Pop!_OS is that it literally gets out of your way and I can get so much work done without any problems. My favorite feature has to be the docker and the sweet animations!!!"
  },
  {
    name: "Robert T.",
    quote: "With minimal fiddling, Pop!_OS is a very capable, functional, and beautiful Linux distribution. It is still fully tweakable, but out of the box it just works. Really well!"
  },
  {
    name: "Amanda T.",
    quote: "I am a high school science teacher, and while I do consider myself tech-savvy, I am not one to explore or experiment with different operating systems. I have been using Pop!_OS for several months now and I love it. It is very intuitive and user-friendly for the non-Linux user."
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-section-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-section-text text-center mb-12">
          Testimonials
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 bg-card border-border">
              <div className="mb-6">
                <h4 className="font-bold text-foreground text-lg mb-4">
                  {testimonial.name}
                </h4>
                <blockquote className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.quote}"
                </blockquote>
              </div>
              
              <Button 
                variant="outline"
                size="sm"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Shop now
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};