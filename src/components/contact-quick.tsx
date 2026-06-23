import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import { advisor } from "@/lib/mock-data";

const items = [
  { icon: Phone, label: "Call", value: advisor.phone, href: advisor.phoneHref },
  { icon: MessageCircle, label: "WhatsApp", value: "Chat instantly", href: advisor.whatsapp },
  { icon: Mail, label: "Email", value: advisor.email, href: `mailto:${advisor.email}` },
  { icon: MapPin, label: "Based in", value: advisor.city },
  { icon: Clock, label: "Hours", value: advisor.hours },
];

export function ContactQuick() {
  return (
    <div className="grid sm:grid-cols-2 gap-3">
      {items.map((it, i) => {
        const Icon = it.icon;
        const inner = (
          <div className="surface-card p-4 flex items-start gap-3 hover:border-[color-mix(in_oklab,var(--teal)_45%,var(--border))] hover:-translate-y-0.5 transition-all">
            <div className="grid place-items-center h-10 w-10 rounded-lg bg-[color-mix(in_oklab,var(--teal)_12%,white)] text-[var(--teal)] shrink-0">
              <Icon className="size-4" />
            </div>
            <div className="min-w-0">
              <div className="text-xs uppercase tracking-wide text-muted-foreground">{it.label}</div>
              <div className="text-sm font-medium text-foreground truncate">{it.value}</div>
            </div>
          </div>
        );
        return it.href ? (
          <a key={i} href={it.href} target={it.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
            {inner}
          </a>
        ) : (
          <div key={i}>{inner}</div>
        );
      })}
    </div>
  );
}