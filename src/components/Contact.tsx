import { Copy, Send } from "lucide-react";
import { type FormEvent, useState } from "react";
import { sendContactMessage } from "../lib/api";
import { text } from "../lib/i18n";
import type { ContactPayload, Language, PortfolioProfile } from "../types/profile";

type ContactProps = {
  profile: PortfolioProfile;
  language: Language;
};

const initialForm: ContactPayload = {
  name: "",
  email: "",
  message: "",
};

export default function Contact({ profile, language }: ContactProps) {
  const [form, setForm] = useState<ContactPayload>(initialForm);
  const [status, setStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const copyEmail = async () => {
    if (profile.identity.email === "TODO") {
      setStatus(text(profile.ui.contact.emailNotConfigured, language));
      return;
    }

    await navigator.clipboard.writeText(profile.identity.email);
    setStatus(text(profile.ui.contact.emailCopied, language));
  };

  const submitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      const result = await sendContactMessage(form);
      setStatus(result.ok ? text(profile.ui.contact.demoReceived, language) : result.message);
      if (result.ok) {
        setForm(initialForm);
      }
    } catch {
      setStatus(text(profile.ui.contact.unavailable, language));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="border-b border-line">
      <div className="section-shell reveal">
        <p className="eyebrow">{text(profile.ui.sections.contactEyebrow, language)}</p>
        <h2 className="section-title">{text(profile.ui.sections.contactTitle, language)}</h2>
        <div className="mt-9 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="surface-card p-6">
            <h3 className="text-xl font-semibold text-mint">{text(profile.ui.contact.linksTitle, language)}</h3>
            <div className="mt-6 grid gap-3">
              {profile.contactLinks.map((link) => (
                <div
                  key={text(link.label, language)}
                  className="flex items-center justify-between gap-4 rounded-md bg-white/[0.04] p-4"
                >
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">
                      {text(link.label, language)}
                    </p>
                    <p className="mt-1 text-sm text-zinc-200">{link.value}</p>
                  </div>
                  {link.href ? (
                    <a
                      className="focus-ring rounded-md text-sm font-semibold text-cyan transition hover:text-mint"
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {text(profile.ui.contact.open, language)}
                    </a>
                  ) : (
                    <span className="text-sm text-zinc-600">{text(profile.ui.contact.todo, language)}</span>
                  )}
                </div>
              ))}
            </div>
            <button
              className="focus-ring mt-5 inline-flex items-center gap-2 rounded-md border border-line px-4 py-3 text-sm font-semibold text-zinc-100 transition hover:border-cyan/50 hover:text-cyan"
              type="button"
              onClick={copyEmail}
            >
              <Copy size={16} />
              {text(profile.ui.contact.copyEmail, language)}
            </button>
          </div>

          <form className="surface-card p-6" onSubmit={submitForm}>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm text-zinc-300">
                {text(profile.ui.contact.name, language)}
                <input
                  className="focus-ring rounded-md border border-line bg-ink px-4 py-3 text-zinc-100 outline-none"
                  name="name"
                  value={form.name}
                  onChange={(event) => setForm((value) => ({ ...value, name: event.target.value }))}
                  required
                />
              </label>
              <label className="grid gap-2 text-sm text-zinc-300">
                {text(profile.ui.contact.email, language)}
                <input
                  className="focus-ring rounded-md border border-line bg-ink px-4 py-3 text-zinc-100 outline-none"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={(event) => setForm((value) => ({ ...value, email: event.target.value }))}
                  required
                />
              </label>
            </div>
            <label className="mt-4 grid gap-2 text-sm text-zinc-300">
              {text(profile.ui.contact.message, language)}
              <textarea
                className="focus-ring min-h-40 resize-y rounded-md border border-line bg-ink px-4 py-3 text-zinc-100 outline-none"
                name="message"
                value={form.message}
                onChange={(event) => setForm((value) => ({ ...value, message: event.target.value }))}
                required
              />
            </label>
            <div className="mt-5 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <button
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-md bg-mint px-5 py-3 text-sm font-semibold text-ink transition hover:bg-cyan disabled:cursor-not-allowed disabled:opacity-60"
                type="submit"
                disabled={isSubmitting}
              >
                <Send size={16} />
                {isSubmitting
                  ? text(profile.ui.contact.sending, language)
                  : text(profile.ui.contact.sendMessage, language)}
              </button>
              {status ? <p className="text-sm leading-6 text-zinc-300">{status}</p> : null}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
