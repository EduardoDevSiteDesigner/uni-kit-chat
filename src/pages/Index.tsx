import HeroSection from "@/components/HeroSection";
import SocialProofSection from "@/components/SocialProofSection";
import MultiStepForm from "@/components/MultiStepForm";
import SimulatorBanner from "@/components/SimulatorBanner";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <SocialProofSection />
      <MultiStepForm />
      <SimulatorBanner />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
