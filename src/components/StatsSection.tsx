import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Users, MessageSquare, Server, Zap } from "lucide-react";

const stats = [
  { icon: Users, label: "Active Users", value: "50K+", numericEnd: 50 },
  { icon: MessageSquare, label: "Messages Sent", value: "10M+", numericEnd: 10 },
  { icon: Server, label: "Server Uptime", value: "99.9%", numericEnd: 99.9 },
  { icon: Zap, label: "Current Version", value: "V3 ULTRA", numericEnd: 3 },
];

const useCountUp = (end: number, duration: number, inView: boolean) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start * 10) / 10);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration, inView]);
  return count;
};

const StatCard = ({ icon: Icon, label, value, numericEnd, index, inView }: any) => {
  const count = useCountUp(numericEnd, 2000, inView);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="rounded-2xl bg-secondary/80 border border-border/50 p-6 text-center group hover:border-primary/40 transition-all hover:-translate-y-1"
    >
      <div className="flex justify-center mb-4">
        <Icon className="w-10 h-10 text-primary drop-shadow-[0_0_8px_hsl(var(--primary)/0.5)]" />
      </div>
      <div className="text-2xl md:text-3xl font-bold font-display text-gradient mb-1">
        {value}
      </div>
      <div className="text-sm text-muted-foreground font-body">{label}</div>
    </motion.div>
  );
};

const StatsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 relative">
      <div className="container px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold font-display text-center mb-12"
        >
          Bot <span className="text-gradient">Statistics</span>
        </motion.h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} {...stat} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
