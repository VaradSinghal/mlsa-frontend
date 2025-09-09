import system76Logo from "@/assets/system76-logo.png";

export const Header = () => {
  return (
    <header className="w-full bg-background">
      {/* Top bar with user actions */}
      <div className="bg-muted/30 border-b border-border">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-end space-x-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              search
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              contact
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              log in
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              register
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors flex items-center space-x-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 1.5M7 13l1.5 1.5M17 21a2 2 0 100-4 2 2 0 000 4zM9 21a2 2 0 100-4 2 2 0 000 4z" />
              </svg>
              <span>cart</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        {/* System76 logo centered */}
        <div className="flex items-center justify-center mb-4">
          <div className="flex items-center space-x-3">
            <img src={system76Logo} alt="System76" className="h-10 w-auto" />
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">system76</div>
              <div className="text-sm text-muted-foreground -mt-1">Powerful Linux Computers</div>
            </div>
          </div>
        </div>
        
        {/* Navigation row */}
        <div className="flex items-center justify-center">
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              laptops
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              desktops
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              workstations
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              mini
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              servers
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              keyboards
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              components
            </a>
            <a href="#" className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
              pop_os
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              merch
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              specials
            </a>
          </nav>

          {/* Mobile menu button */}
          <button className="lg:hidden p-2">
            <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};