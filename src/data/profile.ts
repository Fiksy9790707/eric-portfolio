import type { PortfolioProfile } from "../types/profile";

export const profile: PortfolioProfile = {
  site: {
    title: "Eric / 冯学诚 - Computer Science Student & Applied AI Builder",
    description:
      "Personal portfolio of Eric, a CS undergraduate at HIT Shenzhen focused on Applied AI, Computer Vision, and Local LLM applications.",
    lastUpdated: "2026-05-31",
    productionUrl: "https://eric-portfolio-weld.vercel.app/",
    ogImage: "https://eric-portfolio-weld.vercel.app/og-image.png",
  },
  identity: {
    name: "Eric",
    chineseName: "冯学诚",
    role: {
      en: "Computer Science Student / Applied AI Builder",
      zh: "计算机科学本科生 / 应用 AI 构建者",
    },
    tagline: {
      en: "I build end-to-end AI applications with Computer Vision and Local LLMs.",
      zh: "我关注用计算机视觉和本地大模型构建端到端 AI 应用。",
    },
    school: {
      en: "Harbin Institute of Technology, Shenzhen",
      zh: "哈尔滨工业大学（深圳）",
    },
    focus: [
      { en: "Applied AI", zh: "应用 AI" },
      { en: "Computer Vision", zh: "计算机视觉" },
      { en: "Local LLM", zh: "本地大模型" },
      { en: "End-to-end AI applications", zh: "端到端 AI 应用" },
    ],
    githubUsername: "Fiksy9790707",
    githubUrl: "https://github.com/Fiksy9790707",
    email: "14775369722@163.com",
    resumeUrl: null,
    blogUrl: null,
  },
  about: [
    {
      en: "I am a Computer Science undergraduate at Harbin Institute of Technology, Shenzhen.",
      zh: "我是哈尔滨工业大学（深圳）计算机科学与技术本科生。",
    },
    {
      en: "My current work is centered on Applied AI, Computer Vision, and Local LLM applications.",
      zh: "我目前关注应用 AI、计算机视觉和本地大模型应用。",
    },
    {
      en: "I am less interested in only training a model in isolation, and more interested in turning AI into usable workflows: data, model, interface, deployment, and local delivery.",
      zh: "相比只训练一个孤立模型，我更关注把 AI 做成可用流程：数据、模型、界面、部署和本地交付。",
    },
    {
      en: "This site keeps the language intentionally simple. It reflects what I am building and learning now, without overstating experience that is not yet public.",
      zh: "这个网站会保持真实、简洁、克制，只展示我正在学习和构建的内容，不包装成还没有公开证据的经历。",
    },
  ],
  projects: [
    {
      id: "wafer-defect-detection",
      name: {
        en: "Wafer Defect Detection",
        zh: "智能晶圆缺陷检测系统",
      },
      subtitle: {
        en: "Industrial Defect Detection",
        zh: "工业缺陷检测",
      },
      type: {
        en: "Industrial Defect Detection",
        zh: "工业缺陷检测",
      },
      status: {
        en: "Prototype / Building",
        zh: "原型 / 构建中",
      },
      description: {
        en: "An AI vision project for industrial scenarios, focused on small-target defect detection and the workflow from cloud training to Windows local delivery.",
        zh: "面向工业场景的 AI 视觉检测项目，关注小目标缺陷检测，并尝试完成从云端训练到 Windows 本地交付的流程。",
      },
      stack: ["YOLOv8", "Streamlit", "Aliyun PAI"],
      categories: ["AI / ML", "Computer Vision"],
      githubUrl: "https://github.com/Fiksy9790707/Wafer-Defect-Detection-System",
      linkLabel: {
        en: "View repository",
        zh: "查看仓库",
      },
    },
    {
      id: "silicon-diaries",
      name: {
        en: "Silicon Diaries",
        zh: "硅基日记",
      },
      subtitle: {
        en: "AI-Powered System Diary",
        zh: "AI 驱动的系统日记",
      },
      type: {
        en: "AI-Powered System Diary",
        zh: "AI 系统日记",
      },
      status: {
        en: "Experimental",
        zh: "实验中",
      },
      description: {
        en: "A local LLM-powered system diary project that monitors CPU, memory, uptime, and other system states, then generates automated first-person diary entries.",
        zh: "本地大模型驱动的系统日记项目，监控 CPU、内存、运行时间等系统状态，并用第一人称生成自动化日记。",
      },
      stack: ["Ollama", "Qwen/Llama", "psutil", "Python Logging"],
      categories: ["AI / ML", "Local LLM"],
      githubUrl: "https://github.com/Fiksy9790707/Silicon-Diaries",
      linkLabel: {
        en: "View repository",
        zh: "查看仓库",
      },
    },
    {
      id: "ai-campus-assistant",
      name: {
        en: "AI Campus Assistant",
        zh: "AI 校园助手",
      },
      subtitle: {
        en: "Campus AI Workflow",
        zh: "校园 AI 工作流",
      },
      type: {
        en: "Campus AI Workflow",
        zh: "校园 AI 工作流",
      },
      status: {
        en: "Building",
        zh: "构建中",
      },
      description: {
        en: "A prototype assistant for organizing campus notices, deadlines, courses, and activity information. The public repository is still TODO.",
        zh: "面向校园通知、DDL、课程和活动信息整理的 AI 助手原型。公开仓库尚未确认，第一版先保留为 TODO。",
      },
      stack: ["LLM", "Workflow", "Knowledge Base", "Structured Output"],
      categories: ["AI / ML", "Local LLM"],
      githubUrl: null,
      linkLabel: {
        en: "TODO: add repository",
        zh: "TODO：补充仓库",
      },
    },
  ],
  skills: [
    {
      title: { en: "Languages", zh: "编程语言" },
      tone: { en: "Learning", zh: "学习中" },
      items: ["Python", "C++", "TypeScript", "JavaScript"],
    },
    {
      title: { en: "AI / ML", zh: "AI / 机器学习" },
      tone: { en: "Building", zh: "构建中" },
      items: ["PyTorch", "YOLO", "OpenCV", "Local LLM", "Ollama"],
    },
    {
      title: { en: "Application", zh: "应用构建" },
      tone: { en: "Building", zh: "构建中" },
      items: ["Streamlit", "Python Logging", "psutil", "API Integration"],
    },
    {
      title: { en: "Tools", zh: "工具" },
      tone: { en: "Exploring", zh: "探索中" },
      items: ["Linux", "Git", "Vite", "Vercel", "Aliyun PAI"],
    },
  ],
  timeline: [
    {
      title: { en: "Learning Computer Science foundations", zh: "学习计算机基础" },
      description: {
        en: "Coursework, programming practice, and systems thinking as the base layer.",
        zh: "以课程学习、编程练习和系统思维作为基础。",
      },
    },
    {
      title: { en: "Exploring Applied AI", zh: "探索应用 AI" },
      description: {
        en: "Moving from model demos toward complete workflows and usable interfaces.",
        zh: "从模型 demo 逐步走向完整工作流和可用界面。",
      },
    },
    {
      title: { en: "Building Computer Vision prototypes", zh: "构建计算机视觉原型" },
      description: {
        en: "Testing YOLO-based detection ideas in industrial-style scenarios.",
        zh: "在偏工业场景中测试基于 YOLO 的检测原型。",
      },
    },
    {
      title: { en: "Experimenting with Local LLM applications", zh: "实验本地大模型应用" },
      description: {
        en: "Using local models for automation, writing, system monitoring, and knowledge workflows.",
        zh: "尝试将本地模型用于自动化、写作、系统监控和知识工作流。",
      },
    },
    {
      title: { en: "Preparing public portfolio", zh: "整理公开作品集" },
      description: {
        en: "Turning selected work into readable, deployable, and maintainable public projects.",
        zh: "把部分项目整理成可阅读、可部署、可维护的公开展示。",
      },
    },
  ],
  blogPosts: [
    {
      title: { en: "Building an AI Campus Assistant", zh: "构建 AI 校园助手" },
      date: "TODO",
      tags: ["LLM", "Workflow", "Campus"],
      summary: {
        en: "A design note on turning scattered campus information into structured reminders and actionable workflows.",
        zh: "关于如何把分散的校园信息整理成结构化提醒和可执行工作流的设计笔记。",
      },
    },
    {
      title: { en: "Notes on YOLO-based Defect Detection", zh: "YOLO 缺陷检测笔记" },
      date: "TODO",
      tags: ["YOLO", "Computer Vision", "Industrial AI"],
      summary: {
        en: "Practical observations from building a small-target detection prototype for industrial defect scenarios.",
        zh: "围绕工业缺陷场景中的小目标检测原型，整理一些实践观察。",
      },
    },
    {
      title: { en: "Local LLMs as Personal Automation Tools", zh: "把本地大模型作为个人自动化工具" },
      date: "TODO",
      tags: ["Local LLM", "Ollama", "Automation"],
      summary: {
        en: "A short exploration of when local models are useful for private, low-cost personal tooling.",
        zh: "简要记录本地模型适合做哪些私密、低成本的个人工具。",
      },
    },
    {
      title: { en: "From Coursework to Real Projects", zh: "从课程作业到真实项目" },
      date: "TODO",
      tags: ["Learning", "Portfolio", "Engineering"],
      summary: {
        en: "Notes on converting course exercises into small public projects with clearer product thinking.",
        zh: "记录如何把课程练习逐步整理成更有产品感的小型公开项目。",
      },
    },
  ],
  contactLinks: [
    {
      label: { en: "GitHub", zh: "GitHub" },
      value: "Fiksy9790707",
      href: "https://github.com/Fiksy9790707",
    },
    {
      label: { en: "Email", zh: "邮箱" },
      value: "14775369722@163.com",
      href: "mailto:14775369722@163.com",
    },
    {
      label: { en: "Resume", zh: "简历" },
      value: "TODO",
      href: null,
    },
    {
      label: { en: "Blog", zh: "博客" },
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
  ui: {
    nav: {
      about: { en: "About", zh: "关于" },
      projects: { en: "Projects", zh: "项目" },
      github: { en: "GitHub", zh: "GitHub" },
      skills: { en: "Skills", zh: "技能" },
      contact: { en: "Contact", zh: "联系" },
    },
    languageToggle: { en: "中文", zh: "EN" },
    hero: {
      eyebrow: { en: "Portfolio / Applied AI", zh: "作品集 / 应用 AI" },
      viewProjects: { en: "View Projects", zh: "查看项目" },
      githubProfile: { en: "GitHub Profile", zh: "GitHub 主页" },
      currentFocus: { en: "Current Focus", zh: "当前关注" },
      focusTitle: { en: "End-to-end AI prototypes", zh: "端到端 AI 原型" },
      building: { en: "Building", zh: "构建中" },
    },
    sections: {
      aboutEyebrow: { en: "About Me", zh: "关于我" },
      aboutTitle: {
        en: "A CS undergraduate building practical AI workflows.",
        zh: "一个正在构建实用 AI 工作流的计算机本科生。",
      },
      baseLabel: { en: "Base", zh: "基础身份" },
      schoolLine: {
        en: "Computer Science and Technology undergraduate.",
        zh: "计算机科学与技术本科生。",
      },
      projectsEyebrow: { en: "Projects", zh: "项目" },
      projectsTitle: {
        en: "Selected projects with verifiable public context.",
        zh: "有公开信息支撑的精选项目。",
      },
      githubEyebrow: { en: "Public GitHub", zh: "公开 GitHub" },
      githubTitle: { en: "Live public repository snapshot.", zh: "公开仓库动态快照。" },
      githubDescription: {
        en: "This section reads public GitHub data without a token. If GitHub is unavailable, it falls back to bundled public repository metadata.",
        zh: "这个区域不使用 token，只读取公开 GitHub 数据。如果 GitHub 不可用，会自动使用本地公开仓库备份数据。",
      },
      skillsEyebrow: { en: "Skills", zh: "技能" },
      skillsTitle: {
        en: "Tools I am learning, building with, and exploring.",
        zh: "我正在学习、使用和探索的工具。",
      },
      timelineEyebrow: { en: "Timeline", zh: "时间线" },
      timelineTitle: {
        en: "A conservative snapshot of the current path.",
        zh: "对当前路径的保守记录。",
      },
      blogEyebrow: { en: "Blog Preview", zh: "文章预览" },
      blogTitle: { en: "Writing directions to fill in later.", zh: "后续可以展开的写作方向。" },
      contactEyebrow: { en: "Contact", zh: "联系" },
      contactTitle: {
        en: "Open to feedback, collaboration, and practical project ideas.",
        zh: "欢迎交流反馈、协作机会和具体项目想法。",
      },
    },
    github: {
      liveApi: { en: "Live API", zh: "实时 API" },
      loading: { en: "Loading", zh: "加载中" },
      fallback: { en: "Fallback", zh: "备用数据" },
      missingDescription: {
        en: "TODO: add a concise public repository description.",
        zh: "TODO：补充简洁的公开仓库描述。",
      },
      updated: { en: "Updated", zh: "更新于" },
    },
    contact: {
      linksTitle: { en: "Links", zh: "链接" },
      open: { en: "Open", zh: "打开" },
      todo: { en: "TODO", zh: "待补充" },
      copyEmail: { en: "Copy email", zh: "复制邮箱" },
      emailNotConfigured: { en: "Email not configured yet.", zh: "邮箱还没有配置。" },
      emailCopied: { en: "Email copied.", zh: "邮箱已复制。" },
      name: { en: "Name", zh: "姓名" },
      email: { en: "Email", zh: "邮箱" },
      message: { en: "Message", zh: "留言" },
      sendMessage: { en: "Send message", zh: "发送留言" },
      sending: { en: "Sending", zh: "发送中" },
      demoReceived: {
        en: "Message received. This first version is a demo placeholder and does not send email yet.",
        zh: "留言已收到。第一版目前是演示占位，还不会真正发送邮件。",
      },
      unavailable: {
        en: "Contact API is unavailable. Please try again later.",
        zh: "联系接口暂时不可用，请稍后再试。",
      },
    },
    footer: {
      builtWith: {
        en: "Built with React, Vite, Tailwind CSS. Deployed on Vercel.",
        zh: "使用 React、Vite、Tailwind CSS 构建，部署在 Vercel。",
      },
      lastUpdated: { en: "Last updated", zh: "最后更新" },
    },
    timelineStep: { en: "Step", zh: "阶段" },
  },
};
