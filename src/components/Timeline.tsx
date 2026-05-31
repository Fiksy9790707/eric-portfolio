import { profile } from "../data/profile";
import { text } from "../lib/i18n";
import type { Language, TimelineItem } from "../types/profile";

type TimelineProps = {
  items: TimelineItem[];
  language: Language;
};

export default function Timeline({ items, language }: TimelineProps) {
  return (
    <section id="timeline" className="border-b border-line">
      <div className="section-shell reveal">
        <p className="eyebrow">{text(profile.ui.sections.timelineEyebrow, language)}</p>
        <h2 className="section-title">{text(profile.ui.sections.timelineTitle, language)}</h2>
        <div className="mt-10 grid gap-5">
          {items.map((item, index) => (
            <article key={text(item.title, language)} className="grid gap-4 md:grid-cols-[10rem_1fr]">
              <div className="font-mono text-sm text-zinc-500">
                {text(profile.ui.timelineStep, language)} {String(index + 1).padStart(2, "0")}
              </div>
              <div className="surface-card p-6">
                <h3 className="text-lg font-semibold text-mint">{text(item.title, language)}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-300">{text(item.description, language)}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
