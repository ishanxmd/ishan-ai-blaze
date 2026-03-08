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
          <div className="relative w-48 h-48 md:w-56 md:h-56 flex items-center justify-center">
            {/* Outermost rotating dashed ring */}
            <div className="absolute inset-0 rounded-full border border-dashed border-primary/20 animate-[spin_25s_linear_infinite]" />
            
            {/* Second ring - reverse spin */}
            <div className="absolute inset-3 rounded-full border border-primary/15 animate-[spin_18s_linear_infinite_reverse]" />
            
            {/* Pulsing glow ring */}
            <div className="absolute inset-5 rounded-full border-2 border-primary/30 animate-[ring-pulse_3s_ease-in-out_infinite]" />
            
            {/* Orbiting dots */}
            <div className="absolute inset-0 animate-[spin_8s_linear_infinite]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_10px_hsl(212_100%_50%/0.8)]" />
            </div>
            <div className="absolute inset-0 animate-[spin_12s_linear_infinite_reverse]">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-primary/70 shadow-[0_0_8px_hsl(212_100%_50%/0.6)]" />
            </div>
            <div className="absolute inset-0 animate-[spin_6s_linear_infinite]">
              <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-primary/50 shadow-[0_0_6px_hsl(212_100%_50%/0.5)]" />
            </div>

            {/* Corner tech brackets */}
            <div className="absolute -inset-1 pointer-events-none">
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary/40 rounded-tl-sm" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary/40 rounded-tr-sm" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary/40 rounded-bl-sm" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary/40 rounded-br-sm" />
            </div>

            {/* Data stream particles */}
            <div className="absolute inset-6 rounded-full overflow-hidden pointer-events-none">
              <div className="absolute left-1/4 inset-y-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent animate-[data-stream_2.5s_ease-in-out_infinite]" />
              <div className="absolute left-1/2 inset-y-0 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent animate-[data-stream_3s_ease-in-out_infinite_0.5s]" />
              <div className="absolute left-3/4 inset-y-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent animate-[data-stream_2s_ease-in-out_infinite_1s]" />
            </div>

            {/* Scan line */}
            <div className="absolute inset-6 rounded-full overflow-hidden pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent animate-scan-line" />
            </div>

            {/* Logo */}
            <img
              src={botLogo}
              alt="ISHAN BETA MD Bot Logo"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-primary/50 animate-float object-cover relative z-10"
            />
          </div>
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
