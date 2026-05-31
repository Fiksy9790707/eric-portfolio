import type { TimelineItem } from "../types/profile";

type TimelineProps = {
  items: TimelineItem[];
};

export default function Timeline({ items }: TimelineProps) {
  return (
    <section id="timeline" className="border-b border-line">
      <div className="section-shell reveal">
        <p className="eyebrow">Timeline</p>
        <h2 className="section-title">A conservative snapshot of the current path.</h2>
        <div className="mt-10 grid gap-5">
          {items.map((item, index) => (
            <article key={item.title} className="grid gap-4 md:grid-cols-[10rem_1fr]">
              <div className="font-mono text-sm text-zinc-500">Step {String(index + 1).padStart(2, "0")}</div>
              <div className="surface-card p-6">
                <h3 className="text-lg font-semibold text-mint">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-300">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
