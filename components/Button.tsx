import Link from "next/link";
import { AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
  variant?: Variant;
  external?: boolean;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-sm px-[22px] py-[13px] text-[0.92rem] font-bold transition-colors duration-150 focus-visible:outline-none whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary: "bg-accent text-white hover:bg-accent-dark",
  secondary: "bg-ink text-paper hover:bg-ink/85",
  ghost: "border border-line text-ink hover:border-ink",
};

export default function Button({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
  ...rest
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (external || href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) {
    return (
      <a
        href={href}
        className={classes}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}
