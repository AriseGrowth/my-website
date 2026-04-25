"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function FloatingCard({
  children,
  className,
  delay = 0,
  amplitude = 8,
  duration = 7,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  amplitude?: number;
  duration?: number;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay }}
      className={cn("float-card", className)}
    >
      {reduce ? (
        children
      ) : (
        <motion.div
          animate={{ y: [0, -amplitude, 0] }}
          transition={{
            duration,
            ease: "easeInOut",
            repeat: Infinity,
            delay: delay + 0.4,
          }}
        >
          {children}
        </motion.div>
      )}
    </motion.div>
  );
}
