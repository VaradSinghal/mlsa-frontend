import { Button } from "@/components/ui/button";
import workflowImg from "@/assets/workflow-feature.png";
import compatibilityImg from "@/assets/compatibility-feature.png";
import securityImg from "@/assets/security-feature.png";
import customizationImg from "@/assets/customization-feature.png";

const features = [
  {
    title: "Workflow",
    description: "Pop!_OS is designed for fast navigation, easy workspace organization, and fluid, convenient workflow. Your operating system should encourage discovery, not obstruct it.",
    image: workflowImg,
    link: "/workflow/"
  },
  {
    title: "Compatibility", 
    description: "Develop software out of the box with a vast array of libraries and tools at your disposal. Pop!_OS uses APT and Flatpak package management, meaning it's easy to install, remove, and update all software on the OS.",
    image: compatibilityImg,
    link: "/compatibility"
  },
  {
    title: "Keep Your Computer Secure",
    description: "Built with security at its core. Full-disk encryption comes standard, keeping your data safe from unauthorized access. You're in control of system updates, installing them on your schedule to minimize disruptions.",
    image: securityImg,
    link: "/security"
  },
  {
    title: "Customization",
    description: "Get comfy with an extensive, easy-to-find list of preferences. Set dock orientation, window tiling, Super navigation, keyboard layout and shortcuts, privacy controls, and more. Your computer, your tool, your way. YOURS.",
    image: customizationImg,
    link: "#"
  }
];

export const FeaturesSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-primary mb-4 tracking-wide">FEATURES</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            WHY POP!_OS?
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center lg:text-left lg:flex-row lg:items-start gap-6">
              <div className="flex-shrink-0">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-32 h-32 object-cover rounded-lg"
                />
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <Button 
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};