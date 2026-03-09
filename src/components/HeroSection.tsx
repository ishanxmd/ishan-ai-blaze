import { motion } from "framer-motion";
import botLogo from "@/assets/bot-logo.png";
import { ExternalLink, Github } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden cyber-grid">
      {/* Background glow */}
      <div className="absolute inset-0 gradient-hero-bg" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="container relative z-10 flex flex-col items-center text-center px-4 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 relative"
        >
          {/* Outer rotating ring */}
          <div className="absolute inset-[-20px] md:inset-[-24px] rounded-full border border-primary/20 animate-spin-slow" />
          {/* Middle counter-rotating dashed ring */}
          <div className="absolute inset-[-12px] md:inset-[-14px] rounded-full border border-dashed border-primary/30 animate-spin-reverse" />
          {/* Pulsing glow ring */}
          <div className="absolute inset-[-4px] md:inset-[-5px] rounded-full border-2 border-primary/40 animate-pulse-glow" />
          {/* Corner orbiters */}
          <div className="absolute inset-[-20px] md:inset-[-24px] animate-spin-slow">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_hsl(212_100%_50%/0.8)]" />
          </div>
          <div className="absolute inset-[-20px] md:inset-[-24px] animate-spin-reverse">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_6px_hsl(212_100%_50%/0.6)]" />
          </div>
          {/* Scan line */}
          <div className="absolute inset-0 rounded-full overflow-hidden">
            <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-primary/60 to-transparent animate-scan-line" />
          </div>
          <img
            src={botLogo}
            alt="ISHAN BETA MD Bot Logo"
            className="relative z-10 w-40 h-40 md:w-48 md:h-48 rounded-full border-2 border-primary/50 animate-float object-cover"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold font-display tracking-wider mb-4"
        >
          <span className="bg-[linear-gradient(270deg,hsl(212,100%,50%),hsl(280,100%,60%),hsl(340,100%,55%),hsl(212,100%,50%))] bg-[length:300%_300%] bg-clip-text text-transparent animate-[color-shift_4s_ease-in-out_infinite]">ISHAN BETA MD</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 font-body"
        >
          Advanced WhatsApp Automation Bot
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="https://ishan-x-md-beta-pair-web-main.onrender.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-color-shift px-8 py-3.5 rounded-lg font-display text-sm tracking-widest text-primary-foreground flex items-center gap-2 hover:opacity-90 transition-opacity glow-box"
          >
            <ExternalLink className="w-4 h-4" />
            GET PAIR CODE
          </a>
          <a
            href="https://github.com/ishanxmd/ISHAN-X-BETA-MD"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-color-shift px-8 py-3.5 rounded-lg font-display text-sm tracking-widest text-primary-foreground flex items-center gap-2 hover:opacity-90 transition-opacity glow-box"
          >
            <Github className="w-4 h-4" />
            GET REPO
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
