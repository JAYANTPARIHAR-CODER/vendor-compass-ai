import { Bot, Target, BarChart3, MapPin, Shield, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const FeatureCards = () => {
  const features = [
    {
      icon: Bot,
      title: "AI-Powered Matching",
      description: "Our advanced algorithms analyze your requirements and match you with the most suitable suppliers based on quality, price, and reliability.",
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/20"
    },
    {
      icon: Target,
      title: "Smart Recommendations",
      description: "Get personalized supplier recommendations based on your industry, location, budget, and past procurement patterns.",
      color: "text-success",
      bgColor: "bg-success/10",
      borderColor: "border-success/20"
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Track market trends, compare prices in real-time, and make data-driven decisions with comprehensive analytics dashboard.",
      color: "text-info",
      bgColor: "bg-info/10",
      borderColor: "border-info/20"
    },
    {
      icon: MapPin,
      title: "Location-Based Search",
      description: "Find suppliers near your location to reduce shipping costs and delivery times while supporting local businesses.",
      color: "text-warning",
      bgColor: "bg-warning/10",
      borderColor: "border-warning/20"
    },
    {
      icon: Shield,
      title: "Verified Suppliers",
      description: "All suppliers are thoroughly vetted and verified. Access reviews, certifications, and compliance records.",
      color: "text-purple-400",
      bgColor: "bg-purple-400/10",
      borderColor: "border-purple-400/20"
    },
    {
      icon: Zap,
      title: "Instant Quotes",
      description: "Get instant price quotes from multiple suppliers and compare offers side-by-side to make the best deal.",
      color: "text-orange-400",
      bgColor: "bg-orange-400/10",
      borderColor: "border-orange-400/20"
    }
  ];

  return (
    <section className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
            Core Features
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Powered by Advanced AI Technology
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our intelligent platform revolutionizes supplier discovery and procurement processes
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index} 
                className={`bg-gradient-card border ${feature.borderColor} hover:shadow-glow transition-all duration-300 group hover:-translate-y-2`}
              >
                <CardContent className="p-8">
                  {/* Icon */}
                  <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-8 h-8 ${feature.color}`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Hover Effect */}
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className={`h-1 w-12 ${feature.bgColor} rounded-full`} />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-card/50 backdrop-blur-md rounded-2xl p-8 border border-border max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Procurement?</h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of businesses already using our AI-powered platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-smooth shadow-glow">
                Start Free Trial
              </button>
              <button className="border border-border px-6 py-3 rounded-lg font-medium hover:bg-secondary/50 transition-smooth">
                Book a Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-32 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-32 right-0 w-96 h-96 bg-success/5 rounded-full blur-3xl" />
    </section>
  );
};

export default FeatureCards;