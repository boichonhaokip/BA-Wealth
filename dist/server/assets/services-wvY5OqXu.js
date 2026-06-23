import { c as services, t as advisor } from "./mock-data-tJxPjfvo.js";
import { t as Button } from "./button-D0FFsf6X.js";
import { Link } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { CheckCircle2, FileText, Users } from "lucide-react";
import { motion } from "framer-motion";
//#region src/routes/services.tsx?tsr-split=component
function ServicesPage() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx("section", {
			className: "hero-bg border-b border-border",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-page py-16 md:py-20 text-center",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-[var(--teal)] uppercase tracking-wide",
						children: "Services"
					}),
					/* @__PURE__ */ jsxs("h1", {
						className: "mt-5 text-4xl md:text-5xl font-semibold tracking-tight max-w-3xl mx-auto leading-tight",
						children: [
							"One advisor. ",
							/* @__PURE__ */ jsx("span", {
								className: "text-[var(--teal)]",
								children: "Every major loan"
							}),
							"."
						]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-5 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed",
						children: "Each loan product, with clear eligibility criteria and exactly the documents you’ll need — so you walk into the process prepared."
					})
				]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "container-page py-14 md:py-20 space-y-6",
			children: services.map((s, i) => {
				const Icon = s.icon;
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
						duration: .5,
						delay: i * .04
					},
					className: "surface-card p-6 md:p-8 grid lg:grid-cols-12 gap-6",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "lg:col-span-4",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "grid place-items-center h-14 w-14 rounded-2xl bg-[color-mix(in_oklab,var(--teal)_12%,white)] text-[var(--teal)]",
								children: /* @__PURE__ */ jsx(Icon, { className: "size-6" })
							}),
							/* @__PURE__ */ jsx("h2", {
								className: "mt-5 text-2xl font-display font-semibold text-foreground",
								children: s.title
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-3 text-sm text-muted-foreground leading-relaxed",
								children: s.description
							}),
							/* @__PURE__ */ jsx("div", {
								className: "mt-5",
								children: /* @__PURE__ */ jsx(Link, {
									to: "/contact",
									children: /* @__PURE__ */ jsxs(Button, {
										variant: "navy",
										size: "sm",
										children: ["Apply for ", s.title]
									})
								})
							})
						]
					}), /* @__PURE__ */ jsxs("div", {
						className: "lg:col-span-8 grid sm:grid-cols-3 gap-5",
						children: [
							/* @__PURE__ */ jsx(Block, {
								icon: Users,
								title: "Ideal for",
								children: s.forWho.map((w) => /* @__PURE__ */ jsx(Bullet, { children: w }, w))
							}),
							/* @__PURE__ */ jsx(Block, {
								icon: CheckCircle2,
								title: "Eligibility",
								children: s.eligibility.map((w) => /* @__PURE__ */ jsx(Bullet, { children: w }, w))
							}),
							/* @__PURE__ */ jsx(Block, {
								icon: FileText,
								title: "Documents",
								children: s.documents.map((w) => /* @__PURE__ */ jsx(Bullet, { children: w }, w))
							})
						]
					})]
				}, s.slug);
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "container-page pb-16",
			children: /* @__PURE__ */ jsxs("div", {
				className: "surface-card p-8 md:p-10 text-center",
				children: [
					/* @__PURE__ */ jsx("h3", {
						className: "text-2xl md:text-3xl font-display font-semibold text-foreground",
						children: "Not sure which loan fits your need?"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-3 text-muted-foreground max-w-xl mx-auto",
						children: "Tell us your goal in one minute — we’ll recommend the right product and lender."
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-6 flex flex-wrap gap-3 justify-center",
						children: [/* @__PURE__ */ jsx(Link, {
							to: "/contact",
							children: /* @__PURE__ */ jsx(Button, {
								variant: "hero",
								size: "lg",
								children: "Get Free Advice"
							})
						}), /* @__PURE__ */ jsx("a", {
							href: advisor.whatsapp,
							target: "_blank",
							rel: "noreferrer",
							children: /* @__PURE__ */ jsx(Button, {
								variant: "whatsapp",
								size: "lg",
								children: "WhatsApp Us"
							})
						})]
					})
				]
			})
		})
	] });
}
function Block({ icon: Icon, title, children }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-xl border border-border bg-[var(--surface-alt)]/60 p-5",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex items-center gap-2 text-xs uppercase tracking-wide text-muted-foreground font-semibold",
			children: [
				/* @__PURE__ */ jsx(Icon, { className: "size-3.5 text-[var(--teal)]" }),
				" ",
				title
			]
		}), /* @__PURE__ */ jsx("ul", {
			className: "mt-3 space-y-2",
			children
		})]
	});
}
function Bullet({ children }) {
	return /* @__PURE__ */ jsxs("li", {
		className: "flex items-start gap-2 text-sm text-foreground",
		children: [/* @__PURE__ */ jsx(CheckCircle2, { className: "size-3.5 mt-0.5 text-[var(--teal)] shrink-0" }), /* @__PURE__ */ jsx("span", { children })]
	});
}
//#endregion
export { ServicesPage as component };
