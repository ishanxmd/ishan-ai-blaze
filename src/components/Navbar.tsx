import { motion } from "framer-motion";
import botLogo from "@/assets/bot-logo.png";

const Navbar = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-3"
    >
      <div className="max-w-6xl mx-auto glass-card px-6 py-3 flex items-center justify-between">
        {/* Logo & Brand */}
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-primary/60 shadow-[0_0_12px_hsl(212_100%_50%/0.4)]">
            <img src={botLogo} alt="Ishan Bot Logo" className="w-full h-full object-cover" />
          </div>
          <span
            className="text-sm md:text-base font-bold tracking-wider"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span className="text-blue-500">ISHAN-X BETA</span>&nbsp;<span className="text-blue-500">MD</span>
          </span>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-1">
          {[
            { label: "Home", id: "hero" },
            { label: "Features", id: "features" },
            { label: "Deploy", id: "commands" },
            { label: "Downloads", id: "download" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary/60"
            >
              {item.label}
            </button>
          ))}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-5 py-2 text-sm font-semibold rounded-full gradient-primary text-primary-foreground hover:opacity-90 transition-opacity"
          >
            GitHub
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
