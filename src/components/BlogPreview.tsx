import type { BlogPostPreview } from "../types/profile";

type BlogPreviewProps = {
  posts: BlogPostPreview[];
};

export default function BlogPreview({ posts }: BlogPreviewProps) {
  return (
    <section id="writing" className="border-b border-line">
      <div className="section-shell reveal">
        <p className="eyebrow">Blog Preview</p>
        <h2 className="section-title">Writing directions to fill in later.</h2>
        <div className="mt-9 grid gap-5 md:grid-cols-2">
          {posts.map((post) => (
            <article key={post.title} className="surface-card p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="font-mono text-xs text-zinc-500">{post.date}</span>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <h3 className="mt-5 text-xl font-semibold text-mint">{post.title}</h3>
              <p className="mt-4 text-sm leading-7 text-zinc-300">{post.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
