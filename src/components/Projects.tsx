import { BookOpen, ExternalLink } from "lucide-react";
import { useMemo, useState } from "react";
import { profile } from "../data/profile";
import { text } from "../lib/i18n";
import type { Language, Project, ProjectCategory } from "../types/profile";
import AppLink from "./AppLink";

type ProjectsProps = {
  projects: Project[];
  language: Language;
};

type Filter = "All" | ProjectCategory;

const filters: Filter[] = ["All", "AI / ML", "Local LLM", "Computer Vision"];

export default function Projects({ projects, language }: ProjectsProps) {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");
  const filteredProjects = useMemo(
    () =>
      activeFilter === "All"
        ? projects
        : projects.filter((project) => project.categories.includes(activeFilter)),
    [activeFilter, projects],
  );

  return (
    <section id="projects" className="border-b border-line">
      <div className="section-shell reveal">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">{text(profile.ui.sections.projectsEyebrow, language)}</p>
            <h2 className="section-title">{text(profile.ui.sections.projectsTitle, language)}</h2>
          </div>
          <div className="flex flex-wrap gap-2" aria-label="Project filters">
            {filters.map((filter) => (
              <button
                key={filter}
                className={`focus-ring rounded-md border px-3 py-2 text-sm transition ${
                  activeFilter === filter
                    ? "border-cyan bg-cyan/15 text-cyan"
                    : "border-line bg-white/[0.035] text-zinc-300 hover:border-cyan/40"
                }`}
                type="button"
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-9 grid gap-5 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <article key={project.id} className="surface-card flex min-h-[25rem] flex-col p-6">
              <div className="flex items-start justify-between gap-4">
                <p className="tag">{text(project.status, language)}</p>
                <span className="font-mono text-xs text-zinc-500">{text(project.type, language)}</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold leading-7 text-mint">{text(project.name, language)}</h3>
              <p className="mt-2 text-sm text-amber">{text(project.subtitle, language)}</p>
              <p className="mt-5 flex-1 text-sm leading-7 text-zinc-300">
                {text(project.description, language)}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
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
                {project.githubUrl ? (
                  <a
                    className="focus-ring inline-flex items-center gap-2 rounded-md text-sm font-semibold text-cyan transition hover:text-mint"
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {text(project.linkLabel, language)}
                    <ExternalLink size={15} />
                  </a>
                ) : (
                  <span className="inline-flex rounded-md border border-dashed border-line px-3 py-2 text-sm text-zinc-500">
                    {text(project.linkLabel, language)}
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
