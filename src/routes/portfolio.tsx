import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Trophy, Building2, Users, Briefcase, IndianRupee, Landmark } from "lucide-react";
import { stats, testimonials } from "@/lib/mock-data";
import { SectionHeader } from "@/components/section-header";
import { StatCard } from "@/components/stat-card";
import { PartnerStrip } from "@/components/partner-strip";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Case Studies — Anonymised client journeys" },
      {
        name: "description",
        content:
          "Anonymised client case studies showing how the right loan structuring delivered better rates, faster sanctions and cleaner approvals.",
      },
      { property: "og:title", content: "Case Studies — Anonymised client journeys" },
      {
        property: "og:description",
        content: "Real client outcomes across home, business, LAP and balance transfer loans.",
      },
    ],
  }),
  component: PortfolioPage,
});

const highlights = [
  {
    icon: Trophy,
    title: "₹12 Cr LAP for a textile exporter",
    sub: "Surat · 2024",
    body: "Structured a multi-property LAP at 9.05% across two NBFCs, including ₹3.2 Cr balance transfer from a higher-rate lender.",
  },
  {
    icon: Building2,
    title: "₹4.5 Cr commercial property loan",
    sub: "Mumbai BKC · 2023",
    body: "Coordinated legal & technical, negotiated zero processing fee for a Pvt Ltd healthcare client.",
  },
  {
    icon: Users,
    title: "40+ MSME loans during Covid-19",
    sub: "2020 – 2021",
    body: "Helped small businesses access ECLGS-linked working capital with minimal documentation friction.",
  },
  {
    icon: Briefcase,
    title: "DSA channel growth",
    sub: "Tata Capital · 2019 – 2022",
    body: "Built and led a 40-member DSA channel across Maharashtra & Gujarat, contributing ₹620 Cr of disbursal.",
  },
];

const industries = [
  "Salaried Professionals",
  "Doctors & CAs",
  "Manufacturing",
  "Trading & Wholesale",
  "Hospitality",
  "IT & Services",
  "Retail Chains",
  "Real Estate Developers",
  "Healthcare",
  "Pharma Distributors",
];

function PortfolioPage() {
  return (
    <>
      <section className="hero-bg border-b border-border">
        <div className="container-page py-16 md:py-20 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-[var(--teal)] uppercase tracking-wide">
            Case Studies
          </div>
          <h1 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight leading-tight max-w-3xl mx-auto">
            Anonymised client journeys.{" "}
            <span className="text-[var(--teal)]">Real outcomes.</span>
          </h1>
          <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A selection of recent client engagements — names withheld, numbers verified. See how
            the right structuring changes the loan outcome.
          </p>
        </div>
      </section>

      <section className="container-page py-14 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {stats.map((s, i) => (
            <StatCard key={s.label} {...s} index={i} />
          ))}
        </div>
      </section>

      <section className="bg-[var(--surface-alt)] border-y border-border">
        <div className="container-page py-14 md:py-20">
          <SectionHeader
            eyebrow="Case Highlights"
            title="Selected deals from recent years"
            description="A few representative examples of how the right structuring changes the outcome."
          />
          <div className="mt-12 grid md:grid-cols-2 gap-4">
            {highlights.map((h, i) => {
              const Icon = h.icon;
              return (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: i * 0.06 }}
                  className="surface-card p-6"
                >
                  <div className="flex items-center gap-3">
                    <div className="grid place-items-center h-11 w-11 rounded-lg bg-[color-mix(in_oklab,var(--teal)_12%,white)] text-[var(--teal)]">
                      <Icon className="size-5" />
                    </div>
                    <div>
                      <div className="font-display font-semibold text-foreground">{h.title}</div>
                      <div className="text-xs text-muted-foreground">{h.sub}</div>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{h.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container-page py-14 md:py-20">
        <SectionHeader
          eyebrow="Lender Network"
          title="28+ partner banks & NBFCs"
          description="Pan-India panel covering private banks, public sector & specialised NBFCs."
        />
        <div className="mt-10">
          <PartnerStrip />
        </div>
      </section>

      <section className="container-page py-14 md:py-20 grid lg:grid-cols-12 gap-10 border-t border-border">
        <div className="lg:col-span-5">
          <SectionHeader
            eyebrow="Client Industries"
            title="Profiles I’ve helped fund"
            align="left"
            description="From a single salaried home buyer to ₹50 Cr+ corporate borrowers — every loan structure starts with the borrower’s profile."
          />
        </div>
        <div className="lg:col-span-7 flex flex-wrap gap-2.5 items-start">
          {industries.map((c) => (
            <span
              key={c}
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-3.5 py-2 text-sm text-foreground"
            >
              <Landmark className="size-3.5 text-[var(--teal)]" /> {c}
            </span>
          ))}
        </div>
      </section>

      <section className="container-page pb-12">
        <div className="surface-card p-8 md:p-10 grid lg:grid-cols-3 gap-6 items-center">
          <div className="lg:col-span-2">
            <h3 className="text-2xl md:text-3xl font-display font-semibold text-foreground">
              {testimonials.length} verified success stories — and counting.
            </h3>
            <p className="mt-3 text-muted-foreground max-w-xl">
              Real clients. Real numbers. Read what they had to say about working with us.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Link to="/testimonials">
              <Button variant="hero" size="lg">
                <IndianRupee /> View Success Stories
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}