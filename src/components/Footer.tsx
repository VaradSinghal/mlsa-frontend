import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import system76Logo from "@/assets/system76-logo.png";

export const Footer = () => {
  return (
    <footer className="bg-space-blue text-hero-text py-16">
      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={system76Logo} alt="System76" className="h-8 w-auto" />
              <div>
                <div className="font-bold text-lg">system76</div>
                <div className="text-sm text-hero-text/70">Powerful Linux Computers</div>
              </div>
            </div>
            <p className="text-sm text-hero-text/80 leading-relaxed">
              Crafting open source software, repairable computers, and airtight firmware 
              from our factory in Colorado.
            </p>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Products</h3>
            <div className="space-y-2">
              <a href="#" className="block text-sm text-hero-text/80 hover:text-hero-text transition-colors">Laptops</a>
              <a href="#" className="block text-sm text-hero-text/80 hover:text-hero-text transition-colors">Desktops</a>
              <a href="#" className="block text-sm text-hero-text/80 hover:text-hero-text transition-colors">Workstations</a>
              <a href="#" className="block text-sm text-hero-text/80 hover:text-hero-text transition-colors">Mini Computers</a>
              <a href="#" className="block text-sm text-hero-text/80 hover:text-hero-text transition-colors">Servers</a>
              <a href="#" className="block text-sm text-hero-text/80 hover:text-hero-text transition-colors">Keyboards</a>
            </div>
          </div>

          {/* Software */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Software</h3>
            <div className="space-y-2">
              <a href="#" className="block text-sm text-hero-text/80 hover:text-hero-text transition-colors">Pop!_OS</a>
              <a href="#" className="block text-sm text-hero-text/80 hover:text-hero-text transition-colors">COSMIC Desktop</a>
              <a href="#" className="block text-sm text-hero-text/80 hover:text-hero-text transition-colors">Firmware</a>
              <a href="#" className="block text-sm text-hero-text/80 hover:text-hero-text transition-colors">Drivers</a>
              <a href="#" className="block text-sm text-hero-text/80 hover:text-hero-text transition-colors">Documentation</a>
              <a href="#" className="block text-sm text-hero-text/80 hover:text-hero-text transition-colors">GitHub</a>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Support</h3>
            <div className="space-y-2">
              <a href="#" className="block text-sm text-hero-text/80 hover:text-hero-text transition-colors">Contact Support</a>
              <a href="#" className="block text-sm text-hero-text/80 hover:text-hero-text transition-colors">User Guides</a>
              <a href="#" className="block text-sm text-hero-text/80 hover:text-hero-text transition-colors">Community</a>
              <a href="#" className="block text-sm text-hero-text/80 hover:text-hero-text transition-colors">Downloads</a>
              <a href="#" className="block text-sm text-hero-text/80 hover:text-hero-text transition-colors">Warranty</a>
              <a href="#" className="block text-sm text-hero-text/80 hover:text-hero-text transition-colors">Returns</a>
            </div>
          </div>
        </div>

        <Separator className="bg-hero-text/20 mb-8" />

        {/* Bottom footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-6">
            <span className="text-sm text-hero-text/60">© 2024 System76, Inc.</span>
            <a href="#" className="text-sm text-hero-text/80 hover:text-hero-text transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-hero-text/80 hover:text-hero-text transition-colors">Terms of Service</a>
          </div>
          
          <div className="flex items-center space-x-4">
            <a href="#" className="text-hero-text/80 hover:text-hero-text transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a href="#" className="text-hero-text/80 hover:text-hero-text transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
              </svg>
            </a>
            <a href="#" className="text-hero-text/80 hover:text-hero-text transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.748.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.758-1.378l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
              </svg>
            </a>
            <a href="#" className="text-hero-text/80 hover:text-hero-text transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};