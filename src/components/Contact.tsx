import { Copy, Send } from "lucide-react";
import { type FormEvent, useState } from "react";
import { sendContactMessage } from "../lib/api";
import type { ContactPayload, PortfolioProfile } from "../types/profile";

type ContactProps = {
  profile: PortfolioProfile;
};

const initialForm: ContactPayload = {
  name: "",
  email: "",
  message: "",
};

export default function Contact({ profile }: ContactProps) {
  const [form, setForm] = useState<ContactPayload>(initialForm);
  const [status, setStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const copyEmail = async () => {
    if (profile.identity.email === "TODO") {
      setStatus("Email not configured yet.");
      return;
    }

    await navigator.clipboard.writeText(profile.identity.email);
    setStatus("Email copied.");
  };

  const submitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      const result = await sendContactMessage(form);
      setStatus(result.message);
      if (result.ok) {
        setForm(initialForm);
      }
    } catch {
      setStatus("Contact API is unavailable. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="border-b border-line">
      <div className="section-shell reveal">
        <p className="eyebrow">Contact</p>
        <h2 className="section-title">Open to feedback, collaboration, and practical project ideas.</h2>
        <div className="mt-9 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="surface-card p-6">
            <h3 className="text-xl font-semibold text-mint">Links</h3>
            <div className="mt-6 grid gap-3">
              {profile.contactLinks.map((link) => (
                <div key={link.label} className="flex items-center justify-between gap-4 rounded-md bg-white/[0.04] p-4">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">{link.label}</p>
                    <p className="mt-1 text-sm text-zinc-200">{link.value}</p>
                  </div>
                  {link.href ? (
                    <a
                      className="focus-ring rounded-md text-sm font-semibold text-cyan transition hover:text-mint"
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Open
                    </a>
                  ) : (
                    <span className="text-sm text-zinc-600">TODO</span>
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
              Copy email
            </button>
          </div>

          <form className="surface-card p-6" onSubmit={submitForm}>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm text-zinc-300">
                Name
                <input
                  className="focus-ring rounded-md border border-line bg-ink px-4 py-3 text-zinc-100 outline-none"
                  name="name"
                  value={form.name}
                  onChange={(event) => setForm((value) => ({ ...value, name: event.target.value }))}
                  required
                />
              </label>
              <label className="grid gap-2 text-sm text-zinc-300">
                Email
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
              Message
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
                {isSubmitting ? "Sending" : "Send message"}
              </button>
              {status ? <p className="text-sm leading-6 text-zinc-300">{status}</p> : null}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
