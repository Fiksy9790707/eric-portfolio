import { ArrowLeft, ArrowRight, FolderSearch, FlaskConical } from "lucide-react";
import { text } from "../lib/i18n";
import type { Language, PortfolioProfile } from "../types/profile";
import AppLink from "./AppLink";

type ProjectLabPageProps = {
  profile: PortfolioProfile;
  language: Language;
};

export default function ProjectLabPage({ profile, language }: ProjectLabPageProps) {
  return (
    <main>
      <section className="border-b border-line">
        <div className="section-shell reveal">
          <AppLink
            className="focus-ring inline-flex items-center gap-2 rounded-md text-sm font-semibold text-cyan transition hover:text-mint"
            href="/"
          >
            <ArrowLeft size={16} />
            {text(profile.ui.sections.labBackLabel, language)}
          </AppLink>

          <div className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="eyebrow">{text(profile.ui.sections.labEyebrow, language)}</p>
              <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-mint sm:text-5xl">
                {text(profile.ui.sections.labTitle, language)}
              </h1>
            </div>
            <p className="max-w-xl text-base leading-7 text-zinc-300">
              {text(profile.ui.sections.labDescription, language)}
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="section-shell reveal">
          <div className="grid gap-5 lg:grid-cols-2">
            {profile.labExperiments.map((experiment, index) => (
              <article key={experiment.id} className="surface-card p-6">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-cyan/35 bg-cyan/10 text-cyan">
                    <FlaskConical size={19} />
                  </div>
                  <span className="font-mono text-xs text-zinc-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <p className="mt-5 font-mono text-xs uppercase tracking-[0.18em] text-cyan">
                  {text(experiment.course, language)}
                </p>
                <h2 className="mt-3 text-xl font-semibold leading-7 text-mint">
                  {text(experiment.title, language)}
                </h2>
                <p className="mt-2 text-sm font-medium text-zinc-400">{text(experiment.status, language)}</p>
                <p className="mt-4 text-sm leading-7 text-zinc-300">{text(experiment.summary, language)}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {experiment.stack.map((item) => (
                    <span className="tag" key={item}>
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-6 rounded-md border border-line bg-ink/45 p-4">
                  <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-zinc-500">
                    <FolderSearch size={14} />
                    {text(profile.ui.sections.labSourceLabel, language)}
                  </div>
                  <p className="mt-2 break-words font-mono text-xs text-zinc-300">{experiment.sourcePath}</p>
                </div>

                <div className="mt-5">
                  <p className="font-mono text-xs uppercase tracking-[0.16em] text-zinc-500">
                    {text(profile.ui.sections.labEvidenceLabel, language)}
                  </p>
                  <ul className="mt-3 grid gap-3">
                    {experiment.evidence.map((item) => (
                      <li key={text(item, language)} className="flex gap-3 text-sm leading-6 text-zinc-300">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                        <span>{text(item, language)}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <AppLink
                  className="focus-ring mt-6 inline-flex items-center gap-2 rounded-md text-sm font-semibold text-cyan transition hover:text-mint"
                  href={`/lab/${experiment.id}`}
                >
                  {text(profile.ui.sections.labDetailLabel, language)}
                  <ArrowRight size={15} />
                </AppLink>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
