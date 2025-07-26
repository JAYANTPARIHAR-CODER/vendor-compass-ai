import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Settings as SettingsIcon, 
  Bell, 
  Shield, 
  CreditCard, 
  Users, 
  Globe, 
  Smartphone,
  Mail,
  Lock,
  Trash2,
  Download,
  Upload
} from "lucide-react";

const Settings = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            <SettingsIcon className="w-8 h-8 inline mr-3" />
            Settings
          </h1>
          <p className="text-xl text-muted-foreground">
            Manage your account preferences and platform configuration
          </p>
        </div>

        {/* Settings Tabs */}
        <Tabs defaultValue="account" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="billing">Billing</TabsTrigger>
            <TabsTrigger value="preferences">Preferences</TabsTrigger>
          </TabsList>

          {/* Account Settings */}
          <TabsContent value="account">
            <div className="space-y-6">
              <Card className="bg-card/50 border-border">
                <CardHeader>
                  <CardTitle>Account Information</CardTitle>
                  <CardDescription>
                    Manage your personal information and account details
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Company Name</label>
                      <Input defaultValue="TechCorp Inc." />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Industry</label>
                      <Select defaultValue="technology">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="technology">Technology</SelectItem>
                          <SelectItem value="manufacturing">Manufacturing</SelectItem>
                          <SelectItem value="retail">Retail</SelectItem>
                          <SelectItem value="automotive">Automotive</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Company Size</label>
                      <Select defaultValue="medium">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="startup">1-10 employees</SelectItem>
                          <SelectItem value="small">11-50 employees</SelectItem>
                          <SelectItem value="medium">51-200 employees</SelectItem>
                          <SelectItem value="large">200+ employees</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Time Zone</label>
                      <Select defaultValue="est">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pst">Pacific Standard Time</SelectItem>
                          <SelectItem value="mst">Mountain Standard Time</SelectItem>
                          <SelectItem value="cst">Central Standard Time</SelectItem>
                          <SelectItem value="est">Eastern Standard Time</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Button className="bg-gradient-primary hover:opacity-90">
                    Save Changes
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border">
                <CardHeader>
                  <CardTitle className="text-destructive">Danger Zone</CardTitle>
                  <CardDescription>
                    Irreversible actions that will affect your account
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-4 border border-destructive/20 rounded-lg">
                    <div>
                      <h4 className="font-medium text-foreground">Export Data</h4>
                      <p className="text-sm text-muted-foreground">Download all your account data</p>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Export
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border border-destructive/20 rounded-lg">
                    <div>
                      <h4 className="font-medium text-foreground">Delete Account</h4>
                      <p className="text-sm text-muted-foreground">Permanently delete your account and data</p>
                    </div>
                    <Button variant="destructive" size="sm">
                      <Trash2 className="w-4 h-4 mr-2" />
                      Delete
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Notifications Settings */}
          <TabsContent value="notifications">
            <Card className="bg-card/50 border-border">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Bell className="w-5 h-5" />
                  <span>Notification Preferences</span>
                </CardTitle>
                <CardDescription>
                  Choose how you want to be notified about important events
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-medium text-foreground mb-4">Email Notifications</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-foreground">Order Updates</p>
                        <p className="text-sm text-muted-foreground">Get notified about order status changes</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-foreground">New Supplier Matches</p>
                        <p className="text-sm text-muted-foreground">AI-powered supplier recommendations</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-foreground">Price Alerts</p>
                        <p className="text-sm text-muted-foreground">Notifications when prices drop</p>
                      </div>
                      <Switch />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-foreground">Weekly Reports</p>
                        <p className="text-sm text-muted-foreground">Summary of your activity and insights</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="font-medium text-foreground mb-4">SMS Notifications</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-foreground">Urgent Updates</p>
                        <p className="text-sm text-muted-foreground">Critical order and delivery updates</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-foreground">Security Alerts</p>
                        <p className="text-sm text-muted-foreground">Account security notifications</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </div>

                <Button className="bg-gradient-primary hover:opacity-90">
                  Save Notification Settings
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Security Settings */}
          <TabsContent value="security">
            <div className="space-y-6">
              <Card className="bg-card/50 border-border">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="w-5 h-5" />
                    <span>Security Settings</span>
                  </CardTitle>
                  <CardDescription>
                    Manage your account security and privacy settings
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-medium text-foreground mb-4">Password & Authentication</h4>
                    <div className="space-y-4">
                      <Button variant="outline" className="w-full justify-start">
                        <Lock className="w-4 h-4 mr-2" />
                        Change Password
                      </Button>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-foreground">Two-Factor Authentication</p>
                          <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
                        </div>
                        <Badge variant="outline">Not Enabled</Badge>
                      </div>
                      
                      <Button variant="outline" className="w-full justify-start">
                        <Smartphone className="w-4 h-4 mr-2" />
                        Enable 2FA
                      </Button>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="font-medium text-foreground mb-4">Privacy Settings</h4>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-foreground">Profile Visibility</p>
                          <p className="text-sm text-muted-foreground">Make your profile visible to suppliers</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-foreground">Analytics Tracking</p>
                          <p className="text-sm text-muted-foreground">Help improve our services</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border">
                <CardHeader>
                  <CardTitle>Login Sessions</CardTitle>
                  <CardDescription>
                    Manage your active sessions across different devices
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-secondary/20 rounded-lg">
                      <div>
                        <p className="font-medium text-foreground">Current Session</p>
                        <p className="text-sm text-muted-foreground">Chrome on Windows • New York, US</p>
                      </div>
                      <Badge variant="default">Active</Badge>
                    </div>
                    
                    <Button variant="outline" className="w-full">
                      Sign Out All Other Sessions
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Billing Settings */}
          <TabsContent value="billing">
            <div className="space-y-6">
              <Card className="bg-card/50 border-border">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CreditCard className="w-5 h-5" />
                    <span>Billing & Subscription</span>
                  </CardTitle>
                  <CardDescription>
                    Manage your subscription and payment methods
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="p-4 bg-gradient-primary/10 border border-primary/20 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-foreground">Pro Plan</h4>
                      <Badge variant="default">Active</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      Unlimited supplier searches and AI recommendations
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-foreground">$99/month</span>
                      <Button variant="outline" size="sm">Change Plan</Button>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-foreground mb-4">Payment Method</h4>
                    <div className="p-4 bg-secondary/20 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <CreditCard className="w-8 h-8 text-muted-foreground" />
                          <div>
                            <p className="font-medium text-foreground">**** **** **** 4242</p>
                            <p className="text-sm text-muted-foreground">Expires 12/2025</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">Update</Button>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-foreground mb-4">Billing History</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-secondary/20 rounded-lg">
                        <div>
                          <p className="font-medium text-foreground">January 2024</p>
                          <p className="text-sm text-muted-foreground">Pro Plan - Monthly</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-foreground">$99.00</p>
                          <Button variant="ghost" size="sm">Download</Button>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-secondary/20 rounded-lg">
                        <div>
                          <p className="font-medium text-foreground">December 2023</p>
                          <p className="text-sm text-muted-foreground">Pro Plan - Monthly</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-foreground">$99.00</p>
                          <Button variant="ghost" size="sm">Download</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Preferences Settings */}
          <TabsContent value="preferences">
            <Card className="bg-card/50 border-border">
              <CardHeader>
                <CardTitle>Platform Preferences</CardTitle>
                <CardDescription>
                  Customize your SupplyAI experience
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-medium text-foreground mb-4">Regional Settings</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Language</label>
                      <Select defaultValue="en">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="en">English</SelectItem>
                          <SelectItem value="es">Español</SelectItem>
                          <SelectItem value="fr">Français</SelectItem>
                          <SelectItem value="hi">हिंदी</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Currency</label>
                      <Select defaultValue="usd">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="usd">USD ($)</SelectItem>
                          <SelectItem value="eur">EUR (€)</SelectItem>
                          <SelectItem value="gbp">GBP (£)</SelectItem>
                          <SelectItem value="inr">INR (₹)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="font-medium text-foreground mb-4">Search Preferences</h4>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Default Search Radius</label>
                      <Select defaultValue="50">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="10">10 miles</SelectItem>
                          <SelectItem value="25">25 miles</SelectItem>
                          <SelectItem value="50">50 miles</SelectItem>
                          <SelectItem value="100">100 miles</SelectItem>
                          <SelectItem value="global">Global</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-foreground">Auto-save Search Filters</p>
                        <p className="text-sm text-muted-foreground">Remember your search preferences</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-foreground">Show Verified Suppliers Only</p>
                        <p className="text-sm text-muted-foreground">Filter results to verified suppliers by default</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </div>

                <Button className="bg-gradient-primary hover:opacity-90">
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

export default Settings;