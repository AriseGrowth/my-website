"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

const values = [
  "עבודה מסודרת מתחילה מאבחון נכון",
  "סדר לפני מערכת",
  "שליטה לפני אוטומציה",
  "מתאים לעסקים עם כאב תפעולי אמיתי",
];

export function TrustStrip() {
  return (
    <section className="relative bg-shell-alt">
      <div className="mx-auto max-w-[1240px] px-6 py-12 md:px-10 md:py-16">
        <Reveal>
          <div className="text-eyebrow uppercase tracking-eyebrow text-ink-quiet">
            עקרונות עבודה
          </div>
        </Reveal>
        <Stagger
          className="mt-7 grid gap-x-10 gap-y-6 md:grid-cols-4"
          staggerChildren={0.1}
        >
          {values.map((v) => (
            <StaggerItem key={v} className="flex items-start gap-3">
              <span
                aria-hidden
                className="mt-2.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent-ember"
              />
              <span className="text-[16px] leading-relaxed text-ink/85">
                {v}
              </span>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
