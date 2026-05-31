import About from "./components/About";
import BackToTop from "./components/BackToTop";
import BlogPreview from "./components/BlogPreview";
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
import { useState } from "react";

export default function App() {
  const [language, setLanguage] = useState<Language>("en");

  const toggleLanguage = () => {
    setLanguage((value) => (value === "en" ? "zh" : "en"));
  };

  return (
    <Layout language={language} onToggleLanguage={toggleLanguage}>
      <main>
        <Hero profile={profile} language={language} />
        <About profile={profile} language={language} />
        <Projects projects={profile.projects} language={language} />
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
