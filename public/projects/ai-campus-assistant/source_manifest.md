# AI Campus Assistant Source Manifest

This public artifact mirrors the important implementation surfaces from the local prepared package. It is not the full standalone repository.

## Public Source Excerpt

- `source_excerpt.py`: compact source excerpt covering extraction, schema-shape validation, keyword retrieval, deterministic workflow orchestration, next actions, and prompt draft assembly.
- `task_record.schema.json`: structured task record shape used by the validator.
- `generated_workflow_output.json`: saved output from a deterministic local workflow run.
- `verification.md`: commands and observed local verification results.

## Local Full Package Contents

The local publish-ready package also contains:

- `demo.py`
- `pyproject.toml`
- `src/campus_assistant/extract.py`
- `src/campus_assistant/retrieve.py`
- `src/campus_assistant/validate.py`
- `src/campus_assistant/workflow.py`
- `knowledge_base/sample_faq.md`
- `schema/task_record.schema.json`
- `scripts/smoke_check.py`
- `scripts/run_checks.py`
- `tests/test_extract.py`
- workflow, RAG, prompt, and interview evidence docs

## Boundary

This public folder is evidence for the current implementation direction. It should not be described as a complete product, public standalone repository, autonomous agent, or deployed RAG service.
