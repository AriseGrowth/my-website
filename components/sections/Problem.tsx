"use client";

import { Section, Eyebrow } from "@/components/ui/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { FloatingCard } from "@/components/ui/FloatingCard";

const pains = [
  "הכול עובר דרכך",
  "אין מקום אחד שמרכז את העבודה",
  "דברים נופלים בין הכיסאות",
  "אין לך תמונת מצב אמיתית",
  "אתה עסוק בכיבוי שריפות",
  "הצמיחה חשפה את הבעיה",
];

export function Problem() {
  return (
    <Section id="problem" tone="shell">
      <div className="grid gap-16 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-6">
          <Reveal>
            <Eyebrow>הבעיה</Eyebrow>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-6 font-display text-display-lg font-semibold leading-[1.06] tracking-tight text-ink">
              כשאין שליטה בעסק,
              <br />
              <span className="serif-accent text-ink/85">הכול נופל</span>{" "}
              על בעל העסק.
            </h2>
          </Reveal>

          <div className="mt-8 max-w-prose space-y-5 text-lede text-ink/75">
            <Reveal delay={2}>
              <p>
                העבודה מפוזרת בין אנשים, הודעות, משימות, לקוחות, ספקים וקבצים.
                לא תמיד ברור מי עושה מה, מה נתקע, ומה בכלל דורש טיפול עכשיו.
              </p>
            </Reveal>
            <Reveal delay={3}>
              <p>
                במקום לשבת בכיסא הניהולי ולהוביל את העסק קדימה, אתה מוצא את
                עצמך רודף אחרי היום־יום.
              </p>
            </Reveal>
          </div>

          <Stagger className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {pains.map((p) => (
              <StaggerItem
                key={p}
                className="flex items-start gap-3 rounded-rounded border border-shell-line bg-shell-alt/60 px-4 py-3"
              >
                <span
                  aria-hidden
                  className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent-ember"
                />
                <span className="text-[15px] leading-relaxed text-ink/85">
                  {p}
                </span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        {/* Right — fragmentation visual */}
        <div className="relative md:col-span-6">
          <FragmentationVisual />
        </div>
      </div>
    </Section>
  );
}

function FragmentationVisual() {
  return (
    <div className="relative h-[480px] w-full md:h-[560px]">
      <div
        aria-hidden
        className="absolute inset-8 rounded-shell opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(212,220,221,0.7), transparent 60%)",
        }}
      />

      {/* Each card represents a fragmented channel */}
      <FloatingCard
        delay={0.1}
        amplitude={8}
        duration={8}
        className="absolute top-2 start-4 w-[230px] p-5"
      >
        <div className="text-eyebrow uppercase tracking-eyebrow text-ink-quiet">
          וואטסאפ
        </div>
        <div className="mt-3 space-y-2">
          <Bubble text="&quot;אתה זוכר מי טיפל בלקוח של אתמול?&quot;" />
          <Bubble text="&quot;תזכיר לעמית להתקשר לספק&quot;" muted />
          <Bubble text="&quot;יש מצב שתאשר את ההצעה?&quot;" />
        </div>
      </FloatingCard>

      <FloatingCard
        delay={0.25}
        amplitude={10}
        duration={9}
        className="absolute top-12 end-2 w-[210px] p-5"
      >
        <div className="text-eyebrow uppercase tracking-eyebrow text-ink-quiet">
          מייל
        </div>
        <div className="mt-3 space-y-2.5 text-[12.5px] text-ink/80">
          <div className="flex items-center justify-between border-b border-shell-line pb-2">
            <span>הצעת מחיר · יואל</span>
            <span className="text-ink-quiet">02/03</span>
          </div>
          <div className="flex items-center justify-between border-b border-shell-line pb-2">
            <span>מסמכים מהרו&quot;ח</span>
            <span className="text-ink-quiet">04/03</span>
          </div>
          <div className="flex items-center justify-between">
            <span>חשבונית ספק</span>
            <span className="text-ink-quiet">05/03</span>
          </div>
        </div>
      </FloatingCard>

      <FloatingCard
        delay={0.45}
        amplitude={6}
        duration={10}
        className="absolute bottom-16 start-2 w-[220px] p-5"
      >
        <div className="text-eyebrow uppercase tracking-eyebrow text-ink-quiet">
          אקסל
        </div>
        <div className="mt-3">
          <div className="grid grid-cols-3 gap-px overflow-hidden rounded-soft bg-shell-line/80 text-[11px]">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="bg-white px-2 py-2 text-ink-quiet"
              >
                {i % 4 === 0 ? "—" : i % 3 === 0 ? "✓" : ""}
              </div>
            ))}
          </div>
          <div className="mt-3 text-[12px] text-ink-quiet">
            עודכן לאחרונה לפני 9 ימים
          </div>
        </div>
      </FloatingCard>

      <FloatingCard
        delay={0.6}
        amplitude={9}
        duration={7}
        className="absolute bottom-4 end-6 w-[200px] p-5"
      >
        <div className="text-eyebrow uppercase tracking-eyebrow text-ink-quiet">
          פתקיות / שיחות
        </div>
        <div className="mt-3 text-[13.5px] leading-relaxed text-ink/85">
          &quot;תזכור להתקשר ליואל&quot;
          <br />
          &quot;תוודא שזה הוזמן&quot;
          <br />
          &quot;לא לשכוח את האישור&quot;
        </div>
      </FloatingCard>

      {/* Center "?" knot — visual entropy */}
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="relative">
          <svg
            width="160"
            height="160"
            viewBox="0 0 160 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="knot" x1="0" y1="0" x2="160" y2="160">
                <stop stopColor="#C8612C" stopOpacity="0.8" />
                <stop offset="1" stopColor="#1B2A36" stopOpacity="0.6" />
              </linearGradient>
            </defs>
            <path
              d="M30 80 C30 50, 60 30, 80 30 C100 30, 130 50, 130 80 C130 110, 100 130, 80 130 C60 130, 30 110, 30 80 Z M50 80 C50 65, 65 50, 80 50 C95 50, 110 65, 110 80 C110 95, 95 110, 80 110 C65 110, 50 95, 50 80 Z M70 80 C70 75, 75 70, 80 70 C85 70, 90 75, 90 80"
              stroke="url(#knot)"
              strokeWidth="1.4"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Bubble({ text, muted }: { text: string; muted?: boolean }) {
  return (
    <div
      className={`rounded-soft px-3 py-2 text-[12.5px] leading-relaxed ${
        muted ? "bg-shell-alt text-ink/65" : "bg-shell-alt text-ink/85"
      }`}
    >
      {text}
    </div>
  );
}
