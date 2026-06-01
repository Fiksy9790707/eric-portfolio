import { ArrowUpRight } from "lucide-react";
import { text } from "../lib/i18n";
import type { CurrentlyBuildingItem, Language, PortfolioProfile } from "../types/profile";

type NowProps = {
  items: CurrentlyBuildingItem[];
  profile: PortfolioProfile;
  language: Language;
};

export default function Now({ items, profile, language }: NowProps) {
  return (
    <section id="now" className="border-b border-line">
      <div className="section-shell reveal">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">{text(profile.ui.sections.nowEyebrow, language)}</p>
            <h2 className="section-title">{text(profile.ui.sections.nowTitle, language)}</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-zinc-400">
            {text(profile.ui.sections.nowDescription, language)}
          </p>
        </div>

        <div className="mt-9 grid gap-5 lg:grid-cols-3">
          {items.map((item) => (
            <article key={text(item.title, language)} className="surface-card min-h-64 p-6">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold leading-7 text-mint">{text(item.title, language)}</h3>
                <ArrowUpRight className="mt-1 text-cyan" size={18} aria-hidden="true" />
              </div>
              <p className="mt-5 text-sm leading-7 text-zinc-300">{text(item.description, language)}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
