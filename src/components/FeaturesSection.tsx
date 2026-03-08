import { motion } from "framer-motion";
import { Film, Shield, Bot, UsersRound, Music } from "lucide-react";

const features = [
  { icon: Film, title: "Movie & TV", desc: "Download movies, TV shows, and trailers directly through WhatsApp." },
  { icon: Shield, title: "Privacy Pro", desc: "Advanced privacy features to protect your group and personal chats." },
  { icon: Bot, title: "AI Chat", desc: "Powered by artificial intelligence for smart conversations." },
  { icon: UsersRound, title: "Group Tools", desc: "Powerful admin tools for managing WhatsApp groups efficiently." },
  { icon: Music, title: "Music Hub", desc: "Search and download music from multiple platforms instantly." },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 relative cyber-grid">
      <div className="absolute inset-0 bg-background/80" />
      <div className="container px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold font-display text-center mb-4"
        >
          Premium <span className="text-gradient">Features</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted-foreground text-center mb-12 max-w-md mx-auto font-body"
        >
          Experience the full power of automation
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 group hover:border-primary/50 transition-all hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4 group-hover:glow-box transition-shadow">
                <f.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2 text-foreground">{f.title}</h3>
              <p className="text-sm text-muted-foreground font-body">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
