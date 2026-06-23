import { motion } from "framer-motion";
import { AnimatedCounter } from "./animated-counter";

export function StatCard({
  value,
  suffix,
  label,
  index = 0,
}: {
  value: number;
  suffix?: string;
  label: string;
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: "easeOut" }}
      className="surface-card p-6 hover:-translate-y-0.5 hover:shadow-[var(--shadow-elevated)] transition-all"
    >
      <div className="text-3xl md:text-4xl font-display font-semibold text-foreground tracking-tight">
        <AnimatedCounter value={value} suffix={suffix} />
      </div>
      <div className="mt-2 text-sm text-muted-foreground">{label}</div>
    </motion.div>
  );
}