import { profile } from "../data/profile";
import type { ContactPayload, ContactResponse, GitHubApiResponse } from "../types/profile";

const fallbackGitHubResponse: GitHubApiResponse = {
  ok: true,
  service: "portfolio-github",
  source: "fallback",
  warning: "Using bundled public repository fallback data.",
  profile: {
    username: profile.github.username,
    profileUrl: profile.github.profileUrl,
    avatarUrl: profile.github.avatarUrl,
    publicRepos: profile.github.repositories.length,
    followers: 0,
    following: 0,
  },
  repositories: profile.github.repositories,
};

export async function fetchGitHubActivity(): Promise<GitHubApiResponse> {
  try {
    const response = await fetch("/api/github");
    if (!response.ok) {
      throw new Error(`GitHub API route returned ${response.status}`);
    }

    return (await response.json()) as GitHubApiResponse;
  } catch {
    return fallbackGitHubResponse;
  }
}

export async function sendContactMessage(payload: ContactPayload): Promise<ContactResponse> {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = (await response.json().catch(() => ({
    ok: false,
    message: "Contact API is unavailable. Please try again later.",
  }))) as ContactResponse;

  if (!response.ok) {
    return {
      ok: false,
      message: data.message || "Contact API is unavailable. Please try again later.",
    };
  }

  return data;
}
