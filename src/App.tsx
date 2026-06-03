import About from "./components/About";
import AboutPage from "./components/AboutPage";
import BackToTop from "./components/BackToTop";
import CaseStudyPage from "./components/CaseStudyPage";
import Contact from "./components/Contact";
import FeaturedCaseStudies from "./components/FeaturedCaseStudies";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import LabExperimentPage from "./components/LabExperimentPage";
import Layout from "./components/Layout";
import ProjectsPage from "./components/ProjectsPage";
import ProjectLabPage from "./components/ProjectLabPage";
import NotePage from "./components/NotePage";
import Now from "./components/Now";
import WritingNotes from "./components/WritingNotes";
import Skills from "./components/Skills";
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
  const labMatch = route.match(/^\/lab\/([^/]+)$/);
  const selectedProject = caseStudyMatch
    ? profile.projects.find((project) => project.id === caseStudyMatch[1] && project.caseStudy)
    : null;
  const selectedNote = noteMatch ? profile.blogPosts.find((post) => post.slug === noteMatch[1]) : null;
  const selectedLabExperiment = labMatch
    ? profile.labExperiments.find((experiment) => experiment.id === labMatch[1])
    : null;

  return (
    <Layout language={language} onToggleLanguage={toggleLanguage}>
      {selectedProject ? (
        <CaseStudyPage project={selectedProject} profile={profile} language={language} />
      ) : selectedNote ? (
        <NotePage note={selectedNote} profile={profile} language={language} />
      ) : selectedLabExperiment ? (
        <LabExperimentPage experiment={selectedLabExperiment} profile={profile} language={language} />
      ) : route === "/about" ? (
        <AboutPage profile={profile} language={language} />
      ) : route === "/projects" ? (
        <ProjectsPage profile={profile} language={language} />
      ) : route === "/lab" ? (
        <ProjectLabPage profile={profile} language={language} />
      ) : route === "/writing" ? (
        <main>
          <WritingNotes posts={profile.blogPosts} language={language} mode="archive" />
        </main>
      ) : (
        <main>
          <Hero profile={profile} language={language} />
          <About profile={profile} language={language} />
          <FeaturedCaseStudies projects={profile.projects} profile={profile} language={language} />
          <Now items={profile.currentlyBuilding} profile={profile} language={language} />
          <Skills skills={profile.skills} language={language} />
          <WritingNotes posts={profile.blogPosts} language={language} mode="latest" />
          <Contact profile={profile} language={language} />
        </main>
      )}
      <Footer profile={profile} language={language} />
      <BackToTop />
    </Layout>
  );
}
