const hardwareCategories = [
  {
    title: "Laptops",
    description: "High-performance laptops designed to harmonize with their software while tightening security.",
    bgColor: "bg-gradient-to-r from-blue-600 to-purple-600"
  },
  {
    title: "Desktops", 
    description: "Powerful, quiet handcrafted desktops designed for tinkering and engineered for max performance.",
    bgColor: "bg-gradient-to-r from-gray-700 to-gray-900"
  },
  {
    title: "Workstations",
    description: "Computers designed for intense tasks, offering robust performance and open-source adaptability.",
    bgColor: "bg-gradient-to-r from-orange-500 to-red-600"
  },
  {
    title: "Keyboards",
    description: "Handcrafted mechanical keyboards designed by keyboard enthusiasts for typing at warp speed.",
    bgColor: "bg-gradient-to-r from-teal-500 to-cyan-600"
  }
];

export const HardwareSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-primary mb-4 tracking-wide">THE COMPLETE EXPERIENCE</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Hardware Made For Pop!_OS
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {hardwareCategories.map((category, index) => (
            <div key={index} className="group cursor-pointer">
              <div className={`aspect-square rounded-lg ${category.bgColor} mb-4 overflow-hidden transition-transform group-hover:scale-105`}>
                <div className="w-full h-full flex items-center justify-center text-white p-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold">{category.title}</h3>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-3">
                {category.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};