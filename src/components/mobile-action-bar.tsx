import { Phone, MessageCircle, ClipboardCheck } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { advisor } from "@/lib/mock-data";

export function MobileActionBar() {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85 shadow-[0_-6px_20px_-10px_rgba(15,23,42,0.18)]">
      <div className="grid grid-cols-3 text-xs font-semibold">
        <a
          href={advisor.phoneHref}
          className="flex flex-col items-center justify-center gap-1 py-2.5 text-[var(--navy)] active:bg-[var(--surface-alt)]"
        >
          <Phone className="size-5" />
          Call Now
        </a>
        <a
          href={advisor.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center justify-center gap-1 py-2.5 text-white bg-[#16A34A] active:bg-[#15803d]"
        >
          <MessageCircle className="size-5" />
          WhatsApp
        </a>
        <Link
          to="/contact"
          className="flex flex-col items-center justify-center gap-1 py-2.5 text-white bg-[var(--teal)] active:opacity-90"
        >
          <ClipboardCheck className="size-5" />
          Check Eligibility
        </Link>
      </div>
    </div>
  );
}