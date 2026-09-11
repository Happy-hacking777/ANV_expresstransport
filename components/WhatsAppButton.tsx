import { whatsappHref } from "@/lib/site-config";

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappHref("Hallo, ich möchte einen Transport anfragen.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Per WhatsApp anfragen (öffnet in neuem Tab)"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-accent/25 transition-colors hover:bg-accent-dark focus-visible:outline-none sm:bottom-6 sm:right-6"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.4A10 10 0 1 0 12 2Zm0 18.1a8.1 8.1 0 0 1-4.1-1.1l-.3-.2-2.7.8.8-2.6-.2-.3A8.1 8.1 0 1 1 12 20.1Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1s-.6.8-.8 1c-.1.2-.3.2-.5.1-1.3-.6-2.1-1.1-3-2.5-.2-.3 0-.5.1-.6.1-.1.6-.7.7-.9.1-.2 0-.4 0-.5-.1-.1-.6-1.5-.8-2-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.4-.2.3-.9 1-.9 2.3s.9 2.6 1 2.8c.1.2 1.7 2.6 4.1 3.5 2 .8 2.5.6 2.9.6.5 0 1.5-.6 1.7-1.1.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.6-.3Z" />
      </svg>
      WhatsApp
    </a>
  );
}
