import { l as stats, u as testimonials } from "./mock-data-tJxPjfvo.js";
import { t as Button } from "./button-D0FFsf6X.js";
import { t as SectionHeader } from "./section-header-LIqCcXFA.js";
import { n as StatCard, t as PartnerStrip } from "./partner-strip-CQXL9NFU.js";
import { Link } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Briefcase, Building2, IndianRupee, Landmark, Trophy, Users } from "lucide-react";
import { motion } from "framer-motion";
//#region src/routes/portfolio.tsx?tsr-split=component
var highlights = [
	{
		icon: Trophy,
		title: "₹12 Cr LAP for a textile exporter",
		sub: "Surat · 2024",
		body: "Structured a multi-property LAP at 9.05% across two NBFCs, including ₹3.2 Cr balance transfer from a higher-rate lender."
	},
	{
		icon: Building2,
		title: "₹4.5 Cr commercial property loan",
		sub: "Mumbai BKC · 2023",
		body: "Coordinated legal & technical, negotiated zero processing fee for a Pvt Ltd healthcare client."
	},
	{
		icon: Users,
		title: "40+ MSME loans during Covid-19",
		sub: "2020 – 2021",
		body: "Helped small businesses access ECLGS-linked working capital with minimal documentation friction."
	},
	{
		icon: Briefcase,
		title: "DSA channel growth",
		sub: "Tata Capital · 2019 – 2022",
		body: "Built and led a 40-member DSA channel across Maharashtra & Gujarat, contributing ₹620 Cr of disbursal."
	}
];
var industries = [
	"Salaried Professionals",
	"Doctors & CAs",
	"Manufacturing",
	"Trading & Wholesale",
	"Hospitality",
	"IT & Services",
	"Retail Chains",
	"Real Estate Developers",
	"Healthcare",
	"Pharma Distributors"
];
function PortfolioPage() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx("section", {
			className: "hero-bg border-b border-border",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-page py-16 md:py-20 text-center",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-[var(--teal)] uppercase tracking-wide",
						children: "Case Studies"
					}),
					/* @__PURE__ */ jsxs("h1", {
						className: "mt-5 text-4xl md:text-5xl font-semibold tracking-tight leading-tight max-w-3xl mx-auto",
						children: [
							"Anonymised client journeys.",
							" ",
							/* @__PURE__ */ jsx("span", {
								className: "text-[var(--teal)]",
								children: "Real outcomes."
							})
						]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-5 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed",
						children: "A selection of recent client engagements — names withheld, numbers verified. See how the right structuring changes the loan outcome."
					})
				]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "container-page py-14 md:py-20",
			children: /* @__PURE__ */ jsx("div", {
				className: "grid grid-cols-2 md:grid-cols-3 gap-4",
				children: stats.map((s, i) => /* @__PURE__ */ jsx(StatCard, {
					...s,
					index: i
				}, s.label))
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "bg-[var(--surface-alt)] border-y border-border",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-page py-14 md:py-20",
				children: [/* @__PURE__ */ jsx(SectionHeader, {
					eyebrow: "Case Highlights",
					title: "Selected deals from recent years",
					description: "A few representative examples of how the right structuring changes the outcome."
				}), /* @__PURE__ */ jsx("div", {
					className: "mt-12 grid md:grid-cols-2 gap-4",
					children: highlights.map((h, i) => {
						const Icon = h.icon;
						return /* @__PURE__ */ jsxs(motion.div, {
							initial: {
								opacity: 0,
								y: 16
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: {
								once: true,
								margin: "-60px"
							},
							transition: { delay: i * .06 },
							className: "surface-card p-6",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ jsx("div", {
									className: "grid place-items-center h-11 w-11 rounded-lg bg-[color-mix(in_oklab,var(--teal)_12%,white)] text-[var(--teal)]",
									children: /* @__PURE__ */ jsx(Icon, { className: "size-5" })
								}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
									className: "font-display font-semibold text-foreground",
									children: h.title
								}), /* @__PURE__ */ jsx("div", {
									className: "text-xs text-muted-foreground",
									children: h.sub
								})] })]
							}), /* @__PURE__ */ jsx("p", {
								className: "mt-4 text-sm text-muted-foreground leading-relaxed",
								children: h.body
							})]
						}, h.title);
					})
				})]
			})
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "container-page py-14 md:py-20",
			children: [/* @__PURE__ */ jsx(SectionHeader, {
				eyebrow: "Lender Network",
				title: "28+ partner banks & NBFCs",
				description: "Pan-India panel covering private banks, public sector & specialised NBFCs."
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-10",
				children: /* @__PURE__ */ jsx(PartnerStrip, {})
			})]
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "container-page py-14 md:py-20 grid lg:grid-cols-12 gap-10 border-t border-border",
			children: [/* @__PURE__ */ jsx("div", {
				className: "lg:col-span-5",
				children: /* @__PURE__ */ jsx(SectionHeader, {
					eyebrow: "Client Industries",
					title: "Profiles I’ve helped fund",
					align: "left",
					description: "From a single salaried home buyer to ₹50 Cr+ corporate borrowers — every loan structure starts with the borrower’s profile."
				})
			}), /* @__PURE__ */ jsx("div", {
				className: "lg:col-span-7 flex flex-wrap gap-2.5 items-start",
				children: industries.map((c) => /* @__PURE__ */ jsxs("span", {
					className: "inline-flex items-center gap-2 rounded-lg border border-border bg-card px-3.5 py-2 text-sm text-foreground",
					children: [
						/* @__PURE__ */ jsx(Landmark, { className: "size-3.5 text-[var(--teal)]" }),
						" ",
						c
					]
				}, c))
			})]
		}),
		/* @__PURE__ */ jsx("section", {
			className: "container-page pb-12",
			children: /* @__PURE__ */ jsxs("div", {
				className: "surface-card p-8 md:p-10 grid lg:grid-cols-3 gap-6 items-center",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "lg:col-span-2",
					children: [/* @__PURE__ */ jsxs("h3", {
						className: "text-2xl md:text-3xl font-display font-semibold text-foreground",
						children: [testimonials.length, " verified success stories — and counting."]
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-3 text-muted-foreground max-w-xl",
						children: "Real clients. Real numbers. Read what they had to say about working with us."
					})]
				}), /* @__PURE__ */ jsx("div", {
					className: "flex flex-wrap gap-3 lg:justify-end",
					children: /* @__PURE__ */ jsx(Link, {
						to: "/testimonials",
						children: /* @__PURE__ */ jsxs(Button, {
							variant: "hero",
							size: "lg",
							children: [/* @__PURE__ */ jsx(IndianRupee, {}), " View Success Stories"]
						})
					})
				})]
			})
		})
	] });
}
//#endregion
export { PortfolioPage as component };
