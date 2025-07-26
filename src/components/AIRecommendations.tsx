import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Bot, TrendingUp, Star, MapPin, DollarSign, Clock, Zap } from "lucide-react";

const AIRecommendations = () => {
  const recommendations = [
    {
      id: 1,
      supplierName: "TechFlow Solutions",
      category: "Electronics Components",
      matchScore: 96,
      estimatedPrice: "$2,450",
      deliveryTime: "3-5 days",
      location: "2.1 km away",
      rating: 4.9,
      specialization: "Microprocessors & Sensors",
      aiInsight: "Perfect match for your technical requirements and budget constraints",
      badges: ["Best Price", "Fast Delivery", "Top Rated"],
      strengths: ["Competitive pricing", "Quick response", "Quality assurance"]
    },
    {
      id: 2,
      supplierName: "Global Materials Inc",
      category: "Raw Materials",
      matchScore: 89,
      estimatedPrice: "$1,890",
      deliveryTime: "5-7 days",
      location: "4.8 km away", 
      rating: 4.7,
      specialization: "Industrial Grade Materials",
      aiInsight: "Strong reputation with excellent bulk pricing for your volume needs",
      badges: ["Bulk Discount", "Verified", "ISO Certified"],
      strengths: ["Volume discounts", "Certified quality", "Long-term reliability"]
    },
    {
      id: 3,
      supplierName: "Express Logistics Co",
      category: "Packaging & Shipping",
      matchScore: 82,
      estimatedPrice: "$850",
      deliveryTime: "1-2 days",
      location: "6.2 km away",
      rating: 4.6,
      specialization: "Express Delivery Solutions",
      aiInsight: "Fastest delivery option with sustainable packaging solutions",
      badges: ["Eco-Friendly", "Express", "Local"],
      strengths: ["Fastest delivery", "Eco packaging", "Flexible scheduling"]
    }
  ];

  const aiMetrics = [
    { label: "Match Accuracy", value: 94, color: "text-primary" },
    { label: "Price Optimization", value: 87, color: "text-success" },
    { label: "Delivery Efficiency", value: 91, color: "text-warning" },
    { label: "Quality Score", value: 96, color: "text-info" }
  ];

  return (
    <section className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
            <Bot className="w-3 h-3 mr-1" />
            AI Recommendations
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Smart Supplier Matching
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our AI analyzes your requirements and finds the perfect suppliers based on your specific needs
          </p>
        </div>

        {/* AI Metrics Dashboard */}
        <Card className="mb-12 bg-gradient-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Zap className="w-5 h-5 mr-2 text-primary" />
              AI Performance Metrics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {aiMetrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className={`text-2xl font-bold ${metric.color} mb-2`}>
                    {metric.value}%
                  </div>
                  <div className="text-sm text-muted-foreground mb-3">
                    {metric.label}
                  </div>
                  <Progress value={metric.value} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recommendations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {recommendations.map((rec, index) => (
            <Card 
              key={rec.id} 
              className={`bg-gradient-card border-border hover:shadow-glow transition-all duration-300 group ${
                index === 0 ? 'ring-2 ring-primary' : ''
              }`}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-1">{rec.supplierName}</CardTitle>
                    <p className="text-sm text-muted-foreground">{rec.category}</p>
                  </div>
                  {index === 0 && (
                    <Badge className="bg-gradient-primary text-primary-foreground">
                      Best Match
                    </Badge>
                  )}
                </div>

                {/* Match Score */}
                <div className="mt-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">AI Match Score</span>
                    <span className="text-lg font-bold text-primary">{rec.matchScore}%</span>
                  </div>
                  <Progress value={rec.matchScore} className="h-2" />
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-secondary/30 rounded-lg">
                    <DollarSign className="w-4 h-4 mx-auto mb-1 text-success" />
                    <div className="font-semibold text-sm">{rec.estimatedPrice}</div>
                    <div className="text-xs text-muted-foreground">Est. Price</div>
                  </div>
                  <div className="text-center p-3 bg-secondary/30 rounded-lg">
                    <Clock className="w-4 h-4 mx-auto mb-1 text-warning" />
                    <div className="font-semibold text-sm">{rec.deliveryTime}</div>
                    <div className="text-xs text-muted-foreground">Delivery</div>
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-2 text-warning fill-current" />
                    <span>{rec.rating} rating</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-primary" />
                    <span>{rec.location}</span>
                  </div>
                  <div className="flex items-center">
                    <TrendingUp className="w-4 h-4 mr-2 text-info" />
                    <span>{rec.specialization}</span>
                  </div>
                </div>

                {/* AI Insight */}
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-3">
                  <div className="flex items-start">
                    <Bot className="w-4 h-4 mr-2 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-primary">{rec.aiInsight}</p>
                  </div>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-1">
                  {rec.badges.map((badge, badgeIndex) => (
                    <Badge 
                      key={badgeIndex} 
                      variant="secondary" 
                      className="text-xs bg-secondary/50"
                    >
                      {badge}
                    </Badge>
                  ))}
                </div>

                {/* Strengths */}
                <div>
                  <h4 className="text-sm font-medium mb-2">Key Strengths:</h4>
                  <ul className="space-y-1">
                    {rec.strengths.map((strength, strengthIndex) => (
                      <li key={strengthIndex} className="text-xs text-muted-foreground flex items-center">
                        <div className="w-1 h-1 bg-primary rounded-full mr-2" />
                        {strength}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-2">
                  <Button 
                    size="sm" 
                    className={`flex-1 ${index === 0 ? 'bg-gradient-primary' : 'bg-secondary hover:bg-secondary/80'}`}
                  >
                    Get Quote
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Card className="max-w-2xl mx-auto bg-gradient-card border-border">
            <CardContent className="p-8">
              <Bot className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-2xl font-bold mb-4">Want More Personalized Recommendations?</h3>
              <p className="text-muted-foreground mb-6">
                Share more details about your requirements to get even better AI-powered matches
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-primary">
                  Improve Recommendations
                </Button>
                <Button variant="outline">
                  Set Up Alerts
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-success/5 rounded-full blur-3xl" />
    </section>
  );
};

export default AIRecommendations;