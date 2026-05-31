import type { PortfolioProfile } from "../types/profile";

export const profile: PortfolioProfile = {
  site: {
    title: "Eric / 冯学诚 - Computer Science Student & Applied AI Builder",
    description:
      "Personal portfolio of Eric, a CS undergraduate at HIT Shenzhen focused on Applied AI, Computer Vision, and Local LLM applications.",
    lastUpdated: "2026-05-31",
    productionUrl: "TODO: add production URL after Vercel deployment",
    ogImage: "TODO: add production Open Graph image",
  },
  identity: {
    name: "Eric",
    chineseName: "冯学诚",
    role: "Computer Science Student / Applied AI Builder",
    tagline: "I build end-to-end AI applications with Computer Vision and Local LLMs.",
    school: "Harbin Institute of Technology, Shenzhen",
    focus: ["Applied AI", "Computer Vision", "Local LLM", "End-to-end AI applications"],
    githubUsername: "Fiksy9790707",
    githubUrl: "https://github.com/Fiksy9790707",
    email: "TODO",
    resumeUrl: null,
    blogUrl: null,
  },
  about: [
    "I am a Computer Science undergraduate at Harbin Institute of Technology, Shenzhen.",
    "My current work is centered on Applied AI, Computer Vision, and Local LLM applications.",
    "I am less interested in only training a model in isolation, and more interested in turning AI into usable workflows: data, model, interface, deployment, and local delivery.",
    "This site keeps the language intentionally simple. It reflects what I am building and learning now, without overstating experience that is not yet public.",
  ],
  projects: [
    {
      id: "wafer-defect-detection",
      name: "智能晶圆缺陷检测系统 / Wafer Defect Detection",
      subtitle: "Industrial Defect Detection",
      type: "Industrial Defect Detection",
      status: "Prototype / Building",
      description:
        "面向工业场景的 AI 视觉检测项目，关注小目标缺陷检测，并尝试完成从云端训练到 Windows 本地交付的流程。",
      stack: ["YOLOv8", "Streamlit", "Aliyun PAI"],
      categories: ["AI / ML", "Computer Vision"],
      githubUrl: "https://github.com/Fiksy9790707/Wafer-Defect-Detection-System",
      linkLabel: "View repository",
    },
    {
      id: "silicon-diaries",
      name: "硅基日记 / Silicon Diaries",
      subtitle: "AI-Powered System Diary",
      type: "AI-Powered System Diary",
      status: "Experimental",
      description:
        "本地大模型驱动的系统日记项目，监控 CPU、内存、运行时间等系统状态，并用第一人称生成自动化日记。",
      stack: ["Ollama", "Qwen/Llama", "psutil", "Python Logging"],
      categories: ["AI / ML", "Local LLM"],
      githubUrl: "https://github.com/Fiksy9790707/Silicon-Diaries",
      linkLabel: "View repository",
    },
    {
      id: "ai-campus-assistant",
      name: "AI Campus Assistant",
      subtitle: "Campus AI Workflow",
      type: "Campus AI Workflow",
      status: "Building",
      description:
        "面向校园通知、DDL、课程和活动信息整理的 AI 助手原型。公开仓库尚未确认，第一版先保留为 TODO。",
      stack: ["LLM", "Workflow", "Knowledge Base", "Structured Output"],
      categories: ["AI / ML", "Local LLM"],
      githubUrl: null,
      linkLabel: "TODO: add repository",
    },
  ],
  skills: [
    {
      title: "Languages",
      tone: "Learning",
      items: ["Python", "C++", "TypeScript", "JavaScript"],
    },
    {
      title: "AI / ML",
      tone: "Building",
      items: ["PyTorch", "YOLO", "OpenCV", "Local LLM", "Ollama"],
    },
    {
      title: "Application",
      tone: "Building",
      items: ["Streamlit", "Python Logging", "psutil", "API Integration"],
    },
    {
      title: "Tools",
      tone: "Exploring",
      items: ["Linux", "Git", "Vite", "Vercel", "Aliyun PAI"],
    },
  ],
  timeline: [
    {
      title: "Learning Computer Science foundations",
      description: "Coursework, programming practice, and systems thinking as the base layer.",
    },
    {
      title: "Exploring Applied AI",
      description: "Moving from model demos toward complete workflows and usable interfaces.",
    },
    {
      title: "Building Computer Vision prototypes",
      description: "Testing YOLO-based detection ideas in industrial-style scenarios.",
    },
    {
      title: "Experimenting with Local LLM applications",
      description: "Using local models for automation, writing, system monitoring, and knowledge workflows.",
    },
    {
      title: "Preparing public portfolio",
      description: "Turning selected work into readable, deployable, and maintainable public projects.",
    },
  ],
  blogPosts: [
    {
      title: "Building an AI Campus Assistant",
      date: "TODO",
      tags: ["LLM", "Workflow", "Campus"],
      summary:
        "A design note on turning scattered campus information into structured reminders and actionable workflows.",
    },
    {
      title: "Notes on YOLO-based Defect Detection",
      date: "TODO",
      tags: ["YOLO", "Computer Vision", "Industrial AI"],
      summary:
        "Practical observations from building a small-target detection prototype for industrial defect scenarios.",
    },
    {
      title: "Local LLMs as Personal Automation Tools",
      date: "TODO",
      tags: ["Local LLM", "Ollama", "Automation"],
      summary:
        "A short exploration of when local models are useful for private, low-cost personal tooling.",
    },
    {
      title: "From Coursework to Real Projects",
      date: "TODO",
      tags: ["Learning", "Portfolio", "Engineering"],
      summary:
        "Notes on converting course exercises into small public projects with clearer product thinking.",
    },
  ],
  contactLinks: [
    {
      label: "GitHub",
      value: "Fiksy9790707",
      href: "https://github.com/Fiksy9790707",
    },
    {
      label: "Email",
      value: "TODO",
      href: null,
    },
    {
      label: "Resume",
      value: "TODO",
      href: null,
    },
    {
      label: "Blog",
      value: "TODO",
      href: null,
    },
  ],
  github: {
    username: "Fiksy9790707",
    profileUrl: "https://github.com/Fiksy9790707",
    avatarUrl: "https://avatars.githubusercontent.com/u/219989682?v=4",
    repositories: [
      {
        name: "Wafer-Defect-Detection-System",
        url: "https://github.com/Fiksy9790707/Wafer-Defect-Detection-System",
        description:
          "A generic industrial defect detection system based on YOLOv8 and Streamlit. (Projects under NDA)",
        language: null,
        stars: 2,
        forks: 0,
        updatedAt: "2026-05-13T14:07:13Z",
        topics: ["computer-vision", "python", "yolov8"],
        isFork: false,
      },
      {
        name: "family-health-ai-agent",
        url: "https://github.com/Fiksy9790707/family-health-ai-agent",
        description: null,
        language: "Python",
        stars: 0,
        forks: 0,
        updatedAt: "2026-03-27T17:21:16Z",
        topics: [],
        isFork: false,
      },
      {
        name: "Particle-Packing-Simulation",
        url: "https://github.com/Fiksy9790707/Particle-Packing-Simulation",
        description: null,
        language: "Python",
        stars: 2,
        forks: 0,
        updatedAt: "2026-02-09T02:27:01Z",
        topics: [],
        isFork: false,
      },
      {
        name: "Fiksy9790707-python-learning",
        url: "https://github.com/Fiksy9790707/Fiksy9790707-python-learning",
        description: null,
        language: "Python",
        stars: 0,
        forks: 0,
        updatedAt: "2025-11-27T16:47:44Z",
        topics: [],
        isFork: false,
      },
      {
        name: "Silicon-Diaries",
        url: "https://github.com/Fiksy9790707/Silicon-Diaries",
        description: "一个拥有自我意识、每天写日记吐槽主人的 Python 本地程序。",
        language: "Python",
        stars: 0,
        forks: 0,
        updatedAt: "2025-11-24T16:09:13Z",
        topics: [],
        isFork: false,
      },
      {
        name: "Second-Brain-Local",
        url: "https://github.com/Fiksy9790707/Second-Brain-Local",
        description: "A 100% privacy-safe, local RAG knowledge base using Ollama & ChromaDB.",
        language: null,
        stars: 0,
        forks: 0,
        updatedAt: "2025-11-23T18:07:42Z",
        topics: [],
        isFork: false,
      },
    ],
  },
};
