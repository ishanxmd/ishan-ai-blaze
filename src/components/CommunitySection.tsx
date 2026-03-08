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

        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
          <motion.a
            href="https://chat.whatsapp.com/C5jE3Tk7U0RBGcR6kwRSUi"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex-1 btn-color-shift px-6 py-4 rounded-lg font-display text-sm tracking-widest text-primary-foreground flex items-center justify-center gap-3 hover:opacity-90 transition-opacity glow-box"
          >
            <MessageCircle className="w-5 h-5" />
            Support Group
          </motion.a>

          <motion.a
            href="https://whatsapp.com/channel/0029Vb7eEOGLY6dBNzl2IH0O"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="flex-1 px-6 py-4 rounded-lg font-display text-sm tracking-widest border border-primary/50 text-foreground flex items-center justify-center gap-3 hover:bg-primary/10 transition-colors"
          >
            <Radio className="w-5 h-5" />
            Join Channel
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
