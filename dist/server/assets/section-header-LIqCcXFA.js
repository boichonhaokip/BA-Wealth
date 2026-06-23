import { n as cn } from "./button-D0FFsf6X.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
//#region src/components/section-header.tsx
function SectionHeader({ eyebrow, title, description, align = "center", className }) {
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
			margin: "-80px"
		},
		transition: {
			duration: .5,
			ease: "easeOut"
		},
		className: cn("max-w-2xl", align === "center" ? "mx-auto text-center" : "text-left", className),
		children: [
			eyebrow && /* @__PURE__ */ jsxs("div", {
				className: "inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium tracking-wide text-[var(--teal)] uppercase",
				children: [/* @__PURE__ */ jsx("span", { className: "size-1.5 rounded-full bg-[var(--teal)]" }), eyebrow]
			}),
			/* @__PURE__ */ jsx("h2", {
				className: "mt-4 text-3xl md:text-[40px] font-semibold text-foreground leading-tight",
				children: title
			}),
			description && /* @__PURE__ */ jsx("p", {
				className: "mt-4 text-base text-muted-foreground leading-relaxed",
				children: description
			})
		]
	});
}
//#endregion
export { SectionHeader as t };
