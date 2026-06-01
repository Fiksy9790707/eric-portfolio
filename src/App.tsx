import About from "./components/About";
import BackToTop from "./components/BackToTop";
import BlogPreview from "./components/BlogPreview";
import CaseStudy from "./components/CaseStudy";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import GitHubActivity from "./components/GitHubActivity";
import Hero from "./components/Hero";
import Layout from "./components/Layout";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";
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
  const waferProject = profile.projects.find((project) => project.id === "wafer-defect-detection");

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
        <About profile={profile} language={language} />
        <Projects projects={profile.projects} language={language} />
        {waferProject ? <CaseStudy project={waferProject} language={language} /> : null}
        <GitHubActivity fallbackRepositories={profile.github.repositories} language={language} />
        <Skills skills={profile.skills} language={language} />
        <Timeline items={profile.timeline} language={language} />
        <BlogPreview posts={profile.blogPosts} language={language} />
        <Contact profile={profile} language={language} />
      </main>
      <Footer profile={profile} language={language} />
      <BackToTop />
    </Layout>
  );
}
