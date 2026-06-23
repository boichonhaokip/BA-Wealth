import { motion } from "framer-motion";
import { Quote, Star, MapPin } from "lucide-react";

type T = {
  name: string;
  city: string;
  loanType: string;
  amount: string;
  rating: number;
  review: string;
  outcome: string;
};

export function TestimonialCard({ t, index = 0 }: { t: T; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" }}
      className="surface-card p-7 flex flex-col h-full hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)] transition-all"
    >
      <div className="flex items-center justify-between">
        <Quote className="size-7 text-[var(--teal)] opacity-70" />
        <div className="flex gap-0.5">
          {Array.from({ length: t.rating }).map((_, i) => (
            <Star key={i} className="size-4 fill-[var(--warning)] text-[var(--warning)]" />
          ))}
        </div>
      </div>
      <p className="mt-4 text-[15px] text-foreground leading-relaxed">“{t.review}”</p>
      <div className="mt-5 rounded-lg bg-[var(--surface-alt)] px-3 py-2.5 text-xs text-muted-foreground">
        <span className="font-medium text-foreground">Outcome:</span> {t.outcome}
      </div>
      <div className="mt-6 pt-5 border-t border-border flex items-center justify-between">
        <div>
          <div className="font-semibold text-sm text-foreground">{t.name}</div>
          <div className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
            <MapPin className="size-3" />
            {t.city} · {t.loanType}
          </div>
        </div>
        <div className="text-sm font-display font-semibold text-[var(--teal)]">{t.amount}</div>
      </div>
    </motion.div>
  );
}