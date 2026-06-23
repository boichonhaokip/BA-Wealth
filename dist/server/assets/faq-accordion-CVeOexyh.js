import { r as faqs } from "./mock-data-tJxPjfvo.js";
import { n as cn } from "./button-D0FFsf6X.js";
import * as React from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { ChevronDown } from "lucide-react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
//#region src/components/ui/accordion.tsx
var Accordion = AccordionPrimitive.Root;
var AccordionItem = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(AccordionPrimitive.Item, {
	ref,
	className: cn("border-b", className),
	...props
}));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(AccordionPrimitive.Header, {
	className: "flex",
	children: /* @__PURE__ */ jsxs(AccordionPrimitive.Trigger, {
		ref,
		className: cn("flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })]
	})
}));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
var AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(AccordionPrimitive.Content, {
	ref,
	className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
	...props,
	children: /* @__PURE__ */ jsx("div", {
		className: cn("pb-4 pt-0", className),
		children
	})
}));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;
//#endregion
//#region src/components/faq-accordion.tsx
function FaqAccordion({ limit }) {
	return /* @__PURE__ */ jsx(Accordion, {
		type: "single",
		collapsible: true,
		className: "w-full divide-y divide-border surface-card px-2 sm:px-6",
		children: (limit ? faqs.slice(0, limit) : faqs).map((f, i) => /* @__PURE__ */ jsxs(AccordionItem, {
			value: `item-${i}`,
			className: "border-0",
			children: [/* @__PURE__ */ jsx(AccordionTrigger, {
				className: "text-left font-display font-medium text-base text-foreground py-5 hover:no-underline cursor-pointer",
				children: f.q
			}), /* @__PURE__ */ jsx(AccordionContent, {
				className: "text-muted-foreground leading-relaxed text-[15px] pb-5",
				children: f.a
			})]
		}, i))
	});
}
//#endregion
export { FaqAccordion as t };
