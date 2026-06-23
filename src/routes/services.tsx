import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CheckCircle2, FileText, Users } from "lucide-react";
import { services, advisor } from "@/lib/mock-data";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Loan Services — Home, Personal, Business, LAP & more" },
      {
        name: "description",
        content:
          "Detailed loan service offerings: home, personal, business, loan against property, car loan, balance transfer and top-up loans.",
      },
      { property: "og:title", content: "Loan Services — Home, Personal, Business, LAP & more" },
      {
        property: "og:description",
        content: "Eligibility, documents and what to expect for each loan type.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="hero-bg border-b border-border">
        <div className="container-page py-16 md:py-20 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-[var(--teal)] uppercase tracking-wide">
            Services
          </div>
          <h1 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight max-w-3xl mx-auto leading-tight">
            One advisor. <span className="text-[var(--teal)]">Every major loan</span>.
          </h1>
          <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Each loan product, with clear eligibility criteria and exactly the documents you’ll
            need — so you walk into the process prepared.
          </p>
        </div>
      </section>

      <section className="container-page py-14 md:py-20 space-y-6">
        {services.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.article
              key={s.slug}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="surface-card p-6 md:p-8 grid lg:grid-cols-12 gap-6"
            >
              <div className="lg:col-span-4">
                <div className="grid place-items-center h-14 w-14 rounded-2xl bg-[color-mix(in_oklab,var(--teal)_12%,white)] text-[var(--teal)]">
                  <Icon className="size-6" />
                </div>
                <h2 className="mt-5 text-2xl font-display font-semibold text-foreground">
                  {s.title}
                </h2>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.description}</p>
                <div className="mt-5">
                  <Link to="/contact">
                    <Button variant="navy" size="sm">Apply for {s.title}</Button>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-8 grid sm:grid-cols-3 gap-5">
                <Block icon={Users} title="Ideal for">
                  {s.forWho.map((w) => (
                    <Bullet key={w}>{w}</Bullet>
                  ))}
                </Block>
                <Block icon={CheckCircle2} title="Eligibility">
                  {s.eligibility.map((w) => (
                    <Bullet key={w}>{w}</Bullet>
                  ))}
                </Block>
                <Block icon={FileText} title="Documents">
                  {s.documents.map((w) => (
                    <Bullet key={w}>{w}</Bullet>
                  ))}
                </Block>
              </div>
            </motion.article>
          );
        })}
      </section>

      <section className="container-page pb-16">
        <div className="surface-card p-8 md:p-10 text-center">
          <h3 className="text-2xl md:text-3xl font-display font-semibold text-foreground">
            Not sure which loan fits your need?
          </h3>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Tell us your goal in one minute — we’ll recommend the right product and lender.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <Link to="/contact">
              <Button variant="hero" size="lg">Get Free Advice</Button>
            </Link>
            <a href={advisor.whatsapp} target="_blank" rel="noreferrer">
              <Button variant="whatsapp" size="lg">WhatsApp Us</Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function Block({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof FileText;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-border bg-[var(--surface-alt)]/60 p-5">
      <div className="flex items-center gap-2 text-xs uppercase tracking-wide text-muted-foreground font-semibold">
        <Icon className="size-3.5 text-[var(--teal)]" /> {title}
      </div>
      <ul className="mt-3 space-y-2">{children}</ul>
    </div>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2 text-sm text-foreground">
      <CheckCircle2 className="size-3.5 mt-0.5 text-[var(--teal)] shrink-0" />
      <span>{children}</span>
    </li>
  );
}