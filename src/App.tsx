import About from "./components/About";
import BackToTop from "./components/BackToTop";
import CaseStudyPage from "./components/CaseStudyPage";
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
import NotePage from "./components/NotePage";
import WritingNotes from "./components/WritingNotes";
import { profile } from "./data/profile";
import { currentRoutePath } from "./lib/routes";
import type { Language } from "./types/profile";
import { useEffect, useState } from "react";

const languageStorageKey = "eric-portfolio-language";

const getInitialLanguage = (): Language => {
  const savedLanguage = window.localStorage.getItem(languageStorageKey);
  return savedLanguage === "zh" || savedLanguage === "en" ? savedLanguage : "en";
};

export default function App() {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);
  const [route, setRoute] = useState(currentRoutePath);

  const toggleLanguage = () => {
    setLanguage((value) => (value === "en" ? "zh" : "en"));
  };

  useEffect(() => {
    const syncRoute = () => setRoute(currentRoutePath());

    window.addEventListener("popstate", syncRoute);
    return () => window.removeEventListener("popstate", syncRoute);
  }, []);

  useEffect(() => {
    window.localStorage.setItem(languageStorageKey, language);
  }, [language]);

  const caseStudyMatch = route.match(/^\/case-studies\/([^/]+)$/);
  const noteMatch = route.match(/^\/notes\/([^/]+)$/);
  const selectedProject = caseStudyMatch
    ? profile.projects.find((project) => project.id === caseStudyMatch[1] && project.caseStudy)
    : null;
  const selectedNote = noteMatch ? profile.blogPosts.find((post) => post.slug === noteMatch[1]) : null;

  return (
    <Layout language={language} onToggleLanguage={toggleLanguage}>
      {selectedProject ? (
        <CaseStudyPage project={selectedProject} profile={profile} language={language} />
      ) : selectedNote ? (
        <NotePage note={selectedNote} profile={profile} language={language} />
      ) : (
        <main>
          <Hero profile={profile} language={language} />
          <FeaturedCaseStudies projects={profile.projects} profile={profile} language={language} />
          <About profile={profile} language={language} />
          <Now items={profile.currentlyBuilding} profile={profile} language={language} />
          <Projects projects={profile.projects} language={language} />
          <GitHubActivity fallbackRepositories={profile.github.repositories} language={language} />
          <Skills skills={profile.skills} language={language} />
          <Timeline items={profile.timeline} language={language} />
          <WritingNotes posts={profile.blogPosts} language={language} />
          <Contact profile={profile} language={language} />
        </main>
      )}
      <Footer profile={profile} language={language} />
      <BackToTop />
    </Layout>
  );
}
