import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, MapPin, TrendingUp } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,hsl(188_78%_55%/0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,hsl(188_78%_55%/0.05),transparent_50%)]" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <Badge variant="secondary" className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-smooth">
            <Sparkles className="w-3 h-3 mr-1" />
            AI-Powered Intelligence Platform
          </Badge>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Find the Perfect Suppliers with{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              AI-Powered
            </span>{" "}
            Intelligence
          </h1>

          {/* Description */}
          <div className="space-y-4 mb-8">
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Connect with verified suppliers effortlessly, compare prices and get personalized recommendations.
            </p>
            <p className="text-base md:text-lg text-muted-foreground/80 max-w-2xl mx-auto">
              Transform your procurement process with intelligent automation and data-driven insights.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 transition-smooth shadow-glow text-lg px-8 py-6 group"
            >
              Start Finding Suppliers
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-smooth" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-border hover:bg-secondary/50 text-lg px-8 py-6"
            >
              See How It Works
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="text-center p-4">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">10K+</div>
              <div className="text-sm text-muted-foreground">Verified Suppliers</div>
            </div>
            <div className="text-center p-4">
              <div className="text-2xl md:text-3xl font-bold text-success mb-1">98%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
            <div className="text-center p-4">
              <div className="text-2xl md:text-3xl font-bold text-warning mb-1">$2.5B</div>
              <div className="text-sm text-muted-foreground">Total Deals</div>
            </div>
            <div className="text-center p-4">
              <div className="text-2xl md:text-3xl font-bold text-info mb-1">24/7</div>
              <div className="text-sm text-muted-foreground">AI Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 hidden lg:block">
        <div className="bg-card/30 backdrop-blur-md rounded-xl p-4 border border-border shadow-card animate-bounce">
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm text-foreground">Local Suppliers</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-32 right-16 hidden lg:block">
        <div className="bg-card/30 backdrop-blur-md rounded-xl p-4 border border-border shadow-card animate-bounce delay-1000">
          <div className="flex items-center space-x-2">
            <TrendingUp className="w-4 h-4 text-success" />
            <span className="text-sm text-foreground">Price Trends</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;