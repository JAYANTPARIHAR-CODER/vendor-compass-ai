import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Building, Mail, Phone, MapPin, Edit, Save, Star, ShoppingCart, TrendingUp } from "lucide-react";

const Profile = () => {
  const userStats = [
    { label: "Total Orders", value: "24", icon: ShoppingCart },
    { label: "Saved Amount", value: "$12,450", icon: TrendingUp },
    { label: "Avg Rating Given", value: "4.8", icon: Star },
    { label: "Active Suppliers", value: "8", icon: Building }
  ];

  const recentOrders = [
    { id: "ORD-2024-001", supplier: "TechParts Co.", amount: "$2,450", status: "Delivered", date: "2024-01-15" },
    { id: "ORD-2024-002", supplier: "Global Electronics", amount: "$1,850", status: "In Transit", date: "2024-01-12" },
    { id: "ORD-2024-003", supplier: "Quality Components", amount: "$890", status: "Processing", date: "2024-01-10" },
    { id: "ORD-2024-004", supplier: "FastSupply Inc.", amount: "$3,200", status: "Delivered", date: "2024-01-08" }
  ];

  const favoriteSuppliers = [
    { name: "TechParts Co.", category: "Electronics", rating: 4.9, orders: 8 },
    { name: "Global Electronics", category: "Components", rating: 4.7, orders: 5 },
    { name: "Quality Components", category: "Manufacturing", rating: 4.8, orders: 6 },
    { name: "FastSupply Inc.", category: "Industrial", rating: 4.6, orders: 4 }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Profile Header */}
        <div className="mb-8">
          <Card className="bg-card/50 border-border">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
                <Avatar className="w-24 h-24">
                  <AvatarImage src="/placeholder.svg" alt="Profile" />
                  <AvatarFallback className="text-2xl">JD</AvatarFallback>
                </Avatar>
                
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h1 className="text-3xl font-bold text-foreground">John Doe</h1>
                    <Badge variant="default">Pro Member</Badge>
                  </div>
                  <p className="text-muted-foreground mb-1">Procurement Manager at TechCorp Inc.</p>
                  <p className="text-sm text-muted-foreground">Member since January 2023</p>
                </div>
                
                <Button variant="outline">
                  <Edit className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {userStats.map((stat, index) => (
            <Card key={index} className="bg-card/50 border-border">
              <CardContent className="p-6 text-center">
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Profile Tabs */}
        <Tabs defaultValue="details" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="details">Personal Details</TabsTrigger>
            <TabsTrigger value="orders">Order History</TabsTrigger>
            <TabsTrigger value="suppliers">Favorite Suppliers</TabsTrigger>
            <TabsTrigger value="preferences">Preferences</TabsTrigger>
          </TabsList>

          {/* Personal Details Tab */}
          <TabsContent value="details">
            <Card className="bg-card/50 border-border">
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>
                  Update your account details and contact information
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">First Name</label>
                    <Input defaultValue="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Last Name</label>
                    <Input defaultValue="Doe" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email</label>
                  <Input type="email" defaultValue="john.doe@techcorp.com" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Phone</label>
                  <Input defaultValue="+1 (555) 123-4567" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Company</label>
                  <Input defaultValue="TechCorp Inc." />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Job Title</label>
                  <Input defaultValue="Procurement Manager" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Address</label>
                  <Textarea 
                    defaultValue="123 Business Ave, Tech City, TC 12345"
                    className="min-h-[80px] resize-none"
                  />
                </div>
                
                <Button className="bg-gradient-primary hover:opacity-90 transition-smooth">
                  <Save className="w-4 h-4 mr-2" />
                  Save Changes
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Order History Tab */}
          <TabsContent value="orders">
            <Card className="bg-card/50 border-border">
              <CardHeader>
                <CardTitle>Order History</CardTitle>
                <CardDescription>
                  View your past orders and their current status
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentOrders.map((order, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-secondary/20 rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-1">
                          <span className="font-medium text-foreground">{order.id}</span>
                          <Badge variant={
                            order.status === 'Delivered' ? 'default' :
                            order.status === 'In Transit' ? 'secondary' : 'outline'
                          }>
                            {order.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{order.supplier}</p>
                        <p className="text-xs text-muted-foreground">Order Date: {order.date}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-semibold text-foreground">{order.amount}</div>
                        <Button variant="ghost" size="sm">View Details</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Favorite Suppliers Tab */}
          <TabsContent value="suppliers">
            <Card className="bg-card/50 border-border">
              <CardHeader>
                <CardTitle>Favorite Suppliers</CardTitle>
                <CardDescription>
                  Suppliers you frequently work with and trust
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {favoriteSuppliers.map((supplier, index) => (
                    <div key={index} className="p-4 bg-secondary/20 rounded-lg">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="font-medium text-foreground">{supplier.name}</h4>
                          <p className="text-sm text-muted-foreground">{supplier.category}</p>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-warning fill-current" />
                          <span className="text-sm font-medium">{supplier.rating}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">{supplier.orders} orders</span>
                        <Button variant="ghost" size="sm">Contact</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Preferences Tab */}
          <TabsContent value="preferences">
            <Card className="bg-card/50 border-border">
              <CardHeader>
                <CardTitle>Account Preferences</CardTitle>
                <CardDescription>
                  Customize your SupplyAI experience
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h4 className="font-medium text-foreground">Notification Preferences</h4>
                  <div className="space-y-3">
                    <label className="flex items-center space-x-3">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span className="text-sm text-foreground">Email notifications for new supplier matches</span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span className="text-sm text-foreground">SMS alerts for order updates</span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm text-foreground">Weekly market insights newsletter</span>
                    </label>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-medium text-foreground">Search Preferences</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Preferred Currency</label>
                      <Input defaultValue="USD" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Default Search Radius</label>
                      <Input defaultValue="50 miles" />
                    </div>
                  </div>
                </div>
                
                <Button className="bg-gradient-primary hover:opacity-90 transition-smooth">
                  <Save className="w-4 h-4 mr-2" />
                  Save Preferences
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default Profile;