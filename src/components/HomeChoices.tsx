import { ArrowRight, BookOpen, Code2, Compass, FlaskConical, UserRound } from "lucide-react";
import { useState } from "react";
import { text } from "../lib/i18n";
import type { Language, PortfolioProfile } from "../types/profile";
import AppLink from "./AppLink";

type HomeChoicesProps = {
  profile: PortfolioProfile;
  language: Language;
};

const choiceIcons = [UserRound, Code2, BookOpen, FlaskConical];

export default function HomeChoices({ profile, language }: HomeChoicesProps) {
  const defaultIndex = Math.max(
    0,
    profile.homeChoices.findIndex((choice) => choice.href === "/projects"),
  );
  const [activeIndex, setActiveIndex] = useState(defaultIndex);
  const activeChoice = profile.homeChoices[activeIndex] ?? profile.homeChoices[0];
  const ActiveIcon = choiceIcons[activeIndex] ?? Compass;

  return (
    <section className="border-b border-line">
      <div className="section-shell reveal py-12 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div>
            <p className="eyebrow">{text(profile.ui.sections.indexEyebrow, language)}</p>
            <h2 className="section-title">{text(profile.ui.sections.indexTitle, language)}</h2>
            <p className="section-copy">{text(profile.ui.sections.indexDescription, language)}</p>
          </div>

          <div className="surface-card grid overflow-hidden lg:grid-cols-[0.88fr_1.12fr]">
            <div className="grid gap-2 border-b border-line p-3 lg:border-b-0 lg:border-r">
              {profile.homeChoices.map((choice, index) => {
                const Icon = choiceIcons[index] ?? Compass;
                const isActive = activeIndex === index;

                return (
                  <button
                    key={choice.href}
                    className={`focus-ring grid grid-cols-[2.5rem_1fr] items-center gap-3 rounded-md border px-3 py-3 text-left transition ${
                      isActive
                        ? "border-cyan/50 bg-cyan/[0.12] text-mint"
                        : "border-transparent text-zinc-300 hover:border-line hover:bg-white/[0.04] hover:text-cyan"
                    }`}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-pressed={isActive}
                  >
                    <span
                      className={`inline-flex h-10 w-10 items-center justify-center rounded-md border ${
                        isActive ? "border-cyan/40 bg-cyan/10 text-cyan" : "border-line bg-white/[0.035] text-zinc-500"
                      }`}
                    >
                      <Icon size={17} />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold">{text(choice.title, language)}</span>
                      <span className="mt-1 block font-mono text-xs text-zinc-500">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="flex min-h-72 flex-col justify-between p-6">
              <div>
                <div className="flex items-start justify-between gap-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-md border border-cyan/35 bg-cyan/10 text-cyan">
                    <ActiveIcon size={20} />
                  </div>
                  <span className="rounded-md border border-line px-2.5 py-1 font-mono text-xs text-zinc-500">
                    {String(activeIndex + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-6 text-3xl font-semibold text-mint">{text(activeChoice.title, language)}</h3>
                <p className="mt-4 max-w-md text-base leading-7 text-zinc-300">
                  {text(activeChoice.description, language)}
                </p>
              </div>

              <AppLink
                className="focus-ring group mt-8 inline-flex w-fit items-center gap-2 rounded-md bg-mint px-4 py-3 text-sm font-semibold text-ink transition hover:bg-cyan"
                href={activeChoice.href}
              >
                {text(profile.ui.sections.indexOpenLabel, language)}
                <ArrowRight size={15} className="transition group-hover:translate-x-0.5" />
              </AppLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
