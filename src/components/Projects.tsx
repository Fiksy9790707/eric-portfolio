import { ExternalLink } from "lucide-react";
import { useMemo, useState } from "react";
import type { Project, ProjectCategory } from "../types/profile";

type ProjectsProps = {
  projects: Project[];
};

type Filter = "All" | ProjectCategory;

const filters: Filter[] = ["All", "AI / ML", "Local LLM", "Computer Vision"];

export default function Projects({ projects }: ProjectsProps) {
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
            <p className="eyebrow">Projects</p>
            <h2 className="section-title">Selected projects with verifiable public context.</h2>
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
                <p className="tag">{project.status}</p>
                <span className="font-mono text-xs text-zinc-500">{project.type}</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold leading-7 text-mint">{project.name}</h3>
              <p className="mt-2 text-sm text-amber">{project.subtitle}</p>
              <p className="mt-5 flex-1 text-sm leading-7 text-zinc-300">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-7">
                {project.githubUrl ? (
                  <a
                    className="focus-ring inline-flex items-center gap-2 rounded-md text-sm font-semibold text-cyan transition hover:text-mint"
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {project.linkLabel}
                    <ExternalLink size={15} />
                  </a>
                ) : (
                  <span className="inline-flex rounded-md border border-dashed border-line px-3 py-2 text-sm text-zinc-500">
                    {project.linkLabel}
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
