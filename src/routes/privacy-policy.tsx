import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { advisor } from "@/lib/mock-data";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: `Privacy Policy — ${advisor.name}` },
      {
        name: "description",
        content: `Privacy Policy for ${advisor.name}. Learn how we collect, use, and protect your information when you enquire about loans.`,
      },
    ],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <>
      <section className="hero-bg border-b border-border">
        <div className="container-page py-14 md:py-16 text-center">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
            Privacy Policy
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
                1. Introduction
              </h2>
              <p>
                Welcome to the website of <strong>{advisor.name}</strong> ("we," "us," or "our"). 
                We are committed to protecting your personal information and your right to privacy. 
                This Privacy Policy explains how we collect, use, and safeguard your data when you 
                visit our website and use our loan advisory services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground border-b border-border pb-3 mb-5">
                2. Information We Collect
              </h2>
              <p>We collect personal information that you voluntarily provide to us when you fill out an enquiry form on our website. This includes:</p>
              <ul className="list-disc pl-5 mt-4 space-y-2">
                <li>Full Name</li>
                <li>Email Address</li>
                <li>Phone Number</li>
                <li>City / Area of Residence</li>
                <li>Loan Enquiry Details (Inquiry Type, Required Amount)</li>
                <li>Messages or comments submitted through the contact form</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground border-b border-border pb-3 mb-5">
                3. How We Use Your Information
              </h2>
              <p>We use the information we collect solely for professional purposes, including:</p>
              <ul className="list-disc pl-5 mt-4 space-y-2">
                <li>Responding to your loan enquiries and callback requests.</li>
                <li>Providing personalized loan consultation and guidance.</li>
                <li>Contacting you via phone, WhatsApp, or email regarding your specific requirements.</li>
                <li>Assisting with documentation and bank matching for loan applications.</li>
                <li>Improving our website and service delivery.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground border-b border-border pb-3 mb-5">
                4. Data Processing and Email Services
              </h2>
              <p>
                To provide efficient communication, your enquiries submitted via our website may be 
                processed using third-party transactional email providers such as **Resend**. 
                These services are used strictly to deliver your enquiry to us and are not 
                authorized to use your data for marketing or any other purposes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground border-b border-border pb-3 mb-5">
                5. Data Sharing and Disclosure
              </h2>
              <p>
                We do not sell, rent, or trade your personal information to third parties. 
                Your information is shared only when necessary to facilitate your requested 
                services — such as when submitting your application to a partner bank or NBFC 
                on your behalf — or to comply with legal obligations.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground border-b border-border pb-3 mb-5">
                6. Data Security
              </h2>
              <p>
                We implement reasonable technical and organizational security measures to protect 
                the security of any personal information we process. However, please also 
                remember that we cannot guarantee that the internet itself is 100% secure. 
                Transmission of personal information to and from our website is at your own risk.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground border-b border-border pb-3 mb-5">
                7. Cookies and Analytics
              </h2>
              <p>
                Our website may use standard cookies or basic analytics to understand website 
                traffic and improve user experience. You can choose to set your web browser 
                to refuse cookies, or to alert you when cookies are being sent.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground border-b border-border pb-3 mb-5">
                8. Your Rights
              </h2>
              <p>
                In accordance with applicable laws, you have the right to request access to, 
                correction of, or deletion of the personal information we collect from you. 
                To exercise these rights, please contact us at <strong>{advisor.email}</strong>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground border-b border-border pb-3 mb-5">
                9. Contact Us
              </h2>
              <p>
                If you have questions or comments about this policy, you may contact us at:<br /><br />
                <strong>{advisor.name}</strong><br />
                {advisor.city}<br />
                Email: {advisor.email}<br />
                Phone: {advisor.phone}
              </p>
            </section>
          </div>
        </motion.div>
      </section>
    </>
  );
}
