import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { Service } from "@/lib/mock-data";

export function ServiceCard({ service, index = 0 }: { service: Service; index?: number }) {
  const Icon = service.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: index * 0.05, ease: "easeOut" }}
      className="group surface-card p-6 hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)] hover:border-[color-mix(in_oklab,var(--teal)_45%,var(--border))] transition-all flex flex-col"
    >
      <div className="flex items-center justify-between">
        <div className="grid place-items-center h-12 w-12 rounded-xl bg-[color-mix(in_oklab,var(--teal)_12%,white)] text-[var(--teal)] group-hover:bg-[var(--teal)] group-hover:text-white transition-colors">
          <Icon className="size-5" />
        </div>
        <ArrowRight className="size-4 text-muted-foreground group-hover:text-[var(--teal)] group-hover:translate-x-0.5 transition-all" />
      </div>
      <h3 className="mt-5 text-lg font-display font-semibold text-foreground">{service.title}</h3>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{service.short}</p>
      <Link
        to="/services"
        className="mt-5 text-sm font-medium text-[var(--teal)] hover:underline underline-offset-4"
      >
        Learn more →
      </Link>
    </motion.div>
  );
}