import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Brain, Zap, Target, Shield, TrendingUp, Database } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const AIEngine = () => {
  const features = [
    {
      icon: Brain,
      title: "Machine Learning Algorithms",
      description: "Advanced ML models trained on millions of supplier interactions and transactions.",
      accuracy: 94
    },
    {
      icon: Target,
      title: "Precision Matching",
      description: "Smart algorithms that understand context, preferences, and business requirements.",
      accuracy: 91
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Forecast pricing trends, delivery times, and supplier performance.",
      accuracy: 87
    },
    {
      icon: Shield,
      title: "Risk Assessment",
      description: "Real-time risk evaluation and supplier reliability scoring.",
      accuracy: 96
    },
    {
      icon: Database,
      title: "Big Data Processing",
      description: "Process vast amounts of market data to find the best opportunities.",
      accuracy: 89
    },
    {
      icon: Zap,
      title: "Real-time Optimization",
      description: "Continuous learning and adaptation to market changes.",
      accuracy: 92
    }
  ];

  const metrics = [
    { label: "Data Points Processed", value: "50M+", description: "Daily market data analysis" },
    { label: "Suppliers Analyzed", value: "100K+", description: "Verified supplier network" },
    { label: "Match Accuracy", value: "94%", description: "AI recommendation precision" },
    { label: "Cost Savings", value: "40%", description: "Average client savings" }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            🤖 Powered by Advanced AI
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Our <span className="text-transparent bg-gradient-primary bg-clip-text">AI Engine</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the cutting-edge artificial intelligence that powers SupplyAI's 
            recommendation system and transforms how businesses find suppliers.
          </p>
        </div>

        {/* Metrics Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <Card key={index} className="bg-card/50 border-border text-center hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <div className="text-3xl font-bold text-primary">{metric.value}</div>
                <CardTitle className="text-lg">{metric.label}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{metric.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* AI Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            AI-Powered Intelligence Features
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-card/50 border-border hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    {feature.description}
                  </CardDescription>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Accuracy</span>
                      <span className="text-foreground font-medium">{feature.accuracy}%</span>
                    </div>
                    <Progress value={feature.accuracy} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Technology Stack Section */}
        <div className="bg-card/30 rounded-2xl p-8 border border-border">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Technology Stack
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-primary-foreground" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Neural Networks</h4>
              <p className="text-muted-foreground">
                Deep learning models for pattern recognition and intelligent matching
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="w-8 h-8 text-primary-foreground" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Big Data</h4>
              <p className="text-muted-foreground">
                Scalable data processing and real-time analytics infrastructure
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-primary-foreground" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Real-time AI</h4>
              <p className="text-muted-foreground">
                Instant recommendations with continuous learning capabilities
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AIEngine;