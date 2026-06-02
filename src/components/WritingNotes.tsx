import { ArrowRight, NotebookText } from "lucide-react";
import { useMemo, useState } from "react";
import { profile } from "../data/profile";
import { assetPath } from "../lib/assets";
import { text } from "../lib/i18n";
import type { BlogFilter, BlogPostPreview, BlogSource, Language, LocalizedString } from "../types/profile";
import AppLink from "./AppLink";

type WritingNotesProps = {
  posts: BlogPostPreview[];
  language: Language;
  mode?: "latest" | "archive";
};

type FilterOption = {
  id: "all" | BlogFilter;
  label: LocalizedString;
};

const filterOptions: FilterOption[] = [
  { id: "all", label: { en: "All", zh: "全部" } },
  { id: "portfolio", label: { en: "Portfolio", zh: "作品集" } },
  { id: "ai-application", label: { en: "AI Apps", zh: "AI 应用" } },
  { id: "product-thinking", label: { en: "Product", zh: "产品思维" } },
  { id: "growth", label: { en: "Growth", zh: "认知 / 成长" } },
  { id: "zhihu", label: { en: "Zhihu", zh: "已发布知乎" } },
];

const sourceLabels: Record<BlogSource, LocalizedString> = {
  original: { en: "Original", zh: "Original" },
  zhihu: { en: "Zhihu", zh: "Zhihu" },
  "project-note": { en: "Project Note", zh: "Project Note" },
};

export default function WritingNotes({ posts, language, mode = "latest" }: WritingNotesProps) {
  const [activeFilter, setActiveFilter] = useState<FilterOption["id"]>("all");
  const isArchive = mode === "archive";

  const visiblePosts = useMemo(() => {
    const filtered =
      activeFilter === "all" ? posts : posts.filter((post) => post.filters.includes(activeFilter));

    return isArchive ? filtered : posts.slice(0, 3);
  }, [activeFilter, isArchive, posts]);

  return (
    <section id="writing" className="border-b border-line">
      <div className="section-shell reveal">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">
              {text(isArchive ? profile.ui.sections.blogArchiveTitle : profile.ui.sections.blogLatestLabel, language)}
            </p>
            <h2 className="section-title">{text(profile.ui.sections.blogTitle, language)}</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-zinc-400">
            {text(isArchive ? profile.ui.sections.blogArchiveDescription : profile.ui.sections.blogDescription, language)}
          </p>
        </div>

        {isArchive ? (
          <div className="mt-8 flex flex-wrap gap-2">
            {filterOptions.map((option) => {
              const isActive = activeFilter === option.id;
              return (
                <button
                  key={option.id}
                  className={`focus-ring rounded-md border px-3 py-2 text-sm font-medium transition ${
                    isActive
                      ? "border-cyan/60 bg-cyan/15 text-mint"
                      : "border-line bg-white/[0.035] text-zinc-300 hover:border-cyan/40 hover:text-cyan"
                  }`}
                  type="button"
                  onClick={() => setActiveFilter(option.id)}
                >
                  {text(option.label, language)}
                </button>
              );
            })}
          </div>
        ) : null}

        <div className="mt-9 grid gap-5 lg:grid-cols-3">
          {visiblePosts.map((post) => (
            <article key={text(post.title, language)} className="surface-card overflow-hidden">
              {post.coverImage ? (
                <img
                  className="h-48 w-full border-b border-line object-cover"
                  src={assetPath(post.coverImage.src)}
                  alt={text(post.coverImage.alt, language)}
                  loading="lazy"
                />
              ) : null}

              <div className="p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-cyan">
                    <NotebookText size={14} />
                    {text(sourceLabels[post.source], language)}
                  </span>
                  <span className="font-mono text-xs text-zinc-500">{post.date}</span>
                </div>

                <h3 className="mt-5 text-xl font-semibold leading-7 text-mint">
                  {text(post.title, language)}
                </h3>
                <p className="mt-4 text-sm leading-7 text-zinc-300">{text(post.summary, language)}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {post.tags.slice(0, 4).map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                {post.relatedProject ? (
                  <AppLink
                    className="focus-ring mt-5 inline-flex rounded-md border border-line px-3 py-2 text-xs font-semibold text-zinc-300 transition hover:border-cyan/50 hover:text-cyan"
                    href={post.relatedProject.href}
                  >
                    {text(profile.ui.sections.blogRelatedLabel, language)}:{" "}
                    {text(post.relatedProject.label, language)}
                  </AppLink>
                ) : null}

                <AppLink
                  className="focus-ring mt-6 inline-flex items-center gap-2 rounded-md text-sm font-semibold text-cyan transition hover:text-mint"
                  href={`/notes/${post.slug}`}
                >
                  {text(profile.ui.sections.blogReadLabel, language)}
                  <ArrowRight size={15} />
                </AppLink>
              </div>
            </article>
          ))}
        </div>

        {!isArchive ? (
          <AppLink
            className="focus-ring mt-8 inline-flex items-center gap-2 rounded-md border border-line px-4 py-3 text-sm font-semibold text-cyan transition hover:border-cyan/50 hover:text-mint"
            href="/writing"
          >
            {text(profile.ui.sections.blogAllLabel, language)}
            <ArrowRight size={15} />
          </AppLink>
        ) : null}
      </div>
    </section>
  );
}
