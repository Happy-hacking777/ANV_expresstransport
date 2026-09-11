import Link from "next/link";
import { company, legalNav } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex w-full max-w-content flex-wrap items-center justify-between gap-4 px-5 py-8 text-[0.82rem] text-muted sm:px-8">
        <span>
          © {new Date().getFullYear()} {company.name}. Alle Rechte vorbehalten.
        </span>
        <ul className="flex flex-wrap gap-x-4 gap-y-2 font-mono text-[0.72rem] tracking-wide">
          {legalNav.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="hover:text-ink">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
