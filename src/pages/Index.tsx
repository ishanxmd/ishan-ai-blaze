import { useState, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
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
import SplashScreen from "@/components/SplashScreen";

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = useCallback(() => {
    setShowSplash(false);
  }, []);

  return (
    <>
      <AnimatePresence>
        {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      </AnimatePresence>
      <div className={`min-h-screen bg-background overflow-x-hidden relative ${showSplash ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}`}>
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
    </>
  );
};

export default Index;
