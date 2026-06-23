import { createFileRoute, Link } from "@tanstack/react-router";
import { testimonials } from "@/lib/mock-data";
import { TestimonialCard } from "@/components/testimonial-card";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Client Success Stories — Real outcomes, real numbers" },
      {
        name: "description",
        content:
          "Read verified client reviews of our loan advisory service: home loans, business loans, LAP, personal loans and balance transfers.",
      },
      { property: "og:title", content: "Client Success Stories — Real outcomes, real numbers" },
      {
        property: "og:description",
        content: "What clients say after their loan is sanctioned and disbursed.",
      },
    ],
  }),
  component: TestimonialsPage,
});

function TestimonialsPage() {
  return (
    <>
      <section className="hero-bg border-b border-border">
        <div className="container-page py-16 md:py-20 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-[var(--teal)] uppercase tracking-wide">
            Success Stories
          </div>
          <h1 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight max-w-3xl mx-auto leading-tight">
            What clients say after their{" "}
            <span className="text-[var(--teal)]">loan is in hand</span>.
          </h1>
          <p className="mt-5 text-muted-foreground max-w-2xl mx-auto">
            Outcomes from recent client engagements — names and amounts shared with consent.
          </p>
        </div>
      </section>

      <section className="container-page py-14 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} t={t} index={i} />
          ))}
        </div>
      </section>

      <section className="container-page pb-16">
        <div className="surface-card p-8 md:p-10 text-center">
          <SectionHeader
            eyebrow="Ready when you are"
            title="Let’s make your loan the next success story."
          />
          <div className="mt-7">
            <Link to="/contact">
              <Button variant="hero" size="lg">Request a Callback</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}