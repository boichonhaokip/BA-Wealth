import { createFileRoute, Link } from "@tanstack/react-router";
import { FaqAccordion } from "@/components/faq-accordion";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Loan documents, approval time, fees & more" },
      {
        name: "description",
        content:
          "Answers to common questions about documents required, approval timelines, fees, supported loan types and eligibility.",
      },
      { property: "og:title", content: "FAQ — Loan documents, approval time, fees & more" },
      {
        property: "og:description",
        content: "Quick answers about how the loan advisory process works.",
      },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <>
      <section className="hero-bg border-b border-border">
        <div className="container-page py-14 md:py-20 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-[var(--teal)] uppercase tracking-wide">
            FAQ
          </div>
          <h1 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight max-w-3xl mx-auto leading-tight">
            Frequently asked questions
          </h1>
          <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
            Quick, honest answers about documents, timelines, fees and what to expect.
          </p>
        </div>
      </section>

      <section className="container-page py-14 md:py-20 max-w-3xl">
        <FaqAccordion />

        <div className="mt-12 surface-card p-8 text-center">
          <SectionHeader title="Didn’t find your answer?" eyebrow="We’re here" />
          <div className="mt-6">
            <Link to="/contact">
              <Button variant="hero">Ask us directly</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}