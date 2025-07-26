import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MapPin, Search, Filter, Star, Clock, Phone } from "lucide-react";

// Mock supplier data for demonstration
const mockSuppliers = [
  {
    id: 1,
    name: "Tech Components Ltd",
    rating: 4.8,
    distance: "2.3 km",
    category: "Electronics",
    phone: "+1-555-0123",
    location: { lat: 40.7128, lng: -74.0060 },
    responseTime: "< 2 hours",
    verified: true
  },
  {
    id: 2,
    name: "Global Materials Co",
    rating: 4.6,
    distance: "5.1 km",
    category: "Raw Materials",
    phone: "+1-555-0456",
    location: { lat: 40.7589, lng: -73.9851 },
    responseTime: "< 4 hours",
    verified: true
  },
  {
    id: 3,
    name: "Premium Packaging",
    rating: 4.9,
    distance: "3.8 km",
    category: "Packaging",
    phone: "+1-555-0789",
    location: { lat: 40.7614, lng: -73.9776 },
    responseTime: "< 1 hour",
    verified: true
  }
];

const SupplierMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const [selectedSupplier, setSelectedSupplier] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [mapboxToken, setMapboxToken] = useState("");
  const [showTokenInput, setShowTokenInput] = useState(true);

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    // Initialize map with Mapbox
    const initMap = async () => {
      try {
        const mapboxgl = (await import('mapbox-gl')).default;
        await import('mapbox-gl/dist/mapbox-gl.css');

        mapboxgl.accessToken = mapboxToken;
        
        const map = new mapboxgl.Map({
          container: mapContainer.current!,
          style: 'mapbox://styles/mapbox/dark-v11',
          center: [-74.006, 40.7128], // NYC coordinates
          zoom: 12,
          pitch: 45,
        });

        // Add navigation controls
        map.addControl(
          new mapboxgl.NavigationControl({
            visualizePitch: true,
          }),
          'top-right'
        );

        // Add markers for suppliers
        mockSuppliers.forEach((supplier) => {
          const markerDiv = document.createElement('div');
          markerDiv.className = 'w-8 h-8 bg-primary rounded-full border-2 border-white shadow-lg cursor-pointer flex items-center justify-center text-white text-sm font-bold';
          markerDiv.textContent = supplier.id.toString();
          
          markerDiv.addEventListener('click', () => {
            setSelectedSupplier(supplier);
          });

          new mapboxgl.Marker(markerDiv)
            .setLngLat([supplier.location.lng, supplier.location.lat])
            .addTo(map);
        });

        return () => map.remove();
      } catch (error) {
        console.error('Error initializing map:', error);
      }
    };

    initMap();
  }, [mapboxToken]);

  if (showTokenInput) {
    return (
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <Card className="bg-gradient-card border-border">
              <CardHeader>
                <CardTitle className="text-center">Setup Map Integration</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm text-center">
                  Enter your Mapbox public token to enable the supplier map feature.
                  Get your token from{" "}
                  <a 
                    href="https://mapbox.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    mapbox.com
                  </a>
                </p>
                <Input
                  type="password"
                  placeholder="pk.eyJ1Ijoi..."
                  value={mapboxToken}
                  onChange={(e) => setMapboxToken(e.target.value)}
                />
                <Button
                  onClick={() => {
                    if (mapboxToken.trim()) {
                      setShowTokenInput(false);
                    }
                  }}
                  className="w-full bg-gradient-primary"
                  disabled={!mapboxToken.trim()}
                >
                  Initialize Map
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
            Location Intelligence
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Find Nearby Suppliers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover verified suppliers in your area with our interactive map
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Supplier List */}
          <div className="lg:col-span-1 space-y-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input 
                placeholder="Search suppliers..." 
                className="pl-10 bg-secondary/50"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Filter */}
            <Button variant="outline" className="w-full justify-start">
              <Filter className="w-4 h-4 mr-2" />
              Filter by Category
            </Button>

            {/* Supplier Cards */}
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {mockSuppliers.map((supplier) => (
                <Card 
                  key={supplier.id}
                  className={`cursor-pointer transition-all duration-200 hover:shadow-glow ${
                    selectedSupplier?.id === supplier.id ? 'ring-2 ring-primary' : ''
                  }`}
                  onClick={() => setSelectedSupplier(supplier)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-sm">{supplier.name}</h3>
                      {supplier.verified && (
                        <Badge variant="secondary" className="text-xs bg-success/10 text-success">
                          Verified
                        </Badge>
                      )}
                    </div>
                    
                    <div className="space-y-2 text-xs text-muted-foreground">
                      <div className="flex items-center">
                        <Star className="w-3 h-3 mr-1 text-warning fill-current" />
                        {supplier.rating} • {supplier.category}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        {supplier.distance}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        Response: {supplier.responseTime}
                      </div>
                    </div>

                    <Button size="sm" className="w-full mt-3 bg-gradient-primary text-xs">
                      <Phone className="w-3 h-3 mr-1" />
                      Contact Supplier
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Map */}
          <div className="lg:col-span-2">
            <Card className="h-96 lg:h-[500px] bg-gradient-card border-border overflow-hidden">
              <div ref={mapContainer} className="w-full h-full rounded-lg" />
            </Card>

            {/* Selected Supplier Details */}
            {selectedSupplier && (
              <Card className="mt-4 bg-gradient-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{selectedSupplier.name}</h3>
                      <p className="text-muted-foreground">{selectedSupplier.category}</p>
                    </div>
                    <Badge variant="secondary" className="bg-success/10 text-success">
                      {selectedSupplier.verified ? 'Verified' : 'Unverified'}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-warning">{selectedSupplier.rating}</div>
                      <div className="text-sm text-muted-foreground">Rating</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">{selectedSupplier.distance}</div>
                      <div className="text-sm text-muted-foreground">Distance</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-success">{selectedSupplier.responseTime}</div>
                      <div className="text-sm text-muted-foreground">Response</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-info">24/7</div>
                      <div className="text-sm text-muted-foreground">Support</div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button className="flex-1 bg-gradient-primary">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </Button>
                    <Button variant="outline" className="flex-1">
                      View Profile
                    </Button>
                    <Button variant="outline" className="flex-1">
                      Get Quote
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupplierMap;