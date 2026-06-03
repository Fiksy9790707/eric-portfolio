import { ArrowRight, BookOpen, ExternalLink } from "lucide-react";
import { text } from "../lib/i18n";
import type { Language, PortfolioProfile, Project } from "../types/profile";
import AppLink from "./AppLink";

type FeaturedCaseStudiesProps = {
  projects: Project[];
  profile: PortfolioProfile;
  language: Language;
};

export default function FeaturedCaseStudies({ projects, profile, language }: FeaturedCaseStudiesProps) {
  const featuredOrder = ["ai-campus-assistant", "wafer-defect-detection", "java-aircraft-war"];
  const featuredProjects = projects
    .filter((project) => project.featured)
    .sort((a, b) => featuredOrder.indexOf(a.id) - featuredOrder.indexOf(b.id))
    .slice(0, 3);
  const labels = {
    problem: language === "zh" ? "问题" : "Problem",
    built: language === "zh" ? "构建" : "Built",
    result: language === "zh" ? "结果" : "Result",
    stack: language === "zh" ? "技术栈" : "Stack",
  };

  return (
    <section className="border-b border-line">
      <div className="section-shell reveal py-12 lg:py-16">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">{text(profile.ui.sections.featuredEyebrow, language)}</p>
            <h2 className="section-title">{text(profile.ui.sections.featuredTitle, language)}</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-zinc-300">
            {text(profile.ui.sections.featuredDescription, language)}
          </p>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <article key={project.id} className="surface-card flex min-h-[32rem] flex-col p-6">
              <div className="flex items-start justify-between gap-4">
                <span className="tag">{text(project.status, language)}</span>
                <span className="font-mono text-xs text-zinc-500">{text(project.type, language)}</span>
              </div>

              <h3 className="mt-6 text-2xl font-semibold leading-8 text-mint">{text(project.name, language)}</h3>
              <p className="mt-2 text-sm text-amber">{text(project.subtitle, language)}</p>

              <div
                className="mt-6 rounded-md border border-line bg-ink/55 p-4"
                aria-label={`${text(project.name, language)} workflow preview`}
              >
                <div className="grid grid-cols-3 gap-2">
                  {[labels.problem, labels.built, labels.result].map((label, index) => (
                    <div key={label} className="rounded-md border border-cyan/20 bg-cyan/[0.06] p-3">
                      <p className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-cyan">
                        0{index + 1}
                      </p>
                      <p className="mt-2 text-xs font-semibold text-zinc-100">{label}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-3 h-px bg-gradient-to-r from-cyan/70 via-mint/40 to-transparent" />
              </div>

              <div className="mt-6 grid flex-1 gap-4">
                <div>
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-cyan">
                    {labels.problem}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-zinc-300">{text(project.problem, language)}</p>
                </div>
                <div>
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-cyan">
                    {labels.built}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-zinc-300">{text(project.built, language)}</p>
                </div>
                <div>
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-cyan">
                    {labels.result}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-zinc-300">{text(project.result, language)}</p>
                </div>
              </div>

              <div className="mt-6 border-t border-line pt-5">
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-zinc-500">
                  {labels.stack}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.stack.slice(0, 4).map((item) => (
                    <span className="tag" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-4">
                {project.caseStudy ? (
                  <AppLink
                    className="focus-ring inline-flex items-center gap-2 rounded-md text-sm font-semibold text-cyan transition hover:text-mint"
                    href={`/case-studies/${project.id}`}
                  >
                    {text(project.caseStudy.readLabel, language)}
                    <BookOpen size={15} />
                  </AppLink>
                ) : null}
                {project.detailUrl ? (
                  <AppLink
                    className="focus-ring inline-flex items-center gap-2 rounded-md text-sm font-semibold text-cyan transition hover:text-mint"
                    href={project.detailUrl}
                  >
                    {text(project.linkLabel, language)}
                    <ArrowRight size={15} />
                  </AppLink>
                ) : null}
                {project.githubUrl ? (
                  <a
                    className="focus-ring inline-flex items-center gap-2 rounded-md text-sm font-semibold text-cyan transition hover:text-mint"
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {text(project.linkLabel, language)}
                    <ExternalLink size={15} />
                  </a>
                ) : !project.caseStudy && !project.detailUrl ? (
                  <span className="inline-flex rounded-md border border-dashed border-line px-3 py-2 text-sm text-zinc-500">
                    {text(project.linkLabel, language)}
                  </span>
                ) : null}
              </div>
            </article>
          ))}
        </div>

        <AppLink
          className="focus-ring mt-8 inline-flex items-center gap-2 rounded-md border border-line px-4 py-3 text-sm font-semibold text-cyan transition hover:border-cyan/50 hover:text-mint"
          href="/projects"
        >
          {text(profile.ui.hero.viewProjects, language)}
          <ArrowRight size={15} />
        </AppLink>
      </div>
    </section>
  );
}
