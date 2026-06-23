import { a as partners } from "./mock-data-tJxPjfvo.js";
import { useEffect, useRef, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { Landmark } from "lucide-react";
import { motion, useInView } from "framer-motion";
//#region src/components/animated-counter.tsx
function AnimatedCounter({ value, duration = 1400, suffix = "" }) {
	const ref = useRef(null);
	const inView = useInView(ref, {
		once: true,
		margin: "-50px"
	});
	const [n, setN] = useState(0);
	useEffect(() => {
		if (!inView) return;
		let raf = 0;
		const start = performance.now();
		const step = (t) => {
			const p = Math.min(1, (t - start) / duration);
			const eased = 1 - Math.pow(1 - p, 3);
			setN(Math.round(value * eased));
			if (p < 1) raf = requestAnimationFrame(step);
		};
		raf = requestAnimationFrame(step);
		return () => cancelAnimationFrame(raf);
	}, [
		inView,
		value,
		duration
	]);
	return /* @__PURE__ */ jsxs("span", {
		ref,
		children: [n.toLocaleString("en-IN"), suffix]
	});
}
//#endregion
//#region src/components/stat-card.tsx
function StatCard({ value, suffix, label, index = 0 }) {
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
			duration: .45,
			delay: index * .06,
			ease: "easeOut"
		},
		className: "surface-card p-6 hover:-translate-y-0.5 hover:shadow-[var(--shadow-elevated)] transition-all",
		children: [/* @__PURE__ */ jsx("div", {
			className: "text-3xl md:text-4xl font-display font-semibold text-foreground tracking-tight",
			children: /* @__PURE__ */ jsx(AnimatedCounter, {
				value,
				suffix
			})
		}), /* @__PURE__ */ jsx("div", {
			className: "mt-2 text-sm text-muted-foreground",
			children: label
		})]
	});
}
//#endregion
//#region src/components/partner-strip.tsx
function PartnerStrip() {
	return /* @__PURE__ */ jsx("div", {
		className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3",
		children: partners.map((p, i) => /* @__PURE__ */ jsxs(motion.div, {
			initial: {
				opacity: 0,
				y: 10
			},
			whileInView: {
				opacity: 1,
				y: 0
			},
			viewport: { once: true },
			transition: {
				duration: .4,
				delay: i * .03
			},
			className: "surface-card flex items-center gap-2 px-4 py-3.5 text-sm text-muted-foreground hover:text-foreground hover:border-[color-mix(in_oklab,var(--teal)_40%,var(--border))] transition-colors",
			children: [/* @__PURE__ */ jsx(Landmark, { className: "size-4 text-[var(--teal)] shrink-0" }), /* @__PURE__ */ jsx("span", {
				className: "font-medium truncate",
				children: p
			})]
		}, p))
	});
}
//#endregion
export { StatCard as n, AnimatedCounter as r, PartnerStrip as t };
