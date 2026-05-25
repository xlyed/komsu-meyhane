import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "outline";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center font-body font-medium tracking-wide transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-deep focus-visible:ring-gold-sunset disabled:opacity-50 disabled:pointer-events-none";

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-sm min-w-[120px]",
  lg: "h-12 px-7 text-sm min-w-[140px]",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-gold-sunset text-navy-deep hover:bg-amber-candle hover:-translate-y-px",
  outline:
    "border border-cream/30 text-cream hover:border-cream/70 hover:bg-cream/5 hover:-translate-y-px",
};

type Props = {
  variant?: Variant;
  size?: Size;
  href?: string;
  external?: boolean;
  className?: string;
  children: ReactNode;
} & Pick<ButtonHTMLAttributes<HTMLButtonElement>, "type" | "onClick" | "disabled" | "aria-label">;

export function Button({
  variant = "primary",
  size = "md",
  href,
  external,
  className = "",
  children,
  ...buttonProps
}: Props) {
  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (href) {
    const isExternal = external ?? /^(https?:|mailto:|tel:)/.test(href);
    const isHash = href.startsWith("#");
    if (isExternal || isHash) {
      return (
        <a
          href={href}
          className={cls}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button className={cls} {...buttonProps}>
      {children}
    </button>
  );
}
