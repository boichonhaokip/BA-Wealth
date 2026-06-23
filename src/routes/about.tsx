import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Target,
  Award,
  ShieldCheck,
  MapPin,
  CheckCircle2,
  GraduationCap,
  Building2,
  Users,
} from "lucide-react";
import { advisor } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/section-header";
import { Timeline } from "@/components/timeline";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About ${advisor.name} — Loan Advisor Profile` },
      {
        name: "description",
        content:
          "12+ years of retail lending experience across HDFC, Bajaj Finserv & Tata Capital. Independent loan advisor based in Mumbai.",
      },
      { property: "og:title", content: `About ${advisor.name} — Loan Advisor Profile` },
      {
        property: "og:description",
        content: "Profile, experience and approach of an independent loan advisor & DSA partner.",
      },
    ],
  }),
  component: AboutPage,
});

const strengths = [
  { icon: Target, t: "Profile-first matching", d: "We match you to the lender, not the lender to you." },
  { icon: ShieldCheck, t: "Fully transparent", d: "Every charge disclosed in writing before sign-off." },
  { icon: Award, t: "12 years inside banks", d: "Underwriter mindset gives you a fundable file." },
  { icon: Users, t: "Self-employed expertise", d: "ITR, GST and turnover-based structuring specialist." },
];

function AboutPage() {
  return (
    <>
      <section className="hero-bg border-b border-border">
        <div className="container-page py-16 md:py-24 grid lg:grid-cols-12 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-[var(--teal)] uppercase tracking-wide">
              About
            </div>
            <h1 className="mt-5 text-4xl md:text-5xl lg:text-[56px] font-semibold leading-[1.05] tracking-tight">
              An independent advisor with{" "}
              <span className="text-[var(--teal)]">a banker’s eye</span> for your file.
            </h1>
            <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
              I’ve spent 12 years inside India’s top retail lenders — underwriting, structuring and
              negotiating loans. Today, I use that exact playbook to get the best terms for my
              clients, not the bank.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/contact">
                <Button variant="hero" size="lg">Book Consultation</Button>
              </Link>
              <a href={advisor.phoneHref}>
                <Button variant="soft" size="lg">Call {advisor.phone}</Button>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="surface-card p-6 md:p-7">
              <div className="aspect-[3/4] rounded-xl overflow-hidden border border-border bg-[var(--surface-alt)]">
                <img 
                  src={advisor.photo} 
                  alt={advisor.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-5">
                <div className="font-display font-semibold text-xl text-foreground">
                  {advisor.name}
                </div>
                <div className="text-sm text-muted-foreground">{advisor.role}</div>
                <div className="mt-3 flex items-center gap-1.5 text-sm text-muted-foreground">
                  <MapPin className="size-4 text-[var(--teal)]" /> {advisor.city}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="container-page py-16 md:py-20 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <SectionHeader
            eyebrow="My Mission"
            title="Make every borrower an informed borrower."
            align="left"
            description="A loan is a 10-to-25 year commitment. My job is to make sure you sign the right one — at the right rate, at the right bank, with no surprises three years later."
          />
        </div>
        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
          {strengths.map((s, i) => (
            <motion.div
              key={s.t}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="surface-card p-5"
            >
              <s.icon className="size-5 text-[var(--teal)]" />
              <div className="mt-3 font-display font-semibold text-foreground">{s.t}</div>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-[var(--surface-alt)] border-y border-border">
        <div className="container-page py-16 md:py-20 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="Experience"
              title="A decade across India’s top lenders."
              align="left"
              description="From frontline relationship management to building DSA channels — here’s the journey."
            />
          </div>
          <div className="lg:col-span-7">
            <Timeline />
          </div>
        </div>
      </section>

      <section className="container-page py-16 md:py-20 grid lg:grid-cols-2 gap-10">
        <div>
          <SectionHeader
            eyebrow="Coverage"
            title="Cities & areas served"
            align="left"
            description="On-ground service across Western India, with full digital handling for NRI and outstation profiles."
          />
          <div className="mt-8 flex flex-wrap gap-2">
            {advisor.cities.map((c) => (
              <span
                key={c}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-1.5 text-sm text-foreground"
              >
                <MapPin className="size-3.5 text-[var(--teal)]" /> {c}
              </span>
            ))}
          </div>
        </div>
        <div>
          <SectionHeader
            eyebrow="Expertise"
            title="Loan & banking specialties"
            align="left"
          />
          <ul className="mt-8 grid sm:grid-cols-2 gap-3">
            {[
              "Home loans (purchase / construction)",
              "Loan Against Property — Resi & Commercial",
              "MSME unsecured & secured business loans",
              "Personal loans for salaried profiles",
              "Self-employed ITR structuring",
              "Balance transfer & rate negotiation",
              "Top-up loan planning",
              "NRI home loans",
            ].map((s) => (
              <li key={s} className="flex items-start gap-2 text-sm text-foreground">
                <CheckCircle2 className="size-4 text-[var(--teal)] mt-0.5 shrink-0" /> {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-page py-12">
        <div className="surface-card p-8 md:p-10 flex flex-wrap gap-6 items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="grid place-items-center h-12 w-12 rounded-xl bg-[color-mix(in_oklab,var(--teal)_12%,white)] text-[var(--teal)]">
              <GraduationCap className="size-5" />
            </div>
            <div>
              <div className="font-display font-semibold text-lg text-foreground">
                MBA · Finance · NMIMS Mumbai
              </div>
              <div className="text-sm text-muted-foreground flex items-center gap-1.5 mt-1">
                <Building2 className="size-4" /> Certified DSA Partner — multiple lenders
              </div>
            </div>
          </div>
          <Link to="/contact">
            <Button variant="hero">Start a conversation</Button>
          </Link>
        </div>
      </section>
    </>
  );
}