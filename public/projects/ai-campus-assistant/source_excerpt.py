"""Public source excerpt for AI Campus Assistant.

This is a compact evidence artifact copied from the local prepared package. It is
not the full standalone repository layout.
"""

from __future__ import annotations

from dataclasses import dataclass
import json
from pathlib import Path
import re
from typing import Any


TIME_PATTERN = re.compile(
    r"((本周[一二三四五六日天]|下周[一二三四五六日天]|周[一二三四五六日天]|星期[一二三四五六日天])"
    r"(?:上午|下午|晚上)?\s*\d{1,2}[:：]\d{2}|"
    r"\d{1,2}\s*月\s*\d{1,2}\s*日(?:\s*\d{1,2}[:：]\d{2})?|"
    r"\d{1,2}[:：]\d{2}\s*前?)"
)
LOCATION_PATTERN = re.compile(r"([A-Z]?\d?[-－]?\d{3,4}|[A-Z]\d[-－]\d{3,4}|T\d[-－]\d{3,4})")
SOURCE_PATTERN = re.compile(r"(课程平台|教务系统|报名链接|问卷星|飞书|腾讯文档|邮箱)")


def extract_task(text: str) -> dict[str, Any]:
    normalized = " ".join(text.strip().split())
    deadline_match = TIME_PATTERN.search(normalized)
    location_match = LOCATION_PATTERN.search(normalized)
    source_match = SOURCE_PATTERN.search(normalized)

    action_required = _guess_action(normalized)
    title = _guess_title(normalized, action_required)

    confidence = "medium" if deadline_match or action_required else "low"
    notes = []
    if deadline_match and any(token in deadline_match.group(1) for token in ("本周", "下周", "周", "星期")):
        notes.append("Relative date needs conversion based on message date.")
    if not source_match:
        notes.append("Source channel is not explicit.")

    return {
        "title": title,
        "deadline": deadline_match.group(1) if deadline_match else None,
        "location": location_match.group(1) if location_match else None,
        "source": source_match.group(1) if source_match else None,
        "action_required": action_required,
        "confidence": confidence,
        "notes": " ".join(notes) if notes else None,
    }


def _guess_action(text: str) -> str | None:
    patterns = [
        r"(完成[^，。；;]*提交)",
        r"(提交[^，。；;]*)",
        r"(报名参加)",
        r"(报名[^，。；;]*)",
        r"(参加[^，。；;]*)",
        r"(填写[^，。；;]*)",
    ]
    for pattern in patterns:
        match = re.search(pattern, text)
        if match:
            return match.group(1).strip()
    return None


def _guess_title(text: str, action: str | None) -> str:
    if "实验报告" in text:
        return "课程实验报告提交"
    if "分享会" in text:
        return "项目分享会"
    if action:
        return action[:24]
    return text[:24]


def validate_task_record(record: dict[str, Any], schema: dict[str, Any]) -> list[str]:
    errors: list[str] = []
    required = set(schema.get("required", []))
    properties = schema.get("properties", {})

    for field in sorted(required - set(record)):
        errors.append(f"missing required field: {field}")

    if schema.get("additionalProperties") is False:
        for field in sorted(set(record) - set(properties)):
            errors.append(f"unexpected field: {field}")

    for field, value in record.items():
        field_schema = properties.get(field)
        if not field_schema:
            continue
        expected_type = field_schema.get("type")
        if expected_type and not _matches_type(value, expected_type):
            errors.append(f"{field} has invalid type")
        allowed = field_schema.get("enum")
        if allowed and value not in allowed:
            errors.append(f"{field} has invalid enum value: {value}")

    return errors


def _matches_type(value: Any, expected_type: str | list[str]) -> bool:
    expected = [expected_type] if isinstance(expected_type, str) else expected_type
    return any(_matches_single_type(value, item) for item in expected)


def _matches_single_type(value: Any, expected_type: str) -> bool:
    if expected_type == "null":
        return value is None
    if expected_type == "string":
        return isinstance(value, str)
    if expected_type == "object":
        return isinstance(value, dict)
    if expected_type == "array":
        return isinstance(value, list)
    if expected_type == "number":
        return isinstance(value, int | float) and not isinstance(value, bool)
    if expected_type == "integer":
        return isinstance(value, int) and not isinstance(value, bool)
    if expected_type == "boolean":
        return isinstance(value, bool)
    return True


@dataclass(frozen=True)
class KnowledgeChunk:
    source: str
    index: int
    text: str
    score: int = 0

    def as_dict(self) -> dict[str, Any]:
        return {"source": self.source, "index": self.index, "text": self.text, "score": self.score}


def load_markdown_chunks(path: Path) -> list[KnowledgeChunk]:
    paragraphs = [part.strip() for part in re.split(r"\n\s*\n", path.read_text(encoding="utf-8"))]
    chunks: list[KnowledgeChunk] = []
    for paragraph in paragraphs:
        text = _clean_markdown(paragraph)
        if text:
            chunks.append(KnowledgeChunk(source=path.name, index=len(chunks), text=text))
    return chunks


def retrieve(query: str, chunks: list[KnowledgeChunk], *, top_k: int = 3) -> list[KnowledgeChunk]:
    query_terms = _terms(query)
    ranked: list[KnowledgeChunk] = []
    for chunk in chunks:
        score = len(query_terms & _terms(chunk.text))
        if score:
            ranked.append(KnowledgeChunk(chunk.source, chunk.index, chunk.text, score))
    ranked.sort(key=lambda item: (-item.score, -len(item.text), item.source, item.index))
    return ranked[:top_k]


def answer_question(query: str, chunks: list[KnowledgeChunk], *, top_k: int = 3) -> dict[str, Any]:
    matches = retrieve(query, chunks, top_k=top_k)
    answer = f"根据知识库：{matches[0].text}" if matches else "知识库中没有找到足够相关的信息，需要补充校园 FAQ 或通知材料。"
    return {"query": query, "answer": answer, "contexts": [item.as_dict() for item in matches]}


def run_workflow(message: str, chunks: list[KnowledgeChunk], schema: dict[str, Any]) -> dict[str, Any]:
    task = extract_task(message)
    validation_errors = validate_task_record(task, schema)
    retrieval_query = " ".join(str(task.get(key) or "") for key in ("title", "action_required", "source")).strip()
    retrieval = answer_question(retrieval_query or message[:40], chunks)
    return {
        "input": message,
        "task": task,
        "validation": {"ok": not validation_errors, "errors": validation_errors},
        "retrieval_query": retrieval_query,
        "retrieval": retrieval,
        "next_actions": _build_next_actions(task, bool(retrieval["contexts"])),
        "llm_prompt_draft": build_llm_prompt(message, task, retrieval),
        "status": "local deterministic workflow; LLM API adapter not configured",
    }


def build_llm_prompt(message: str, task: dict[str, Any], retrieval: dict[str, Any]) -> str:
    contexts = "\n".join(f"- {item['source']}#{item['index']}: {item['text']}" for item in retrieval["contexts"])
    return (
        "You are a campus assistant. Use only the extracted task and retrieved context. "
        "Return a concise reminder and list any missing information.\n\n"
        f"Original message:\n{message}\n\n"
        f"Extracted task:\n{json.dumps(task, ensure_ascii=False, indent=2)}\n\n"
        f"Retrieved context:\n{contexts or 'No matching context.'}\n"
    )


def _build_next_actions(task: dict[str, Any], has_context: bool) -> list[str]:
    actions: list[str] = []
    if task.get("action_required"):
        actions.append(f"确认并处理：{task['action_required']}")
    if task.get("deadline"):
        actions.append(f"记录截止时间：{task['deadline']}")
    if task.get("location"):
        actions.append(f"确认地点：{task['location']}")
    if not has_context:
        actions.append("补充校园 FAQ 或通知材料后再检索")
    return actions or ["人工复核原消息，补充任务字段"]


def _clean_markdown(text: str) -> str:
    text = re.sub(r"^#+\s*", "", text.strip())
    text = re.sub(r"\s+", " ", text)
    return text.strip("- ")


def _terms(text: str) -> set[str]:
    lowered = text.lower()
    terms = set(re.findall(r"[a-z0-9]+", lowered))
    for run in re.findall(r"[\u4e00-\u9fff]{2,}", lowered):
        terms.add(run)
        terms.update(run[index : index + 2] for index in range(len(run) - 1))
        terms.update(run[index : index + 3] for index in range(len(run) - 2))
    return terms
