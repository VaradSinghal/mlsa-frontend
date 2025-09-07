export const MeetSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
          MEET POP!_OS
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="aspect-video bg-space-blue rounded-lg overflow-hidden mb-8">
            <div className="w-full h-full flex items-center justify-center text-hero-text">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 5v10l8-5-8-5z"/>
                  </svg>
                </div>
                <p className="text-lg">Workflow Customization Video</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};