import Image from "next/image";
import Link from "next/link";
import { company } from "@/lib/site-config";

export default function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      href="/"
      onClick={onClick}
      // items-start: verhindert, dass das Logo auf die Breite der Unterzeile gestreckt wird
      className="flex min-w-0 flex-none flex-col items-start justify-center"
      aria-label={`${company.brand} – zur Startseite`}
    >
      <Image
        src="/brand/anv-express-logo.png"
        alt={company.brand}
        width={633}
        height={96}
        priority
        className="h-6 w-auto max-w-none object-contain sm:h-7"
      />
      <span className="mt-1 whitespace-nowrap text-[0.68rem] leading-none text-muted sm:text-[0.72rem]">
        ein Service der {company.name}
      </span>
    </Link>
  );
}
