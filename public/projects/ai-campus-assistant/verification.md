# AI Campus Assistant Verification Notes

These notes summarize local verification for the prepared AI Campus Assistant package.

## Local Commands Run

```bash
python -m compileall -q src demo.py scripts tests
python scripts/smoke_check.py
python scripts/run_checks.py
python demo.py --workflow --text "请同学们在本周五 18:00 前完成课程实验报告提交，提交入口为课程平台。"
```

## Observed Results

- `compileall` completed successfully.
- `scripts/smoke_check.py` printed `ai-campus-smoke-ok`.
- `scripts/run_checks.py` printed `ai-campus-checks-ok`.
- The workflow demo returned:
  - extracted task fields;
  - `validation.ok=true`;
  - retrieved FAQ contexts from `sample_faq.md`;
  - next actions;
  - an LLM prompt draft;
  - status: `local deterministic workflow; LLM API adapter not configured`.

## Evidence Boundary

This verification covers the deterministic local workflow only. It does not verify an online deployment, autonomous agent behavior, production RAG quality, real campus data coverage, or a configured LLM API adapter.
