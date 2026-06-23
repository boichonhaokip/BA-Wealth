import { t as advisor } from "./mock-data-tJxPjfvo.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
//#region src/routes/privacy-policy.tsx?tsr-split=component
function PrivacyPolicyPage() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("section", {
		className: "hero-bg border-b border-border",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container-page py-14 md:py-16 text-center",
			children: [/* @__PURE__ */ jsx("h1", {
				className: "text-3xl md:text-4xl font-semibold tracking-tight text-foreground",
				children: "Privacy Policy"
			}), /* @__PURE__ */ jsx("p", {
				className: "mt-4 text-muted-foreground",
				children: "Last updated: June 2026"
			})]
		})
	}), /* @__PURE__ */ jsx("section", {
		className: "container-page py-16 md:py-20",
		children: /* @__PURE__ */ jsx(motion.div, {
			initial: {
				opacity: 0,
				y: 15
			},
			animate: {
				opacity: 1,
				y: 0
			},
			transition: { duration: .5 },
			className: "max-w-3xl mx-auto prose prose-slate prose-headings:font-display prose-headings:font-semibold prose-a:text-[var(--teal)] prose-strong:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground",
			children: /* @__PURE__ */ jsxs("div", {
				className: "space-y-10",
				children: [
					/* @__PURE__ */ jsxs("section", { children: [/* @__PURE__ */ jsx("h2", {
						className: "text-xl font-semibold text-foreground border-b border-border pb-3 mb-5",
						children: "1. Introduction"
					}), /* @__PURE__ */ jsxs("p", { children: [
						"Welcome to the website of ",
						/* @__PURE__ */ jsx("strong", { children: advisor.name }),
						" (\"we,\" \"us,\" or \"our\"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website and use our loan advisory services."
					] })] }),
					/* @__PURE__ */ jsxs("section", { children: [
						/* @__PURE__ */ jsx("h2", {
							className: "text-xl font-semibold text-foreground border-b border-border pb-3 mb-5",
							children: "2. Information We Collect"
						}),
						/* @__PURE__ */ jsx("p", { children: "We collect personal information that you voluntarily provide to us when you fill out an enquiry form on our website. This includes:" }),
						/* @__PURE__ */ jsxs("ul", {
							className: "list-disc pl-5 mt-4 space-y-2",
							children: [
								/* @__PURE__ */ jsx("li", { children: "Full Name" }),
								/* @__PURE__ */ jsx("li", { children: "Email Address" }),
								/* @__PURE__ */ jsx("li", { children: "Phone Number" }),
								/* @__PURE__ */ jsx("li", { children: "City / Area of Residence" }),
								/* @__PURE__ */ jsx("li", { children: "Loan Enquiry Details (Inquiry Type, Required Amount)" }),
								/* @__PURE__ */ jsx("li", { children: "Messages or comments submitted through the contact form" })
							]
						})
					] }),
					/* @__PURE__ */ jsxs("section", { children: [
						/* @__PURE__ */ jsx("h2", {
							className: "text-xl font-semibold text-foreground border-b border-border pb-3 mb-5",
							children: "3. How We Use Your Information"
						}),
						/* @__PURE__ */ jsx("p", { children: "We use the information we collect solely for professional purposes, including:" }),
						/* @__PURE__ */ jsxs("ul", {
							className: "list-disc pl-5 mt-4 space-y-2",
							children: [
								/* @__PURE__ */ jsx("li", { children: "Responding to your loan enquiries and callback requests." }),
								/* @__PURE__ */ jsx("li", { children: "Providing personalized loan consultation and guidance." }),
								/* @__PURE__ */ jsx("li", { children: "Contacting you via phone, WhatsApp, or email regarding your specific requirements." }),
								/* @__PURE__ */ jsx("li", { children: "Assisting with documentation and bank matching for loan applications." }),
								/* @__PURE__ */ jsx("li", { children: "Improving our website and service delivery." })
							]
						})
					] }),
					/* @__PURE__ */ jsxs("section", { children: [/* @__PURE__ */ jsx("h2", {
						className: "text-xl font-semibold text-foreground border-b border-border pb-3 mb-5",
						children: "4. Data Processing and Email Services"
					}), /* @__PURE__ */ jsx("p", { children: "To provide efficient communication, your enquiries submitted via our website may be processed using third-party transactional email providers such as **Resend**. These services are used strictly to deliver your enquiry to us and are not authorized to use your data for marketing or any other purposes." })] }),
					/* @__PURE__ */ jsxs("section", { children: [/* @__PURE__ */ jsx("h2", {
						className: "text-xl font-semibold text-foreground border-b border-border pb-3 mb-5",
						children: "5. Data Sharing and Disclosure"
					}), /* @__PURE__ */ jsx("p", { children: "We do not sell, rent, or trade your personal information to third parties. Your information is shared only when necessary to facilitate your requested services — such as when submitting your application to a partner bank or NBFC on your behalf — or to comply with legal obligations." })] }),
					/* @__PURE__ */ jsxs("section", { children: [/* @__PURE__ */ jsx("h2", {
						className: "text-xl font-semibold text-foreground border-b border-border pb-3 mb-5",
						children: "6. Data Security"
					}), /* @__PURE__ */ jsx("p", { children: "We implement reasonable technical and organizational security measures to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure. Transmission of personal information to and from our website is at your own risk." })] }),
					/* @__PURE__ */ jsxs("section", { children: [/* @__PURE__ */ jsx("h2", {
						className: "text-xl font-semibold text-foreground border-b border-border pb-3 mb-5",
						children: "7. Cookies and Analytics"
					}), /* @__PURE__ */ jsx("p", { children: "Our website may use standard cookies or basic analytics to understand website traffic and improve user experience. You can choose to set your web browser to refuse cookies, or to alert you when cookies are being sent." })] }),
					/* @__PURE__ */ jsxs("section", { children: [/* @__PURE__ */ jsx("h2", {
						className: "text-xl font-semibold text-foreground border-b border-border pb-3 mb-5",
						children: "8. Your Rights"
					}), /* @__PURE__ */ jsxs("p", { children: [
						"In accordance with applicable laws, you have the right to request access to, correction of, or deletion of the personal information we collect from you. To exercise these rights, please contact us at ",
						/* @__PURE__ */ jsx("strong", { children: advisor.email }),
						"."
					] })] }),
					/* @__PURE__ */ jsxs("section", { children: [/* @__PURE__ */ jsx("h2", {
						className: "text-xl font-semibold text-foreground border-b border-border pb-3 mb-5",
						children: "9. Contact Us"
					}), /* @__PURE__ */ jsxs("p", { children: [
						"If you have questions or comments about this policy, you may contact us at:",
						/* @__PURE__ */ jsx("br", {}),
						/* @__PURE__ */ jsx("br", {}),
						/* @__PURE__ */ jsx("strong", { children: advisor.name }),
						/* @__PURE__ */ jsx("br", {}),
						advisor.city,
						/* @__PURE__ */ jsx("br", {}),
						"Email: ",
						advisor.email,
						/* @__PURE__ */ jsx("br", {}),
						"Phone: ",
						advisor.phone
					] })] })
				]
			})
		})
	})] });
}
//#endregion
export { PrivacyPolicyPage as component };
