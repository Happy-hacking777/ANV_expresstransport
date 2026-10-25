"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "./Container";
import Logo from "./Logo";
import { company, nav, telHref } from "@/lib/site-config";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4 sm:h-20">
        <Logo onClick={() => setOpen(false)} />

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Hauptnavigation">
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

        <div className="hidden flex-none items-center gap-2.5 md:flex">
          <a
            href={telHref}
            className="whitespace-nowrap rounded-sm border border-line px-3 py-2 font-mono text-[0.8rem] text-ink hover:border-ink"
          >
            {company.phoneMain}
          </a>
          <Link
            href="/#anfrage"
            className="whitespace-nowrap rounded-sm bg-accent px-4 py-2 text-[0.84rem] font-bold text-white hover:bg-accent-dark"
          >
            Angebot anfragen
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-sm border border-line text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          onClick={() => setOpen((v) => !v)}
        >
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
            <div className="mt-3.5 flex flex-wrap gap-2.5 pb-2">
              <Link
                href="/#anfrage"
                onClick={() => setOpen(false)}
                className="inline-flex rounded-sm bg-accent px-4 py-2.5 text-[0.88rem] font-bold text-white"
              >
                Angebot anfragen
              </Link>
              <a
                href={telHref}
                className="inline-flex rounded-sm border border-line px-3.5 py-2.5 font-mono text-[0.85rem] text-ink"
              >
                {company.phoneMain}
              </a>
            </div>
          </Container>
        </nav>
      )}
    </header>
  );
}
