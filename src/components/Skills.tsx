import { profile } from "../data/profile";
import { text } from "../lib/i18n";
import type { Language, SkillGroup } from "../types/profile";

type SkillsProps = {
  skills: SkillGroup[];
  language: Language;
};

export default function Skills({ skills, language }: SkillsProps) {
  return (
    <section id="skills" className="border-b border-line">
      <div className="section-shell reveal">
        <p className="eyebrow">{text(profile.ui.sections.skillsEyebrow, language)}</p>
        <h2 className="section-title">{text(profile.ui.sections.skillsTitle, language)}</h2>
        <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((group) => (
            <article key={text(group.title, language)} className="surface-card p-6">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan">
                {text(group.tone, language)}
              </p>
              <h3 className="mt-4 text-xl font-semibold text-mint">{text(group.title, language)}</h3>
              <div className="mt-6 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span className="tag" key={item}>
                    {item}
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
