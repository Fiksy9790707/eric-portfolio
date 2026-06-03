import type { PortfolioProfile } from "../types/profile";

export const profile: PortfolioProfile = {
  site: {
    title: "Eric Feng | CS Student & Applied AI Builder",
    description:
      "Portfolio of Eric Feng, a Computer Science undergraduate building practical AI systems with local LLMs, computer vision, and full-stack prototypes.",
    lastUpdated: "2026-06-03",
    productionUrl: "https://eric-portfolio-weld.vercel.app/",
    ogImage: "https://eric-portfolio-weld.vercel.app/og-image.png",
  },
  identity: {
    name: "Eric",
    chineseName: "冯学诚",
    role: {
      en: "Computer Science Student / Practical AI Systems Builder",
      zh: "计算机科学本科生 / 实用型 AI 系统构建者",
    },
    tagline: {
      en: "Computer Science undergraduate focused on practical AI systems, local LLM workflows, computer vision, and full-stack prototypes.",
      zh: "计算机专业本科生，专注于实用型 AI 系统、本地 LLM 工作流、计算机视觉和全栈原型。",
    },
    supporting: {
      en: "I try to turn messy real-world information into usable tools, such as campus agents, task parsing workflows, and industrial defect detection prototypes.",
      zh: "我尝试把混乱的现实信息转化成可用工具，例如校园事务智能体、任务解析工作流和工业缺陷检测原型。",
    },
    school: {
      en: "Harbin Institute of Technology, Shenzhen",
      zh: "哈尔滨工业大学（深圳）",
    },
    focus: [
      {
        label: { en: "Applied AI", zh: "应用 AI" },
        detail: { en: "Campus agent / task parser", zh: "校园智能体 / 任务解析器" },
      },
      {
        label: { en: "Computer Vision", zh: "计算机视觉" },
        detail: { en: "Wafer defect detection prototype", zh: "晶圆缺陷检测原型" },
      },
      {
        label: { en: "Local LLM", zh: "本地 LLM" },
        detail: { en: "Personal automation experiments", zh: "个人自动化实验" },
      },
      {
        label: { en: "Full-stack", zh: "全栈" },
        detail: { en: "Portfolio and project demos", zh: "作品集与项目 Demo" },
      },
    ],
    githubUsername: "Fiksy9790707",
    githubUrl: "https://github.com/Fiksy9790707",
    emailUserParts: ["147", "753", "69722"],
    emailDomainParts: ["163", "com"],
    resumeUrl: "resume.md",
    blogUrl: null,
  },
  about: [
    {
      en: "I am a Computer Science undergraduate at Harbin Institute of Technology, Shenzhen.",
      zh: "我是哈尔滨工业大学（深圳）计算机科学与技术本科生。",
    },
    {
      en: "I focus on practical AI, software engineering, and system prototype development.",
      zh: "我关注实用型 AI、软件工程和系统原型开发。",
    },
    {
      en: "My current exploration is around AI agents, local LLM workflows, computer vision prototypes, and the engineering work needed to make demos reproducible.",
      zh: "目前主要探索 AI Agent、本地 LLM 工作流、计算机视觉原型，以及让 demo 可复现、可展示所需要的工程工作。",
    },
  ],
  currentlyBuilding: [
    {
      title: {
        en: "AI Campus Assistant workflow",
        zh: "AI 校园助手工作流",
      },
      description: {
        en: "Organizing campus notices, deadlines, and tasks into a safer mock-data workflow before any real campus integration.",
        zh: "先用 mock 数据整理校园通知、DDL 和任务解析工作流，不直接接入真实校园系统。",
      },
      tags: ["LLM", "Workflow", "Structured Output"],
    },
    {
      title: {
        en: "Computer vision defect prototype",
        zh: "计算机视觉缺陷检测原型",
      },
      description: {
        en: "Improving the wafer detection prototype with clearer model workflow, Streamlit UI, screenshots, and local setup notes.",
        zh: "优化晶圆缺陷检测原型：模型流程、Streamlit 界面、截图和本地运行说明。",
      },
      tags: ["YOLOv8", "Streamlit", "Computer Vision"],
    },
    {
      title: {
        en: "CS foundations in practice",
        zh: "计算机基础实践",
      },
      description: {
        en: "Learning software engineering, machine learning, systems programming, and turning selected coursework into readable evidence.",
        zh: "学习软件工程、机器学习和系统编程，并把部分课程项目整理成可阅读的学习证据。",
      },
      tags: ["Java", "PyTorch", "RISC-V"],
    },
    {
      title: {
        en: "Internship preparation",
        zh: "实习准备",
      },
      description: {
        en: "Looking for AI or software engineering internship opportunities, with public projects kept modest, inspectable, and easy to run.",
        zh: "寻找 AI / 软件工程方向实习机会，同时让公开项目保持克制、可检查、易运行。",
      },
      tags: ["AI", "Software Engineering", "Portfolio"],
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
      problem: {
        en: "Industrial-style defect inspection needs a workflow that can move from model training to a usable local demo, not only a notebook result.",
        zh: "工业风格缺陷检测需要从模型训练走向可用本地演示，而不是只停留在 notebook 结果。",
      },
      built: {
        en: "A YOLOv8 + Streamlit prototype path covering cloud-side training exploration, image upload, detection preview, and CSV export.",
        zh: "整理了 YOLOv8 + Streamlit 原型路径，覆盖云端训练探索、图像上传、检测预览和 CSV 导出。",
      },
      result: {
        en: "Prototype / local demo direction. Public repo, UI screenshot, architecture visual, and code highlights are available; benchmark notes are still TODO.",
        zh: "原型 / 本地演示方向。已有公开仓库、界面截图、架构图和代码片段；benchmark 说明仍待补充。",
      },
      stack: ["YOLOv8", "Streamlit", "Aliyun PAI"],
      categories: ["AI Systems", "Computer Vision"],
      featured: true,
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
          en: "An industrial-style computer vision prototype connecting YOLOv8, Streamlit, cloud training, and Windows local delivery.",
          zh: "一个偏工业场景的计算机视觉原型，连接 YOLOv8、Streamlit、云端训练和 Windows 本地交付。",
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
              en: "Public GitHub repository for the project.",
              zh: "项目的公开 GitHub 仓库。",
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
              en: "Architecture image for the cloud-training-to-local-demo workflow.",
              zh: "从云端训练到本地演示流程的架构图。",
            },
          },
          {
            label: { en: "Benchmark and dataset notes", zh: "指标与数据说明" },
            status: { en: "TODO", zh: "待补充" },
            description: {
              en: "Benchmark numbers and dataset notes are still being prepared.",
              zh: "benchmark 和数据集说明仍在整理中。",
            },
          },
          {
            label: { en: "NDA boundary", zh: "保密边界" },
            status: { en: "Explicit", zh: "已说明" },
            description: {
              en: "Uses public repository material and sanitized project context.",
              zh: "使用公开仓库素材和脱敏后的项目背景。",
            },
          },
        ],
        codeHighlights: [
          {
            title: {
              en: "Detection pipeline",
              zh: "检测流水线",
            },
            language: "Python",
            description: {
              en: "The app layer should keep inference predictable: load an image, run YOLO with a confidence threshold, normalize boxes, then export results for review.",
              zh: "应用层需要保持推理流程清晰：读取图像，按置信度运行 YOLO，整理检测框，再导出结果供复核。",
            },
            code: `def run_detection(image_path, model, conf=0.35):
    image = load_image(image_path)
    results = model.predict(image, conf=conf)

    boxes = []
    for item in results[0].boxes:
        boxes.append({
            "class_id": int(item.cls),
            "confidence": float(item.conf),
            "xyxy": item.xyxy.tolist()[0],
        })

    return {
        "preview": draw_boxes(image, boxes),
        "boxes": boxes,
        "csv": export_detection_csv(boxes),
    }`,
            points: [
              {
                en: "Keep model inference separate from Streamlit UI state.",
                zh: "把模型推理和 Streamlit 界面状态分开。",
              },
              {
                en: "Return both visual preview and structured detection data.",
                zh: "同时返回可视化预览和结构化检测数据。",
              },
            ],
          },
          {
            title: {
              en: "Delivery boundary",
              zh: "交付边界",
            },
            language: "Workflow",
            description: {
              en: "A useful prototype needs more than a notebook result, so the workflow keeps training, UI, and local demo packaging as separate steps.",
              zh: "可展示原型不能只停在 notebook 结果，所以流程把训练、界面和本地演示打包分成独立步骤。",
            },
            code: `cloud_train_yolov8()
  -> save_best_weights()
  -> load_weights_in_local_app()
  -> streamlit_upload_and_detect()
  -> export_csv_for_review()
  -> package_windows_demo()`,
            points: [
              {
                en: "Cloud training is treated as an upstream step, not the whole product.",
                zh: "云端训练只是上游步骤，不是整个产品。",
              },
              {
                en: "Local delivery remains part of the design constraint.",
                zh: "本地交付始终是设计约束的一部分。",
              },
            ],
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
        ],
        sections: [
          {
            title: { en: "Problem", zh: "问题背景" },
            body: {
              en: "Wafer defect inspection is a useful computer vision scenario because the objects can be small, visually subtle, and sensitive to false negatives. The current focus is moving from detection model to usable inspection interface.",
              zh: "晶圆缺陷检测是一个很适合练习计算机视觉落地的场景：缺陷目标可能很小、视觉差异不明显，而且漏检风险更敏感。当前重点是从检测模型走向可用检测界面。",
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
      problem: {
        en: "System monitoring scripts are useful but hard to read. The project explores whether local LLMs can turn lightweight machine signals into readable summaries.",
        zh: "系统监控脚本有用但不容易阅读。这个项目探索本地大模型能否把轻量机器状态转成可读总结。",
      },
      built: {
        en: "A local Python loop using psutil, logging, prompt construction, and Ollama-style local generation.",
        zh: "用 Python、psutil、logging、prompt 构造和 Ollama 类本地生成搭建了本地闭环。",
      },
      result: {
        en: "Experimental local demo. Public repo and case study are available; sanitized output examples and runtime screenshots remain TODO.",
        zh: "实验性质本地 demo。已有公开仓库和案例页；脱敏输出样例和运行截图仍待补充。",
      },
      stack: ["Ollama", "Qwen/Llama", "psutil", "Python Logging"],
      categories: ["AI Systems"],
      featured: false,
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
              en: "The page describes the monitoring, prompting, generation, and storage loop.",
              zh: "页面说明了监控、prompt、生成和存储闭环。",
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
        codeHighlights: [
          {
            title: {
              en: "System signal snapshot",
              zh: "系统状态快照",
            },
            language: "Python",
            description: {
              en: "The monitoring layer should collect small, stable signals that are easy for a local model to summarize.",
              zh: "监控层收集小而稳定的信号，让本地模型更容易生成摘要。",
            },
            code: `def collect_system_state():
    return {
        "cpu_percent": psutil.cpu_percent(interval=1),
        "memory_percent": psutil.virtual_memory().percent,
        "uptime_seconds": time.time() - psutil.boot_time(),
        "active_processes": len(psutil.pids()),
    }`,
            points: [
              {
                en: "Use lightweight signals instead of noisy full logs.",
                zh: "优先使用轻量状态，而不是把完整日志直接丢给模型。",
              },
              {
                en: "Keep the schema stable so prompts are easier to debug.",
                zh: "保持结构稳定，方便调试 prompt。",
              },
            ],
          },
          {
            title: {
              en: "Local generation loop",
              zh: "本地生成闭环",
            },
            language: "Python",
            description: {
              en: "The LLM call is treated as one step in a local pipeline: structure context, generate text, then write a traceable entry.",
              zh: "LLM 调用只是本地流水线的一步：组织上下文、生成文本、写入可追踪记录。",
            },
            code: `def write_diary_entry(model, state):
    prompt = build_diary_prompt(state)
    entry = ollama_generate(model=model, prompt=prompt)

    logging.info("generated diary entry")
    append_markdown_entry(
        title=current_date_title(),
        metadata=state,
        body=entry,
    )`,
            points: [
              {
                en: "Keep generation local through Ollama.",
                zh: "通过 Ollama 保持本地生成。",
              },
              {
                en: "Archive generated entries with metadata for later review.",
                zh: "把生成内容和元数据一起归档，方便回看。",
              },
            ],
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
                zh: "体现一点产品感和个性。",
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
      problem: {
        en: "Campus information is scattered across notices, deadlines, courses, and activities, which makes it easy to miss context or action items.",
        zh: "校园信息分散在通知、DDL、课程和活动里，很容易漏掉上下文或待办事项。",
      },
      built: {
        en: "An in-progress workflow concept around LLM extraction, knowledge organization, and structured output.",
        zh: "正在整理一个围绕 LLM 抽取、知识组织和结构化输出的工作流原型。",
      },
      result: {
        en: "In progress. Public repo and real campus integration are not published yet; first version should use mock notices and local demos.",
        zh: "进行中。公开仓库和真实校园系统集成尚未发布；第一版应使用 mock 通知和本地 demo。",
      },
      stack: ["LLM", "Workflow", "Knowledge Base", "Structured Output"],
      categories: ["AI Systems"],
      featured: true,
      githubUrl: null,
      linkLabel: {
        en: "TODO: add repository",
        zh: "TODO：补充仓库",
      },
    },
    {
      id: "java-aircraft-war",
      name: {
        en: "Java Aircraft War",
        zh: "Java Aircraft War",
      },
      subtitle: {
        en: "Software Construction Coursework",
        zh: "软件构造课程项目",
      },
      type: {
        en: "Course Project",
        zh: "课程项目",
      },
      status: {
        en: "Course project",
        zh: "课程项目",
      },
      description: {
        en: "A Java coursework project with game entities, factories, strategies, DAO tests, and Swing-related practice.",
        zh: "一个 Java 课程项目，包含游戏实体、工厂、策略、DAO 测试和 Swing 相关练习。",
      },
      problem: {
        en: "A course game can easily become only a visual demo unless its object model, tests, and design boundaries are documented.",
        zh: "课程小游戏如果不说明对象模型、测试和设计边界，很容易只像一个界面 demo。",
      },
      built: {
        en: "Organized aircraft, enemy, factory, strategy, DAO, prop, and test packages around a small Java game structure.",
        zh: "围绕小型 Java 游戏结构，整理 aircraft、enemy、factory、strategy、DAO、prop 和测试包。",
      },
      result: {
        en: "Course project / OOP practice. Public lab detail is available; a public repo and screenshot guide are still TODO.",
        zh: "课程项目 / 面向对象实践。已有公开实验详情页；公开仓库和截图说明仍待补充。",
      },
      stack: ["Java", "OOP", "JUnit", "Design Patterns", "Swing"],
      categories: ["Course / Engineering Projects"],
      featured: true,
      githubUrl: null,
      detailUrl: "/lab/software-construction-aircraft-war",
      linkLabel: {
        en: "Open lab detail",
        zh: "打开实验详情",
      },
    },
    {
      id: "machine-learning-experiments",
      name: {
        en: "MNIST MLP / ID3 Experiments",
        zh: "MNIST MLP / ID3 机器学习实验",
      },
      subtitle: {
        en: "Machine Learning Lab",
        zh: "机器学习实验",
      },
      type: {
        en: "Lab Experiment",
        zh: "实验记录",
      },
      status: {
        en: "Course lab",
        zh: "课程实验",
      },
      description: {
        en: "Notebook-based experiments around classical ML examples and PyTorch MNIST practice.",
        zh: "围绕传统机器学习样例和 PyTorch MNIST 练习的 notebook 实验。",
      },
      problem: {
        en: "Model exercises need visible data, training, evaluation, and interpretation steps before they become useful public evidence.",
        zh: "模型练习需要把数据、训练、评估和解释路径展示出来，才适合作为公开学习证据。",
      },
      built: {
        en: "Ran sklearn-style classical ML examples and PyTorch MNIST notebooks, keeping figures and results for later review.",
        zh: "运行 sklearn 风格传统机器学习样例和 PyTorch MNIST notebook，并保留图表与结果用于复盘。",
      },
      result: {
        en: "Course lab / learning evidence. A clean reproducible public demo is a future cleanup task.",
        zh: "课程实验 / 学习证据。后续可整理成一个干净、可复现的公开 demo。",
      },
      stack: ["Python", "Jupyter", "scikit-learn", "PyTorch", "MNIST"],
      categories: ["Course / Engineering Projects", "Lab Experiments"],
      githubUrl: null,
      detailUrl: "/lab/machine-learning-labs",
      linkLabel: {
        en: "Open lab detail",
        zh: "打开实验详情",
      },
    },
    {
      id: "riscv-embedded-experiments",
      name: {
        en: "RISC-V / Embedded Systems Experiments",
        zh: "RISC-V / 嵌入式系统实验",
      },
      subtitle: {
        en: "Computer Construction Practice",
        zh: "计算机组成实践",
      },
      type: {
        en: "Lab Experiment",
        zh: "实验记录",
      },
      status: {
        en: "Course lab",
        zh: "课程实验",
      },
      description: {
        en: "Verilog and RISC-V assembly practice around multiplier modules, miniRV/AXI files, and CPU-related components.",
        zh: "围绕乘法器、miniRV/AXI 文件和 CPU 相关模块的 Verilog 与 RISC-V 汇编练习。",
      },
      problem: {
        en: "Low-level course artifacts are hard to read unless modules, interfaces, and test traces are summarized together.",
        zh: "底层课程产物如果不把模块、接口和测试痕迹放在一起说明，外部访客很难阅读。",
      },
      built: {
        en: "Worked with Verilog modules, RISC-V assembly exercises, miniRV/AXI project structure, and CPU-related files.",
        zh: "整理 Verilog 模块、RISC-V 汇编练习、miniRV/AXI 项目结构和 CPU 相关文件。",
      },
      result: {
        en: "Course lab / systems foundation. It supports CS depth rather than claiming a polished CPU product.",
        zh: "课程实验 / 系统基础训练。用于展示计算机基础，不声称成熟 CPU 产品。",
      },
      stack: ["Verilog", "RISC-V ASM", "AXI", "Vivado"],
      categories: ["Course / Engineering Projects", "Lab Experiments"],
      githubUrl: null,
      detailUrl: "/lab/computer-construction-minirv",
      linkLabel: {
        en: "Open lab detail",
        zh: "打开实验详情",
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
        en: "Notebook-based experiments around classical ML examples and PyTorch MNIST practice.",
        zh: "围绕传统机器学习样例和 PyTorch MNIST 练习的 notebook 实验。",
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
      visualFlow: {
        title: { en: "ML experiment workflow", zh: "机器学习实验流程" },
        steps: [
          {
            label: { en: "Dataset", zh: "数据集" },
            detail: { en: "Bank/student examples and MNIST", zh: "Bank/student 示例与 MNIST" },
          },
          {
            label: { en: "Preprocess", zh: "预处理" },
            detail: { en: "Prepare features, labels, and notebook inputs", zh: "整理特征、标签和 notebook 输入" },
          },
          {
            label: { en: "Model", zh: "模型" },
            detail: { en: "Classical ML, ID3-style work, and PyTorch MLP", zh: "传统 ML、ID3 风格练习与 PyTorch MLP" },
          },
          {
            label: { en: "Evaluate", zh: "评估" },
            detail: { en: "Check results, figures, and experiment traces", zh: "检查结果、图表和实验痕迹" },
          },
          {
            label: { en: "Package", zh: "整理" },
            detail: { en: "Future cleanup into a reproducible demo", zh: "后续整理成可复现 demo" },
          },
        ],
      },
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
            en: "Notebook experiments need clearer structure before becoming standalone public demos.",
            zh: "notebook 实验还需要更清楚的结构，之后可以整理成独立公开 demo。",
          },
        ],
        boundary: {
          en: "Coursework experiment focused on model workflow practice.",
          zh: "课程实验，重点是模型工作流练习。",
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
      visualFlow: {
        title: { en: "RISC-V / miniRV flow", zh: "RISC-V / miniRV 流程" },
        steps: [
          {
            label: { en: "ASM", zh: "汇编" },
            detail: { en: "RISC-V exercises as low-level inputs", zh: "RISC-V 练习作为底层输入" },
          },
          {
            label: { en: "Modules", zh: "模块" },
            detail: { en: "Multiplier, ALU, Ctrl, and CPU blocks", zh: "乘法器、ALU、Ctrl 与 CPU 模块" },
          },
          {
            label: { en: "Interface", zh: "接口" },
            detail: { en: "miniRV / AXI-style project structure", zh: "miniRV / AXI 风格项目结构" },
          },
          {
            label: { en: "Test", zh: "测试" },
            detail: { en: "Simulation and module-level checks", zh: "仿真与模块级检查" },
          },
          {
            label: { en: "Document", zh: "说明" },
            detail: { en: "Explain module map and public boundary", zh: "说明模块图和公开边界" },
          },
        ],
      },
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
            zh: "把它定位为系统思维基础训练。",
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
      visualFlow: {
        title: { en: "Java game architecture flow", zh: "Java 游戏架构流程" },
        steps: [
          {
            label: { en: "Entities", zh: "实体" },
            detail: { en: "Aircraft, enemies, props, and hero objects", zh: "飞机、敌机、道具和英雄对象" },
          },
          {
            label: { en: "Factories", zh: "工厂" },
            detail: { en: "Create enemies and gameplay objects", zh: "创建敌机和游戏对象" },
          },
          {
            label: { en: "Strategies", zh: "策略" },
            detail: { en: "Encapsulate shooting and behavior changes", zh: "封装射击与行为变化" },
          },
          {
            label: { en: "Persistence", zh: "持久化" },
            detail: { en: "DAO layer for score records", zh: "DAO 层处理分数记录" },
          },
          {
            label: { en: "Tests", zh: "测试" },
            detail: { en: "JUnit checks for DAO, factories, and strategy logic", zh: "JUnit 检查 DAO、工厂和策略逻辑" },
          },
        ],
      },
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
      title: { en: "AI / ML", zh: "AI / 机器学习" },
      tone: { en: "Building", zh: "构建中" },
      items: ["Python", "PyTorch", "YOLOv8", "scikit-learn", "RAG", "LLM workflows"],
    },
    {
      title: { en: "Frontend / Product", zh: "前端 / 产品原型" },
      tone: { en: "Building", zh: "构建中" },
      items: ["React", "Vite", "Tailwind CSS", "Streamlit"],
    },
    {
      title: { en: "Systems / Engineering", zh: "系统 / 工程" },
      tone: { en: "Learning", zh: "学习中" },
      items: ["Java", "C/C++", "RISC-V", "Linux", "Git"],
    },
    {
      title: { en: "Tools", zh: "工具" },
      tone: { en: "Exploring", zh: "探索中" },
      items: ["Vercel", "GitHub", "Obsidian", "WSL"],
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
      slug: "why-i-started-organizing-my-portfolio",
      title: {
        en: "From Coursework to Real Projects: Why I Started Organizing My Portfolio",
        zh: "从课程作业到真实项目：我为什么开始整理作品集",
      },
      date: "2026-06",
      status: { en: "Personal essay", zh: "中文随笔" },
      source: "original",
      filters: ["portfolio"],
      relatedProject: {
        label: { en: "Project Lab", zh: "Project Lab" },
        href: "/lab",
      },
      tags: ["Portfolio", "Internship", "Projects", "Reflection"],
      summary: {
        en: "A personal note on why I started turning coursework and prototypes into a clearer public portfolio while preparing for internships.",
        zh: "一篇关于为什么开始整理作品集的短随笔：从找实习、整理项目，到意识到真实项目需要面对用户、部署和可维护性。",
      },
      notes: [
        {
          en: "The first motivation was simple: preparing for internships and making my work easier to inspect.",
          zh: "最开始的动机很简单：找实习，也想把东西整理出来。",
        },
        {
          en: "The main problem was not having no projects, but that many projects were not finished enough to be understood quickly.",
          zh: "最大的问题不是没有项目，而是很多项目还没有整理到别人能快速看懂的程度。",
        },
        {
          en: "A real project needs users, interface, deployment, reproducibility, maintenance, and a low-friction start.",
          zh: "真实项目要考虑用户、界面、部署、可复现、可维护，以及别人能不能快速上手。",
        },
      ],
      next: {
        en: "Keep turning selected projects into clearer repositories, case studies, and small public demos.",
        zh: "继续把选中的项目整理成更清楚的仓库、案例和小型公开 demo。",
      },
      sections: [
        {
          title: { en: "Why I started", zh: "一开始只是想找实习" },
          body: {
            en: "The first reason was practical: I was preparing for internships, and I needed a place where my projects could be seen together.",
            zh: "一开始其实没有想那么复杂。就是找实习，想把自己做过的东西整理出来。以前项目散在 GitHub、课程文件夹、截图和一些临时 demo 里。我自己知道这些东西存在，但别人点进来，很难在几分钟内判断我到底做过什么。",
          },
          points: [
            {
              en: "A project that only I can understand is not yet a good public project.",
              zh: "一个只有我自己能看懂的项目，还不算一个好的公开项目。",
            },
            {
              en: "Portfolio work is partly about making past work inspectable.",
              zh: "整理作品集，本质上也是把过去的工作变得可检查。",
            },
          ],
        },
        {
          title: { en: "The real problem", zh: "问题不是没有做，而是没有完全做完" },
          body: {
            en: "I gradually realized that my problem was not having no projects. The harder part was that many projects stopped at the point where I understood them, but another person could not easily run, judge, or continue them.",
            zh: "后来我发现，问题不是我完全没有东西。问题是很多东西都停在了一个很尴尬的位置：我知道它做过什么，也知道代码在哪里，但它没有完全整理到可以给别人看的程度。README 不够清楚，截图不够直观，运行步骤可能只有我自己记得，项目边界也没有写明白。",
          },
          points: [
            {
              en: "Code is only one part of the project.",
              zh: "代码只是项目的一部分。",
            },
            {
              en: "A visitor also needs context, screenshots, setup steps, and a reason to keep reading.",
              zh: "别人还需要背景、截图、安装步骤，以及继续看下去的理由。",
            },
          ],
        },
        {
          title: { en: "Coursework and real projects", zh: "课程作业和真实项目的区别" },
          body: {
            en: "Coursework often has a clear answer and a clear deadline. Real projects are different. They need to think about users, interfaces, deployment, reproducibility, updates, maintenance, and whether another person can install and start quickly.",
            zh: "课程作业通常有明确题目、明确 deadline、明确评分方式。但真实项目不一样。它不只是“能跑”就结束了，还要考虑用户是谁、界面怎么用、怎么部署、别人能不能复现、后面能不能更新维护、安装上手是不是足够简单。",
          },
          points: [
            {
              en: "A working demo is not the same as an easy-to-use project.",
              zh: "能跑的 demo，和容易上手的项目，不是一回事。",
            },
            {
              en: "Documentation, deployment, and maintenance are also engineering work.",
              zh: "文档、部署和维护，本身也是工程能力的一部分。",
            },
          ],
        },
        {
          title: { en: "The directions I care about", zh: "我更想继续做下去的方向" },
          body: {
            en: "Among the current projects, Silicon Diaries and AI Campus Assistant feel closer to directions I want to keep exploring. They are not only model tasks. They are closer to small tools that enter a real workflow.",
            zh: "在现在这些方向里，我更想继续做下去的，应该是 Silicon Diaries 和 AI Campus Assistant。它们不只是模型任务，更像是会进入真实工作流的小工具。一个关注本地大模型和个人自动化，一个关注校园信息整理和结构化输出。它们让我觉得，AI 应用不是把模型接上去就结束，而是要真的减少人的重复整理成本。",
          },
          points: [
            {
              en: "I care about AI applications that reduce repeated information sorting.",
              zh: "我比较在意那些能减少重复信息整理的 AI 应用。",
            },
            {
              en: "A useful tool should fit into daily workflow, not only look impressive in a demo.",
              zh: "有用的工具应该进入日常流程，而不只是 demo 里看起来厉害。",
            },
          ],
        },
        {
          title: { en: "What I hope people see", zh: "我希望别人看到什么" },
          body: {
            en: "I do not expect visitors to see me as an expert. I hope they can see that I am serious about building, willing to organize unfinished work, and trying to make projects more trustworthy.",
            zh: "我不希望别人看完作品集之后觉得我是什么大神。更真实一点，我希望别人觉得：这个人方向还算清楚，真的在做东西，也愿意把没整理好的东西继续整理下去。更重要的是，可以被信任。不是因为我说得多漂亮，而是因为项目、文章、截图、README 和下一步计划能互相对上。",
          },
          points: [
            {
              en: "Trust comes from consistency between writing, code, screenshots, and next steps.",
              zh: "信任感来自文字、代码、截图和后续计划之间的一致。",
            },
            {
              en: "This portfolio is a starting point for that kind of consistency.",
              zh: "这个作品集就是我开始整理这种一致性的起点。",
            },
          ],
        },
      ],
    },
    {
      slug: "family-health-ai-what-we-need",
      title: {
        en: "When Technology Enters Family Health Management, What Do We Really Need?",
        zh: "当技术进入家庭健康管理，我们真正需要什么？",
      },
      date: "2026-03",
      status: { en: "Published on Zhihu", zh: "知乎已发布" },
      source: "zhihu",
      filters: ["ai-application", "product-thinking", "zhihu"],
      relatedProject: {
        label: { en: "family-health-ai-agent", zh: "family-health-ai-agent" },
        href: "https://github.com/Fiksy9790707/family-health-ai-agent",
      },
      tags: ["AI 应用", "家庭健康", "Local-First", "产品设计"],
      externalUrl: "https://zhuanlan.zhihu.com/p/2021735140338968382",
      externalLabel: { en: "Read on Zhihu", zh: "知乎原文" },
      summary: {
        en: "A product reflection on family health management, local-first thinking, and why technology should organize information before making decisions.",
        zh: "从家庭健康管理出发，讨论技术进入真实生活时应该先解决什么：不是替人做决定，而是把信息整理得可靠、可追溯、可使用。",
      },
      notes: [
        {
          en: "Family health management needs reliable information organization before smarter AI.",
          zh: "家庭健康管理最缺的不是更聪明的 AI，而是更可靠的信息整理。",
        },
        {
          en: "Local-first is not only a privacy slogan; it is an architectural choice.",
          zh: "Local-First 不只是隐私口号，而是一种架构选择。",
        },
        {
          en: "The system should archive, remind, and connect, not replace human judgment.",
          zh: "系统应该做归档、提醒和连接，而不是替代人的判断。",
        },
      ],
      next: {
        en: "Use the family-health project as a reference for future local-first application design.",
        zh: "后续可以把 family-health 项目作为 Local-First 应用设计的参考案例。",
      },
      sections: [
        {
          title: { en: "From a real family scene", zh: "从一个真实家庭场景开始" },
          body: {
            en: "The article starts from everyday family health problems: scattered reports, medication records, checkup reminders, and the difficulty of answering simple questions when a doctor asks about history.",
            zh: "这篇文章从很具体的家庭场景开始：药物记录、复查提醒、体检报告、医生询问病史时全家一起翻手机相册。问题看起来琐碎，但真正麻烦的是信息长期散乱。",
          },
          points: [
            {
              en: "The first problem is not diagnosis, but organization.",
              zh: "第一个问题不是诊断，而是整理。",
            },
            {
              en: "Health records need traceability and human confirmation.",
              zh: "健康记录需要可追溯，也需要人工确认。",
            },
          ],
        },
        {
          title: { en: "Technology with boundaries", zh: "有边界的技术" },
          body: {
            en: "The core idea is that high-risk domains need clear boundaries. A useful health assistant should reduce chaos, preserve source records, and help family members communicate better.",
            zh: "文章的核心不是炫耀系统能做多少事，而是讨论边界。健康类工具更应该减少混乱、保留来源、帮助家庭成员和医生沟通，而不是越过人的判断。",
          },
          points: [
            {
              en: "Archive before decision.",
              zh: "先归档，再谈决策。",
            },
            {
              en: "Remind before recommend.",
              zh: "先提醒，再谈推荐。",
            },
          ],
        },
      ],
    },
    {
      slug: "use-rules-not-mock-rules",
      title: {
        en: "Use the Rules Instead of Mocking Them",
        zh: "利用规则而不是嘲讽规则：成熟认知者的生存策略",
      },
      date: "2026-03",
      status: { en: "Published on Zhihu", zh: "知乎已发布" },
      source: "zhihu",
      filters: ["growth", "zhihu"],
      relatedProject: {
        label: { en: "Wafer Case Study", zh: "Wafer 案例" },
        href: "/case-studies/wafer-defect-detection",
      },
      tags: ["认知", "个人成长", "规则", "交付"],
      externalUrl: "https://zhuanlan.zhihu.com/p/1975971017773060131",
      externalLabel: { en: "Read on Zhihu", zh: "知乎原文" },
      summary: {
        en: "A reflection on moving from outside criticism to inside action, using imperfect rules to get real work done.",
        zh: "一篇关于从场外评价走向场内行动的文章：不只是嘲讽规则，而是理解规则、利用规则，把事情推进下去。",
      },
      notes: [
        {
          en: "Seeing imperfection is easy; building inside constraints is harder.",
          zh: "看见不完美很容易，在约束里把事情做出来更难。",
        },
        {
          en: "Delivery gives technology a real target.",
          zh: "交付会让技术有真实目标。",
        },
        {
          en: "The useful question is not only whether a rule is bad, but what can be done under it.",
          zh: "有用的问题不只是规则蠢不蠢，而是在这个规则下我能做什么。",
        },
      ],
      next: {
        en: "Keep using project work as a way to test ideas instead of only commenting on them.",
        zh: "继续用项目实践检验想法，而不是只停留在评价上。",
      },
      sections: [
        {
          title: { en: "From comment to action", zh: "从评价到行动" },
          body: {
            en: "The article starts with the attraction of the 'grass stage' mindset: once you see the flaws in institutions and teams, it feels easy to stand outside and judge.",
            zh: "这篇文章从“草台班子理论”的爽感写起。看见老师、公司、流程里的不完美之后，人很容易站在外面评价，好像自己已经看透了一切。",
          },
          points: [
            {
              en: "Criticism can feel like clarity, but it may also become distance.",
              zh: "批判有时候像清醒，但也可能把自己挡在行动外面。",
            },
            {
              en: "A flawed system can still produce real products.",
              zh: "一个不完美的系统，也可能真的做出产品。",
            },
          ],
        },
        {
          title: { en: "Why this matters for projects", zh: "这和做项目有什么关系" },
          body: {
            en: "The article connects this mindset to project work: knowing a model or tool is not enough. The value appears when those skills serve delivery.",
            zh: "文章后半段把这个问题拉回到项目上：知道 YOLOv8 怎么训练、知道怎么调参，并不自动等于项目能交付。技术只有服务于真实交付时，价值才会变清楚。",
          },
          points: [
            {
              en: "Ask how to build under the current constraint.",
              zh: "问自己：在当前约束下，怎么把东西做出来。",
            },
            {
              en: "Use rules as a field of action.",
              zh: "把规则当成行动场，而不是只当成吐槽对象。",
            },
          ],
        },
      ],
    },
    {
      slug: "ai-skill-ecosystem-opportunity",
      title: {
        en: "AI Startup Opportunities: How Ordinary People Can Enter",
        zh: "AI 创业机会：普通人如何入局？聊聊 OpenClaw Skill 生态的早期红利",
      },
      date: "2026-03",
      status: { en: "Published on Zhihu", zh: "知乎已发布" },
      source: "zhihu",
      filters: ["ai-application", "product-thinking", "zhihu"],
      relatedProject: {
        label: { en: "AI Campus Assistant", zh: "AI Campus Assistant" },
        href: "/#projects",
      },
      tags: ["AI 创业", "Skill", "OpenClaw", "产品机会"],
      externalUrl: "https://zhuanlan.zhihu.com/p/1975385304899818505",
      externalLabel: { en: "Read on Zhihu", zh: "知乎原文" },
      summary: {
        en: "A practical note on OpenClaw's Skill ecosystem, early platform opportunities, and why integration can be valuable before invention.",
        zh: "围绕 OpenClaw Skill 生态写的一篇机会分析：早期平台里，普通人不一定要发明新算法，先把具体能力集成出来也有价值。",
      },
      notes: [
        {
          en: "Early ecosystems often reward people who build useful tools around the platform.",
          zh: "新生态早期，往往会奖励那些先把工具做出来的人。",
        },
        {
          en: "A Skill is closer to integration and workflow packaging than pure algorithm research.",
          zh: "Skill 更接近集成和工作流封装，不是纯算法研究。",
        },
        {
          en: "The opportunity is practical: build, teach, or provide integration services.",
          zh: "机会也很具体：开发 Skill、做教程、做集成服务。",
        },
      ],
      next: {
        en: "Watch platform ecosystems through the lens of concrete user workflows.",
        zh: "后续可以继续从具体用户工作流角度观察平台生态。",
      },
      sections: [
        {
          title: { en: "Why Skill ecosystems matter", zh: "为什么 Skill 生态值得看" },
          body: {
            en: "The article compares early Skill ecosystems to earlier platform waves: once a platform appears, practical tools and integrations become valuable.",
            zh: "这篇文章把 Skill 生态看作一种早期平台机会。平台本身提供基础设施，第三方开发者提供具体能力，真正有价值的是把用户场景接进去。",
          },
          points: [
            {
              en: "Users pay for AI that can do work, not only chat.",
              zh: "用户需要的是能干活的 AI，而不只是会聊天的 AI。",
            },
            {
              en: "The entry barrier is often lower than people imagine.",
              zh: "很多 Skill 的门槛，可能比想象中低。",
            },
          ],
        },
        {
          title: { en: "Three possible paths", zh: "三种可能路径" },
          body: {
            en: "The article lays out three routes: building Skills, teaching others to build them, and providing integration services for real workflows.",
            zh: "文章整理了三条路径：直接开发 Skill，教别人开发 Skill，或者帮具体用户/团队做工作流集成。它更像一个理性入口，而不是鼓励盲目 All in。",
          },
          points: [
            {
              en: "Build a small useful Skill first.",
              zh: "先做一个小而有用的 Skill。",
            },
            {
              en: "Look for real repetitive workflows.",
              zh: "去找真实重复的工作流。",
            },
          ],
        },
      ],
    },
    {
      slug: "grass-stage-theory-risk",
      title: {
        en: "The Truth of Grass Stage Theory",
        zh: "草台班子理论的真相：为什么这个观点既对又危险",
      },
      date: "2026-03",
      status: { en: "Published on Zhihu", zh: "知乎已发布" },
      source: "zhihu",
      filters: ["growth", "zhihu"],
      relatedProject: {
        label: { en: "Project Lab", zh: "Project Lab" },
        href: "/lab",
      },
      tags: ["认知", "草台班子理论", "个人成长"],
      externalUrl: "https://zhuanlan.zhihu.com/p/2015181705862993549",
      externalLabel: { en: "Read on Zhihu", zh: "知乎原文" },
      summary: {
        en: "A reflection on why seeing imperfection can be liberating, but can also lead to arrogance if it stops at judgment.",
        zh: "关于“草台班子理论”的一篇反思：它能帮人破除权威滤镜，但如果只停留在看透和嘲讽，也会带来新的自我误判。",
      },
      notes: [
        {
          en: "The theory is useful when it removes fear.",
          zh: "这个观点有用的地方，是它能让人不再迷信权威。",
        },
        {
          en: "It becomes dangerous when it turns into easy arrogance.",
          zh: "危险的地方，是它也可能让人滑向轻易的狂妄。",
        },
        {
          en: "The better response is participation and building.",
          zh: "更好的回应，是参与和做事。",
        },
      ],
      next: {
        en: "Connect this reflection with project delivery and internship preparation.",
        zh: "后续可以把这个思考继续和项目交付、实习准备联系起来。",
      },
      sections: [
        {
          title: { en: "What it gets right", zh: "它说对了什么" },
          body: {
            en: "The idea is attractive because it reveals a truth: many systems are imperfect, and authority is often less complete than it looks from the outside.",
            zh: "这个观点之所以流行，是因为它确实说中了一部分现实：很多系统并不完美，很多权威也没有想象中那么完整。意识到这一点，可以减少恐惧。",
          },
          points: [
            {
              en: "Imperfection is normal.",
              zh: "不完美是常态。",
            },
            {
              en: "Authority can be understood, not worshiped.",
              zh: "权威可以被理解，而不是被迷信。",
            },
          ],
        },
        {
          title: { en: "Where it becomes risky", zh: "它危险在哪里" },
          body: {
            en: "The risk appears when insight becomes an excuse to stay outside. If everything is dismissed as a grass stage, it becomes harder to enter the game and build.",
            zh: "风险在于，看透之后，人可能反而停在场外。如果什么都被归为草台班子，就很容易只剩评价，而没有参与。",
          },
          points: [
            {
              en: "Seeing flaws is not the same as being able to build.",
              zh: "看见问题，不等于有能力把事情做成。",
            },
            {
              en: "The useful version of the idea should lead to action.",
              zh: "这个观点真正有用的版本，应该把人推向行动。",
            },
          ],
        },
      ],
    },
    {
      slug: "entry-revolution-distribution-over-tech",
      title: {
        en: "Entry Revolution: Why Distribution Innovation Can Matter More Than Technology Innovation",
        zh: "入口革命：为什么分发创新大于技术创新",
      },
      date: "2026-03",
      status: { en: "Published on Zhihu", zh: "知乎已发布" },
      source: "zhihu",
      filters: ["ai-application", "product-thinking", "zhihu"],
      relatedProject: {
        label: { en: "AI Campus Assistant", zh: "AI Campus Assistant" },
        href: "/#projects",
      },
      tags: ["AI", "产品思维", "用户体验", "入口"],
      externalUrl: "https://zhuanlan.zhihu.com/p/2019034233159570513",
      externalLabel: { en: "Read on Zhihu", zh: "知乎原文" },
      summary: {
        en: "A product-thinking essay on AI entry points, context switching, learning cost, and why tools become powerful when they appear where users already are.",
        zh: "一篇关于 AI 入口和产品分发的文章：工具真正进入用户日常，不只靠技术能力，也靠更低的切换成本和学习成本。",
      },
      notes: [
        {
          en: "Users often choose the path with the lowest friction.",
          zh: "用户很多时候会选择摩擦最低的路径。",
        },
        {
          en: "Putting AI into existing communication channels changes how people use it.",
          zh: "把 AI 放进已有沟通入口，会改变人们使用它的方式。",
        },
        {
          en: "Distribution can become a product advantage.",
          zh: "分发本身也可以成为产品优势。",
        },
      ],
      next: {
        en: "Use entry-point thinking when designing campus and local automation tools.",
        zh: "后续设计校园助手和本地自动化工具时，可以继续考虑入口问题。",
      },
      sections: [
        {
          title: { en: "The hidden cost of switching", zh: "被低估的切换成本" },
          body: {
            en: "The article starts from a simple scene: if a user is already in a chat app, leaving it to open another AI tool creates friction.",
            zh: "文章从一个很日常的场景开始：用户已经在微信里聊天，如果为了用 AI 还要退出、打开新软件、登录、输入问题，中间每一步都是摩擦。",
          },
          points: [
            {
              en: "A good entry point removes decisions.",
              zh: "好的入口会减少决策点。",
            },
            {
              en: "Lower friction can change adoption.",
              zh: "更低摩擦会改变使用率。",
            },
          ],
        },
        {
          title: { en: "Why entry points matter for AI", zh: "为什么入口对 AI 很重要" },
          body: {
            en: "AI capability matters, but capability only becomes useful when users can reach it inside their existing workflow.",
            zh: "AI 能力当然重要，但能力只有进入用户已有流程时，才更容易被真正使用。入口不是装饰，而是产品的一部分。",
          },
          points: [
            {
              en: "The best tool is often the one already nearby.",
              zh: "最容易被使用的工具，往往是离用户最近的那个。",
            },
            {
              en: "Product design is partly about reducing distance.",
              zh: "产品设计的一部分，就是缩短用户和能力之间的距离。",
            },
          ],
        },
      ],
    },
    {
      slug: "building-ai-campus-assistant",
      title: { en: "Building an AI Campus Assistant", zh: "构建 AI 校园助手" },
      date: "2026-06",
      status: { en: "Draft note", zh: "草稿笔记" },
      source: "project-note",
      filters: ["ai-application", "product-thinking"],
      relatedProject: {
        label: { en: "AI Campus Assistant", zh: "AI Campus Assistant" },
        href: "/#projects",
      },
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
      source: "project-note",
      filters: ["ai-application", "product-thinking"],
      relatedProject: {
        label: { en: "Wafer Case Study", zh: "Wafer 案例" },
        href: "/case-studies/wafer-defect-detection",
      },
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
      source: "project-note",
      filters: ["ai-application"],
      relatedProject: {
        label: { en: "Silicon Diaries", zh: "Silicon Diaries" },
        href: "/case-studies/silicon-diaries",
      },
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
      source: "project-note",
      filters: ["portfolio"],
      relatedProject: {
        label: { en: "Project Lab", zh: "Project Lab" },
        href: "/lab",
      },
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
          zh: "清楚的 TODO 能帮助后续继续推进。",
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
          title: { en: "Track the project boundary", zh: "记录项目边界" },
          body: {
            en: "Prototype projects are easier to continue when current ability, limitations, and next steps are written down.",
            zh: "原型项目需要说明当前能力、限制和下一步计划。",
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
      value: "Available via copy button",
      href: null,
    },
    {
      label: { en: "Resume", zh: "简历" },
      value: "Public Resume",
      href: "resume.md",
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
      eyebrow: { en: "Portfolio / Practical AI Systems", zh: "作品集 / 实用型 AI 系统" },
      viewProjects: { en: "View Projects", zh: "查看项目" },
      githubProfile: { en: "GitHub Profile", zh: "GitHub 主页" },
      currentFocus: { en: "Current Focus", zh: "当前关注" },
      focusTitle: { en: "Practical directions, not inflated claims", zh: "具体方向，而不是夸大包装" },
    },
    sections: {
      aboutEyebrow: { en: "About Me", zh: "关于我" },
      aboutTitle: {
        en: "CS foundations with practical AI system building.",
        zh: "计算机基础与实用型 AI 系统构建。",
      },
      baseLabel: { en: "Base", zh: "基础身份" },
      schoolLine: {
        en: "Computer Science and Technology, B.S. candidate. Expected graduation: 2027.",
        zh: "计算机科学与技术，本科。预计 2027 年毕业。",
      },
      featuredEyebrow: { en: "Featured Projects", zh: "精选项目" },
      featuredTitle: {
        en: "Featured projects with visible engineering work.",
        zh: "有工程痕迹的精选项目。",
      },
      featuredDescription: {
        en: "Three stronger entry points for visitors who want to inspect practical AI, vision, and course engineering work first.",
        zh: "给想先看重点项目的访客三个入口：实用 AI、视觉原型和课程工程实践。",
      },
      nowEyebrow: { en: "Now", zh: "现在" },
      nowTitle: {
        en: "What I am working on now.",
        zh: "我现在正在做什么。",
      },
      nowDescription: {
        en: "Current work is about making prototypes usable, reviewable, and honest about their limits.",
        zh: "当前重点是让原型可用、可检查，并诚实说明边界。",
      },
      projectsEyebrow: { en: "Projects", zh: "项目" },
      projectsTitle: {
        en: "Projects by problem, build, stack, and result.",
        zh: "按问题、构建、技术栈和结果展示项目。",
      },
      githubEyebrow: { en: "Public GitHub", zh: "公开 GitHub" },
      githubTitle: { en: "Public repositories.", zh: "公开仓库。" },
      githubDescription: {
        en: "Selected public repositories, languages, and recent updates.",
        zh: "公开仓库、主要语言和近期更新。",
      },
      skillsEyebrow: { en: "Skills", zh: "技能" },
      skillsTitle: {
        en: "Skills grouped by what they help me build.",
        zh: "按能力方向组织的技能。",
      },
      timelineEyebrow: { en: "Timeline", zh: "时间线" },
      timelineTitle: {
        en: "Path so far.",
        zh: "当前路径。",
      },
      blogEyebrow: { en: "Writing / Notes", zh: "写作 / 笔记" },
      blogTitle: { en: "Writing", zh: "写作" },
      blogDescription: {
        en: "A small supporting section for project notes and published essays.",
        zh: "作为辅助区块展示项目笔记和已发布文章。",
      },
      blogNextLabel: { en: "Next step", zh: "下一步" },
      blogReadLabel: { en: "Read note", zh: "阅读笔记" },
      blogAllLabel: { en: "View all writing", zh: "查看全部文章" },
      blogLatestLabel: { en: "Latest Writing", zh: "最新写作" },
      blogArchiveTitle: { en: "Writing Archive", zh: "文章归档" },
      blogArchiveDescription: {
        en: "Published Zhihu essays, original notes, and selected project writing.",
        zh: "知乎已发布文章、原创随笔和项目笔记。",
      },
      blogRelatedLabel: { en: "Related", zh: "关联" },
      backHome: { en: "Back to home", zh: "返回首页" },
      openRepository: { en: "Open repository", zh: "打开仓库" },
      evidenceEyebrow: { en: "Evidence", zh: "证据面板" },
      evidenceTitle: {
        en: "Evidence and next steps.",
        zh: "材料与下一步。",
      },
      evidenceDescription: {
        en: "Repository links, screenshots, TODOs, and next steps for each case study.",
        zh: "每个案例对应的仓库链接、截图、TODO 和下一步。",
      },
      openEvidence: { en: "Open evidence", zh: "打开证据" },
      codeEyebrow: { en: "Code Highlights", zh: "代码片段" },
      codeTitle: { en: "Implementation notes.", zh: "实现要点。" },
      codeDescription: {
        en: "Short snippets and engineering decisions from the project workflow.",
        zh: "项目流程中的关键片段和工程决策。",
      },
      labEyebrow: { en: "Project Lab / Experiments", zh: "项目实验室 / 实验记录" },
      labTitle: {
        en: "Project Lab.",
        zh: "项目实验室。",
      },
      labDescription: {
        en: "Selected coursework experiments across machine learning, computer construction, and software construction.",
        zh: "机器学习、计算机组成与软件构造方向的精选课程实验。",
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
        en: "Contact for feedback, internships, or project discussion.",
        zh: "欢迎就反馈、实习机会或项目讨论联系。",
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
        en: "Email is available through the copy button to reduce scraping. GitHub and the resume remain public links.",
        zh: "邮箱通过复制按钮提供，减少直接抓取。GitHub 和简历保持公开链接。",
      },
      resumeDescription: {
        en: "The public resume focuses on projects, skills, and education background only.",
        zh: "公开版简历，主要展示项目、技能和教育背景。",
      },
      emailDirect: { en: "Copy email", zh: "复制邮箱" },
      githubDirect: { en: "Open GitHub", zh: "打开 GitHub" },
      resumeDirect: { en: "Public Resume", zh: "公开版简历" },
      formNoteTitle: { en: "Contact note", zh: "联系说明" },
      formNoteBody: {
        en: "This first version does not use a fake inbox or database. Email, GitHub, and resume links are enough for public review.",
        zh: "第一版不做假的收件箱或数据库。邮箱、GitHub 和简历链接已经足够公开审阅。",
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
