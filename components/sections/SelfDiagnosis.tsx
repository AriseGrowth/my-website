"use client";

import { Section, Eyebrow } from "@/components/ui/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

const questions = [
  "הכול עובר דרכך?",
  "אין לך מקום אחד שממנו רואים מה באמת קורה?",
  "עובדים, משימות ולקוחות מתנהלים בין וואטסאפ, טלפונים וקבצים?",
  "דברים נופלים פשוט כי לא היה מי שיעקוב?",
  "אתה מרגיש שאתה עובד קשה, אבל עדיין אין לך שליטה?",
  "לקוחות לפעמים מתפספסים או לא מקבלים מענה בזמן?",
  "גם כשהצוות עובד, אתה עדיין לא רגוע?",
];

export function SelfDiagnosis() {
  return (
    <Section tone="alt">
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <Reveal>
            <Eyebrow>אבחון עצמי</Eyebrow>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-6 font-display text-display-lg font-semibold leading-[1.06] tracking-tight text-ink">
              האם זה נשמע
              <br />
              <span className="serif-accent">כמו העסק שלך?</span>
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-6 max-w-md text-lede text-ink/70">
              עברו על השאלות בקצב שלכם. הן לא מבחן — הן ראי.
            </p>
          </Reveal>
        </div>

        <div className="md:col-span-8">
          <Stagger className="divide-y divide-shell-line border-y border-shell-line">
            {questions.map((q, i) => (
              <StaggerItem
                key={q}
                className="group flex items-center gap-5 py-5 transition-colors duration-300 hover:bg-shell/60"
              >
                <span className="font-display text-[14px] tabular-nums text-ink-quiet">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 text-[18px] leading-relaxed text-ink/90 md:text-[20px]">
                  {q}
                </span>
                <span
                  aria-hidden
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-shell-line bg-shell text-ink/60 transition-colors duration-300 group-hover:border-ink/30 group-hover:text-ink"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 7L6 10L11 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={2}>
            <p className="mt-10 max-w-2xl text-lede text-ink/80">
              אם ענית{" "}
              <span className="serif-accent text-ink">&quot;כן&quot;</span>{" "}
              על כמה מהשאלות האלה, כנראה שהעסק שלך לא צריך עוד מאמץ — הוא צריך
              סדר, שיטה, ומקום אחד שממנו אפשר לנהל אותו.
            </p>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
