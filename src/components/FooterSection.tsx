export const FooterSection = () => {
  return (
    <section className="py-16 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-section-text mb-6">
            Unleash Your potential
          </h2>
          <p className="text-lg text-section-text/80 max-w-3xl mx-auto">
            Pop!_OS is free to download, and freeing to use. Get started with this powerful OS and take to the stars.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-primary rounded-lg flex items-center justify-center">
              <svg className="w-8 h-8 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-section-text mb-2">Pop Docs</h3>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-secondary rounded-lg flex items-center justify-center">
              <svg className="w-8 h-8 text-secondary-foreground" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-section-text mb-2">Pop! Chat</h3>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-accent rounded-lg flex items-center justify-center">
              <svg className="w-8 h-8 text-accent-foreground" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-section-text mb-2">Github</h3>
          </div>
        </div>
      </div>
    </section>
  );
};