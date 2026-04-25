"use client";

import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { CTA } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site-config";

export function FinalCTA() {
  return (
    <Section tone="warm" className="relative overflow-hidden">
      <div
        aria-hidden
        className="orb animate-haze"
        style={{
          top: "-20%",
          insetInlineStart: "10%",
          width: "55%",
          height: "55%",
          background:
            "radial-gradient(circle, rgba(228,217,194,0.95), transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="orb"
        style={{
          bottom: "-30%",
          insetInlineEnd: "-10%",
          width: "60%",
          height: "60%",
          background:
            "radial-gradient(circle, rgba(200,97,44,0.18), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <Reveal>
          <div className="text-eyebrow uppercase tracking-eyebrow text-ink-quiet">
            צעד אחד קדימה
          </div>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="mt-7 font-display text-display-xl font-semibold leading-[1.04] tracking-tight text-ink">
            אם אתה מרגיש שאין לך שליטה
            <br />
            על מה שקורה בעסק —
            <br />
            <span className="serif-accent">בוא נתחיל משיחה.</span>
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <p className="mx-auto mt-8 max-w-xl text-lede text-ink/75">
            בשיחת היכרות נבין מה באמת קורה אצלך בעסק, האם יש התאמה, והאם נכון
            להתחיל בתהליך אפיון עסקי־טכנולוגי.
          </p>
        </Reveal>

        <Reveal delay={3}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <CTA
              href={siteConfig.calendly}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
            >
              {siteConfig.cta.primary}
            </CTA>
            <CTA href={`mailto:${siteConfig.email}`} variant="secondary">
              שלח מייל
            </CTA>
          </div>
        </Reveal>

        <Reveal delay={3}>
          <p className="mt-6 text-[14px] text-ink-quiet">
            שיחה קצרה, ממוקדת וללא התחייבות.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
