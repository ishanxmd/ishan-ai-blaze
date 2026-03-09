import { motion } from "framer-motion";
import botLogo from "@/assets/bot-logo.png";
import { ExternalLink, Github } from "lucide-react";

const HexagonHUD = () => {
  // Hexagon points for a regular hexagon (pointy-top), scaled to fit a viewBox
  const size = 280;
  const cx = size / 2;
  const cy = size / 2;

  const hexPoints = (radius: number) => {
    return Array.from({ length: 6 }, (_, i) => {
      const angle = (Math.PI / 3) * i - Math.PI / 2;
      return `${cx + radius * Math.cos(angle)},${cy + radius * Math.sin(angle)}`;
    }).join(" ");
  };

  const cornerPositions = Array.from({ length: 6 }, (_, i) => {
    const angle = (Math.PI / 3) * i - Math.PI / 2;
    const r = 120;
    return { x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) };
  });

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      className="absolute inset-[-40px] md:inset-[-50px] w-[calc(100%+80px)] h-[calc(100%+80px)] md:w-[calc(100%+100px)] md:h-[calc(100%+100px)]"
    >
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="hexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(212 100% 50%)" stopOpacity="0.8" />
          <stop offset="50%" stopColor="hsl(230 100% 60%)" stopOpacity="0.6" />
          <stop offset="100%" stopColor="hsl(212 100% 50%)" stopOpacity="0.8" />
        </linearGradient>
      </defs>

      {/* Outer hexagon - rotating */}
      <g className="animate-spin-slow" style={{ transformOrigin: "center" }}>
        <polygon
          points={hexPoints(130)}
          fill="none"
          stroke="hsl(212 100% 50% / 0.15)"
          strokeWidth="1"
        />
      </g>

      {/* Main hexagon frame */}
      <polygon
        points={hexPoints(120)}
        fill="none"
        stroke="url(#hexGrad)"
        strokeWidth="1.5"
        filter="url(#glow)"
        className="animate-pulse-glow"
      />

      {/* Inner hexagon - counter-rotating */}
      <g className="animate-spin-reverse" style={{ transformOrigin: "center" }}>
        <polygon
          points={hexPoints(110)}
          fill="none"
          stroke="hsl(212 100% 50% / 0.2)"
          strokeWidth="0.5"
          strokeDasharray="8 4"
        />
      </g>

      {/* Corner bracket markers */}
      {cornerPositions.map((pos, i) => (
        <g key={i}>
          {/* Corner dot */}
          <circle
            cx={pos.x}
            cy={pos.y}
            r="3"
            fill="hsl(212 100% 50%)"
            filter="url(#glow)"
          >
            <animate
              attributeName="opacity"
              values="0.4;1;0.4"
              dur={`${1.5 + i * 0.3}s`}
              repeatCount="indefinite"
            />
          </circle>
          {/* Small bracket lines at corners */}
          <line
            x1={pos.x - 6}
            y1={pos.y}
            x2={pos.x + 6}
            y2={pos.y}
            stroke="hsl(212 100% 50% / 0.5)"
            strokeWidth="0.5"
          />
          <line
            x1={pos.x}
            y1={pos.y - 6}
            x2={pos.x}
            y2={pos.y + 6}
            stroke="hsl(212 100% 50% / 0.5)"
            strokeWidth="0.5"
          />
        </g>
      ))}

      {/* Data readout lines - top */}
      <g opacity="0.6">
        <line x1="90" y1="25" x2="190" y2="25" stroke="hsl(212 100% 50% / 0.3)" strokeWidth="0.5" />
        <text x="92" y="22" fill="hsl(212 100% 50%)" fontSize="6" fontFamily="Orbitron, monospace" opacity="0.7">
          <animate attributeName="opacity" values="0.3;0.8;0.3" dur="3s" repeatCount="indefinite" />
          SYS:ACTIVE
        </text>
      </g>

      {/* Data readout - bottom */}
      <g opacity="0.6">
        <line x1="90" y1="258" x2="190" y2="258" stroke="hsl(212 100% 50% / 0.3)" strokeWidth="0.5" />
        <text x="92" y="268" fill="hsl(212 100% 50%)" fontSize="6" fontFamily="Orbitron, monospace" opacity="0.7">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="2.5s" repeatCount="indefinite" />
          v2.0 BETA
        </text>
      </g>

      {/* Data readout - left */}
      <g opacity="0.5">
        <text x="12" y="135" fill="hsl(212 100% 50%)" fontSize="5" fontFamily="Orbitron, monospace" transform="rotate(-90 12 135)">
          <animate attributeName="opacity" values="0.2;0.7;0.2" dur="4s" repeatCount="indefinite" />
          ISHAN-X
        </text>
      </g>

      {/* Data readout - right */}
      <g opacity="0.5">
        <text x="268" y="145" fill="hsl(212 100% 50%)" fontSize="5" fontFamily="Orbitron, monospace" transform="rotate(90 268 145)">
          <animate attributeName="opacity" values="0.3;0.6;0.3" dur="3.5s" repeatCount="indefinite" />
          ONLINE
        </text>
      </g>

      {/* Scanning beam rotating around hexagon */}
      <g className="animate-spin-slow" style={{ transformOrigin: "center" }}>
        <line
          x1={cx}
          y1={cy}
          x2={cx}
          y2={cy - 125}
          stroke="hsl(212 100% 50% / 0.4)"
          strokeWidth="1"
        >
          <animate attributeName="opacity" values="0;0.6;0" dur="3s" repeatCount="indefinite" />
        </line>
      </g>
    </svg>
  );
};

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
          {/* Hexagonal HUD Frame */}
          <HexagonHUD />

          {/* Scan line over logo */}
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
