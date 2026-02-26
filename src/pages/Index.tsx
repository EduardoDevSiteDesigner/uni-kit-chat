import HeroSection from "@/components/HeroSection";
import SocialProofSection from "@/components/SocialProofSection";
import MultiStepForm from "@/components/MultiStepForm";
import SimulatorBanner from "@/components/SimulatorBanner";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <SocialProofSection />
      <MultiStepForm />
      <SimulatorBanner />
      <Footer />
    </div>
  );
};

export default Index;
