import { ArrowLeft, ExternalLink, NotebookText } from "lucide-react";
import { assetPath } from "../lib/assets";
import { text } from "../lib/i18n";
import type { BlogPostPreview, BlogSource, Language, LocalizedString, PortfolioProfile } from "../types/profile";
import AppLink from "./AppLink";

type NotePageProps = {
  note: BlogPostPreview;
  profile: PortfolioProfile;
  language: Language;
};

const sourceLabels: Record<BlogSource, LocalizedString> = {
  original: { en: "Original", zh: "Original" },
  zhihu: { en: "Zhihu", zh: "Zhihu" },
  "project-note": { en: "Project Note", zh: "Project Note" },
};

export default function NotePage({ note, profile, language }: NotePageProps) {
  return (
    <main>
      <section className="border-b border-line">
        <div className="section-shell reveal">
          <AppLink
            className="focus-ring inline-flex items-center gap-2 rounded-md text-sm font-semibold text-cyan transition hover:text-mint"
            href="/writing"
          >
            <ArrowLeft size={16} />
            {text(profile.ui.nav.writing, language)}
          </AppLink>

          <div className="mt-8 max-w-4xl">
            <p className="eyebrow">{text(profile.ui.sections.blogEyebrow, language)}</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-mint sm:text-5xl">
              {text(note.title, language)}
            </h1>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-cyan">
                <NotebookText size={14} />
                {text(sourceLabels[note.source], language)}
              </span>
              <span className="tag">{text(note.status, language)}</span>
              <span className="font-mono text-xs text-zinc-500">{note.date}</span>
              {note.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
            <p className="section-copy">{text(note.summary, language)}</p>
          </div>
          {note.coverImage ? (
            <figure className="surface-card mt-8 overflow-hidden">
              <img
                className="h-auto w-full object-cover"
                src={assetPath(note.coverImage.src)}
                alt={text(note.coverImage.alt, language)}
              />
              <figcaption className="border-t border-line p-4 text-sm leading-6 text-zinc-400">
                {text(note.coverImage.caption, language)}
              </figcaption>
            </figure>
          ) : null}
        </div>
      </section>

      <section className="border-b border-line">
        <div className="section-shell reveal">
          <div className="grid gap-5 lg:grid-cols-[0.78fr_1.22fr]">
            <aside className="surface-card h-fit p-6 lg:sticky lg:top-24">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan">
                {text(profile.ui.sections.blogNextLabel, language)}
              </p>
              <p className="mt-3 text-sm leading-6 text-zinc-300">{text(note.next, language)}</p>
              {note.externalUrl ? (
                <a
                  className="focus-ring mt-5 inline-flex items-center gap-2 rounded-md border border-line px-4 py-3 text-sm font-semibold text-cyan transition hover:border-cyan/50 hover:text-mint"
                  href={note.externalUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  {text(note.externalLabel ?? { en: "Read original", zh: "阅读原文" }, language)}
                  <ExternalLink size={14} />
                </a>
              ) : null}
              {note.relatedProject ? (
                <AppLink
                  className="focus-ring mt-3 inline-flex items-center gap-2 rounded-md border border-line px-4 py-3 text-sm font-semibold text-zinc-200 transition hover:border-cyan/50 hover:text-cyan"
                  href={note.relatedProject.href}
                >
                  {text(profile.ui.sections.blogRelatedLabel, language)}:{" "}
                  {text(note.relatedProject.label, language)}
                </AppLink>
              ) : null}
            </aside>

            <div className="grid gap-5">
              {note.sections.map((section, index) => (
                <article key={text(section.title, language)} className="surface-card p-6">
                  <div className="flex items-start justify-between gap-5">
                    <h2 className="text-2xl font-semibold text-mint">{text(section.title, language)}</h2>
                    <span className="font-mono text-xs text-zinc-600">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <p className="mt-4 text-base leading-8 text-zinc-300">{text(section.body, language)}</p>
                  {section.points ? (
                    <ul className="mt-6 grid gap-3">
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
    </main>
  );
}
