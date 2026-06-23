import { t as advisor } from "./mock-data-tJxPjfvo.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
//#region src/routes/terms-and-conditions.tsx?tsr-split=component
function TermsPage() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("section", {
		className: "hero-bg border-b border-border",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container-page py-14 md:py-16 text-center",
			children: [/* @__PURE__ */ jsx("h1", {
				className: "text-3xl md:text-4xl font-semibold tracking-tight text-foreground",
				children: "Terms & Conditions"
			}), /* @__PURE__ */ jsx("p", {
				className: "mt-4 text-muted-foreground",
				children: "Last updated: June 2026"
			})]
		})
	}), /* @__PURE__ */ jsx("section", {
		className: "container-page py-16 md:py-20",
		children: /* @__PURE__ */ jsx(motion.div, {
			initial: {
				opacity: 0,
				y: 15
			},
			animate: {
				opacity: 1,
				y: 0
			},
			transition: { duration: .5 },
			className: "max-w-3xl mx-auto prose prose-slate prose-headings:font-display prose-headings:font-semibold prose-a:text-[var(--teal)] prose-strong:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground",
			children: /* @__PURE__ */ jsxs("div", {
				className: "space-y-10",
				children: [
					/* @__PURE__ */ jsxs("section", { children: [/* @__PURE__ */ jsx("h2", {
						className: "text-xl font-semibold text-foreground border-b border-border pb-3 mb-5",
						children: "1. Acceptance of Terms"
					}), /* @__PURE__ */ jsx("p", { children: "By accessing and using this website, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use this website or our services." })] }),
					/* @__PURE__ */ jsxs("section", { children: [
						/* @__PURE__ */ jsx("h2", {
							className: "text-xl font-semibold text-foreground border-b border-border pb-3 mb-5",
							children: "2. Nature of Services"
						}),
						/* @__PURE__ */ jsxs("p", { children: [
							"This website is operated by ",
							/* @__PURE__ */ jsx("strong", { children: advisor.name }),
							", who acts as an independent Loan Advisor and Direct Selling Agent (DSA). We provide guidance, eligibility assessment, documentation support, and bank-matching services to assist you in obtaining loans from various financial institutions."
						] }),
						/* @__PURE__ */ jsxs("p", {
							className: "mt-3 bg-[var(--surface-alt)] p-4 rounded-lg font-medium border border-[var(--teal)]/20 shadow-sm",
							children: [/* @__PURE__ */ jsx("strong", { children: "Important:" }), " We are NOT a bank, NBFC, or financial institution. We do not lend money directly. All loan approvals, interest rates, and final decisions are made solely by the respective lenders (Banks/NBFCs)."]
						})
					] }),
					/* @__PURE__ */ jsxs("section", { children: [/* @__PURE__ */ jsx("h2", {
						className: "text-xl font-semibold text-foreground border-b border-border pb-3 mb-5",
						children: "3. Accuracy of Information"
					}), /* @__PURE__ */ jsx("p", { children: "You are responsible for ensuring that all information you provide through our enquiry forms or during consultation is accurate, current, and complete. Providing false or misleading information may lead to the rejection of your loan application by partner institutions." })] }),
					/* @__PURE__ */ jsxs("section", { children: [/* @__PURE__ */ jsx("h2", {
						className: "text-xl font-semibold text-foreground border-b border-border pb-3 mb-5",
						children: "4. Informational Use Only"
					}), /* @__PURE__ */ jsx("p", { children: "The content provided on this website, including loan interest rates and eligibility criteria, is for informational purposes only and is subject to change without notice as per the latest policies of the respective lenders." })] }),
					/* @__PURE__ */ jsxs("section", { children: [/* @__PURE__ */ jsx("h2", {
						className: "text-xl font-semibold text-foreground border-b border-border pb-3 mb-5",
						children: "5. Limitation of Liability"
					}), /* @__PURE__ */ jsxs("p", { children: [
						"While we strive to provide the best guidance, ",
						/* @__PURE__ */ jsx("strong", { children: advisor.name }),
						"shall not be held liable for any decisions made by banks or NBFCs regarding your loan application, any delays in processing, or any financial losses resulting from the use of our website or services."
					] })] }),
					/* @__PURE__ */ jsxs("section", { children: [/* @__PURE__ */ jsx("h2", {
						className: "text-xl font-semibold text-foreground border-b border-border pb-3 mb-5",
						children: "6. Intellectual Property"
					}), /* @__PURE__ */ jsxs("p", { children: [
						"All content, branding, and materials on this website are the intellectual property of ",
						/* @__PURE__ */ jsx("strong", { children: advisor.name }),
						" unless otherwise stated. Reproduction or distribution of any part of this website without written consent is prohibited."
					] })] }),
					/* @__PURE__ */ jsxs("section", { children: [/* @__PURE__ */ jsx("h2", {
						className: "text-xl font-semibold text-foreground border-b border-border pb-3 mb-5",
						children: "7. Privacy"
					}), /* @__PURE__ */ jsx("p", { children: "Your use of this website is also governed by our Privacy Policy. Please review it to understand our practices regarding data collection and use." })] }),
					/* @__PURE__ */ jsxs("section", { children: [/* @__PURE__ */ jsx("h2", {
						className: "text-xl font-semibold text-foreground border-b border-border pb-3 mb-5",
						children: "8. Changes to Terms"
					}), /* @__PURE__ */ jsx("p", { children: "We reserve the right to modify these Terms and Conditions at any time. Any changes will be posted on this page with an updated \"Last updated\" date." })] }),
					/* @__PURE__ */ jsxs("section", { children: [/* @__PURE__ */ jsx("h2", {
						className: "text-xl font-semibold text-foreground border-b border-border pb-3 mb-5",
						children: "9. Governing Law"
					}), /* @__PURE__ */ jsxs("p", { children: [
						"These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising out of the use of this website shall be subject to the exclusive jurisdiction of the courts in ",
						advisor.city,
						"."
					] })] })
				]
			})
		})
	})] });
}
//#endregion
export { TermsPage as component };
