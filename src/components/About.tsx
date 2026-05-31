import { text } from "../lib/i18n";
import type { Language, PortfolioProfile } from "../types/profile";

type AboutProps = {
  profile: PortfolioProfile;
  language: Language;
};

export default function About({ profile, language }: AboutProps) {
  return (
    <section id="about" className="border-b border-line">
      <div className="section-shell reveal">
        <p className="eyebrow">{text(profile.ui.sections.aboutEyebrow, language)}</p>
        <h2 className="section-title">{text(profile.ui.sections.aboutTitle, language)}</h2>
        <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="surface-card p-6">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
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
