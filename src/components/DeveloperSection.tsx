import { motion } from "framer-motion";
import devLogo from "@/assets/developer-logo.png";
import devPhoto from "@/assets/developer-photo.png";
import { MessageCircle, Github } from "lucide-react";

const DeveloperSection = () => {
  return (
    <section className="py-20 relative cyber-grid">
      <div className="absolute inset-0 bg-background/80" />
      <div className="container px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold font-display text-center mb-12"
        >
          Meet The <span className="text-gradient">Developer</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto glass-card p-8 text-center"
        >
          <div className="relative inline-block mb-6">
            <div className="absolute inset-0 rounded-full animate-pulse-glow" />
            <img
              src={devLogo}
              alt="I.G Ishan Madusanke"
              className="w-28 h-28 rounded-full border-2 border-primary/50 object-cover relative z-10"
            />
          </div>
          <div className="relative inline-block mb-6">
            <img
              src={devPhoto}
              alt="I.G Ishan Madusanke Photo"
              className="w-28 h-28 rounded-full border-2 border-primary/50 object-cover relative z-10"
            />
          </div>
          <h3 className="font-display text-xl font-bold mb-2 text-gradient">I.G Ishan Madusanke</h3>
          <p className="text-muted-foreground font-body mb-8 leading-relaxed">
            I'm a passionate Full Stack Developer and the creator of ISHAN-X BETA. My mission is to simplify communication through advanced automation technology, making it accessible to everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/message/PDS7DAO342DCG1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-rgb-shift px-6 py-3 rounded-lg font-display text-xs tracking-widest text-white flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              Contact Me
            </a>
            <a
              href="https://github.com/ishanxmd"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-rgb-border px-6 py-3 rounded-lg font-display text-xs tracking-widest text-foreground flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DeveloperSection;
