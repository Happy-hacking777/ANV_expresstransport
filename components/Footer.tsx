"use client";

import Link from "next/link";
import { company, legalNav } from "@/lib/site-config";
import { openCookieSettings } from "./CookieBanner";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex w-full max-w-content flex-wrap items-center justify-between gap-4 px-5 py-8 pb-24 text-[0.82rem] text-muted sm:px-8 sm:pb-8">
        <div className="flex flex-col gap-1">
          <span>
            © {new Date().getFullYear()} {company.name}. Alle Rechte vorbehalten.
          </span>
          <span>
            {company.brand} – ein Service der {company.name} · Güterbeförderung seit{" "}
            {company.foundingYear}
          </span>
        </div>
        <ul className="flex flex-wrap gap-x-4 gap-y-2 font-mono text-[0.72rem] tracking-wide">
          {legalNav.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="hover:text-ink">
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <button type="button" onClick={openCookieSettings} className="hover:text-ink">
              Cookie-Einstellungen
            </button>
          </li>
        </ul>
      </div>
    </footer>
  );
}
