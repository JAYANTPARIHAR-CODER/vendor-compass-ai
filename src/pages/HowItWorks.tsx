import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, ArrowRight, Users, Search, Brain, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: "Tell Us What You Need",
      description: "Describe your product requirements, budget, and location preferences.",
      details: "Our smart form captures all the essential details about your sourcing needs."
    },
    {
      icon: Brain,
      title: "AI Analyzes & Matches",
      description: "Our AI engine processes your requirements and finds the best suppliers.",
      details: "Advanced algorithms consider price, quality, location, and historical performance."
    },
    {
      icon: Users,
      title: "Get Curated Recommendations",
      description: "Receive a personalized list of verified suppliers with match scores.",
      details: "Each recommendation includes pricing, ratings, and delivery estimates."
    },
    {
      icon: Star,
      title: "Connect & Order",
      description: "Contact suppliers directly and place orders with confidence.",
      details: "Built-in communication tools and order tracking for seamless transactions."
    }
  ];

  const benefits = [
    "Save 40% on sourcing costs",
    "Reduce supplier discovery time by 80%",
    "Access to 10,000+ verified suppliers",
    "Real-time price comparisons",
    "Quality assurance guarantees",
    "24/7 customer support"
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            How <span className="text-transparent bg-gradient-primary bg-clip-text">SupplyAI</span> Works
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our AI-powered platform revolutionizes supplier discovery and procurement. 
            Here's how we make sourcing smarter, faster, and more cost-effective.
          </p>
        </div>

        {/* Steps Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            4 Simple Steps to Smart Sourcing
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <Card key={index} className="bg-card/50 border-border hover:shadow-glow transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="text-sm font-semibold text-primary mb-2">Step {index + 1}</div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center mb-4">
                    {step.description}
                  </CardDescription>
                  <p className="text-sm text-muted-foreground text-center">
                    {step.details}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-card/30 rounded-2xl p-8 border border-border mb-16">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Why Choose SupplyAI?
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                <span className="text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-foreground mb-6">
            Ready to Transform Your Sourcing?
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already saving time and money with SupplyAI.
          </p>
          <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-smooth shadow-glow">
            Get Started Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HowItWorks;