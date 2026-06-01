import { ExternalLink } from "lucide-react";
import { text } from "../lib/i18n";
import type { Language, Project } from "../types/profile";

type CaseStudyProps = {
  project: Project;
  language: Language;
};

export default function CaseStudy({ project, language }: CaseStudyProps) {
  if (!project.caseStudy) {
    return null;
  }

  const { caseStudy } = project;

  return (
    <section id={caseStudy.id} className="border-b border-line">
      <div className="section-shell reveal">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="lg:sticky lg:top-24">
            <p className="eyebrow">{text(caseStudy.eyebrow, language)}</p>
            <h2 className="section-title">{text(caseStudy.title, language)}</h2>
            <p className="section-copy">{text(caseStudy.summary, language)}</p>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2">
              {caseStudy.metrics.map((metric) => (
                <div key={text(metric.label, language)} className="surface-card p-4">
                  <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-zinc-500">
                    {text(metric.label, language)}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-mint">{text(metric.value, language)}</p>
                </div>
              ))}
            </div>

            <div className="surface-card mt-5 p-5">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan">
                {text(caseStudy.flow.title, language)}
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-5 lg:grid-cols-1">
                {caseStudy.flow.steps.map((step, index) => (
                  <div
                    key={text(step.label, language)}
                    className="relative rounded-md border border-line bg-ink/45 p-4"
                  >
                    {index < caseStudy.flow.steps.length - 1 ? (
                      <span
                        aria-hidden="true"
                        className="absolute -bottom-3 left-6 hidden h-3 w-px bg-cyan/40 lg:block"
                      />
                    ) : null}
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-cyan/40 bg-cyan/10 font-mono text-xs text-cyan">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p className="text-sm font-semibold text-mint">{text(step.label, language)}</p>
                    </div>
                    <p className="mt-3 text-xs leading-5 text-zinc-400">{text(step.detail, language)}</p>
                  </div>
                ))}
              </div>
            </div>

            {project.githubUrl ? (
              <a
                className="focus-ring mt-7 inline-flex items-center gap-2 rounded-md border border-line px-4 py-3 text-sm font-semibold text-cyan transition hover:border-cyan/50 hover:text-mint"
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
              >
                {text(caseStudy.repositoryLabel, language)}
                <ExternalLink size={15} />
              </a>
            ) : null}
          </div>

          <div className="grid gap-5">
            {caseStudy.sections.map((section, index) => (
              <article key={text(section.title, language)} className="surface-card p-6">
                <div className="flex items-start justify-between gap-5">
                  <h3 className="text-xl font-semibold text-mint">{text(section.title, language)}</h3>
                  <span className="font-mono text-xs text-zinc-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-7 text-zinc-300">{text(section.body, language)}</p>
                {section.points ? (
                  <ul className="mt-5 grid gap-3">
                    {section.points.map((point) => (
                      <li key={text(point, language)} className="flex gap-3 text-sm leading-6 text-zinc-300">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                        <span>{text(point, language)}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
