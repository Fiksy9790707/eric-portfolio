# Eric Feng / 冯学诚

Computer Science undergraduate at Harbin Institute of Technology, Shenzhen  
Target: AI Agent / LLM Applications / RAG / Computer Vision engineering practice  
GitHub: https://github.com/Fiksy9790707  
Portfolio: https://eric-portfolio-weld.vercel.app  
Email: available through the portfolio copy button

## Education

Harbin Institute of Technology, Shenzhen  
B.S. candidate, Computer Science and Technology  
Expected graduation: 2028

Relevant coursework: Data Structures, Algorithm Analysis, Digital Logic, Probability and Statistics, Formal Languages and Automata, Machine Learning.

## Selected Projects

### AI Campus Assistant

- Problem: campus notices, deadlines, courses, and activities are scattered and hard to turn into action items.
- Built: a work-in-progress local workflow for extracting task title, deadline, location, source, action item, confidence, and notes from campus messages, plus validation, FAQ retrieval, next actions, and an LLM prompt draft.
- Evidence: local demo, JSON schema, schema-shape validator, sample messages, generated extraction / retrieval / workflow outputs, prompt draft, workflow docs, smoke checks, and publish-ready package prepared.
- Status: local demo prepared; GitHub repository planned as `AI-Campus-Assistant`.
- Stack: Python, prompt engineering, structured output, local FAQ retrieval, deterministic workflow orchestration.

### Wafer Defect Detection System

- Problem: industrial-style defect inspection needs a path from model training to a usable local demo, not only a notebook result.
- Built: a YOLOv8 and Streamlit prototype direction for image upload, detection preview, CSV export, and Windows local delivery.
- Evidence: public repository, UI screenshot, architecture visual, dependency notes, public boundary note, and sanitized toy post-processing example for coordinate shifting and NMS.
- Status: prototype / documented case study. Full original source code and private data are not public.
- Stack: YOLOv8, Python, OpenCV, Streamlit, Aliyun PAI, PyInstaller-oriented delivery.

Repository: https://github.com/Fiksy9790707/Wafer-Defect-Detection-System

### Second-Brain-Local

- Problem: personal notes need a local, privacy-friendly retrieval workflow before becoming a useful local LLM assistant.
- Built: a minimal retrieval baseline that loads Markdown notes, chunks content, scores keyword overlap, and returns JSON with query, draft answer, retrieved contexts, and optional Ollama fallback metadata.
- Evidence: public repository with `demo.py`, `src/second_brain_local/retrieval.py`, `src/second_brain_local/ollama_client.py`, examples, tests, and an honest README.
- Status: experimental / minimal demo. Optional Ollama generation adapter is implemented with fallback behavior; ChromaDB persistence and Streamlit UI are next steps.
- Stack: Python, local retrieval baseline, optional Ollama adapter, RAG workflow.

Repository: https://github.com/Fiksy9790707/Second-Brain-Local

### Family Health AI

- Problem: family health records need local-first organization, reminders, and clear safety boundaries.
- Built: a local-first prototype using SQLite records, FastAPI endpoints, rule reminders, and doctor/family style summaries.
- Evidence: public repository with README, safety boundaries, CLI/web usage notes, and packaging documentation.
- Status: prototype / local-first system experiment.
- Stack: Python, FastAPI, SQLite, PWA, rules and templates.

Repository: https://github.com/Fiksy9790707/family-health-ai-agent

### Silicon Diaries

- Problem: local system monitoring can become more understandable when system signals are summarized into readable logs.
- Built: an experimental local automation workflow using Python, psutil, prompt construction, and Ollama-style local generation.
- Evidence: public repository with project structure, quickstart, limitations, and local LLM automation notes.
- Status: experimental local demo.
- Stack: Python, Ollama, psutil, local LLM workflow.

Repository: https://github.com/Fiksy9790707/Silicon-Diaries

## Skills

- Languages: Python, TypeScript / JavaScript, C / C++, Verilog.
- AI / LLM: LLM API, prompt engineering, structured output, RAG workflow, Ollama experiments, LangChain basics.
- Computer Vision: YOLOv8 / YOLOv5, OpenCV, image slicing, small-object detection, detection result post-processing.
- Engineering / Tools: FastAPI, Streamlit, SQLite, Git, Linux, Docker, PyInstaller, Vercel, NumPy / Pandas.

## Public Boundary

This is a public resume for portfolio review. It intentionally omits phone number, address, full student ID, private accounts, and secret keys.

Project descriptions are kept conservative: prototype, experimental, planned, and TODO labels are used when evidence is partial or still being built.
