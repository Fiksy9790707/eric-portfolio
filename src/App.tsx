import About from "./components/About";
import BackToTop from "./components/BackToTop";
import CaseStudy from "./components/CaseStudy";
import Contact from "./components/Contact";
import FeaturedCaseStudies from "./components/FeaturedCaseStudies";
import Footer from "./components/Footer";
import GitHubActivity from "./components/GitHubActivity";
import Hero from "./components/Hero";
import Layout from "./components/Layout";
import Now from "./components/Now";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";
import WritingNotes from "./components/WritingNotes";
import { profile } from "./data/profile";
import type { Language } from "./types/profile";
import { useEffect, useState } from "react";

const languageStorageKey = "eric-portfolio-language";

const getInitialLanguage = (): Language => {
  const savedLanguage = window.localStorage.getItem(languageStorageKey);
  return savedLanguage === "zh" || savedLanguage === "en" ? savedLanguage : "en";
};

export default function App() {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);
  const caseStudyProjects = profile.projects.filter((project) => project.caseStudy);

  const toggleLanguage = () => {
    setLanguage((value) => (value === "en" ? "zh" : "en"));
  };

  useEffect(() => {
    window.localStorage.setItem(languageStorageKey, language);
  }, [language]);

  return (
    <Layout language={language} onToggleLanguage={toggleLanguage}>
      <main>
        <Hero profile={profile} language={language} />
        <FeaturedCaseStudies projects={profile.projects} profile={profile} language={language} />
        <About profile={profile} language={language} />
        <Now items={profile.currentlyBuilding} profile={profile} language={language} />
        <Projects projects={profile.projects} language={language} />
        {caseStudyProjects.map((project) => (
          <CaseStudy key={project.id} project={project} language={language} />
        ))}
        <GitHubActivity fallbackRepositories={profile.github.repositories} language={language} />
        <Skills skills={profile.skills} language={language} />
        <Timeline items={profile.timeline} language={language} />
        <WritingNotes posts={profile.blogPosts} language={language} />
        <Contact profile={profile} language={language} />
      </main>
      <Footer profile={profile} language={language} />
      <BackToTop />
    </Layout>
  );
}
