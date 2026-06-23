import { motion } from "framer-motion";
import { partners } from "@/lib/mock-data";
import { Landmark } from "lucide-react";

export function PartnerStrip() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
      {partners.map((p, i) => (
        <motion.div
          key={p}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.03 }}
          className="surface-card flex items-center gap-2 px-4 py-3.5 text-sm text-muted-foreground hover:text-foreground hover:border-[color-mix(in_oklab,var(--teal)_40%,var(--border))] transition-colors"
        >
          <Landmark className="size-4 text-[var(--teal)] shrink-0" />
          <span className="font-medium truncate">{p}</span>
        </motion.div>
      ))}
    </div>
  );
}