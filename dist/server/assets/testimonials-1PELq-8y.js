import { u as testimonials } from "./mock-data-tJxPjfvo.js";
import { t as Button } from "./button-D0FFsf6X.js";
import { t as SectionHeader } from "./section-header-LIqCcXFA.js";
import { t as TestimonialCard } from "./testimonial-card-CKzIY_3B.js";
import { Link } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/testimonials.tsx?tsr-split=component
function TestimonialsPage() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx("section", {
			className: "hero-bg border-b border-border",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-page py-16 md:py-20 text-center",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-[var(--teal)] uppercase tracking-wide",
						children: "Success Stories"
					}),
					/* @__PURE__ */ jsxs("h1", {
						className: "mt-5 text-4xl md:text-5xl font-semibold tracking-tight max-w-3xl mx-auto leading-tight",
						children: [
							"What clients say after their",
							" ",
							/* @__PURE__ */ jsx("span", {
								className: "text-[var(--teal)]",
								children: "loan is in hand"
							}),
							"."
						]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-5 text-muted-foreground max-w-2xl mx-auto",
						children: "Outcomes from recent client engagements — names and amounts shared with consent."
					})
				]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "container-page py-14 md:py-20",
			children: /* @__PURE__ */ jsx("div", {
				className: "grid md:grid-cols-2 lg:grid-cols-3 gap-5",
				children: testimonials.map((t, i) => /* @__PURE__ */ jsx(TestimonialCard, {
					t,
					index: i
				}, t.name))
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "container-page pb-16",
			children: /* @__PURE__ */ jsxs("div", {
				className: "surface-card p-8 md:p-10 text-center",
				children: [/* @__PURE__ */ jsx(SectionHeader, {
					eyebrow: "Ready when you are",
					title: "Let’s make your loan the next success story."
				}), /* @__PURE__ */ jsx("div", {
					className: "mt-7",
					children: /* @__PURE__ */ jsx(Link, {
						to: "/contact",
						children: /* @__PURE__ */ jsx(Button, {
							variant: "hero",
							size: "lg",
							children: "Request a Callback"
						})
					})
				})]
			})
		})
	] });
}
//#endregion
export { TestimonialsPage as component };
