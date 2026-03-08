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
          className="mb-8"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full animate-pulse-glow" />
            <img
              src={botLogo}
              alt="ISHAN BETA MD Bot Logo"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-primary/50 animate-float object-cover"
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold font-display tracking-wider mb-4"
        >
          <span className="text-gradient">ISHAN BETA MD</span>
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
            className="gradient-primary px-8 py-3.5 rounded-lg font-display text-sm tracking-widest text-primary-foreground flex items-center gap-2 hover:opacity-90 transition-opacity glow-box"
          >
            <ExternalLink className="w-4 h-4" />
            GET PAIR CODE
          </a>
          <a
            href="https://github.com/ishanxmd/ISHAN-X-BETA-MD"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-lg font-display text-sm tracking-widest border border-primary/50 text-foreground flex items-center gap-2 hover:bg-primary/10 transition-colors"
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
