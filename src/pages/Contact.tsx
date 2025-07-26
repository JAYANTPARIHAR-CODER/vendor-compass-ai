import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Clock, MessageSquare, Users, Zap, Shield } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get help via email",
      contact: "support@supplyai.com",
      availability: "24/7 response"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak with our team",
      contact: "+1 (555) 123-4567",
      availability: "Mon-Fri 9AM-6PM EST"
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Instant messaging support",
      contact: "Available in app",
      availability: "24/7 available"
    },
    {
      icon: MapPin,
      title: "Office Location",
      description: "Visit our headquarters",
      contact: "123 Business Ave, Tech City",
      availability: "Mon-Fri 9AM-5PM"
    }
  ];

  const features = [
    {
      icon: Zap,
      title: "Quick Response",
      description: "Average response time under 2 hours"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Dedicated specialists for your industry"
    },
    {
      icon: Shield,
      title: "Secure Support",
      description: "Enterprise-grade security for all communications"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            💬 We're Here to Help
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Contact <span className="text-transparent bg-gradient-primary bg-clip-text">Us</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions about SupplyAI? Need technical support? Want to discuss enterprise solutions? 
            Our team is ready to help you succeed.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-card/50 border-border">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">First Name</label>
                    <Input placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Last Name</label>
                    <Input placeholder="Doe" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email</label>
                  <Input type="email" placeholder="john@company.com" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Company</label>
                  <Input placeholder="Your Company Name" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Subject</label>
                  <Input placeholder="How can we help you?" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Message</label>
                  <Textarea 
                    placeholder="Tell us more about your inquiry..." 
                    className="min-h-[120px] resize-none"
                  />
                </div>
                
                <Button className="w-full bg-gradient-primary hover:opacity-90 transition-smooth shadow-glow">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Methods */}
          <div className="space-y-6">
            <Card className="bg-card/50 border-border">
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
                <CardDescription>
                  Choose your preferred way to reach us
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactMethods.map((method, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-secondary/20 rounded-lg">
                    <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <method.icon className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-foreground">{method.title}</h4>
                      <p className="text-sm text-muted-foreground">{method.description}</p>
                      <p className="text-sm font-medium text-primary">{method.contact}</p>
                      <div className="flex items-center mt-1">
                        <Clock className="w-3 h-3 text-muted-foreground mr-1" />
                        <span className="text-xs text-muted-foreground">{method.availability}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Support Features */}
            <Card className="bg-card/50 border-border">
              <CardHeader>
                <CardTitle>Why Contact Us?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <Card className="bg-card/50 border-border">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Frequently Asked Questions</CardTitle>
            <CardDescription className="text-center">
              Quick answers to common questions about SupplyAI
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-foreground mb-2">How does the AI recommendation work?</h4>
                  <p className="text-sm text-muted-foreground">
                    Our AI analyzes your requirements, budget, location, and preferences to match you with the best suppliers from our verified network.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-2">Is there a free trial?</h4>
                  <p className="text-sm text-muted-foreground">
                    Yes, we offer a 14-day free trial with access to basic features and up to 10 supplier recommendations.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-2">How are suppliers verified?</h4>
                  <p className="text-sm text-muted-foreground">
                    We use a comprehensive verification process including business registration, quality certifications, and customer reviews.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-foreground mb-2">What industries do you support?</h4>
                  <p className="text-sm text-muted-foreground">
                    We support manufacturing, retail, electronics, textiles, automotive, and many other industries worldwide.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-2">Can I integrate with my existing systems?</h4>
                  <p className="text-sm text-muted-foreground">
                    Yes, we offer APIs and integrations with popular ERP, procurement, and inventory management systems.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-2">What support is available?</h4>
                  <p className="text-sm text-muted-foreground">
                    We provide 24/7 email support, live chat, phone support during business hours, and dedicated account managers for enterprise clients.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;