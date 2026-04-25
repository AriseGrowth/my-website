"use client";

import { Section, Eyebrow } from "@/components/ui/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

const outcomes = [
  "מקום אחד שמרכז את כל העבודה",
  "ברור מי עושה מה",
  "מעקב אמיתי על משימות, לקוחות ותהליכים",
  "פחות שיחות רדיפה",
  "פחות פספוסים",
  "פחות עומס על בעל העסק",
  "יותר בהירות",
  "יותר שליטה",
  "יותר מקום לחשוב על העתיד",
];

export function Outcomes() {
  return (
    <Section tone="shell">
      <div className="grid gap-12 md:grid-cols-12 md:items-end">
        <div className="md:col-span-7">
          <Reveal>
            <Eyebrow>התוצאה</Eyebrow>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-6 font-display text-display-lg font-semibold leading-[1.05] tracking-tight text-ink">
              בסוף, העסק לא אמור להרגיש
              <br />
              יותר טכנולוגי. הוא אמור להרגיש{" "}
              <span className="serif-accent">יותר מנוהל.</span>
            </h2>
          </Reveal>
        </div>
        <div className="md:col-span-5">
          <Reveal delay={2}>
            <p className="text-lede text-ink/75">
              לא עוד כלים. שינוי בתחושה של היום־יום — ובאיך שאתה ניגש לעסק
              שלך כל בוקר.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Before / After cinematic split */}
      <div className="mt-16 grid gap-5 md:grid-cols-2">
        <Reveal delay={2}>
          <div className="relative h-full rounded-shell border border-shell-line bg-shell-alt p-8 md:p-10">
            <div className="text-eyebrow uppercase tracking-eyebrow text-ink-quiet">
              לפני
            </div>
            <p className="mt-6 font-display text-h2 leading-snug text-ink/85">
              אתה מגיע לעבודה לחוץ, חוזר סחוט, ומרגיש שכל היום אתה מגיב למה
              שקורה.
            </p>

            <div className="mt-10 space-y-2">
              {[
                { l: "זמן ניהולי איכותי", v: 22 },
                { l: "נראות תפעולית", v: 35 },
                { l: "אחריות ברורה", v: 28 },
              ].map((r) => (
                <BarRow key={r.l} {...r} tone="muted" />
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={3}>
          <div className="relative h-full overflow-hidden rounded-shell bg-ink p-8 text-shell md:p-10">
            <div
              aria-hidden
              className="orb"
              style={{
                top: "-30%",
                insetInlineEnd: "-20%",
                width: "60%",
                height: "60%",
                background:
                  "radial-gradient(circle, rgba(200,97,44,0.22), transparent 60%)",
              }}
            />
            <div className="relative">
              <div className="text-eyebrow uppercase tracking-eyebrow text-shell/60">
                אחרי
              </div>
              <p className="mt-6 font-display text-h2 leading-snug text-shell">
                אתה מרגיש{" "}
                <span className="serif-accent">בשליטה מלאה</span>{" "}
                על העסק, ובמקביל הרבה יותר משוחרר מהלחץ של היום־יום.
              </p>

              <div className="mt-10 space-y-2">
                {[
                  { l: "זמן ניהולי איכותי", v: 84 },
                  { l: "נראות תפעולית", v: 92 },
                  { l: "אחריות ברורה", v: 88 },
                ].map((r) => (
                  <BarRow key={r.l} {...r} tone="bright" />
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Outcomes list */}
      <Stagger
        className="mt-20 grid gap-x-10 gap-y-5 md:grid-cols-3"
        staggerChildren={0.06}
      >
        {outcomes.map((o) => (
          <StaggerItem
            key={o}
            className="flex items-start gap-3 border-t border-shell-line pt-4"
          >
            <span
              aria-hidden
              className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent-ember"
            />
            <span className="text-[16.5px] leading-relaxed text-ink/85">
              {o}
            </span>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

function BarRow({
  l,
  v,
  tone,
}: {
  l: string;
  v: number;
  tone: "muted" | "bright";
}) {
  const isBright = tone === "bright";
  return (
    <div className="flex items-center gap-3">
      <span
        className={`w-32 text-[12.5px] ${
          isBright ? "text-shell/70" : "text-ink-quiet"
        }`}
      >
        {l}
      </span>
      <div
        className={`h-1.5 flex-1 overflow-hidden rounded-full ${
          isBright ? "bg-shell/15" : "bg-shell-line"
        }`}
      >
        <div
          className="h-full rounded-full"
          style={{
            width: `${v}%`,
            background: isBright
              ? "linear-gradient(90deg, #C8612C, #F1B07A)"
              : "rgba(28, 42, 54, 0.45)",
          }}
        />
      </div>
      <span
        className={`w-9 text-end text-[11.5px] tabular-nums ${
          isBright ? "text-shell/70" : "text-ink-quiet"
        }`}
      >
        {v}%
      </span>
    </div>
  );
}
