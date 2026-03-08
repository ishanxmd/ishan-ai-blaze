import { motion } from "framer-motion";
import { Download } from "lucide-react";

const DownloadSection = () => {
  return (
    <section className="py-20 relative cyber-grid">
      <div className="absolute inset-0 bg-background/80" />
      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto text-center glass-card p-10"
        >
          <div className="w-16 h-16 mx-auto mb-6 rounded-full gradient-primary flex items-center justify-center glow-box">
            <Download className="w-8 h-8 text-primary-foreground" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold font-display mb-4">
            Download <span className="text-gradient">Source Code</span>
          </h2>
          <p className="text-muted-foreground mb-8 font-body">
            Get the complete source code and deploy your own instance
          </p>
          <a
            href="https://github.com/ishanxmd/ISHAN-X-BETA-MD/archive/refs/heads/main.zip"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-color-shift px-8 py-3.5 rounded-lg font-display text-sm tracking-widest text-primary-foreground hover:opacity-90 transition-opacity glow-box"
          >
            <Download className="w-4 h-4" />
            Download Source Code
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadSection;
