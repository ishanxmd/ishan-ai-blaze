import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import botLogo from "@/assets/bot-logo.png";

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 2500;
    const interval = 30;
    const step = 100 / (duration / interval);
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 400);
          return 100;
        }
        return Math.min(prev + step + Math.random() * 0.5, 100);
      });
    }, interval);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Logo */}
      <motion.div
        className="relative w-20 h-20 mb-6"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="absolute inset-0 rounded-full border-2 border-primary/40 animate-pulse-glow" />
        <div className="absolute inset-1 rounded-full border border-primary/20" />
        <img
          src={botLogo}
          alt="ISHAN BETA MD"
          className="w-full h-full rounded-full object-cover relative z-10"
        />
      </motion.div>

      {/* Title */}
      <motion.h1
        className="text-xl md:text-2xl tracking-[0.3em] text-foreground mb-2"
        style={{ fontFamily: "var(--font-display)" }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        ISHAN-X BETA
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="text-xs tracking-[0.2em] text-muted-foreground mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        INITIALIZING SYSTEM...
      </motion.p>

      {/* Progress bar */}
      <motion.div
        className="w-48 h-1 rounded-full bg-secondary overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.3 }}
      >
        <motion.div
          className="h-full rounded-full"
          style={{
            width: `${progress}%`,
            background: "linear-gradient(90deg, hsl(var(--primary)), hsl(270 100% 60%))",
          }}
          transition={{ ease: "linear" }}
        />
      </motion.div>
    </motion.div>
  );
};

export default SplashScreen;
