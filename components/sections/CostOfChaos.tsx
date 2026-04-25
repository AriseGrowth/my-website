"use client";

import { Section, Eyebrow } from "@/components/ui/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

const costs = [
  {
    title: "זמן הנהלה",
    body: "נשרף על תפעול במקום על החלטות שמזיזות את העסק קדימה.",
    glyph: "I",
  },
  {
    title: "לקוחות והזדמנויות",
    body: "מתפספסים בשקט בגלל מעקב לא מסודר וחוסר אחריות ברורה.",
    glyph: "II",
  },
  {
    title: "טעויות תפעוליות",
    body: "נוצרות בגלל פיזור מידע — לא בגלל חוסר יכולת של הצוות.",
    glyph: "III",
  },
  {
    title: "תלות בבעל העסק",
    body: "כל מערכת לא מתועדת היא מערכת שתלויה רק בך — וזה מחיר נסתר.",
    glyph: "IV",
  },
];

export function CostOfChaos() {
  return (
    <Section tone="shell">
      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <Reveal>
            <Eyebrow>המחיר השקט</Eyebrow>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-6 font-display text-display-lg font-semibold leading-[1.06] tracking-tight text-ink">
              הכאוס לא עולה רק
              <br />
              <span className="serif-accent">בשקט נפשי.</span>
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-6 max-w-md text-lede text-ink/75">
              הוא עולה בזמן, בכסף ובהזדמנויות. ובדרך כלל הוא לא מופיע בדוח רווח
              והפסד — אבל מרגישים אותו בכל יום עבודה.
            </p>
          </Reveal>
        </div>
      </div>

      <Stagger
        className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        staggerChildren={0.1}
      >
        {costs.map((c) => (
          <StaggerItem
            key={c.title}
            className="group relative flex h-full flex-col rounded-pill border border-shell-line bg-shell-alt p-7 transition-shadow duration-500 ease-cinematic hover:shadow-elevated"
          >
            <div className="flex items-center justify-between">
              <span className="serif-accent text-[20px] text-accent-ember">
                {c.glyph}
              </span>
              <span
                aria-hidden
                className="h-px w-10 bg-ink/15 transition-colors duration-500 group-hover:bg-accent-ember"
              />
            </div>
            <h3 className="mt-6 font-display text-h2 font-semibold leading-tight text-ink">
              {c.title}
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-ink/70">
              {c.body}
            </p>
          </StaggerItem>
        ))}
      </Stagger>

      <Reveal delay={2}>
        <div className="mt-16 max-w-3xl">
          <p className="text-lede text-ink/85">
            הבעיה היא לא שאתה לא עובד מספיק קשה.
            <br />
            הבעיה היא{" "}
            <span className="serif-accent text-ink">שאין מבנה</span>{" "}
            שמחזיק את העסק כמו שצריך.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
