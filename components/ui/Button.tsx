import { cn } from "@/lib/cn";
import type { ComponentPropsWithoutRef } from "react";

type Variant = "primary" | "secondary" | "ghost" | "light";

type Props = ComponentPropsWithoutRef<"a"> & {
  variant?: Variant;
  trailing?: React.ReactNode;
};

export function CTA({ variant = "primary", className, children, trailing, ...rest }: Props) {
  const base =
    "inline-flex items-center gap-2 rounded-pill px-6 py-3 text-[15px] font-medium transition-all duration-300 ease-cinematic";
  const variants: Record<Variant, string> = {
    primary:
      "bg-ink text-shell shadow-raised hover:bg-ink-soft hover:shadow-elevated",
    secondary:
      "bg-shell text-ink ring-1 ring-shell-line hover:ring-ink/30 hover:bg-shell-alt",
    ghost: "text-ink hover:bg-shell-alt",
    light:
      "bg-shell text-ink shadow-raised hover:bg-white hover:shadow-elevated",
  };

  return (
    <a className={cn(base, variants[variant], className)} {...rest}>
      {children}
      <span aria-hidden className="flip-x-rtl text-[18px] leading-none">
        {trailing ?? "→"}
      </span>
    </a>
  );
}
