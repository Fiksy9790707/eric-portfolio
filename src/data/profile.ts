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
        evidence: [
          {
            label: { en: "Public repository", zh: "公开仓库" },
            status: { en: "Available", zh: "已公开" },
            description: {
              en: "The portfolio links to the public GitHub repository and keeps the project framed as a prototype.",
              zh: "作品集链接到公开 GitHub 仓库，并把项目明确表述为原型阶段。",
            },
            href: "https://github.com/Fiksy9790707/Wafer-Defect-Detection-System",
          },
          {
            label: { en: "Interface screenshot", zh: "界面截图" },
            status: { en: "Available", zh: "已公开" },
            description: {
              en: "A Streamlit-style interface screenshot is shown as visual evidence of the intended upload, detection, and export workflow.",
              zh: "页面展示了 Streamlit 风格界面截图，用来说明上传、检测和导出流程。",
            },
          },
          {
            label: { en: "Architecture visual", zh: "架构图" },
            status: { en: "Available", zh: "已公开" },
            description: {
              en: "The architecture image supports the cloud-training-to-local-demo narrative, without claiming production validation.",
              zh: "架构图用于支撑从云端训练到本地演示的流程说明，不声称已经完成生产级验证。",
            },
          },
          {
            label: { en: "Benchmark and dataset notes", zh: "指标与数据说明" },
            status: { en: "TODO", zh: "待补充" },
            description: {
              en: "Detailed public benchmark numbers and dataset notes are intentionally left as TODO until they can be verified and published cleanly.",
              zh: "公开 benchmark 和数据集说明暂时保留为 TODO，等指标可验证、内容可公开后再补充。",
            },
          },
          {
            label: { en: "NDA boundary", zh: "保密边界" },
            status: { en: "Explicit", zh: "已说明" },
            description: {
              en: "Private industrial context is not disclosed. The public page only uses sanitized repository material and portfolio-level explanation.",
              zh: "不披露私有工业背景，只使用脱敏后的公开仓库素材和作品集层面的说明。",
            },
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
        media: [
          {
            src: "project-media/wafer-ui-demo.png",
            alt: {
              en: "Smart Chip Detector Streamlit interface with defect boxes on a wafer image",
              zh: "Smart Chip Detector 的 Streamlit 界面，晶圆图像上显示缺陷检测框",
            },
            caption: {
              en: "Public repository screenshot of the Streamlit-style inspection interface. It shows the intended interaction flow: upload image, tune detection parameters, inspect boxes, and export CSV.",
              zh: "来自公开仓库的界面截图，展示上传图像、调节检测参数、查看检测框和导出 CSV 的交互流程。",
            },
            kind: { en: "Repository screenshot", zh: "仓库截图" },
          },
          {
            src: "project-media/wafer-architecture.png",
            alt: {
              en: "Architecture diagram for cloud training, YOLO algorithm, and inspection interface",
              zh: "云端训练、YOLO 算法和检测界面的架构图",
            },
            caption: {
              en: "Public architecture visual from the project repository, included here as supporting context rather than a performance claim.",
              zh: "来自项目公开仓库的架构图，用于说明系统上下文，不作为性能指标声明。",
            },
            kind: { en: "Architecture visual", zh: "架构图" },
          },
          {
            src: "project-media/wafer-inspection.png",
            alt: {
              en: "Wafer inspection visual asset from the public repository",
              zh: "公开仓库中的晶圆检测视觉素材",
            },
            caption: {
              en: "Additional public visual asset from the repository. It gives visitors a concrete sense of the inspection domain while respecting the NDA boundary.",
              zh: "来自仓库的补充视觉素材，在不越过保密边界的前提下，让访客更直观理解检测场景。",
            },
            kind: { en: "Project visual", zh: "项目视觉" },
          },
        ],
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
        evidence: [
          {
            label: { en: "Public repository", zh: "公开仓库" },
            status: { en: "Available", zh: "已公开" },
            description: {
              en: "The repository gives visitors a public entry point for the local LLM system diary idea.",
              zh: "公开仓库为访客提供了了解本地大模型系统日记想法的入口。",
            },
            href: "https://github.com/Fiksy9790707/Silicon-Diaries",
          },
          {
            label: { en: "Case study write-up", zh: "案例复盘" },
            status: { en: "Available", zh: "已公开" },
            description: {
              en: "The portfolio describes the monitoring, prompting, generation, and storage loop in a conservative way.",
              zh: "作品集以克制方式说明了监控、prompt、生成和存储闭环。",
            },
          },
          {
            label: { en: "Runtime ingredients", zh: "运行要素" },
            status: { en: "Documented", zh: "已说明" },
            description: {
              en: "The stack is stated as local Python, psutil, logging, Ollama, and Qwen/Llama-style local models.",
              zh: "技术栈明确为本地 Python、psutil、logging、Ollama 和 Qwen/Llama 类本地模型。",
            },
          },
          {
            label: { en: "Demo screenshots or GIF", zh: "演示截图或 GIF" },
            status: { en: "TODO", zh: "待补充" },
            description: {
              en: "A sanitized runtime screenshot or GIF would make this case study more concrete once the output examples are safe to publish.",
              zh: "等输出样例适合公开后，可以补一张脱敏运行截图或 GIF，让案例更具体。",
            },
          },
          {
            label: { en: "Privacy boundary", zh: "隐私边界" },
            status: { en: "Explicit", zh: "已说明" },
            description: {
              en: "The page avoids sharing personal diary content and focuses on the system workflow instead.",
              zh: "页面避免公开个人日记内容，重点展示系统工作流。",
            },
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
        media: [
          {
            src: "project-media/silicon-diaries-cover.jpg",
            alt: {
              en: "Silicon Diaries public cover image from the repository",
              zh: "Silicon Diaries 公开仓库中的封面图",
            },
            caption: {
              en: "Public repository cover image for Silicon Diaries. This is a project visual, not a runtime UI screenshot.",
              zh: "Silicon Diaries 公开仓库中的项目封面图。它是项目视觉素材，不是运行界面截图。",
            },
            kind: { en: "Repository visual", zh: "仓库视觉" },
          },
          {
            src: "project-media/silicon-angry.jpg",
            alt: {
              en: "Silicon Diaries public character image from the repository",
              zh: "Silicon Diaries 公开仓库中的角色视觉图",
            },
            caption: {
              en: "A second public visual asset from the repository. It helps communicate the personality of the local diary idea while keeping technical claims modest.",
              zh: "来自公开仓库的第二张视觉素材，用来表达本地系统日记项目的产品气质，同时保持技术表述克制。",
            },
            kind: { en: "Project visual", zh: "项目视觉" },
          },
        ],
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
  labExperiments: [
    {
      id: "machine-learning-labs",
      title: { en: "Machine Learning Lab Notes", zh: "机器学习实验记录" },
      course: { en: "Machine Learning", zh: "机器学习" },
      status: { en: "Course lab / learning evidence", zh: "课程实验 / 学习证据" },
      summary: {
        en: "Notebook-based experiments around classical ML examples and PyTorch MNIST practice. These are learning artifacts, not standalone products.",
        zh: "围绕传统机器学习样例和 PyTorch MNIST 练习的 notebook 实验。这些是学习过程证据，不包装成独立产品。",
      },
      stack: ["Python", "Jupyter", "scikit-learn", "PyTorch", "MNIST"],
      sourcePath: "HIT_S2/Machine_Learning",
      evidence: [
        {
          en: "lab_1 contains bank/student sklearn examples and framework notebooks.",
          zh: "lab_1 包含 bank/student sklearn 示例和实验框架 notebook。",
        },
        {
          en: "lab_2 includes a PyTorch MNIST experiment notebook.",
          zh: "lab_2 包含 PyTorch MNIST 实验 notebook。",
        },
        {
          en: "lab_3 keeps experiment notebooks and generated figures/results.",
          zh: "lab_3 保留实验 notebook 以及生成的图表和结果文件。",
        },
      ],
      detail: {
        goal: {
          en: "Use small notebook experiments to practice the path from dataset preparation to model training, evaluation, and result interpretation.",
          zh: "通过小型 notebook 实验练习从数据准备、模型训练、评估到结果解释的完整路径。",
        },
        work: [
          {
            en: "Ran framework-style lab notebooks instead of only reading theory.",
            zh: "实际运行实验框架 notebook，而不是只停留在理论阅读。",
          },
          {
            en: "Practiced classical ML workflows with sklearn examples and a PyTorch MNIST exercise.",
            zh: "通过 sklearn 示例和 PyTorch MNIST 练习熟悉传统机器学习与深度学习流程。",
          },
          {
            en: "Kept generated figures/results as experiment traces for later review.",
            zh: "保留生成图表和结果，作为后续复盘的实验痕迹。",
          },
        ],
        keyFiles: [
          "Machine_Learning/lab_1/ML_Lab1_Bank_Student_FrameworkV4.ipynb",
          "Machine_Learning/lab_1/lab1_sklearn_exampleV4.ipynb",
          "Machine_Learning/lab_2/ml_lab2_pytorch_mnist.ipynb",
          "Machine_Learning/lab_3/code&data/Lab3.ipynb",
        ],
        learning: [
          {
            en: "A model result is easier to explain when the dataset, preprocessing, and evaluation path are visible.",
            zh: "当数据、预处理和评估路径可见时，模型结果才更容易解释。",
          },
          {
            en: "Notebook experiments are useful learning evidence, but they need better cleanup before becoming public projects.",
            zh: "notebook 实验是有价值的学习证据，但在成为公开项目之前还需要进一步整理。",
          },
        ],
        boundary: {
          en: "This is shown as coursework evidence. It does not claim a novel model, public benchmark, or production deployment.",
          zh: "这里作为课程学习证据展示，不声称新模型、公开 benchmark 或生产部署。",
        },
        next: [
          {
            en: "Extract one clean notebook into a small reproducible public demo.",
            zh: "挑一个 notebook 整理成可复现的小型公开 demo。",
          },
          {
            en: "Add a short note explaining dataset assumptions and evaluation metrics.",
            zh: "补一篇短笔记说明数据假设和评估指标。",
          },
        ],
      },
    },
    {
      id: "computer-construction-minirv",
      title: { en: "miniRV / Computer Construction Practice", zh: "miniRV / 计算机组成实践" },
      course: { en: "Computer Construction", zh: "计算机组成" },
      status: { en: "Course project / hardware practice", zh: "课程项目 / 硬件实践" },
      summary: {
        en: "Verilog and RISC-V assembly practice around multiplier modules, miniRV/AXI files, and CPU-related components.",
        zh: "围绕乘法器、miniRV/AXI 文件和 CPU 相关模块的 Verilog 与 RISC-V 汇编练习。",
      },
      stack: ["Verilog", "RISC-V ASM", "AXI", "Vivado"],
      sourcePath: "HIT_S2/Computer_Construction and HIT_S2/Project/miniRV_axi_stu",
      evidence: [
        {
          en: "Includes multiplier.v, mac_test.v, miniRV_axi_stu files, and CPU module files such as ALU/Ctrl/cpu_top.",
          zh: "包含 multiplier.v、mac_test.v、miniRV_axi_stu 文件，以及 ALU/Ctrl/cpu_top 等 CPU 模块文件。",
        },
        {
          en: "Assembly exercises are kept as .asm files for low-level foundation practice.",
          zh: "汇编练习以 .asm 文件保留，用于底层基础训练。",
        },
      ],
      detail: {
        goal: {
          en: "Practice low-level computer organization by connecting assembly exercises, Verilog modules, and a miniRV/AXI-style project structure.",
          zh: "通过汇编练习、Verilog 模块和 miniRV/AXI 风格项目结构，练习计算机组成的底层实现思维。",
        },
        work: [
          {
            en: "Worked with Verilog modules for arithmetic and CPU-related building blocks.",
            zh: "接触并整理了用于算术和 CPU 相关构件的 Verilog 模块。",
          },
          {
            en: "Connected RISC-V assembly exercises with hardware-level implementation practice.",
            zh: "把 RISC-V 汇编练习和硬件层实现实践联系起来。",
          },
          {
            en: "Kept the project framed as foundations for systems thinking, not as a finished processor product.",
            zh: "把它定位为系统思维基础训练，而不是包装成已完成的处理器产品。",
          },
        ],
        keyFiles: [
          "Computer_Construction/lab2_stu/multiplier.v",
          "Computer_Construction/lab2_stu/miniRV_axi_stu",
          "Computer_Construction/lab3_stu/miniRV_axi_stu",
          "Project/miniRV_axi_stu/miniRV_axi.srcs/sources_1/new/ALU.v",
          "Project/miniRV_axi_stu/miniRV_axi.srcs/sources_1/new/Ctrl.v",
          "Project/miniRV_axi_stu/miniRV_axi.srcs/sources_1/new/cpu_top.v",
        ],
        learning: [
          {
            en: "System-level projects are easier to understand when modules, interfaces, and test traces are documented together.",
            zh: "系统级项目需要把模块、接口和测试痕迹放在一起说明，读者才更容易理解。",
          },
          {
            en: "Hardware practice strengthens the portfolio's CS foundation beyond application-layer AI demos.",
            zh: "硬件实践能补强作品集中应用层 AI demo 之外的计算机基础。",
          },
        ],
        boundary: {
          en: "This page only summarizes coursework artifacts. It avoids claiming a polished CPU design or public hardware verification result.",
          zh: "这个页面只总结课程产物，不声称完成了成熟 CPU 设计或公开硬件验证结果。",
        },
        next: [
          {
            en: "Write a cleaner module map for ALU, control, top-level CPU, and test files.",
            zh: "整理一张更清楚的模块图，说明 ALU、控制模块、CPU 顶层和测试文件。",
          },
          {
            en: "Add a sanitized build/run note if the project is later made public.",
            zh: "如果后续公开项目，再补充脱敏后的构建和运行说明。",
          },
        ],
      },
    },
    {
      id: "software-construction-aircraft-war",
      title: { en: "Aircraft War Java Coursework", zh: "Aircraft War Java 课程项目" },
      course: { en: "Software Construction", zh: "软件构造" },
      status: { en: "Course project / OOP practice", zh: "课程项目 / 面向对象实践" },
      summary: {
        en: "A Java coursework project with game entities, factories, strategies, DAO tests, and Swing-related practice.",
        zh: "一个 Java 课程项目，包含游戏实体、工厂、策略、DAO 测试和 Swing 相关练习。",
      },
      stack: ["Java", "OOP", "JUnit", "Design Patterns", "Swing"],
      sourcePath: "HIT_S2/软件构造/AircraftWar-base",
      evidence: [
        {
          en: "Source folders include aircraft, enemy, factory, strategy, dao, and prop packages.",
          zh: "源码目录包含 aircraft、enemy、factory、strategy、dao、prop 等包。",
        },
        {
          en: "Tests include DAO, factory creation, and hero shoot strategy coverage.",
          zh: "测试包含 DAO、工厂创建和英雄射击策略相关用例。",
        },
      ],
      detail: {
        goal: {
          en: "Practice object-oriented design and small-game architecture through a Java coursework project with entities, factories, strategies, persistence, and tests.",
          zh: "通过 Java 课程项目练习面向对象设计和小游戏架构，包括实体、工厂、策略、持久化和测试。",
        },
        work: [
          {
            en: "Organized game objects and behavior through packages such as aircraft, enemy, factory, strategy, dao, and prop.",
            zh: "通过 aircraft、enemy、factory、strategy、dao、prop 等包组织游戏对象和行为。",
          },
          {
            en: "Used tests to cover DAO behavior, factory creation, and strategy-related logic.",
            zh: "使用测试覆盖 DAO 行为、工厂创建和策略相关逻辑。",
          },
          {
            en: "Practiced separating gameplay logic from UI/demo code where possible.",
            zh: "练习尽可能把游戏逻辑和 UI/demo 代码拆开。",
          },
        ],
        keyFiles: [
          "软件构造/AircraftWar-base/src/edu/hitsz",
          "软件构造/AircraftWar-base/tests/edu/hitsz/dao/FileScoreRecordDaoTest.java",
          "软件构造/AircraftWar-base/tests/edu/hitsz/factory/FactoryCreationTest.java",
          "软件构造/AircraftWar-base/tests/edu/hitsz/strategy/HeroShootStrategyTest.java",
        ],
        learning: [
          {
            en: "Design patterns are easier to justify when they reduce concrete duplication or make behavior easier to test.",
            zh: "设计模式只有在减少具体重复、让行为更容易测试时才真正有意义。",
          },
          {
            en: "A course project can become portfolio-worthy when its structure, tests, and limits are explained clearly.",
            zh: "课程项目只要能把结构、测试和边界说明清楚，也可以成为作品集里的有效材料。",
          },
        ],
        boundary: {
          en: "This is a coursework project, not a commercial game or production software. The page focuses on code organization and testing practice.",
          zh: "这是课程项目，不是商业游戏或生产软件。页面重点展示代码组织和测试实践。",
        },
        next: [
          {
            en: "Add one architecture diagram showing entity, factory, strategy, and DAO relationships.",
            zh: "补一张架构图说明实体、工厂、策略和 DAO 的关系。",
          },
          {
            en: "If publishing the repo later, add screenshots and a short run guide.",
            zh: "如果后续公开仓库，补充截图和简短运行说明。",
          },
        ],
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
      slug: "building-ai-campus-assistant",
      title: { en: "Building an AI Campus Assistant", zh: "构建 AI 校园助手" },
      date: "2026-06",
      status: { en: "Draft note", zh: "草稿笔记" },
      tags: ["LLM", "Workflow", "Campus"],
      summary: {
        en: "A product note on turning scattered campus notices into structured tasks, reminders, and knowledge snippets.",
        zh: "关于如何把分散的校园通知整理成结构化任务、提醒和知识片段的产品笔记。",
      },
      notes: [
        {
          en: "The useful part is not only answering questions, but reducing repeated information sorting.",
          zh: "真正有价值的部分不只是回答问题，而是减少重复的信息整理。",
        },
        {
          en: "Structured output matters: deadlines, course names, locations, and action items should be separated.",
          zh: "结构化输出很重要：DDL、课程名、地点和待办事项应该被拆开。",
        },
        {
          en: "A first version can stay lightweight without login, database, or private campus integration.",
          zh: "第一版可以保持轻量，不接登录、数据库或私有校园系统。",
        },
      ],
      next: {
        en: "Design a small public demo with mock notices and a clear input-output example.",
        zh: "用模拟通知做一个公开小 demo，并给出清楚的输入输出示例。",
      },
      sections: [
        {
          title: { en: "Why this idea matters", zh: "为什么这个想法值得做" },
          body: {
            en: "Campus information is often scattered across messages, course notices, activity posts, and informal reminders. The hard part is not only reading the text, but turning it into a small set of actionable objects.",
            zh: "校园信息经常分散在通知、课程消息、活动推送和口头提醒里。难点不只是读懂文本，而是把它们整理成少量可以执行的对象。",
          },
          points: [
            {
              en: "A notice can become deadlines, locations, people, links, and follow-up actions.",
              zh: "一条通知可以被拆成截止时间、地点、人物、链接和后续动作。",
            },
            {
              en: "The assistant should help students decide what to do next, not simply summarize paragraphs.",
              zh: "助手应该帮助学生判断下一步做什么，而不是只总结段落。",
            },
          ],
        },
        {
          title: { en: "First version boundary", zh: "第一版边界" },
          body: {
            en: "The first public version can use mock notices instead of private campus systems. That keeps the demo safe, free, and easy to explain while still showing the workflow.",
            zh: "第一版公开 demo 可以使用模拟通知，而不是接入私有校园系统。这样更安全、免费、也更容易解释，同时仍然能展示工作流。",
          },
          points: [
            {
              en: "No login, no private school API, and no persistent database in the prototype.",
              zh: "原型阶段不做登录、不接学校私有 API，也不做持久数据库。",
            },
            {
              en: "The most important output is a clear structured JSON-like result.",
              zh: "最重要的输出是一份清楚的结构化结果。",
            },
          ],
        },
      ],
    },
    {
      slug: "yolo-defect-detection-notes",
      title: { en: "Notes on YOLO-based Defect Detection", zh: "YOLO 缺陷检测笔记" },
      date: "2026-06",
      status: { en: "Field note", zh: "实践笔记" },
      tags: ["YOLO", "Computer Vision", "Industrial AI"],
      summary: {
        en: "Practical observations from shaping a small-target defect detection prototype into something easier to inspect.",
        zh: "围绕小目标缺陷检测原型，记录如何把模型结果整理成更容易检查的应用流程。",
      },
      notes: [
        {
          en: "Small objects make image preparation and slicing strategy as important as the detector choice.",
          zh: "小目标场景里，图像预处理和切片策略和检测器选择一样关键。",
        },
        {
          en: "A portfolio project becomes stronger when it shows interface, delivery flow, and limitations.",
          zh: "作品集项目如果能展示界面、交付流程和当前限制，会比只展示模型更有说服力。",
        },
        {
          en: "Metrics should be published only when the dataset and evaluation protocol can be explained.",
          zh: "只有当数据和评估流程能说清楚时，才适合公开强调指标。",
        },
      ],
      next: {
        en: "Add a sanitized demo GIF and a toy reproducible example if suitable public data is available.",
        zh: "如果有合适的公开数据，补一个脱敏 demo GIF 和可复现的小样例。",
      },
      sections: [
        {
          title: { en: "Model result is not the whole project", zh: "模型结果不是整个项目" },
          body: {
            en: "A detection model becomes more useful when it is wrapped in a workflow that someone can inspect: input image, parameters, result boxes, output file, and known limitations.",
            zh: "检测模型只有被包进一个可检查的流程里才更有用：输入图片、参数、检测框、输出文件和已知限制都需要能被看见。",
          },
          points: [
            {
              en: "For small targets, preprocessing choices can decide whether the model sees enough detail.",
              zh: "在小目标场景里，预处理方式会影响模型能不能看到足够细节。",
            },
            {
              en: "A public case study should show the interface and the delivery thinking, not just a model name.",
              zh: "公开案例应该展示界面和交付思路，而不只是写一个模型名称。",
            },
          ],
        },
        {
          title: { en: "How to talk about limits", zh: "如何说明限制" },
          body: {
            en: "It is tempting to put impressive metrics on a portfolio page, but metrics are only useful when the dataset and evaluation protocol are public enough to understand.",
            zh: "作品集里很容易想放漂亮指标，但只有当数据和评估流程足够清楚时，指标才真正有意义。",
          },
          points: [
            {
              en: "Use screenshots, architecture, and process notes when metrics cannot be verified.",
              zh: "当指标无法验证时，用截图、架构和流程笔记来支撑项目更稳妥。",
            },
            {
              en: "Separate prototype claims from future production ideas.",
              zh: "把当前原型能力和未来生产化设想区分开。",
            },
          ],
        },
      ],
    },
    {
      slug: "local-llms-personal-automation",
      title: { en: "Local LLMs as Personal Automation Tools", zh: "把本地大模型作为个人自动化工具" },
      date: "2026-06",
      status: { en: "Exploration", zh: "探索记录" },
      tags: ["Local LLM", "Ollama", "Automation"],
      summary: {
        en: "A short exploration of when local models are useful for private, low-cost personal workflows.",
        zh: "简要记录本地模型适合做哪些私密、低成本的个人工作流。",
      },
      notes: [
        {
          en: "Local models are attractive when the input is personal, repetitive, and not worth sending to a cloud API.",
          zh: "当输入信息比较个人、重复，而且不值得发到云端 API 时，本地模型很有吸引力。",
        },
        {
          en: "The model output should be grounded in structured signals, not only an open-ended prompt.",
          zh: "模型输出最好由结构化信号支撑，而不是只靠开放式 prompt。",
        },
        {
          en: "A good local LLM tool should fail quietly and keep the original data accessible.",
          zh: "好的本地大模型工具应该能安静失败，并保留原始数据可追溯。",
        },
      ],
      next: {
        en: "Publish sanitized diary examples and separate monitoring, prompt, and storage modules more clearly.",
        zh: "发布脱敏日记样例，并把监控、prompt、存储模块拆得更清楚。",
      },
      sections: [
        {
          title: { en: "Where local models fit", zh: "本地模型适合的位置" },
          body: {
            en: "Local LLMs are useful when the task is personal, repetitive, and privacy-sensitive. They do not need to replace cloud models; they can become a low-cost layer for small automations.",
            zh: "当任务比较个人、重复、又有隐私顾虑时，本地大模型很适合。它不需要替代云端模型，而是可以成为小型自动化的低成本一层。",
          },
          points: [
            {
              en: "System state, local notes, and small reminders are good local-first inputs.",
              zh: "系统状态、本地笔记和小提醒都适合优先在本地处理。",
            },
            {
              en: "The output should be helpful even when it is imperfect.",
              zh: "即使输出不完美，也应该对用户有帮助。",
            },
          ],
        },
        {
          title: { en: "Structure before generation", zh: "先结构化，再生成" },
          body: {
            en: "A local model becomes easier to control when the input is structured first. Silicon Diaries uses system signals as the grounding layer before asking the model to write.",
            zh: "先把输入结构化，本地模型就更容易控制。硅基日记先用系统信号作为支撑，再让模型生成文字。",
          },
          points: [
            {
              en: "Monitoring, prompt construction, generation, and storage should be separate modules.",
              zh: "监控、prompt 构造、生成和存储应该拆成独立模块。",
            },
            {
              en: "Raw data should remain accessible so generated text can be audited.",
              zh: "原始数据应该保留可访问，这样生成文本才可以回看和检查。",
            },
          ],
        },
      ],
    },
    {
      slug: "coursework-to-real-projects",
      title: { en: "From Coursework to Real Projects", zh: "从课程作业到真实项目" },
      date: "2026-06",
      status: { en: "Learning note", zh: "学习笔记" },
      tags: ["Learning", "Portfolio", "Engineering"],
      summary: {
        en: "Notes on converting exercises and experiments into small public projects with clearer product thinking.",
        zh: "记录如何把课程练习和实验逐步整理成更有产品感的小型公开项目。",
      },
      notes: [
        {
          en: "A public project needs a reader path: problem, setup, screenshots, limitations, and next steps.",
          zh: "公开项目需要一条读者路径：问题、运行方式、截图、限制和下一步。",
        },
        {
          en: "A small project is still valuable if its boundary is clear and the repo is easy to inspect.",
          zh: "小项目只要边界清楚、仓库容易阅读，仍然有展示价值。",
        },
        {
          en: "Honest TODOs are better than pretending unfinished systems are production-ready.",
          zh: "诚实的 TODO 比把未完成系统包装成生产级项目更好。",
        },
      ],
      next: {
        en: "Keep turning project repos into better public entry points, starting with README and evidence media.",
        zh: "继续把项目仓库整理成更好的公开入口，先从 README 和证据素材开始。",
      },
      sections: [
        {
          title: { en: "A project needs a reader path", zh: "项目需要读者路径" },
          body: {
            en: "Many small projects are technically useful but hard for a visitor to understand. A good public project should guide the reader from context to proof.",
            zh: "很多小项目技术上有价值，但访客很难快速看懂。一个好的公开项目应该把读者从背景引到证据。",
          },
          points: [
            {
              en: "Problem, screenshots, quickstart, limitations, and next steps are the minimum useful structure.",
              zh: "问题、截图、快速开始、限制和下一步，是最基本也最有用的结构。",
            },
            {
              en: "A README is part of the product, not an afterthought.",
              zh: "README 是项目的一部分，不是最后随便补的说明。",
            },
          ],
        },
        {
          title: { en: "Keep the claims honest", zh: "保持表述诚实" },
          body: {
            en: "A student portfolio does not need to pretend that every prototype is production-grade. Honest boundaries often make the work more credible.",
            zh: "学生作品集不需要把每个原型都包装成生产级系统。边界说清楚，反而更可信。",
          },
          points: [
            {
              en: "TODOs are acceptable when they clearly mark what is missing.",
              zh: "TODO 可以存在，只要清楚标明缺的是什么。",
            },
            {
              en: "Evidence beats adjectives: screenshots and reproducible steps matter more than big claims.",
              zh: "证据比形容词重要：截图和可复现步骤比夸张表述更有用。",
            },
          ],
        },
      ],
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
      value: "Writing / Notes",
      href: "#writing",
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
      lab: { en: "Lab", zh: "实验" },
      writing: { en: "Writing", zh: "笔记" },
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
      featuredEyebrow: { en: "Featured Case Studies", zh: "精选案例" },
      featuredTitle: {
        en: "Two project write-ups with public evidence.",
        zh: "两个带公开证据的项目案例。",
      },
      featuredDescription: {
        en: "Quick entry points for visitors who want to inspect the strongest project context first.",
        zh: "给想先看重点项目的访客一个更快入口。",
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
      blogEyebrow: { en: "Writing / Notes", zh: "写作 / 笔记" },
      blogTitle: { en: "Short notes from projects in progress.", zh: "来自进行中项目的短笔记。" },
      blogDescription: {
        en: "No CMS yet. This is a lightweight, data-driven notes page for ideas that are useful enough to share before becoming full articles.",
        zh: "暂时不接 CMS。这里是一个轻量的数据驱动笔记页，用来放那些还没写成长文、但已经值得分享的想法。",
      },
      blogNextLabel: { en: "Next step", zh: "下一步" },
      blogReadLabel: { en: "Read note", zh: "阅读笔记" },
      backHome: { en: "Back to home", zh: "返回首页" },
      openRepository: { en: "Open repository", zh: "打开仓库" },
      evidenceEyebrow: { en: "Evidence", zh: "证据面板" },
      evidenceTitle: {
        en: "What is public, what is pending, and what is intentionally private.",
        zh: "哪些已公开，哪些待补充，哪些有意保留边界。",
      },
      evidenceDescription: {
        en: "Each case study separates visible evidence from TODOs and private context, so the project reads honestly instead of sounding inflated.",
        zh: "每个案例都会区分可见证据、待补充内容和私有边界，让项目更可信，而不是听起来被过度包装。",
      },
      openEvidence: { en: "Open evidence", zh: "打开证据" },
      labEyebrow: { en: "Project Lab / Experiments", zh: "项目实验室 / 实验记录" },
      labTitle: {
        en: "Course labs and technical experiments that support the portfolio.",
        zh: "支撑作品集方向的课程实验和技术练习。",
      },
      labDescription: {
        en: "This page organizes selected HIT_S2 coursework folders into public-facing learning evidence. They are not presented as polished products, but they show foundations behind the current AI and systems direction.",
        zh: "这个页面把 HIT_S2 中的一部分课程实验整理成面向公开展示的学习证据。它们不会被包装成成熟产品，但能说明当前 AI 与系统方向背后的基础训练。",
      },
      labSourceLabel: { en: "Local evidence folder", zh: "本地证据目录" },
      labEvidenceLabel: { en: "Observed evidence", zh: "已观察到的证据" },
      labBackLabel: { en: "Back to portfolio", zh: "返回作品集" },
      labDetailLabel: { en: "View detail", zh: "查看详情" },
      labGoalLabel: { en: "Experiment goal", zh: "实验目标" },
      labWorkLabel: { en: "What I worked on", zh: "做了什么" },
      labKeyFilesLabel: { en: "Key local files", zh: "关键本地文件" },
      labLearningLabel: { en: "What it shows", zh: "能说明什么" },
      labBoundaryLabel: { en: "Public boundary", zh: "公开边界" },
      labNextLabel: { en: "Next cleanup", zh: "后续整理" },
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
