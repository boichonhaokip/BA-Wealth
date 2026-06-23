import { useState } from "react";
import { MessageCircle, Phone, Mail, CalendarClock, X, Plus } from "lucide-react";
import { advisor } from "@/lib/mock-data";

const actions = [
  {
    label: "WhatsApp",
    href: advisor.whatsapp,
    icon: MessageCircle,
    bg: "bg-[#16A34A] hover:bg-[#15803d]",
    external: true,
  },
  {
    label: "Call",
    href: advisor.phoneHref,
    icon: Phone,
    bg: "bg-[var(--navy)] hover:bg-[var(--navy-soft)]",
  },
  {
    label: "Email",
    href: `mailto:${advisor.email}`,
    icon: Mail,
    bg: "bg-[var(--teal)] hover:bg-[color-mix(in_oklab,var(--teal)_85%,black)]",
  },
  {
    label: "Book consultation",
    href: "/contact",
    icon: CalendarClock,
    bg: "bg-[color-mix(in_oklab,var(--gold)_85%,white)] hover:bg-[var(--gold)] text-[var(--navy)]",
  },
];

export function FloatingContact() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-24 md:bottom-6 right-4 md:right-6 z-50 flex flex-col items-end gap-3">
      {open &&
        actions.map((a, i) => {
          const Icon = a.icon;
          return (
            <a
              key={a.label}
              href={a.href}
              target={a.external ? "_blank" : undefined}
              rel={a.external ? "noreferrer" : undefined}
              aria-label={a.label}
              style={{ animationDelay: `${i * 40}ms` }}
              className="pop-in flex items-center gap-2.5 group"
            >
              <span className="rounded-full bg-card text-foreground text-xs font-medium px-3 py-1.5 shadow-[var(--shadow-soft)] border border-border opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                {a.label}
              </span>
              <span
                className={
                  "grid place-items-center h-11 w-11 rounded-full text-white shadow-[var(--shadow-elevated)] transition-colors " +
                  a.bg
                }
              >
                <Icon className="size-5" strokeWidth={2.2} />
              </span>
            </a>
          );
        })}

      <button
        aria-label={open ? "Close contact menu" : "Open contact menu"}
        onClick={() => setOpen((v) => !v)}
        className="relative grid place-items-center h-14 w-14 rounded-full text-white shadow-[0_10px_30px_-8px_rgba(15,23,42,0.45)] transition-all hover:scale-105"
        style={{
          background: open
            ? "var(--navy)"
            : "linear-gradient(135deg, #16A34A 0%, var(--teal) 100%)",
        }}
      >
        {!open && (
          <span className="absolute inset-0 rounded-full bg-[#16A34A] opacity-30 animate-ping" />
        )}
        <span className="relative">
          {open ? <X className="size-6" /> : <Plus className="size-6" />}
        </span>
      </button>
    </div>
  );
}