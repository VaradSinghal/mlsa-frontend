const otherFeatures = [
  {
    title: "Hybrid Graphics",
    description: "Set phasers to stunning performance. Toggle between battery-saving and high-powered graphics, or launch individual apps on GPU power.",
    bgColor: "bg-gradient-to-r from-purple-500 to-pink-500"
  },
  {
    title: "Gaming", 
    description: "Steam, Lutris, and GameHub create an incredible gaming experience in selection and performance. Let your game library roam free on one OS.",
    bgColor: "bg-gradient-to-r from-green-500 to-teal-500"
  },
  {
    title: "Do Not Disturb",
    description: "Get rid of any and all notifications for however long you like. Cast out ye heathens, for there is many a work to be done!",
    bgColor: "bg-gradient-to-r from-orange-500 to-red-500"
  }
];

export const OtherFeaturesSection = () => {
  return (
    <section className="py-16 bg-section-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-section-text text-center mb-12">
          Other Features
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {otherFeatures.map((feature, index) => (
            <div key={index} className="group">
              <div className={`aspect-video rounded-lg ${feature.bgColor} mb-4 overflow-hidden`}>
                <div className="w-full h-full flex items-center justify-center text-white">
                  <div className="text-center p-6">
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-section-text mb-3">
                {feature.title}
              </h3>
              <p className="text-section-text/80 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};