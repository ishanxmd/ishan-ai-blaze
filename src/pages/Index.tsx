import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import FeaturesSection from "@/components/FeaturesSection";
import CommandsSection from "@/components/CommandsSection";
import DownloadSection from "@/components/DownloadSection";
import CommunitySection from "@/components/CommunitySection";
import DeveloperSection from "@/components/DeveloperSection";
import ChatWidget from "@/components/ChatWidget";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden relative">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <CommandsSection />
      <DownloadSection />
      <CommunitySection />
      <DeveloperSection />
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Index;
