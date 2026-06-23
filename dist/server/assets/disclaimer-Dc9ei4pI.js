import { t as advisor } from "./mock-data-tJxPjfvo.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Banknote, Info, Landmark, ShieldAlert } from "lucide-react";
import { motion } from "framer-motion";
//#region src/routes/disclaimer.tsx?tsr-split=component
function DisclaimerPage() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("section", {
		className: "hero-bg border-b border-border",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container-page py-14 md:py-16 text-center",
			children: [/* @__PURE__ */ jsx("h1", {
				className: "text-3xl md:text-4xl font-semibold tracking-tight text-foreground",
				children: "Legal Disclaimer"
			}), /* @__PURE__ */ jsx("p", {
				className: "mt-4 text-muted-foreground font-medium",
				children: "Important information for all website visitors & loan enquirers."
			})]
		})
	}), /* @__PURE__ */ jsx("section", {
		className: "container-page py-16 md:py-20",
		children: /* @__PURE__ */ jsxs(motion.div, {
			initial: {
				opacity: 0,
				y: 15
			},
			animate: {
				opacity: 1,
				y: 0
			},
			transition: { duration: .5 },
			className: "max-w-4xl mx-auto",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "grid gap-6",
				children: [
					/* @__PURE__ */ jsx(DisclaimerBlock, {
						icon: ShieldAlert,
						title: "Independent Advisor Status",
						content: `This website and the services provided by ${advisor.name} are that of an independent Loan Advisor and Direct Selling Agent (DSA). We are NOT a bank, Non-Banking Financial Company (NBFC), or financial institution of any kind.`,
						highlight: true
					}),
					/* @__PURE__ */ jsx(DisclaimerBlock, {
						icon: Landmark,
						title: "Lending Authorities",
						content: "Loan approval, credit assessment, eligibility criteria, interest rates, processing fees, and final disbursal decisions are determined solely by the respective financial institutions (Banks/NBFCs) partnered with us. We act as a facilitator and have no authority to grant loans ourselves."
					}),
					/* @__PURE__ */ jsx(DisclaimerBlock, {
						icon: Banknote,
						title: "Rates and Terms",
						content: "The interest rates, processing fees, and terms mentioned on this website are based on the latest information available from lenders and are subject to change according to market conditions and bank policies. Final terms are only confirmed upon official sanction by the lender."
					}),
					/* @__PURE__ */ jsx(DisclaimerBlock, {
						icon: Info,
						title: "No Guarantees",
						content: "While we provide expert guidance and documentation support to maximize your chances of success, we do not guarantee loan approval or specific interest rates. Every application is subject to individual creditworthiness and lender-specific policies."
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "surface-card p-8 bg-[var(--surface-alt)] border-[var(--teal)]/20 text-center mt-6",
						children: [/* @__PURE__ */ jsx("h3", {
							className: "font-display font-semibold text-lg text-foreground mb-4",
							children: "Advisory Recommendation"
						}), /* @__PURE__ */ jsx("p", {
							className: "text-muted-foreground leading-relaxed",
							children: "We strongly advise all our clients and website visitors to thoroughly read and understand the loan agreement and all associated terms and conditions provided by the lender before signing any document or committing to a financial product."
						})]
					})
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "mt-12 text-center text-sm text-muted-foreground",
				children: [
					"If you have any questions regarding this disclaimer, please reach out to us at ",
					/* @__PURE__ */ jsx("strong", { children: advisor.email }),
					"."
				]
			})]
		})
	})] });
}
function DisclaimerBlock({ icon: Icon, title, content, highlight = false }) {
	return /* @__PURE__ */ jsxs("div", {
		className: `surface-card p-6 md:p-8 flex gap-6 ${highlight ? "border-[var(--teal)] shadow-md bg-[color-mix(in_oklab,var(--teal)_3%,white)]" : ""}`,
		children: [/* @__PURE__ */ jsx("div", {
			className: `grid place-items-center h-12 w-12 rounded-xl shrink-0 ${highlight ? "bg-[var(--teal)] text-white" : "bg-[color-mix(in_oklab,var(--teal)_12%,white)] text-[var(--teal)]"}`,
			children: /* @__PURE__ */ jsx(Icon, { className: "size-6" })
		}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
			className: "font-display font-semibold text-xl text-foreground mb-3",
			children: title
		}), /* @__PURE__ */ jsx("p", {
			className: "text-muted-foreground leading-relaxed",
			children: content
		})] })]
	});
}
//#endregion
export { DisclaimerPage as component };
