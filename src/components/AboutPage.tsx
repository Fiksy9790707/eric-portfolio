import About from "./About";
import GitHubActivity from "./GitHubActivity";
import Now from "./Now";
import Skills from "./Skills";
import Timeline from "./Timeline";
import type { Language, PortfolioProfile } from "../types/profile";

type AboutPageProps = {
  profile: PortfolioProfile;
  language: Language;
};

export default function AboutPage({ profile, language }: AboutPageProps) {
  return (
    <main>
      <About profile={profile} language={language} />
      <Now items={profile.currentlyBuilding} profile={profile} language={language} />
      <Skills skills={profile.skills} language={language} />
      <Timeline items={profile.timeline} language={language} />
      <GitHubActivity fallbackRepositories={profile.github.repositories} language={language} />
    </main>
  );
}
