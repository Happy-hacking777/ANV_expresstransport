interface FaqItem {
  question: string;
  answer: string;
}

export default function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="border-t border-line">
      {items.map((item, i) => (
        <details
          key={item.question}
          className="faq-item group border-b border-line py-4"
          {...(i === 0 ? { open: true } : {})}
        >
          <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-semibold text-ink">
            {item.question}
            <span
              aria-hidden="true"
              className="faq-plus flex h-6 w-6 flex-none items-center justify-center rounded-full border border-line text-base text-muted transition-transform duration-150"
            >
              +
            </span>
          </summary>
          <p className="mt-2.5 max-w-[64ch] text-sm leading-relaxed text-muted">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
