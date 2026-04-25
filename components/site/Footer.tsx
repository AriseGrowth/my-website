import { siteConfig } from "@/lib/site-config";
import { Logo } from "@/components/site/Logo";

export function Footer() {
  return (
    <footer
      id="contact"
      className="relative border-t border-shell-line bg-shell-alt"
    >
      <div className="mx-auto max-w-[1280px] px-6 py-16 md:px-10 md:py-24">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 text-ink">
              <Logo />
              <span className="font-display text-[20px] font-semibold tracking-tight">
                Arise Growth
              </span>
            </div>
            <p className="mt-5 max-w-md text-[17px] leading-relaxed text-ink/70">
              {siteConfig.tagline}
              <br />
              ייעוץ תפעולי לבעלי עסקים שרוצים להחזיר שליטה על מה שקורה אצלם
              ביום־יום.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="text-eyebrow uppercase tracking-eyebrow text-ink-quiet">
              ניווט
            </div>
            <ul className="mt-5 space-y-3 text-[15px] text-ink/80">
              {siteConfig.nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="hover:text-ink">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-eyebrow uppercase tracking-eyebrow text-ink-quiet">
              צור קשר
            </div>
            <ul className="mt-5 space-y-3 text-[15px] text-ink/80">
              <li>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-ink">
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-ink"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-pill bg-ink px-4 py-2 text-[14px] font-medium text-shell hover:bg-ink-soft"
                >
                  {siteConfig.cta.primary}
                  <span aria-hidden className="flip-x-rtl">→</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-shell-line pt-8 text-[13px] text-ink-quiet md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} Arise Growth. כל הזכויות שמורות.</div>
          <div className="serif-accent text-ink-quiet">
            סדר לפני מערכת. שליטה לפני אוטומציה.
          </div>
        </div>
      </div>
    </footer>
  );
}
