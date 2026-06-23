import { createFileRoute } from "@tanstack/react-router";
import { Phone, MessageCircle, Mail, MapPin, Clock, ShieldCheck } from "lucide-react";
import { advisor } from "@/lib/mock-data";
import { ContactForm } from "@/components/contact-form";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Talk to a real loan advisor" },
      {
        name: "description",
        content:
          "Get a free, no-obligation consultation. Call, WhatsApp or fill the form — we’ll respond within working hours.",
      },
      { property: "og:title", content: "Contact — Talk to a real loan advisor" },
      {
        property: "og:description",
        content: "Loan advisory contact form, WhatsApp, phone and email.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="hero-bg border-b border-border">
        <div className="container-page py-14 md:py-20 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-[var(--teal)] uppercase tracking-wide">
            Contact
          </div>
          <h1 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight max-w-3xl mx-auto leading-tight">
            Let’s talk about your loan.
          </h1>
          <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
            One short conversation tells us if we’re the right fit. No obligation, no pressure.
          </p>
        </div>
      </section>

      <section className="container-page py-14 md:py-20 grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7">
          <div className="surface-card p-6 md:p-8">
            <h2 className="font-display text-2xl font-semibold text-foreground">
              Request a callback
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Fill the form and we’ll call you back during working hours.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>

        <aside className="lg:col-span-5 space-y-4">
          <ContactBlock
            icon={Phone}
            title="Call directly"
            value={advisor.phone}
            cta={
              <a href={advisor.phoneHref}>
                <Button variant="navy" className="w-full"><Phone /> Call Now</Button>
              </a>
            }
          />
          <ContactBlock
            icon={MessageCircle}
            title="WhatsApp"
            value="Fastest way to share documents"
            cta={
              <a href={advisor.whatsapp} target="_blank" rel="noreferrer">
                <Button variant="whatsapp" className="w-full"><MessageCircle /> Chat on WhatsApp</Button>
              </a>
            }
          />
          <ContactBlock icon={Mail} title="Email" value={advisor.email} />
          <ContactBlock icon={MapPin} title="Office / Area Served" value={advisor.city} />
          <ContactBlock icon={Clock} title="Working hours" value={advisor.hours} />

          <div className="surface-card p-5 flex items-start gap-3 bg-[var(--surface-alt)]/50">
            <ShieldCheck className="size-5 text-[var(--teal)] mt-0.5 shrink-0" />
            <p className="text-xs text-muted-foreground leading-relaxed">
              We are an <strong className="text-foreground">independent loan advisory & DSA</strong>{" "}
              service. We are not a bank or NBFC. All loan sanctions and disbursals are at the
              discretion of partner lenders. Your information stays confidential.
            </p>
          </div>
        </aside>
      </section>
    </>
  );
}

function ContactBlock({
  icon: Icon,
  title,
  value,
  cta,
}: {
  icon: typeof Phone;
  title: string;
  value: string;
  cta?: React.ReactNode;
}) {
  return (
    <div className="surface-card p-5">
      <div className="flex items-center gap-3">
        <div className="grid place-items-center h-11 w-11 rounded-lg bg-[color-mix(in_oklab,var(--teal)_12%,white)] text-[var(--teal)] shrink-0">
          <Icon className="size-5" />
        </div>
        <div className="min-w-0">
          <div className="text-xs uppercase tracking-wide text-muted-foreground font-semibold">
            {title}
          </div>
          <div className="text-sm font-medium text-foreground truncate">{value}</div>
        </div>
      </div>
      {cta && <div className="mt-4">{cta}</div>}
    </div>
  );
}