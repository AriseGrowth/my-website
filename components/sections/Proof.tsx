"use client";

import { Section, Eyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function Proof() {
  return (
    <Section tone="alt">
      <div className="grid gap-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <Reveal>
            <Eyebrow>הוכחה</Eyebrow>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-6 font-display text-display-lg font-semibold leading-[1.05] tracking-tight text-ink">
              איך זה נראה
              <br />
              <span className="serif-accent">בפועל.</span>
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-7 max-w-md text-lede text-ink/75">
              כשיש סדר תפעולי אמיתי, אתה לא צריך לרדוף כדי להבין מה קורה.
              העבודה יושבת במקום אחד, האחריות ברורה, והניהול הופך לפחות
              תגובתי ויותר מוביל.
            </p>
          </Reveal>
        </div>

        <div className="md:col-span-7">
          <Reveal delay={2}>
            <figure className="relative overflow-hidden rounded-shell border border-shell-line bg-shell p-8 md:p-12">
              <div
                aria-hidden
                className="orb"
                style={{
                  top: "-30%",
                  insetInlineStart: "-15%",
                  width: "60%",
                  height: "60%",
                  background:
                    "radial-gradient(circle, rgba(228,217,194,0.85), transparent 60%)",
                }}
              />
              <div className="relative">
                <span
                  aria-hidden
                  className="serif-accent text-[120px] leading-none text-accent-ember/40"
                >
                  &ldquo;
                </span>
                <blockquote className="-mt-12 font-display text-h2 leading-snug text-ink md:text-[28px]">
                  הפסקתי לרדוף אחרי העבודה. לראשונה אני מרגיש שאני יודע מה
                  קורה אצלי בעסק — ולא מנחש. השקט הזה הוא לא מתנה. הוא תוצאה
                  של מבנה.
                </blockquote>
                <figcaption className="mt-10 flex items-center gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-shell-alt font-display text-[15px] font-semibold text-ink">
                    א.ל
                  </div>
                  <div>
                    <div className="text-[15px] font-medium text-ink">
                      בעל עסק משפחתי בתחום השירות
                    </div>
                    <div className="text-[13px] text-ink-quiet">
                      צוות של 11 · אזור המרכז
                    </div>
                  </div>
                </figcaption>
              </div>
            </figure>
          </Reveal>

          <Reveal delay={3}>
            <div className="mt-6 grid gap-5 sm:grid-cols-3">
              {[
                { k: "פחות שיחות מעקב", v: "−42%" },
                { k: "ירידה בפספוסים", v: "−61%" },
                { k: "עומס על בעל העסק", v: "−55%" },
              ].map((m) => (
                <div
                  key={m.k}
                  className="rounded-rounded border border-shell-line bg-shell p-5"
                >
                  <div className="font-display text-h2 font-semibold leading-none tracking-tight text-ink">
                    {m.v}
                  </div>
                  <div className="mt-2 text-[13.5px] leading-relaxed text-ink-quiet">
                    {m.k}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={3}>
            <p className="mt-8 max-w-2xl text-[14.5px] text-ink-quiet">
              נתונים אופייניים מליווי תפעולי. הפרטים האישיים מטושטשים
              לשמירה על דיסקרטיות לקוח.
            </p>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
