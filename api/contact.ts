import type { VercelRequest, VercelResponse } from "./_types";

type ContactBody = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function readBody(body: VercelRequest["body"]): ContactBody {
  if (typeof body === "string") {
    try {
      return JSON.parse(body) as ContactBody;
    } catch {
      return {};
    }
  }

  if (body && typeof body === "object") {
    return body as ContactBody;
  }

  return {};
}

export default function handler(request: VercelRequest, response: VercelResponse) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    response.status(405).json({ ok: false, message: "Method not allowed" });
    return;
  }

  const body = readBody(request.body);
  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!name || !email || !message) {
    response.status(400).json({ ok: false, message: "Please complete name, email, and message." });
    return;
  }

  if (!emailPattern.test(email)) {
    response.status(400).json({ ok: false, message: "Please enter a valid email address." });
    return;
  }

  if (message.length < 10) {
    response.status(400).json({ ok: false, message: "Message is too short to be useful." });
    return;
  }

  // TODO: Connect Resend, SendGrid, or another email provider here after adding
  // server-side environment variables in Vercel. Do not expose API keys to the client.
  response.status(200).json({
    ok: true,
    message: "Message received. This first version is a demo placeholder and does not send email yet.",
  });
}
