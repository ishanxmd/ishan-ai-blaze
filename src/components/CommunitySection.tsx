import { motion } from "framer-motion";
import { MessageCircle, Radio } from "lucide-react";

const CommunitySection = () => {
  return (
    <section className="py-20">
      <div className="container px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold font-display text-center mb-4"
        >
          Join Our <span className="text-gradient">Community</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted-foreground text-center mb-12 max-w-md mx-auto font-body"
        >
          Connect with thousands of users and stay updated
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <motion.a
            href="https://chat.whatsapp.com/C5jE3Tk7U0RBGcR6kwRSUi"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 text-center group hover:border-primary/50 transition-all hover:-translate-y-1 block"
          >
            <div className="w-14 h-14 mx-auto mb-4 rounded-full gradient-primary flex items-center justify-center group-hover:glow-box transition-shadow">
              <MessageCircle className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="font-display text-lg font-semibold mb-2">Support Group</h3>
            <p className="text-sm text-muted-foreground font-body">Get help and chat with the community</p>
          </motion.a>

          <motion.a
            href="https://whatsapp.com/channel/0029Vb7eEOGLY6dBNzl2IH0O"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 text-center group hover:border-primary/50 transition-all hover:-translate-y-1 block"
          >
            <div className="w-14 h-14 mx-auto mb-4 rounded-full gradient-primary flex items-center justify-center group-hover:glow-box transition-shadow">
              <Radio className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="font-display text-lg font-semibold mb-2">Join Channel</h3>
            <p className="text-sm text-muted-foreground font-body">Stay updated with latest news</p>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
