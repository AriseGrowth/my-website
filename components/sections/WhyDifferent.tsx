"use client";

import { Section, Eyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function WhyDifferent() {
  return (
    <Section id="why" tone="ink" className="relative overflow-hidden">
      {/* Ambient warm orb in dark scene */}
      <div
        aria-hidden
        className="orb"
        style={{
          top: "-30%",
          insetInlineEnd: "-15%",
          width: "70%",
          height: "70%",
          background:
            "radial-gradient(circle, rgba(200,97,44,0.25), rgba(200,97,44,0) 60%)",
          opacity: 0.6,
        }}
      />
      <div
        aria-hidden
        className="orb"
        style={{
          bottom: "-30%",
          insetInlineStart: "-10%",
          width: "55%",
          height: "55%",
          background:
            "radial-gradient(circle, rgba(212,220,221,0.18), transparent 60%)",
          opacity: 0.6,
        }}
      />

      <div className="relative grid gap-12 md:grid-cols-12 md:items-start">
        <div className="md:col-span-5">
          <Reveal>
            <Eyebrow tone="light">למה אחרת</Eyebrow>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-6 font-display text-display-lg font-semibold leading-[1.05] tracking-tight text-shell">
              לא רק להבין את המערכת.
              <br />
              <span className="serif-accent text-shell/85">
                גם להבין את האנשים
              </span>{" "}
              שבתוכה.
            </h2>
          </Reveal>
        </div>

        <div className="md:col-span-7 md:pt-4">
          <Reveal delay={2}>
            <p className="text-lede text-shell/80">
              אני מביא לשולחן שילוב לא שגרתי בין הבנה אנושית עמוקה לבין חשיבה
              מערכתית־תפעולית.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <Reveal delay={3}>
              <div className="rounded-pill border border-shell/12 bg-shell/[0.04] p-7 backdrop-blur-sm">
                <div className="text-eyebrow uppercase tracking-eyebrow text-shell/60">
                  הצד האנושי
                </div>
                <p className="mt-4 text-[16px] leading-relaxed text-shell/85">
                  אני יודע להבין עומס, התנגדות, התנהלות והרגלים של אנשים בתוך
                  עסק — לפני שאני נוגע בכלי או בתהליך.
                </p>
              </div>
            </Reveal>
            <Reveal delay={4}>
              <div className="rounded-pill border border-shell/12 bg-shell/[0.04] p-7 backdrop-blur-sm">
                <div className="text-eyebrow uppercase tracking-eyebrow text-shell/60">
                  הצד המערכתי
                </div>
                <p className="mt-4 text-[16px] leading-relaxed text-shell/85">
                  אני יודע לקחת כאוס ולהפוך אותו לתהליכים, אחריות, מעקב ומבנה
                  עבודה ברור שאפשר לחיות איתו.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={4}>
            <p className="mt-10 max-w-2xl text-[17px] leading-relaxed text-shell/80">
              השילוב הזה מאפשר לי לא רק{" "}
              <span className="serif-accent text-shell">
                &quot;להקים מערכת&quot;
              </span>
              , אלא לבנות דרך עבודה שאנשים באמת יכולים לחיות בתוכה — ולא עוד
              כלי שנראה טוב וננטש אחרי חודשיים.
            </p>
          </Reveal>

          <Reveal delay={5}>
            <div className="mt-10 border-s-2 border-accent-ember ps-6">
              <p className="font-display text-h2 font-medium leading-snug text-shell">
                לא עוד מטמיע. לא עוד יועץ תיאורטי.
                <br />
                <span className="serif-accent text-accent-ember">
                  אלא חיבור אמיתי
                </span>{" "}
                בין הבעיה העסקית, ההתנהלות האנושית, והמערכת שאמורה להחזיק את
                זה בפועל.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
