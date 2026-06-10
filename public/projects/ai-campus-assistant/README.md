# AI Campus Assistant Evidence Artifact

This folder is a public evidence artifact for a work-in-progress AI Campus Assistant prototype. It is not the full standalone project repository yet.

## What This Proves

The local package currently contains a deterministic workflow that can:

- extract task fields from a sanitized campus message;
- validate the extracted task record against a JSON Schema-style shape;
- retrieve related FAQ context from a sanitized Markdown knowledge base;
- return next actions for the student;
- assemble a prompt draft for a future optional LLM API adapter.

## Current Public Evidence

- `generated_workflow_output.json`: saved output from the end-to-end local workflow.
- `verification.md`: local verification commands and observed results.

## Safe Claim

A safe public claim is:

> Built a work-in-progress campus information workflow prototype with local structured extraction, schema validation, FAQ retrieval, deterministic next actions, and a prompt draft for a future optional LLM adapter.

## Boundary

Do not treat this as evidence of a completed autonomous agent, production RAG system, measured extraction accuracy, online deployment, or a public standalone repository. The full `AI-Campus-Assistant` repository is still planned.
