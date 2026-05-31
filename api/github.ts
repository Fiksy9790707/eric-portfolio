import type { VercelRequest, VercelResponse } from "./_types";
import { profile } from "../src/data/profile";
import type { GitHubApiResponse, PublicRepository } from "../src/types/profile";

type GitHubUser = {
  login: string;
  html_url: string;
  avatar_url: string;
  public_repos: number;
  followers: number;
  following: number;
};

type GitHubRepo = {
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  topics?: string[];
  fork: boolean;
};

const fallbackResponse = (warning: string): GitHubApiResponse => ({
  ok: true,
  service: "portfolio-github",
  source: "fallback",
  warning,
  profile: {
    username: profile.github.username,
    profileUrl: profile.github.profileUrl,
    avatarUrl: profile.github.avatarUrl,
    publicRepos: profile.github.repositories.length,
    followers: 0,
    following: 0,
  },
  repositories: profile.github.repositories,
});

const normalizeRepository = (repo: GitHubRepo): PublicRepository => ({
  name: repo.name,
  url: repo.html_url,
  description: repo.description,
  language: repo.language,
  stars: repo.stargazers_count,
  forks: repo.forks_count,
  updatedAt: repo.updated_at,
  topics: repo.topics ?? [],
  isFork: repo.fork,
});

export default async function handler(request: VercelRequest, response: VercelResponse) {
  if (request.method !== "GET") {
    response.setHeader("Allow", "GET");
    response.status(405).json({ ok: false, message: "Method not allowed" });
    return;
  }

  try {
    const headers = {
      Accept: "application/vnd.github+json",
      "User-Agent": "eric-portfolio-public-api",
    };
    const [userResponse, reposResponse] = await Promise.all([
      fetch(`https://api.github.com/users/${profile.github.username}`, { headers }),
      fetch(`https://api.github.com/users/${profile.github.username}/repos?per_page=100&sort=updated`, {
        headers,
      }),
    ]);

    if (!userResponse.ok || !reposResponse.ok) {
      const status = !userResponse.ok ? userResponse.status : reposResponse.status;
      response
        .status(200)
        .json(fallbackResponse(`GitHub public API returned ${status}; fallback data served.`));
      return;
    }

    const user = (await userResponse.json()) as GitHubUser;
    const repos = (await reposResponse.json()) as GitHubRepo[];
    const repositories = repos
      .map(normalizeRepository)
      .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());

    response.status(200).json({
      ok: true,
      service: "portfolio-github",
      source: "live",
      profile: {
        username: user.login,
        profileUrl: user.html_url,
        avatarUrl: user.avatar_url,
        publicRepos: user.public_repos,
        followers: user.followers,
        following: user.following,
      },
      repositories,
    } satisfies GitHubApiResponse);
  } catch {
    response.status(200).json(fallbackResponse("GitHub public API request failed; fallback data served."));
  }
}
