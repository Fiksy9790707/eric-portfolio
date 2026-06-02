import { text } from "../lib/i18n";
import type { Language, PortfolioProfile } from "../types/profile";

type AboutProps = {
  profile: PortfolioProfile;
  language: Language;
};

export default function About({ profile, language }: AboutProps) {
  const initials = `${profile.identity.name[0] ?? "E"}${profile.identity.chineseName[0] ?? "F"}`;

  return (
    <section id="about" className="border-b border-line">
      <div className="section-shell reveal">
        <p className="eyebrow">{text(profile.ui.sections.aboutEyebrow, language)}</p>
        <h2 className="section-title">{text(profile.ui.sections.aboutTitle, language)}</h2>
        <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="surface-card p-6">
            <div className="relative overflow-hidden rounded-lg border border-line bg-ink/55 p-5">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(94,234,212,0.14),transparent_42%),linear-gradient(90deg,rgba(216,243,220,0.055)_1px,transparent_1px),linear-gradient(rgba(216,243,220,0.055)_1px,transparent_1px)] bg-[length:auto,24px_24px,24px_24px]" />
              <div className="relative flex items-center gap-5">
                <div className="grid h-24 w-24 shrink-0 place-items-center rounded-lg border border-cyan/35 bg-cyan/10 shadow-[0_0_36px_rgba(94,234,212,0.12)]">
                  <span className="font-mono text-3xl font-semibold text-mint">{initials}</span>
                </div>
                <div>
                  <p className="text-2xl font-semibold text-mint">
                    {profile.identity.name} / {profile.identity.chineseName}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-zinc-300">
                    {text(profile.identity.role, language)}
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
              {text(profile.ui.sections.baseLabel, language)}
            </p>
            <p className="mt-4 text-2xl font-semibold text-mint">{text(profile.identity.school, language)}</p>
            <p className="mt-3 text-sm leading-6 text-zinc-300">
              {text(profile.ui.sections.schoolLine, language)}
            </p>
          </div>
          <div className="grid gap-4">
            {profile.about.map((paragraph) => (
              <p key={text(paragraph, language)} className="text-base leading-8 text-zinc-300">
                {text(paragraph, language)}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
