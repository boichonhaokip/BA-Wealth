import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ShieldAlert, Info, Banknote, Landmark } from "lucide-react";
import { advisor } from "@/lib/mock-data";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title: `Legal Disclaimer — ${advisor.name}` },
      {
        name: "description",
        content: `Official legal disclaimer for ${advisor.name}. Clarifying the independent nature of our loan advisory services.`,
      },
    ],
  }),
  component: DisclaimerPage,
});

function DisclaimerPage() {
  return (
    <>
      <section className="hero-bg border-b border-border">
        <div className="container-page py-14 md:py-16 text-center">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
            Legal Disclaimer
          </h1>
          <p className="mt-4 text-muted-foreground font-medium">Important information for all website visitors & loan enquirers.</p>
        </div>
      </section>

      <section className="container-page py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid gap-6">
            <DisclaimerBlock 
              icon={ShieldAlert}
              title="Independent Advisor Status"
              content={`This website and the services provided by ${advisor.name} are that of an independent Loan Advisor and Direct Selling Agent (DSA). We are NOT a bank, Non-Banking Financial Company (NBFC), or financial institution of any kind.`}
              highlight
            />

            <DisclaimerBlock 
              icon={Landmark}
              title="Lending Authorities"
              content="Loan approval, credit assessment, eligibility criteria, interest rates, processing fees, and final disbursal decisions are determined solely by the respective financial institutions (Banks/NBFCs) partnered with us. We act as a facilitator and have no authority to grant loans ourselves."
            />

            <DisclaimerBlock 
              icon={Banknote}
              title="Rates and Terms"
              content="The interest rates, processing fees, and terms mentioned on this website are based on the latest information available from lenders and are subject to change according to market conditions and bank policies. Final terms are only confirmed upon official sanction by the lender."
            />

            <DisclaimerBlock 
              icon={Info}
              title="No Guarantees"
              content="While we provide expert guidance and documentation support to maximize your chances of success, we do not guarantee loan approval or specific interest rates. Every application is subject to individual creditworthiness and lender-specific policies."
            />

            <div className="surface-card p-8 bg-[var(--surface-alt)] border-[var(--teal)]/20 text-center mt-6">
              <h3 className="font-display font-semibold text-lg text-foreground mb-4">Advisory Recommendation</h3>
              <p className="text-muted-foreground leading-relaxed">
                We strongly advise all our clients and website visitors to thoroughly read and understand the 
                loan agreement and all associated terms and conditions provided by the lender before 
                signing any document or committing to a financial product.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center text-sm text-muted-foreground">
            If you have any questions regarding this disclaimer, please reach out to us at <strong>{advisor.email}</strong>.
          </div>
        </motion.div>
      </section>
    </>
  );
}

function DisclaimerBlock({ 
  icon: Icon, 
  title, 
  content,
  highlight = false 
}: { 
  icon: any; 
  title: string; 
  content: string;
  highlight?: boolean;
}) {
  return (
    <div className={`surface-card p-6 md:p-8 flex gap-6 ${highlight ? 'border-[var(--teal)] shadow-md bg-[color-mix(in_oklab,var(--teal)_3%,white)]' : ''}`}>
      <div className={`grid place-items-center h-12 w-12 rounded-xl shrink-0 ${highlight ? 'bg-[var(--teal)] text-white' : 'bg-[color-mix(in_oklab,var(--teal)_12%,white)] text-[var(--teal)]'}`}>
        <Icon className="size-6" />
      </div>
      <div>
        <h2 className="font-display font-semibold text-xl text-foreground mb-3">{title}</h2>
        <p className="text-muted-foreground leading-relaxed">{content}</p>
      </div>
    </div>
  );
}
