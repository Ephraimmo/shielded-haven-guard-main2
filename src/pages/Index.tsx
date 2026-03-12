import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import TrainingSection from "@/components/TrainingSection";
import EmergencySection from "@/components/EmergencySection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TrainingSection />
      <EmergencySection />
      <ContactSection />
    </div>
  );
};

export default Index;
