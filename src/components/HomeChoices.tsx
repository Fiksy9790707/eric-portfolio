import { ArrowRight, Compass } from "lucide-react";
import { text } from "../lib/i18n";
import type { Language, PortfolioProfile } from "../types/profile";
import AppLink from "./AppLink";

type HomeChoicesProps = {
  profile: PortfolioProfile;
  language: Language;
};

export default function HomeChoices({ profile, language }: HomeChoicesProps) {
  return (
    <section className="border-b border-line">
      <div className="section-shell reveal py-12 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div>
            <p className="eyebrow">{text(profile.ui.sections.indexEyebrow, language)}</p>
            <h2 className="section-title">{text(profile.ui.sections.indexTitle, language)}</h2>
            <p className="section-copy">{text(profile.ui.sections.indexDescription, language)}</p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {profile.homeChoices.map((choice, index) => (
              <AppLink
                key={choice.href}
                className="surface-card group focus-ring flex min-h-40 flex-col justify-between p-5"
                href={choice.href}
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-cyan/35 bg-cyan/10 text-cyan">
                      <Compass size={17} />
                    </div>
                    <span className="font-mono text-xs text-zinc-600">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-mint">{text(choice.title, language)}</h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-300">
                    {text(choice.description, language)}
                  </p>
                </div>

                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan transition group-hover:text-mint">
                  {text(profile.ui.sections.indexOpenLabel, language)}
                  <ArrowRight size={15} />
                </span>
              </AppLink>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
