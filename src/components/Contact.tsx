import { Copy, ExternalLink, Github, Mail, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { text } from "../lib/i18n";
import type { Language, PortfolioProfile } from "../types/profile";

type ContactProps = {
  profile: PortfolioProfile;
  language: Language;
};

export default function Contact({ profile, language }: ContactProps) {
  const [status, setStatus] = useState<string | null>(null);
  const hasEmail = profile.identity.email !== "TODO";
  const resumeLink = profile.contactLinks.find((link) => text(link.label, "en") === "Resume");

  const copyEmail = async () => {
    if (!hasEmail) {
      setStatus(text(profile.ui.contact.emailNotConfigured, language));
      return;
    }

    await navigator.clipboard.writeText(profile.identity.email);
    setStatus(text(profile.ui.contact.emailCopied, language));
  };

  return (
    <section id="contact" className="border-b border-line">
      <div className="section-shell reveal">
        <p className="eyebrow">{text(profile.ui.sections.contactEyebrow, language)}</p>
        <h2 className="section-title">{text(profile.ui.sections.contactTitle, language)}</h2>

        <div className="mt-9 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="surface-card p-6">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
              {text(profile.ui.contact.linksTitle, language)}
            </p>
            <h3 className="mt-4 text-2xl font-semibold text-mint">
              {text(profile.ui.contact.directTitle, language)}
            </h3>
            <p className="mt-4 text-sm leading-7 text-zinc-300">
              {text(profile.ui.contact.directDescription, language)}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {hasEmail ? (
                <a
                  className="focus-ring inline-flex items-center gap-2 rounded-md bg-mint px-4 py-3 text-sm font-semibold text-ink transition hover:bg-cyan"
                  href={`mailto:${profile.identity.email}`}
                >
                  <Mail size={16} />
                  {text(profile.ui.contact.emailDirect, language)}
                </a>
              ) : null}
              <a
                className="focus-ring inline-flex items-center gap-2 rounded-md border border-line px-4 py-3 text-sm font-semibold text-zinc-100 transition hover:border-cyan/50 hover:text-cyan"
                href={profile.identity.githubUrl}
                target="_blank"
                rel="noreferrer"
              >
                <Github size={16} />
                {text(profile.ui.contact.githubDirect, language)}
              </a>
              {resumeLink?.href ? (
                <a
                  className="focus-ring inline-flex items-center gap-2 rounded-md border border-line px-4 py-3 text-sm font-semibold text-zinc-100 transition hover:border-cyan/50 hover:text-cyan"
                  href={resumeLink.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <ExternalLink size={16} />
                  {text(profile.ui.contact.resumeDirect, language)}
                </a>
              ) : null}
            </div>

            <button
              className="focus-ring mt-5 inline-flex items-center gap-2 rounded-md border border-line px-4 py-3 text-sm font-semibold text-zinc-100 transition hover:border-cyan/50 hover:text-cyan"
              type="button"
              onClick={copyEmail}
            >
              <Copy size={16} />
              {text(profile.ui.contact.copyEmail, language)}
            </button>
            {status ? <p className="mt-4 text-sm leading-6 text-zinc-300">{status}</p> : null}
          </div>

          <div className="surface-card p-6">
            <div className="flex items-start gap-4">
              <div className="rounded-md border border-cyan/30 bg-cyan/10 p-3 text-cyan">
                <ShieldCheck size={20} aria-hidden="true" />
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
                  {text(profile.ui.contact.formNoteTitle, language)}
                </p>
                <p className="mt-4 text-base leading-8 text-zinc-300">
                  {text(profile.ui.contact.formNoteBody, language)}
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-3">
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
          </div>
        </div>
      </div>
    </section>
  );
}
