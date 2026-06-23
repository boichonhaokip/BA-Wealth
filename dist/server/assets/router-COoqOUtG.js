import { c as services, i as navLinks, t as advisor } from "./mock-data-tJxPjfvo.js";
import { n as cn, t as Button } from "./button-D0FFsf6X.js";
import { useEffect, useState } from "react";
import { HeadContent, Link, Outlet, Scripts, createFileRoute, createRootRouteWithContext, createRouter, lazyRouteComponent, useRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CalendarClock, ClipboardCheck, Clock, Mail, MapPin, Menu, MessageCircle, Phone, Plus, ShieldCheck, X } from "lucide-react";
//#region src/styles.css?url
var styles_default = "/assets/styles-DOQYNZSQ.css";
//#endregion
//#region src/lib/error-reporting.ts
function reportError(error, context = {}) {
	if (typeof window === "undefined") return;
	console.error("[Error Report]", error, context);
	window.__appEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
//#endregion
//#region src/components/navbar.tsx
function Navbar() {
	const [open, setOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 8);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ jsxs("header", {
		className: cn("sticky top-0 z-40 w-full transition-all duration-300", scrolled ? "bg-background/85 backdrop-blur-md border-b border-border" : "bg-background/0 border-b border-transparent"),
		children: [/* @__PURE__ */ jsxs("div", {
			className: "container-page flex h-16 items-center justify-between md:h-[4.5rem]",
			children: [
				/* @__PURE__ */ jsxs(Link, {
					to: "/",
					className: "flex items-center gap-2.5 group",
					onClick: () => setOpen(false),
					children: [/* @__PURE__ */ jsx("img", {
						src: advisor.logo,
						alt: "Logo",
						className: "h-9 w-9 rounded-lg object-contain"
					}), /* @__PURE__ */ jsxs("span", {
						className: "flex flex-col leading-tight",
						children: [/* @__PURE__ */ jsx("span", {
							className: "font-display font-semibold text-[15px] text-foreground",
							children: advisor.name
						}), /* @__PURE__ */ jsx("span", {
							className: "text-[11px] text-muted-foreground tracking-wide uppercase",
							children: "Loan Advisor · DSA"
						})]
					})]
				}),
				/* @__PURE__ */ jsx("nav", {
					className: "hidden lg:flex items-center gap-1",
					children: navLinks.map((l) => /* @__PURE__ */ jsx(Link, {
						to: l.to,
						activeOptions: { exact: l.to === "/" },
						className: "px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground transition-colors",
						activeProps: { className: "px-3 py-2 rounded-md text-sm font-semibold text-foreground bg-[var(--surface-alt)]" },
						children: l.label
					}, l.to))
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "hidden md:flex items-center gap-2",
					children: [/* @__PURE__ */ jsx("a", {
						href: advisor.phoneHref,
						className: "hidden xl:inline-flex",
						children: /* @__PURE__ */ jsxs(Button, {
							variant: "soft",
							size: "sm",
							children: [
								/* @__PURE__ */ jsx(Phone, {}),
								" ",
								advisor.phone
							]
						})
					}), /* @__PURE__ */ jsx(Link, {
						to: "/contact",
						children: /* @__PURE__ */ jsx(Button, {
							variant: "hero",
							size: "sm",
							children: "Get Free Consultation"
						})
					})]
				}),
				/* @__PURE__ */ jsx("button", {
					"aria-label": "Toggle menu",
					className: "lg:hidden grid place-items-center h-10 w-10 rounded-md hover:bg-[var(--surface-alt)]",
					onClick: () => setOpen((v) => !v),
					children: open ? /* @__PURE__ */ jsx(X, { className: "size-5" }) : /* @__PURE__ */ jsx(Menu, { className: "size-5" })
				})
			]
		}), open && /* @__PURE__ */ jsx("div", {
			className: "lg:hidden border-t border-border bg-background",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-page py-4 flex flex-col gap-1",
				children: [navLinks.map((l) => /* @__PURE__ */ jsx(Link, {
					to: l.to,
					onClick: () => setOpen(false),
					className: "px-3 py-2.5 rounded-md text-sm font-medium text-muted-foreground hover:bg-[var(--surface-alt)]",
					activeProps: { className: "px-3 py-2.5 rounded-md text-sm font-semibold text-foreground bg-[var(--surface-alt)]" },
					activeOptions: { exact: l.to === "/" },
					children: l.label
				}, l.to)), /* @__PURE__ */ jsxs("div", {
					className: "flex gap-2 pt-3",
					children: [/* @__PURE__ */ jsx("a", {
						href: advisor.phoneHref,
						className: "flex-1",
						children: /* @__PURE__ */ jsxs(Button, {
							variant: "soft",
							className: "w-full",
							children: [/* @__PURE__ */ jsx(Phone, {}), " Call"]
						})
					}), /* @__PURE__ */ jsx(Link, {
						to: "/contact",
						className: "flex-1",
						onClick: () => setOpen(false),
						children: /* @__PURE__ */ jsx(Button, {
							variant: "hero",
							className: "w-full",
							children: "Consultation"
						})
					})]
				})]
			})
		})]
	});
}
//#endregion
//#region src/components/footer.tsx
function Footer() {
	return /* @__PURE__ */ jsxs("footer", {
		className: "navy-bg mt-24",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "container-page py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4",
			children: [
				/* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-2.5",
						children: [/* @__PURE__ */ jsx("img", {
							src: advisor.logo,
							alt: "Logo",
							className: "h-10 w-10 rounded-lg object-contain"
						}), /* @__PURE__ */ jsxs("div", {
							className: "leading-tight",
							children: [/* @__PURE__ */ jsx("div", {
								className: "font-display font-semibold text-white",
								children: advisor.name
							}), /* @__PURE__ */ jsx("div", {
								className: "text-xs text-white/60 uppercase tracking-wide",
								children: "Loan Advisor · DSA"
							})]
						})]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-4 text-sm text-white/70 max-w-xs",
						children: "Independent loan advisory practice partnered with 28+ banks and NBFCs across Maharashtra & Gujarat."
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-5 flex items-center gap-2 text-xs text-white/60",
						children: [/* @__PURE__ */ jsx(ShieldCheck, { className: "size-4 text-[var(--teal-soft)]" }), "Verified DSA Partner"]
					})
				] }),
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
					className: "text-sm font-semibold text-white",
					children: "Legal"
				}), /* @__PURE__ */ jsxs("ul", {
					className: "mt-4 space-y-2.5 text-sm text-white/70",
					children: [
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
							to: "/disclaimer",
							className: "hover:text-white transition-colors",
							children: "Disclaimer"
						}) }),
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
							to: "/privacy-policy",
							className: "hover:text-white transition-colors",
							children: "Privacy Policy"
						}) }),
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
							to: "/terms-and-conditions",
							className: "hover:text-white transition-colors",
							children: "Terms & Conditions"
						}) })
					]
				})] }),
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
					className: "text-sm font-semibold text-white",
					children: "Services"
				}), /* @__PURE__ */ jsx("ul", {
					className: "mt-4 space-y-2.5 text-sm text-white/70",
					children: services.slice(0, 6).map((s) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
						to: "/services",
						className: "hover:text-white transition-colors",
						children: s.title
					}) }, s.slug))
				})] }),
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
					className: "text-sm font-semibold text-white",
					children: "Get in touch"
				}), /* @__PURE__ */ jsxs("ul", {
					className: "mt-4 space-y-3 text-sm text-white/70",
					children: [
						/* @__PURE__ */ jsxs("li", {
							className: "flex items-start gap-2.5",
							children: [/* @__PURE__ */ jsx(Phone, { className: "size-4 mt-0.5 text-[var(--teal-soft)] shrink-0" }), /* @__PURE__ */ jsx("a", {
								href: advisor.phoneHref,
								className: "hover:text-white",
								children: advisor.phone
							})]
						}),
						/* @__PURE__ */ jsxs("li", {
							className: "flex items-start gap-2.5",
							children: [/* @__PURE__ */ jsx(Mail, { className: "size-4 mt-0.5 text-[var(--teal-soft)] shrink-0" }), /* @__PURE__ */ jsx("a", {
								href: `mailto:${advisor.email}`,
								className: "hover:text-white break-all",
								children: advisor.email
							})]
						}),
						/* @__PURE__ */ jsxs("li", {
							className: "flex items-start gap-2.5",
							children: [/* @__PURE__ */ jsx(MapPin, { className: "size-4 mt-0.5 text-[var(--teal-soft)] shrink-0" }), advisor.city]
						}),
						/* @__PURE__ */ jsxs("li", {
							className: "flex items-start gap-2.5",
							children: [/* @__PURE__ */ jsx(Clock, { className: "size-4 mt-0.5 text-[var(--teal-soft)] shrink-0" }), advisor.hours]
						})
					]
				})] })
			]
		}), /* @__PURE__ */ jsx("div", {
			className: "border-t border-white/10",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-page py-6 flex flex-col md:flex-row md:items-center gap-3 justify-between text-xs text-white/55",
				children: [/* @__PURE__ */ jsxs("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ",
					advisor.name,
					". All rights reserved."
				] }), /* @__PURE__ */ jsxs("p", {
					className: "md:max-w-2xl md:text-right leading-relaxed",
					children: [/* @__PURE__ */ jsx("strong", {
						className: "text-white/70",
						children: "Disclaimer:"
					}), " We are an independent Loan Advisor / Direct Selling Agent (DSA) and are not a bank or NBFC. Loan approval, interest rates and lending decisions are made solely by the respective financial institution and are subject to eligibility and applicable policies."]
				})]
			})
		})]
	});
}
//#endregion
//#region src/components/floating-contact.tsx
var actions = [
	{
		label: "WhatsApp",
		href: advisor.whatsapp,
		icon: MessageCircle,
		bg: "bg-[#16A34A] hover:bg-[#15803d]",
		external: true
	},
	{
		label: "Call",
		href: advisor.phoneHref,
		icon: Phone,
		bg: "bg-[var(--navy)] hover:bg-[var(--navy-soft)]"
	},
	{
		label: "Email",
		href: `mailto:${advisor.email}`,
		icon: Mail,
		bg: "bg-[var(--teal)] hover:bg-[color-mix(in_oklab,var(--teal)_85%,black)]"
	},
	{
		label: "Book consultation",
		href: "/contact",
		icon: CalendarClock,
		bg: "bg-[color-mix(in_oklab,var(--gold)_85%,white)] hover:bg-[var(--gold)] text-[var(--navy)]"
	}
];
function FloatingContact() {
	const [open, setOpen] = useState(false);
	return /* @__PURE__ */ jsxs("div", {
		className: "fixed bottom-24 md:bottom-6 right-4 md:right-6 z-50 flex flex-col items-end gap-3",
		children: [open && actions.map((a, i) => {
			const Icon = a.icon;
			return /* @__PURE__ */ jsxs("a", {
				href: a.href,
				target: a.external ? "_blank" : void 0,
				rel: a.external ? "noreferrer" : void 0,
				"aria-label": a.label,
				style: { animationDelay: `${i * 40}ms` },
				className: "pop-in flex items-center gap-2.5 group",
				children: [/* @__PURE__ */ jsx("span", {
					className: "rounded-full bg-card text-foreground text-xs font-medium px-3 py-1.5 shadow-[var(--shadow-soft)] border border-border opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all",
					children: a.label
				}), /* @__PURE__ */ jsx("span", {
					className: "grid place-items-center h-11 w-11 rounded-full text-white shadow-[var(--shadow-elevated)] transition-colors " + a.bg,
					children: /* @__PURE__ */ jsx(Icon, {
						className: "size-5",
						strokeWidth: 2.2
					})
				})]
			}, a.label);
		}), /* @__PURE__ */ jsxs("button", {
			"aria-label": open ? "Close contact menu" : "Open contact menu",
			onClick: () => setOpen((v) => !v),
			className: "relative grid place-items-center h-14 w-14 rounded-full text-white shadow-[0_10px_30px_-8px_rgba(15,23,42,0.45)] transition-all hover:scale-105",
			style: { background: open ? "var(--navy)" : "linear-gradient(135deg, #16A34A 0%, var(--teal) 100%)" },
			children: [!open && /* @__PURE__ */ jsx("span", { className: "absolute inset-0 rounded-full bg-[#16A34A] opacity-30 animate-ping" }), /* @__PURE__ */ jsx("span", {
				className: "relative",
				children: open ? /* @__PURE__ */ jsx(X, { className: "size-6" }) : /* @__PURE__ */ jsx(Plus, { className: "size-6" })
			})]
		})]
	});
}
//#endregion
//#region src/components/mobile-action-bar.tsx
function MobileActionBar() {
	return /* @__PURE__ */ jsx("div", {
		className: "md:hidden fixed bottom-0 inset-x-0 z-40 border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85 shadow-[0_-6px_20px_-10px_rgba(15,23,42,0.18)]",
		children: /* @__PURE__ */ jsxs("div", {
			className: "grid grid-cols-3 text-xs font-semibold",
			children: [
				/* @__PURE__ */ jsxs("a", {
					href: advisor.phoneHref,
					className: "flex flex-col items-center justify-center gap-1 py-2.5 text-[var(--navy)] active:bg-[var(--surface-alt)]",
					children: [/* @__PURE__ */ jsx(Phone, { className: "size-5" }), "Call Now"]
				}),
				/* @__PURE__ */ jsxs("a", {
					href: advisor.whatsapp,
					target: "_blank",
					rel: "noreferrer",
					className: "flex flex-col items-center justify-center gap-1 py-2.5 text-white bg-[#16A34A] active:bg-[#15803d]",
					children: [/* @__PURE__ */ jsx(MessageCircle, { className: "size-5" }), "WhatsApp"]
				}),
				/* @__PURE__ */ jsxs(Link, {
					to: "/contact",
					className: "flex flex-col items-center justify-center gap-1 py-2.5 text-white bg-[var(--teal)] active:opacity-90",
					children: [/* @__PURE__ */ jsx(ClipboardCheck, { className: "size-5" }), "Check Eligibility"]
				})
			]
		})
	});
}
//#endregion
//#region src/routes/__root.tsx
function NotFoundComponent() {
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-6",
					children: /* @__PURE__ */ jsx(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	useEffect(() => {
		reportError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ jsx("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ jsx("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$11 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "BA — Trusted Loan Advisor & DSA Partner" },
			{
				name: "description",
				content: "Independent loan advisor helping you get the right home, business, personal or property loan from 28+ banks & NBFCs."
			},
			{
				name: "author",
				content: "Ashs"
			},
			{
				property: "og:title",
				content: "Ashs — Trusted Loan Advisor & DSA Partner"
			},
			{
				property: "og:description",
				content: "End-to-end loan assistance — eligibility, documentation, bank matching and disbursal coordination."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap"
			},
			{
				rel: "icon",
				type: "image/jpeg",
				href: "/asset/IMG-20260623-WA0001.jpg"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ jsxs("html", {
		lang: "en",
		children: [/* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }), /* @__PURE__ */ jsxs("body", { children: [children, /* @__PURE__ */ jsx(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$11.useRouteContext();
	return /* @__PURE__ */ jsx(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ jsxs("div", {
			className: "min-h-screen flex flex-col",
			children: [
				/* @__PURE__ */ jsx(Navbar, {}),
				/* @__PURE__ */ jsx("main", {
					className: "flex-1 pb-16 md:pb-0",
					children: /* @__PURE__ */ jsx(Outlet, {})
				}),
				/* @__PURE__ */ jsx(Footer, {}),
				/* @__PURE__ */ jsx(FloatingContact, {}),
				/* @__PURE__ */ jsx(MobileActionBar, {})
			]
		})
	});
}
//#endregion
//#region src/routes/testimonials.tsx
var $$splitComponentImporter$9 = () => import("./testimonials-1PELq-8y.js");
var Route$10 = createFileRoute("/testimonials")({
	head: () => ({ meta: [
		{ title: "Client Success Stories — Real outcomes, real numbers" },
		{
			name: "description",
			content: "Read verified client reviews of our loan advisory service: home loans, business loans, LAP, personal loans and balance transfers."
		},
		{
			property: "og:title",
			content: "Client Success Stories — Real outcomes, real numbers"
		},
		{
			property: "og:description",
			content: "What clients say after their loan is sanctioned and disbursed."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
//#endregion
//#region src/routes/terms-and-conditions.tsx
var $$splitComponentImporter$8 = () => import("./terms-and-conditions-Bd_8hEvq.js");
var Route$9 = createFileRoute("/terms-and-conditions")({
	head: () => ({ meta: [{ title: `Terms & Conditions — ${advisor.name}` }, {
		name: "description",
		content: `Terms and Conditions for using the loan advisory services of ${advisor.name}.`
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
//#endregion
//#region src/routes/sitemap[.]xml.ts
var BASE_URL = "https://ba-wealth.com";
var ROUTES = [
	{
		path: "/",
		changefreq: "weekly",
		priority: "1.0"
	},
	{
		path: "/about",
		changefreq: "monthly",
		priority: "0.8"
	},
	{
		path: "/services",
		changefreq: "monthly",
		priority: "0.9"
	},
	{
		path: "/portfolio",
		changefreq: "monthly",
		priority: "0.7"
	},
	{
		path: "/testimonials",
		changefreq: "monthly",
		priority: "0.6"
	},
	{
		path: "/faq",
		changefreq: "monthly",
		priority: "0.6"
	},
	{
		path: "/contact",
		changefreq: "monthly",
		priority: "0.9"
	}
];
var Route$8 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${ROUTES.map((e) => `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`).join("\n")}\n</urlset>`;
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
//#endregion
//#region src/routes/services.tsx
var $$splitComponentImporter$7 = () => import("./services-wvY5OqXu.js");
var Route$7 = createFileRoute("/services")({
	head: () => ({ meta: [
		{ title: "Loan Services — Home, Personal, Business, LAP & more" },
		{
			name: "description",
			content: "Detailed loan service offerings: home, personal, business, loan against property, car loan, balance transfer and top-up loans."
		},
		{
			property: "og:title",
			content: "Loan Services — Home, Personal, Business, LAP & more"
		},
		{
			property: "og:description",
			content: "Eligibility, documents and what to expect for each loan type."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
//#endregion
//#region src/routes/privacy-policy.tsx
var $$splitComponentImporter$6 = () => import("./privacy-policy-C0O1qfHB.js");
var Route$6 = createFileRoute("/privacy-policy")({
	head: () => ({ meta: [{ title: `Privacy Policy — ${advisor.name}` }, {
		name: "description",
		content: `Privacy Policy for ${advisor.name}. Learn how we collect, use, and protect your information when you enquire about loans.`
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
//#endregion
//#region src/routes/portfolio.tsx
var $$splitComponentImporter$5 = () => import("./portfolio-D8rL8yn_.js");
var Route$5 = createFileRoute("/portfolio")({
	head: () => ({ meta: [
		{ title: "Case Studies — Anonymised client journeys" },
		{
			name: "description",
			content: "Anonymised client case studies showing how the right loan structuring delivered better rates, faster sanctions and cleaner approvals."
		},
		{
			property: "og:title",
			content: "Case Studies — Anonymised client journeys"
		},
		{
			property: "og:description",
			content: "Real client outcomes across home, business, LAP and balance transfer loans."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
//#endregion
//#region src/routes/faq.tsx
var $$splitComponentImporter$4 = () => import("./faq-CIsWedhb.js");
var Route$4 = createFileRoute("/faq")({
	head: () => ({ meta: [
		{ title: "FAQ — Loan documents, approval time, fees & more" },
		{
			name: "description",
			content: "Answers to common questions about documents required, approval timelines, fees, supported loan types and eligibility."
		},
		{
			property: "og:title",
			content: "FAQ — Loan documents, approval time, fees & more"
		},
		{
			property: "og:description",
			content: "Quick answers about how the loan advisory process works."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
//#endregion
//#region src/routes/disclaimer.tsx
var $$splitComponentImporter$3 = () => import("./disclaimer-Dc9ei4pI.js");
var Route$3 = createFileRoute("/disclaimer")({
	head: () => ({ meta: [{ title: `Legal Disclaimer — ${advisor.name}` }, {
		name: "description",
		content: `Official legal disclaimer for ${advisor.name}. Clarifying the independent nature of our loan advisory services.`
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
//#endregion
//#region src/routes/contact.tsx
var $$splitComponentImporter$2 = () => import("./contact-ZoZctbz2.js");
var Route$2 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Contact — Talk to a real loan advisor" },
		{
			name: "description",
			content: "Get a free, no-obligation consultation. Call, WhatsApp or fill the form — we’ll respond within working hours."
		},
		{
			property: "og:title",
			content: "Contact — Talk to a real loan advisor"
		},
		{
			property: "og:description",
			content: "Loan advisory contact form, WhatsApp, phone and email."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
//#endregion
//#region src/routes/about.tsx
var $$splitComponentImporter$1 = () => import("./about-BBytfJqK.js");
var Route$1 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: `About ${advisor.name} — Loan Advisor Profile` },
		{
			name: "description",
			content: "12+ years of retail lending experience across HDFC, Bajaj Finserv & Tata Capital. Independent loan advisor based in Mumbai."
		},
		{
			property: "og:title",
			content: `About ${advisor.name} — Loan Advisor Profile`
		},
		{
			property: "og:description",
			content: "Profile, experience and approach of an independent loan advisor & DSA partner."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
//#endregion
//#region src/routes/index.tsx
var $$splitComponentImporter = () => import("./routes-DLo9SFmg.js");
var Route = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: `${advisor.name} — Loan Advisor & DSA Partner` },
		{
			name: "description",
			content: "12+ years experienced loan advisor helping you choose the right loan from 28+ banks & NBFCs. Home, business, personal, LAP & balance transfer."
		},
		{
			property: "og:title",
			content: `${advisor.name} — Loan Advisor & DSA Partner`
		},
		{
			property: "og:description",
			content: "End-to-end loan assistance — eligibility, documentation, bank matching and disbursal."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
//#region src/routeTree.gen.ts
var TestimonialsRoute = Route$10.update({
	id: "/testimonials",
	path: "/testimonials",
	getParentRoute: () => Route$11
});
var TermsAndConditionsRoute = Route$9.update({
	id: "/terms-and-conditions",
	path: "/terms-and-conditions",
	getParentRoute: () => Route$11
});
var SitemapDotxmlRoute = Route$8.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$11
});
var ServicesRoute = Route$7.update({
	id: "/services",
	path: "/services",
	getParentRoute: () => Route$11
});
var PrivacyPolicyRoute = Route$6.update({
	id: "/privacy-policy",
	path: "/privacy-policy",
	getParentRoute: () => Route$11
});
var PortfolioRoute = Route$5.update({
	id: "/portfolio",
	path: "/portfolio",
	getParentRoute: () => Route$11
});
var FaqRoute = Route$4.update({
	id: "/faq",
	path: "/faq",
	getParentRoute: () => Route$11
});
var DisclaimerRoute = Route$3.update({
	id: "/disclaimer",
	path: "/disclaimer",
	getParentRoute: () => Route$11
});
var ContactRoute = Route$2.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$11
});
var AboutRoute = Route$1.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$11
});
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$11
	}),
	AboutRoute,
	ContactRoute,
	DisclaimerRoute,
	FaqRoute,
	PortfolioRoute,
	PrivacyPolicyRoute,
	ServicesRoute,
	SitemapDotxmlRoute,
	TermsAndConditionsRoute,
	TestimonialsRoute
};
var routeTree = Route$11._addFileChildren(rootRouteChildren)._addFileTypes();
//#endregion
//#region src/router.tsx
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
