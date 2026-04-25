"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site-config";
import { Logo } from "@/components/site/Logo";
import { cn } from "@/lib/cn";

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-all duration-500 ease-cinematic",
        scrolled
          ? "backdrop-blur-md bg-shell/85 border-b border-shell-line/60"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-5 md:px-10 md:py-6">
        <a href="#hero" className="flex items-center gap-2 text-ink">
          <Logo />
          <span className="font-display text-[17px] font-semibold tracking-tight">
            Arise Growth
          </span>
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[14px] text-ink/75 transition-colors duration-300 hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={siteConfig.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-pill bg-ink px-5 py-2.5 text-[14px] font-medium text-shell shadow-raised transition-all duration-300 ease-cinematic hover:bg-ink-soft hover:shadow-elevated md:inline-flex"
          >
            {siteConfig.cta.primary}
            <span aria-hidden className="flip-x-rtl">→</span>
          </a>

          <button
            type="button"
            aria-label="פתח תפריט"
            className="md:hidden rounded-pill border border-shell-line bg-shell px-3 py-2 text-ink"
            onClick={() => setOpen((o) => !o)}
          >
            <span className="block h-[2px] w-5 bg-ink" />
            <span className="mt-1 block h-[2px] w-5 bg-ink" />
            <span className="mt-1 block h-[2px] w-5 bg-ink" />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-shell-line bg-shell">
          <div className="flex flex-col gap-4 px-6 py-6">
            {siteConfig.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[16px] text-ink/80"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={siteConfig.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-pill bg-ink px-5 py-3 text-[14px] font-medium text-shell"
              onClick={() => setOpen(false)}
            >
              {siteConfig.cta.primary}
              <span aria-hidden className="flip-x-rtl">→</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
