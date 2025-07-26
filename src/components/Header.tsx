import { Search, MapPin, ShoppingCart, Globe, User, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  ];

  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-primary rounded-xl p-2">
              <div className="w-8 h-8 bg-primary-foreground rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-sm">S</span>
              </div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">SupplyAI</h1>
              <p className="text-xs text-muted-foreground">Smart Vendor Platform</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-smooth">Home</Link>
            <Link to="/how-it-works" className="text-muted-foreground hover:text-primary transition-smooth">How It Works</Link>
            <Link to="/ai-engine" className="text-muted-foreground hover:text-primary transition-smooth">AI Engine</Link>
            <Link to="/insights" className="text-muted-foreground hover:text-primary transition-smooth">Insights</Link>
            <Link to="/contact" className="text-muted-foreground hover:text-primary transition-smooth">Contact</Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center relative max-w-md flex-1 mx-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input 
              placeholder="Search suppliers and products..." 
              className="pl-10 bg-secondary/50 border-border focus:border-primary"
            />
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-3">
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                  <Globe className="w-4 h-4 mr-1" />
                  EN
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                {languages.map((lang) => (
                  <DropdownMenuItem key={lang.code} className="cursor-pointer">
                    <span className="mr-2">{lang.flag}</span>
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Location */}
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
              <MapPin className="w-4 h-4 mr-1" />
              Location
            </Button>

            {/* Notifications */}
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="w-4 h-4" />
              <Badge variant="destructive" className="absolute -top-1 -right-1 w-2 h-2 p-0" />
            </Button>

            {/* Cart */}
            <Button variant="ghost" size="sm" className="relative">
              <ShoppingCart className="w-4 h-4" />
              <Badge variant="secondary" className="absolute -top-1 -right-1 text-xs">2</Badge>
            </Button>

            {/* Get Started Button */}
            <Button className="bg-gradient-primary hover:opacity-90 transition-smooth shadow-glow">
              Get Started
            </Button>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm">
                  <User className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link to="/profile">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/dashboard">Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/settings">Settings</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* AI Intelligence Banner */}
        <div className="mt-3 flex items-center justify-center">
          <div className="bg-info/10 border border-info/20 rounded-full px-4 py-1 flex items-center space-x-2">
            <div className="w-2 h-2 bg-info rounded-full animate-pulse" />
            <span className="text-sm text-info font-medium">AI-Powered Intelligence Platform</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;