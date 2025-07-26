import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";
import { 
  ShoppingCart, 
  DollarSign, 
  TrendingUp, 
  Users, 
  Package, 
  Clock, 
  Star, 
  MapPin,
  Bell,
  Search,
  Filter
} from "lucide-react";

const Dashboard = () => {
  const dashboardStats = [
    { title: "Active Orders", value: "12", change: "+3", icon: ShoppingCart, color: "text-primary" },
    { title: "Total Spent", value: "$28,450", change: "+12%", icon: DollarSign, color: "text-success" },
    { title: "Suppliers", value: "24", change: "+2", icon: Users, color: "text-info" },
    { title: "Avg. Savings", value: "35%", change: "+5%", icon: TrendingUp, color: "text-warning" }
  ];

  const monthlySpending = [
    { month: 'Oct', amount: 18500 },
    { month: 'Nov', amount: 22100 },
    { month: 'Dec', amount: 19800 },
    { month: 'Jan', amount: 28450 },
    { month: 'Feb', amount: 24300 },
    { month: 'Mar', amount: 31200 }
  ];

  const ordersByCategory = [
    { name: 'Electronics', value: 45, color: 'hsl(var(--primary))' },
    { name: 'Manufacturing', value: 30, color: 'hsl(var(--info))' },
    { name: 'Raw Materials', value: 15, color: 'hsl(var(--success))' },
    { name: 'Others', value: 10, color: 'hsl(var(--warning))' }
  ];

  const recentActivity = [
    { type: "order", message: "New order placed with TechParts Co.", time: "2 hours ago", status: "success" },
    { type: "supplier", message: "Quality Components updated pricing", time: "4 hours ago", status: "info" },
    { type: "delivery", message: "Order #ORD-2024-001 delivered", time: "6 hours ago", status: "success" },
    { type: "alert", message: "Price alert: Electronics components down 8%", time: "1 day ago", status: "warning" },
    { type: "recommendation", message: "3 new supplier recommendations available", time: "2 days ago", status: "info" }
  ];

  const topSuppliers = [
    { name: "TechParts Co.", orders: 12, rating: 4.9, savings: "$2,450" },
    { name: "Global Electronics", orders: 8, rating: 4.7, savings: "$1,850" },
    { name: "Quality Components", orders: 6, rating: 4.8, savings: "$1,200" },
    { name: "FastSupply Inc.", orders: 4, rating: 4.6, savings: "$890" }
  ];

  const pendingOrders = [
    { id: "ORD-2024-045", supplier: "TechParts Co.", amount: "$2,450", status: "Processing", eta: "2 days" },
    { id: "ORD-2024-046", supplier: "Global Electronics", amount: "$1,850", status: "In Transit", eta: "1 day" },
    { id: "ORD-2024-047", supplier: "Quality Components", amount: "$890", status: "Confirmed", eta: "3 days" }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Welcome back, John!</h1>
            <p className="text-muted-foreground">Here's what's happening with your supply chain today.</p>
          </div>
          <div className="flex items-center space-x-3 mt-4 md:mt-0">
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <Button size="sm" className="bg-gradient-primary hover:opacity-90">
              <Search className="w-4 h-4 mr-2" />
              Find Suppliers
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {dashboardStats.map((stat, index) => (
            <Card key={index} className="bg-card/50 border-border hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                    <div className="flex items-center space-x-2">
                      <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                      <Badge variant="secondary" className="text-xs">
                        {stat.change}
                      </Badge>
                    </div>
                  </div>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {/* Charts Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Monthly Spending Chart */}
            <Card className="bg-card/50 border-border">
              <CardHeader>
                <CardTitle>Monthly Spending</CardTitle>
                <CardDescription>Your procurement spending over the last 6 months</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={monthlySpending}>
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
                    <Line 
                      type="monotone" 
                      dataKey="amount" 
                      stroke="hsl(var(--primary))" 
                      strokeWidth={3}
                      dot={{ fill: 'hsl(var(--primary))' }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Orders by Category */}
            <Card className="bg-card/50 border-border">
              <CardHeader>
                <CardTitle>Orders by Category</CardTitle>
                <CardDescription>Distribution of your orders across different categories</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col lg:flex-row items-center gap-6">
                  <div className="w-full lg:w-1/2">
                    <ResponsiveContainer width="100%" height={250}>
                      <PieChart>
                        <Pie
                          data={ordersByCategory}
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, value }) => `${value}%`}
                        >
                          {ordersByCategory.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="w-full lg:w-1/2 space-y-3">
                    {ordersByCategory.map((category, index) => (
                      <div key={index} className="flex items-center justify-between p-2 bg-secondary/20 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div 
                            className="w-3 h-3 rounded-full" 
                            style={{ backgroundColor: category.color }}
                          />
                          <span className="text-sm font-medium text-foreground">{category.name}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{category.value}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Recent Activity */}
            <Card className="bg-card/50 border-border">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Bell className="w-5 h-5" />
                  <span>Recent Activity</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-secondary/20 rounded-lg">
                      <div className={`w-2 h-2 rounded-full mt-2 ${
                        activity.status === 'success' ? 'bg-success' :
                        activity.status === 'warning' ? 'bg-warning' : 'bg-info'
                      }`} />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-foreground">{activity.message}</p>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Top Suppliers */}
            <Card className="bg-card/50 border-border">
              <CardHeader>
                <CardTitle>Top Suppliers</CardTitle>
                <CardDescription>Your most frequently used suppliers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topSuppliers.map((supplier, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-secondary/20 rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground">{supplier.name}</h4>
                        <div className="flex items-center space-x-3 mt-1">
                          <span className="text-xs text-muted-foreground">{supplier.orders} orders</span>
                          <div className="flex items-center space-x-1">
                            <Star className="w-3 h-3 text-warning fill-current" />
                            <span className="text-xs">{supplier.rating}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-success">{supplier.savings}</div>
                        <div className="text-xs text-muted-foreground">saved</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Pending Orders */}
        <Card className="bg-card/50 border-border">
          <CardHeader>
            <CardTitle>Pending Orders</CardTitle>
            <CardDescription>Orders currently being processed or in transit</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              {pendingOrders.map((order, index) => (
                <div key={index} className="p-4 bg-secondary/20 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-medium text-foreground">{order.id}</span>
                    <Badge variant={
                      order.status === 'In Transit' ? 'default' :
                      order.status === 'Processing' ? 'secondary' : 'outline'
                    }>
                      {order.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{order.supplier}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-foreground">{order.amount}</span>
                    <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      <span>ETA: {order.eta}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;