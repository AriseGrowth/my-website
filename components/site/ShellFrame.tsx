import { cn } from "@/lib/cn";

export function ShellFrame({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className="relative bg-canvas">
      {/* Subtle warm vignette around shell */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 0%, rgba(244,239,230,0) 0%, rgba(235,227,212,0.55) 70%, rgba(229,219,201,0.7) 100%)",
        }}
      />
      <div className="relative z-10 px-3 pb-3 pt-3 md:px-5 md:pb-5 md:pt-4">
        <div
          className={cn(
            "relative mx-auto max-w-shell overflow-hidden rounded-shell bg-shell shadow-shell ring-1 ring-shell-line/70",
            className
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
