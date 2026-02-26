import HeroSection from "@/components/HeroSection";
import SocialProofSection from "@/components/SocialProofSection";
import MultiStepForm from "@/components/MultiStepForm";
import SimulatorBanner from "@/components/SimulatorBanner";
import GroupSection from "@/components/GroupSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { useScrollFadeIn } from "@/hooks/use-scroll-fade-in";
const FadeSection = ({ children }: { children: React.ReactNode }) => {
  const { ref, className } = useScrollFadeIn();
  return <div ref={ref} className={`transition-all duration-700 ${className}`}>{children}</div>;
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <FadeSection><SocialProofSection /></FadeSection>
      <FadeSection><MultiStepForm /></FadeSection>
      <FadeSection><SimulatorBanner /></FadeSection>
      <FadeSection><GroupSection /></FadeSection>
      <FadeSection><ContactSection /></FadeSection>
      <Footer />
    </div>
  );
};

export default Index;
