"use client";

import { Section, Eyebrow } from "@/components/ui/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { FloatingCard } from "@/components/ui/FloatingCard";

const steps = [
  {
    n: "01",
    title: "מבינים מה לא עובד",
    body: "תהליך אבחון מסודר של הזרימה האמיתית בעסק. איפה יש פיזור, איפה יש צוואר בקבוק, איפה האחריות לא ברורה.",
    keyword: "אבחון",
  },
  {
    n: "02",
    title: "עושים סדר",
    body: "מגדירים תהליכי עבודה, נקודות ירידה ועליה, מי אחראי על מה, ואיפה הדברים נכנסים ויוצאים.",
    keyword: "מבנה",
  },
  {
    n: "03",
    title: "בונים שליטה",
    body: "במקום אחד שמרכז את העבודה — לוח, דשבורד או שילוב פשוט של כלים — שאפשר לחיות איתו ביום־יום.",
    keyword: "שליטה",
  },
];

export function HowIWork() {
  return (
    <Section id="how" tone="shell" className="overflow-hidden">
      <div className="grid gap-12 md:grid-cols-12 md:items-end">
        <div className="md:col-span-7">
          <Reveal>
            <Eyebrow>שיטת העבודה</Eyebrow>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-6 font-display text-display-lg font-semibold leading-[1.06] tracking-tight text-ink">
              אני לא מתחיל מכלי.
              <br />
              <span className="serif-accent">אני מתחיל</span>{" "}
              ממה שלא עובד.
            </h2>
          </Reveal>
        </div>
        <div className="md:col-span-5">
          <Reveal delay={2}>
            <p className="text-lede text-ink/75">
              אני לא קופץ ישר למערכת, ללוח או לאוטומציה. אני קודם מבין איך
              העסק עובד באמת — איפה יש פיזור, איפה משימות נופלות, איפה
              האחריות לא ברורה, ואיפה אתה נהיית צוואר הבקבוק של הכול.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Process — 3 connected steps */}
      <div className="relative mt-20">
        {/* Connecting line */}
        <div
          aria-hidden
          className="absolute inset-x-12 top-[44px] hidden h-px bg-gradient-to-r from-transparent via-ink/20 to-transparent md:block"
        />
        <Stagger
          className="relative grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6"
          staggerChildren={0.15}
        >
          {steps.map((s, i) => (
            <StaggerItem key={s.n} className="relative">
              <div className="relative flex h-full flex-col rounded-pill border border-shell-line bg-shell p-8 transition-shadow duration-500 hover:shadow-elevated">
                <div className="flex items-center justify-between">
                  <span className="font-display text-h2 font-semibold tabular-nums text-accent-ember">
                    {s.n}
                  </span>
                  <span className="text-eyebrow uppercase tracking-eyebrow text-ink-quiet">
                    {s.keyword}
                  </span>
                </div>
                <h3 className="mt-7 font-display text-h2 font-semibold leading-tight text-ink">
                  {s.title}
                </h3>
                <p className="mt-3 text-[15.5px] leading-relaxed text-ink/72">
                  {s.body}
                </p>

                {/* Mini mockup per step */}
                <div className="mt-6 rounded-rounded bg-shell-alt p-4">
                  {i === 0 && <DiagnoseMini />}
                  {i === 1 && <OrderMini />}
                  {i === 2 && <ControlMini />}
                </div>
              </div>

              {/* Step dot on connector */}
              <div
                aria-hidden
                className="absolute -top-3 start-1/2 hidden h-3 w-3 -translate-x-1/2 rounded-full bg-accent-ember ring-4 ring-shell md:block"
              />
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      <Reveal delay={3}>
        <p className="mt-14 max-w-3xl text-[16.5px] leading-relaxed text-ink-quiet">
          במקרים שבהם זה נכון לעסק, זה כולל גם monday.com, דשבורדים
          ואוטומציות — אבל רק ככלים שמשרתים את הסדר, לא כמטרה בפני עצמה.
        </p>
      </Reveal>
    </Section>
  );
}

function DiagnoseMini() {
  return (
    <div className="space-y-2">
      {[
        { l: "ניהול לקוחות", v: 78, tone: "ember" },
        { l: "מעקב משימות", v: 42, tone: "mist" },
        { l: "חלוקת אחריות", v: 30, tone: "ember" },
      ].map((r) => (
        <div key={r.l} className="flex items-center gap-3">
          <span className="w-28 text-[12px] text-ink/75">{r.l}</span>
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-shell-line">
            <div
              className="h-full rounded-full"
              style={{
                width: `${r.v}%`,
                background:
                  r.tone === "ember" ? "#C8612C" : "#7C9296",
              }}
            />
          </div>
          <span className="w-8 text-end text-[11px] tabular-nums text-ink-quiet">
            {r.v}%
          </span>
        </div>
      ))}
    </div>
  );
}

function OrderMini() {
  return (
    <div className="grid grid-cols-3 gap-2 text-[11px]">
      {["חדש", "בטיפול", "בוצע"].map((c, i) => (
        <div key={c} className="rounded-soft bg-white p-2">
          <div className="text-eyebrow uppercase tracking-eyebrow text-ink-quiet">
            {c}
          </div>
          <div className="mt-2 space-y-1.5">
            {Array.from({ length: 3 - (i % 2) }).map((_, j) => (
              <div
                key={j}
                className="h-1.5 rounded-full bg-shell-alt"
                style={{ width: `${60 + j * 10}%` }}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function ControlMini() {
  return (
    <div>
      <div className="flex items-center justify-between text-[11px] text-ink-quiet">
        <span>השבוע</span>
        <span>↑ 18%</span>
      </div>
      <div className="mt-3 flex h-12 items-end gap-1">
        {[40, 55, 38, 65, 48, 72, 62].map((v, i) => (
          <div
            key={i}
            className="flex-1 rounded-t-sm"
            style={{
              height: `${v}%`,
              background:
                i === 5 ? "#C8612C" : "rgba(28, 42, 54, 0.55)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
