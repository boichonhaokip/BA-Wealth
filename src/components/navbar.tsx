import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import { navLinks, advisor } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300",
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border"
          : "bg-background/0 border-b border-transparent",
      )}
    >
      <div className="container-page flex h-16 items-center justify-between md:h-[4.5rem]">
        <Link to="/" className="flex items-center gap-2.5 group" onClick={() => setOpen(false)}>
          <img 
            src={advisor.logo} 
            alt="Logo" 
            className="h-9 w-9 rounded-lg object-contain"
          />
          <span className="flex flex-col leading-tight">
            <span className="font-display font-semibold text-[15px] text-foreground">
              {advisor.name}
            </span>
            <span className="text-[11px] text-muted-foreground tracking-wide uppercase">
              Loan Advisor · DSA
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              activeProps={{
                className:
                  "px-3 py-2 rounded-md text-sm font-semibold text-foreground bg-[var(--surface-alt)]",
              }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <a href={advisor.phoneHref} className="hidden xl:inline-flex">
            <Button variant="soft" size="sm">
              <Phone /> {advisor.phone}
            </Button>
          </a>
          <Link to="/contact">
            <Button variant="hero" size="sm">
              Get Free Consultation
            </Button>
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          className="lg:hidden grid place-items-center h-10 w-10 rounded-md hover:bg-[var(--surface-alt)]"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-page py-4 flex flex-col gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 rounded-md text-sm font-medium text-muted-foreground hover:bg-[var(--surface-alt)]"
                activeProps={{
                  className:
                    "px-3 py-2.5 rounded-md text-sm font-semibold text-foreground bg-[var(--surface-alt)]",
                }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <div className="flex gap-2 pt-3">
              <a href={advisor.phoneHref} className="flex-1">
                <Button variant="soft" className="w-full">
                  <Phone /> Call
                </Button>
              </a>
              <Link to="/contact" className="flex-1" onClick={() => setOpen(false)}>
                <Button variant="hero" className="w-full">
                  Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}