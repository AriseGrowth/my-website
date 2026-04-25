import { cn } from "@/lib/cn";

export function Section({
  id,
  children,
  className,
  containerClassName,
  tone = "shell",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  tone?: "shell" | "alt" | "ink" | "warm";
}) {
  const toneClass =
    tone === "alt"
      ? "bg-shell-alt"
      : tone === "ink"
      ? "bg-ink text-shell"
      : tone === "warm"
      ? "bg-[#F1ECDF]"
      : "bg-shell";

  return (
    <section
      id={id}
      className={cn(
        "relative w-full px-6 py-24 md:px-10 md:py-36",
        toneClass,
        className
      )}
    >
      <div className={cn("mx-auto w-full max-w-[1240px]", containerClassName)}>
        {children}
      </div>
    </section>
  );
}

export function Eyebrow({
  children,
  className,
  tone = "default",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "default" | "light";
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 text-eyebrow uppercase tracking-eyebrow",
        tone === "light" ? "text-shell/70" : "text-ink-quiet",
        className
      )}
    >
      <span
        aria-hidden
        className={cn(
          "inline-block h-px w-7",
          tone === "light" ? "bg-shell/40" : "bg-ink/30"
        )}
      />
      {children}
    </div>
  );
}
