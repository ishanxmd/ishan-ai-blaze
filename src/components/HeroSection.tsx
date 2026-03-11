import { motion } from "framer-motion";
import botLogo from "@/assets/bot-logo.png";
import msXMd from "@/assets/ms-x-md.png";
import { ExternalLink, Github } from "lucide-react";

const CircularHUD = () => {
  const size = 300;
  const cx = size / 2;
  const cy = size / 2;

  // Generate tick marks around the circle
  const ticks = Array.from({ length: 60 }, (_, i) => {
    const angle = (Math.PI * 2 * i) / 60 - Math.PI / 2;
    const isMajor = i % 5 === 0;
    const r1 = isMajor ? 125 : 128;
    const r2 = 132;
    return {
      x1: cx + r1 * Math.cos(angle),
      y1: cy + r1 * Math.sin(angle),
      x2: cx + r2 * Math.cos(angle),
      y2: cy + r2 * Math.sin(angle),
      isMajor,
    };
  });

  // Orbiting dots
  const orbitDots = Array.from({ length: 8 }, (_, i) => ({
    angle: (360 / 8) * i,
    delay: i * 0.4,
    radius: 3 - (i % 3),
  }));

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      className="absolute inset-[-50px] md:inset-[-60px] w-[calc(100%+100px)] h-[calc(100%+100px)] md:w-[calc(100%+120px)] md:h-[calc(100%+120px)]"
    >
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="arcGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(212 100% 50%)" stopOpacity="0.9" />
          <stop offset="50%" stopColor="hsl(260 100% 60%)" stopOpacity="0.7" />
          <stop offset="100%" stopColor="hsl(212 100% 50%)" stopOpacity="0.9" />
        </linearGradient>
        <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="hsl(212 100% 50%)" stopOpacity="0.1" />
          <stop offset="100%" stopColor="hsl(212 100% 50%)" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Ambient center glow */}
      <circle cx={cx} cy={cy} r="140" fill="url(#centerGlow)" />

      {/* Outermost ring - slow rotate */}
      <g className="animate-spin-slow" style={{ transformOrigin: "center" }}>
        <circle cx={cx} cy={cy} r="140" fill="none" stroke="hsl(212 100% 50% / 0.08)" strokeWidth="0.5" />
        {/* Dashed arc segments */}
        <circle cx={cx} cy={cy} r="140" fill="none" stroke="hsl(212 100% 50% / 0.2)" strokeWidth="1" strokeDasharray="30 20 10 20" />
      </g>

      {/* Tick marks ring */}
      <g>
        {ticks.map((t, i) => (
          <line
            key={i}
            x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2}
            stroke={t.isMajor ? "hsl(212 100% 50% / 0.6)" : "hsl(212 100% 50% / 0.2)"}
            strokeWidth={t.isMajor ? "1.5" : "0.5"}
          />
        ))}
      </g>

      {/* Main ring with gradient */}
      <circle
        cx={cx} cy={cy} r="120"
        fill="none"
        stroke="url(#arcGrad)"
        strokeWidth="1.5"
        filter="url(#glow)"
        className="animate-pulse-glow"
      />

      {/* Inner dashed ring - counter rotate */}
      <g className="animate-spin-reverse" style={{ transformOrigin: "center" }}>
        <circle cx={cx} cy={cy} r="110" fill="none" stroke="hsl(260 100% 60% / 0.15)" strokeWidth="0.5" strokeDasharray="6 4" />
      </g>

      {/* Innermost thin ring */}
      <circle cx={cx} cy={cy} r="100" fill="none" stroke="hsl(212 100% 50% / 0.1)" strokeWidth="0.5" />

      {/* Arc segments on main ring */}
      <g className="animate-spin-slow" style={{ transformOrigin: "center", animationDuration: "20s" }}>
        <circle cx={cx} cy={cy} r="120" fill="none" stroke="hsl(340 100% 55% / 0.4)" strokeWidth="2.5" strokeDasharray="40 280" strokeLinecap="round" />
      </g>
      <g className="animate-spin-reverse" style={{ transformOrigin: "center", animationDuration: "15s" }}>
        <circle cx={cx} cy={cy} r="132" fill="none" stroke="hsl(212 100% 50% / 0.3)" strokeWidth="2" strokeDasharray="25 200" strokeLinecap="round" />
      </g>

      {/* Orbiting dots */}
      <g className="animate-spin-slow" style={{ transformOrigin: "center", animationDuration: "10s" }}>
        {orbitDots.map((dot, i) => {
          const angle = (Math.PI * 2 * i) / 8 - Math.PI / 2;
          const x = cx + 126 * Math.cos(angle);
          const y = cy + 126 * Math.sin(angle);
          return (
            <circle key={i} cx={x} cy={y} r={dot.radius} fill="hsl(212 100% 50%)" filter="url(#glow)">
              <animate attributeName="opacity" values="0.3;1;0.3" dur={`${1.5 + dot.delay}s`} repeatCount="indefinite" />
            </circle>
          );
        })}
      </g>

      {/* Scanning beam */}
      <g className="animate-spin-slow" style={{ transformOrigin: "center", animationDuration: "4s" }}>
        <line x1={cx} y1={cy} x2={cx} y2={cy - 135} stroke="hsl(212 100% 50% / 0.3)" strokeWidth="1">
          <animate attributeName="opacity" values="0;0.6;0" dur="4s" repeatCount="indefinite" />
        </line>
        {/* Sweep gradient trail */}
        <path
          d={`M ${cx} ${cy} L ${cx} ${cy - 135} A 135 135 0 0 1 ${cx + 135 * Math.sin(Math.PI / 6)} ${cy - 135 * Math.cos(Math.PI / 6)} Z`}
          fill="hsl(212 100% 50% / 0.04)"
        />
      </g>

      {/* Data readouts */}
      <g opacity="0.6">
        <text x={cx} y="18" fill="hsl(212 100% 50%)" fontSize="6" fontFamily="Orbitron, monospace" textAnchor="middle">
          <animate attributeName="opacity" values="0.3;0.8;0.3" dur="3s" repeatCount="indefinite" />
          SYS:ACTIVE
        </text>
      </g>
      <g opacity="0.6">
        <text x={cx} y="290" fill="hsl(212 100% 50%)" fontSize="6" fontFamily="Orbitron, monospace" textAnchor="middle">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="2.5s" repeatCount="indefinite" />
          v2.0 BETA
        </text>
      </g>
      <g opacity="0.5">
        <text x="12" y={cy} fill="hsl(212 100% 50%)" fontSize="5" fontFamily="Orbitron, monospace" transform={`rotate(-90 12 ${cy})`}>
          <animate attributeName="opacity" values="0.2;0.7;0.2" dur="4s" repeatCount="indefinite" />
          ISHAN-X
        </text>
      </g>
      <g opacity="0.5">
        <text x="288" y={cy} fill="hsl(212 100% 50%)" fontSize="5" fontFamily="Orbitron, monospace" transform={`rotate(90 288 ${cy})`}>
          <animate attributeName="opacity" values="0.3;0.6;0.3" dur="3.5s" repeatCount="indefinite" />
          ONLINE
        </text>
      </g>

      {/* Corner crosshair markers at cardinal points */}
      {[0, 90, 180, 270].map((deg, i) => {
        const angle = (deg * Math.PI) / 180 - Math.PI / 2;
        const r = 120;
        const px = cx + r * Math.cos(angle);
        const py = cy + r * Math.sin(angle);
        return (
          <g key={i}>
            <line x1={px - 6} y1={py} x2={px + 6} y2={py} stroke="hsl(212 100% 50% / 0.6)" strokeWidth="1" />
            <line x1={px} y1={py - 6} x2={px} y2={py + 6} stroke="hsl(212 100% 50% / 0.6)" strokeWidth="1" />
            <circle cx={px} cy={py} r="2" fill="hsl(212 100% 50%)" filter="url(#glow)">
              <animate attributeName="opacity" values="0.5;1;0.5" dur={`${2 + i * 0.5}s`} repeatCount="indefinite" />
            </circle>
          </g>
        );
      })}
    </svg>
  );
};

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden cyber-grid pt-20">
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
          {/* Circular HUD Frame */}
          <CircularHUD />

          {/* Multiple scan lines */}
          <div className="absolute inset-0 rounded-full overflow-hidden">
            <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-primary/60 to-transparent animate-scan-line" />
            <div className="absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-accent/40 to-transparent animate-scan-line" style={{ animationDelay: '2s', animationDuration: '5s' }} />
          </div>

          {/* Pulsing glow rings behind logo */}
          <div className="absolute inset-0 flex items-center justify-center z-[5]">
            <div className="absolute w-60 h-60 md:w-72 md:h-72 rounded-full border border-primary/20 animate-ping" style={{ animationDuration: '3s' }} />
            <div className="absolute w-64 h-64 md:w-76 md:h-76 rounded-full border border-accent/10 animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }} />
            <div className="absolute w-56 h-56 md:w-64 md:h-64 rounded-full bg-primary/5 blur-xl animate-pulse" />
          </div>

          {/* Corner data readouts on logo */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 z-20 font-display text-[8px] tracking-[0.3em] text-primary/60 animate-pulse">
            SCANNING
          </div>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 font-display text-[8px] tracking-[0.3em] text-primary/60 animate-pulse" style={{ animationDelay: '1.5s' }}>
            LOCKED
          </div>

          <img
            src={botLogo}
            alt="ISHAN BETA MD Bot Logo"
            className="relative z-10 w-56 h-56 md:w-64 md:h-64 rounded-full border-2 border-primary/50 animate-float object-cover shadow-[0_0_40px_-5px_hsl(var(--primary)/0.4),0_0_80px_-10px_hsl(var(--primary)/0.2)]"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold font-display tracking-wider mb-4"
        >
          <span className="relative inline-block">
            <span className="bg-[linear-gradient(270deg,hsl(212,100%,50%),hsl(280,100%,60%),hsl(340,100%,55%),hsl(212,100%,50%))] bg-[length:300%_300%] bg-clip-text text-transparent animate-[color-shift_4s_ease-in-out_infinite]">ISHAN BETA MD</span>
            {/* Glitch layers */}
            <span className="absolute inset-0 bg-[linear-gradient(270deg,hsl(212,100%,50%),hsl(280,100%,60%),hsl(340,100%,55%),hsl(212,100%,50%))] bg-[length:300%_300%] bg-clip-text text-transparent animate-[color-shift_4s_ease-in-out_infinite] animate-[glitch-1_3s_infinite]" aria-hidden="true">ISHAN BETA MD</span>
            <span className="absolute inset-0 bg-[linear-gradient(270deg,hsl(340,100%,55%),hsl(212,100%,50%),hsl(280,100%,60%),hsl(340,100%,55%))] bg-[length:300%_300%] bg-clip-text text-transparent animate-[color-shift_4s_ease-in-out_infinite] animate-[glitch-2_3s_infinite]" aria-hidden="true">ISHAN BETA MD</span>
            {/* Underline scanner */}
            <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent animate-[text-scan_2s_linear_infinite]" />
            {/* Glow behind text */}
            <span className="absolute inset-0 blur-lg opacity-40 bg-[linear-gradient(270deg,hsl(212,100%,50%),hsl(280,100%,60%),hsl(340,100%,55%),hsl(212,100%,50%))] bg-[length:300%_300%] bg-clip-text text-transparent animate-[color-shift_4s_ease-in-out_infinite]" aria-hidden="true">ISHAN BETA MD</span>
          </span>
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
            href="https://ishan-x-md-beta-pair-web-production.up.railway.app"
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

        {/* MS & X MD Image with tech effect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-12 relative group max-w-2xl w-full"
        >
          {/* Outer glow border */}
          <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-primary via-accent to-primary opacity-60 blur-md group-hover:opacity-80 transition-opacity animate-[color-shift_4s_ease-in-out_infinite] bg-[length:300%_300%]" />
          
          {/* Scan line */}
          <div className="absolute inset-0 rounded-xl overflow-hidden z-20 pointer-events-none">
            <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-primary/80 to-transparent animate-scan-line" />
          </div>

          {/* Corner brackets */}
          <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary rounded-tl-lg z-20" />
          <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-primary rounded-tr-lg z-20" />
          <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-primary rounded-bl-lg z-20" />
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary rounded-br-lg z-20" />

          {/* HUD data overlay */}
          <div className="absolute top-2 left-3 z-20 font-display text-[10px] tracking-widest text-primary/70 animate-pulse">
            SYS:CONNECTED
          </div>
          <div className="absolute top-2 right-3 z-20 font-display text-[10px] tracking-widest text-primary/70 animate-pulse" style={{ animationDelay: '1s' }}>
            MS &amp; X MD
          </div>
          <div className="absolute bottom-2 left-3 z-20 font-display text-[10px] tracking-widest text-primary/70 animate-pulse" style={{ animationDelay: '0.5s' }}>
            DEV:ACTIVE
          </div>

          {/* Image */}
          <img
            src={msXMd}
            alt="MS & X MD Developers"
            className="relative z-10 w-full rounded-xl border border-primary/30 object-cover shadow-[0_0_30px_-5px_hsl(var(--primary)/0.3)]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
