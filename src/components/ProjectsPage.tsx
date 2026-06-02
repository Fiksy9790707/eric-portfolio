import FeaturedCaseStudies from "./FeaturedCaseStudies";
import Projects from "./Projects";
import type { Language, PortfolioProfile } from "../types/profile";

type ProjectsPageProps = {
  profile: PortfolioProfile;
  language: Language;
};

export default function ProjectsPage({ profile, language }: ProjectsPageProps) {
  return (
    <main>
      <FeaturedCaseStudies projects={profile.projects} profile={profile} language={language} />
      <Projects projects={profile.projects} language={language} />
    </main>
  );
}
