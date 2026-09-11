import { ReactNode } from "react";
import Container from "./Container";

export default function Section({
  children,
  className = "",
  id,
  tone = "paper",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "paper" | "ink" | "line";
}) {
  const toneClass =
    tone === "ink"
      ? "bg-ink text-paper"
      : tone === "line"
      ? "bg-surface border-y border-line"
      : "bg-paper";

  return (
    <section id={id} className={`${toneClass} py-12 sm:py-24 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}
