import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { advisor } from "@/lib/mock-data";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: [
      { title: `Terms & Conditions — ${advisor.name}` },
      {
        name: "description",
        content: `Terms and Conditions for using the loan advisory services of ${advisor.name}.`,
      },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <>
      <section className="hero-bg border-b border-border">
        <div className="container-page py-14 md:py-16 text-center">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
            Terms & Conditions
          </h1>
          <p className="mt-4 text-muted-foreground">Last updated: June 2026</p>
        </div>
      </section>

      <section className="container-page py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto prose prose-slate prose-headings:font-display prose-headings:font-semibold prose-a:text-[var(--teal)] prose-strong:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground"
        >
          <div className="space-y-10">
            <section>
              <h2 className="text-xl font-semibold text-foreground border-b border-border pb-3 mb-5">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing and using this website, you agree to be bound by these Terms and 
                Conditions. If you do not agree with any part of these terms, you must not 
                use this website or our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground border-b border-border pb-3 mb-5">
                2. Nature of Services
              </h2>
              <p>
                This website is operated by <strong>{advisor.name}</strong>, who acts as an 
                independent Loan Advisor and Direct Selling Agent (DSA). We provide guidance, 
                eligibility assessment, documentation support, and bank-matching services 
                to assist you in obtaining loans from various financial institutions.
              </p>
              <p className="mt-3 bg-[var(--surface-alt)] p-4 rounded-lg font-medium border border-[var(--teal)]/20 shadow-sm">
                <strong>Important:</strong> We are NOT a bank, NBFC, or financial institution. 
                We do not lend money directly. All loan approvals, interest rates, and final decisions 
                are made solely by the respective lenders (Banks/NBFCs).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground border-b border-border pb-3 mb-5">
                3. Accuracy of Information
              </h2>
              <p>
                You are responsible for ensuring that all information you provide through our 
                enquiry forms or during consultation is accurate, current, and complete. 
                Providing false or misleading information may lead to the rejection of your 
                loan application by partner institutions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground border-b border-border pb-3 mb-5">
                4. Informational Use Only
              </h2>
              <p>
                The content provided on this website, including loan interest rates and 
                eligibility criteria, is for informational purposes only and is subject to change 
                without notice as per the latest policies of the respective lenders.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground border-b border-border pb-3 mb-5">
                5. Limitation of Liability
              </h2>
              <p>
                While we strive to provide the best guidance, <strong>{advisor.name}</strong> 
                shall not be held liable for any decisions made by banks or NBFCs regarding your 
                loan application, any delays in processing, or any financial losses resulting 
                from the use of our website or services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground border-b border-border pb-3 mb-5">
                6. Intellectual Property
              </h2>
              <p>
                All content, branding, and materials on this website are the intellectual 
                property of <strong>{advisor.name}</strong> unless otherwise stated. 
                Reproduction or distribution of any part of this website without written 
                consent is prohibited.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground border-b border-border pb-3 mb-5">
                7. Privacy
              </h2>
              <p>
                Your use of this website is also governed by our Privacy Policy. Please review 
                it to understand our practices regarding data collection and use.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground border-b border-border pb-3 mb-5">
                8. Changes to Terms
              </h2>
              <p>
                We reserve the right to modify these Terms and Conditions at any time. 
                Any changes will be posted on this page with an updated "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground border-b border-border pb-3 mb-5">
                9. Governing Law
              </h2>
              <p>
                These terms shall be governed by and construed in accordance with the 
                laws of India. Any disputes arising out of the use of this website shall 
                be subject to the exclusive jurisdiction of the courts in {advisor.city}.
              </p>
            </section>
          </div>
        </motion.div>
      </section>
    </>
  );
}
