import { t as Button } from "./button-D0FFsf6X.js";
import { t as SectionHeader } from "./section-header-LIqCcXFA.js";
import { t as FaqAccordion } from "./faq-accordion-CVeOexyh.js";
import { Link } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/faq.tsx?tsr-split=component
function FaqPage() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("section", {
		className: "hero-bg border-b border-border",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container-page py-14 md:py-20 text-center",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-[var(--teal)] uppercase tracking-wide",
					children: "FAQ"
				}),
				/* @__PURE__ */ jsx("h1", {
					className: "mt-5 text-4xl md:text-5xl font-semibold tracking-tight max-w-3xl mx-auto leading-tight",
					children: "Frequently asked questions"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-5 text-muted-foreground max-w-xl mx-auto",
					children: "Quick, honest answers about documents, timelines, fees and what to expect."
				})
			]
		})
	}), /* @__PURE__ */ jsxs("section", {
		className: "container-page py-14 md:py-20 max-w-3xl",
		children: [/* @__PURE__ */ jsx(FaqAccordion, {}), /* @__PURE__ */ jsxs("div", {
			className: "mt-12 surface-card p-8 text-center",
			children: [/* @__PURE__ */ jsx(SectionHeader, {
				title: "Didn’t find your answer?",
				eyebrow: "We’re here"
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-6",
				children: /* @__PURE__ */ jsx(Link, {
					to: "/contact",
					children: /* @__PURE__ */ jsx(Button, {
						variant: "hero",
						children: "Ask us directly"
					})
				})
			})]
		})]
	})] });
}
//#endregion
export { FaqPage as component };
