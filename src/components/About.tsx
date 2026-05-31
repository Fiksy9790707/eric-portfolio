import type { PortfolioProfile } from "../types/profile";

type AboutProps = {
  profile: PortfolioProfile;
};

export default function About({ profile }: AboutProps) {
  return (
    <section id="about" className="border-b border-line">
      <div className="section-shell reveal">
        <p className="eyebrow">About Me</p>
        <h2 className="section-title">A CS undergraduate building practical AI workflows.</h2>
        <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="surface-card p-6">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">Base</p>
            <p className="mt-4 text-2xl font-semibold text-mint">Harbin Institute of Technology, Shenzhen</p>
            <p className="mt-3 text-sm leading-6 text-zinc-300">Computer Science and Technology undergraduate.</p>
          </div>
          <div className="grid gap-4">
            {profile.about.map((paragraph) => (
              <p key={paragraph} className="text-base leading-8 text-zinc-300">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
