import { AlertCircle, GitFork, Github, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { profile } from "../data/profile";
import { fetchGitHubActivity } from "../lib/api";
import { text } from "../lib/i18n";
import type { GitHubApiResponse, Language, PublicRepository } from "../types/profile";

type GitHubActivityProps = {
  fallbackRepositories: PublicRepository[];
  language: Language;
};

const formatDate = (value: string) =>
  new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  }).format(new Date(value));

export default function GitHubActivity({ fallbackRepositories, language }: GitHubActivityProps) {
  const [data, setData] = useState<GitHubApiResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function loadGitHubActivity() {
      setIsLoading(true);
      try {
        const result = await fetchGitHubActivity();
        if (!isMounted) {
          return;
        }
        setData(result);
        setErrorMessage(result.source === "fallback" ? text(profile.ui.github.fallback, language) : null);
      } catch {
        if (!isMounted) {
          return;
        }
        setData(null);
        setErrorMessage("GitHub activity could not be loaded.");
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    void loadGitHubActivity();

    return () => {
      isMounted = false;
    };
  }, [language]);

  const repositories = data?.repositories ?? fallbackRepositories;
  const nonForkRepositories = repositories.filter((repo) => !repo.isFork).slice(0, 6);

  return (
    <section id="github" className="border-b border-line">
      <div className="section-shell reveal">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">{text(profile.ui.sections.githubEyebrow, language)}</p>
            <h2 className="section-title">{text(profile.ui.sections.githubTitle, language)}</h2>
            <p className="section-copy">
              {text(profile.ui.sections.githubDescription, language)}
            </p>
          </div>
          <div className="surface-card flex items-center gap-3 px-4 py-3">
            <Github size={18} className="text-cyan" />
              <span className="text-sm text-zinc-300">
              {data?.source === "live"
                ? text(profile.ui.github.liveApi, language)
                : isLoading
                  ? text(profile.ui.github.loading, language)
                  : text(profile.ui.github.fallback, language)}
            </span>
          </div>
        </div>

        {isLoading ? (
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[0, 1, 2].map((item) => (
              <div key={item} className="surface-card h-40 animate-pulse bg-white/[0.035]" />
            ))}
          </div>
        ) : null}

        {!isLoading && errorMessage ? (
          <div className="mt-8 flex items-start gap-3 rounded-lg border border-amber/30 bg-amber/10 p-4 text-sm text-amber">
            <AlertCircle className="mt-0.5 shrink-0" size={18} />
            <p>{errorMessage}</p>
          </div>
        ) : null}

        {!isLoading ? (
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {nonForkRepositories.map((repo) => (
              <article key={repo.url} className="surface-card p-5">
                <div className="flex items-start justify-between gap-4">
                  <a
                    className="focus-ring rounded-md text-base font-semibold text-mint transition hover:text-cyan"
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {repo.name}
                  </a>
                  <span className="rounded-md border border-line px-2 py-1 font-mono text-[0.7rem] text-zinc-500">
                    {repo.language ?? "Mixed"}
                  </span>
                </div>
                <p className="mt-4 min-h-14 text-sm leading-6 text-zinc-300">
                  {repo.description ?? text(profile.ui.github.missingDescription, language)}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {repo.topics.slice(0, 3).map((topic) => (
                    <span className="tag" key={topic}>
                      {topic}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex items-center justify-between gap-4 border-t border-line pt-4 text-xs text-zinc-500">
                  <span>
                    {text(profile.ui.github.updated, language)} {formatDate(repo.updatedAt)}
                  </span>
                  <span className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-1">
                      <Star size={13} />
                      {repo.stars}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <GitFork size={13} />
                      {repo.forks}
                    </span>
                  </span>
                </div>
              </article>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
