"use client";

import { Section, Eyebrow } from "@/components/ui/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { CTA } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site-config";

const deliverables = [
  "הבעיה המרכזית שמונעת מהעסק לעבוד נכון",
  "שלוש נקודות הכשל המרכזיות",
  "מה צריך להשתנות ברמה התפעולית",
  "מפת דרכים מסודרת להמשך",
  "הבנה האם נכון בכלל להתקדם להקמה והטמעה",
];

export function Diagnosis() {
  return (
    <Section id="diagnosis" tone="warm" className="relative overflow-hidden">
      <div
        aria-hidden
        className="orb"
        style={{
          top: "-20%",
          insetInlineStart: "-10%",
          width: "55%",
          height: "55%",
          background:
            "radial-gradient(circle, rgba(228,217,194,0.95), rgba(228,217,194,0) 60%)",
        }}
      />

      <div className="relative grid gap-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <Reveal>
            <Eyebrow>השלב הראשון</Eyebrow>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-6 font-display text-display-lg font-semibold leading-[1.05] tracking-tight text-ink">
              אפיון
              <br />
              <span className="serif-accent">עסקי־טכנולוגי</span>
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-7 max-w-md text-lede text-ink/75">
              במקום לקפוץ ישר לבנייה, אני מתחיל באפיון עסקי־טכנולוגי. תהליך
              ממוקד שמטרתו להבין מה באמת מונע מהעסק לפעול ביעילות, מהן נקודות
              הכשל העיקריות, ומה הדרך הנכונה להחזיר שליטה.
            </p>
          </Reveal>

          <Reveal delay={3}>
            <div className="mt-10">
              <div className="text-eyebrow uppercase tracking-eyebrow text-ink-quiet">
                למי זה מתאים
              </div>
              <p className="mt-4 max-w-md text-[16.5px] leading-relaxed text-ink/80">
                לעסקים שמרגישים שהבעיה אמיתית — אבל עוד לא ברור איפה בדיוק היא
                מתחילה, ומה נכון לעשות קודם.
              </p>
            </div>
          </Reveal>

          <Reveal delay={4}>
            <div className="mt-10">
              <CTA
                href={siteConfig.calendly}
                target="_blank"
                rel="noopener noreferrer"
              >
                {siteConfig.cta.primary}
              </CTA>
            </div>
          </Reveal>
        </div>

        {/* Right — premium "deliverables" panel */}
        <div className="md:col-span-7">
          <Reveal delay={2}>
            <div className="relative overflow-hidden rounded-shell bg-ink p-8 text-shell shadow-elevated md:p-12">
              <div
                aria-hidden
                className="orb"
                style={{
                  top: "-30%",
                  insetInlineEnd: "-20%",
                  width: "60%",
                  height: "60%",
                  background:
                    "radial-gradient(circle, rgba(200,97,44,0.18), transparent 60%)",
                }}
              />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="text-eyebrow uppercase tracking-eyebrow text-shell/60">
                    מה תקבלו באפיון
                  </div>
                  <span className="rounded-pill border border-shell/15 px-3 py-1 text-[12px] text-shell/70">
                    שלב ראשון
                  </span>
                </div>

                <Stagger
                  className="mt-8 divide-y divide-shell/10 border-t border-shell/10"
                  staggerChildren={0.08}
                >
                  {deliverables.map((d, i) => (
                    <StaggerItem
                      key={d}
                      className="flex items-start gap-5 py-5"
                    >
                      <span className="font-display text-[14px] tabular-nums text-accent-ember">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[17px] leading-relaxed text-shell/90">
                        {d}
                      </span>
                    </StaggerItem>
                  ))}
                </Stagger>

                <div className="mt-10 max-w-xl rounded-rounded bg-shell/[0.06] p-5">
                  <p className="text-[15.5px] leading-relaxed text-shell/85">
                    המטרה היא לא לתת לך עוד רעיונות. המטרה היא לתת לך תמונה
                    ברורה של{" "}
                    <span className="serif-accent text-shell">
                      מה לא עובד
                    </span>
                    , ומה נכון לעשות מכאן.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
