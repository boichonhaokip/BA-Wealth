import { jsx, jsxs } from "react/jsx-runtime";
import { MapPin, Quote, Star } from "lucide-react";
import { motion } from "framer-motion";
//#region src/components/testimonial-card.tsx
function TestimonialCard({ t, index = 0 }) {
	return /* @__PURE__ */ jsxs(motion.div, {
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
			delay: index * .06,
			ease: "easeOut"
		},
		className: "surface-card p-7 flex flex-col h-full hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)] transition-all",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ jsx(Quote, { className: "size-7 text-[var(--teal)] opacity-70" }), /* @__PURE__ */ jsx("div", {
					className: "flex gap-0.5",
					children: Array.from({ length: t.rating }).map((_, i) => /* @__PURE__ */ jsx(Star, { className: "size-4 fill-[var(--warning)] text-[var(--warning)]" }, i))
				})]
			}),
			/* @__PURE__ */ jsxs("p", {
				className: "mt-4 text-[15px] text-foreground leading-relaxed",
				children: [
					"“",
					t.review,
					"”"
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mt-5 rounded-lg bg-[var(--surface-alt)] px-3 py-2.5 text-xs text-muted-foreground",
				children: [
					/* @__PURE__ */ jsx("span", {
						className: "font-medium text-foreground",
						children: "Outcome:"
					}),
					" ",
					t.outcome
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mt-6 pt-5 border-t border-border flex items-center justify-between",
				children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
					className: "font-semibold text-sm text-foreground",
					children: t.name
				}), /* @__PURE__ */ jsxs("div", {
					className: "text-xs text-muted-foreground flex items-center gap-1 mt-0.5",
					children: [
						/* @__PURE__ */ jsx(MapPin, { className: "size-3" }),
						t.city,
						" · ",
						t.loanType
					]
				})] }), /* @__PURE__ */ jsx("div", {
					className: "text-sm font-display font-semibold text-[var(--teal)]",
					children: t.amount
				})]
			})
		]
	});
}
//#endregion
export { TestimonialCard as t };
