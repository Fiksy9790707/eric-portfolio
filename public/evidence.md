# Public Evidence Index

This page maps portfolio and resume claims to visible public evidence. It is intentionally conservative and separates implemented work from planned next steps.

## AI Campus Assistant

Status: local demo prepared, public repository planned.

Visible evidence currently prepared locally:

- `demo.py`: local structured extraction demo
- `src/campus_assistant/extract.py`: rule-based extraction baseline
- `schema/task_record.schema.json`: structured output fields
- `examples/generated_output.json`: sample output
- `prompts/ddl_extraction_prompt.md`: prompt direction
- `docs/workflow.md`: workflow plan
- `docs/rag_plan.md`: planned RAG direction
- `scripts/smoke_check.py`: local smoke verification

Safe public claim: work-in-progress campus information extraction prototype with a local structured-output baseline.

Avoid claiming: completed LLM agent, production RAG system, measured extraction accuracy, online deployment.

## Wafer Defect Detection System

Repository: https://github.com/Fiksy9790707/Wafer-Defect-Detection-System

Visible evidence:

- README case study and architecture notes
- UI screenshot and architecture visual
- `examples/toy_postprocess.py`: sanitized toy coordinate-shifting and NMS example
- `docs/public_evidence_note.md`: public/private evidence boundary

Safe public claim: prototype / documented case study for YOLOv8-style defect detection and local delivery workflow.

Avoid claiming: production validation, private dataset details, unverified metrics.

## Second-Brain-Local

Repository: https://github.com/Fiksy9790707/Second-Brain-Local

Visible evidence:

- `demo.py`: minimal local retrieval demo with optional `--use-ollama` path
- `src/second_brain_local/retrieval.py`: Markdown loading, chunking, keyword scoring, JSON answer shape
- `src/second_brain_local/ollama_client.py`: optional Ollama generation adapter with fallback handling
- `examples/sample_notes.md`: sample notes
- `tests/test_retrieval.py`: retrieval and prompt-assembly smoke tests
- README with current limitations and roadmap

Safe public claim: minimal local retrieval baseline for a personal knowledge-base / RAG workflow, with an optional Ollama adapter and fallback behavior.

Avoid claiming: ChromaDB persistence, production retrieval quality, full RAG product, always-on local LLM service.

## Family Health AI

Repository: https://github.com/Fiksy9790707/family-health-ai-agent

Visible evidence:

- README safety boundary
- FastAPI / SQLite / PWA direction
- rule reminders and summary generation notes
- packaging and local usage documentation

Safe public claim: local-first health information management prototype with clear non-medical-decision boundaries.

Avoid claiming: medical diagnosis, production healthcare system, unreviewed medical automation.

## Silicon Diaries

Repository: https://github.com/Fiksy9790707/Silicon-Diaries

Visible evidence:

- README quickstart and project structure
- local LLM automation notes
- psutil / Ollama / dashboard direction
- current limitations

Safe public claim: experimental local LLM system-monitoring diary prototype.

Avoid claiming: stable productivity tool, private-data-safe publication of raw logs, production daemon.

## Current Portfolio Priority

1. Publish `AI-Campus-Assistant` as a public GitHub repository.
2. Add ChromaDB persistence or a small UI to `Second-Brain-Local` after the current Ollama fallback adapter.
3. Add a sanitized visual example or GIF to `Wafer Defect Detection System`.
4. Keep public resume and GitHub profile aligned with repository evidence.
