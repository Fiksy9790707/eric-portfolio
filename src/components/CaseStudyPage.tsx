import { ArrowLeft, Code2, ExternalLink, ShieldCheck } from "lucide-react";
import { assetPath } from "../lib/assets";
import { text } from "../lib/i18n";
import type { Language, PortfolioProfile, Project } from "../types/profile";
import AppLink from "./AppLink";

type CaseStudyPageProps = {
  project: Project;
  profile: PortfolioProfile;
  language: Language;
};

export default function CaseStudyPage({ project, profile, language }: CaseStudyPageProps) {
  const caseStudy = project.caseStudy;

  if (!caseStudy) {
    return null;
  }

  return (
    <main>
      <section className="border-b border-line">
        <div className="section-shell reveal">
          <AppLink
            className="focus-ring inline-flex items-center gap-2 rounded-md text-sm font-semibold text-cyan transition hover:text-mint"
            href="/projects"
          >
            <ArrowLeft size={16} />
            {text(profile.ui.sections.backHome, language)}
          </AppLink>

          <div className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="eyebrow">{text(caseStudy.eyebrow, language)}</p>
              <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-mint sm:text-5xl">
                {text(caseStudy.title, language)}
              </h1>
              <p className="section-copy">{text(caseStudy.summary, language)}</p>
            </div>
            <div className="surface-card p-5">
              <div className="grid grid-cols-2 gap-3">
                {caseStudy.metrics.map((metric) => (
                  <div key={text(metric.label, language)} className="rounded-md bg-white/[0.04] p-4">
                    <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-zinc-500">
                      {text(metric.label, language)}
                    </p>
                    <p className="mt-2 text-sm font-semibold text-mint">{text(metric.value, language)}</p>
                  </div>
                ))}
              </div>
              {project.githubUrl ? (
                <a
                  className="focus-ring mt-5 inline-flex items-center gap-2 rounded-md border border-line px-4 py-3 text-sm font-semibold text-cyan transition hover:border-cyan/50 hover:text-mint"
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  {text(profile.ui.sections.openRepository, language)}
                  <ExternalLink size={15} />
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="section-shell reveal">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">{text(profile.ui.sections.evidenceEyebrow, language)}</p>
              <h2 className="section-title">{text(profile.ui.sections.evidenceTitle, language)}</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-zinc-400">
              {text(profile.ui.sections.evidenceDescription, language)}
            </p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {caseStudy.evidence.map((item) => (
              <article key={text(item.label, language)} className="surface-card p-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-cyan/35 bg-cyan/10 text-cyan">
                    <ShieldCheck size={18} />
                  </div>
                  <span className="rounded-md border border-line bg-ink/60 px-2.5 py-1 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-zinc-300">
                    {text(item.status, language)}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-mint">{text(item.label, language)}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-300">{text(item.description, language)}</p>
                {item.href ? (
                  <a
                    className="focus-ring mt-5 inline-flex items-center gap-2 rounded-md text-sm font-semibold text-cyan transition hover:text-mint"
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {text(profile.ui.sections.openEvidence, language)}
                    <ExternalLink size={14} />
                  </a>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      {caseStudy.media && caseStudy.media.length > 0 ? (
        <section className="border-b border-line">
          <div className="section-shell reveal">
            <div className="grid gap-5 lg:grid-cols-2">
              {caseStudy.media.map((item, index) => (
                <figure
                  key={item.src}
                  className={`surface-card overflow-hidden ${index === 0 ? "lg:col-span-2" : ""}`}
                >
                  <div className="border-b border-line bg-black/20">
                    <img
                      className="h-auto w-full object-cover"
                      src={assetPath(item.src)}
                      alt={text(item.alt, language)}
                      loading="lazy"
                    />
                  </div>
                  <figcaption className="p-5">
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan">
                      {text(item.kind, language)}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-zinc-300">{text(item.caption, language)}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {caseStudy.codeHighlights && caseStudy.codeHighlights.length > 0 ? (
        <section id="code-highlights" className="border-b border-line">
          <div className="section-shell reveal">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="eyebrow">{text(profile.ui.sections.codeEyebrow, language)}</p>
                <h2 className="section-title">{text(profile.ui.sections.codeTitle, language)}</h2>
              </div>
              <p className="max-w-md text-sm leading-6 text-zinc-400">
                {text(profile.ui.sections.codeDescription, language)}
              </p>
            </div>

            <div className="mt-8 grid gap-5 lg:grid-cols-2">
              {caseStudy.codeHighlights.map((highlight) => (
                <article key={text(highlight.title, language)} className="surface-card overflow-hidden">
                  <div className="flex items-start justify-between gap-4 border-b border-line p-5">
                    <div>
                      <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-cyan">
                        <Code2 size={15} />
                        {highlight.language}
                      </div>
                      <h3 className="mt-4 text-xl font-semibold text-mint">
                        {text(highlight.title, language)}
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-zinc-300">
                        {text(highlight.description, language)}
                      </p>
                    </div>
                  </div>

                  <pre className="overflow-x-auto bg-black/25 p-5 text-[0.78rem] leading-6 text-zinc-200">
                    <code>{highlight.code}</code>
                  </pre>

                  {highlight.points ? (
                    <ul className="grid gap-3 border-t border-line p-5">
                      {highlight.points.map((point) => (
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
        </section>
      ) : null}

      <section className="border-b border-line">
        <div className="section-shell reveal">
          <div className="surface-card p-5">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan">
              {text(caseStudy.flow.title, language)}
            </p>
            <div className="mt-5 grid gap-3 md:grid-cols-5">
              {caseStudy.flow.steps.map((step, index) => (
                <div key={text(step.label, language)} className="rounded-md border border-line bg-ink/45 p-4">
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

          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            {caseStudy.sections.map((section, index) => (
              <article key={text(section.title, language)} className="surface-card p-6">
                <div className="flex items-start justify-between gap-5">
                  <h2 className="text-xl font-semibold text-mint">{text(section.title, language)}</h2>
                  <span className="font-mono text-xs text-zinc-600">{String(index + 1).padStart(2, "0")}</span>
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
      </section>
    </main>
  );
}
