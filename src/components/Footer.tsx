import { Mail, Phone, MapPin, Github, Twitter, Linkedin, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const footerSections = [
    {
      title: "Platform",
      links: ["How It Works", "AI Engine", "Supplier Network", "Pricing", "API Documentation"]
    },
    {
      title: "Solutions",
      links: ["For Vendors", "For Suppliers", "Enterprise", "Small Business", "Integrations"]
    },
    {
      title: "Resources",
      links: ["Documentation", "Help Center", "Blog", "Case Studies", "Webinars"]
    },
    {
      title: "Company",
      links: ["About Us", "Careers", "Press", "Contact", "Privacy Policy"]
    }
  ];

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Github, href: "#", label: "GitHub" }
  ];

  return (
    <footer className="bg-card/50 border-t border-border">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Left Section - Brand & Newsletter */}
          <div className="space-y-8">
            {/* Brand */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-gradient-primary rounded-xl p-2">
                  <div className="w-8 h-8 bg-primary-foreground rounded-lg flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">S</span>
                  </div>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-foreground">SupplyAI</h1>
                  <p className="text-xs text-muted-foreground">Smart Vendor Platform</p>
                </div>
              </div>
              <p className="text-muted-foreground max-w-md">
                Revolutionizing supplier discovery with AI-powered intelligence. 
                Connect with verified suppliers, compare prices, and make smarter procurement decisions.
              </p>
            </div>

            {/* Newsletter */}
            <div className="bg-gradient-card p-6 rounded-xl border border-border">
              <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
              <p className="text-muted-foreground mb-4 text-sm">
                Get weekly insights and AI-powered market trends delivered to your inbox
              </p>
              <div className="flex gap-2">
                <Input 
                  placeholder="Enter your email" 
                  className="bg-secondary/50 border-border"
                />
                <Button className="bg-gradient-primary whitespace-nowrap">
                  Subscribe
                </Button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Contact Information</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-3 text-primary" />
                  support@supplyai.com
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-3 text-primary" />
                  +1 (555) 123-4567
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-3 text-primary" />
                  San Francisco, CA 94105
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index}>
                <h4 className="font-semibold text-foreground mb-4">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a 
                        href="#" 
                        className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-muted-foreground">
              © 2024 SupplyAI. All rights reserved. | Built with AI-powered intelligence
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground">Follow us:</span>
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-8 flex justify-center">
            <div className="flex items-center space-x-8 text-xs text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success rounded-full" />
                <span>SOC 2 Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success rounded-full" />
                <span>GDPR Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success rounded-full" />
                <span>ISO 27001 Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span>AI-Powered</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;