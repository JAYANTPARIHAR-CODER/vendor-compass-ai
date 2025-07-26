import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeatureCards from "@/components/FeatureCards";
import AIRecommendations from "@/components/AIRecommendations";
import SupplierMap from "@/components/SupplierMap";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      <HeroSection />
      <FeatureCards />
      <AIRecommendations />
      <SupplierMap />
      <Footer />
    </div>
  );
};

export default Index;
