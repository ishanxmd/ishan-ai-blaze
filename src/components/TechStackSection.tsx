import { motion } from "framer-motion";
import { FileJson2, Hexagon, MessageCircle, Database, Atom, Container, Cloud, Paintbrush } from "lucide-react";

const techStack = [
  { icon: FileJson2, label: "JavaScript/ES6+" },
  { icon: Hexagon, label: "Node.js" },
  { icon: MessageCircle, label: "WA Bots" },
  { icon: Database, label: "MongoDB" },
  { icon: Atom, label: "React" },
  { icon: Container, label: "Flask" },
  { icon: Cloud, label: "Cloud APIs" },
  { icon: Paintbrush, label: "UI/UX" },
];

const TechStackSection = () => {
  return (
    <section className="py-20 relative">
      <div className="container px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold font-display text-center mb-12"
        >
          Tech Stack & <span className="text-gradient">Tools</span>
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto">
          {techStack.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-secondary/80 border border-border/50 p-6 flex flex-col items-center justify-center gap-4 group hover:border-primary/40 transition-all hover:-translate-y-1"
            >
              <item.icon className="w-12 h-12 text-[hsl(185_100%_50%)] drop-shadow-[0_0_10px_hsl(185_100%_50%/0.5)]" />
              <span className="font-display text-sm tracking-wider text-foreground text-center">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
