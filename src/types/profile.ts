export type Language = "en" | "zh";

export type LocalizedString = {
  en: string;
  zh: string;
};

export type ProjectCategory = "AI / ML" | "Local LLM" | "Computer Vision";

export type Project = {
  id: string;
  name: LocalizedString;
  subtitle: LocalizedString;
  type: LocalizedString;
  status: LocalizedString;
  description: LocalizedString;
  stack: string[];
  categories: ProjectCategory[];
  githubUrl: string | null;
  linkLabel: LocalizedString;
  caseStudy?: CaseStudy;
};

export type CaseStudyMetric = {
  label: LocalizedString;
  value: LocalizedString;
};

export type EvidenceItem = {
  label: LocalizedString;
  status: LocalizedString;
  description: LocalizedString;
  href?: string | null;
};

export type CaseStudySection = {
  title: LocalizedString;
  body: LocalizedString;
  points?: LocalizedString[];
};

export type CaseStudyFlowStep = {
  label: LocalizedString;
  detail: LocalizedString;
};

export type CaseStudyMedia = {
  src: string;
  alt: LocalizedString;
  caption: LocalizedString;
  kind: LocalizedString;
};

export type CaseStudy = {
  id: string;
  eyebrow: LocalizedString;
  title: LocalizedString;
  summary: LocalizedString;
  readLabel: LocalizedString;
  repositoryLabel: LocalizedString;
  metrics: CaseStudyMetric[];
  evidence: EvidenceItem[];
  flow: {
    title: LocalizedString;
    steps: CaseStudyFlowStep[];
  };
  media?: CaseStudyMedia[];
  sections: CaseStudySection[];
};

export type SkillGroup = {
  title: LocalizedString;
  tone: LocalizedString;
  items: string[];
};

export type CurrentlyBuildingItem = {
  title: LocalizedString;
  description: LocalizedString;
  tags: string[];
};

export type LabExperiment = {
  id: string;
  title: LocalizedString;
  course: LocalizedString;
  status: LocalizedString;
  summary: LocalizedString;
  stack: string[];
  sourcePath: string;
  evidence: LocalizedString[];
  detail: {
    goal: LocalizedString;
    work: LocalizedString[];
    keyFiles: string[];
    learning: LocalizedString[];
    boundary: LocalizedString;
    next: LocalizedString[];
  };
};

export type TimelineItem = {
  title: LocalizedString;
  description: LocalizedString;
};

export type NoteSection = {
  title: LocalizedString;
  body: LocalizedString;
  points?: LocalizedString[];
};

export type BlogSource = "original" | "zhihu" | "project-note";

export type BlogFilter = "portfolio" | "ai-application" | "product-thinking" | "growth" | "zhihu";

export type RelatedProject = {
  label: LocalizedString;
  href: string;
};

export type BlogPostPreview = {
  slug: string;
  title: LocalizedString;
  date: string;
  status: LocalizedString;
  source: BlogSource;
  filters: BlogFilter[];
  relatedProject?: RelatedProject;
  tags: string[];
  coverImage?: CaseStudyMedia;
  externalUrl?: string;
  externalLabel?: LocalizedString;
  summary: LocalizedString;
  notes: LocalizedString[];
  next: LocalizedString;
  sections: NoteSection[];
};

export type ContactLink = {
  label: LocalizedString;
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
    role: LocalizedString;
    tagline: LocalizedString;
    school: LocalizedString;
    focus: LocalizedString[];
    githubUsername: string;
    githubUrl: string;
    email: string;
    resumeUrl: string | null;
    blogUrl: string | null;
  };
  about: LocalizedString[];
  currentlyBuilding: CurrentlyBuildingItem[];
  projects: Project[];
  labExperiments: LabExperiment[];
  skills: SkillGroup[];
  timeline: TimelineItem[];
  blogPosts: BlogPostPreview[];
  contactLinks: ContactLink[];
  github: GitHubSummary;
  ui: {
    nav: {
      about: LocalizedString;
      projects: LocalizedString;
      github: LocalizedString;
      skills: LocalizedString;
      lab: LocalizedString;
      writing: LocalizedString;
      contact: LocalizedString;
    };
    languageToggle: LocalizedString;
    hero: {
      eyebrow: LocalizedString;
      viewProjects: LocalizedString;
      githubProfile: LocalizedString;
      currentFocus: LocalizedString;
      focusTitle: LocalizedString;
      building: LocalizedString;
    };
    sections: {
      aboutEyebrow: LocalizedString;
      aboutTitle: LocalizedString;
      baseLabel: LocalizedString;
      schoolLine: LocalizedString;
      featuredEyebrow: LocalizedString;
      featuredTitle: LocalizedString;
      featuredDescription: LocalizedString;
      nowEyebrow: LocalizedString;
      nowTitle: LocalizedString;
      nowDescription: LocalizedString;
      projectsEyebrow: LocalizedString;
      projectsTitle: LocalizedString;
      githubEyebrow: LocalizedString;
      githubTitle: LocalizedString;
      githubDescription: LocalizedString;
      skillsEyebrow: LocalizedString;
      skillsTitle: LocalizedString;
      timelineEyebrow: LocalizedString;
      timelineTitle: LocalizedString;
      blogEyebrow: LocalizedString;
      blogTitle: LocalizedString;
      blogDescription: LocalizedString;
      blogNextLabel: LocalizedString;
      blogReadLabel: LocalizedString;
      blogAllLabel: LocalizedString;
      blogLatestLabel: LocalizedString;
      blogArchiveTitle: LocalizedString;
      blogArchiveDescription: LocalizedString;
      blogRelatedLabel: LocalizedString;
      backHome: LocalizedString;
      openRepository: LocalizedString;
      evidenceEyebrow: LocalizedString;
      evidenceTitle: LocalizedString;
      evidenceDescription: LocalizedString;
      openEvidence: LocalizedString;
      labEyebrow: LocalizedString;
      labTitle: LocalizedString;
      labDescription: LocalizedString;
      labSourceLabel: LocalizedString;
      labEvidenceLabel: LocalizedString;
      labBackLabel: LocalizedString;
      labDetailLabel: LocalizedString;
      labGoalLabel: LocalizedString;
      labWorkLabel: LocalizedString;
      labKeyFilesLabel: LocalizedString;
      labLearningLabel: LocalizedString;
      labBoundaryLabel: LocalizedString;
      labNextLabel: LocalizedString;
      contactEyebrow: LocalizedString;
      contactTitle: LocalizedString;
    };
    github: {
      liveApi: LocalizedString;
      loading: LocalizedString;
      fallback: LocalizedString;
      missingDescription: LocalizedString;
      updated: LocalizedString;
    };
    contact: {
      linksTitle: LocalizedString;
      open: LocalizedString;
      todo: LocalizedString;
      copyEmail: LocalizedString;
      emailNotConfigured: LocalizedString;
      emailCopied: LocalizedString;
      directTitle: LocalizedString;
      directDescription: LocalizedString;
      emailDirect: LocalizedString;
      githubDirect: LocalizedString;
      resumeDirect: LocalizedString;
      formNoteTitle: LocalizedString;
      formNoteBody: LocalizedString;
      name: LocalizedString;
      email: LocalizedString;
      message: LocalizedString;
      sendMessage: LocalizedString;
      sending: LocalizedString;
      demoReceived: LocalizedString;
      unavailable: LocalizedString;
    };
    footer: {
      builtWith: LocalizedString;
      lastUpdated: LocalizedString;
    };
    timelineStep: LocalizedString;
  };
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
