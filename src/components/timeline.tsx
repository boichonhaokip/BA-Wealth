import { motion } from "framer-motion";
import { timeline } from "@/lib/mock-data";
import { Briefcase } from "lucide-react";

export function Timeline() {
  return (
    <ol className="relative border-l-2 border-border ml-3 space-y-8">
      {timeline.map((t, i) => (
        <motion.li
          key={t.year}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45, delay: i * 0.08 }}
          className="pl-8"
        >
          <span className="absolute -left-[14px] grid place-items-center h-7 w-7 rounded-full bg-[var(--teal)] text-white ring-4 ring-background">
            <Briefcase className="size-3.5" />
          </span>
          <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
            {t.year}
          </div>
          <div className="mt-1 text-lg font-display font-semibold text-foreground">{t.role}</div>
          <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{t.description}</p>
        </motion.li>
      ))}
    </ol>
  );
}