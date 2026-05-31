import type { SkillGroup } from "../types/profile";

type SkillsProps = {
  skills: SkillGroup[];
};

export default function Skills({ skills }: SkillsProps) {
  return (
    <section id="skills" className="border-b border-line">
      <div className="section-shell reveal">
        <p className="eyebrow">Skills</p>
        <h2 className="section-title">Tools I am learning, building with, and exploring.</h2>
        <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((group) => (
            <article key={group.title} className="surface-card p-6">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan">{group.tone}</p>
              <h3 className="mt-4 text-xl font-semibold text-mint">{group.title}</h3>
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
