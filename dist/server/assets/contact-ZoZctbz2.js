import { a as getServerFnById, i as TSS_SERVER_FUNCTION, r as createServerFn } from "../server.js";
import { t as advisor } from "./mock-data-tJxPjfvo.js";
import { n as cn, t as Button } from "./button-D0FFsf6X.js";
import { n as Input, t as Label } from "./label-Du0_ldoC.js";
import * as React from "react";
import { useRef, useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { z } from "zod";
import { Check, CheckCircle2, ChevronDown, ChevronUp, Clock, Loader2, Mail, MapPin, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Turnstile } from "@marsidev/react-turnstile";
import * as SelectPrimitive from "@radix-ui/react-select";
//#region src/components/ui/textarea.tsx
var Textarea = React.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ jsx("textarea", {
		className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
//#endregion
//#region src/components/ui/select.tsx
var Select = SelectPrimitive.Root;
var SelectValue = SelectPrimitive.Value;
var SelectTrigger = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(SelectPrimitive.Trigger, {
	ref,
	className: cn("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background cursor-pointer data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className),
	...props,
	children: [children, /* @__PURE__ */ jsx(SelectPrimitive.Icon, {
		asChild: true,
		children: /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 opacity-50" })
	})]
}));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
var SelectScrollUpButton = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(SelectPrimitive.ScrollUpButton, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ jsx(ChevronUp, { className: "h-4 w-4" })
}));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;
var SelectScrollDownButton = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(SelectPrimitive.ScrollDownButton, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4" })
}));
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;
var SelectContent = React.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ jsx(SelectPrimitive.Portal, { children: /* @__PURE__ */ jsxs(SelectPrimitive.Content, {
	ref,
	className: cn("relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
	position,
	...props,
	children: [
		/* @__PURE__ */ jsx(SelectScrollUpButton, {}),
		/* @__PURE__ */ jsx(SelectPrimitive.Viewport, {
			className: cn("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
			children
		}),
		/* @__PURE__ */ jsx(SelectScrollDownButton, {})
	]
}) }));
SelectContent.displayName = SelectPrimitive.Content.displayName;
var SelectLabel = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(SelectPrimitive.Label, {
	ref,
	className: cn("px-2 py-1.5 text-sm font-semibold", className),
	...props
}));
SelectLabel.displayName = SelectPrimitive.Label.displayName;
var SelectItem = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(SelectPrimitive.Item, {
	ref,
	className: cn("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ jsx("span", {
		className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ jsx(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Check, { className: "h-4 w-4" }) })
	}), /* @__PURE__ */ jsx(SelectPrimitive.ItemText, { children })]
}));
SelectItem.displayName = SelectPrimitive.Item.displayName;
var SelectSeparator = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(SelectPrimitive.Separator, {
	ref,
	className: cn("-mx-1 my-1 h-px bg-muted", className),
	...props
}));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;
//#endregion
//#region node_modules/@tanstack/start-server-core/dist/esm/createSsrRpc.js
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
//#endregion
//#region src/lib/contact-action.ts
var contactSchema = z.object({
	name: z.string().min(2, "Name must be at least 2 characters"),
	email: z.string().email("Invalid email address").optional().or(z.literal("")),
	phone: z.string().min(10, "Phone number must be at least 10 digits"),
	city: z.string().min(2, "City is required"),
	inquiryType: z.string().min(1, "Inquiry type is required"),
	amount: z.string().optional(),
	message: z.string().max(500).optional(),
	token: z.string().min(1, "Security verification is required")
});
var submitContactForm = createServerFn({ method: "POST" }).validator((data) => contactSchema.parse(data)).handler(createSsrRpc("211a164bd01296f8668d8c5bebd213e27aa2eac1f774dd5f5e3ed6e090aa4c97"));
//#endregion
//#region src/components/contact-form.tsx
var schema = z.object({
	name: z.string().min(2, "Please enter your full name"),
	phone: z.string().min(10, "Enter a valid 10-digit number").regex(/^[+0-9 ]+$/, "Digits only"),
	email: z.string().email("Enter a valid email").optional().or(z.literal("")),
	city: z.string().min(2, "City required"),
	inquiryType: z.string().min(1, "Please choose one"),
	amount: z.string().optional(),
	message: z.string().max(500).optional()
});
var inquiryTypes = [
	"Home Loan",
	"Personal Loan",
	"Business Loan",
	"Loan Against Property",
	"Car Loan",
	"Balance Transfer",
	"Top-up Loan",
	"Other / Not sure yet"
];
function ContactForm() {
	const [submitted, setSubmitted] = useState(false);
	const [token, setToken] = useState(null);
	const turnstileRef = useRef(null);
	const { register, handleSubmit, setValue, watch, reset, formState: { errors, isSubmitting } } = useForm({
		resolver: zodResolver(schema),
		defaultValues: { inquiryType: "" }
	});
	const [error, setError] = useState(null);
	const onSubmit = async (data) => {
		if (!token) {
			setError("Please complete the security verification.");
			return;
		}
		setError(null);
		try {
			if (!(await submitContactForm({ data: {
				...data,
				token
			} })).success) throw new Error("Failed to submit request");
			setSubmitted(true);
			reset({ inquiryType: "" });
			setToken(null);
			turnstileRef.current?.reset();
			setTimeout(() => setSubmitted(false), 5e3);
		} catch (err) {
			console.error("Submission error:", err);
			setError(err.message || "Something went wrong. Please try again.");
			turnstileRef.current?.reset();
			setToken(null);
		}
	};
	return /* @__PURE__ */ jsxs("form", {
		onSubmit: handleSubmit(onSubmit),
		className: "space-y-5",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "grid grid-cols-1 md:grid-cols-2 gap-5",
				children: [
					/* @__PURE__ */ jsx(Field, {
						label: "Full Name",
						error: errors.name?.message,
						children: /* @__PURE__ */ jsx(Input, {
							placeholder: "e.g. Aarav Sharma",
							...register("name")
						})
					}),
					/* @__PURE__ */ jsx(Field, {
						label: "Phone Number",
						error: errors.phone?.message,
						children: /* @__PURE__ */ jsx(Input, {
							placeholder: "+91 98xxxxxx",
							inputMode: "tel",
							...register("phone")
						})
					}),
					/* @__PURE__ */ jsx(Field, {
						label: "Email (optional)",
						error: errors.email?.message,
						children: /* @__PURE__ */ jsx(Input, {
							type: "email",
							placeholder: "you@email.com",
							...register("email")
						})
					}),
					/* @__PURE__ */ jsx(Field, {
						label: "City",
						error: errors.city?.message,
						children: /* @__PURE__ */ jsx(Input, {
							placeholder: "Mumbai",
							...register("city")
						})
					}),
					/* @__PURE__ */ jsx(Field, {
						label: "Inquiry Type",
						error: errors.inquiryType?.message,
						children: /* @__PURE__ */ jsxs(Select, {
							value: watch("inquiryType"),
							onValueChange: (v) => setValue("inquiryType", v, { shouldValidate: true }),
							children: [/* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Choose a loan type" }) }), /* @__PURE__ */ jsx(SelectContent, { children: inquiryTypes.map((i) => /* @__PURE__ */ jsx(SelectItem, {
								value: i,
								children: i
							}, i)) })]
						})
					}),
					/* @__PURE__ */ jsx(Field, {
						label: "Required Amount (optional)",
						children: /* @__PURE__ */ jsx(Input, {
							placeholder: "e.g. ₹ 50 Lakhs",
							...register("amount")
						})
					})
				]
			}),
			/* @__PURE__ */ jsx(Field, {
				label: "Tell us briefly about your requirement (optional)",
				children: /* @__PURE__ */ jsx(Textarea, {
					rows: 4,
					placeholder: "Share your income profile, property details or anything specific.",
					...register("message")
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "flex justify-center md:justify-start pt-2",
				children: /* @__PURE__ */ jsx(Turnstile, {
					ref: turnstileRef,
					siteKey: "1x00000000000000000000AA",
					onSuccess: (t) => setToken(t),
					onExpire: () => setToken(null),
					onError: () => setToken(null)
				})
			}),
			error && /* @__PURE__ */ jsx("div", {
				className: "p-3 bg-destructive/10 border border-destructive/20 rounded-md text-destructive text-sm font-medium",
				children: error
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex items-center justify-between gap-4 flex-wrap pt-2",
				children: [/* @__PURE__ */ jsx("p", {
					className: "text-xs text-muted-foreground max-w-md",
					children: "By submitting, you agree to be contacted regarding your loan inquiry. Your information is handled confidentially and never shared without consent."
				}), /* @__PURE__ */ jsx(Button, {
					type: "submit",
					variant: "hero",
					size: "lg",
					disabled: isSubmitting,
					children: isSubmitting ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Loader2, { className: "size-4 animate-spin" }), " Sending…"] }) : submitted ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(CheckCircle2, { className: "size-4" }), " enquiry submitted"] }) : "Request Callback"
				})]
			})
		]
	});
}
function Field({ label, error, children }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-1.5",
		children: [
			/* @__PURE__ */ jsx(Label, {
				className: "text-sm font-medium text-foreground",
				children: label
			}),
			children,
			error && /* @__PURE__ */ jsx("p", {
				className: "text-xs text-destructive",
				children: error
			})
		]
	});
}
//#endregion
//#region src/routes/contact.tsx?tsr-split=component
function ContactPage() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("section", {
		className: "hero-bg border-b border-border",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container-page py-14 md:py-20 text-center",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-[var(--teal)] uppercase tracking-wide",
					children: "Contact"
				}),
				/* @__PURE__ */ jsx("h1", {
					className: "mt-5 text-4xl md:text-5xl font-semibold tracking-tight max-w-3xl mx-auto leading-tight",
					children: "Let’s talk about your loan."
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-5 text-muted-foreground max-w-xl mx-auto",
					children: "One short conversation tells us if we’re the right fit. No obligation, no pressure."
				})
			]
		})
	}), /* @__PURE__ */ jsxs("section", {
		className: "container-page py-14 md:py-20 grid lg:grid-cols-12 gap-8",
		children: [/* @__PURE__ */ jsx("div", {
			className: "lg:col-span-7",
			children: /* @__PURE__ */ jsxs("div", {
				className: "surface-card p-6 md:p-8",
				children: [
					/* @__PURE__ */ jsx("h2", {
						className: "font-display text-2xl font-semibold text-foreground",
						children: "Request a callback"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: "Fill the form and we’ll call you back during working hours."
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mt-6",
						children: /* @__PURE__ */ jsx(ContactForm, {})
					})
				]
			})
		}), /* @__PURE__ */ jsxs("aside", {
			className: "lg:col-span-5 space-y-4",
			children: [
				/* @__PURE__ */ jsx(ContactBlock, {
					icon: Phone,
					title: "Call directly",
					value: advisor.phone,
					cta: /* @__PURE__ */ jsx("a", {
						href: advisor.phoneHref,
						children: /* @__PURE__ */ jsxs(Button, {
							variant: "navy",
							className: "w-full",
							children: [/* @__PURE__ */ jsx(Phone, {}), " Call Now"]
						})
					})
				}),
				/* @__PURE__ */ jsx(ContactBlock, {
					icon: MessageCircle,
					title: "WhatsApp",
					value: "Fastest way to share documents",
					cta: /* @__PURE__ */ jsx("a", {
						href: advisor.whatsapp,
						target: "_blank",
						rel: "noreferrer",
						children: /* @__PURE__ */ jsxs(Button, {
							variant: "whatsapp",
							className: "w-full",
							children: [/* @__PURE__ */ jsx(MessageCircle, {}), " Chat on WhatsApp"]
						})
					})
				}),
				/* @__PURE__ */ jsx(ContactBlock, {
					icon: Mail,
					title: "Email",
					value: advisor.email
				}),
				/* @__PURE__ */ jsx(ContactBlock, {
					icon: MapPin,
					title: "Office / Area Served",
					value: advisor.city
				}),
				/* @__PURE__ */ jsx(ContactBlock, {
					icon: Clock,
					title: "Working hours",
					value: advisor.hours
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "surface-card p-5 flex items-start gap-3 bg-[var(--surface-alt)]/50",
					children: [/* @__PURE__ */ jsx(ShieldCheck, { className: "size-5 text-[var(--teal)] mt-0.5 shrink-0" }), /* @__PURE__ */ jsxs("p", {
						className: "text-xs text-muted-foreground leading-relaxed",
						children: [
							"We are an ",
							/* @__PURE__ */ jsx("strong", {
								className: "text-foreground",
								children: "independent loan advisory & DSA"
							}),
							" ",
							"service. We are not a bank or NBFC. All loan sanctions and disbursals are at the discretion of partner lenders. Your information stays confidential."
						]
					})]
				})
			]
		})]
	})] });
}
function ContactBlock({ icon: Icon, title, value, cta }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "surface-card p-5",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex items-center gap-3",
			children: [/* @__PURE__ */ jsx("div", {
				className: "grid place-items-center h-11 w-11 rounded-lg bg-[color-mix(in_oklab,var(--teal)_12%,white)] text-[var(--teal)] shrink-0",
				children: /* @__PURE__ */ jsx(Icon, { className: "size-5" })
			}), /* @__PURE__ */ jsxs("div", {
				className: "min-w-0",
				children: [/* @__PURE__ */ jsx("div", {
					className: "text-xs uppercase tracking-wide text-muted-foreground font-semibold",
					children: title
				}), /* @__PURE__ */ jsx("div", {
					className: "text-sm font-medium text-foreground truncate",
					children: value
				})]
			})]
		}), cta && /* @__PURE__ */ jsx("div", {
			className: "mt-4",
			children: cta
		})]
	});
}
//#endregion
export { ContactPage as component };
