import { ArrowLeft, FolderSearch } from "lucide-react";
import { text } from "../lib/i18n";
import type { LabExperiment, Language, PortfolioProfile } from "../types/profile";
import AppLink from "./AppLink";

type LabExperimentPageProps = {
  experiment: LabExperiment;
  profile: PortfolioProfile;
  language: Language;
};

export default function LabExperimentPage({ experiment, profile, language }: LabExperimentPageProps) {
  const sections = [
    {
      label: profile.ui.sections.labWorkLabel,
      items: experiment.detail.work,
    },
    {
      label: profile.ui.sections.labLearningLabel,
      items: experiment.detail.learning,
    },
    {
      label: profile.ui.sections.labNextLabel,
      items: experiment.detail.next,
    },
  ];

  return (
    <main>
      <section className="border-b border-line">
        <div className="section-shell reveal">
          <AppLink
            className="focus-ring inline-flex items-center gap-2 rounded-md text-sm font-semibold text-cyan transition hover:text-mint"
            href="/lab"
          >
            <ArrowLeft size={16} />
            {text(profile.ui.sections.labBackLabel, language)}
          </AppLink>

          <div className="mt-8 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div>
              <p className="eyebrow">{text(experiment.course, language)}</p>
              <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-mint sm:text-5xl">
                {text(experiment.title, language)}
              </h1>
              <p className="section-copy">{text(experiment.summary, language)}</p>
            </div>
            <div className="surface-card p-5">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan">
                {text(profile.ui.sections.labGoalLabel, language)}
              </p>
              <p className="mt-4 text-sm leading-7 text-zinc-300">{text(experiment.detail.goal, language)}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {experiment.stack.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="section-shell reveal">
          <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
            <aside className="surface-card p-5">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-zinc-500">
                <FolderSearch size={14} />
                {text(profile.ui.sections.labSourceLabel, language)}
              </div>
              <p className="mt-3 break-words font-mono text-xs text-zinc-300">{experiment.sourcePath}</p>

              <div className="mt-6">
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-zinc-500">
                  {text(profile.ui.sections.labKeyFilesLabel, language)}
                </p>
                <ul className="mt-3 grid gap-2">
                  {experiment.detail.keyFiles.map((file) => (
                    <li key={file} className="break-words rounded-md border border-line bg-ink/45 p-3 font-mono text-xs text-zinc-300">
                      {file}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            <div className="grid gap-5">
              {sections.map((section, index) => (
                <article key={text(section.label, language)} className="surface-card p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h2 className="text-xl font-semibold text-mint">{text(section.label, language)}</h2>
                    <span className="font-mono text-xs text-zinc-600">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <ul className="mt-5 grid gap-3">
                    {section.items.map((item) => (
                      <li key={text(item, language)} className="flex gap-3 text-sm leading-6 text-zinc-300">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                        <span>{text(item, language)}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}

              <article className="surface-card p-6">
                <h2 className="text-xl font-semibold text-mint">
                  {text(profile.ui.sections.labBoundaryLabel, language)}
                </h2>
                <p className="mt-4 text-sm leading-7 text-zinc-300">{text(experiment.detail.boundary, language)}</p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
