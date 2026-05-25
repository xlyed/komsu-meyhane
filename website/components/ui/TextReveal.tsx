"use client";

import { motion, useReducedMotion } from "framer-motion";

type Props = {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
  stagger?: number;
  duration?: number;
  triggerOnMount?: boolean;
};

const EASE = [0.22, 0.61, 0.36, 1] as const;

export function TextReveal({
  text,
  className = "",
  as = "span",
  delay = 0,
  stagger = 0.06,
  duration = 0.7,
  triggerOnMount = false,
}: Props) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    if (as === "h1") return <h1 className={className}>{text}</h1>;
    if (as === "h2") return <h2 className={className}>{text}</h2>;
    if (as === "h3") return <h3 className={className}>{text}</h3>;
    if (as === "p") return <p className={className}>{text}</p>;
    return <span className={className}>{text}</span>;
  }

  const words = text.split(" ");
  const Container = motion[as];

  const viewTriggerProps = triggerOnMount
    ? { initial: "hidden" as const, animate: "visible" as const }
    : {
        initial: "hidden" as const,
        whileInView: "visible" as const,
        viewport: { once: true, margin: "-80px" },
      };

  return (
    <Container
      className={className}
      aria-label={text}
      transition={{ staggerChildren: stagger, delayChildren: delay }}
      {...viewTriggerProps}
    >
      {words.map((word, i) => (
        <span key={i}>
          <motion.span
            aria-hidden
            className="inline-block"
            variants={{
              hidden: { opacity: 0, y: "0.4em" },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration, ease: EASE },
              },
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </Container>
  );
}
