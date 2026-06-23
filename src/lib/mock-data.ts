import {
  Home,
  User,
  Briefcase,
  Building2,
  Car,
  Repeat,
  ArrowUpCircle,
  GraduationCap,
  HardHat,
  Stethoscope,
  Landmark,
  type LucideIcon,
} from "lucide-react";

export const advisor = {
  name: "Ashish Garg",
  shortName: "Ashish",
  role: "Loan Advisor & DSA Partner",
  tagline:
    "Trusted Loan Advisor helping you get the right loan with the right guidance.",
  subtag:
    "From document review and eligibility check to bank matching and disbursal coordination — end-to-end loan assistance you can rely on.",
  phone: "+91 9779610430",
  phoneHref: "tel:+919779610430",
  whatsapp: "https://wa.me/919779610430",
  email: "baloanadvisor.com",
  city: "Ludhiana, Punjab",
  hours: "Mon – Sat · 10:00 AM – 7:30 PM",
  experienceYears: "12+",
  cities: ["lhudiana", "jalandhar", "Amritsar", "Mohali", "Panchkula", "chandigarh"],
  photo: "/asset/IMG-20260623-WA0000.jpg",
  logo: "/asset/IMG-20260623-WA0001.jpg",
};

export type Service = {
  slug: string;
  title: string;
  icon: LucideIcon;
  short: string;
  description: string;
  forWho: string[];
  eligibility: string[];
  documents: string[];
};

export const services: Service[] = [
  {
    slug: "home-loan",
    title: "Home Loan",
    icon: Home,
    short: "Buy, construct or renovate — competitive rates from 20+ lenders.",
    description:
      "End-to-end assistance for purchase, construction, plot + construction, and home improvement loans with the lowest rate match across partner banks.",
    forWho: ["Salaried & self-employed", "First-time home buyers", "NRI applicants"],
    eligibility: [
      "Age 21–65 years",
      "Minimum monthly income ₹30,000",
      "CIBIL score 700+",
      "Stable income for 2+ years",
    ],
    documents: [
      "PAN, Aadhaar, address proof",
      "Last 3 months salary slips / 2 yrs ITR",
      "6 months bank statements",
      "Property documents / agreement",
    ],
  },
  {
    slug: "personal-loan",
    title: "Personal Loan",
    icon: User,
    short: "Unsecured funds for weddings, travel, education or emergencies.",
    description:
      "Quick disbursal personal loans up to ₹40 lakhs with flexible tenure and pre-approved offers from leading private banks and NBFCs.",
    forWho: ["Salaried professionals", "Working professionals 23–58"],
    eligibility: [
      "Age 23–58 years",
      "Net salary ₹25,000+",
      "CIBIL score 720+",
      "1+ year in current job",
    ],
    documents: [
      "PAN, Aadhaar",
      "3 months salary slips",
      "6 months salaried bank statement",
      "Company offer / appointment letter",
    ],
  },
  {
    slug: "business-loan",
    title: "Business Loan",
    icon: Briefcase,
    short: "Working capital, expansion, machinery — collateral-free options.",
    description:
      "Unsecured & secured business loans for MSMEs, traders, manufacturers and professionals. Overdraft, term loan, and machinery finance.",
    forWho: ["Proprietors & partnerships", "Pvt Ltd companies", "Professionals (CA/Doctors)"],
    eligibility: [
      "Business vintage 2+ years",
      "Annual turnover ₹40 lakhs+",
      "ITR filed for 2 years",
      "Profitable last financial year",
    ],
    documents: [
      "PAN of entity & promoter",
      "GST returns last 12 months",
      "2 years ITR + audited financials",
      "Bank statements 12 months",
    ],
  },
  {
    slug: "loan-against-property",
    title: "Loan Against Property",
    icon: Building2,
    short: "Unlock the value of your residential or commercial property.",
    description:
      "Mortgage your owned property to raise large-ticket funds for business, education or debt consolidation at attractive long-tenure rates.",
    forWho: ["Property owners", "Business expansion needs", "Debt consolidation"],
    eligibility: [
      "Clear, marketable property title",
      "Age 25–65 years",
      "Stable income source",
      "Loan up to 65% of property value",
    ],
    documents: [
      "Property chain documents",
      "Income proofs (3 yrs)",
      "Bank statements 12 months",
      "KYC of all owners",
    ],
  },
  {
    slug: "car-loan",
    title: "Car Loan",
    icon: Car,
    short: "New & used vehicles — up to 100% on-road funding available.",
    description:
      "Pre-approved car loan offers with same-day sanction and dealership coordination across major manufacturers and pre-owned platforms.",
    forWho: ["First-time buyers", "Used car buyers", "Commercial vehicle owners"],
    eligibility: [
      "Age 21–65",
      "Net income ₹25,000+",
      "1 year work / business continuity",
      "Valid driving license",
    ],
    documents: [
      "KYC documents",
      "Income proof",
      "Bank statement 3 months",
      "Vehicle quotation / RC",
    ],
  },
  {
    slug: "balance-transfer",
    title: "Balance Transfer",
    icon: Repeat,
    short: "Move your existing loan to a lower rate and save lakhs in interest.",
    description:
      "Reduce EMI burden with rate negotiation across lenders. We compare 15+ banks to find the best switch for your home or LAP.",
    forWho: ["Existing home loan borrowers", "LAP borrowers", "High-rate legacy loans"],
    eligibility: [
      "12+ EMIs already paid",
      "Clean repayment track",
      "CIBIL 720+",
      "Outstanding ₹15 lakhs+",
    ],
    documents: [
      "Existing loan statement",
      "Sanction letter & list of documents",
      "Latest income proof",
      "Property documents",
    ],
  },
  {
    slug: "top-up-loan",
    title: "Top-up Loan",
    icon: ArrowUpCircle,
    short: "Additional funds on your existing home loan with minimal paperwork.",
    description:
      "Quick top-up on running home loan or LAP with same-rate or marginal-rate pricing — ideal for renovation or business top-up.",
    forWho: ["Existing home loan customers", "Renovation needs", "Short-term liquidity"],
    eligibility: [
      "Existing home loan with 12+ EMIs",
      "Good repayment history",
      "Sufficient property value headroom",
    ],
    documents: [
      "Existing loan statement",
      "Updated income proof",
      "Latest bank statements",
      "KYC documents",
    ],
  },
  {
    slug: "education-loan",
    title: "Education Loan",
    icon: GraduationCap,
    short: "Fund domestic or overseas studies with collateral & non-collateral options.",
    description:
      "End-to-end assistance for undergraduate, postgraduate and study-abroad loans with moratorium-period structuring across leading lenders.",
    forWho: ["UG / PG aspirants", "Study-abroad applicants", "Co-applicant parents"],
    eligibility: [
      "Admission to recognised institute",
      "Indian resident co-applicant",
      "Stable family income",
      "Loan up to ₹1.5 Cr (secured)",
    ],
    documents: [
      "Admission letter & fee structure",
      "KYC of student & co-applicant",
      "Co-applicant income proof",
      "Academic mark sheets",
    ],
  },
  {
    slug: "construction-loan",
    title: "Construction Loan",
    icon: HardHat,
    short: "Stage-wise disbursal for self-construction on owned plots.",
    description:
      "Plot-plus-construction and pure construction loans with valuation-linked tranches and architect-coordinated disbursal schedules.",
    forWho: ["Plot owners", "Self-construction projects", "Joint family builds"],
    eligibility: [
      "Clear plot title in applicant's name",
      "Approved building plan",
      "Age 25–60",
      "Stable income for 2+ years",
    ],
    documents: [
      "Plot chain documents",
      "Sanctioned construction plan",
      "Cost estimate & BOQ",
      "Income & KYC proofs",
    ],
  },
  {
    slug: "professional-loan",
    title: "Professional Loan",
    icon: Stethoscope,
    short: "Tailored funding for doctors, CAs, architects and consultants.",
    description:
      "Unsecured loans for clinic setup, equipment, chamber expansion or working capital — priced on profession-specific underwriting.",
    forWho: ["Doctors & dentists", "CAs & company secretaries", "Architects & consultants"],
    eligibility: [
      "Valid professional registration",
      "2+ years post-qualification",
      "ITR filed for last 2 years",
      "Stable practice income",
    ],
    documents: [
      "Degree & registration certificate",
      "ITR + computation 2 years",
      "Bank statements 12 months",
      "KYC documents",
    ],
  },
  {
    slug: "mortgage-loan",
    title: "Mortgage Loan",
    icon: Landmark,
    short: "Long-tenure secured funding against residential or commercial property.",
    description:
      "Large-ticket mortgage loans with structured repayment, overdraft variants and lease-rental discounting for commercial property owners.",
    forWho: ["Property owners", "Business expansion", "Long-term capital needs"],
    eligibility: [
      "Owned residential / commercial property",
      "Loan up to 70% of market value",
      "Age 25–65",
      "Documented income source",
    ],
    documents: [
      "Property title chain",
      "Income proofs (2–3 yrs)",
      "Bank statements 12 months",
      "KYC of all owners",
    ],
  },
];

export const stats = [
  { label: "Years of Experience", value: 12, suffix: "+" },
  { label: "Happy Clients Served", value: 1800, suffix: "+" },
  { label: "Loans Successfully Disbursed", value: 1450, suffix: "+" },
  { label: "Max Single Loan Arranged", value: 12, suffix: " Cr" },
  { label: "Total Loan Value Facilitated", value: 850, suffix: " Cr+" },
  { label: "Partner Banks & NBFCs", value: 28, suffix: "+" },
];

export const partners = [
  "HDFC Bank",
  "ICICI Bank",
  "Axis Bank",
  "Kotak Mahindra",
  "Bajaj Finserv",
  "Tata Capital",
  "L&T Finance",
  "IDFC FIRST",
  "Yes Bank",
  "PNB Housing",
  "LIC HFL",
  "IIFL Finance",
];

export const testimonials = [
  {
    name: "Anhad Sharma",
    city: "Amritsar",
    loanType: "Home Loan",
    amount: "₹ 1.25 Cr",
    rating: 5,
    review:
      "Ashish made our first home purchase effortless. He compared three banks, negotiated a 0.35% lower rate and handled every document himself.",
    outcome: "Sanction in 9 working days · 8.40% floating",
  },
  {
    name: "Chirag Rawat",
    city: "Gurugram",
    loanType: "Business Loan",
    amount: "₹ 45 Lakhs",
    rating: 5,
    review:
      "We were rejected twice on our own. Ashish restructured our financials presentation and got us a collateral-free working capital line.",
    outcome: "Approved with 2 lenders · chose Tata Capital",
  },
  {
    name: "Dushand",
    city: "Jalandhar",
    loanType: "Loan Against Property",
    amount: "₹ 3.10 Cr",
    rating: 5,
    review:
      "Genuine advisor — no hidden charges, no false promises. The legal & technical coordination on our commercial property was outstanding.",
    outcome: "LAP at 9.10% · 15-year tenure",
  },
  {
    name: "Neha Kapoor",
    city: "Chandigarh",
    loanType: "Balance Transfer",
    amount: "₹ 78 Lakhs",
    rating: 5,
    review:
      "Switched our home loan and saved ~₹14 lakhs in interest over the remaining tenure. Process was completely paper-light.",
    outcome: "Rate reduced from 9.55% → 8.55%",
  },
  {
    name: "Brick Missing",
    city: "Navi Mumbai",
    loanType: "Personal Loan",
    amount: "₹ 18 Lakhs",
    rating: 5,
    review:
      "Needed emergency funds for a medical situation. Disbursed in 36 hours with full transparency on charges and EMI.",
    outcome: "Disbursed in 2 days · 10.99% reducing",
  },
  {
    name: "Saksham",
    city: "Ludhiana",
    loanType: "Home Loan",
    amount: "₹ 62 Lakhs",
    rating: 5,
    review:
      "As a self-employed consultant my profile was complex. Ashish picked the right NBFC and got me a better rate than my own banker offered.",
    outcome: "Sanction in 11 days · 8.75% fixed-floating",
  },
];

export const processSteps = [
  {
    title: "Consultation",
    description:
      "Share your requirement on call or WhatsApp. We understand your goal, income profile and timeline.",
  },
  {
    title: "Eligibility Review",
    description:
      "Detailed eligibility check across 28+ partner banks and NBFCs based on your income, credit and profile.",
  },
  {
    title: "Document Verification",
    description:
      "A personalised document checklist, format review and pre-submission verification — no surprises later.",
  },
  {
    title: "Submission to Partner Institutions",
    description:
      "We shortlist 2–3 best-fit lenders, file your application and coordinate legal & technical clearances.",
  },
  {
    title: "Approval & Disbursal",
    description:
      "Sanction letter, disbursal coordination, EMI setup and lifetime guidance on top-ups or balance transfers.",
  },
];

export const reasonsToChoose = [
  {
    title: "12+ years in retail lending",
    description: "Hands-on experience across mortgages, MSME loans and unsecured products.",
  },
  {
    title: "28+ partner banks & NBFCs",
    description: "One profile, multiple offers — we pick the lender that fits you, not the other way round.",
  },
  {
    title: "Transparent & ethical",
    description: "No hidden charges, no false promises. You see every fee before you sign.",
  },
  {
    title: "End-to-end handling",
    description: "From document pickup to sanction to disbursal — we coordinate so you don’t have to.",
  },
  {
    title: "Post-disbursal support",
    description: "Yearly rate reviews, balance transfer alerts and free top-up guidance for life.",
  },
  {
    title: "Self-employed friendly",
    description: "Specialist in CA-style profiling for proprietors, doctors and consultants.",
  },
];

export const caseStudies = [
  {
    icon: Home,
    tag: "Home Loan Assistance",
    title: "First-time home buyer · Mumbai",
    challenge:
      "Self-employed applicant rejected by 2 banks due to inconsistent ITR pattern.",
    solution:
      "Restructured income presentation, matched profile to an NBFC specialising in self-employed underwriting.",
    outcome: "Sanction in 9 days · ₹1.25 Cr at 8.40% floating",
  },
  {
    icon: Briefcase,
    tag: "Business Expansion",
    title: "MSME working-capital line · Pune",
    challenge:
      "Trading business needed ₹45L unsecured for a new warehouse — declined twice on own application.",
    solution:
      "Re-presented financials to 3 lenders, negotiated collateral-free OD with flexible drawdown.",
    outcome: "Approved by 2 lenders · chose Tata Capital",
  },
  {
    icon: Repeat,
    tag: "Balance Transfer Savings",
    title: "Home loan switch · Thane",
    challenge:
      "Existing home loan running at 9.55% — ₹78L outstanding, 14 years left.",
    solution:
      "Negotiated rate-match across 4 banks; handled documentation and lien transfer end-to-end.",
    outcome: "Rate cut to 8.55% · ~₹14L interest saved",
  },
  {
    icon: Building2,
    tag: "Loan Against Property",
    title: "Commercial LAP · Ahmedabad",
    challenge:
      "Owner needed ₹3.1 Cr against commercial unit with complex title chain.",
    solution:
      "Coordinated legal & technical, structured tranche disbursal, locked a 9.10% rate.",
    outcome: "Sanction in 18 days · 15-year tenure",
  },
];

export const timeline = [
  {
    year: "2013 – 2016",
    role: "Relationship Manager · HDFC Bank",
    description: "Retail mortgages and salaried personal loans for the Western Mumbai region.",
  },
  {
    year: "2016 – 2019",
    role: "Senior Credit Manager · Bajaj Finserv",
    description: "Underwriting and structuring unsecured business loans for MSMEs.",
  },
  {
    year: "2019 – 2022",
    role: "Regional Channel Head · Tata Capital",
    description: "Built a 40-member DSA channel across Maharashtra & Gujarat.",
  },
  {
    year: "2022 – Present",
    role: "Independent Loan Advisor & DSA Partner",
    description: "Direct advisory practice partnered with 28+ banks and NBFCs.",
  },
];

export const faqs = [
  {
    q: "Which documents do I need to apply for a loan?",
    a: "It depends on the loan type, but typically KYC (PAN + Aadhaar), income proofs (salary slips or 2 yrs ITR), 6 months bank statements, and property documents for secured loans. We send a personalised checklist after the first call.",
  },
  {
    q: "How long does loan approval take?",
    a: "Personal loans are typically sanctioned in 1–3 working days. Home loans and LAP take 7–15 working days depending on legal & technical clearance of the property.",
  },
  {
    q: "Which loan types do you handle?",
    a: "Home Loan, Personal Loan, Business Loan, Loan Against Property, Car Loan, Balance Transfer and Top-up Loan across 28+ banks and NBFCs.",
  },
  {
    q: "Do you charge any fees from clients?",
    a: "Our advisory itself is free. The lender pays us a standard DSA payout on disbursal. Any processing or legal-technical fees charged by the bank are disclosed upfront in writing.",
  },
  {
    q: "Which banks and NBFCs do you work with?",
    a: "HDFC, ICICI, Axis, Kotak, Yes Bank, IDFC FIRST, Bajaj Finserv, Tata Capital, L&T Finance, PNB Housing, LIC HFL, IIFL and 16+ more.",
  },
  {
    q: "Can self-employed and small business owners apply?",
    a: "Absolutely — a large part of our practice is structuring loans for proprietors, partnerships, doctors, CAs and small Pvt Ltd companies based on ITR, GST and banking turnover.",
  },
  {
    q: "What is the minimum income required?",
    a: "For personal loans, net salary ₹25,000+ in metros. For home loans, ₹30,000+ household income. Business loans depend on turnover and ITR rather than salary.",
  },
];

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Case Studies" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;