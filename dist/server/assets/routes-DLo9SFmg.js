import { c as services, l as stats, n as caseStudies, o as processSteps, s as reasonsToChoose, t as advisor, u as testimonials } from "./mock-data-tJxPjfvo.js";
import { n as cn, t as Button } from "./button-D0FFsf6X.js";
import { t as SectionHeader } from "./section-header-LIqCcXFA.js";
import { n as Input, t as Label } from "./label-Du0_ldoC.js";
import { t as FaqAccordion } from "./faq-accordion-CVeOexyh.js";
import { n as StatCard, r as AnimatedCounter, t as PartnerStrip } from "./partner-strip-CQXL9NFU.js";
import { t as TestimonialCard } from "./testimonial-card-CKzIY_3B.js";
import * as React from "react";
import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, Award, Banknote, Calculator, CheckCircle2, Clock, Eye, FileCheck2, FileText, Handshake, HeadphonesIcon, HeartHandshake, MessageCircle, PartyPopper, Phone, Search, Send, ShieldCheck, Sparkles, Star, TrendingDown, Users } from "lucide-react";
import { motion } from "framer-motion";
import * as SliderPrimitive from "@radix-ui/react-slider";
//#region src/components/service-card.tsx
function ServiceCard({ service, index = 0 }) {
	const Icon = service.icon;
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
		transition: {
			duration: .45,
			delay: index * .05,
			ease: "easeOut"
		},
		className: "group surface-card p-6 hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)] hover:border-[color-mix(in_oklab,var(--teal)_45%,var(--border))] transition-all flex flex-col",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ jsx("div", {
					className: "grid place-items-center h-12 w-12 rounded-xl bg-[color-mix(in_oklab,var(--teal)_12%,white)] text-[var(--teal)] group-hover:bg-[var(--teal)] group-hover:text-white transition-colors",
					children: /* @__PURE__ */ jsx(Icon, { className: "size-5" })
				}), /* @__PURE__ */ jsx(ArrowRight, { className: "size-4 text-muted-foreground group-hover:text-[var(--teal)] group-hover:translate-x-0.5 transition-all" })]
			}),
			/* @__PURE__ */ jsx("h3", {
				className: "mt-5 text-lg font-display font-semibold text-foreground",
				children: service.title
			}),
			/* @__PURE__ */ jsx("p", {
				className: "mt-2 text-sm text-muted-foreground leading-relaxed",
				children: service.short
			}),
			/* @__PURE__ */ jsx(Link, {
				to: "/services",
				className: "mt-5 text-sm font-medium text-[var(--teal)] hover:underline underline-offset-4",
				children: "Learn more →"
			})
		]
	});
}
//#endregion
//#region src/components/ui/slider.tsx
var Slider = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxs(SliderPrimitive.Root, {
	ref,
	className: cn("relative flex w-full touch-none select-none items-center", className),
	...props,
	children: [/* @__PURE__ */ jsx(SliderPrimitive.Track, {
		className: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20",
		children: /* @__PURE__ */ jsx(SliderPrimitive.Range, { className: "absolute h-full bg-primary" })
	}), /* @__PURE__ */ jsx(SliderPrimitive.Thumb, { className: "block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" })]
}));
Slider.displayName = SliderPrimitive.Root.displayName;
//#endregion
//#region src/components/emi-calculator.tsx
var fmt = (n) => "₹ " + Math.round(n).toLocaleString("en-IN");
function EmiCalculator() {
	const [amount, setAmount] = useState(25e5);
	const [rate, setRate] = useState(8.75);
	const [years, setYears] = useState(20);
	const { emi, totalInterest, totalPayable } = useMemo(() => {
		const P = amount;
		const r = rate / 12 / 100;
		const n = years * 12;
		if (P <= 0 || r <= 0 || n <= 0) return {
			emi: 0,
			totalInterest: 0,
			totalPayable: 0
		};
		const pow = Math.pow(1 + r, n);
		const emi = P * r * pow / (pow - 1);
		const totalPayable = emi * n;
		return {
			emi,
			totalInterest: totalPayable - P,
			totalPayable
		};
	}, [
		amount,
		rate,
		years
	]);
	return /* @__PURE__ */ jsxs("div", {
		className: "surface-card p-6 md:p-8",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-3",
				children: [/* @__PURE__ */ jsx("div", {
					className: "grid place-items-center h-11 w-11 rounded-xl bg-[color-mix(in_oklab,var(--teal)_14%,white)] text-[var(--teal)] shrink-0",
					children: /* @__PURE__ */ jsx(Calculator, { className: "size-5" })
				}), /* @__PURE__ */ jsxs("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ jsx("h3", {
						className: "font-display font-semibold text-lg text-foreground",
						children: "EMI Calculator"
					}), /* @__PURE__ */ jsx("p", {
						className: "text-xs text-muted-foreground",
						children: "Estimate your monthly EMI instantly. Adjust the sliders below."
					})]
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mt-6 grid gap-5",
				children: [
					/* @__PURE__ */ jsx(SliderField, {
						label: "Loan Amount",
						value: amount,
						display: fmt(amount),
						min: 1e5,
						max: 5e7,
						step: 5e4,
						onChange: setAmount,
						inputSuffix: "₹"
					}),
					/* @__PURE__ */ jsx(SliderField, {
						label: "Interest Rate",
						value: rate,
						display: `${rate.toFixed(2)} %`,
						min: 6,
						max: 20,
						step: .05,
						onChange: setRate,
						decimals: 2
					}),
					/* @__PURE__ */ jsx(SliderField, {
						label: "Tenure (Years)",
						value: years,
						display: `${years} yrs`,
						min: 1,
						max: 30,
						step: 1,
						onChange: setYears
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mt-7 grid grid-cols-1 sm:grid-cols-3 gap-3",
				children: [
					/* @__PURE__ */ jsx(ResultCard, {
						label: "Monthly EMI",
						value: fmt(emi),
						highlight: true
					}),
					/* @__PURE__ */ jsx(ResultCard, {
						label: "Total Interest",
						value: fmt(totalInterest)
					}),
					/* @__PURE__ */ jsx(ResultCard, {
						label: "Total Payable",
						value: fmt(totalPayable)
					})
				]
			}),
			/* @__PURE__ */ jsx("p", {
				className: "mt-4 text-[11px] text-muted-foreground leading-relaxed",
				children: "Indicative calculation. Actual EMI depends on lender, processing fees and applicable charges. Share your profile for an exact quote."
			})
		]
	});
}
function SliderField({ label, value, display, min, max, step, onChange, decimals = 0 }) {
	return /* @__PURE__ */ jsxs("div", { children: [
		/* @__PURE__ */ jsxs("div", {
			className: "flex items-center justify-between gap-3",
			children: [/* @__PURE__ */ jsx(Label, {
				className: "text-sm font-medium text-foreground",
				children: label
			}), /* @__PURE__ */ jsx("div", {
				className: "min-w-0",
				children: /* @__PURE__ */ jsx(Input, {
					type: "number",
					value: Number.isFinite(value) ? Number(value.toFixed(decimals)) : "",
					onChange: (e) => {
						const v = parseFloat(e.target.value);
						if (!isNaN(v)) onChange(Math.min(max, Math.max(min, v)));
					},
					className: "h-9 w-32 text-right text-sm font-semibold"
				})
			})]
		}),
		/* @__PURE__ */ jsx(Slider, {
			className: "mt-3",
			value: [value],
			min,
			max,
			step,
			onValueChange: (v) => onChange(v[0] ?? min)
		}),
		/* @__PURE__ */ jsxs("div", {
			className: "mt-1.5 flex justify-between text-[11px] text-muted-foreground",
			children: [/* @__PURE__ */ jsx("span", { children: display }), /* @__PURE__ */ jsxs("span", { children: ["max ", label.includes("Amount") ? fmt(max) : `${max}${label.includes("Rate") ? "%" : " yrs"}`] })]
		})
	] });
}
function ResultCard({ label, value, highlight }) {
	return /* @__PURE__ */ jsxs(motion.div, {
		initial: {
			opacity: 0,
			y: 6
		},
		animate: {
			opacity: 1,
			y: 0
		},
		transition: { duration: .25 },
		className: "rounded-xl p-4 border " + (highlight ? "bg-[var(--navy)] text-white border-transparent shadow-[var(--shadow-elevated)]" : "bg-[var(--surface-alt)] border-border text-foreground"),
		children: [/* @__PURE__ */ jsx("div", {
			className: "text-[11px] uppercase tracking-wide font-semibold " + (highlight ? "text-white/70" : "text-muted-foreground"),
			children: label
		}), /* @__PURE__ */ jsx("div", {
			className: "mt-1 font-display text-xl md:text-2xl font-semibold tracking-tight",
			children: value
		})]
	}, value);
}
//#endregion
//#region src/routes/index.tsx?tsr-split=component
function Index() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(Hero, {}),
		/* @__PURE__ */ jsx(TrustBar, {}),
		/* @__PURE__ */ jsx(Services, {}),
		/* @__PURE__ */ jsx(Process, {}),
		/* @__PURE__ */ jsx(WhyChoose, {}),
		/* @__PURE__ */ jsx(CaseStudies, {}),
		/* @__PURE__ */ jsx(Partners, {}),
		/* @__PURE__ */ jsx(Achievements, {}),
		/* @__PURE__ */ jsx(Testimonials, {}),
		/* @__PURE__ */ jsx(Resources, {}),
		/* @__PURE__ */ jsx(FaqSection, {}),
		/* @__PURE__ */ jsx(ContactCTA, {})
	] });
}
function Hero() {
	return /* @__PURE__ */ jsxs("section", {
		className: "hero-bg relative overflow-hidden border-b border-border",
		children: [/* @__PURE__ */ jsxs("div", {
			"aria-hidden": true,
			className: "pointer-events-none absolute inset-0 -z-10",
			children: [
				/* @__PURE__ */ jsx("div", { className: "float-blob absolute -top-24 -right-20 h-80 w-80 rounded-full bg-[var(--teal)]/15 blur-3xl" }),
				/* @__PURE__ */ jsx("div", {
					className: "float-blob absolute top-40 -left-24 h-72 w-72 rounded-full bg-[var(--brand-blue)]/15 blur-3xl",
					style: { animationDelay: "2s" }
				}),
				/* @__PURE__ */ jsx("div", {
					className: "float-blob absolute bottom-0 right-1/3 h-64 w-64 rounded-full bg-[var(--gold)]/15 blur-3xl",
					style: { animationDelay: "4s" }
				})
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: "container-page pt-14 md:pt-20 pb-16 md:pb-24 grid lg:grid-cols-12 gap-10 items-center",
			children: [/* @__PURE__ */ jsxs(motion.div, {
				initial: {
					opacity: 0,
					y: 24
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: {
					duration: .6,
					ease: "easeOut"
				},
				className: "lg:col-span-7",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-[var(--teal)]",
						children: [/* @__PURE__ */ jsx(ShieldCheck, { className: "size-3.5" }), "Verified DSA · Partnered with 28+ Banks & NBFCs"]
					}),
					/* @__PURE__ */ jsxs("h1", {
						className: "mt-5 text-4xl sm:text-5xl lg:text-[56px] font-semibold leading-[1.05] tracking-tight text-foreground",
						children: [
							"Expert Loan Guidance for",
							" ",
							/* @__PURE__ */ jsx("span", {
								className: "text-[var(--teal)]",
								children: "Home, Business, Personal & Mortgage"
							}),
							" ",
							"Financing."
						]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-5 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed",
						children: "Compare offers from multiple banks & NBFCs, get document assistance, eligibility guidance and end-to-end support — all from one trusted advisor."
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-8 flex flex-wrap gap-3",
						children: [
							/* @__PURE__ */ jsx(Link, {
								to: "/contact",
								children: /* @__PURE__ */ jsxs(Button, {
									variant: "hero",
									size: "xl",
									children: ["Check Eligibility ", /* @__PURE__ */ jsx(ArrowRight, {})]
								})
							}),
							/* @__PURE__ */ jsx("a", {
								href: advisor.whatsapp,
								target: "_blank",
								rel: "noreferrer",
								children: /* @__PURE__ */ jsxs(Button, {
									variant: "whatsapp",
									size: "xl",
									children: [/* @__PURE__ */ jsx(MessageCircle, {}), " WhatsApp"]
								})
							}),
							/* @__PURE__ */ jsx("a", {
								href: advisor.phoneHref,
								children: /* @__PURE__ */ jsxs(Button, {
									variant: "navy",
									size: "xl",
									children: [/* @__PURE__ */ jsx(Phone, {}), " Call Now"]
								})
							})
						]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mt-8 flex flex-wrap gap-2.5",
						children: [
							{
								icon: ShieldCheck,
								t: "Transparent Process"
							},
							{
								icon: Clock,
								t: "Fast Assistance"
							},
							{
								icon: HeartHandshake,
								t: "Personalized Guidance"
							}
						].map(({ icon: Ic, t }) => /* @__PURE__ */ jsxs("span", {
							className: "inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground shadow-[var(--shadow-soft)]",
							children: [
								/* @__PURE__ */ jsx(Ic, { className: "size-3.5 text-[var(--gold)]" }),
								" ",
								t
							]
						}, t))
					})
				]
			}), /* @__PURE__ */ jsx(motion.div, {
				initial: {
					opacity: 0,
					y: 24
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: {
					duration: .6,
					delay: .15,
					ease: "easeOut"
				},
				className: "lg:col-span-5",
				children: /* @__PURE__ */ jsx(ProfileCard, {})
			})]
		})]
	});
}
function ProfileCard() {
	return /* @__PURE__ */ jsxs("div", {
		className: "relative",
		children: [/* @__PURE__ */ jsx("div", { className: "absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[var(--teal)]/15 to-[var(--brand-blue)]/15 blur-2xl -z-10" }), /* @__PURE__ */ jsxs("div", {
			className: "surface-card p-6 md:p-7",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-4",
					children: [/* @__PURE__ */ jsx("div", {
						className: "h-20 w-16 rounded-xl overflow-hidden border border-border shrink-0 bg-[var(--surface-alt)]",
						children: /* @__PURE__ */ jsx("img", {
							src: advisor.photo,
							alt: advisor.name,
							className: "w-full h-full object-cover"
						})
					}), /* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsx("div", {
							className: "text-xs uppercase tracking-wider text-[var(--teal)] font-semibold",
							children: advisor.role
						}),
						/* @__PURE__ */ jsx("div", {
							className: "font-display font-semibold text-xl text-foreground",
							children: advisor.name
						}),
						/* @__PURE__ */ jsx("div", {
							className: "text-xs text-muted-foreground mt-0.5",
							children: advisor.city
						})
					] })]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-6 grid grid-cols-3 gap-3 text-center",
					children: [
						{
							v: "12+",
							l: "Years"
						},
						{
							v: "1800+",
							l: "Clients"
						},
						{
							v: "₹850Cr",
							l: "Disbursed"
						}
					].map((s) => /* @__PURE__ */ jsxs("div", {
						className: "rounded-lg bg-[var(--surface-alt)] py-3",
						children: [/* @__PURE__ */ jsx("div", {
							className: "font-display font-semibold text-lg text-foreground",
							children: s.v
						}), /* @__PURE__ */ jsx("div", {
							className: "text-[11px] text-muted-foreground uppercase tracking-wide",
							children: s.l
						})]
					}, s.l))
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-5 space-y-2.5 text-sm",
					children: [
						{
							icon: Award,
							t: "Top-1% DSA Partner — Western India"
						},
						{
							icon: Sparkles,
							t: "Specialist in self-employed profiles"
						},
						{
							icon: Star,
							t: "4.9 / 5 average client rating"
						}
					].map(({ icon: Ic, t }) => /* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-2.5 text-foreground/90",
						children: [
							/* @__PURE__ */ jsx(Ic, { className: "size-4 text-[var(--teal)]" }),
							" ",
							t
						]
					}, t))
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-6 flex gap-2",
					children: [/* @__PURE__ */ jsx("a", {
						href: advisor.phoneHref,
						className: "flex-1",
						children: /* @__PURE__ */ jsxs(Button, {
							variant: "navy",
							className: "w-full",
							children: [/* @__PURE__ */ jsx(Phone, {}), " Call Now"]
						})
					}), /* @__PURE__ */ jsx("a", {
						href: advisor.whatsapp,
						target: "_blank",
						rel: "noreferrer",
						className: "flex-1",
						children: /* @__PURE__ */ jsxs(Button, {
							variant: "whatsapp",
							className: "w-full",
							children: [/* @__PURE__ */ jsx(MessageCircle, {}), " WhatsApp"]
						})
					})]
				})
			]
		})]
	});
}
function TrustBar() {
	return /* @__PURE__ */ jsx("section", {
		className: "container-page py-14 md:py-20",
		children: /* @__PURE__ */ jsx("div", {
			className: "grid grid-cols-2 md:grid-cols-4 gap-4",
			children: stats.slice(0, 4).map((s, i) => /* @__PURE__ */ jsx(StatCard, {
				...s,
				index: i
			}, s.label))
		})
	});
}
function Services() {
	return /* @__PURE__ */ jsxs("section", {
		className: "container-page py-14 md:py-20 border-t border-border",
		children: [/* @__PURE__ */ jsx(SectionHeader, {
			eyebrow: "Loan Services",
			title: "Every major loan, handled end-to-end",
			description: "From eligibility check to disbursal coordination — pick the loan type you need and we’ll find the right bank for your profile."
		}), /* @__PURE__ */ jsx("div", {
			className: "mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4",
			children: services.map((s, i) => /* @__PURE__ */ jsx(ServiceCard, {
				service: s,
				index: i
			}, s.slug))
		})]
	});
}
function Process() {
	return /* @__PURE__ */ jsx("section", {
		className: "bg-[var(--surface-alt)] border-y border-border",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container-page py-14 md:py-20",
			children: [/* @__PURE__ */ jsx(SectionHeader, {
				eyebrow: "How it Works",
				title: "A simple, transparent 5-step process",
				description: "No back-and-forth, no surprises — just a clear path from your first call to disbursal."
			}), /* @__PURE__ */ jsxs("div", {
				className: "mt-14 relative",
				children: [/* @__PURE__ */ jsx("div", {
					"aria-hidden": true,
					className: "hidden lg:block absolute top-7 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-[var(--teal)]/40 to-transparent"
				}), /* @__PURE__ */ jsx("div", {
					className: "grid gap-5 md:grid-cols-2 lg:grid-cols-5",
					children: processSteps.map((s, i) => {
						const Icon = [
							Handshake,
							Search,
							FileCheck2,
							Send,
							PartyPopper
						][i] ?? Handshake;
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
							transition: {
								duration: .4,
								delay: i * .07
							},
							className: "surface-card p-5 relative hover:-translate-y-0.5 hover:shadow-[var(--shadow-elevated)] transition-all",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ jsx("span", {
										className: "relative grid place-items-center h-14 w-14 rounded-full bg-background border-2 border-[var(--teal)]/30 text-[var(--teal)] shadow-[var(--shadow-soft)]",
										children: /* @__PURE__ */ jsx(Icon, { className: "size-6" })
									}), /* @__PURE__ */ jsx("span", {
										className: "font-display text-xl font-semibold text-[var(--teal)]/40",
										children: String(i + 1).padStart(2, "0")
									})]
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "mt-4 font-display font-semibold text-foreground",
									children: s.title
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-2 text-sm text-muted-foreground leading-relaxed",
									children: s.description
								})
							]
						}, s.title);
					})
				})]
			})]
		})
	});
}
function WhyChoose() {
	const icons = [
		HeartHandshake,
		Banknote,
		Eye,
		FileCheck2,
		HeadphonesIcon,
		Users
	];
	return /* @__PURE__ */ jsxs("section", {
		className: "container-page py-14 md:py-20",
		children: [/* @__PURE__ */ jsx(SectionHeader, {
			eyebrow: "Why Choose Us",
			title: "Experience you can trust, advice you can act on",
			description: "Twelve years inside India’s top lenders — now working independently for you."
		}), /* @__PURE__ */ jsx("div", {
			className: "mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-4",
			children: reasonsToChoose.map((r, i) => /* @__PURE__ */ jsxs(motion.div, {
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
				transition: {
					duration: .45,
					delay: i * .05
				},
				className: "group surface-card p-6 hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)] hover:border-[color-mix(in_oklab,var(--teal)_45%,var(--border))] transition-all",
				children: [
					(() => {
						const Ic = icons[i % icons.length];
						return /* @__PURE__ */ jsx("div", {
							className: "grid place-items-center h-12 w-12 rounded-xl bg-[color-mix(in_oklab,var(--teal)_12%,white)] text-[var(--teal)] group-hover:bg-[var(--teal)] group-hover:text-white transition-colors",
							children: /* @__PURE__ */ jsx(Ic, { className: "size-5" })
						});
					})(),
					/* @__PURE__ */ jsx("h3", {
						className: "mt-4 font-display font-semibold text-foreground",
						children: r.title
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-2 text-sm text-muted-foreground leading-relaxed",
						children: r.description
					})
				]
			}, r.title))
		})]
	});
}
function CaseStudies() {
	return /* @__PURE__ */ jsx("section", {
		className: "bg-[var(--surface-alt)] border-y border-border",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container-page py-14 md:py-20",
			children: [
				/* @__PURE__ */ jsx(SectionHeader, {
					eyebrow: "Case Studies",
					title: "Real outcomes, fully anonymised",
					description: "A few representative engagements — challenge, solution and outcome. Names withheld; numbers verified."
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-12 grid md:grid-cols-2 gap-5",
					children: caseStudies.map((c, i) => {
						const Icon = c.icon;
						return /* @__PURE__ */ jsxs(motion.article, {
							initial: {
								opacity: 0,
								y: 18
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: {
								once: true,
								margin: "-60px"
							},
							transition: {
								duration: .45,
								delay: i * .06
							},
							className: "surface-card p-6 md:p-7 hover:-translate-y-0.5 hover:shadow-[var(--shadow-elevated)] transition-all",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex items-start gap-4",
								children: [/* @__PURE__ */ jsx("div", {
									className: "grid place-items-center h-12 w-12 rounded-xl bg-[color-mix(in_oklab,var(--teal)_12%,white)] text-[var(--teal)] shrink-0",
									children: /* @__PURE__ */ jsx(Icon, { className: "size-5" })
								}), /* @__PURE__ */ jsxs("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ jsx("div", {
										className: "text-[11px] uppercase tracking-wide font-semibold text-[var(--teal)]",
										children: c.tag
									}), /* @__PURE__ */ jsx("h3", {
										className: "mt-1 font-display font-semibold text-lg text-foreground",
										children: c.title
									})]
								})]
							}), /* @__PURE__ */ jsxs("dl", {
								className: "mt-5 space-y-3 text-sm",
								children: [
									/* @__PURE__ */ jsx(Row, {
										label: "Challenge",
										value: c.challenge
									}),
									/* @__PURE__ */ jsx(Row, {
										label: "Solution",
										value: c.solution
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "mt-3 flex items-start gap-2 rounded-lg bg-[color-mix(in_oklab,var(--success)_10%,white)] border border-[color-mix(in_oklab,var(--success)_25%,var(--border))] px-3 py-2.5",
										children: [/* @__PURE__ */ jsx(TrendingDown, { className: "size-4 text-[var(--success)] mt-0.5 shrink-0" }), /* @__PURE__ */ jsx("span", {
											className: "text-foreground font-medium",
											children: c.outcome
										})]
									})
								]
							})]
						}, c.title);
					})
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-10 text-center",
					children: /* @__PURE__ */ jsx(Link, {
						to: "/portfolio",
						children: /* @__PURE__ */ jsxs(Button, {
							variant: "soft",
							children: ["View all case studies ", /* @__PURE__ */ jsx(ArrowRight, {})]
						})
					})
				})
			]
		})
	});
}
function Row({ label, value }) {
	return /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("dt", {
		className: "text-[11px] uppercase tracking-wide font-semibold text-muted-foreground",
		children: label
	}), /* @__PURE__ */ jsx("dd", {
		className: "mt-0.5 text-foreground/90 leading-relaxed",
		children: value
	})] });
}
function Partners() {
	return /* @__PURE__ */ jsxs("section", {
		className: "container-page py-14 md:py-20 border-t border-border",
		children: [/* @__PURE__ */ jsx(SectionHeader, {
			eyebrow: "Trusted Lenders",
			title: "Works with leading banks & NBFCs",
			description: "We are an independent DSA channel partner — not owned by or affiliated to any bank. We compare offers across our partner panel so you get the best fit."
		}), /* @__PURE__ */ jsx("div", {
			className: "mt-12",
			children: /* @__PURE__ */ jsx(PartnerStrip, {})
		})]
	});
}
function Achievements() {
	return /* @__PURE__ */ jsx("section", {
		className: "bg-[var(--navy)] text-white",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container-page py-14 md:py-20",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "max-w-2xl",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1 text-xs font-medium tracking-wide text-[var(--teal-soft)] uppercase",
						children: [/* @__PURE__ */ jsx("span", { className: "size-1.5 rounded-full bg-[var(--teal-soft)]" }), "Track Record"]
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "mt-4 text-3xl md:text-[40px] font-semibold leading-tight",
						children: "A decade of measurable outcomes."
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-4 text-white/70 leading-relaxed",
						children: "Numbers from 12 years of structuring, negotiating and closing loans across India."
					})
				]
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-10 grid grid-cols-2 md:grid-cols-3 gap-4",
				children: stats.map((s, i) => /* @__PURE__ */ jsxs(motion.div, {
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
					transition: {
						duration: .45,
						delay: i * .06
					},
					className: "rounded-xl border border-white/10 bg-white/5 p-6",
					children: [/* @__PURE__ */ jsx("div", {
						className: "text-3xl md:text-4xl font-display font-semibold tracking-tight",
						children: /* @__PURE__ */ jsx(Counter, {
							value: s.value,
							suffix: s.suffix
						})
					}), /* @__PURE__ */ jsx("div", {
						className: "mt-2 text-sm text-white/65",
						children: s.label
					})]
				}, s.label))
			})]
		})
	});
}
function Counter({ value, suffix }) {
	return /* @__PURE__ */ jsx(AnimatedCounter, {
		value,
		suffix
	});
}
function Testimonials() {
	return /* @__PURE__ */ jsxs("section", {
		className: "container-page py-14 md:py-20",
		children: [
			/* @__PURE__ */ jsx(SectionHeader, {
				eyebrow: "Success Stories",
				title: "What clients say after their loan is in hand"
			}),
			/* @__PURE__ */ jsx("div", {
				className: "mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5",
				children: testimonials.slice(0, 3).map((t, i) => /* @__PURE__ */ jsx(TestimonialCard, {
					t,
					index: i
				}, t.name))
			}),
			/* @__PURE__ */ jsx("div", {
				className: "mt-8 text-center",
				children: /* @__PURE__ */ jsx(Link, {
					to: "/testimonials",
					children: /* @__PURE__ */ jsxs(Button, {
						variant: "soft",
						children: ["View all success stories ", /* @__PURE__ */ jsx(ArrowRight, {})]
					})
				})
			})
		]
	});
}
function FaqSection() {
	return /* @__PURE__ */ jsxs("section", {
		className: "container-page py-14 md:py-20 border-t border-border",
		children: [/* @__PURE__ */ jsx(SectionHeader, {
			eyebrow: "FAQ",
			title: "Answers to the questions we’re asked the most"
		}), /* @__PURE__ */ jsxs("div", {
			className: "mt-10 max-w-3xl mx-auto",
			children: [/* @__PURE__ */ jsx(FaqAccordion, { limit: 5 }), /* @__PURE__ */ jsx("div", {
				className: "mt-6 text-center",
				children: /* @__PURE__ */ jsx(Link, {
					to: "/faq",
					className: "text-sm font-medium text-[var(--teal)] hover:underline",
					children: "See all FAQs →"
				})
			})]
		})]
	});
}
function ContactCTA() {
	return /* @__PURE__ */ jsx("section", {
		className: "container-page pt-6 pb-2",
		children: /* @__PURE__ */ jsxs("div", {
			className: "relative overflow-hidden rounded-3xl navy-bg p-8 md:p-14",
			children: [/* @__PURE__ */ jsx("div", { className: "absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[var(--teal)]/20 blur-3xl" }), /* @__PURE__ */ jsxs("div", {
				className: "relative grid lg:grid-cols-2 gap-8 items-center",
				children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
					className: "text-3xl md:text-[40px] font-semibold leading-tight",
					children: "Ready to talk to a real loan expert?"
				}), /* @__PURE__ */ jsx("p", {
					className: "mt-4 text-white/70 max-w-lg leading-relaxed",
					children: "Get a free, no-obligation consultation. We’ll review your profile, suggest 2–3 best-fit lenders and tell you exactly what to expect — in plain language."
				})] }), /* @__PURE__ */ jsxs("div", {
					className: "flex flex-wrap gap-3 lg:justify-end",
					children: [
						/* @__PURE__ */ jsx(Link, {
							to: "/contact",
							children: /* @__PURE__ */ jsx(Button, {
								variant: "hero",
								size: "xl",
								children: "Request Callback"
							})
						}),
						/* @__PURE__ */ jsx("a", {
							href: advisor.whatsapp,
							target: "_blank",
							rel: "noreferrer",
							children: /* @__PURE__ */ jsxs(Button, {
								variant: "whatsapp",
								size: "xl",
								children: [/* @__PURE__ */ jsx(MessageCircle, {}), " WhatsApp"]
							})
						}),
						/* @__PURE__ */ jsx("a", {
							href: advisor.phoneHref,
							children: /* @__PURE__ */ jsxs(Button, {
								size: "xl",
								className: "bg-white text-[var(--navy)] hover:bg-white/90",
								children: [/* @__PURE__ */ jsx(Phone, {}), " Call Now"]
							})
						})
					]
				})]
			})]
		})
	});
}
function Resources() {
	return /* @__PURE__ */ jsxs("section", {
		className: "container-page py-14 md:py-20 border-t border-border",
		children: [/* @__PURE__ */ jsx(SectionHeader, {
			eyebrow: "Resources",
			title: "Tools & checklists to get you loan-ready",
			description: "Use these to walk into your application fully prepared — or just call us and we'll do it with you."
		}), /* @__PURE__ */ jsxs("div", {
			className: "mt-12 grid lg:grid-cols-2 gap-5",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "surface-card p-6 md:p-8",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ jsx("div", {
							className: "grid place-items-center h-11 w-11 rounded-xl bg-[color-mix(in_oklab,var(--gold)_20%,white)] text-[var(--navy)]",
							children: /* @__PURE__ */ jsx(FileText, { className: "size-5" })
						}), /* @__PURE__ */ jsx("h3", {
							className: "font-display font-semibold text-lg text-foreground",
							children: "Common Document Checklist"
						})]
					}),
					/* @__PURE__ */ jsx("ul", {
						className: "mt-5 grid sm:grid-cols-2 gap-x-6 gap-y-2.5",
						children: [
							"PAN & Aadhaar (KYC)",
							"Latest 3 months salary slips / 2 yrs ITR",
							"6 months bank statements",
							"Property documents (for secured loans)",
							"Form 16 / GST returns (if applicable)",
							"Existing loan statement (for BT / top-up)"
						].map((d) => /* @__PURE__ */ jsxs("li", {
							className: "flex items-start gap-2 text-sm text-foreground",
							children: [/* @__PURE__ */ jsx(CheckCircle2, { className: "size-4 mt-0.5 text-[var(--teal)] shrink-0" }), d]
						}, d))
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-5 text-xs text-muted-foreground",
						children: "We share a personalised checklist after the first call based on your loan type & profile."
					})
				]
			}), /* @__PURE__ */ jsx(EmiCalculator, {})]
		})]
	});
}
//#endregion
export { Index as component };
