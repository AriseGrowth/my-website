"use client";

import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/lib/site-config";
import { CTA } from "@/components/ui/Button";
import { FloatingCard } from "@/components/ui/FloatingCard";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-shell pt-20 md:pt-28"
    >
      {/* Scenic backdrop — layered ambient orbs */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="orb"
          style={{
            top: "-10%",
            insetInlineStart: "-12%",
            width: "55%",
            height: "55%",
            background:
              "radial-gradient(circle, rgba(228,217,194,0.85), rgba(228,217,194,0) 60%)",
          }}
        />
        <div
          className="orb"
          style={{
            top: "30%",
            insetInlineEnd: "-15%",
            width: "60%",
            height: "60%",
            background:
              "radial-gradient(circle, rgba(212,220,221,0.75), rgba(212,220,221,0) 60%)",
          }}
        />
        <div
          className="orb animate-haze"
          style={{
            bottom: "-25%",
            insetInlineStart: "20%",
            width: "65%",
            height: "55%",
            background:
              "radial-gradient(circle, rgba(200,97,44,0.18), rgba(200,97,44,0) 60%)",
          }}
        />
        {/* Soft veil */}
        <div className="veil-soft absolute inset-0" />
      </div>

      <div className="relative mx-auto grid max-w-[1280px] gap-14 px-6 pb-28 md:grid-cols-12 md:gap-10 md:px-10 md:pb-40">
        <div className="md:col-span-7">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mb-7 inline-flex items-center gap-2 rounded-pill border border-shell-line bg-shell/80 px-4 py-1.5 text-[13px] text-ink/75 backdrop-blur"
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent-ember" />
            ייעוץ תפעולי לעסקים קטנים ב־Low-Tech
          </motion.div>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="font-display text-display-xl font-semibold leading-[1.02] tracking-tight text-ink"
          >
            העסק רץ,
            <br />
            <span className="text-ink/85">אבל אתה</span>{" "}
            <span className="serif-accent text-ink">לא באמת</span>{" "}
            <span className="text-ink/85">שולט בו.</span>
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.28 }}
            className="mt-7 max-w-xl text-lede text-ink/75"
          >
            Arise Growth עוזרת לבעלי עסקים קטנים ב־Low-Tech לעשות סדר
            תפעולי, לרכז את העבודה במקום אחד, ולהחזיר שליטה על העסק.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.42 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <CTA
              href={siteConfig.calendly}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
            >
              {siteConfig.cta.primary}
            </CTA>
            <CTA href="#how" variant="secondary">
              {siteConfig.cta.secondary}
            </CTA>
          </motion.div>

          <motion.p
            initial={reduce ? false : { opacity: 0 }}
            animate={reduce ? undefined : { opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-7 max-w-md text-[14px] leading-relaxed text-ink-quiet"
          >
            שיחה קצרה, ממוקדת וללא התחייבות.
            <br />
            נבדוק אם יש התאמה והאם נכון להתחיל באבחון.
          </motion.p>
        </div>

        {/* Visual — layered floating mockup cards */}
        <div className="relative md:col-span-5">
          <HeroVisual />
        </div>
      </div>

      {/* Bottom edge fade into next section */}
      <div className="veil-edge pointer-events-none absolute inset-x-0 bottom-0 h-24" />
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto h-[460px] w-full max-w-[460px] md:h-[520px]">
      {/* Soft halo behind cards */}
      <div
        aria-hidden
        className="absolute inset-6 rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(228,217,194,0.9), rgba(228,217,194,0) 60%)",
        }}
      />

      {/* Backplate — operating layer */}
      <FloatingCard
        delay={0.15}
        amplitude={6}
        duration={9}
        className="absolute inset-x-0 top-6 mx-4 p-6"
      >
        <div className="flex items-center justify-between">
          <div className="text-eyebrow uppercase tracking-eyebrow text-ink-quiet">
            לוח ניהול
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[#E4D9C2]" />
            <span className="h-2 w-2 rounded-full bg-[#D4DCDD]" />
            <span className="h-2 w-2 rounded-full bg-ink/15" />
          </div>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-3">
          {[
            { label: "פתוחים", value: "12" },
            { label: "השבוע", value: "7" },
            { label: "באיחור", value: "2" },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-rounded bg-shell-alt px-3 py-3 text-center"
            >
              <div className="font-display text-h3 font-semibold text-ink">
                {s.value}
              </div>
              <div className="mt-0.5 text-[11px] text-ink-quiet">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-5 space-y-2.5">
          {[
            { name: "מעקב לקוח · רוני אביב", state: "בטיפול", tone: "ember" },
            { name: "הצעת מחיר · יואל ש.", state: "ממתין", tone: "mist" },
            { name: "ספק חדש · ציוד מטבח", state: "הושלם", tone: "sand" },
          ].map((t) => (
            <div
              key={t.name}
              className="flex items-center justify-between rounded-soft border border-shell-line/80 bg-white px-3 py-2.5"
            >
              <div className="flex items-center gap-2.5">
                <span
                  className="h-2 w-2 rounded-full"
                  style={{
                    background:
                      t.tone === "ember"
                        ? "#C8612C"
                        : t.tone === "mist"
                        ? "#7C9296"
                        : "#9C8A66",
                  }}
                />
                <span className="text-[13px] text-ink/85">{t.name}</span>
              </div>
              <span className="text-[11px] text-ink-quiet">{t.state}</span>
            </div>
          ))}
        </div>
      </FloatingCard>

      {/* Floating chat-bubble card — fragmentation reframed */}
      <FloatingCard
        delay={0.45}
        amplitude={10}
        duration={7}
        className="absolute -bottom-4 -start-2 w-[260px] p-5 md:-start-6"
      >
        <div className="flex items-start gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-shell-alt text-[13px] font-semibold text-ink">
            ר
          </div>
          <div>
            <div className="text-[12px] text-ink-quiet">וואטסאפ · רוני</div>
            <div className="mt-1 text-[14px] leading-relaxed text-ink/90">
              &ldquo;יצא טופס שמילאתם בשבוע שעבר?&rdquo;
            </div>
          </div>
        </div>
        <div className="mt-3 flex items-center gap-2 rounded-soft bg-shell-alt px-3 py-2 text-[12px] text-ink/70">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-ember" />
          הוקצה למיכל · בטיפול
        </div>
      </FloatingCard>

      {/* Floating metric card */}
      <FloatingCard
        delay={0.7}
        amplitude={7}
        duration={8}
        className="absolute -top-2 -end-2 w-[200px] p-5 md:-end-6"
      >
        <div className="text-eyebrow uppercase tracking-eyebrow text-ink-quiet">
          השבוע
        </div>
        <div className="mt-2 font-display text-[34px] font-semibold leading-none text-ink">
          −38%
        </div>
        <div className="mt-2 text-[13px] leading-relaxed text-ink/70">
          זמן ניהול שבוזבז על מעקב ידני
        </div>
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-shell-alt">
          <div
            className="h-full rounded-full"
            style={{
              width: "62%",
              background:
                "linear-gradient(90deg, #C8612C 0%, #D9A678 100%)",
            }}
          />
        </div>
      </FloatingCard>
    </div>
  );
}
