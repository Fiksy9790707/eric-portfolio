import { ArrowRight, NotebookText } from "lucide-react";
import { profile } from "../data/profile";
import { assetPath } from "../lib/assets";
import { text } from "../lib/i18n";
import type { BlogPostPreview, Language } from "../types/profile";
import AppLink from "./AppLink";

type WritingNotesProps = {
  posts: BlogPostPreview[];
  language: Language;
};

export default function WritingNotes({ posts, language }: WritingNotesProps) {
  return (
    <section id="writing" className="border-b border-line">
      <div className="section-shell reveal">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">{text(profile.ui.sections.blogEyebrow, language)}</p>
            <h2 className="section-title">{text(profile.ui.sections.blogTitle, language)}</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-zinc-400">
            {text(profile.ui.sections.blogDescription, language)}
          </p>
        </div>

        <div className="mt-9 grid gap-5 lg:grid-cols-2">
          {posts.map((post) => (
            <article key={text(post.title, language)} className="surface-card overflow-hidden">
              {post.coverImage ? (
                <img
                  className="h-56 w-full border-b border-line object-cover"
                  src={assetPath(post.coverImage.src)}
                  alt={text(post.coverImage.alt, language)}
                  loading="lazy"
                />
              ) : null}

              <div className="p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-cyan">
                    <NotebookText size={14} />
                    {text(post.status, language)}
                  </span>
                  <span className="font-mono text-xs text-zinc-500">{post.date}</span>
                </div>

                <h3 className="mt-5 text-xl font-semibold leading-7 text-mint">
                  {text(post.title, language)}
                </h3>
                <p className="mt-4 text-sm leading-7 text-zinc-300">{text(post.summary, language)}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                <ul className="mt-6 grid gap-3">
                  {post.notes.map((note) => (
                    <li key={text(note, language)} className="flex gap-3 text-sm leading-6 text-zinc-300">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                      <span>{text(note, language)}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 rounded-md border border-line bg-ink/45 p-4">
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">
                    {text(profile.ui.sections.blogNextLabel, language)}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-zinc-300">{text(post.next, language)}</p>
                </div>

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
      </div>
    </section>
  );
}
