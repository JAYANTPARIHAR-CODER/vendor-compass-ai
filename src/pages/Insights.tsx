import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, DollarSign, Users, Globe, Clock } from "lucide-react";

const Insights = () => {
  const marketTrends = [
    { month: 'Jan', electronics: 120, textiles: 80, automotive: 95 },
    { month: 'Feb', electronics: 135, textiles: 85, automotive: 110 },
    { month: 'Mar', electronics: 148, textiles: 92, automotive: 125 },
    { month: 'Apr', electronics: 162, textiles: 88, automotive: 140 },
    { month: 'May', electronics: 155, textiles: 95, automotive: 135 },
    { month: 'Jun', electronics: 178, textiles: 102, automotive: 150 }
  ];

  const regionData = [
    { name: 'Asia', value: 45, color: 'hsl(var(--primary))' },
    { name: 'Europe', value: 25, color: 'hsl(var(--info))' },
    { name: 'North America', value: 20, color: 'hsl(var(--success))' },
    { name: 'Others', value: 10, color: 'hsl(var(--warning))' }
  ];

  const priceIndex = [
    { week: 'W1', index: 100 },
    { week: 'W2', index: 98 },
    { week: 'W3', index: 102 },
    { week: 'W4', index: 105 },
    { week: 'W5', index: 103 },
    { week: 'W6', index: 108 }
  ];

  const insights = [
    {
      title: "Electronics Demand Surge",
      description: "Electronics demand increased by 18% this quarter, driven by tech adoption.",
      trend: "up",
      percentage: "+18%",
      icon: TrendingUp
    },
    {
      title: "Textile Price Stability",
      description: "Textile prices remained stable with only 2% variation across regions.",
      trend: "stable",
      percentage: "±2%",
      icon: DollarSign
    },
    {
      title: "New Supplier Growth",
      description: "450+ new verified suppliers joined the platform this month.",
      trend: "up",
      percentage: "+450",
      icon: Users
    },
    {
      title: "Delivery Time Improvement",
      description: "Average delivery times reduced by 12% due to better logistics.",
      trend: "down",
      percentage: "-12%",
      icon: Clock
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            📊 Real-time Analytics
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Market <span className="text-transparent bg-gradient-primary bg-clip-text">Insights</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay ahead of market trends with our AI-powered analytics and insights. 
            Make data-driven decisions for your sourcing strategy.
          </p>
        </div>

        {/* Key Insights Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {insights.map((insight, index) => (
            <Card key={index} className="bg-card/50 border-border hover:shadow-glow transition-all duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <insight.icon className={`w-5 h-5 ${
                    insight.trend === 'up' ? 'text-success' : 
                    insight.trend === 'down' ? 'text-destructive' : 'text-warning'
                  }`} />
                  <Badge variant={
                    insight.trend === 'up' ? 'default' : 
                    insight.trend === 'down' ? 'destructive' : 'secondary'
                  }>
                    {insight.percentage}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{insight.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{insight.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Market Trends Chart */}
          <Card className="bg-card/50 border-border">
            <CardHeader>
              <CardTitle>Industry Growth Trends</CardTitle>
              <CardDescription>6-month growth comparison by industry</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={marketTrends}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }} 
                  />
                  <Bar dataKey="electronics" fill="hsl(var(--primary))" />
                  <Bar dataKey="textiles" fill="hsl(var(--info))" />
                  <Bar dataKey="automotive" fill="hsl(var(--success))" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Price Index Chart */}
          <Card className="bg-card/50 border-border">
            <CardHeader>
              <CardTitle>Global Price Index</CardTitle>
              <CardDescription>Weekly price fluctuations across all categories</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={priceIndex}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="week" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }} 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="index" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={3}
                    dot={{ fill: 'hsl(var(--primary))' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Regional Distribution */}
        <Card className="bg-card/50 border-border mb-16">
          <CardHeader>
            <CardTitle>Supplier Distribution by Region</CardTitle>
            <CardDescription>Global supplier network overview</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="w-full lg:w-1/2">
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={regionData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, value }) => `${name}: ${value}%`}
                    >
                      {regionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="w-full lg:w-1/2 space-y-4">
                {regionData.map((region, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-secondary/20 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div 
                        className="w-4 h-4 rounded-full" 
                        style={{ backgroundColor: region.color }}
                      />
                      <span className="font-medium text-foreground">{region.name}</span>
                    </div>
                    <span className="text-muted-foreground">{region.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Market Predictions */}
        <div className="bg-card/30 rounded-2xl p-8 border border-border">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            AI Market Predictions
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-foreground mb-2">Global Expansion</h4>
              <p className="text-muted-foreground mb-2">
                Emerging markets will drive 35% growth in Q3
              </p>
              <Badge variant="default">High Confidence</Badge>
            </div>
            
            <div className="text-center">
              <TrendingDown className="w-12 h-12 text-success mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-foreground mb-2">Cost Reduction</h4>
              <p className="text-muted-foreground mb-2">
                Technology adoption will reduce costs by 15%
              </p>
              <Badge variant="default">Medium Confidence</Badge>
            </div>
            
            <div className="text-center">
              <TrendingUp className="w-12 h-12 text-info mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-foreground mb-2">Demand Surge</h4>
              <p className="text-muted-foreground mb-2">
                Sustainable products demand up 50% by year-end
              </p>
              <Badge variant="default">High Confidence</Badge>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Insights;