import { ArrowRight, Github } from "lucide-react";
import { text } from "../lib/i18n";
import type { Language, PortfolioProfile } from "../types/profile";
import AppLink from "./AppLink";

type HeroProps = {
  profile: PortfolioProfile;
  language: Language;
};

export default function Hero({ profile, language }: HeroProps) {
  return (
    <section id="top" className="relative border-b border-line">
      <div className="section-shell grid min-h-[calc(100vh-4rem)] items-center gap-12 py-20 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="reveal">
          <p className="eyebrow">{text(profile.ui.hero.eyebrow, language)}</p>
          <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-tight text-mint sm:text-6xl lg:text-7xl">
            {profile.identity.name} / {profile.identity.chineseName}
          </h1>
          <p className="mt-5 font-mono text-sm uppercase tracking-[0.18em] text-amber">
            {text(profile.identity.role, language)}
          </p>
          <p className="mt-7 max-w-2xl text-xl leading-8 text-zinc-200 sm:text-2xl">
            {text(profile.identity.tagline, language)}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <AppLink
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-md bg-mint px-5 py-3 text-sm font-semibold text-ink transition hover:bg-cyan"
              href="/projects"
            >
              {text(profile.ui.hero.viewProjects, language)}
              <ArrowRight size={17} />
            </AppLink>
            <a
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-md border border-line px-5 py-3 text-sm font-semibold text-zinc-100 transition hover:border-cyan/50 hover:text-cyan"
              href={profile.identity.githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              <Github size={17} />
              {text(profile.ui.hero.githubProfile, language)}
            </a>
          </div>
        </div>
        <div className="reveal lg:justify-self-end" style={{ animationDelay: "120ms" }}>
          <div className="surface-card max-w-md p-6">
            <div className="flex items-center justify-between gap-4 border-b border-line pb-5">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-cyan">
                  {text(profile.ui.hero.currentFocus, language)}
                </p>
                <p className="mt-2 text-lg font-semibold text-mint">
                  {text(profile.ui.hero.focusTitle, language)}
                </p>
              </div>
              <div className="h-3 w-3 rounded-full bg-cyan shadow-[0_0_22px_rgba(94,234,212,0.72)]" />
            </div>
            <div className="mt-5 grid gap-3">
              {profile.identity.focus.map((item) => (
                <div
                  key={text(item, language)}
                  className="flex items-center justify-between gap-4 rounded-md bg-white/[0.045] px-4 py-3"
                >
                  <span className="text-sm text-zinc-200">{text(item, language)}</span>
                  <span className="font-mono text-xs text-zinc-500">
                    {text(profile.ui.hero.building, language)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
