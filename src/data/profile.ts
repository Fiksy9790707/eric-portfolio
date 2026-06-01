import type { PortfolioProfile } from "../types/profile";

export const profile: PortfolioProfile = {
  site: {
    title: "Eric / 冯学诚 - Computer Science Student & Applied AI Builder",
    description:
      "Personal portfolio of Eric, a CS undergraduate at HIT Shenzhen focused on Applied AI, Computer Vision, and Local LLM applications.",
    lastUpdated: "2026-06-02",
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
    resumeUrl: "resume.pdf",
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
  currentlyBuilding: [
    {
      title: {
        en: "Portfolio and public writing",
        zh: "作品集与公开表达",
      },
      description: {
        en: "Turning selected projects into readable case studies, clearer repositories, and a portfolio that can be shared without overclaiming.",
        zh: "把已公开项目整理成更清楚的案例、仓库说明和可分享的个人作品集，同时保持表达克制。",
      },
      tags: ["Portfolio", "Case Studies", "Documentation"],
    },
    {
      title: {
        en: "Computer vision prototypes",
        zh: "计算机视觉原型",
      },
      description: {
        en: "Continuing the wafer defect detection direction: small-target detection, demo interface, and a more reproducible local delivery flow.",
        zh: "继续推进晶圆缺陷检测方向：小目标检测、演示界面，以及更容易复现的本地交付流程。",
      },
      tags: ["YOLOv8", "Streamlit", "Industrial AI"],
    },
    {
      title: {
        en: "Local LLM automation",
        zh: "本地大模型自动化",
      },
      description: {
        en: "Exploring local models as low-cost personal automation tools for system diaries, campus workflows, and structured information handling.",
        zh: "探索把本地模型用于低成本个人自动化，包括系统日记、校园信息流和结构化信息整理。",
      },
      tags: ["Ollama", "Local LLM", "Workflow"],
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
      caseStudy: {
        id: "wafer-case-study",
        eyebrow: {
          en: "Case Study",
          zh: "项目案例",
        },
        title: {
          en: "Wafer Defect Detection: from model prototype to local delivery",
          zh: "晶圆缺陷检测：从模型原型到本地交付流程",
        },
        summary: {
          en: "A conservative write-up of an industrial-style computer vision prototype. The project explores how YOLOv8, Streamlit, and cloud training can be connected into a workflow that is easier to demo and deliver on a Windows machine.",
          zh: "这是一个偏工业场景的计算机视觉原型复盘。项目探索如何把 YOLOv8、Streamlit 和云端训练串成一个更容易演示、也更方便在 Windows 本地交付的流程。",
        },
        readLabel: {
          en: "Read case study",
          zh: "阅读案例",
        },
        repositoryLabel: {
          en: "Open repository",
          zh: "打开仓库",
        },
        metrics: [
          {
            label: { en: "Domain", zh: "领域" },
            value: { en: "Industrial vision", zh: "工业视觉" },
          },
          {
            label: { en: "Core model", zh: "核心模型" },
            value: { en: "YOLOv8", zh: "YOLOv8" },
          },
          {
            label: { en: "Interface", zh: "交互界面" },
            value: { en: "Streamlit", zh: "Streamlit" },
          },
          {
            label: { en: "Status", zh: "状态" },
            value: { en: "Prototype / building", zh: "原型 / 构建中" },
          },
        ],
        flow: {
          title: {
            en: "Prototype workflow",
            zh: "原型流程",
          },
          steps: [
            {
              label: { en: "Data", zh: "数据" },
              detail: {
                en: "Prepare defect-style images and labels",
                zh: "整理缺陷图像与标注",
              },
            },
            {
              label: { en: "Train", zh: "训练" },
              detail: {
                en: "Explore YOLOv8 training on Aliyun PAI",
                zh: "在 Aliyun PAI 探索 YOLOv8 训练",
              },
            },
            {
              label: { en: "Evaluate", zh: "评估" },
              detail: {
                en: "Check small-target detection behavior",
                zh: "检查小目标检测表现",
              },
            },
            {
              label: { en: "Interface", zh: "界面" },
              detail: {
                en: "Wrap inference with Streamlit",
                zh: "用 Streamlit 封装推理",
              },
            },
            {
              label: { en: "Deliver", zh: "交付" },
              detail: {
                en: "Keep Windows local demo in mind",
                zh: "面向 Windows 本地演示",
              },
            },
          ],
        },
        sections: [
          {
            title: { en: "Problem", zh: "问题背景" },
            body: {
              en: "Wafer defect inspection is a useful computer vision scenario because the objects can be small, visually subtle, and sensitive to false negatives. For a student prototype, the goal is not to claim production readiness, but to practice a realistic path from detection model to a usable inspection interface.",
              zh: "晶圆缺陷检测是一个很适合练习计算机视觉落地的场景：缺陷目标可能很小、视觉差异不明显，而且漏检风险更敏感。这个学生原型不包装成生产系统，而是用来练习从检测模型到可用检测界面的完整路径。",
            },
            points: [
              {
                en: "Focus on small-target defect detection rather than generic image classification.",
                zh: "关注小目标缺陷检测，而不是泛泛的图像分类。",
              },
              {
                en: "Keep the interface simple enough for demo, testing, and later iteration.",
                zh: "界面保持足够简单，便于演示、测试和后续迭代。",
              },
            ],
          },
          {
            title: { en: "Approach", zh: "实现思路" },
            body: {
              en: "The project uses YOLOv8 as the detection backbone and Streamlit as a lightweight delivery interface. Aliyun PAI is used in the workflow to explore cloud-side training, while the final demo direction emphasizes running and presenting results locally on Windows.",
              zh: "项目使用 YOLOv8 作为检测模型，Streamlit 作为轻量交付界面，并在流程中尝试使用 Aliyun PAI 进行云端训练探索。最终演示方向更强调能够在 Windows 本地运行和展示结果。",
            },
            points: [
              {
                en: "Model layer: train and evaluate a YOLOv8 detector for defect-like targets.",
                zh: "模型层：训练和评估面向缺陷目标的 YOLOv8 检测器。",
              },
              {
                en: "Application layer: wrap inference in a Streamlit interface for image upload and result preview.",
                zh: "应用层：用 Streamlit 封装推理流程，支持图片上传和结果预览。",
              },
              {
                en: "Delivery layer: keep Windows local usage in mind instead of only showing a notebook result.",
                zh: "交付层：考虑 Windows 本地使用，而不是只停留在 notebook 结果展示。",
              },
            ],
          },
          {
            title: { en: "What makes it portfolio-worthy", zh: "为什么适合作品集展示" },
            body: {
              en: "The value of this project is the end-to-end thinking. It connects a model, a UI, and a deployment direction, which is closer to an applied AI workflow than a single training script.",
              zh: "这个项目值得展示的点不是某个夸张指标，而是端到端思路：它把模型、界面和交付方向连接起来，比单个训练脚本更接近真实的应用 AI 工作流。",
            },
            points: [
              {
                en: "Shows applied computer vision interest with a concrete industrial-style scenario.",
                zh: "用具体的工业风格场景展示计算机视觉应用兴趣。",
              },
              {
                en: "Demonstrates awareness of interface and delivery, not only model training.",
                zh: "体现对界面和交付的关注，而不只是训练模型。",
              },
              {
                en: "Leaves room for honest iteration: dataset quality, evaluation, packaging, and documentation.",
                zh: "保留真实迭代空间：数据质量、评估、打包和文档都还能继续完善。",
              },
            ],
          },
          {
            title: { en: "Current limitations", zh: "当前限制" },
            body: {
              en: "The project should still be presented as a prototype. Public information does not include a full benchmark, production deployment evidence, or a verified industrial validation process, so the website avoids claiming those.",
              zh: "这个项目仍应作为原型展示。公开信息里没有完整 benchmark、生产部署证据或工业验证流程，所以网站不会声称这些还没有被公开验证的内容。",
            },
            points: [
              {
                en: "Add clearer dataset notes and evaluation protocol when they are ready to publish.",
                zh: "等可以公开时，补充更清楚的数据说明和评估流程。",
              },
              {
                en: "Add real UI screenshots or result examples to make the case study more tangible.",
                zh: "补充真实界面截图或检测结果样例，让案例更具象。",
              },
              {
                en: "Document the Windows local delivery steps in a reproducible way.",
                zh: "把 Windows 本地交付步骤整理成可复现文档。",
              },
            ],
          },
          {
            title: { en: "Next steps", zh: "下一步" },
            body: {
              en: "The next useful work is to make the public repository more self-explanatory: add screenshots, describe the data assumptions, document how to run the Streamlit demo, and separate prototype claims from future production ideas.",
              zh: "下一步最有价值的是让公开仓库更容易读懂：补截图、说明数据假设、写清楚 Streamlit demo 运行方式，并区分当前原型和未来生产化设想。",
            },
            points: [
              {
                en: "Add a short demo video or GIF.",
                zh: "补一个简短 demo 视频或 GIF。",
              },
              {
                en: "Write a reproducible quickstart.",
                zh: "写一个可复现的快速开始文档。",
              },
              {
                en: "Add a small evaluation table only when the numbers can be verified.",
                zh: "只有在指标可验证时，再加入小型评估表。",
              },
            ],
          },
        ],
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
      caseStudy: {
        id: "silicon-diaries-case-study",
        eyebrow: {
          en: "Case Study",
          zh: "项目案例",
        },
        title: {
          en: "Silicon Diaries: local LLMs as personal automation tools",
          zh: "硅基日记：把本地大模型作为个人自动化工具",
        },
        summary: {
          en: "An experimental local LLM project that turns system monitoring data into first-person diary entries. It is a small but useful exploration of how local models can make personal automation feel more contextual and expressive.",
          zh: "这是一个实验性质的本地大模型项目，把系统监控数据转化成第一人称日记。它规模不大，但很适合探索本地模型如何让个人自动化更有上下文和表达感。",
        },
        readLabel: {
          en: "Read case study",
          zh: "阅读案例",
        },
        repositoryLabel: {
          en: "Open repository",
          zh: "打开仓库",
        },
        metrics: [
          {
            label: { en: "Domain", zh: "领域" },
            value: { en: "Local LLM automation", zh: "本地大模型自动化" },
          },
          {
            label: { en: "Runtime", zh: "运行方式" },
            value: { en: "Local Python", zh: "本地 Python" },
          },
          {
            label: { en: "Monitoring", zh: "监控数据" },
            value: { en: "psutil", zh: "psutil" },
          },
          {
            label: { en: "Status", zh: "状态" },
            value: { en: "Experimental", zh: "实验中" },
          },
        ],
        flow: {
          title: {
            en: "Local automation loop",
            zh: "本地自动化闭环",
          },
          steps: [
            {
              label: { en: "Signals", zh: "信号" },
              detail: {
                en: "Collect CPU, memory, uptime, and status",
                zh: "采集 CPU、内存、运行时间和状态",
              },
            },
            {
              label: { en: "Structure", zh: "结构化" },
              detail: {
                en: "Format system state into a stable prompt",
                zh: "把系统状态整理成稳定 prompt",
              },
            },
            {
              label: { en: "Generate", zh: "生成" },
              detail: {
                en: "Use a local LLM through Ollama",
                zh: "通过 Ollama 调用本地模型",
              },
            },
            {
              label: { en: "Write", zh: "写作" },
              detail: {
                en: "Produce first-person diary entries",
                zh: "生成第一人称日记",
              },
            },
            {
              label: { en: "Archive", zh: "归档" },
              detail: {
                en: "Store entries for later review",
                zh: "归档文本以便回看",
              },
            },
          ],
        },
        sections: [
          {
            title: { en: "Problem", zh: "问题背景" },
            body: {
              en: "Most system monitoring scripts are useful but dry: they report CPU, memory, uptime, and logs without context. Silicon Diaries asks a playful but practical question: can a local LLM turn those signals into a readable daily summary without sending personal system data to a cloud model?",
              zh: "大多数系统监控脚本有用但枯燥：它们报告 CPU、内存、运行时间和日志，却缺少上下文。硅基日记提出了一个有趣但实用的问题：能否用本地大模型把这些信号变成可读的每日总结，同时不把个人系统数据发到云端模型？",
            },
            points: [
              {
                en: "Use local system state as the input signal instead of manually written prompts.",
                zh: "用本地系统状态作为输入信号，而不是只靠手写 prompt。",
              },
              {
                en: "Keep data local by using Ollama and local model inference.",
                zh: "通过 Ollama 和本地模型推理，让数据尽量留在本机。",
              },
            ],
          },
          {
            title: { en: "Approach", zh: "实现思路" },
            body: {
              en: "The project combines Python monitoring utilities with local LLM generation. psutil collects basic system information, Python Logging keeps the process traceable, and an Ollama-served model turns the structured state into a first-person diary-style entry.",
              zh: "项目把 Python 系统监控工具和本地大模型生成结合起来。psutil 收集基础系统信息，Python Logging 让运行过程可追踪，再由 Ollama 托管的本地模型把结构化状态转换成第一人称日记风格文本。",
            },
            points: [
              {
                en: "Collect lightweight signals such as CPU, memory, uptime, and runtime status.",
                zh: "收集 CPU、内存、运行时间和运行状态等轻量信号。",
              },
              {
                en: "Format the signals into a prompt that the local model can interpret consistently.",
                zh: "把信号整理成模型更容易稳定理解的 prompt。",
              },
              {
                en: "Archive generated diary entries so the system has a history rather than a one-off response.",
                zh: "归档生成的日记，让系统形成历史记录，而不是一次性回答。",
              },
            ],
          },
          {
            title: { en: "What makes it portfolio-worthy", zh: "为什么适合作品集展示" },
            body: {
              en: "Silicon Diaries is valuable because it shows applied thinking around local LLMs: privacy, automation, structured inputs, and a small product idea. It is not just a chatbot wrapper; it turns machine state into a user-facing artifact.",
              zh: "硅基日记的价值在于它展示了围绕本地大模型的应用思考：隐私、自动化、结构化输入和小产品想法。它不只是聊天机器人套壳，而是把机器状态转化成面向用户的产物。",
            },
            points: [
              {
                en: "Connects system monitoring with language generation.",
                zh: "把系统监控和语言生成连接起来。",
              },
              {
                en: "Uses local inference, which fits privacy-sensitive personal automation.",
                zh: "使用本地推理，适合对隐私敏感的个人自动化场景。",
              },
              {
                en: "Shows personality and product sense while staying technically modest.",
                zh: "在技术表达克制的前提下，体现一点产品感和个性。",
              },
            ],
          },
          {
            title: { en: "Current limitations", zh: "当前限制" },
            body: {
              en: "The project is still experimental. The generated writing quality depends on prompt design and local model behavior, and the current public version should be treated as a prototype rather than a stable productivity tool.",
              zh: "这个项目仍然是实验性质。生成质量依赖 prompt 设计和本地模型表现，当前公开版本应被视为原型，而不是稳定的生产力工具。",
            },
            points: [
              {
                en: "Add clearer setup instructions for Ollama model selection and runtime requirements.",
                zh: "补充更清楚的 Ollama 模型选择和运行环境说明。",
              },
              {
                en: "Add example outputs with sensitive information removed.",
                zh: "补充脱敏后的生成样例。",
              },
              {
                en: "Separate monitoring logic, prompt construction, and storage into cleaner modules.",
                zh: "把监控逻辑、prompt 构造和存储归档拆成更清晰的模块。",
              },
            ],
          },
          {
            title: { en: "Next steps", zh: "下一步" },
            body: {
              en: "The next step is to make the prototype easier to run and easier to judge: provide sample diaries, document the local setup, and define what a useful diary entry should include.",
              zh: "下一步是让这个原型更容易运行、也更容易判断效果：提供样例日记、整理本地部署说明，并定义一篇有用的系统日记应该包含什么。",
            },
            points: [
              {
                en: "Add a README quickstart and model recommendations.",
                zh: "增加 README 快速开始和模型推荐。",
              },
              {
                en: "Add a small gallery of generated diary examples.",
                zh: "增加一小组生成日记示例。",
              },
              {
                en: "Explore scheduled runs so entries can be generated automatically.",
                zh: "探索定时运行，让日记可以自动生成。",
              },
            ],
          },
        ],
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
      value: "Resume PDF",
      href: "resume.pdf",
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
      nowEyebrow: { en: "Now", zh: "现在" },
      nowTitle: {
        en: "Currently building toward a more complete applied AI portfolio.",
        zh: "正在把应用 AI 方向整理成更完整、可展示的作品集。",
      },
      nowDescription: {
        en: "A short, current snapshot. These are active directions, not finished claims.",
        zh: "这里记录当前正在推进的方向，不把进行中的事情包装成已经完成的成绩。",
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
      directTitle: { en: "Direct contact", zh: "直接联系" },
      directDescription: {
        en: "The cleanest way to reach me right now is email or GitHub. The resume link points to a simple public PDF generated from the same verified portfolio content.",
        zh: "目前最直接的联系渠道是邮箱或 GitHub。简历链接指向一份基于当前公开作品集内容生成的 PDF。",
      },
      emailDirect: { en: "Email me", zh: "发送邮件" },
      githubDirect: { en: "Open GitHub", zh: "打开 GitHub" },
      resumeDirect: { en: "Open resume", zh: "打开简历" },
      formNoteTitle: { en: "No fake inbox", zh: "不做假的收件箱" },
      formNoteBody: {
        en: "This first version does not store form messages or send email in the background. That keeps the site free, private, and easy to deploy. A real mail provider such as Resend or SendGrid can be connected later from the existing API route when needed.",
        zh: "第一版不会在后台保存表单消息，也不会假装已经发送邮件。这样网站保持免费、隐私友好，也更容易部署。后续如果需要，可以在现有 API route 上接入 Resend、SendGrid 等真实邮件服务。",
      },
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
