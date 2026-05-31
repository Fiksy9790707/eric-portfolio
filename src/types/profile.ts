export type ProjectCategory = "AI / ML" | "Local LLM" | "Computer Vision";

export type Project = {
  id: string;
  name: string;
  subtitle: string;
  type: string;
  status: "Prototype / Building" | "Experimental" | "Building";
  description: string;
  stack: string[];
  categories: ProjectCategory[];
  githubUrl: string | null;
  linkLabel: string;
};

export type SkillGroup = {
  title: string;
  tone: "Learning" | "Building" | "Exploring";
  items: string[];
};

export type TimelineItem = {
  title: string;
  description: string;
};

export type BlogPostPreview = {
  title: string;
  date: string;
  tags: string[];
  summary: string;
};

export type ContactLink = {
  label: string;
  value: string;
  href: string | null;
};

export type PublicRepository = {
  name: string;
  url: string;
  description: string | null;
  language: string | null;
  stars: number;
  forks: number;
  updatedAt: string;
  topics: string[];
  isFork: boolean;
};

export type GitHubSummary = {
  username: string;
  profileUrl: string;
  avatarUrl: string;
  repositories: PublicRepository[];
};

export type PortfolioProfile = {
  site: {
    title: string;
    description: string;
    lastUpdated: string;
    productionUrl: string;
    ogImage: string;
  };
  identity: {
    name: string;
    chineseName: string;
    role: string;
    tagline: string;
    school: string;
    focus: string[];
    githubUsername: string;
    githubUrl: string;
    email: string;
    resumeUrl: string | null;
    blogUrl: string | null;
  };
  about: string[];
  projects: Project[];
  skills: SkillGroup[];
  timeline: TimelineItem[];
  blogPosts: BlogPostPreview[];
  contactLinks: ContactLink[];
  github: GitHubSummary;
};

export type GitHubApiResponse = {
  ok: boolean;
  service: "portfolio-github";
  source: "live" | "fallback";
  warning?: string;
  profile: {
    username: string;
    profileUrl: string;
    avatarUrl: string;
    publicRepos: number;
    followers: number;
    following: number;
  };
  repositories: PublicRepository[];
};

export type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

export type ContactResponse = {
  ok: boolean;
  message: string;
};
