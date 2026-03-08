import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

const commands = [
  ".alive", ".menu", ".movie", ".song", ".fb", ".tiktok",
  ".vv", ".apk", ".image", ".logo", ".video", ".anime",
  ".jid", ".pin", ".join", ".forward",
];

const CommandsSection = () => {
  return (
    <section className="py-20">
      <div className="container px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold font-display text-center mb-4"
        >
          Bot <span className="text-gradient">Commands</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted-foreground text-center mb-12 max-w-md mx-auto font-body"
        >
          Explore the full list of available commands
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto glass-card overflow-hidden"
        >
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50 bg-secondary/50">
            <Terminal className="w-4 h-4 text-primary" />
            <span className="text-sm font-display text-muted-foreground tracking-wider">TERMINAL</span>
            <div className="flex gap-1.5 ml-auto">
              <div className="w-3 h-3 rounded-full bg-destructive/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
            </div>
          </div>
          <div className="p-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {commands.map((cmd, i) => (
              <motion.div
                key={cmd}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="px-3 py-2 rounded-md bg-secondary/80 border border-border/50 text-center font-mono text-sm text-primary hover:border-primary/50 hover:bg-primary/10 transition-colors cursor-default"
              >
                {cmd}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommandsSection;
