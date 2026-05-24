"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "article" | "li";
};

export function FadeIn({
  children,
  delay = 0,
  duration = 0.8,
  y = 24,
  className = "",
  as = "div",
}: Props) {
  const prefersReducedMotion = useReducedMotion();
  const Component = motion[as];

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration, delay, ease: [0.22, 0.61, 0.36, 1] }}
    >
      {children}
    </Component>
  );
}
