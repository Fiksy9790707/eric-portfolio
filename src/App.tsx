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

export default function App() {
  return (
    <Layout>
      <main>
        <Hero profile={profile} />
        <About profile={profile} />
        <Projects projects={profile.projects} />
        <GitHubActivity fallbackRepositories={profile.github.repositories} />
        <Skills skills={profile.skills} />
        <Timeline items={profile.timeline} />
        <BlogPreview posts={profile.blogPosts} />
        <Contact profile={profile} />
      </main>
      <Footer profile={profile} />
      <BackToTop />
    </Layout>
  );
}
