import type { PortfolioProfile } from "../types/profile";

export const getContactEmail = (profile: PortfolioProfile) =>
  `${profile.identity.emailUserParts.join("")}@${profile.identity.emailDomainParts.join(".")}`;

export const getMaskedEmail = (profile: PortfolioProfile) =>
  `${profile.identity.emailUserParts[0] ?? ""}***@${profile.identity.emailDomainParts.join(".")}`;
