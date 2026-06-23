import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Clock, ShieldCheck } from "lucide-react";
import { advisor, navLinks, services } from "@/lib/mock-data";

export function Footer() {
  return (
    <footer className="navy-bg mt-24">
      <div className="container-page py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <img
              src={advisor.logo}
              alt="Logo"
              className="h-10 w-10 rounded-lg object-contain"
            />
            <div className="leading-tight">
              <div className="font-display font-semibold text-white">{advisor.name}</div>
              <div className="text-xs text-white/60 uppercase tracking-wide">
                Loan Advisor · DSA
              </div>
            </div>
          </div>
          <p className="mt-4 text-sm text-white/70 max-w-xs">
            Independent loan advisory practice partnered with 28+ banks and NBFCs across
            Maharashtra & Gujarat.
          </p>
          <div className="mt-5 flex items-center gap-2 text-xs text-white/60">
            <ShieldCheck className="size-4 text-[var(--teal-soft)]" />
            Verified DSA Partner
          </div>
        </div>

        {/* <div>
          <h4 className="text-sm font-semibold text-white">Quick Links</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-white/70">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-white transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div> */}

        <div>
          <h4 className="text-sm font-semibold text-white">Legal</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-white/70">
            <li>
              <Link to="/disclaimer" className="hover:text-white transition-colors">
                Disclaimer
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms-and-conditions" className="hover:text-white transition-colors">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Services</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-white/70">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link to="/services" className="hover:text-white transition-colors">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Get in touch</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-2.5">
              <Phone className="size-4 mt-0.5 text-[var(--teal-soft)] shrink-0" />
              <a href={advisor.phoneHref} className="hover:text-white">
                {advisor.phone}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail className="size-4 mt-0.5 text-[var(--teal-soft)] shrink-0" />
              <a href={`mailto:${advisor.email}`} className="hover:text-white break-all">
                {advisor.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="size-4 mt-0.5 text-[var(--teal-soft)] shrink-0" />
              {advisor.city}
            </li>
            <li className="flex items-start gap-2.5">
              <Clock className="size-4 mt-0.5 text-[var(--teal-soft)] shrink-0" />
              {advisor.hours}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page py-6 flex flex-col md:flex-row md:items-center gap-3 justify-between text-xs text-white/55">
          <p>
            © {new Date().getFullYear()} {advisor.name}. All rights reserved.
          </p>
          <p className="md:max-w-2xl md:text-right leading-relaxed">
            <strong className="text-white/70">Disclaimer:</strong> We are an independent Loan
            Advisor / Direct Selling Agent (DSA) and are not a bank or NBFC. Loan approval,
            interest rates and lending decisions are made solely by the respective financial
            institution and are subject to eligibility and applicable policies.
          </p>
        </div>
      </div>
    </footer>
  );
}