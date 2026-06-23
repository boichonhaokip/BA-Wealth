import { d as timeline, t as advisor } from "./mock-data-tJxPjfvo.js";
import { t as Button } from "./button-D0FFsf6X.js";
import { t as SectionHeader } from "./section-header-LIqCcXFA.js";
import { Link } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Award, Briefcase, Building2, CheckCircle2, GraduationCap, MapPin, ShieldCheck, Target, Users } from "lucide-react";
import { motion } from "framer-motion";
//#region src/components/timeline.tsx
function Timeline() {
	return /* @__PURE__ */ jsx("ol", {
		className: "relative border-l-2 border-border ml-3 space-y-8",
		children: timeline.map((t, i) => /* @__PURE__ */ jsxs(motion.li, {
			initial: {
				opacity: 0,
				x: -10
			},
			whileInView: {
				opacity: 1,
				x: 0
			},
			viewport: {
				once: true,
				margin: "-40px"
			},
			transition: {
				duration: .45,
				delay: i * .08
			},
			className: "pl-8",
			children: [
				/* @__PURE__ */ jsx("span", {
					className: "absolute -left-[14px] grid place-items-center h-7 w-7 rounded-full bg-[var(--teal)] text-white ring-4 ring-background",
					children: /* @__PURE__ */ jsx(Briefcase, { className: "size-3.5" })
				}),
				/* @__PURE__ */ jsx("div", {
					className: "text-xs font-medium text-muted-foreground uppercase tracking-wide",
					children: t.year
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-1 text-lg font-display font-semibold text-foreground",
					children: t.role
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-1.5 text-sm text-muted-foreground leading-relaxed",
					children: t.description
				})
			]
		}, t.year))
	});
}
//#endregion
//#region src/routes/about.tsx?tsr-split=component
var strengths = [
	{
		icon: Target,
		t: "Profile-first matching",
		d: "We match you to the lender, not the lender to you."
	},
	{
		icon: ShieldCheck,
		t: "Fully transparent",
		d: "Every charge disclosed in writing before sign-off."
	},
	{
		icon: Award,
		t: "12 years inside banks",
		d: "Underwriter mindset gives you a fundable file."
	},
	{
		icon: Users,
		t: "Self-employed expertise",
		d: "ITR, GST and turnover-based structuring specialist."
	}
];
function AboutPage() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx("section", {
			className: "hero-bg border-b border-border",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-page py-16 md:py-24 grid lg:grid-cols-12 gap-10 items-center",
				children: [/* @__PURE__ */ jsxs(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { duration: .5 },
					className: "lg:col-span-7",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-[var(--teal)] uppercase tracking-wide",
							children: "About"
						}),
						/* @__PURE__ */ jsxs("h1", {
							className: "mt-5 text-4xl md:text-5xl lg:text-[56px] font-semibold leading-[1.05] tracking-tight",
							children: [
								"An independent advisor with",
								" ",
								/* @__PURE__ */ jsx("span", {
									className: "text-[var(--teal)]",
									children: "a banker’s eye"
								}),
								" for your file."
							]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-5 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed",
							children: "I’ve spent 12 years inside India’s top retail lenders — underwriting, structuring and negotiating loans. Today, I use that exact playbook to get the best terms for my clients, not the bank."
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-7 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ jsx(Link, {
								to: "/contact",
								children: /* @__PURE__ */ jsx(Button, {
									variant: "hero",
									size: "lg",
									children: "Book Consultation"
								})
							}), /* @__PURE__ */ jsx("a", {
								href: advisor.phoneHref,
								children: /* @__PURE__ */ jsxs(Button, {
									variant: "soft",
									size: "lg",
									children: ["Call ", advisor.phone]
								})
							})]
						})
					]
				}), /* @__PURE__ */ jsx(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .5,
						delay: .1
					},
					className: "lg:col-span-5",
					children: /* @__PURE__ */ jsxs("div", {
						className: "surface-card p-6 md:p-7",
						children: [/* @__PURE__ */ jsx("div", {
							className: "aspect-[3/4] rounded-xl overflow-hidden border border-border bg-[var(--surface-alt)]",
							children: /* @__PURE__ */ jsx("img", {
								src: advisor.photo,
								alt: advisor.name,
								className: "w-full h-full object-cover"
							})
						}), /* @__PURE__ */ jsxs("div", {
							className: "mt-5",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "font-display font-semibold text-xl text-foreground",
									children: advisor.name
								}),
								/* @__PURE__ */ jsx("div", {
									className: "text-sm text-muted-foreground",
									children: advisor.role
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "mt-3 flex items-center gap-1.5 text-sm text-muted-foreground",
									children: [
										/* @__PURE__ */ jsx(MapPin, { className: "size-4 text-[var(--teal)]" }),
										" ",
										advisor.city
									]
								})
							]
						})]
					})
				})]
			})
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "container-page py-16 md:py-20 grid lg:grid-cols-12 gap-10",
			children: [/* @__PURE__ */ jsx("div", {
				className: "lg:col-span-5",
				children: /* @__PURE__ */ jsx(SectionHeader, {
					eyebrow: "My Mission",
					title: "Make every borrower an informed borrower.",
					align: "left",
					description: "A loan is a 10-to-25 year commitment. My job is to make sure you sign the right one — at the right rate, at the right bank, with no surprises three years later."
				})
			}), /* @__PURE__ */ jsx("div", {
				className: "lg:col-span-7 grid sm:grid-cols-2 gap-4",
				children: strengths.map((s, i) => /* @__PURE__ */ jsxs(motion.div, {
					initial: {
						opacity: 0,
						y: 14
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: { delay: i * .06 },
					className: "surface-card p-5",
					children: [
						/* @__PURE__ */ jsx(s.icon, { className: "size-5 text-[var(--teal)]" }),
						/* @__PURE__ */ jsx("div", {
							className: "mt-3 font-display font-semibold text-foreground",
							children: s.t
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-1.5 text-sm text-muted-foreground leading-relaxed",
							children: s.d
						})
					]
				}, s.t))
			})]
		}),
		/* @__PURE__ */ jsx("section", {
			className: "bg-[var(--surface-alt)] border-y border-border",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-page py-16 md:py-20 grid lg:grid-cols-12 gap-10",
				children: [/* @__PURE__ */ jsx("div", {
					className: "lg:col-span-5",
					children: /* @__PURE__ */ jsx(SectionHeader, {
						eyebrow: "Experience",
						title: "A decade across India’s top lenders.",
						align: "left",
						description: "From frontline relationship management to building DSA channels — here’s the journey."
					})
				}), /* @__PURE__ */ jsx("div", {
					className: "lg:col-span-7",
					children: /* @__PURE__ */ jsx(Timeline, {})
				})]
			})
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "container-page py-16 md:py-20 grid lg:grid-cols-2 gap-10",
			children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(SectionHeader, {
				eyebrow: "Coverage",
				title: "Cities & areas served",
				align: "left",
				description: "On-ground service across Western India, with full digital handling for NRI and outstation profiles."
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-8 flex flex-wrap gap-2",
				children: advisor.cities.map((c) => /* @__PURE__ */ jsxs("span", {
					className: "inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-1.5 text-sm text-foreground",
					children: [
						/* @__PURE__ */ jsx(MapPin, { className: "size-3.5 text-[var(--teal)]" }),
						" ",
						c
					]
				}, c))
			})] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(SectionHeader, {
				eyebrow: "Expertise",
				title: "Loan & banking specialties",
				align: "left"
			}), /* @__PURE__ */ jsx("ul", {
				className: "mt-8 grid sm:grid-cols-2 gap-3",
				children: [
					"Home loans (purchase / construction)",
					"Loan Against Property — Resi & Commercial",
					"MSME unsecured & secured business loans",
					"Personal loans for salaried profiles",
					"Self-employed ITR structuring",
					"Balance transfer & rate negotiation",
					"Top-up loan planning",
					"NRI home loans"
				].map((s) => /* @__PURE__ */ jsxs("li", {
					className: "flex items-start gap-2 text-sm text-foreground",
					children: [
						/* @__PURE__ */ jsx(CheckCircle2, { className: "size-4 text-[var(--teal)] mt-0.5 shrink-0" }),
						" ",
						s
					]
				}, s))
			})] })]
		}),
		/* @__PURE__ */ jsx("section", {
			className: "container-page py-12",
			children: /* @__PURE__ */ jsxs("div", {
				className: "surface-card p-8 md:p-10 flex flex-wrap gap-6 items-center justify-between",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-4",
					children: [/* @__PURE__ */ jsx("div", {
						className: "grid place-items-center h-12 w-12 rounded-xl bg-[color-mix(in_oklab,var(--teal)_12%,white)] text-[var(--teal)]",
						children: /* @__PURE__ */ jsx(GraduationCap, { className: "size-5" })
					}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
						className: "font-display font-semibold text-lg text-foreground",
						children: "MBA · Finance · NMIMS Mumbai"
					}), /* @__PURE__ */ jsxs("div", {
						className: "text-sm text-muted-foreground flex items-center gap-1.5 mt-1",
						children: [/* @__PURE__ */ jsx(Building2, { className: "size-4" }), " Certified DSA Partner — multiple lenders"]
					})] })]
				}), /* @__PURE__ */ jsx(Link, {
					to: "/contact",
					children: /* @__PURE__ */ jsx(Button, {
						variant: "hero",
						children: "Start a conversation"
					})
				})]
			})
		})
	] });
}
//#endregion
export { AboutPage as component };
