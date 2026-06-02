import { ArrowRight } from "lucide-react";
import { assetPath } from "../lib/assets";
import { text } from "../lib/i18n";
import type { Language, PortfolioProfile, Project } from "../types/profile";
import AppLink from "./AppLink";

type FeaturedCaseStudiesProps = {
  projects: Project[];
  profile: PortfolioProfile;
  language: Language;
};

export default function FeaturedCaseStudies({ projects, profile, language }: FeaturedCaseStudiesProps) {
  const featuredProjects = projects.filter((project) => project.caseStudy);

  return (
    <section className="border-b border-line">
      <div className="section-shell reveal py-12 lg:py-16">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">{text(profile.ui.sections.featuredEyebrow, language)}</p>
            <h2 className="section-title">{text(profile.ui.sections.featuredTitle, language)}</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-zinc-400">
            {text(profile.ui.sections.featuredDescription, language)}
          </p>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {featuredProjects.map((project) => {
            const media = project.caseStudy?.media?.[0];

            return (
              <AppLink
                key={project.id}
                className="surface-card group grid overflow-hidden focus-ring md:grid-cols-[0.95fr_1.05fr]"
                href={`/case-studies/${project.id}`}
              >
                <div className="relative min-h-56 overflow-hidden border-b border-line md:border-b-0 md:border-r">
                  {media ? (
                    <img
                      className="h-full w-full object-cover opacity-90 transition duration-500 group-hover:scale-[1.03] group-hover:opacity-100"
                      src={assetPath(media.src)}
                      alt={text(media.alt, language)}
                      loading="lazy"
                    />
                  ) : (
                    <div className="h-full w-full bg-white/[0.04]" />
                  )}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/60 to-transparent p-4">
                    <span className="tag">{media ? text(media.kind, language) : text(project.status, language)}</span>
                  </div>
                </div>
                <div className="flex min-h-56 flex-col p-6">
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-amber">
                    {text(project.subtitle, language)}
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold leading-8 text-mint">
                    {text(project.name, language)}
                  </h3>
                  <p className="mt-4 flex-1 text-sm leading-7 text-zinc-300">
                    {text(project.caseStudy?.summary ?? project.description, language)}
                  </p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan">
                    {text(project.caseStudy?.readLabel ?? project.linkLabel, language)}
                    <ArrowRight size={16} />
                  </div>
                </div>
              </AppLink>
            );
          })}
        </div>
      </div>
    </section>
  );
}
