"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "./Container";
import { company, nav } from "@/lib/site-config";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4 sm:h-20">
        <Link
          href="/"
          className="whitespace-nowrap font-display text-[1.35rem] font-extrabold tracking-tight text-ink"
          onClick={() => setOpen(false)}
        >
          ANV <span className="text-accent">Express</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Hauptnavigation">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[0.86rem] font-semibold text-muted transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href={`tel:${company.phoneMain.replace(/\s/g, "")}`}
          className="hidden whitespace-nowrap rounded-sm border border-line px-3 py-1.5 font-mono text-[0.82rem] text-ink md:inline-flex"
        >
          {company.phoneMain}
        </a>

        <button
          type="button"
          className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-sm border border-line text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Menü schließen" : "Menü öffnen"}</span>
          {open ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </Container>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile Navigation"
          className="border-t border-line bg-paper shadow-lg md:hidden"
        >
          <Container className="flex flex-col py-2">
            {nav.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`py-3.5 text-base font-semibold text-ink ${
                  i < nav.length - 1 ? "border-b border-line" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={`tel:${company.phoneMain.replace(/\s/g, "")}`}
              className="mt-3.5 inline-flex self-start rounded-sm border border-line px-3.5 py-2.5 font-mono text-[0.85rem] text-ink"
            >
              {company.phoneMain}
            </a>
          </Container>
        </nav>
      )}
    </header>
  );
}
