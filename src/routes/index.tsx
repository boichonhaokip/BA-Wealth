import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Award,
  Sparkles,
  Phone,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  Star,
  Calculator,
  FileText,
  Clock,
  HeartHandshake,
  Users,
  Banknote,
  Eye,
  FileCheck2,
  HeadphonesIcon,
  Handshake,
  ClipboardList,
  Search,
  Send,
  PartyPopper,
  TrendingDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  advisor,
  services,
  stats,
  testimonials,
  processSteps,
  reasonsToChoose,
  caseStudies,
} from "@/lib/mock-data";
import { StatCard } from "@/components/stat-card";
import { AnimatedCounter } from "@/components/animated-counter";
import { ServiceCard } from "@/components/service-card";
import { TestimonialCard } from "@/components/testimonial-card";
import { SectionHeader } from "@/components/section-header";
import { PartnerStrip } from "@/components/partner-strip";
import { FaqAccordion } from "@/components/faq-accordion";
import { EmiCalculator } from "@/components/emi-calculator";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${advisor.name} — Loan Advisor & DSA Partner` },
      {
        name: "description",
        content:
          "12+ years experienced loan advisor helping you choose the right loan from 28+ banks & NBFCs. Home, business, personal, LAP & balance transfer.",
      },
      { property: "og:title", content: `${advisor.name} — Loan Advisor & DSA Partner` },
      {
        property: "og:description",
        content:
          "End-to-end loan assistance — eligibility, documentation, bank matching and disbursal.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <Process />
      <WhyChoose />
      <CaseStudies />
      <Partners />
      <Achievements />
      <Testimonials />
      <Resources />
      <FaqSection />
      <ContactCTA />
    </>
  );
}

function Hero() {
  return (
    <section className="hero-bg relative overflow-hidden border-b border-border">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="float-blob absolute -top-24 -right-20 h-80 w-80 rounded-full bg-[var(--teal)]/15 blur-3xl" />
        <div className="float-blob absolute top-40 -left-24 h-72 w-72 rounded-full bg-[var(--brand-blue)]/15 blur-3xl" style={{ animationDelay: "2s" }} />
        <div className="float-blob absolute bottom-0 right-1/3 h-64 w-64 rounded-full bg-[var(--gold)]/15 blur-3xl" style={{ animationDelay: "4s" }} />
      </div>
      <div className="container-page pt-14 md:pt-20 pb-16 md:pb-24 grid lg:grid-cols-12 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-7"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-[var(--teal)]">
            <ShieldCheck className="size-3.5" />
            Verified DSA · Partnered with 28+ Banks & NBFCs
          </div>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-[56px] font-semibold leading-[1.05] tracking-tight text-foreground">
            Expert Loan Guidance for{" "}
            <span className="text-[var(--teal)]">Home, Business, Personal &amp; Mortgage</span>{" "}
            Financing.
          </h1>
          <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
            Compare offers from multiple banks &amp; NBFCs, get document assistance, eligibility
            guidance and end-to-end support — all from one trusted advisor.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Check Eligibility <ArrowRight />
              </Button>
            </Link>
            <a href={advisor.whatsapp} target="_blank" rel="noreferrer">
              <Button variant="whatsapp" size="xl">
                <MessageCircle /> WhatsApp
              </Button>
            </a>
            <a href={advisor.phoneHref}>
              <Button variant="navy" size="xl">
                <Phone /> Call Now
              </Button>
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-2.5">
            {[
              { icon: ShieldCheck, t: "Transparent Process" },
              { icon: Clock, t: "Fast Assistance" },
              { icon: HeartHandshake, t: "Personalized Guidance" },
            ].map(({ icon: Ic, t }) => (
              <span
                key={t}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground shadow-[var(--shadow-soft)]"
              >
                <Ic className="size-3.5 text-[var(--gold)]" /> {t}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="lg:col-span-5"
        >
          <ProfileCard />
        </motion.div>
      </div>
    </section>
  );
}

function ProfileCard() {
  return (
    <div className="relative">
      <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[var(--teal)]/15 to-[var(--brand-blue)]/15 blur-2xl -z-10" />
      <div className="surface-card p-6 md:p-7">
        <div className="flex items-center gap-4">
          <div className="h-20 w-16 rounded-xl overflow-hidden border border-border shrink-0 bg-[var(--surface-alt)]">
            <img 
              src={advisor.photo} 
              alt={advisor.name} 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-[var(--teal)] font-semibold">
              {advisor.role}
            </div>
            <div className="font-display font-semibold text-xl text-foreground">
              {advisor.name}
            </div>
            <div className="text-xs text-muted-foreground mt-0.5">{advisor.city}</div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-3 text-center">
          {[
            { v: "12+", l: "Years" },
            { v: "1800+", l: "Clients" },
            { v: "₹850Cr", l: "Disbursed" },
          ].map((s) => (
            <div key={s.l} className="rounded-lg bg-[var(--surface-alt)] py-3">
              <div className="font-display font-semibold text-lg text-foreground">{s.v}</div>
              <div className="text-[11px] text-muted-foreground uppercase tracking-wide">
                {s.l}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 space-y-2.5 text-sm">
          {[
            { icon: Award, t: "Top-1% DSA Partner — Western India" },
            { icon: Sparkles, t: "Specialist in self-employed profiles" },
            { icon: Star, t: "4.9 / 5 average client rating" },
          ].map(({ icon: Ic, t }) => (
            <div key={t} className="flex items-center gap-2.5 text-foreground/90">
              <Ic className="size-4 text-[var(--teal)]" /> {t}
            </div>
          ))}
        </div>

        <div className="mt-6 flex gap-2">
          <a href={advisor.phoneHref} className="flex-1">
            <Button variant="navy" className="w-full">
              <Phone /> Call Now
            </Button>
          </a>
          <a href={advisor.whatsapp} target="_blank" rel="noreferrer" className="flex-1">
            <Button variant="whatsapp" className="w-full">
              <MessageCircle /> WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}

function TrustBar() {
  return (
    <section className="container-page py-14 md:py-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.slice(0, 4).map((s, i) => (
          <StatCard key={s.label} {...s} index={i} />
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="container-page py-14 md:py-20 border-t border-border">
      <SectionHeader
        eyebrow="Loan Services"
        title="Every major loan, handled end-to-end"
        description="From eligibility check to disbursal coordination — pick the loan type you need and we’ll find the right bank for your profile."
      />
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {services.map((s, i) => (
          <ServiceCard key={s.slug} service={s} index={i} />
        ))}
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="bg-[var(--surface-alt)] border-y border-border">
      <div className="container-page py-14 md:py-20">
        <SectionHeader
          eyebrow="How it Works"
          title="A simple, transparent 5-step process"
          description="No back-and-forth, no surprises — just a clear path from your first call to disbursal."
        />
        <div className="mt-14 relative">
          <div
            aria-hidden
            className="hidden lg:block absolute top-7 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-[var(--teal)]/40 to-transparent"
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((s, i) => {
              const Icon = [Handshake, Search, FileCheck2, Send, PartyPopper][i] ?? Handshake;
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="surface-card p-5 relative hover:-translate-y-0.5 hover:shadow-[var(--shadow-elevated)] transition-all"
                >
                  <div className="flex items-center justify-between">
                    <span className="relative grid place-items-center h-14 w-14 rounded-full bg-background border-2 border-[var(--teal)]/30 text-[var(--teal)] shadow-[var(--shadow-soft)]">
                      <Icon className="size-6" />
                    </span>
                    <span className="font-display text-xl font-semibold text-[var(--teal)]/40">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display font-semibold text-foreground">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {s.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyChoose() {
  const icons = [HeartHandshake, Banknote, Eye, FileCheck2, HeadphonesIcon, Users];
  return (
    <section className="container-page py-14 md:py-20">
      <SectionHeader
        eyebrow="Why Choose Us"
        title="Experience you can trust, advice you can act on"
        description="Twelve years inside India’s top lenders — now working independently for you."
      />
      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reasonsToChoose.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
            className="group surface-card p-6 hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)] hover:border-[color-mix(in_oklab,var(--teal)_45%,var(--border))] transition-all"
          >
            {(() => {
              const Ic = icons[i % icons.length];
              return (
                <div className="grid place-items-center h-12 w-12 rounded-xl bg-[color-mix(in_oklab,var(--teal)_12%,white)] text-[var(--teal)] group-hover:bg-[var(--teal)] group-hover:text-white transition-colors">
                  <Ic className="size-5" />
                </div>
              );
            })()}
            <h3 className="mt-4 font-display font-semibold text-foreground">{r.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{r.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function CaseStudies() {
  return (
    <section className="bg-[var(--surface-alt)] border-y border-border">
      <div className="container-page py-14 md:py-20">
        <SectionHeader
          eyebrow="Case Studies"
          title="Real outcomes, fully anonymised"
          description="A few representative engagements — challenge, solution and outcome. Names withheld; numbers verified."
        />
        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {caseStudies.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.article
                key={c.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="surface-card p-6 md:p-7 hover:-translate-y-0.5 hover:shadow-[var(--shadow-elevated)] transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="grid place-items-center h-12 w-12 rounded-xl bg-[color-mix(in_oklab,var(--teal)_12%,white)] text-[var(--teal)] shrink-0">
                    <Icon className="size-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] uppercase tracking-wide font-semibold text-[var(--teal)]">
                      {c.tag}
                    </div>
                    <h3 className="mt-1 font-display font-semibold text-lg text-foreground">
                      {c.title}
                    </h3>
                  </div>
                </div>
                <dl className="mt-5 space-y-3 text-sm">
                  <Row label="Challenge" value={c.challenge} />
                  <Row label="Solution" value={c.solution} />
                  <div className="mt-3 flex items-start gap-2 rounded-lg bg-[color-mix(in_oklab,var(--success)_10%,white)] border border-[color-mix(in_oklab,var(--success)_25%,var(--border))] px-3 py-2.5">
                    <TrendingDown className="size-4 text-[var(--success)] mt-0.5 shrink-0" />
                    <span className="text-foreground font-medium">{c.outcome}</span>
                  </div>
                </dl>
              </motion.article>
            );
          })}
        </div>
        <div className="mt-10 text-center">
          <Link to="/portfolio">
            <Button variant="soft">
              View all case studies <ArrowRight />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[11px] uppercase tracking-wide font-semibold text-muted-foreground">
        {label}
      </dt>
      <dd className="mt-0.5 text-foreground/90 leading-relaxed">{value}</dd>
    </div>
  );
}

function Partners() {
  return (
    <section className="container-page py-14 md:py-20 border-t border-border">
      <SectionHeader
        eyebrow="Trusted Lenders"
          title="Works with leading banks &amp; NBFCs"
          description="We are an independent DSA channel partner — not owned by or affiliated to any bank. We compare offers across our partner panel so you get the best fit."
      />
      <div className="mt-12">
        <PartnerStrip />
      </div>
    </section>
  );
}

function Achievements() {
  return (
    <section className="bg-[var(--navy)] text-white">
      <div className="container-page py-14 md:py-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1 text-xs font-medium tracking-wide text-[var(--teal-soft)] uppercase">
            <span className="size-1.5 rounded-full bg-[var(--teal-soft)]" />
            Track Record
          </div>
          <h2 className="mt-4 text-3xl md:text-[40px] font-semibold leading-tight">
            A decade of measurable outcomes.
          </h2>
          <p className="mt-4 text-white/70 leading-relaxed">
            Numbers from 12 years of structuring, negotiating and closing loans across India.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="rounded-xl border border-white/10 bg-white/5 p-6"
            >
              <div className="text-3xl md:text-4xl font-display font-semibold tracking-tight">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-sm text-white/65">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Counter({ value, suffix }: { value: number; suffix?: string }) {
  return <AnimatedCounter value={value} suffix={suffix} />;
}

function Testimonials() {
  return (
    <section className="container-page py-14 md:py-20">
      <SectionHeader
        eyebrow="Success Stories"
        title="What clients say after their loan is in hand"
      />
      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {testimonials.slice(0, 3).map((t, i) => (
          <TestimonialCard key={t.name} t={t} index={i} />
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link to="/testimonials">
          <Button variant="soft">View all success stories <ArrowRight /></Button>
        </Link>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="container-page py-14 md:py-20 border-t border-border">
      <SectionHeader
        eyebrow="FAQ"
        title="Answers to the questions we’re asked the most"
      />
      <div className="mt-10 max-w-3xl mx-auto">
        <FaqAccordion limit={5} />
        <div className="mt-6 text-center">
          <Link to="/faq" className="text-sm font-medium text-[var(--teal)] hover:underline">
            See all FAQs →
          </Link>
        </div>
      </div>
    </section>
  );
}

function ContactCTA() {
  return (
    <section className="container-page pt-6 pb-2">
      <div className="relative overflow-hidden rounded-3xl navy-bg p-8 md:p-14">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[var(--teal)]/20 blur-3xl" />
        <div className="relative grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-[40px] font-semibold leading-tight">
              Ready to talk to a real loan expert?
            </h2>
            <p className="mt-4 text-white/70 max-w-lg leading-relaxed">
              Get a free, no-obligation consultation. We’ll review your profile, suggest 2–3 best-fit
              lenders and tell you exactly what to expect — in plain language.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Link to="/contact">
              <Button variant="hero" size="xl">Request Callback</Button>
            </Link>
            <a href={advisor.whatsapp} target="_blank" rel="noreferrer">
              <Button variant="whatsapp" size="xl">
                <MessageCircle /> WhatsApp
              </Button>
            </a>
            <a href={advisor.phoneHref}>
              <Button size="xl" className="bg-white text-[var(--navy)] hover:bg-white/90">
                <Phone /> Call Now
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Resources() {
  const docs = [
    "PAN & Aadhaar (KYC)",
    "Latest 3 months salary slips / 2 yrs ITR",
    "6 months bank statements",
    "Property documents (for secured loans)",
    "Form 16 / GST returns (if applicable)",
    "Existing loan statement (for BT / top-up)",
  ];
  return (
    <section className="container-page py-14 md:py-20 border-t border-border">
      <SectionHeader
        eyebrow="Resources"
        title="Tools & checklists to get you loan-ready"
        description="Use these to walk into your application fully prepared — or just call us and we'll do it with you."
      />
      <div className="mt-12 grid lg:grid-cols-2 gap-5">
        <div className="surface-card p-6 md:p-8">
          <div className="flex items-center gap-3">
            <div className="grid place-items-center h-11 w-11 rounded-xl bg-[color-mix(in_oklab,var(--gold)_20%,white)] text-[var(--navy)]">
              <FileText className="size-5" />
            </div>
            <h3 className="font-display font-semibold text-lg text-foreground">
              Common Document Checklist
            </h3>
          </div>
          <ul className="mt-5 grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
            {docs.map((d) => (
              <li key={d} className="flex items-start gap-2 text-sm text-foreground">
                <CheckCircle2 className="size-4 mt-0.5 text-[var(--teal)] shrink-0" />
                {d}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-xs text-muted-foreground">
            We share a personalised checklist after the first call based on your loan type & profile.
          </p>
        </div>

        <EmiCalculator />
      </div>
    </section>
  );
}
